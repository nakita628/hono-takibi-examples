import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const TStampSchema = z.iso.datetime({ offset: true }).openapi('TStamp')

const PendingMaintenanceActionSchema = z
  .object({
    Action: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of pending maintenance action that is available for the resource.',
        }),
    ).exactOptional(),
    AutoAppliedAfterDate: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date of the maintenance window when the action is to be applied. The maintenance action is applied to the resource during its first maintenance window after this date. If this date is specified, any <code>next-maintenance</code> opt-in requests are ignored.',
        }),
    ).exactOptional(),
    ForcedApplyDate: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date when the maintenance action will be automatically applied. The maintenance action is applied to the resource on this date regardless of the maintenance window for the resource. If this date is specified, any <code>immediate</code> opt-in requests are ignored.',
        }),
    ).exactOptional(),
    OptInStatus: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of opt-in request that has been received for the resource.',
        }),
    ).exactOptional(),
    CurrentApplyDate: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The effective date when the pending maintenance action will be applied to the resource. This date takes into account opt-in requests received from the <code>ApplyPendingMaintenanceAction</code> API operation, and also the <code>AutoAppliedAfterDate</code> and <code>ForcedApplyDate</code> parameter values. This value is blank if an opt-in request has not been received and nothing has been specified for <code>AutoAppliedAfterDate</code> or <code>ForcedApplyDate</code>.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A description providing more detail about the maintenance action.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes a maintenance action pending for an DMS resource, including when and how it will be applied. This data type is a response element to the <code>DescribePendingMaintenanceActions</code> operation.',
    required: [],
  })
  .openapi('PendingMaintenanceAction')

const PendingMaintenanceActionDetailsSchema = z
  .array(PendingMaintenanceActionSchema)
  .openapi('PendingMaintenanceActionDetails')

const ResourcePendingMaintenanceActionsSchema = z
  .object({
    ResourceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the DMS resource that the pending maintenance action applies to. For information about creating an ARN, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Introduction.AWS.ARN.html"> Constructing an Amazon Resource Name (ARN) for DMS</a> in the DMS documentation.',
        }),
    ).exactOptional(),
    PendingMaintenanceActionDetails: PendingMaintenanceActionDetailsSchema.and(
      z
        .any()
        .openapi({ description: 'Detailed information about the pending maintenance action.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Identifies an DMS resource and any pending actions for it.',
    required: [],
  })
  .openapi('ResourcePendingMaintenanceActions')

type PendingMaintenanceActionsType = z.infer<typeof ResourcePendingMaintenanceActionsSchema>[]

const AddTagsToResourceResponseSchema = z
  .object({})
  .openapi({ example: {}, description: '<p/>' })
  .openapi('AddTagsToResourceResponse')

const TagSchema = z
  .object({
    Key: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A key is the required name of the tag. The string value can be 1-128 Unicode characters in length and can't be prefixed with \"aws:\" or \"dms:\". The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regular expressions: \"^([\\\\p{L}\\\\p{Z}\\\\p{N}_.:/=+\\\\-]*)$\").",
        }),
    ).exactOptional(),
    Value: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A value is the optional value of the tag. The string value can be 1-256 Unicode characters in length and can't be prefixed with \"aws:\" or \"dms:\". The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regular expressions: \"^([\\\\p{L}\\\\p{Z}\\\\p{N}_.:/=+\\\\-]*)$\").",
        }),
    ).exactOptional(),
    ResourceArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) string that uniquely identifies the resource for which the tag is created.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A user-defined key-value pair that describes metadata added to an DMS resource and that is used by operations such as the following:</p> <ul> <li> <p> <code>AddTagsToResource</code> </p> </li> <li> <p> <code>ListTagsForResource</code> </p> </li> <li> <p> <code>RemoveTagsFromResource</code> </p> </li> </ul>',
    required: [],
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).openapi('TagList')

const AddTagsToResourceMessageSchema = z
  .object({
    ResourceArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Identifies the DMS resource to which tags should be added. The value for this parameter is an Amazon Resource Name (ARN).</p> <p>For DMS, you can tag a replication instance, an endpoint, or a replication task.</p>',
        }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'One or more tags to be assigned to the resource.' }),
    ),
  })
  .openapi({
    required: ['ResourceArn', 'Tags'],
    title: 'AddTagsToResourceMessage',
    description: 'Associates a set of tags with an DMS resource.',
  })
  .openapi('AddTagsToResourceMessage')

const ResourceNotFoundFaultSchema = z.any().openapi('ResourceNotFoundFault')

const ApplyPendingMaintenanceActionResponseSchema = z
  .object({
    ResourcePendingMaintenanceActions: ResourcePendingMaintenanceActionsSchema.and(
      z
        .any()
        .openapi({
          description: 'The DMS resource that the pending maintenance action will be applied to.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('ApplyPendingMaintenanceActionResponse')

const ApplyPendingMaintenanceActionMessageSchema = z
  .object({
    ReplicationInstanceArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the DMS resource that the pending maintenance action applies to.',
        }),
    ),
    ApplyAction: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The pending maintenance action to apply to this resource.</p> <p>Valid values: <code>os-upgrade</code>, <code>system-update</code>, <code>db-upgrade</code> </p>',
        }),
    ),
    OptInType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A value that specifies the type of opt-in request, or undoes an opt-in request. You can't undo an opt-in request of type <code>immediate</code>.</p> <p>Valid values:</p> <ul> <li> <p> <code>immediate</code> - Apply the maintenance action immediately.</p> </li> <li> <p> <code>next-maintenance</code> - Apply the maintenance action during the next maintenance window for the resource.</p> </li> <li> <p> <code>undo-opt-in</code> - Cancel any existing <code>next-maintenance</code> opt-in requests.</p> </li> </ul>",
        }),
    ),
  })
  .openapi({
    required: ['ReplicationInstanceArn', 'ApplyAction', 'OptInType'],
    title: 'ApplyPendingMaintenanceActionMessage',
    description: '<p/>',
  })
  .openapi('ApplyPendingMaintenanceActionMessage')

const BatchStartRecommendationsErrorEntrySchema = z
  .object({
    DatabaseId: StringSchema.and(
      z.any().openapi({ description: 'The identifier of the source database.' }),
    ).exactOptional(),
    Message: StringSchema.and(
      z.any().openapi({ description: 'The information about the error.' }),
    ).exactOptional(),
    Code: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The code of an error that occurred during the analysis of the source database.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about the errors that occurred during the analysis of the source database.',
    required: [],
  })
  .openapi('BatchStartRecommendationsErrorEntry')

const BatchStartRecommendationsErrorEntryListSchema = z
  .array(BatchStartRecommendationsErrorEntrySchema)
  .openapi('BatchStartRecommendationsErrorEntryList')

const BatchStartRecommendationsResponseSchema = z
  .object({
    ErrorEntries: BatchStartRecommendationsErrorEntryListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list with error details about the analysis of each source database.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchStartRecommendationsResponse')

const RecommendationSettingsSchema = z
  .object({
    InstanceSizingType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The size of your target instance. Fleet Advisor calculates this value based on your data collection type, such as total capacity and resource utilization. Valid values include <code>"total-capacity"</code> and <code>"utilization"</code>.',
        }),
    ),
    WorkloadType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The deployment option for your target engine. For production databases, Fleet Advisor chooses Multi-AZ deployment. For development or test databases, Fleet Advisor chooses Single-AZ deployment. Valid values include <code>"development"</code> and <code>"production"</code>.',
        }),
    ),
  })
  .openapi({
    required: ['InstanceSizingType', 'WorkloadType'],
    description: 'Provides information about the required target engine settings.',
  })
  .openapi('RecommendationSettings')

const StartRecommendationsRequestEntrySchema = z
  .object({
    DatabaseId: StringSchema.and(
      z.any().openapi({ description: 'The identifier of the source database.' }),
    ),
    Settings: RecommendationSettingsSchema.and(
      z.any().openapi({ description: 'The required target engine settings.' }),
    ),
  })
  .openapi({
    required: ['DatabaseId', 'Settings'],
    description:
      'Provides information about the source database to analyze and provide target recommendations according to the specified requirements.',
  })
  .openapi('StartRecommendationsRequestEntry')

const StartRecommendationsRequestEntryListSchema = z
  .array(StartRecommendationsRequestEntrySchema)
  .openapi('StartRecommendationsRequestEntryList')

const BatchStartRecommendationsRequestSchema = z
  .object({
    Data: StartRecommendationsRequestEntryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides information about source databases to analyze. After this analysis, Fleet Advisor recommends target engines for each source database.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'BatchStartRecommendationsRequest', required: [] })
  .openapi('BatchStartRecommendationsRequest')

const InvalidResourceStateFaultSchema = z.any().openapi('InvalidResourceStateFault')

const AccessDeniedFaultSchema = z.any().openapi('AccessDeniedFault')

const IntegerSchema = z.int().openapi('Integer')

const ReplicationTaskAssessmentRunProgressSchema = z
  .object({
    IndividualAssessmentCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of individual assessments that are specified to run.',
        }),
    ).exactOptional(),
    IndividualAssessmentCompletedCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of individual assessments that have completed, successfully or not.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The progress values reported by the <code>AssessmentProgress</code> response element.',
    required: [],
  })
  .openapi('ReplicationTaskAssessmentRunProgress')

const ReplicationTaskAssessmentRunSchema = z
  .object({
    ReplicationTaskAssessmentRunArn: StringSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of this assessment run.' }),
    ).exactOptional(),
    ReplicationTaskArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of the migration task associated with this premigration assessment run.',
        }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Assessment run status. </p> <p>This status can have one of the following values:</p> <ul> <li> <p> <code>"cancelling"</code> – The assessment run was canceled by the <code>CancelReplicationTaskAssessmentRun</code> operation.</p> </li> <li> <p> <code>"deleting"</code> – The assessment run was deleted by the <code>DeleteReplicationTaskAssessmentRun</code> operation.</p> </li> <li> <p> <code>"failed"</code> – At least one individual assessment completed with a <code>failed</code> status.</p> </li> <li> <p> <code>"error-provisioning"</code> – An internal error occurred while resources were provisioned (during <code>provisioning</code> status).</p> </li> <li> <p> <code>"error-executing"</code> – An internal error occurred while individual assessments ran (during <code>running</code> status).</p> </li> <li> <p> <code>"invalid state"</code> – The assessment run is in an unknown state.</p> </li> <li> <p> <code>"passed"</code> – All individual assessments have completed, and none has a <code>failed</code> status.</p> </li> <li> <p> <code>"provisioning"</code> – Resources required to run individual assessments are being provisioned.</p> </li> <li> <p> <code>"running"</code> – Individual assessments are being run.</p> </li> <li> <p> <code>"starting"</code> – The assessment run is starting, but resources are not yet being provisioned for individual assessments.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ReplicationTaskAssessmentRunCreationDate: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Date on which the assessment run was created using the <code>StartReplicationTaskAssessmentRun</code> operation.',
        }),
    ).exactOptional(),
    AssessmentProgress: ReplicationTaskAssessmentRunProgressSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indication of the completion progress for the individual assessments specified to run.',
        }),
    ).exactOptional(),
    LastFailureMessage: StringSchema.and(
      z
        .any()
        .openapi({ description: 'Last message generated by an individual assessment failure.' }),
    ).exactOptional(),
    ServiceAccessRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of the service role used to start the assessment run using the <code>StartReplicationTaskAssessmentRun</code> operation. The role must allow the <code>iam:PassRole</code> action.',
        }),
    ).exactOptional(),
    ResultLocationBucket: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Amazon S3 bucket where DMS stores the results of this assessment run.',
        }),
    ).exactOptional(),
    ResultLocationFolder: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Folder in an Amazon S3 bucket where DMS stores the results of this assessment run.',
        }),
    ).exactOptional(),
    ResultEncryptionMode: StringSchema.and(
      z
        .any()
        .openapi({ description: 'Encryption mode used to encrypt the assessment run results.' }),
    ).exactOptional(),
    ResultKmsKeyArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'ARN of the KMS encryption key used to encrypt the assessment run results.',
        }),
    ).exactOptional(),
    AssessmentRunName: StringSchema.and(
      z.any().openapi({ description: 'Unique name of the assessment run.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Provides information that describes a premigration assessment run that you have started using the <code>StartReplicationTaskAssessmentRun</code> operation.</p> <p>Some of the information appears based on other operations that can return the <code>ReplicationTaskAssessmentRun</code> object.</p>',
    required: [],
  })
  .openapi('ReplicationTaskAssessmentRun')

const CancelReplicationTaskAssessmentRunResponseSchema = z
  .object({
    ReplicationTaskAssessmentRun: ReplicationTaskAssessmentRunSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ReplicationTaskAssessmentRun</code> object for the canceled assessment run.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('CancelReplicationTaskAssessmentRunResponse')

const CancelReplicationTaskAssessmentRunMessageSchema = z
  .object({
    ReplicationTaskAssessmentRunArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Resource Name (ARN) of the premigration assessment run to be canceled.',
        }),
    ),
  })
  .openapi({
    required: ['ReplicationTaskAssessmentRunArn'],
    title: 'CancelReplicationTaskAssessmentRunMessage',
    description: '<p/>',
  })
  .openapi('CancelReplicationTaskAssessmentRunMessage')

const ReplicationEndpointTypeValueSchema = z
  .enum(['source', 'target'])
  .openapi('ReplicationEndpointTypeValue')

const IntegerOptionalSchema = z.int().openapi('IntegerOptional')

const DmsSslModeValueSchema = z
  .enum(['none', 'require', 'verify-ca', 'verify-full'])
  .openapi('DmsSslModeValue')

const DynamoDbSettingsSchema = z
  .object({
    ServiceAccessRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) used by the service to access the IAM role. The role must allow the <code>iam:PassRole</code> action.',
        }),
    ),
  })
  .openapi({
    required: ['ServiceAccessRoleArn'],
    description:
      'Provides the Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role used to define an Amazon DynamoDB target endpoint.',
  })
  .openapi('DynamoDbSettings')

const CompressionTypeValueSchema = z.enum(['none', 'gzip']).openapi('CompressionTypeValue')

const EncryptionModeValueSchema = z.enum(['sse-s3', 'sse-kms']).openapi('EncryptionModeValue')

const DataFormatValueSchema = z.enum(['csv', 'parquet']).openapi('DataFormatValue')

const EncodingTypeValueSchema = z
  .enum(['plain', 'plain-dictionary', 'rle-dictionary'])
  .openapi('EncodingTypeValue')

const ParquetVersionValueSchema = z
  .enum(['parquet-1-0', 'parquet-2-0'])
  .openapi('ParquetVersionValue')

const BooleanOptionalSchema = z.boolean().openapi('BooleanOptional')

const DatePartitionSequenceValueSchema = z
  .enum(['YYYYMMDD', 'YYYYMMDDHH', 'YYYYMM', 'MMYYYYDD', 'DDMMYYYY'])
  .openapi('DatePartitionSequenceValue')

const DatePartitionDelimiterValueSchema = z
  .enum(['SLASH', 'UNDERSCORE', 'DASH', 'NONE'])
  .openapi('DatePartitionDelimiterValue')

const CannedAclForObjectsValueSchema = z
  .enum([
    'none',
    'private',
    'public-read',
    'public-read-write',
    'authenticated-read',
    'aws-exec-read',
    'bucket-owner-read',
    'bucket-owner-full-control',
  ])
  .openapi('CannedAclForObjectsValue')

const S3SettingsSchema = z
  .object({
    ServiceAccessRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) used by the service to access the IAM role. The role must allow the <code>iam:PassRole</code> action. It is a required parameter that enables DMS to write and read objects from an S3 bucket.',
        }),
    ).exactOptional(),
    ExternalTableDefinition: StringSchema.and(
      z
        .any()
        .openapi({
          description: ' Specifies how tables are defined in the S3 source files only. ',
        }),
    ).exactOptional(),
    CsvRowDelimiter: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The delimiter used to separate rows in the .csv file for both source and target. The default is a carriage return (<code>\\n</code>). ',
        }),
    ).exactOptional(),
    CsvDelimiter: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The delimiter used to separate columns in the .csv file for both source and target. The default is a comma. ',
        }),
    ).exactOptional(),
    BucketFolder: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            " An optional parameter to set a folder name in the S3 bucket. If provided, tables are created in the path <code> <i>bucketFolder</i>/<i>schema_name</i>/<i>table_name</i>/</code>. If this parameter isn't specified, then the path used is <code> <i>schema_name</i>/<i>table_name</i>/</code>. ",
        }),
    ).exactOptional(),
    BucketName: StringSchema.and(
      z.any().openapi({ description: ' The name of the S3 bucket. ' }),
    ).exactOptional(),
    CompressionType: CompressionTypeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            "An optional parameter to use GZIP to compress the target files. Set to GZIP to compress the target files. Either set this parameter to NONE (the default) or don't use it to leave the files uncompressed. This parameter applies to both .csv and .parquet file formats. ",
        }),
    ).exactOptional(),
    EncryptionMode: EncryptionModeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of server-side encryption that you want to use for your data. This encryption type is part of the endpoint settings or the extra connections attributes for Amazon S3. You can choose either <code>SSE_S3</code> (the default) or <code>SSE_KMS</code>. </p> <note> <p>For the <code>ModifyEndpoint</code> operation, you can change the existing value of the <code>EncryptionMode</code> parameter from <code>SSE_KMS</code> to <code>SSE_S3</code>. But you can’t change the existing value from <code>SSE_S3</code> to <code>SSE_KMS</code>.</p> </note> <p>To use <code>SSE_S3</code>, you need an Identity and Access Management (IAM) role with permission to allow <code>"arn:aws:s3:::dms-*"</code> to use the following actions:</p> <ul> <li> <p> <code>s3:CreateBucket</code> </p> </li> <li> <p> <code>s3:ListBucket</code> </p> </li> <li> <p> <code>s3:DeleteBucket</code> </p> </li> <li> <p> <code>s3:GetBucketLocation</code> </p> </li> <li> <p> <code>s3:GetObject</code> </p> </li> <li> <p> <code>s3:PutObject</code> </p> </li> <li> <p> <code>s3:DeleteObject</code> </p> </li> <li> <p> <code>s3:GetObjectVersion</code> </p> </li> <li> <p> <code>s3:GetBucketPolicy</code> </p> </li> <li> <p> <code>s3:PutBucketPolicy</code> </p> </li> <li> <p> <code>s3:DeleteBucketPolicy</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    ServerSideEncryptionKmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If you are using <code>SSE_KMS</code> for the <code>EncryptionMode</code>, provide the KMS key ID. The key that you use needs an attached policy that enables Identity and Access Management (IAM) user permissions and allows use of the key.</p> <p>Here is a CLI example: <code>aws dms create-endpoint --endpoint-identifier <i>value</i> --endpoint-type target --engine-name s3 --s3-settings ServiceAccessRoleArn=<i>value</i>,BucketFolder=<i>value</i>,BucketName=<i>value</i>,EncryptionMode=SSE_KMS,ServerSideEncryptionKmsKeyId=<i>value</i> </code> </p>',
        }),
    ).exactOptional(),
    DataFormat: DataFormatValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The format of the data that you want to use for output. You can choose one of the following: </p> <ul> <li> <p> <code>csv</code> : This is a row-based file format with comma-separated values (.csv). </p> </li> <li> <p> <code>parquet</code> : Apache Parquet (.parquet) is a columnar storage file format that features efficient compression and provides faster query response. </p> </li> </ul>',
        }),
    ).exactOptional(),
    EncodingType: EncodingTypeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of encoding you are using: </p> <ul> <li> <p> <code>RLE_DICTIONARY</code> uses a combination of bit-packing and run-length encoding to store repeated values more efficiently. This is the default.</p> </li> <li> <p> <code>PLAIN</code> doesn't use encoding at all. Values are stored as they are.</p> </li> <li> <p> <code>PLAIN_DICTIONARY</code> builds a dictionary of the values encountered in a given column. The dictionary is stored in a dictionary page for each column chunk.</p> </li> </ul>",
        }),
    ).exactOptional(),
    DictPageSizeLimit: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum size of an encoded dictionary page of a column. If the dictionary page exceeds this, this column is stored using an encoding type of <code>PLAIN</code>. This parameter defaults to 1024 * 1024 bytes (1 MiB), the maximum size of a dictionary page before it reverts to <code>PLAIN</code> encoding. This size is used for .parquet file format only. ',
        }),
    ).exactOptional(),
    RowGroupLength: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of rows in a row group. A smaller row group size provides faster reads. But as the number of row groups grows, the slower writes become. This parameter defaults to 10,000 rows. This number is used for .parquet file format only. </p> <p>If you choose a value larger than the maximum, <code>RowGroupLength</code> is set to the max row group length in bytes (64 * 1024 * 1024). </p>',
        }),
    ).exactOptional(),
    DataPageSize: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The size of one data page in bytes. This parameter defaults to 1024 * 1024 bytes (1 MiB). This number is used for .parquet file format only. ',
        }),
    ).exactOptional(),
    ParquetVersion: ParquetVersionValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the Apache Parquet format that you want to use: <code>parquet_1_0</code> (the default) or <code>parquet_2_0</code>.',
        }),
    ).exactOptional(),
    EnableStatistics: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that enables statistics for Parquet pages and row groups. Choose <code>true</code> to enable statistics, <code>false</code> to disable. Statistics include <code>NULL</code>, <code>DISTINCT</code>, <code>MAX</code>, and <code>MIN</code> values. This parameter defaults to <code>true</code>. This value is used for .parquet file format only.',
        }),
    ).exactOptional(),
    IncludeOpForFullLoad: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that enables a full load to write INSERT operations to the comma-separated value (.csv) output files only to indicate how the rows were added to the source database.</p> <note> <p>DMS supports the <code>IncludeOpForFullLoad</code> parameter in versions 3.1.4 and later.</p> </note> <p>For full load, records can only be inserted. By default (the <code>false</code> setting), no information is recorded in these output files for a full load to indicate that the rows were inserted at the source database. If <code>IncludeOpForFullLoad</code> is set to <code>true</code> or <code>y</code>, the INSERT is recorded as an I annotation in the first field of the .csv file. This allows the format of your target records from a full load to be consistent with the target records from a CDC load.</p> <note> <p>This setting works together with the <code>CdcInsertsOnly</code> and the <code>CdcInsertsAndUpdates</code> parameters for output to .csv files only. For more information about how these settings work together, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps">Indicating Source DB Operations in Migrated S3 Data</a> in the <i>Database Migration Service User Guide.</i>.</p> </note>',
        }),
    ).exactOptional(),
    CdcInsertsOnly: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that enables a change data capture (CDC) load to write only INSERT operations to .csv or columnar storage (.parquet) output files. By default (the <code>false</code> setting), the first field in a .csv or .parquet record contains the letter I (INSERT), U (UPDATE), or D (DELETE). These values indicate whether the row was inserted, updated, or deleted at the source database for a CDC load to the target.</p> <p>If <code>CdcInsertsOnly</code> is set to <code>true</code> or <code>y</code>, only INSERTs from the source database are migrated to the .csv or .parquet file. For .csv format only, how these INSERTs are recorded depends on the value of <code>IncludeOpForFullLoad</code>. If <code>IncludeOpForFullLoad</code> is set to <code>true</code>, the first field of every CDC record is set to I to indicate the INSERT operation at the source. If <code>IncludeOpForFullLoad</code> is set to <code>false</code>, every CDC record is written without a first field to indicate the INSERT operation at the source. For more information about how these settings work together, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps">Indicating Source DB Operations in Migrated S3 Data</a> in the <i>Database Migration Service User Guide.</i>.</p> <note> <p>DMS supports the interaction described preceding between the <code>CdcInsertsOnly</code> and <code>IncludeOpForFullLoad</code> parameters in versions 3.1.4 and later. </p> <p> <code>CdcInsertsOnly</code> and <code>CdcInsertsAndUpdates</code> can\'t both be set to <code>true</code> for the same endpoint. Set either <code>CdcInsertsOnly</code> or <code>CdcInsertsAndUpdates</code> to <code>true</code> for the same endpoint, but not both.</p> </note>',
        }),
    ).exactOptional(),
    TimestampColumnName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that when nonblank causes DMS to add a column with timestamp information to the endpoint data for an Amazon S3 target.</p> <note> <p>DMS supports the <code>TimestampColumnName</code> parameter in versions 3.1.4 and later.</p> </note> <p>DMS includes an additional <code>STRING</code> column in the .csv or .parquet object files of your migrated data when you set <code>TimestampColumnName</code> to a nonblank value.</p> <p>For a full load, each row of this timestamp column contains a timestamp for when the data was transferred from the source to the target by DMS. </p> <p>For a change data capture (CDC) load, each row of the timestamp column contains the timestamp for the commit of that row in the source database.</p> <p>The string format for this timestamp column value is <code>yyyy-MM-dd HH:mm:ss.SSSSSS</code>. By default, the precision of this value is in microseconds. For a CDC load, the rounding of the precision depends on the commit timestamp supported by DMS for the source database.</p> <p>When the <code>AddColumnName</code> parameter is set to <code>true</code>, DMS also includes a name for the timestamp column that you set with <code>TimestampColumnName</code>.</p>',
        }),
    ).exactOptional(),
    ParquetTimestampInMillisecond: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that specifies the precision of any <code>TIMESTAMP</code> column values that are written to an Amazon S3 object file in .parquet format.</p> <note> <p>DMS supports the <code>ParquetTimestampInMillisecond</code> parameter in versions 3.1.4 and later.</p> </note> <p>When <code>ParquetTimestampInMillisecond</code> is set to <code>true</code> or <code>y</code>, DMS writes all <code>TIMESTAMP</code> columns in a .parquet formatted file with millisecond precision. Otherwise, DMS writes them with microsecond precision.</p> <p>Currently, Amazon Athena and Glue can handle only millisecond precision for <code>TIMESTAMP</code> values. Set this parameter to <code>true</code> for S3 endpoint object files that are .parquet formatted only if you plan to query or process the data with Athena or Glue.</p> <note> <p>DMS writes any <code>TIMESTAMP</code> column values written to an S3 file in .csv format with microsecond precision.</p> <p>Setting <code>ParquetTimestampInMillisecond</code> has no effect on the string format of the timestamp column value that is inserted by setting the <code>TimestampColumnName</code> parameter.</p> </note>',
        }),
    ).exactOptional(),
    CdcInsertsAndUpdates: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that enables a change data capture (CDC) load to write INSERT and UPDATE operations to .csv or .parquet (columnar storage) output files. The default setting is <code>false</code>, but when <code>CdcInsertsAndUpdates</code> is set to <code>true</code> or <code>y</code>, only INSERTs and UPDATEs from the source database are migrated to the .csv or .parquet file. </p> <p>For .csv file format only, how these INSERTs and UPDATEs are recorded depends on the value of the <code>IncludeOpForFullLoad</code> parameter. If <code>IncludeOpForFullLoad</code> is set to <code>true</code>, the first field of every CDC record is set to either <code>I</code> or <code>U</code> to indicate INSERT and UPDATE operations at the source. But if <code>IncludeOpForFullLoad</code> is set to <code>false</code>, CDC records are written without an indication of INSERT or UPDATE operations at the source. For more information about how these settings work together, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps">Indicating Source DB Operations in Migrated S3 Data</a> in the <i>Database Migration Service User Guide.</i>.</p> <note> <p>DMS supports the use of the <code>CdcInsertsAndUpdates</code> parameter in versions 3.3.1 and later.</p> <p> <code>CdcInsertsOnly</code> and <code>CdcInsertsAndUpdates</code> can\'t both be set to <code>true</code> for the same endpoint. Set either <code>CdcInsertsOnly</code> or <code>CdcInsertsAndUpdates</code> to <code>true</code> for the same endpoint, but not both.</p> </note>',
        }),
    ).exactOptional(),
    DatePartitionEnabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'When set to <code>true</code>, this parameter partitions S3 bucket folders based on transaction commit dates. The default value is <code>false</code>. For more information about date-based folder partitioning, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.DatePartitioning">Using date-based folder partitioning</a>.',
        }),
    ).exactOptional(),
    DatePartitionSequence: DatePartitionSequenceValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifies the sequence of the date format to use during folder partitioning. The default value is <code>YYYYMMDD</code>. Use this parameter when <code>DatePartitionedEnabled</code> is set to <code>true</code>.',
        }),
    ).exactOptional(),
    DatePartitionDelimiter: DatePartitionDelimiterValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a date separating delimiter to use during folder partitioning. The default value is <code>SLASH</code>. Use this parameter when <code>DatePartitionedEnabled</code> is set to <code>true</code>.',
        }),
    ).exactOptional(),
    UseCsvNoSupValue: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This setting applies if the S3 output files during a change data capture (CDC) load are written in .csv format. If set to <code>true</code> for columns not included in the supplemental log, DMS uses the value specified by <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-CsvNoSupValue"> <code>CsvNoSupValue</code> </a>. If not set or set to <code>false</code>, DMS uses the null value for these columns.</p> <note> <p>This setting is supported in DMS versions 3.4.1 and later.</p> </note>',
        }),
    ).exactOptional(),
    CsvNoSupValue: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This setting only applies if your Amazon S3 output files during a change data capture (CDC) load are written in .csv format. If <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-UseCsvNoSupValue"> <code>UseCsvNoSupValue</code> </a> is set to true, specify a string value that you want DMS to use for all columns not included in the supplemental log. If you do not specify a string value, DMS uses the null value for these columns regardless of the <code>UseCsvNoSupValue</code> setting.</p> <note> <p>This setting is supported in DMS versions 3.4.1 and later.</p> </note>',
        }),
    ).exactOptional(),
    PreserveTransactions: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If set to <code>true</code>, DMS saves the transaction order for a change data capture (CDC) load on the Amazon S3 target specified by <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-CdcPath"> <code>CdcPath</code> </a>. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.EndpointSettings.CdcPath">Capturing data changes (CDC) including transaction order on the S3 target</a>.</p> <note> <p>This setting is supported in DMS versions 3.4.2 and later.</p> </note>',
        }),
    ).exactOptional(),
    CdcPath: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the folder path of CDC files. For an S3 source, this setting is required if a task captures change data; otherwise, it\'s optional. If <code>CdcPath</code> is set, DMS reads CDC files from this path and replicates the data changes to the target endpoint. For an S3 target if you set <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-PreserveTransactions"> <code>PreserveTransactions</code> </a> to <code>true</code>, DMS verifies that you have set this parameter to a folder path on your S3 target where DMS can save the transaction order for the CDC load. DMS creates this CDC folder path in either your S3 target working directory or the S3 target location specified by <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-BucketFolder"> <code>BucketFolder</code> </a> and <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-BucketName"> <code>BucketName</code> </a>.</p> <p>For example, if you specify <code>CdcPath</code> as <code>MyChangedData</code>, and you specify <code>BucketName</code> as <code>MyTargetBucket</code> but do not specify <code>BucketFolder</code>, DMS creates the CDC folder path following: <code>MyTargetBucket/MyChangedData</code>.</p> <p>If you specify the same <code>CdcPath</code>, and you specify <code>BucketName</code> as <code>MyTargetBucket</code> and <code>BucketFolder</code> as <code>MyTargetData</code>, DMS creates the CDC folder path following: <code>MyTargetBucket/MyTargetData/MyChangedData</code>.</p> <p>For more information on CDC including transaction order on an S3 target, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.EndpointSettings.CdcPath">Capturing data changes (CDC) including transaction order on the S3 target</a>.</p> <note> <p>This setting is supported in DMS versions 3.4.2 and later.</p> </note>',
        }),
    ).exactOptional(),
    UseTaskStartTimeForFullLoadTimestamp: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When set to true, this parameter uses the task start time as the timestamp column value instead of the time data is written to target. For full load, when <code>useTaskStartTimeForFullLoadTimestamp</code> is set to <code>true</code>, each row of the timestamp column contains the task start time. For CDC loads, each row of the timestamp column contains the transaction commit time.</p> <p>When <code>useTaskStartTimeForFullLoadTimestamp</code> is set to <code>false</code>, the full load timestamp in the timestamp column increments with the time data arrives at the target. </p>',
        }),
    ).exactOptional(),
    CannedAclForObjects: CannedAclForObjectsValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that enables DMS to specify a predefined (canned) access control list for objects created in an Amazon S3 bucket as .csv or .parquet files. For more information about Amazon S3 canned ACLs, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl">Canned ACL</a> in the <i>Amazon S3 Developer Guide.</i> </p> <p>The default value is NONE. Valid values include NONE, PRIVATE, PUBLIC_READ, PUBLIC_READ_WRITE, AUTHENTICATED_READ, AWS_EXEC_READ, BUCKET_OWNER_READ, and BUCKET_OWNER_FULL_CONTROL.</p>',
        }),
    ).exactOptional(),
    AddColumnName: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional parameter that, when set to <code>true</code> or <code>y</code>, you can use to add column name information to the .csv output file.</p> <p>The default value is <code>false</code>. Valid values are <code>true</code>, <code>false</code>, <code>y</code>, and <code>n</code>.</p>',
        }),
    ).exactOptional(),
    CdcMaxBatchInterval: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Maximum length of the interval, defined in seconds, after which to output a file to Amazon S3.</p> <p>When <code>CdcMaxBatchInterval</code> and <code>CdcMinFileSize</code> are both specified, the file write is triggered by whichever parameter condition is met first within an DMS CloudFormation template.</p> <p>The default value is 60 seconds.</p>',
        }),
    ).exactOptional(),
    CdcMinFileSize: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Minimum file size, defined in kilobytes, to reach for a file output to Amazon S3.</p> <p>When <code>CdcMinFileSize</code> and <code>CdcMaxBatchInterval</code> are both specified, the file write is triggered by whichever parameter condition is met first within an DMS CloudFormation template.</p> <p>The default value is 32 MB.</p>',
        }),
    ).exactOptional(),
    CsvNullValue: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional parameter that specifies how DMS treats null values. While handling the null value, you can use this parameter to pass a user-defined string as null when writing to the target. For example, when target columns are not nullable, you can use this option to differentiate between the empty string value and the null value. So, if you set this parameter value to the empty string ("" or \'\'), DMS treats the empty string as the null value instead of <code>NULL</code>.</p> <p>The default value is <code>NULL</code>. Valid values include any valid string.</p>',
        }),
    ).exactOptional(),
    IgnoreHeaderRows: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When this value is set to 1, DMS ignores the first row header in a .csv file. A value of 1 turns on the feature; a value of 0 turns off the feature.</p> <p>The default is 0.</p>',
        }),
    ).exactOptional(),
    MaxFileSize: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that specifies the maximum size (in KB) of any .csv file to be created while migrating to an S3 target during full load.</p> <p>The default value is 1,048,576 KB (1 GB). Valid values include 1 to 1,048,576.</p>',
        }),
    ).exactOptional(),
    Rfc4180: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For an S3 source, when this value is set to <code>true</code> or <code>y</code>, each leading double quotation mark has to be followed by an ending double quotation mark. This formatting complies with RFC 4180. When this value is set to <code>false</code> or <code>n</code>, string literals are copied to the target as is. In this case, a delimiter (row or column) signals the end of the field. Thus, you can\'t use a delimiter as part of the string, because it signals the end of the value.</p> <p>For an S3 target, an optional parameter used to set behavior to comply with RFC 4180 for data migrated to Amazon S3 using .csv file format only. When this value is set to <code>true</code> or <code>y</code> using Amazon S3 as a target, if the data has quotation marks or newline characters in it, DMS encloses the entire column with an additional pair of double quotation marks ("). Every quotation mark within the data is repeated twice.</p> <p>The default value is <code>true</code>. Valid values include <code>true</code>, <code>false</code>, <code>y</code>, and <code>n</code>.</p>',
        }),
    ).exactOptional(),
    DatePartitionTimezone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When creating an S3 target endpoint, set <code>DatePartitionTimezone</code> to convert the current UTC time into a specified time zone. The conversion occurs when a date partition folder is created and a CDC filename is generated. The time zone format is Area/Location. Use this parameter when <code>DatePartitionedEnabled</code> is set to <code>true</code>, as shown in the following example.</p> <p> <code>s3-settings=\'{"DatePartitionEnabled": true, "DatePartitionSequence": "YYYYMMDDHH", "DatePartitionDelimiter": "SLASH", "DatePartitionTimezone":"<i>Asia/Seoul</i>", "BucketName": "dms-nattarat-test"}\'</code> </p>',
        }),
    ).exactOptional(),
    AddTrailingPaddingCharacter: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use the S3 target endpoint setting <code>AddTrailingPaddingCharacter</code> to add padding on string data. The default value is <code>false</code>.',
        }),
    ).exactOptional(),
    ExpectedBucketOwner: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>To specify a bucket owner and prevent sniping, you can use the <code>ExpectedBucketOwner</code> endpoint setting. </p> <p>Example: <code>--s3-settings=\'{"ExpectedBucketOwner": "<i>AWS_Account_ID</i>"}\'</code> </p> <p>When you make a request to test a connection or perform a migration, S3 checks the account ID of the bucket owner against the specified parameter.</p>',
        }),
    ).exactOptional(),
    GlueCatalogGeneration: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'When true, allows Glue to catalog your S3 bucket. Creating an Glue catalog lets you use Athena to query your data.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Settings for exporting data to Amazon S3. ', required: [] })
  .openapi('S3Settings')

const DmsTransferSettingsSchema = z
  .object({
    ServiceAccessRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) used by the service access IAM role. The role must allow the <code>iam:PassRole</code> action.',
        }),
    ).exactOptional(),
    BucketName: StringSchema.and(
      z.any().openapi({ description: ' The name of the S3 bucket to use. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' The settings in JSON format for the DMS Transfer type source endpoint. ',
    required: [],
  })
  .openapi('DmsTransferSettings')

const SecretStringSchema = z.string().openapi('SecretString')

const AuthTypeValueSchema = z.enum(['no', 'password']).openapi('AuthTypeValue')

const AuthMechanismValueSchema = z
  .enum(['default', 'mongodb_cr', 'scram_sha_1'])
  .openapi('AuthMechanismValue')

const NestingLevelValueSchema = z.enum(['none', 'one']).openapi('NestingLevelValue')

const MongoDbSettingsSchema = z
  .object({
    Username: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The user name you use to access the MongoDB source endpoint. ' }),
    ).exactOptional(),
    Password: SecretStringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The password for the user account you use to access the MongoDB source endpoint. ',
        }),
    ).exactOptional(),
    ServerName: StringSchema.and(
      z.any().openapi({ description: ' The name of the server on the MongoDB source endpoint. ' }),
    ).exactOptional(),
    Port: IntegerOptionalSchema.and(
      z.any().openapi({ description: ' The port value for the MongoDB source endpoint. ' }),
    ).exactOptional(),
    DatabaseName: StringSchema.and(
      z.any().openapi({ description: ' The database name on the MongoDB source endpoint. ' }),
    ).exactOptional(),
    AuthType: AuthTypeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The authentication type you use to access the MongoDB source endpoint.</p> <p>When when set to <code>"no"</code>, user name and password parameters are not used and can be empty. </p>',
        }),
    ).exactOptional(),
    AuthMechanism: AuthMechanismValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The authentication mechanism you use to access the MongoDB source endpoint.</p> <p>For the default value, in MongoDB version 2.x, <code>"default"</code> is <code>"mongodb_cr"</code>. For MongoDB version 3.x or later, <code>"default"</code> is <code>"scram_sha_1"</code>. This setting isn\'t used when <code>AuthType</code> is set to <code>"no"</code>.</p>',
        }),
    ).exactOptional(),
    NestingLevel: NestingLevelValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Specifies either document or table mode. </p> <p>Default value is <code>"none"</code>. Specify <code>"none"</code> to use document mode. Specify <code>"one"</code> to use table mode.</p>',
        }),
    ).exactOptional(),
    ExtractDocId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Specifies the document ID. Use this setting when <code>NestingLevel</code> is set to <code>"none"</code>. </p> <p>Default value is <code>"false"</code>. </p>',
        }),
    ).exactOptional(),
    DocsToInvestigate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Indicates the number of documents to preview to determine the document organization. Use this setting when <code>NestingLevel</code> is set to <code>"one"</code>. </p> <p>Must be a positive value greater than <code>0</code>. Default value is <code>1000</code>.</p>',
        }),
    ).exactOptional(),
    AuthSource: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The MongoDB database name. This setting isn\'t used when <code>AuthType</code> is set to <code>"no"</code>. </p> <p>The default is <code>"admin"</code>.</p>',
        }),
    ).exactOptional(),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The KMS key identifier that is used to encrypt the content on the replication instance. If you don't specify a value for the <code>KmsKeyId</code> parameter, then DMS uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.",
        }),
    ).exactOptional(),
    SecretsManagerAccessRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in <code>SecretsManagerSecret</code>. The role must allow the <code>iam:PassRole</code> action. <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets Manager secret that allows access to the MongoDB endpoint.</p> <note> <p>You can specify one of two sets of values for these permissions. You can specify the values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify clear-text values for <code>UserName</code>, <code>Password</code>, <code>ServerName</code>, and <code>Port</code>. You can\'t specify both. For more information on creating this <code>SecretsManagerSecret</code> and the <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code> required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service resources</a> in the <i>Database Migration Service User Guide</i>.</p> </note>',
        }),
    ).exactOptional(),
    SecretsManagerSecretId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code> that contains the MongoDB endpoint connection details.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information that defines a MongoDB endpoint.', required: [] })
  .openapi('MongoDbSettings')

const MessageFormatValueSchema = z.enum(['json', 'json-unformatted']).openapi('MessageFormatValue')

const KinesisSettingsSchema = z
  .object({
    StreamArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the Amazon Kinesis Data Streams endpoint.',
        }),
    ).exactOptional(),
    MessageFormat: MessageFormatValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The output format for the records created on the endpoint. The message format is <code>JSON</code> (default) or <code>JSON_UNFORMATTED</code> (a single line with no tab).',
        }),
    ).exactOptional(),
    ServiceAccessRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the IAM role that DMS uses to write to the Kinesis data stream. The role must allow the <code>iam:PassRole</code> action.',
        }),
    ).exactOptional(),
    IncludeTransactionDetails: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides detailed transaction information from the source database. This information includes a commit timestamp, a log position, and values for <code>transaction_id</code>, previous <code>transaction_id</code>, and <code>transaction_record_id</code> (the record offset within a transaction). The default is <code>false</code>.',
        }),
    ).exactOptional(),
    IncludePartitionValue: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Shows the partition value within the Kinesis message output, unless the partition type is <code>schema-table-type</code>. The default is <code>false</code>.',
        }),
    ).exactOptional(),
    PartitionIncludeSchemaTable: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Prefixes schema and table names to partition values, when the partition type is <code>primary-key-type</code>. Doing this increases data distribution among Kinesis shards. For example, suppose that a SysBench schema has thousands of tables and each table has only limited range for a primary key. In this case, the same primary key is sent from thousands of tables to the same shard, which causes throttling. The default is <code>false</code>.',
        }),
    ).exactOptional(),
    IncludeTableAlterOperations: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Includes any data definition language (DDL) operations that change the table in the control data, such as <code>rename-table</code>, <code>drop-table</code>, <code>add-column</code>, <code>drop-column</code>, and <code>rename-column</code>. The default is <code>false</code>.',
        }),
    ).exactOptional(),
    IncludeControlDetails: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Shows detailed control information for table definition, column definition, and table and column changes in the Kinesis message output. The default is <code>false</code>.',
        }),
    ).exactOptional(),
    IncludeNullAndEmpty: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Include NULL and empty columns for records migrated to the endpoint. The default is <code>false</code>.',
        }),
    ).exactOptional(),
    NoHexPrefix: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            "Set this optional parameter to <code>true</code> to avoid adding a '0x' prefix to raw data in hexadecimal format. For example, by default, DMS adds a '0x' prefix to the LOB column type in hexadecimal format moving from an Oracle source to an Amazon Kinesis target. Use the <code>NoHexPrefix</code> endpoint setting to enable migration of RAW data type columns without adding the '0x' prefix.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information that describes an Amazon Kinesis Data Stream endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information.',
    required: [],
  })
  .openapi('KinesisSettings')

const KafkaSecurityProtocolSchema = z
  .enum(['plaintext', 'ssl-authentication', 'ssl-encryption', 'sasl-ssl'])
  .openapi('KafkaSecurityProtocol')

const KafkaSaslMechanismSchema = z.enum(['scram-sha-512', 'plain']).openapi('KafkaSaslMechanism')

const KafkaSettingsSchema = z
  .object({
    Broker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A comma-separated list of one or more broker locations in your Kafka cluster that host your Kafka instance. Specify each broker location in the form <code> <i>broker-hostname-or-ip</i>:<i>port</i> </code>. For example, <code>"ec2-12-345-678-901.compute-1.amazonaws.com:2345"</code>. For more information and examples of specifying a list of broker locations, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kafka.html">Using Apache Kafka as a target for Database Migration Service</a> in the <i>Database Migration Service User Guide</i>. ',
        }),
    ).exactOptional(),
    Topic: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The topic to which you migrate the data. If you don\'t specify a topic, DMS specifies <code>"kafka-default-topic"</code> as the migration topic.',
        }),
    ).exactOptional(),
    MessageFormat: MessageFormatValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The output format for the records created on the endpoint. The message format is <code>JSON</code> (default) or <code>JSON_UNFORMATTED</code> (a single line with no tab).',
        }),
    ).exactOptional(),
    IncludeTransactionDetails: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides detailed transaction information from the source database. This information includes a commit timestamp, a log position, and values for <code>transaction_id</code>, previous <code>transaction_id</code>, and <code>transaction_record_id</code> (the record offset within a transaction). The default is <code>false</code>.',
        }),
    ).exactOptional(),
    IncludePartitionValue: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Shows the partition value within the Kafka message output unless the partition type is <code>schema-table-type</code>. The default is <code>false</code>.',
        }),
    ).exactOptional(),
    PartitionIncludeSchemaTable: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Prefixes schema and table names to partition values, when the partition type is <code>primary-key-type</code>. Doing this increases data distribution among Kafka partitions. For example, suppose that a SysBench schema has thousands of tables and each table has only limited range for a primary key. In this case, the same primary key is sent from thousands of tables to the same partition, which causes throttling. The default is <code>false</code>.',
        }),
    ).exactOptional(),
    IncludeTableAlterOperations: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Includes any data definition language (DDL) operations that change the table in the control data, such as <code>rename-table</code>, <code>drop-table</code>, <code>add-column</code>, <code>drop-column</code>, and <code>rename-column</code>. The default is <code>false</code>.',
        }),
    ).exactOptional(),
    IncludeControlDetails: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Shows detailed control information for table definition, column definition, and table and column changes in the Kafka message output. The default is <code>false</code>.',
        }),
    ).exactOptional(),
    MessageMaxBytes: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum size in bytes for records created on the endpoint The default is 1,000,000.',
        }),
    ).exactOptional(),
    IncludeNullAndEmpty: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Include NULL and empty columns for records migrated to the endpoint. The default is <code>false</code>.',
        }),
    ).exactOptional(),
    SecurityProtocol: KafkaSecurityProtocolSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set secure connection to a Kafka target endpoint using Transport Layer Security (TLS). Options include <code>ssl-encryption</code>, <code>ssl-authentication</code>, and <code>sasl-ssl</code>. <code>sasl-ssl</code> requires <code>SaslUsername</code> and <code>SaslPassword</code>.',
        }),
    ).exactOptional(),
    SslClientCertificateArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the client certificate used to securely connect to a Kafka target endpoint.',
        }),
    ).exactOptional(),
    SslClientKeyArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the client private key used to securely connect to a Kafka target endpoint.',
        }),
    ).exactOptional(),
    SslClientKeyPassword: SecretStringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The password for the client private key used to securely connect to a Kafka target endpoint.',
        }),
    ).exactOptional(),
    SslCaCertificateArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) for the private certificate authority (CA) cert that DMS uses to securely connect to your Kafka target endpoint.',
        }),
    ).exactOptional(),
    SaslUsername: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The secure user name you created when you first set up your MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication.',
        }),
    ).exactOptional(),
    SaslPassword: SecretStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The secure password you created when you first set up your MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication.',
        }),
    ).exactOptional(),
    NoHexPrefix: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            "Set this optional parameter to <code>true</code> to avoid adding a '0x' prefix to raw data in hexadecimal format. For example, by default, DMS adds a '0x' prefix to the LOB column type in hexadecimal format moving from an Oracle source to a Kafka target. Use the <code>NoHexPrefix</code> endpoint setting to enable migration of RAW data type columns without adding the '0x' prefix.",
        }),
    ).exactOptional(),
    SaslMechanism: KafkaSaslMechanismSchema.and(
      z
        .any()
        .openapi({
          description:
            'For SASL/SSL authentication, DMS supports the <code>SCRAM-SHA-512</code> mechanism by default. DMS versions 3.5.0 and later also support the <code>PLAIN</code> mechanism. To use the <code>PLAIN</code> mechanism, set this parameter to <code>PLAIN.</code> ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information that describes an Apache Kafka endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information.',
    required: [],
  })
  .openapi('KafkaSettings')

const ElasticsearchSettingsSchema = z
  .object({
    ServiceAccessRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) used by the service to access the IAM role. The role must allow the <code>iam:PassRole</code> action.',
        }),
    ),
    EndpointUri: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint for the OpenSearch cluster. DMS uses HTTPS if a transport protocol (http/https) is not specified.',
        }),
    ),
    FullLoadErrorPercentage: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum percentage of records that can fail to be written before a full load operation stops.</p> <p>To avoid early failure, this counter is only effective after 1000 records are transferred. OpenSearch also has the concept of error monitoring during the last 10 minutes of an Observation Window. If transfer of all records fail in the last 10 minutes, the full load operation stops. </p>',
        }),
    ).exactOptional(),
    ErrorRetryDuration: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of seconds for which DMS retries failed API requests to the OpenSearch cluster.',
        }),
    ).exactOptional(),
    UseNewMappingType: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set this option to <code>true</code> for DMS to migrate documentation using the documentation type <code>_doc</code>. OpenSearch and an Elasticsearch cluster only support the _doc documentation type in versions 7. x and later. The default value is <code>false</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ServiceAccessRoleArn', 'EndpointUri'],
    description: 'Provides information that defines an OpenSearch endpoint.',
  })
  .openapi('ElasticsearchSettings')

const NeptuneSettingsSchema = z
  .object({
    ServiceAccessRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the service role that you created for the Neptune target endpoint. The role must allow the <code>iam:PassRole</code> action. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Neptune.html#CHAP_Target.Neptune.ServiceRole">Creating an IAM Service Role for Accessing Amazon Neptune as a Target</a> in the <i>Database Migration Service User Guide. </i> ',
        }),
    ).exactOptional(),
    S3BucketName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Amazon S3 bucket where DMS can temporarily store migrated graph data in .csv files before bulk-loading it to the Neptune target database. DMS maps the SQL source data to graph data before storing it in these .csv files.',
        }),
    ),
    S3BucketFolder: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A folder path where you want DMS to store migrated graph data in the S3 bucket specified by <code>S3BucketName</code> ',
        }),
    ),
    ErrorRetryDuration: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of milliseconds for DMS to wait to retry a bulk-load of migrated graph data to the Neptune target database before raising an error. The default is 250.',
        }),
    ).exactOptional(),
    MaxFileSize: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum size in kilobytes of migrated graph data stored in a .csv file before DMS bulk-loads the data to the Neptune target database. The default is 1,048,576 KB. If the bulk load is successful, DMS clears the bucket, ready to store the next batch of migrated graph data.',
        }),
    ).exactOptional(),
    MaxRetryCount: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of times for DMS to retry a bulk load of migrated graph data to the Neptune target database before raising an error. The default is 5.',
        }),
    ).exactOptional(),
    IamAuthEnabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you want Identity and Access Management (IAM) authorization enabled for this endpoint, set this parameter to <code>true</code>. Then attach the appropriate IAM policy document to your service role specified by <code>ServiceAccessRoleArn</code>. The default is <code>false</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['S3BucketName', 'S3BucketFolder'],
    description: 'Provides information that defines an Amazon Neptune endpoint.',
  })
  .openapi('NeptuneSettings')

const RedshiftSettingsSchema = z
  .object({
    AcceptAnyDate: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A value that indicates to allow any date format, including invalid formats such as 00/00/00 00:00:00, to be loaded without generating an error. You can choose <code>true</code> or <code>false</code> (the default).</p> <p>This parameter applies only to TIMESTAMP and DATE columns. Always use ACCEPTANYDATE with the DATEFORMAT parameter. If the date format for the data doesn't match the DATEFORMAT specification, Amazon Redshift inserts a NULL value into that field. </p>",
        }),
    ).exactOptional(),
    AfterConnectScript: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Code to run after connecting. This parameter should contain the code itself, not the name of a file containing the code.',
        }),
    ).exactOptional(),
    BucketFolder: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An S3 folder where the comma-separated-value (.csv) files are stored before being uploaded to the target Redshift cluster. </p> <p>For full load mode, DMS converts source records into .csv files and loads them to the <i>BucketFolder/TableID</i> path. DMS uses the Redshift <code>COPY</code> command to upload the .csv files to the target table. The files are deleted once the <code>COPY</code> operation has finished. For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_COPY.html">COPY</a> in the <i>Amazon Redshift Database Developer Guide</i>.</p> <p>For change-data-capture (CDC) mode, DMS creates a <i>NetChanges</i> table, and loads the .csv files to this <i>BucketFolder/NetChangesTableID</i> path.</p>',
        }),
    ).exactOptional(),
    BucketName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the intermediate S3 bucket used to store .csv files before uploading data to Redshift.',
        }),
    ).exactOptional(),
    CaseSensitiveNames: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'If Amazon Redshift is configured to support case sensitive schema names, set <code>CaseSensitiveNames</code> to <code>true</code>. The default is <code>false</code>.',
        }),
    ).exactOptional(),
    CompUpdate: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            "If you set <code>CompUpdate</code> to <code>true</code> Amazon Redshift applies automatic compression if the table is empty. This applies even if the table columns already have encodings other than <code>RAW</code>. If you set <code>CompUpdate</code> to <code>false</code>, automatic compression is disabled and existing column encodings aren't changed. The default is <code>true</code>.",
        }),
    ).exactOptional(),
    ConnectionTimeout: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that sets the amount of time to wait (in milliseconds) before timing out, beginning from when you initially establish a connection.',
        }),
    ).exactOptional(),
    DatabaseName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Amazon Redshift data warehouse (service) that you are working with.',
        }),
    ).exactOptional(),
    DateFormat: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The date format that you are using. Valid values are <code>auto</code> (case-sensitive), your date format string enclosed in quotes, or NULL. If this parameter is left unset (NULL), it defaults to a format of 'YYYY-MM-DD'. Using <code>auto</code> recognizes most strings, even some that aren't supported when you use a date format string. </p> <p>If your date and time values use formats different from each other, set this to <code>auto</code>. </p>",
        }),
    ).exactOptional(),
    EmptyAsNull: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that specifies whether DMS should migrate empty CHAR and VARCHAR fields as NULL. A value of <code>true</code> sets empty CHAR and VARCHAR fields to null. The default is <code>false</code>.',
        }),
    ).exactOptional(),
    EncryptionMode: EncryptionModeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of server-side encryption that you want to use for your data. This encryption type is part of the endpoint settings or the extra connections attributes for Amazon S3. You can choose either <code>SSE_S3</code> (the default) or <code>SSE_KMS</code>. </p> <note> <p>For the <code>ModifyEndpoint</code> operation, you can change the existing value of the <code>EncryptionMode</code> parameter from <code>SSE_KMS</code> to <code>SSE_S3</code>. But you can’t change the existing value from <code>SSE_S3</code> to <code>SSE_KMS</code>.</p> </note> <p>To use <code>SSE_S3</code>, create an Identity and Access Management (IAM) role with a policy that allows <code>"arn:aws:s3:::*"</code> to use the following actions: <code>"s3:PutObject", "s3:ListBucket"</code> </p>',
        }),
    ).exactOptional(),
    ExplicitIds: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'This setting is only valid for a full-load migration task. Set <code>ExplicitIds</code> to <code>true</code> to have tables with <code>IDENTITY</code> columns override their auto-generated values with explicit values loaded from the source data files used to populate the tables. The default is <code>false</code>.',
        }),
    ).exactOptional(),
    FileTransferUploadStreams: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of threads used to upload a single file. This parameter accepts a value from 1 through 64. It defaults to 10.</p> <p>The number of parallel streams used to upload a single .csv file to an S3 bucket using S3 Multipart Upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html">Multipart upload overview</a>. </p> <p> <code>FileTransferUploadStreams</code> accepts a value from 1 through 64. It defaults to 10.</p>',
        }),
    ).exactOptional(),
    LoadTimeout: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time to wait (in milliseconds) before timing out of operations performed by DMS on a Redshift cluster, such as Redshift COPY, INSERT, DELETE, and UPDATE.',
        }),
    ).exactOptional(),
    MaxFileSize: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum size (in KB) of any .csv file used to load data on an S3 bucket and transfer data to Amazon Redshift. It defaults to 1048576KB (1 GB).',
        }),
    ).exactOptional(),
    Password: SecretStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The password for the user named in the <code>username</code> property.',
        }),
    ).exactOptional(),
    Port: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description: 'The port number for Amazon Redshift. The default value is 5439.',
        }),
    ).exactOptional(),
    RemoveQuotes: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that specifies to remove surrounding quotation marks from strings in the incoming data. All characters within the quotation marks, including delimiters, are retained. Choose <code>true</code> to remove quotation marks. The default is <code>false</code>.',
        }),
    ).exactOptional(),
    ReplaceInvalidChars: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of characters that you want to replace. Use with <code>ReplaceChars</code>.',
        }),
    ).exactOptional(),
    ReplaceChars: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that specifies to replaces the invalid characters specified in <code>ReplaceInvalidChars</code>, substituting the specified characters instead. The default is <code>"?"</code>.',
        }),
    ).exactOptional(),
    ServerName: StringSchema.and(
      z.any().openapi({ description: 'The name of the Amazon Redshift cluster you are using.' }),
    ).exactOptional(),
    ServiceAccessRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that has access to the Amazon Redshift service. The role must allow the <code>iam:PassRole</code> action.',
        }),
    ).exactOptional(),
    ServerSideEncryptionKmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The KMS key ID. If you are using <code>SSE_KMS</code> for the <code>EncryptionMode</code>, provide this key ID. The key that you use needs an attached policy that enables IAM user permissions and allows use of the key.',
        }),
    ).exactOptional(),
    TimeFormat: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The time format that you want to use. Valid values are <code>auto</code> (case-sensitive), <code>'timeformat_string'</code>, <code>'epochsecs'</code>, or <code>'epochmillisecs'</code>. It defaults to 10. Using <code>auto</code> recognizes most strings, even some that aren't supported when you use a time format string. </p> <p>If your date and time values use formats different from each other, set this parameter to <code>auto</code>. </p>",
        }),
    ).exactOptional(),
    TrimBlanks: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that specifies to remove the trailing white space characters from a VARCHAR string. This parameter applies only to columns with a VARCHAR data type. Choose <code>true</code> to remove unneeded white space. The default is <code>false</code>.',
        }),
    ).exactOptional(),
    TruncateColumns: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that specifies to truncate data in columns to the appropriate number of characters, so that the data fits in the column. This parameter applies only to columns with a VARCHAR or CHAR data type, and rows with a size of 4 MB or less. Choose <code>true</code> to truncate data. The default is <code>false</code>.',
        }),
    ).exactOptional(),
    Username: StringSchema.and(
      z.any().openapi({ description: 'An Amazon Redshift user name for a registered user.' }),
    ).exactOptional(),
    WriteBufferSize: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The size (in KB) of the in-memory file write buffer used when generating .csv files on the local disk at the DMS replication instance. The default value is 1000 (buffer size is 1000KB).',
        }),
    ).exactOptional(),
    SecretsManagerAccessRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in <code>SecretsManagerSecret</code>. The role must allow the <code>iam:PassRole</code> action. <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets Manager secret that allows access to the Amazon Redshift endpoint.</p> <note> <p>You can specify one of two sets of values for these permissions. You can specify the values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify clear-text values for <code>UserName</code>, <code>Password</code>, <code>ServerName</code>, and <code>Port</code>. You can\'t specify both. For more information on creating this <code>SecretsManagerSecret</code> and the <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code> required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service resources</a> in the <i>Database Migration Service User Guide</i>.</p> </note>',
        }),
    ).exactOptional(),
    SecretsManagerSecretId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code> that contains the Amazon Redshift endpoint connection details.',
        }),
    ).exactOptional(),
    MapBooleanAsBoolean: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'When true, lets Redshift migrate the boolean type as boolean. By default, Redshift migrates booleans as <code>varchar(1)</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information that defines an Amazon Redshift endpoint.',
    required: [],
  })
  .openapi('RedshiftSettings')

const PluginNameValueSchema = z
  .enum(['no-preference', 'test-decoding', 'pglogical'])
  .openapi('PluginNameValue')

const PostgreSQLSettingsSchema = z
  .object({
    AfterConnectScript: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>For use with change data capture (CDC) only, this attribute has DMS bypass foreign keys and user triggers to reduce the time it takes to bulk load data.</p> <p>Example: <code>afterConnectScript=SET session_replication_role='replica'</code> </p>",
        }),
    ).exactOptional(),
    CaptureDdls: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>To capture DDL events, DMS creates various artifacts in the PostgreSQL database when the task starts. You can later remove these artifacts.</p> <p>If this value is set to <code>N</code>, you don't have to create tables or triggers on the source database.</p>",
        }),
    ).exactOptional(),
    MaxFileSize: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the maximum size (in KB) of any .csv file used to transfer data to PostgreSQL.</p> <p>Example: <code>maxFileSize=512</code> </p>',
        }),
    ).exactOptional(),
    DatabaseName: StringSchema.and(
      z.any().openapi({ description: 'Database name for the endpoint.' }),
    ).exactOptional(),
    DdlArtifactsSchema: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The schema in which the operational DDL database artifacts are created.</p> <p>Example: <code>ddlArtifactsSchema=xyzddlschema;</code> </p>',
        }),
    ).exactOptional(),
    ExecuteTimeout: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Sets the client statement timeout for the PostgreSQL instance, in seconds. The default value is 60 seconds.</p> <p>Example: <code>executeTimeout=100;</code> </p>',
        }),
    ).exactOptional(),
    FailTasksOnLobTruncation: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When set to <code>true</code>, this value causes a task to fail if the actual size of a LOB column is greater than the specified <code>LobMaxSize</code>.</p> <p>If task is set to Limited LOB mode and this option is set to true, the task fails instead of truncating the LOB data.</p>',
        }),
    ).exactOptional(),
    HeartbeatEnable: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The write-ahead log (WAL) heartbeat feature mimics a dummy transaction. By doing this, it prevents idle logical replication slots from holding onto old WAL logs, which can result in storage full situations on the source. This heartbeat keeps <code>restart_lsn</code> moving and prevents storage full scenarios.',
        }),
    ).exactOptional(),
    HeartbeatSchema: StringSchema.and(
      z
        .any()
        .openapi({ description: 'Sets the schema in which the heartbeat artifacts are created.' }),
    ).exactOptional(),
    HeartbeatFrequency: IntegerOptionalSchema.and(
      z.any().openapi({ description: 'Sets the WAL heartbeat frequency (in minutes).' }),
    ).exactOptional(),
    Password: SecretStringSchema.and(
      z.any().openapi({ description: 'Endpoint connection password.' }),
    ).exactOptional(),
    Port: IntegerOptionalSchema.and(
      z.any().openapi({ description: 'Endpoint TCP port. The default is 5432.' }),
    ).exactOptional(),
    ServerName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The host name of the endpoint database. </p> <p>For an Amazon RDS PostgreSQL instance, this is the output of <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html">DescribeDBInstances</a>, in the <code> <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Endpoint.html">Endpoint</a>.Address</code> field.</p> <p>For an Aurora PostgreSQL instance, this is the output of <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusters.html">DescribeDBClusters</a>, in the <code>Endpoint</code> field.</p>',
        }),
    ).exactOptional(),
    Username: StringSchema.and(
      z.any().openapi({ description: 'Endpoint connection user name.' }),
    ).exactOptional(),
    SlotName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Sets the name of a previously created logical replication slot for a change data capture (CDC) load of the PostgreSQL source instance. </p> <p>When used with the <code>CdcStartPosition</code> request parameter for the DMS API , this attribute also makes it possible to use native CDC start points. DMS verifies that the specified logical replication slot exists before starting the CDC load task. It also verifies that the task was created with a valid setting of <code>CdcStartPosition</code>. If the specified slot doesn\'t exist or the task doesn\'t have a valid <code>CdcStartPosition</code> setting, DMS raises an error.</p> <p>For more information about setting the <code>CdcStartPosition</code> request parameter, see <a href="dms/latest/userguide/CHAP_Task.CDC.html#CHAP_Task.CDC.StartPoint.Native">Determining a CDC native start point</a> in the <i>Database Migration Service User Guide</i>. For more information about using <code>CdcStartPosition</code>, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationTask.html">CreateReplicationTask</a>, <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html">StartReplicationTask</a>, and <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationTask.html">ModifyReplicationTask</a>.</p>',
        }),
    ).exactOptional(),
    PluginName: PluginNameValueSchema.and(
      z.any().openapi({ description: 'Specifies the plugin to use to create a replication slot.' }),
    ).exactOptional(),
    SecretsManagerAccessRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in <code>SecretsManagerSecret</code>. The role must allow the <code>iam:PassRole</code> action. <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets Manager secret that allows access to the PostgreSQL endpoint.</p> <note> <p>You can specify one of two sets of values for these permissions. You can specify the values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify clear-text values for <code>UserName</code>, <code>Password</code>, <code>ServerName</code>, and <code>Port</code>. You can\'t specify both. For more information on creating this <code>SecretsManagerSecret</code> and the <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code> required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service resources</a> in the <i>Database Migration Service User Guide</i>.</p> </note>',
        }),
    ).exactOptional(),
    SecretsManagerSecretId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code> that contains the PostgreSQL endpoint connection details.',
        }),
    ).exactOptional(),
    TrimSpaceInChar: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use the <code>TrimSpaceInChar</code> source endpoint setting to trim data on CHAR and NCHAR data types during migration. The default value is <code>true</code>.',
        }),
    ).exactOptional(),
    MapBooleanAsBoolean: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'When true, lets PostgreSQL migrate the boolean type as boolean. By default, PostgreSQL migrates booleans as <code>varchar(5)</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information that defines a PostgreSQL endpoint.',
    required: [],
  })
  .openapi('PostgreSQLSettings')

const TargetDbTypeSchema = z
  .enum(['specific-database', 'multiple-databases'])
  .openapi('TargetDbType')

const MySQLSettingsSchema = z
  .object({
    AfterConnectScript: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a script to run immediately after DMS connects to the endpoint. The migration task continues running regardless if the SQL statement succeeds or fails.</p> <p>For this parameter, provide the code of the script itself, not the name of a file containing the script.</p>',
        }),
    ).exactOptional(),
    CleanSourceMetadataOnMismatch: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Cleans and recreates table metadata information on the replication instance when a mismatch occurs. For example, in a situation where running an alter DDL on the table could result in different information about the table cached in the replication instance. ',
        }),
    ).exactOptional(),
    DatabaseName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Database name for the endpoint. For a MySQL source or target endpoint, don't explicitly specify the database using the <code>DatabaseName</code> request parameter on either the <code>CreateEndpoint</code> or <code>ModifyEndpoint</code> API call. Specifying <code>DatabaseName</code> when you create or modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.",
        }),
    ).exactOptional(),
    EventsPollInterval: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies how often to check the binary log for new changes/events when the database is idle. The default is five seconds.</p> <p>Example: <code>eventsPollInterval=5;</code> </p> <p>In the example, DMS checks for changes in the binary logs every five seconds.</p>',
        }),
    ).exactOptional(),
    TargetDbType: TargetDbTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies where to migrate source tables on the target, either to a single database or multiple databases. If you specify <code>SPECIFIC_DATABASE</code>, specify the database name using the <code>DatabaseName</code> parameter of the <code>Endpoint</code> object.</p> <p>Example: <code>targetDbType=MULTIPLE_DATABASES</code> </p>',
        }),
    ).exactOptional(),
    MaxFileSize: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database.</p> <p>Example: <code>maxFileSize=512</code> </p>',
        }),
    ).exactOptional(),
    ParallelLoadThreads: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Improves performance when loading data into the MySQL-compatible target database. Specifies how many threads to use to load the data into the MySQL-compatible target database. Setting a large number of threads can have an adverse effect on database performance, because a separate connection is required for each thread. The default is one.</p> <p>Example: <code>parallelLoadThreads=1</code> </p>',
        }),
    ).exactOptional(),
    Password: SecretStringSchema.and(
      z.any().openapi({ description: 'Endpoint connection password.' }),
    ).exactOptional(),
    Port: IntegerOptionalSchema.and(
      z.any().openapi({ description: 'Endpoint TCP port.' }),
    ).exactOptional(),
    ServerName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The host name of the endpoint database. </p> <p>For an Amazon RDS MySQL instance, this is the output of <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html">DescribeDBInstances</a>, in the <code> <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Endpoint.html">Endpoint</a>.Address</code> field.</p> <p>For an Aurora MySQL instance, this is the output of <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusters.html">DescribeDBClusters</a>, in the <code>Endpoint</code> field.</p>',
        }),
    ).exactOptional(),
    ServerTimezone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the time zone for the source MySQL database.</p> <p>Example: <code>serverTimezone=US/Pacific;</code> </p> <p>Note: Do not enclose time zones in single quotes.</p>',
        }),
    ).exactOptional(),
    Username: StringSchema.and(
      z.any().openapi({ description: 'Endpoint connection user name.' }),
    ).exactOptional(),
    SecretsManagerAccessRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in <code>SecretsManagerSecret</code>. The role must allow the <code>iam:PassRole</code> action. <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets Manager secret that allows access to the MySQL endpoint.</p> <note> <p>You can specify one of two sets of values for these permissions. You can specify the values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify clear-text values for <code>UserName</code>, <code>Password</code>, <code>ServerName</code>, and <code>Port</code>. You can\'t specify both. For more information on creating this <code>SecretsManagerSecret</code> and the <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code> required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service resources</a> in the <i>Database Migration Service User Guide</i>.</p> </note>',
        }),
    ).exactOptional(),
    SecretsManagerSecretId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code> that contains the MySQL endpoint connection details.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information that defines a MySQL endpoint.', required: [] })
  .openapi('MySQLSettings')

const IntegerListSchema = z.array(IntegerSchema).openapi('IntegerList')

const CharLengthSemanticsSchema = z.enum(['default', 'char', 'byte']).openapi('CharLengthSemantics')

const OracleSettingsSchema = z
  .object({
    AddSupplementalLogging: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set this attribute to set up table-level supplemental logging for the Oracle database. This attribute enables PRIMARY KEY supplemental logging on all tables selected for a migration task.</p> <p>If you use this option, you still need to enable database-level supplemental logging.</p>',
        }),
    ).exactOptional(),
    ArchivedLogDestId: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the ID of the destination for the archived redo logs. This value should be the same as a number in the dest_id column of the v$archived_log view. If you work with an additional redo log destination, use the <code>AdditionalArchivedLogDestId</code> option to specify the additional destination ID. Doing this improves performance by ensuring that the correct logs are accessed from the outset.',
        }),
    ).exactOptional(),
    AdditionalArchivedLogDestId: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set this attribute with <code>ArchivedLogDestId</code> in a primary/ standby setup. This attribute is useful in the case of a switchover. In this case, DMS needs to know which destination to get archive redo logs from to read changes. This need arises because the previous primary instance is now a standby instance after switchover.</p> <p>Although DMS supports the use of the Oracle <code>RESETLOGS</code> option to open the database, never use <code>RESETLOGS</code> unless necessary. For additional information about <code>RESETLOGS</code>, see <a href="https://docs.oracle.com/en/database/oracle/oracle-database/19/bradv/rman-data-repair-concepts.html#GUID-1805CCF7-4AF2-482D-B65A-998192F89C2B">RMAN Data Repair Concepts</a> in the <i>Oracle Database Backup and Recovery User\'s Guide</i>.</p>',
        }),
    ).exactOptional(),
    ExtraArchivedLogDestIds: IntegerListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the IDs of one more destinations for one or more archived redo logs. These IDs are the values of the <code>dest_id</code> column in the <code>v$archived_log</code> view. Use this setting with the <code>archivedLogDestId</code> extra connection attribute in a primary-to-single setup or a primary-to-multiple-standby setup. </p> <p>This setting is useful in a switchover when you use an Oracle Data Guard database as a source. In this case, DMS needs information about what destination to get archive redo logs from to read changes. DMS needs this because after the switchover the previous primary is a standby instance. For example, in a primary-to-single standby setup you might apply the following settings. </p> <p> <code>archivedLogDestId=1; ExtraArchivedLogDestIds=[2]</code> </p> <p>In a primary-to-multiple-standby setup, you might apply the following settings.</p> <p> <code>archivedLogDestId=1; ExtraArchivedLogDestIds=[2,3,4]</code> </p> <p>Although DMS supports the use of the Oracle <code>RESETLOGS</code> option to open the database, never use <code>RESETLOGS</code> unless it\'s necessary. For more information about <code>RESETLOGS</code>, see <a href="https://docs.oracle.com/en/database/oracle/oracle-database/19/bradv/rman-data-repair-concepts.html#GUID-1805CCF7-4AF2-482D-B65A-998192F89C2B"> RMAN Data Repair Concepts</a> in the <i>Oracle Database Backup and Recovery User\'s Guide</i>.</p>',
        }),
    ).exactOptional(),
    AllowSelectNestedTables: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set this attribute to <code>true</code> to enable replication of Oracle tables containing columns that are nested tables or defined types.',
        }),
    ).exactOptional(),
    ParallelAsmReadThreads: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set this attribute to change the number of threads that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM). You can specify an integer value between 2 (the default) and 8 (the maximum). Use this attribute together with the <code>readAheadBlocks</code> attribute.',
        }),
    ).exactOptional(),
    ReadAheadBlocks: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set this attribute to change the number of read-ahead blocks that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM). You can specify an integer value between 1000 (the default) and 200,000 (the maximum).',
        }),
    ).exactOptional(),
    AccessAlternateDirectly: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set this attribute to <code>false</code> in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. This tells the DMS instance to not access redo logs through any specified path prefix replacement using direct file access.',
        }),
    ).exactOptional(),
    UseAlternateFolderForOnline: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set this attribute to <code>true</code> in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. This tells the DMS instance to use any specified prefix replacement to access all online redo logs.',
        }),
    ).exactOptional(),
    OraclePathPrefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. This value specifies the default Oracle root used to access the redo logs.',
        }),
    ).exactOptional(),
    UsePathPrefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. This value specifies the path prefix used to replace the default Oracle root to access the redo logs.',
        }),
    ).exactOptional(),
    ReplacePathPrefix: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set this attribute to true in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. This setting tells DMS instance to replace the default Oracle root with the specified <code>usePathPrefix</code> setting to access the redo logs.',
        }),
    ).exactOptional(),
    EnableHomogenousTablespace: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set this attribute to enable homogenous tablespace replication and create existing tables or indexes under the same tablespace on the target.',
        }),
    ).exactOptional(),
    DirectPathNoLog: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'When set to <code>true</code>, this attribute helps to increase the commit rate on the Oracle target database by writing directly to tables and not writing a trail to database logs.',
        }),
    ).exactOptional(),
    ArchivedLogsOnly: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'When this field is set to <code>Y</code>, DMS only accesses the archived redo logs. If the archived redo logs are stored on Automatic Storage Management (ASM) only, the DMS user account needs to be granted ASM privileges.',
        }),
    ).exactOptional(),
    AsmPassword: SecretStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'For an Oracle source endpoint, your Oracle Automatic Storage Management (ASM) password. You can set this value from the <code> <i>asm_user_password</i> </code> value. You set this value as part of the comma-separated value that you set to the <code>Password</code> request parameter when you create the endpoint to access transaction logs using Binary Reader. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC.Configuration">Configuration for change data capture (CDC) on an Oracle source database</a>.',
        }),
    ).exactOptional(),
    AsmServer: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'For an Oracle source endpoint, your ASM server address. You can set this value from the <code>asm_server</code> value. You set <code>asm_server</code> as part of the extra connection attribute string to access an Oracle server with Binary Reader that uses ASM. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC.Configuration">Configuration for change data capture (CDC) on an Oracle source database</a>.',
        }),
    ).exactOptional(),
    AsmUser: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'For an Oracle source endpoint, your ASM user name. You can set this value from the <code>asm_user</code> value. You set <code>asm_user</code> as part of the extra connection attribute string to access an Oracle server with Binary Reader that uses ASM. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC.Configuration">Configuration for change data capture (CDC) on an Oracle source database</a>.',
        }),
    ).exactOptional(),
    CharLengthSemantics: CharLengthSemanticsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether the length of a character column is in bytes or in characters. To indicate that the character column length is in characters, set this attribute to <code>CHAR</code>. Otherwise, the character column length is in bytes.</p> <p>Example: <code>charLengthSemantics=CHAR;</code> </p>',
        }),
    ).exactOptional(),
    DatabaseName: StringSchema.and(
      z.any().openapi({ description: 'Database name for the endpoint.' }),
    ).exactOptional(),
    DirectPathParallelLoad: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'When set to <code>true</code>, this attribute specifies a parallel load when <code>useDirectPathFullLoad</code> is set to <code>Y</code>. This attribute also only applies when you use the DMS parallel load feature. Note that the target table cannot have any constraints or indexes.',
        }),
    ).exactOptional(),
    FailTasksOnLobTruncation: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When set to <code>true</code>, this attribute causes a task to fail if the actual size of an LOB column is greater than the specified <code>LobMaxSize</code>.</p> <p>If a task is set to limited LOB mode and this option is set to <code>true</code>, the task fails instead of truncating the LOB data.</p>',
        }),
    ).exactOptional(),
    NumberDatatypeScale: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the number scale. You can select a scale up to 38, or you can select FLOAT. By default, the NUMBER data type is converted to precision 38, scale 10.</p> <p>Example: <code>numberDataTypeScale=12</code> </p>',
        }),
    ).exactOptional(),
    Password: SecretStringSchema.and(
      z.any().openapi({ description: 'Endpoint connection password.' }),
    ).exactOptional(),
    Port: IntegerOptionalSchema.and(
      z.any().openapi({ description: 'Endpoint TCP port.' }),
    ).exactOptional(),
    ReadTableSpaceName: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'When set to <code>true</code>, this attribute supports tablespace replication.',
        }),
    ).exactOptional(),
    RetryInterval: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the number of seconds that the system waits before resending a query.</p> <p>Example: <code>retryInterval=6;</code> </p>',
        }),
    ).exactOptional(),
    SecurityDbEncryption: SecretStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'For an Oracle source endpoint, the transparent data encryption (TDE) password required by AWM DMS to access Oracle redo logs encrypted by TDE using Binary Reader. It is also the <code> <i>TDE_Password</i> </code> part of the comma-separated value you set to the <code>Password</code> request parameter when you create the endpoint. The <code>SecurityDbEncryptian</code> setting is related to this <code>SecurityDbEncryptionName</code> setting. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.Encryption"> Supported encryption methods for using Oracle as a source for DMS </a> in the <i>Database Migration Service User Guide</i>. ',
        }),
    ).exactOptional(),
    SecurityDbEncryptionName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'For an Oracle source endpoint, the name of a key used for the transparent data encryption (TDE) of the columns and tablespaces in an Oracle source database that is encrypted using TDE. The key value is the value of the <code>SecurityDbEncryption</code> setting. For more information on setting the key name value of <code>SecurityDbEncryptionName</code>, see the information and example for setting the <code>securityDbEncryptionName</code> extra connection attribute in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.Encryption"> Supported encryption methods for using Oracle as a source for DMS </a> in the <i>Database Migration Service User Guide</i>.',
        }),
    ).exactOptional(),
    ServerName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Fully qualified domain name of the endpoint.</p> <p>For an Amazon RDS Oracle instance, this is the output of <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html">DescribeDBInstances</a>, in the <code> <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Endpoint.html">Endpoint</a>.Address</code> field.</p>',
        }),
    ).exactOptional(),
    SpatialDataOptionToGeoJsonFunctionName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use this attribute to convert <code>SDO_GEOMETRY</code> to <code>GEOJSON</code> format. By default, DMS calls the <code>SDO2GEOJSON</code> custom function if present and accessible. Or you can create your own custom function that mimics the operation of <code>SDOGEOJSON</code> and set <code>SpatialDataOptionToGeoJsonFunctionName</code> to call it instead. ',
        }),
    ).exactOptional(),
    StandbyDelayTime: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Use this attribute to specify a time in minutes for the delay in standby sync. If the source is an Oracle Active Data Guard standby database, use this attribute to specify the time lag between primary and standby databases.</p> <p>In DMS, you can create an Oracle CDC task that uses an Active Data Guard standby instance as a source for replicating ongoing changes. Doing this eliminates the need to connect to an active database that might be in production.</p>',
        }),
    ).exactOptional(),
    Username: StringSchema.and(
      z.any().openapi({ description: 'Endpoint connection user name.' }),
    ).exactOptional(),
    UseBFile: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set this attribute to Y to capture change data using the Binary Reader utility. Set <code>UseLogminerReader</code> to N to set this attribute to Y. To use Binary Reader with Amazon RDS for Oracle as the source, you set additional attributes. For more information about using this setting with Oracle Automatic Storage Management (ASM), see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC"> Using Oracle LogMiner or DMS Binary Reader for CDC</a>.',
        }),
    ).exactOptional(),
    UseDirectPathFullLoad: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set this attribute to Y to have DMS use a direct path full load. Specify this value to use the direct path protocol in the Oracle Call Interface (OCI). By using this OCI protocol, you can bulk-load Oracle target tables during a full load.',
        }),
    ).exactOptional(),
    UseLogminerReader: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set this attribute to Y to capture change data using the Oracle LogMiner utility (the default). Set this attribute to N if you want to access the redo logs as a binary file. When you set <code>UseLogminerReader</code> to N, also set <code>UseBfile</code> to Y. For more information on this setting and using Oracle ASM, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC"> Using Oracle LogMiner or DMS Binary Reader for CDC</a> in the <i>DMS User Guide</i>.',
        }),
    ).exactOptional(),
    SecretsManagerAccessRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in <code>SecretsManagerSecret</code>. The role must allow the <code>iam:PassRole</code> action. <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets Manager secret that allows access to the Oracle endpoint.</p> <note> <p>You can specify one of two sets of values for these permissions. You can specify the values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify clear-text values for <code>UserName</code>, <code>Password</code>, <code>ServerName</code>, and <code>Port</code>. You can\'t specify both. For more information on creating this <code>SecretsManagerSecret</code> and the <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code> required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service resources</a> in the <i>Database Migration Service User Guide</i>.</p> </note>',
        }),
    ).exactOptional(),
    SecretsManagerSecretId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code> that contains the Oracle endpoint connection details.',
        }),
    ).exactOptional(),
    SecretsManagerOracleAsmAccessRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Required only if your Oracle endpoint uses Automatic Storage Management (ASM). The full ARN of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the <code>SecretsManagerOracleAsmSecret</code>. This <code>SecretsManagerOracleAsmSecret</code> has the secret value that allows access to the Oracle ASM of the endpoint.</p> <note> <p>You can specify one of two sets of values for these permissions. You can specify the values for this setting and <code>SecretsManagerOracleAsmSecretId</code>. Or you can specify clear-text values for <code>AsmUserName</code>, <code>AsmPassword</code>, and <code>AsmServerName</code>. You can\'t specify both. For more information on creating this <code>SecretsManagerOracleAsmSecret</code> and the <code>SecretsManagerOracleAsmAccessRoleArn</code> and <code>SecretsManagerOracleAsmSecretId</code> required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service resources</a> in the <i>Database Migration Service User Guide</i>.</p> </note>',
        }),
    ).exactOptional(),
    SecretsManagerOracleAsmSecretId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Required only if your Oracle endpoint uses Automatic Storage Management (ASM). The full ARN, partial ARN, or friendly name of the <code>SecretsManagerOracleAsmSecret</code> that contains the Oracle ASM connection details for the Oracle endpoint.',
        }),
    ).exactOptional(),
    TrimSpaceInChar: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use the <code>TrimSpaceInChar</code> source endpoint setting to trim data on CHAR and NCHAR data types during migration. The default value is <code>true</code>.',
        }),
    ).exactOptional(),
    ConvertTimestampWithZoneToUTC: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'When true, converts timestamps with the <code>timezone</code> datatype to their UTC value.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information that defines an Oracle endpoint.', required: [] })
  .openapi('OracleSettings')

const SybaseSettingsSchema = z
  .object({
    DatabaseName: StringSchema.and(
      z.any().openapi({ description: 'Database name for the endpoint.' }),
    ).exactOptional(),
    Password: SecretStringSchema.and(
      z.any().openapi({ description: 'Endpoint connection password.' }),
    ).exactOptional(),
    Port: IntegerOptionalSchema.and(
      z.any().openapi({ description: 'Endpoint TCP port. The default is 5000.' }),
    ).exactOptional(),
    ServerName: StringSchema.and(
      z.any().openapi({ description: 'Fully qualified domain name of the endpoint.' }),
    ).exactOptional(),
    Username: StringSchema.and(
      z.any().openapi({ description: 'Endpoint connection user name.' }),
    ).exactOptional(),
    SecretsManagerAccessRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in <code>SecretsManagerSecret</code>. The role must allow the <code>iam:PassRole</code> action. <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets Manager secret that allows access to the SAP ASE endpoint.</p> <note> <p>You can specify one of two sets of values for these permissions. You can specify the values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify clear-text values for <code>UserName</code>, <code>Password</code>, <code>ServerName</code>, and <code>Port</code>. You can\'t specify both. For more information on creating this <code>SecretsManagerSecret</code> and the <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code> required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service resources</a> in the <i>Database Migration Service User Guide</i>.</p> </note>',
        }),
    ).exactOptional(),
    SecretsManagerSecretId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code> that contains the SAP SAE endpoint connection details.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information that defines a SAP ASE endpoint.', required: [] })
  .openapi('SybaseSettings')

const SafeguardPolicySchema = z
  .enum([
    'rely-on-sql-server-replication-agent',
    'exclusive-automatic-truncation',
    'shared-automatic-truncation',
  ])
  .openapi('SafeguardPolicy')

const TlogAccessModeSchema = z
  .enum(['BackupOnly', 'PreferBackup', 'PreferTlog', 'TlogOnly'])
  .openapi('TlogAccessMode')

const MicrosoftSQLServerSettingsSchema = z
  .object({
    Port: IntegerOptionalSchema.and(
      z.any().openapi({ description: 'Endpoint TCP port.' }),
    ).exactOptional(),
    BcpPacketSize: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum size of the packets (in bytes) used to transfer data using BCP.',
        }),
    ).exactOptional(),
    DatabaseName: StringSchema.and(
      z.any().openapi({ description: 'Database name for the endpoint.' }),
    ).exactOptional(),
    ControlTablesFileGroup: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a file group for the DMS internal tables. When the replication task starts, all the internal DMS control tables (awsdms_ apply_exception, awsdms_apply, awsdms_changes) are created for the specified file group.',
        }),
    ).exactOptional(),
    Password: SecretStringSchema.and(
      z.any().openapi({ description: 'Endpoint connection password.' }),
    ).exactOptional(),
    QuerySingleAlwaysOnNode: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Cleans and recreates table metadata information on the replication instance when a mismatch occurs. An example is a situation where running an alter DDL statement on a table might result in different information about the table cached in the replication instance.',
        }),
    ).exactOptional(),
    ReadBackupOnly: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            "When this attribute is set to <code>Y</code>, DMS only reads changes from transaction log backups and doesn't read from the active transaction log file during ongoing replication. Setting this parameter to <code>Y</code> enables you to control active transaction log file growth during full load and ongoing replication tasks. However, it can add some source latency to ongoing replication.",
        }),
    ).exactOptional(),
    SafeguardPolicy: SafeguardPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Use this attribute to minimize the need to access the backup log and enable DMS to prevent truncation using one of the following two methods.</p> <p> <i>Start transactions in the database:</i> This is the default method. When this method is used, DMS prevents TLOG truncation by mimicking a transaction in the database. As long as such a transaction is open, changes that appear after the transaction started aren't truncated. If you need Microsoft Replication to be enabled in your database, then you must choose this method.</p> <p> <i>Exclusively use sp_repldone within a single task</i>: When this method is used, DMS reads the changes and then uses sp_repldone to mark the TLOG transactions as ready for truncation. Although this method doesn't involve any transactional activities, it can only be used when Microsoft Replication isn't running. Also, when using this method, only one DMS task can access the database at any given time. Therefore, if you need to run parallel DMS tasks against the same database, use the default method.</p>",
        }),
    ).exactOptional(),
    ServerName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Fully qualified domain name of the endpoint. For an Amazon RDS SQL Server instance, this is the output of <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html">DescribeDBInstances</a>, in the <code> <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Endpoint.html">Endpoint</a>.Address</code> field.',
        }),
    ).exactOptional(),
    Username: StringSchema.and(
      z.any().openapi({ description: 'Endpoint connection user name.' }),
    ).exactOptional(),
    UseBcpFullLoad: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use this to attribute to transfer data for full-load operations using BCP. When the target table contains an identity column that does not exist in the source table, you must disable the use BCP for loading table option.',
        }),
    ).exactOptional(),
    UseThirdPartyBackupDevice: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'When this attribute is set to <code>Y</code>, DMS processes third-party transaction log backups if they are created in native format.',
        }),
    ).exactOptional(),
    SecretsManagerAccessRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in <code>SecretsManagerSecret</code>. The role must allow the <code>iam:PassRole</code> action. <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets Manager secret that allows access to the SQL Server endpoint.</p> <note> <p>You can specify one of two sets of values for these permissions. You can specify the values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify clear-text values for <code>UserName</code>, <code>Password</code>, <code>ServerName</code>, and <code>Port</code>. You can\'t specify both. For more information on creating this <code>SecretsManagerSecret</code> and the <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code> required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service resources</a> in the <i>Database Migration Service User Guide</i>.</p> </note>',
        }),
    ).exactOptional(),
    SecretsManagerSecretId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code> that contains the SQL Server endpoint connection details.',
        }),
    ).exactOptional(),
    TrimSpaceInChar: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use the <code>TrimSpaceInChar</code> source endpoint setting to trim data on CHAR and NCHAR data types during migration. The default value is <code>true</code>.',
        }),
    ).exactOptional(),
    TlogAccessMode: TlogAccessModeSchema.and(
      z.any().openapi({ description: 'Indicates the mode used to fetch CDC data.' }),
    ).exactOptional(),
    ForceLobLookup: BooleanOptionalSchema.and(
      z.any().openapi({ description: 'Forces LOB lookup on inline LOB.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information that defines a Microsoft SQL Server endpoint.',
    required: [],
  })
  .openapi('MicrosoftSQLServerSettings')

const IBMDb2SettingsSchema = z
  .object({
    DatabaseName: StringSchema.and(
      z.any().openapi({ description: 'Database name for the endpoint.' }),
    ).exactOptional(),
    Password: SecretStringSchema.and(
      z.any().openapi({ description: 'Endpoint connection password.' }),
    ).exactOptional(),
    Port: IntegerOptionalSchema.and(
      z.any().openapi({ description: 'Endpoint TCP port. The default value is 50000.' }),
    ).exactOptional(),
    ServerName: StringSchema.and(
      z.any().openapi({ description: 'Fully qualified domain name of the endpoint.' }),
    ).exactOptional(),
    SetDataCaptureChanges: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description: 'Enables ongoing replication (CDC) as a BOOLEAN value. The default is true.',
        }),
    ).exactOptional(),
    CurrentLsn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'For ongoing replication (CDC), use CurrentLSN to specify a log sequence number (LSN) where you want the replication to start.',
        }),
    ).exactOptional(),
    MaxKBytesPerRead: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description: 'Maximum number of bytes per read, as a NUMBER value. The default is 64 KB.',
        }),
    ).exactOptional(),
    Username: StringSchema.and(
      z.any().openapi({ description: 'Endpoint connection user name.' }),
    ).exactOptional(),
    SecretsManagerAccessRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in <code>SecretsManagerSecret</code>. The role must allow the <code>iam:PassRole</code> action. <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets Manager secret that allows access to the Db2 LUW endpoint. </p> <note> <p>You can specify one of two sets of values for these permissions. You can specify the values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify clear-text values for <code>UserName</code>, <code>Password</code>, <code>ServerName</code>, and <code>Port</code>. You can\'t specify both. For more information on creating this <code>SecretsManagerSecret</code> and the <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code> required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service resources</a> in the <i>Database Migration Service User Guide</i>.</p> </note>',
        }),
    ).exactOptional(),
    SecretsManagerSecretId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code> that contains the Db2 LUW endpoint connection details.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information that defines an IBM Db2 LUW endpoint.',
    required: [],
  })
  .openapi('IBMDb2Settings')

const DocDbSettingsSchema = z
  .object({
    Username: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The user name you use to access the DocumentDB source endpoint. ',
        }),
    ).exactOptional(),
    Password: SecretStringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The password for the user account you use to access the DocumentDB source endpoint. ',
        }),
    ).exactOptional(),
    ServerName: StringSchema.and(
      z
        .any()
        .openapi({ description: ' The name of the server on the DocumentDB source endpoint. ' }),
    ).exactOptional(),
    Port: IntegerOptionalSchema.and(
      z.any().openapi({ description: ' The port value for the DocumentDB source endpoint. ' }),
    ).exactOptional(),
    DatabaseName: StringSchema.and(
      z.any().openapi({ description: ' The database name on the DocumentDB source endpoint. ' }),
    ).exactOptional(),
    NestingLevel: NestingLevelValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Specifies either document or table mode. </p> <p>Default value is <code>"none"</code>. Specify <code>"none"</code> to use document mode. Specify <code>"one"</code> to use table mode.</p>',
        }),
    ).exactOptional(),
    ExtractDocId: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Specifies the document ID. Use this setting when <code>NestingLevel</code> is set to <code>"none"</code>. </p> <p>Default value is <code>"false"</code>. </p>',
        }),
    ).exactOptional(),
    DocsToInvestigate: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Indicates the number of documents to preview to determine the document organization. Use this setting when <code>NestingLevel</code> is set to <code>"one"</code>. </p> <p>Must be a positive value greater than <code>0</code>. Default value is <code>1000</code>.</p>',
        }),
    ).exactOptional(),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The KMS key identifier that is used to encrypt the content on the replication instance. If you don't specify a value for the <code>KmsKeyId</code> parameter, then DMS uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.",
        }),
    ).exactOptional(),
    SecretsManagerAccessRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in <code>SecretsManagerSecret</code>. The role must allow the <code>iam:PassRole</code> action. <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets Manager secret that allows access to the DocumentDB endpoint.</p> <note> <p>You can specify one of two sets of values for these permissions. You can specify the values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify clear-text values for <code>UserName</code>, <code>Password</code>, <code>ServerName</code>, and <code>Port</code>. You can\'t specify both. For more information on creating this <code>SecretsManagerSecret</code> and the <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code> required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service resources</a> in the <i>Database Migration Service User Guide</i>.</p> </note>',
        }),
    ).exactOptional(),
    SecretsManagerSecretId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code> that contains the DocumentDB endpoint connection details.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information that defines a DocumentDB endpoint.',
    required: [],
  })
  .openapi('DocDbSettings')

const SslSecurityProtocolValueSchema = z
  .enum(['plaintext', 'ssl-encryption'])
  .openapi('SslSecurityProtocolValue')

const RedisAuthTypeValueSchema = z
  .enum(['none', 'auth-role', 'auth-token'])
  .openapi('RedisAuthTypeValue')

const RedisSettingsSchema = z
  .object({
    ServerName: StringSchema.and(
      z.any().openapi({ description: 'Fully qualified domain name of the endpoint.' }),
    ),
    Port: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'Transmission Control Protocol (TCP) port for the endpoint.' }),
    ),
    SslSecurityProtocol: SslSecurityProtocolValueSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The connection to a Redis target endpoint using Transport Layer Security (TLS). Valid values include <code>plaintext</code> and <code>ssl-encryption</code>. The default is <code>ssl-encryption</code>. The <code>ssl-encryption</code> option makes an encrypted connection. Optionally, you can identify an Amazon Resource Name (ARN) for an SSL certificate authority (CA) using the <code>SslCaCertificateArn </code>setting. If an ARN isn't given for a CA, DMS uses the Amazon root CA.</p> <p>The <code>plaintext</code> option doesn't provide Transport Layer Security (TLS) encryption for traffic between endpoint and database.</p>",
        }),
    ).exactOptional(),
    AuthType: RedisAuthTypeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of authentication to perform when connecting to a Redis target. Options include <code>none</code>, <code>auth-token</code>, and <code>auth-role</code>. The <code>auth-token</code> option requires an <code>AuthPassword</code> value to be provided. The <code>auth-role</code> option requires <code>AuthUserName</code> and <code>AuthPassword</code> values to be provided.',
        }),
    ).exactOptional(),
    AuthUserName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user name provided with the <code>auth-role</code> option of the <code>AuthType</code> setting for a Redis target endpoint.',
        }),
    ).exactOptional(),
    AuthPassword: SecretStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The password provided with the <code>auth-role</code> and <code>auth-token</code> options of the <code>AuthType</code> setting for a Redis target endpoint.',
        }),
    ).exactOptional(),
    SslCaCertificateArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the certificate authority (CA) that DMS uses to connect to your Redis target endpoint.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ServerName', 'Port'],
    description: 'Provides information that defines a Redis target endpoint.',
  })
  .openapi('RedisSettings')

const GcpMySQLSettingsSchema = z
  .object({
    AfterConnectScript: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a script to run immediately after DMS connects to the endpoint. The migration task continues running regardless if the SQL statement succeeds or fails.</p> <p>For this parameter, provide the code of the script itself, not the name of a file containing the script. </p>',
        }),
    ).exactOptional(),
    CleanSourceMetadataOnMismatch: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Cleans and recreates table metadata information on the replication instance when a mismatch occurs. For example, in a situation where running an alter DDL on the table could result in different information about the table cached in the replication instance. ',
        }),
    ).exactOptional(),
    DatabaseName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Database name for the endpoint. For a MySQL source or target endpoint, don't explicitly specify the database using the <code>DatabaseName</code> request parameter on either the <code>CreateEndpoint</code> or <code>ModifyEndpoint</code> API call. Specifying <code>DatabaseName</code> when you create or modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task. ",
        }),
    ).exactOptional(),
    EventsPollInterval: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies how often to check the binary log for new changes/events when the database is idle. The default is five seconds.</p> <p>Example: <code>eventsPollInterval=5;</code> </p> <p>In the example, DMS checks for changes in the binary logs every five seconds. </p>',
        }),
    ).exactOptional(),
    TargetDbType: TargetDbTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies where to migrate source tables on the target, either to a single database or multiple databases.</p> <p>Example: <code>targetDbType=MULTIPLE_DATABASES</code> </p>',
        }),
    ).exactOptional(),
    MaxFileSize: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database.</p> <p>Example: <code>maxFileSize=512</code> </p>',
        }),
    ).exactOptional(),
    ParallelLoadThreads: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Improves performance when loading data into the MySQL-compatible target database. Specifies how many threads to use to load the data into the MySQL-compatible target database. Setting a large number of threads can have an adverse effect on database performance, because a separate connection is required for each thread. The default is one.</p> <p>Example: <code>parallelLoadThreads=1</code> </p>',
        }),
    ).exactOptional(),
    Password: SecretStringSchema.and(
      z.any().openapi({ description: 'Endpoint connection password.' }),
    ).exactOptional(),
    Port: IntegerOptionalSchema.and(
      z.any().openapi({ description: 'Endpoint TCP port.' }),
    ).exactOptional(),
    ServerName: StringSchema.and(
      z.any().openapi({ description: 'The MySQL host name.' }),
    ).exactOptional(),
    ServerTimezone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the time zone for the source MySQL database.</p> <p>Example: <code>serverTimezone=US/Pacific;</code> </p> <p>Note: Do not enclose time zones in single quotes.</p>',
        }),
    ).exactOptional(),
    Username: StringSchema.and(
      z.any().openapi({ description: 'Endpoint connection user name.' }),
    ).exactOptional(),
    SecretsManagerAccessRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in <code>SecretsManagerSecret.</code> The role must allow the <code>iam:PassRole</code> action. <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets Manager secret that allows access to the MySQL endpoint.</p> <note> <p>You can specify one of two sets of values for these permissions. You can specify the values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify clear-text values for <code>UserName</code>, <code>Password</code>, <code>ServerName</code>, and <code>Port</code>. You can\'t specify both. For more information on creating this <code>SecretsManagerSecret</code> and the <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code> required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service resources</a> in the Database Migration Service User Guide. </p> </note>',
        }),
    ).exactOptional(),
    SecretsManagerSecretId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code> that contains the MySQL endpoint connection details. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Settings in JSON format for the source GCP MySQL endpoint.',
    required: [],
  })
  .openapi('GcpMySQLSettings')

const EndpointSchema = z
  .object({
    EndpointIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The database endpoint identifier. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens.",
        }),
    ).exactOptional(),
    EndpointType: ReplicationEndpointTypeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of endpoint. Valid values are <code>source</code> and <code>target</code>.',
        }),
    ).exactOptional(),
    EngineName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The database engine name. Valid values, depending on the EndpointType, include <code>"mysql"</code>, <code>"oracle"</code>, <code>"postgres"</code>, <code>"mariadb"</code>, <code>"aurora"</code>, <code>"aurora-postgresql"</code>, <code>"redshift"</code>, <code>"s3"</code>, <code>"db2"</code>, <code>"db2-zos"</code>, <code>"azuredb"</code>, <code>"sybase"</code>, <code>"dynamodb"</code>, <code>"mongodb"</code>, <code>"kinesis"</code>, <code>"kafka"</code>, <code>"elasticsearch"</code>, <code>"documentdb"</code>, <code>"sqlserver"</code>, <code>"neptune"</code>, and <code>"babelfish"</code>.',
        }),
    ).exactOptional(),
    EngineDisplayName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The expanded name for the engine name. For example, if the <code>EngineName</code> parameter is "aurora", this value would be "Amazon Aurora MySQL".',
        }),
    ).exactOptional(),
    Username: StringSchema.and(
      z.any().openapi({ description: 'The user name used to connect to the endpoint.' }),
    ).exactOptional(),
    ServerName: StringSchema.and(
      z.any().openapi({ description: 'The name of the server at the endpoint.' }),
    ).exactOptional(),
    Port: IntegerOptionalSchema.and(
      z.any().openapi({ description: 'The port value used to access the endpoint.' }),
    ).exactOptional(),
    DatabaseName: StringSchema.and(
      z.any().openapi({ description: 'The name of the database at the endpoint.' }),
    ).exactOptional(),
    ExtraConnectionAttributes: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Additional connection attributes used to connect to the endpoint.',
        }),
    ).exactOptional(),
    Status: StringSchema.and(
      z.any().openapi({ description: 'The status of the endpoint.' }),
    ).exactOptional(),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>An KMS key identifier that is used to encrypt the connection parameters for the endpoint.</p> <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then DMS uses your default encryption key.</p> <p>KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.</p>",
        }),
    ).exactOptional(),
    EndpointArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.',
        }),
    ).exactOptional(),
    CertificateArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) used for SSL connection to the endpoint.',
        }),
    ).exactOptional(),
    SslMode: DmsSslModeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The SSL mode used to connect to the endpoint. The default value is <code>none</code>.',
        }),
    ).exactOptional(),
    ServiceAccessRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) used by the service to access the IAM role. The role must allow the <code>iam:PassRole</code> action.',
        }),
    ).exactOptional(),
    ExternalTableDefinition: StringSchema.and(
      z.any().openapi({ description: 'The external table definition.' }),
    ).exactOptional(),
    ExternalId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Value returned by a call to CreateEndpoint that can be used for cross-account validation. Use it on a subsequent call to CreateEndpoint to create the endpoint with a cross-account. ',
        }),
    ).exactOptional(),
    DynamoDbSettings: DynamoDbSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings for the DynamoDB target endpoint. For more information, see the <code>DynamoDBSettings</code> structure.',
        }),
    ).exactOptional(),
    S3Settings: S3SettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings for the S3 target endpoint. For more information, see the <code>S3Settings</code> structure.',
        }),
    ).exactOptional(),
    DmsTransferSettings: DmsTransferSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings for the DMS Transfer type source. For more information, see the DmsTransferSettings structure. ',
        }),
    ).exactOptional(),
    MongoDbSettings: MongoDbSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings for the MongoDB source endpoint. For more information, see the <code>MongoDbSettings</code> structure.',
        }),
    ).exactOptional(),
    KinesisSettings: KinesisSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings for the Amazon Kinesis target endpoint. For more information, see the <code>KinesisSettings</code> structure.',
        }),
    ).exactOptional(),
    KafkaSettings: KafkaSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings for the Apache Kafka target endpoint. For more information, see the <code>KafkaSettings</code> structure.',
        }),
    ).exactOptional(),
    ElasticsearchSettings: ElasticsearchSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings for the OpenSearch source endpoint. For more information, see the <code>ElasticsearchSettings</code> structure.',
        }),
    ).exactOptional(),
    NeptuneSettings: NeptuneSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings for the Amazon Neptune target endpoint. For more information, see the <code>NeptuneSettings</code> structure.',
        }),
    ).exactOptional(),
    RedshiftSettings: RedshiftSettingsSchema.and(
      z.any().openapi({ description: 'Settings for the Amazon Redshift endpoint.' }),
    ).exactOptional(),
    PostgreSQLSettings: PostgreSQLSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings for the PostgreSQL source and target endpoint. For more information, see the <code>PostgreSQLSettings</code> structure.',
        }),
    ).exactOptional(),
    MySQLSettings: MySQLSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings for the MySQL source and target endpoint. For more information, see the <code>MySQLSettings</code> structure.',
        }),
    ).exactOptional(),
    OracleSettings: OracleSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings for the Oracle source and target endpoint. For more information, see the <code>OracleSettings</code> structure.',
        }),
    ).exactOptional(),
    SybaseSettings: SybaseSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings for the SAP ASE source and target endpoint. For more information, see the <code>SybaseSettings</code> structure.',
        }),
    ).exactOptional(),
    MicrosoftSQLServerSettings: MicrosoftSQLServerSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings for the Microsoft SQL Server source and target endpoint. For more information, see the <code>MicrosoftSQLServerSettings</code> structure.',
        }),
    ).exactOptional(),
    IBMDb2Settings: IBMDb2SettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings for the IBM Db2 LUW source endpoint. For more information, see the <code>IBMDb2Settings</code> structure. ',
        }),
    ).exactOptional(),
    DocDbSettings: DocDbSettingsSchema.exactOptional(),
    RedisSettings: RedisSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings for the Redis target endpoint. For more information, see the <code>RedisSettings</code> structure.',
        }),
    ).exactOptional(),
    GcpMySQLSettings: GcpMySQLSettingsSchema.and(
      z
        .any()
        .openapi({ description: 'Settings in JSON format for the source GCP MySQL endpoint.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes an endpoint of a database instance in response to operations such as the following:</p> <ul> <li> <p> <code>CreateEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpoint</code> </p> </li> <li> <p> <code>ModifyEndpoint</code> </p> </li> </ul>',
    required: [],
  })
  .openapi('Endpoint')

const CreateEndpointResponseSchema = z
  .object({
    Endpoint: EndpointSchema.and(
      z.any().openapi({ description: 'The endpoint that was created.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Endpoint: {
        EndpointArn: 'arn:aws:dms:us-east-1:123456789012:endpoint:RAAR3R22XSH46S3PWLC3NJAWKM',
        EndpointIdentifier: 'test-endpoint-1',
        EndpointType: 'source',
        EngineName: 'mysql',
        KmsKeyId: 'arn:aws:kms:us-east-1:123456789012:key/4c1731d6-5435-ed4d-be13-d53411a7cfbd',
        Port: 3306,
        ServerName: 'mydb.cx1llnox7iyx.us-west-2.rds.amazonaws.com',
        Status: 'active',
        Username: 'username',
      },
    },
    description: '<p/>',
    required: [],
  })
  .openapi('CreateEndpointResponse')

const CreateEndpointMessageSchema = z
  .object({
    EndpointIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The database endpoint identifier. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.",
        }),
    ),
    EndpointType: ReplicationEndpointTypeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of endpoint. Valid values are <code>source</code> and <code>target</code>.',
        }),
    ),
    EngineName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of engine for the endpoint. Valid values, depending on the <code>EndpointType</code> value, include <code>"mysql"</code>, <code>"oracle"</code>, <code>"postgres"</code>, <code>"mariadb"</code>, <code>"aurora"</code>, <code>"aurora-postgresql"</code>, <code>"opensearch"</code>, <code>"redshift"</code>, <code>"s3"</code>, <code>"db2"</code>, <code>"db2-zos"</code>, <code>"azuredb"</code>, <code>"sybase"</code>, <code>"dynamodb"</code>, <code>"mongodb"</code>, <code>"kinesis"</code>, <code>"kafka"</code>, <code>"elasticsearch"</code>, <code>"docdb"</code>, <code>"sqlserver"</code>, <code>"neptune"</code>, and <code>"babelfish"</code>.',
        }),
    ),
    Username: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The user name to be used to log in to the endpoint database.' }),
    ).exactOptional(),
    Password: SecretStringSchema.and(
      z
        .any()
        .openapi({ description: 'The password to be used to log in to the endpoint database.' }),
    ).exactOptional(),
    ServerName: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the server where the endpoint database resides.' }),
    ).exactOptional(),
    Port: IntegerOptionalSchema.and(
      z.any().openapi({ description: 'The port used by the endpoint database.' }),
    ).exactOptional(),
    DatabaseName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the endpoint database. For a MySQL source or target endpoint, do not specify DatabaseName. To migrate to a specific database, use this setting and <code>targetDbType</code>.',
        }),
    ).exactOptional(),
    ExtraConnectionAttributes: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional attributes associated with the connection. Each attribute is specified as a name-value pair associated by an equal sign (=). Multiple attributes are separated by a semicolon (;) with no additional white space. For information on the attributes available for connecting your source or target endpoint, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Endpoints.html">Working with DMS Endpoints</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>An KMS key identifier that is used to encrypt the connection parameters for the endpoint.</p> <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then DMS uses your default encryption key.</p> <p>KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.</p>",
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'One or more tags to be assigned to the endpoint.' }),
    ).exactOptional(),
    CertificateArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the certificate.' }),
    ).exactOptional(),
    SslMode: DmsSslModeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is <code>none</code> ',
        }),
    ).exactOptional(),
    ServiceAccessRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) for the service access role that you want to use to create the endpoint. The role must allow the <code>iam:PassRole</code> action.',
        }),
    ).exactOptional(),
    ExternalTableDefinition: StringSchema.and(
      z.any().openapi({ description: 'The external table definition. ' }),
    ).exactOptional(),
    DynamoDbSettings: DynamoDbSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings in JSON format for the target Amazon DynamoDB endpoint. For information about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.DynamoDB.html#CHAP_Target.DynamoDB.ObjectMapping">Using Object Mapping to Migrate Data to DynamoDB</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    S3Settings: S3SettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings in JSON format for the target Amazon S3 endpoint. For more information about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring">Extra Connection Attributes When Using Amazon S3 as a Target for DMS</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    DmsTransferSettings: DmsTransferSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The settings in JSON format for the DMS transfer type of source endpoint. </p> <p>Possible settings include the following:</p> <ul> <li> <p> <code>ServiceAccessRoleArn</code> - The Amazon Resource Name (ARN) used by the service access IAM role. The role must allow the <code>iam:PassRole</code> action.</p> </li> <li> <p> <code>BucketName</code> - The name of the S3 bucket to use.</p> </li> </ul> <p>Shorthand syntax for these settings is as follows: <code>ServiceAccessRoleArn=string,BucketName=string</code> </p> <p>JSON syntax for these settings is as follows: <code>{ "ServiceAccessRoleArn": "string", "BucketName": "string", } </code> </p>',
        }),
    ).exactOptional(),
    MongoDbSettings: MongoDbSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings in JSON format for the source MongoDB endpoint. For more information about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MongoDB.html#CHAP_Source.MongoDB.Configuration">Endpoint configuration settings when using MongoDB as a source for Database Migration Service</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    KinesisSettings: KinesisSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. For more information about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kinesis.html#CHAP_Target.Kinesis.ObjectMapping">Using object mapping to migrate data to a Kinesis data stream</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    KafkaSettings: KafkaSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings in JSON format for the target Apache Kafka endpoint. For more information about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kafka.html#CHAP_Target.Kafka.ObjectMapping">Using object mapping to migrate data to a Kafka topic</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    ElasticsearchSettings: ElasticsearchSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings in JSON format for the target OpenSearch endpoint. For more information about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Elasticsearch.html#CHAP_Target.Elasticsearch.Configuration">Extra Connection Attributes When Using OpenSearch as a Target for DMS</a> in the <i>Database Migration Service User Guide</i>.',
        }),
    ).exactOptional(),
    NeptuneSettings: NeptuneSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings in JSON format for the target Amazon Neptune endpoint. For more information about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Neptune.html#CHAP_Target.Neptune.EndpointSettings">Specifying graph-mapping rules using Gremlin and R2RML for Amazon Neptune as a target</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    RedshiftSettings: RedshiftSettingsSchema.exactOptional(),
    PostgreSQLSettings: PostgreSQLSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings in JSON format for the source and target PostgreSQL endpoint. For information about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.PostgreSQL.html#CHAP_Source.PostgreSQL.ConnectionAttrib">Extra connection attributes when using PostgreSQL as a source for DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.PostgreSQL.html#CHAP_Target.PostgreSQL.ConnectionAttrib"> Extra connection attributes when using PostgreSQL as a target for DMS</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    MySQLSettings: MySQLSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings in JSON format for the source and target MySQL endpoint. For information about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MySQL.html#CHAP_Source.MySQL.ConnectionAttrib">Extra connection attributes when using MySQL as a source for DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.MySQL.html#CHAP_Target.MySQL.ConnectionAttrib">Extra connection attributes when using a MySQL-compatible database as a target for DMS</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    OracleSettings: OracleSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings in JSON format for the source and target Oracle endpoint. For information about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.ConnectionAttrib">Extra connection attributes when using Oracle as a source for DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Oracle.html#CHAP_Target.Oracle.ConnectionAttrib"> Extra connection attributes when using Oracle as a target for DMS</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    SybaseSettings: SybaseSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings in JSON format for the source and target SAP ASE endpoint. For information about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SAP.html#CHAP_Source.SAP.ConnectionAttrib">Extra connection attributes when using SAP ASE as a source for DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.SAP.html#CHAP_Target.SAP.ConnectionAttrib">Extra connection attributes when using SAP ASE as a target for DMS</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    MicrosoftSQLServerSettings: MicrosoftSQLServerSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings in JSON format for the source and target Microsoft SQL Server endpoint. For information about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SQLServer.html#CHAP_Source.SQLServer.ConnectionAttrib">Extra connection attributes when using SQL Server as a source for DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.SQLServer.html#CHAP_Target.SQLServer.ConnectionAttrib"> Extra connection attributes when using SQL Server as a target for DMS</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    IBMDb2Settings: IBMDb2SettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings in JSON format for the source IBM Db2 LUW endpoint. For information about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.DB2.html#CHAP_Source.DB2.ConnectionAttrib">Extra connection attributes when using Db2 LUW as a source for DMS</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    ResourceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name for the resource identifier at the end of the <code>EndpointArn</code> response parameter that is returned in the created <code>Endpoint</code> object. The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as <code>Example-App-ARN1</code>. For example, this value might result in the <code>EndpointArn</code> value <code>arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1</code>. If you don't specify a <code>ResourceIdentifier</code> value, DMS generates a default identifier value for the end of <code>EndpointArn</code>.",
        }),
    ).exactOptional(),
    DocDbSettings: DocDbSettingsSchema.exactOptional(),
    RedisSettings: RedisSettingsSchema.and(
      z.any().openapi({ description: 'Settings in JSON format for the target Redis endpoint.' }),
    ).exactOptional(),
    GcpMySQLSettings: GcpMySQLSettingsSchema.and(
      z
        .any()
        .openapi({ description: 'Settings in JSON format for the source GCP MySQL endpoint.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['EndpointIdentifier', 'EndpointType', 'EngineName'],
    title: 'CreateEndpointMessage',
    description: '<p/>',
  })
  .openapi('CreateEndpointMessage')

const KMSKeyNotAccessibleFaultSchema = z.any().openapi('KMSKeyNotAccessibleFault')

const ResourceAlreadyExistsFaultSchema = z.any().openapi('ResourceAlreadyExistsFault')

const ResourceQuotaExceededFaultSchema = z.any().openapi('ResourceQuotaExceededFault')

const S3AccessDeniedFaultSchema = z.any().openapi('S3AccessDeniedFault')

const SourceIdsListSchema = z.array(StringSchema).openapi('SourceIdsList')

const EventCategoriesListSchema = z.array(StringSchema).openapi('EventCategoriesList')

const BooleanSchema = z.boolean().openapi('Boolean')

const EventSubscriptionSchema = z
  .object({
    CustomerAwsId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services customer account associated with the DMS event notification subscription.',
        }),
    ).exactOptional(),
    CustSubscriptionId: StringSchema.and(
      z.any().openapi({ description: 'The DMS event notification subscription Id.' }),
    ).exactOptional(),
    SnsTopicArn: StringSchema.and(
      z.any().openapi({ description: 'The topic ARN of the DMS event notification subscription.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the DMS event notification subscription.</p> <p>Constraints:</p> <p>Can be one of the following: creating | modifying | deleting | active | no-permission | topic-not-exist</p> <p>The status "no-permission" indicates that DMS no longer has permission to post to the SNS topic. The status "topic-not-exist" indicates that the topic was deleted after the subscription was created.</p>',
        }),
    ).exactOptional(),
    SubscriptionCreationTime: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The time the DMS event notification subscription was created.' }),
    ).exactOptional(),
    SourceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The type of DMS resource that generates events. </p> <p>Valid values: replication-instance | replication-server | security-group | replication-task</p>',
        }),
    ).exactOptional(),
    SourceIdsList: SourceIdsListSchema.and(
      z.any().openapi({ description: 'A list of source Ids for the event subscription.' }),
    ).exactOptional(),
    EventCategoriesList: EventCategoriesListSchema.and(
      z.any().openapi({ description: 'A lists of event categories.' }),
    ).exactOptional(),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Boolean value that indicates if the event subscription is enabled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes an event notification subscription created by the <code>CreateEventSubscription</code> operation.',
    required: [],
  })
  .openapi('EventSubscription')

const CreateEventSubscriptionResponseSchema = z
  .object({
    EventSubscription: EventSubscriptionSchema.and(
      z.any().openapi({ description: 'The event subscription that was created.' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('CreateEventSubscriptionResponse')

const CreateEventSubscriptionMessageSchema = z
  .object({
    SubscriptionName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the DMS event notification subscription. This name must be less than 255 characters.',
        }),
    ),
    SnsTopicArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it. ',
        }),
    ),
    SourceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> The type of DMS resource that generates the events. For example, if you want to be notified of events generated by a replication instance, you set this parameter to <code>replication-instance</code>. If this value isn't specified, all events are returned. </p> <p>Valid values: <code>replication-instance</code> | <code>replication-task</code> </p>",
        }),
    ).exactOptional(),
    EventCategories: EventCategoriesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of event categories for a source type that you want to subscribe to. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    SourceIds: SourceIdsListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of identifiers for which DMS provides notification events.</p> <p>If you don't specify a value, notifications are provided for all sources.</p> <p>If you specify multiple values, they must be of the same type. For example, if you specify a database instance ID, then all of the other values must be database instance IDs.</p>",
        }),
    ).exactOptional(),
    Enabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A Boolean value; set to <code>true</code> to activate the subscription, or set to <code>false</code> to create the subscription but not activate it. ',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({ description: 'One or more tags to be assigned to the event subscription.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SubscriptionName', 'SnsTopicArn'],
    title: 'CreateEventSubscriptionMessage',
    description: '<p/>',
  })
  .openapi('CreateEventSubscriptionMessage')

const SNSInvalidTopicFaultSchema = z.any().openapi('SNSInvalidTopicFault')

const SNSNoAuthorizationFaultSchema = z.any().openapi('SNSNoAuthorizationFault')

const KMSAccessDeniedFaultSchema = z.any().openapi('KMSAccessDeniedFault')

const KMSDisabledFaultSchema = z.any().openapi('KMSDisabledFault')

const KMSInvalidStateFaultSchema = z.any().openapi('KMSInvalidStateFault')

const KMSNotFoundFaultSchema = z.any().openapi('KMSNotFoundFault')

const KMSThrottlingFaultSchema = z.any().openapi('KMSThrottlingFault')

const CreateFleetAdvisorCollectorResponseSchema = z
  .object({
    CollectorReferencedId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique ID of the new Fleet Advisor collector, for example: <code>22fda70c-40d5-4acf-b233-a495bd8eb7f5</code> ',
        }),
    ).exactOptional(),
    CollectorName: StringSchema.and(
      z.any().openapi({ description: 'The name of the new Fleet Advisor collector.' }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'A summary description of the Fleet Advisor collector.' }),
    ).exactOptional(),
    ServiceAccessRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM role that grants permissions to access the specified Amazon S3 bucket.',
        }),
    ).exactOptional(),
    S3BucketName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon S3 bucket that the collector uses to store inventory metadata.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateFleetAdvisorCollectorResponse')

const CreateFleetAdvisorCollectorRequestSchema = z
  .object({
    CollectorName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of your Fleet Advisor collector (for example, <code>sample-collector</code>).',
        }),
    ),
    Description: StringSchema.and(
      z.any().openapi({ description: 'A summary description of your Fleet Advisor collector.' }),
    ).exactOptional(),
    ServiceAccessRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM role that grants permissions to access the specified Amazon S3 bucket.',
        }),
    ),
    S3BucketName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 bucket that the Fleet Advisor collector uses to store inventory metadata.',
        }),
    ),
  })
  .openapi({
    required: ['CollectorName', 'ServiceAccessRoleArn', 'S3BucketName'],
    title: 'CreateFleetAdvisorCollectorRequest',
  })
  .openapi('CreateFleetAdvisorCollectorRequest')

const S3ResourceNotFoundFaultSchema = z.any().openapi('S3ResourceNotFoundFault')

const VpcSecurityGroupMembershipSchema = z
  .object({
    VpcSecurityGroupId: StringSchema.and(
      z.any().openapi({ description: 'The VPC security group ID.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z.any().openapi({ description: 'The status of the VPC security group.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the status of a security group associated with the virtual private cloud (VPC) hosting your replication and DB instances.',
    required: [],
  })
  .openapi('VpcSecurityGroupMembership')

const VpcSecurityGroupMembershipListSchema = z
  .array(VpcSecurityGroupMembershipSchema)
  .openapi('VpcSecurityGroupMembershipList')

const AvailabilityZoneSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the Availability Zone.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The name of an Availability Zone for use during database migration. <code>AvailabilityZone</code> is an optional parameter to the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationInstance.html"> <code>CreateReplicationInstance</code> </a> operation, and it’s value relates to the Amazon Web Services Region of an endpoint. For example, the availability zone of an endpoint in the us-east-1 region might be us-east-1a, us-east-1b, us-east-1c, or us-east-1d.',
    required: [],
  })
  .openapi('AvailabilityZone')

const SubnetSchema = z
  .object({
    SubnetIdentifier: StringSchema.and(
      z.any().openapi({ description: 'The subnet identifier.' }),
    ).exactOptional(),
    SubnetAvailabilityZone: AvailabilityZoneSchema.and(
      z.any().openapi({ description: 'The Availability Zone of the subnet.' }),
    ).exactOptional(),
    SubnetStatus: StringSchema.and(
      z.any().openapi({ description: 'The status of the subnet.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'In response to a request by the <code>DescribeReplicationSubnetGroups</code> operation, this object identifies a subnet by its given Availability Zone, subnet identifier, and status.',
    required: [],
  })
  .openapi('Subnet')

const SubnetListSchema = z.array(SubnetSchema).openapi('SubnetList')

const StringListSchema = z.array(StringSchema).openapi('StringList')

const ReplicationSubnetGroupSchema = z
  .object({
    ReplicationSubnetGroupIdentifier: StringSchema.and(
      z.any().openapi({ description: 'The identifier of the replication instance subnet group.' }),
    ).exactOptional(),
    ReplicationSubnetGroupDescription: StringSchema.and(
      z.any().openapi({ description: 'A description for the replication subnet group.' }),
    ).exactOptional(),
    VpcId: StringSchema.and(z.any().openapi({ description: 'The ID of the VPC.' })).exactOptional(),
    SubnetGroupStatus: StringSchema.and(
      z.any().openapi({ description: 'The status of the subnet group.' }),
    ).exactOptional(),
    Subnets: SubnetListSchema.and(
      z.any().openapi({ description: 'The subnets that are in the subnet group.' }),
    ).exactOptional(),
    SupportedNetworkTypes: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP addressing protocol supported by the subnet group. This is used by a replication instance with values such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing. IPv6 only is not yet supported.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes a subnet group in response to a request by the <code>DescribeReplicationSubnetGroups</code> operation.',
    required: [],
  })
  .openapi('ReplicationSubnetGroup')

const ReplicationPendingModifiedValuesSchema = z
  .object({
    ReplicationInstanceClass: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The compute and memory capacity of the replication instance as defined for the specified replication instance class.</p> <p>For more information on the settings and capacities for the available replication instance classes, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth"> Selecting the right DMS replication instance for your migration</a>. </p>',
        }),
    ).exactOptional(),
    AllocatedStorage: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of storage (in gigabytes) that is allocated for the replication instance.',
        }),
    ).exactOptional(),
    MultiAZ: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            " Specifies whether the replication instance is a Multi-AZ deployment. You can't set the <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to <code>true</code>. ",
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z.any().openapi({ description: 'The engine version number of the replication instance.' }),
    ).exactOptional(),
    NetworkType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of IP address protocol used by a replication instance, such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing. IPv6 only is not yet supported.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about the values of pending modifications to a replication instance. This data type is an object of the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationInstance.html"> <code>ReplicationInstance</code> </a> user-defined data type. ',
    required: [],
  })
  .openapi('ReplicationPendingModifiedValues')

const ReplicationInstancePublicIpAddressListSchema = z
  .array(StringSchema)
  .openapi('ReplicationInstancePublicIpAddressList')

const ReplicationInstancePrivateIpAddressListSchema = z
  .array(StringSchema)
  .openapi('ReplicationInstancePrivateIpAddressList')

const ReplicationInstanceIpv6AddressListSchema = z
  .array(StringSchema)
  .openapi('ReplicationInstanceIpv6AddressList')

const ReplicationInstanceSchema = z
  .object({
    ReplicationInstanceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The replication instance identifier is a required parameter. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain 1-63 alphanumeric characters or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>myrepinstance</code> </p>',
        }),
    ).exactOptional(),
    ReplicationInstanceClass: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The compute and memory capacity of the replication instance as defined for the specified replication instance class. It is a required parameter, although a default value is pre-selected in the DMS console.</p> <p>For more information on the settings and capacities for the available replication instance classes, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth"> Selecting the right DMS replication instance for your migration</a>. </p>',
        }),
    ).exactOptional(),
    ReplicationInstanceStatus: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the replication instance. The possible return values include:</p> <ul> <li> <p> <code>"available"</code> </p> </li> <li> <p> <code>"creating"</code> </p> </li> <li> <p> <code>"deleted"</code> </p> </li> <li> <p> <code>"deleting"</code> </p> </li> <li> <p> <code>"failed"</code> </p> </li> <li> <p> <code>"modifying"</code> </p> </li> <li> <p> <code>"upgrading"</code> </p> </li> <li> <p> <code>"rebooting"</code> </p> </li> <li> <p> <code>"resetting-master-credentials"</code> </p> </li> <li> <p> <code>"storage-full"</code> </p> </li> <li> <p> <code>"incompatible-credentials"</code> </p> </li> <li> <p> <code>"incompatible-network"</code> </p> </li> <li> <p> <code>"maintenance"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    AllocatedStorage: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of storage (in gigabytes) that is allocated for the replication instance.',
        }),
    ).exactOptional(),
    InstanceCreateTime: TStampSchema.and(
      z.any().openapi({ description: 'The time the replication instance was created.' }),
    ).exactOptional(),
    VpcSecurityGroups: VpcSecurityGroupMembershipListSchema.and(
      z.any().openapi({ description: 'The VPC security group for the instance.' }),
    ).exactOptional(),
    AvailabilityZone: StringSchema.and(
      z.any().openapi({ description: 'The Availability Zone for the instance.' }),
    ).exactOptional(),
    ReplicationSubnetGroup: ReplicationSubnetGroupSchema.and(
      z.any().openapi({ description: 'The subnet group for the replication instance.' }),
    ).exactOptional(),
    PreferredMaintenanceWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maintenance window times for the replication instance. Any pending upgrades to the replication instance are performed during this time.',
        }),
    ).exactOptional(),
    PendingModifiedValues: ReplicationPendingModifiedValuesSchema.and(
      z.any().openapi({ description: 'The pending modification values.' }),
    ).exactOptional(),
    MultiAZ: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            " Specifies whether the replication instance is a Multi-AZ deployment. You can't set the <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to <code>true</code>. ",
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The engine version number of the replication instance.</p> <p>If an engine version number is not specified when a replication instance is created, the default is the latest engine version available.</p> <p>When modifying a major engine version of an instance, also set <code>AllowMajorVersionUpgrade</code> to <code>true</code>.</p>',
        }),
    ).exactOptional(),
    AutoMinorVersionUpgrade: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Boolean value indicating if minor version upgrades will be automatically applied to the instance.',
        }),
    ).exactOptional(),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>An KMS key identifier that is used to encrypt the data on the replication instance.</p> <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then DMS uses your default encryption key.</p> <p>KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.</p>",
        }),
    ).exactOptional(),
    ReplicationInstanceArn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the replication instance.' }),
    ).exactOptional(),
    ReplicationInstancePublicIpAddress: StringSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description: 'The public IP address of the replication instance.',
        }),
    ).exactOptional(),
    ReplicationInstancePrivateIpAddress: StringSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description: 'The private IP address of the replication instance.',
        }),
    ).exactOptional(),
    ReplicationInstancePublicIpAddresses: ReplicationInstancePublicIpAddressListSchema.and(
      z
        .any()
        .openapi({ description: 'One or more public IP addresses for the replication instance.' }),
    ).exactOptional(),
    ReplicationInstancePrivateIpAddresses: ReplicationInstancePrivateIpAddressListSchema.and(
      z
        .any()
        .openapi({ description: 'One or more private IP addresses for the replication instance.' }),
    ).exactOptional(),
    ReplicationInstanceIpv6Addresses: ReplicationInstanceIpv6AddressListSchema.and(
      z.any().openapi({ description: 'One or more IPv6 addresses for the replication instance.' }),
    ).exactOptional(),
    PubliclyAccessible: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the accessibility options for the replication instance. A value of <code>true</code> represents an instance with a public IP address. A value of <code>false</code> represents an instance with a private IP address. The default value is <code>true</code>. ',
        }),
    ).exactOptional(),
    SecondaryAvailabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Availability Zone of the standby replication instance in a Multi-AZ deployment.',
        }),
    ).exactOptional(),
    FreeUntil: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The expiration date of the free replication instance that is part of the Free DMS program. ',
        }),
    ).exactOptional(),
    DnsNameServers: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DNS name servers supported for the replication instance to access your on-premise source or target database.',
        }),
    ).exactOptional(),
    NetworkType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of IP address protocol used by a replication instance, such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing. IPv6 only is not yet supported.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information that defines a replication instance.',
    required: [],
  })
  .openapi('ReplicationInstance')

const CreateReplicationInstanceResponseSchema = z
  .object({
    ReplicationInstance: ReplicationInstanceSchema.and(
      z.any().openapi({ description: 'The replication instance that was created.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ReplicationInstance: {
        AllocatedStorage: 5,
        AutoMinorVersionUpgrade: true,
        EngineVersion: '1.5.0',
        KmsKeyId: 'arn:aws:kms:us-east-1:123456789012:key/4c1731d6-5435-ed4d-be13-d53411a7cfbd',
        PendingModifiedValues: {},
        PreferredMaintenanceWindow: 'sun:06:00-sun:14:00',
        PubliclyAccessible: true,
        ReplicationInstanceArn: 'arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ',
        ReplicationInstanceClass: 'dms.t2.micro',
        ReplicationInstanceIdentifier: 'test-rep-1',
        ReplicationInstanceStatus: 'creating',
        ReplicationSubnetGroup: {
          ReplicationSubnetGroupDescription: 'default',
          ReplicationSubnetGroupIdentifier: 'default',
          SubnetGroupStatus: 'Complete',
          Subnets: [
            {
              SubnetAvailabilityZone: { Name: 'us-east-1d' },
              SubnetIdentifier: 'subnet-f6dd91af',
              SubnetStatus: 'Active',
            },
            {
              SubnetAvailabilityZone: { Name: 'us-east-1b' },
              SubnetIdentifier: 'subnet-3605751d',
              SubnetStatus: 'Active',
            },
            {
              SubnetAvailabilityZone: { Name: 'us-east-1c' },
              SubnetIdentifier: 'subnet-c2daefb5',
              SubnetStatus: 'Active',
            },
            {
              SubnetAvailabilityZone: { Name: 'us-east-1e' },
              SubnetIdentifier: 'subnet-85e90cb8',
              SubnetStatus: 'Active',
            },
          ],
          VpcId: 'vpc-6741a603',
        },
      },
    },
    description: '<p/>',
    required: [],
  })
  .openapi('CreateReplicationInstanceResponse')

const VpcSecurityGroupIdListSchema = z.array(StringSchema).openapi('VpcSecurityGroupIdList')

const CreateReplicationInstanceMessageSchema = z
  .object({
    ReplicationInstanceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The replication instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain 1-63 alphanumeric characters or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>myrepinstance</code> </p>",
        }),
    ),
    AllocatedStorage: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of storage (in gigabytes) to be initially allocated for the replication instance.',
        }),
    ).exactOptional(),
    ReplicationInstanceClass: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The compute and memory capacity of the replication instance as defined for the specified replication instance class. For example to specify the instance class dms.c4.large, set this parameter to <code>"dms.c4.large"</code>.</p> <p>For more information on the settings and capacities for the available replication instance classes, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth"> Selecting the right DMS replication instance for your migration</a>. </p>',
        }),
    ),
    VpcSecurityGroupIds: VpcSecurityGroupIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the VPC security group to be used with the replication instance. The VPC security group must work with the VPC containing the replication instance. ',
        }),
    ).exactOptional(),
    AvailabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Availability Zone where the replication instance will be created. The default value is a random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region, for example: <code>us-east-1d</code> ",
        }),
    ).exactOptional(),
    ReplicationSubnetGroupIdentifier: StringSchema.and(
      z
        .any()
        .openapi({ description: 'A subnet group to associate with the replication instance.' }),
    ).exactOptional(),
    PreferredMaintenanceWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>Default: A 30-minute window selected at random from an 8-hour block of time per Amazon Web Services Region, occurring on a random day of the week.</p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p> <p>Constraints: Minimum 30-minute window.</p>',
        }),
    ).exactOptional(),
    MultiAZ: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            " Specifies whether the replication instance is a Multi-AZ deployment. You can't set the <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to <code>true</code>. ",
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The engine version number of the replication instance.</p> <p>If an engine version number is not specified when a replication instance is created, the default is the latest engine version available.</p>',
        }),
    ).exactOptional(),
    AutoMinorVersionUpgrade: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that indicates whether minor engine upgrades are applied automatically to the replication instance during the maintenance window. This parameter defaults to <code>true</code>.</p> <p>Default: <code>true</code> </p> <p>When <code>AutoMinorVersionUpgrade</code> is enabled, DMS uses the current default engine version when you create a replication instance. For example, if you set <code>EngineVersion</code> to a lower version number than the current default version, DMS uses the default version.</p> <p>If <code>AutoMinorVersionUpgrade</code> <i>isn’t</i> enabled when you create a replication instance, DMS uses the engine version specified by the <code>EngineVersion</code> parameter. </p>',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({ description: 'One or more tags to be assigned to the replication instance.' }),
    ).exactOptional(),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>An KMS key identifier that is used to encrypt the data on the replication instance.</p> <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then DMS uses your default encryption key.</p> <p>KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.</p>",
        }),
    ).exactOptional(),
    PubliclyAccessible: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the accessibility options for the replication instance. A value of <code>true</code> represents an instance with a public IP address. A value of <code>false</code> represents an instance with a private IP address. The default value is <code>true</code>. ',
        }),
    ).exactOptional(),
    DnsNameServers: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of custom DNS name servers supported for the replication instance to access your on-premise source or target database. This list overrides the default name servers supported by the replication instance. You can specify a comma-separated list of internet addresses for up to four on-premise DNS name servers. For example: <code>"1.1.1.1,2.2.2.2,3.3.3.3,4.4.4.4"</code> ',
        }),
    ).exactOptional(),
    ResourceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name for the resource identifier at the end of the <code>EndpointArn</code> response parameter that is returned in the created <code>Endpoint</code> object. The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as <code>Example-App-ARN1</code>. For example, this value might result in the <code>EndpointArn</code> value <code>arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1</code>. If you don't specify a <code>ResourceIdentifier</code> value, DMS generates a default identifier value for the end of <code>EndpointArn</code>.",
        }),
    ).exactOptional(),
    NetworkType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of IP address protocol used by a replication instance, such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing. IPv6 only is not yet supported.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ReplicationInstanceIdentifier', 'ReplicationInstanceClass'],
    title: 'CreateReplicationInstanceMessage',
    description: '<p/>',
  })
  .openapi('CreateReplicationInstanceMessage')

const InsufficientResourceCapacityFaultSchema = z.any().openapi('InsufficientResourceCapacityFault')

const StorageQuotaExceededFaultSchema = z.any().openapi('StorageQuotaExceededFault')

const ReplicationSubnetGroupDoesNotCoverEnoughAZsSchema = z
  .any()
  .openapi('ReplicationSubnetGroupDoesNotCoverEnoughAZs')

const InvalidSubnetSchema = z.any().openapi('InvalidSubnet')

const CreateReplicationSubnetGroupResponseSchema = z
  .object({
    ReplicationSubnetGroup: ReplicationSubnetGroupSchema.and(
      z.any().openapi({ description: 'The replication subnet group that was created.' }),
    ).exactOptional(),
  })
  .openapi({ example: { ReplicationSubnetGroup: {} }, description: '<p/>', required: [] })
  .openapi('CreateReplicationSubnetGroupResponse')

const SubnetIdentifierListSchema = z.array(StringSchema).openapi('SubnetIdentifierList')

const CreateReplicationSubnetGroupMessageSchema = z
  .object({
    ReplicationSubnetGroupIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name for the replication subnet group. This value is stored as a lowercase string.</p> <p>Constraints: Must contain no more than 255 alphanumeric characters, periods, spaces, underscores, or hyphens. Must not be "default".</p> <p>Example: <code>mySubnetgroup</code> </p>',
        }),
    ),
    ReplicationSubnetGroupDescription: StringSchema.and(
      z.any().openapi({ description: 'The description for the subnet group.' }),
    ),
    SubnetIds: SubnetIdentifierListSchema.and(
      z
        .any()
        .openapi({ description: 'One or more subnet IDs to be assigned to the subnet group.' }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'One or more tags to be assigned to the subnet group.' }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'ReplicationSubnetGroupIdentifier',
      'ReplicationSubnetGroupDescription',
      'SubnetIds',
    ],
    title: 'CreateReplicationSubnetGroupMessage',
    description: '<p/>',
  })
  .openapi('CreateReplicationSubnetGroupMessage')

const MigrationTypeValueSchema = z
  .enum(['full-load', 'cdc', 'full-load-and-cdc'])
  .openapi('MigrationTypeValue')

const LongSchema = z.int().openapi('Long')

const ReplicationTaskStatsSchema = z
  .object({
    FullLoadProgressPercent: IntegerSchema.and(
      z.any().openapi({ description: 'The percent complete for the full load migration task.' }),
    ).exactOptional(),
    ElapsedTimeMillis: LongSchema.and(
      z.any().openapi({ description: 'The elapsed time of the task, in milliseconds.' }),
    ).exactOptional(),
    TablesLoaded: IntegerSchema.and(
      z.any().openapi({ description: 'The number of tables loaded for this task.' }),
    ).exactOptional(),
    TablesLoading: IntegerSchema.and(
      z.any().openapi({ description: 'The number of tables currently loading for this task.' }),
    ).exactOptional(),
    TablesQueued: IntegerSchema.and(
      z.any().openapi({ description: 'The number of tables queued for this task.' }),
    ).exactOptional(),
    TablesErrored: IntegerSchema.and(
      z.any().openapi({ description: 'The number of errors that have occurred during this task.' }),
    ).exactOptional(),
    FreshStartDate: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date the replication task was started either with a fresh start or a target reload.',
        }),
    ).exactOptional(),
    StartDate: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date the replication task was started either with a fresh start or a resume. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html#DMS-StartReplicationTask-request-StartReplicationTaskType">StartReplicationTaskType</a>.',
        }),
    ).exactOptional(),
    StopDate: TStampSchema.and(
      z.any().openapi({ description: 'The date the replication task was stopped.' }),
    ).exactOptional(),
    FullLoadStartDate: TStampSchema.and(
      z.any().openapi({ description: 'The date the replication task full load was started.' }),
    ).exactOptional(),
    FullLoadFinishDate: TStampSchema.and(
      z.any().openapi({ description: 'The date the replication task full load was completed.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'In response to a request by the <code>DescribeReplicationTasks</code> operation, this object provides a collection of statistics about a replication task.',
    required: [],
  })
  .openapi('ReplicationTaskStats')

const ReplicationTaskSchema = z
  .object({
    ReplicationTaskIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The user-assigned replication task identifier or name.</p> <p>Constraints:</p> <ul> <li> <p>Must contain 1-255 alphanumeric characters or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>',
        }),
    ).exactOptional(),
    SourceEndpointArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) that uniquely identifies the endpoint.',
        }),
    ).exactOptional(),
    TargetEndpointArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN that uniquely identifies the endpoint.' }),
    ).exactOptional(),
    ReplicationInstanceArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the replication instance.' }),
    ).exactOptional(),
    MigrationType: MigrationTypeValueSchema.and(
      z.any().openapi({ description: 'The type of migration.' }),
    ).exactOptional(),
    TableMappings: StringSchema.and(
      z.any().openapi({ description: 'Table mappings specified in the task.' }),
    ).exactOptional(),
    ReplicationTaskSettings: StringSchema.and(
      z.any().openapi({ description: 'The settings for the replication task.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the replication task. This response parameter can return one of the following values:</p> <ul> <li> <p> <code>"moving"</code> – The task is being moved in response to running the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_MoveReplicationTask.html"> <code>MoveReplicationTask</code> </a> operation.</p> </li> <li> <p> <code>"creating"</code> – The task is being created in response to running the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationTask.html"> <code>CreateReplicationTask</code> </a> operation.</p> </li> <li> <p> <code>"deleting"</code> – The task is being deleted in response to running the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationTask.html"> <code>DeleteReplicationTask</code> </a> operation.</p> </li> <li> <p> <code>"failed"</code> – The task failed to successfully complete the database migration in response to running the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html"> <code>StartReplicationTask</code> </a> operation.</p> </li> <li> <p> <code>"failed-move"</code> – The task failed to move in response to running the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_MoveReplicationTask.html"> <code>MoveReplicationTask</code> </a> operation.</p> </li> <li> <p> <code>"modifying"</code> – The task definition is being modified in response to running the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationTask.html"> <code>ModifyReplicationTask</code> </a> operation.</p> </li> <li> <p> <code>"ready"</code> – The task is in a <code>ready</code> state where it can respond to other task operations, such as <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html"> <code>StartReplicationTask</code> </a> or <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationTask.html"> <code>DeleteReplicationTask</code> </a>. </p> </li> <li> <p> <code>"running"</code> – The task is performing a database migration in response to running the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html"> <code>StartReplicationTask</code> </a> operation.</p> </li> <li> <p> <code>"starting"</code> – The task is preparing to perform a database migration in response to running the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html"> <code>StartReplicationTask</code> </a> operation.</p> </li> <li> <p> <code>"stopped"</code> – The task has stopped in response to running the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StopReplicationTask.html"> <code>StopReplicationTask</code> </a> operation.</p> </li> <li> <p> <code>"stopping"</code> – The task is preparing to stop in response to running the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StopReplicationTask.html"> <code>StopReplicationTask</code> </a> operation.</p> </li> <li> <p> <code>"testing"</code> – The database migration specified for this task is being tested in response to running either the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessmentRun.html"> <code>StartReplicationTaskAssessmentRun</code> </a> or the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessment.html"> <code>StartReplicationTaskAssessment</code> </a> operation.</p> <note> <p> <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessmentRun.html"> <code>StartReplicationTaskAssessmentRun</code> </a> is an improved premigration task assessment operation. The <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessment.html"> <code>StartReplicationTaskAssessment</code> </a> operation assesses data type compatibility only between the source and target database of a given migration task. In contrast, <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessmentRun.html"> <code>StartReplicationTaskAssessmentRun</code> </a> enables you to specify a variety of premigration task assessments in addition to data type compatibility. These assessments include ones for the validity of primary key definitions and likely issues with database migration performance, among others.</p> </note> </li> </ul>',
        }),
    ).exactOptional(),
    LastFailureMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The last error (failure) message generated for the replication task.',
        }),
    ).exactOptional(),
    StopReason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The reason the replication task was stopped. This response parameter can return one of the following values:</p> <ul> <li> <p> <code>"Stop Reason NORMAL"</code> </p> </li> <li> <p> <code>"Stop Reason RECOVERABLE_ERROR"</code> </p> </li> <li> <p> <code>"Stop Reason FATAL_ERROR"</code> </p> </li> <li> <p> <code>"Stop Reason FULL_LOAD_ONLY_FINISHED"</code> </p> </li> <li> <p> <code>"Stop Reason STOPPED_AFTER_FULL_LOAD"</code> – Full load completed, with cached changes not applied</p> </li> <li> <p> <code>"Stop Reason STOPPED_AFTER_CACHED_EVENTS"</code> – Full load completed, with cached changes applied</p> </li> <li> <p> <code>"Stop Reason EXPRESS_LICENSE_LIMITS_REACHED"</code> </p> </li> <li> <p> <code>"Stop Reason STOPPED_AFTER_DDL_APPLY"</code> – User-defined stop task after DDL applied</p> </li> <li> <p> <code>"Stop Reason STOPPED_DUE_TO_LOW_MEMORY"</code> </p> </li> <li> <p> <code>"Stop Reason STOPPED_DUE_TO_LOW_DISK"</code> </p> </li> <li> <p> <code>"Stop Reason STOPPED_AT_SERVER_TIME"</code> – User-defined server time for stopping task</p> </li> <li> <p> <code>"Stop Reason STOPPED_AT_COMMIT_TIME"</code> – User-defined commit time for stopping task</p> </li> <li> <p> <code>"Stop Reason RECONFIGURATION_RESTART"</code> </p> </li> <li> <p> <code>"Stop Reason RECYCLE_TASK"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    ReplicationTaskCreationDate: TStampSchema.and(
      z.any().openapi({ description: 'The date the replication task was created.' }),
    ).exactOptional(),
    ReplicationTaskStartDate: TStampSchema.and(
      z.any().openapi({ description: 'The date the replication task is scheduled to start.' }),
    ).exactOptional(),
    CdcStartPosition: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates when you want a change data capture (CDC) operation to start. Use either <code>CdcStartPosition</code> or <code>CdcStartTime</code> to specify when you want the CDC operation to start. Specifying both values results in an error.</p> <p>The value can be in date, checkpoint, or LSN/SCN format.</p> <p>Date Example: --cdc-start-position “2018-03-08T12:12:12”</p> <p>Checkpoint Example: --cdc-start-position "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93"</p> <p>LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”</p>',
        }),
    ).exactOptional(),
    CdcStopPosition: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time.</p> <p>Server time example: --cdc-stop-position “server_time:2018-02-09T12:12:12”</p> <p>Commit time example: --cdc-stop-position “commit_time: 2018-02-09T12:12:12“</p>',
        }),
    ).exactOptional(),
    RecoveryCheckpoint: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the last checkpoint that occurred during a change data capture (CDC) operation. You can provide this value to the <code>CdcStartPosition</code> parameter to start a CDC operation that begins at that checkpoint.',
        }),
    ).exactOptional(),
    ReplicationTaskArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the replication task.' }),
    ).exactOptional(),
    ReplicationTaskStats: ReplicationTaskStatsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The statistics for the task, including elapsed time, tables loaded, and table errors.',
        }),
    ).exactOptional(),
    TaskData: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Supplemental information that the task requires to migrate the data for certain source and target endpoints. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.TaskData.html">Specifying Supplemental Data for Task Settings</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    TargetReplicationInstanceArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the replication instance to which this task is moved in response to running the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_MoveReplicationTask.html"> <code>MoveReplicationTask</code> </a> operation. Otherwise, this response parameter isn\'t a member of the <code>ReplicationTask</code> object.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation.',
    required: [],
  })
  .openapi('ReplicationTask')

const CreateReplicationTaskResponseSchema = z
  .object({
    ReplicationTask: ReplicationTaskSchema.and(
      z.any().openapi({ description: 'The replication task that was created.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ReplicationTask: {
        MigrationType: 'full-load',
        ReplicationInstanceArn: 'arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ',
        ReplicationTaskArn: 'arn:aws:dms:us-east-1:123456789012:task:OEAMB3NXSTZ6LFYZFEPPBBXPYM',
        ReplicationTaskCreationDate: '2016-12-14T18:25:43Z',
        ReplicationTaskIdentifier: 'task1',
        ReplicationTaskSettings:
          '{"TargetMetadata":{"TargetSchema":"","SupportLobs":true,"FullLobMode":true,"LobChunkSize":64,"LimitedSizeLobMode":false,"LobMaxSize":0},"FullLoadSettings":{"FullLoadEnabled":true,"ApplyChangesEnabled":false,"TargetTablePrepMode":"DROP_AND_CREATE","CreatePkAfterFullLoad":false,"StopTaskCachedChangesApplied":false,"StopTaskCachedChangesNotApplied":false,"ResumeEnabled":false,"ResumeMinTableSize":100000,"ResumeOnlyClusteredPKTables":true,"MaxFullLoadSubTasks":8,"TransactionConsistencyTimeout":600,"CommitRate":10000},"Logging":{"EnableLogging":false}}',
        SourceEndpointArn: 'arn:aws:dms:us-east-1:123456789012:endpoint:ZW5UAN6P4E77EC7YWHK4RZZ3BE',
        Status: 'creating',
        TableMappings: 'file://mappingfile.json',
        TargetEndpointArn: 'arn:aws:dms:us-east-1:123456789012:endpoint:ASXWXJZLNWNT5HTWCGV2BUJQ7E',
      },
    },
    description: '<p/>',
    required: [],
  })
  .openapi('CreateReplicationTaskResponse')

const CreateReplicationTaskMessageSchema = z
  .object({
    ReplicationTaskIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An identifier for the replication task.</p> <p>Constraints:</p> <ul> <li> <p>Must contain 1-255 alphanumeric characters or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>',
        }),
    ),
    SourceEndpointArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies the source endpoint.',
        }),
    ),
    TargetEndpointArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies the target endpoint.',
        }),
    ),
    ReplicationInstanceArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of a replication instance.' }),
    ),
    MigrationType: MigrationTypeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The migration type. Valid values: <code>full-load</code> | <code>cdc</code> | <code>full-load-and-cdc</code> ',
        }),
    ),
    TableMappings: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The table mappings for the task, in JSON format. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.html">Using Table Mapping to Specify Task Settings</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ),
    ReplicationTaskSettings: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Overall settings for the task, in JSON format. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.html">Specifying Task Settings for Database Migration Service Tasks</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    CdcStartTime: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates the start time for a change data capture (CDC) operation. Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error.</p> <p>Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”</p>',
        }),
    ).exactOptional(),
    CdcStartPosition: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error.</p> <p> The value can be in date, checkpoint, or LSN/SCN format.</p> <p>Date Example: --cdc-start-position “2018-03-08T12:12:12”</p> <p>Checkpoint Example: --cdc-start-position "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93"</p> <p>LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”</p> <note> <p>When you use this task setting with a source PostgreSQL database, a logical replication slot should already be created and associated with the source endpoint. You can verify this by setting the <code>slotName</code> extra connection attribute to the name of this logical replication slot. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.PostgreSQL.html#CHAP_Source.PostgreSQL.ConnectionAttrib">Extra Connection Attributes When Using PostgreSQL as a Source for DMS</a>.</p> </note>',
        }),
    ).exactOptional(),
    CdcStopPosition: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time.</p> <p>Server time example: --cdc-stop-position “server_time:2018-02-09T12:12:12”</p> <p>Commit time example: --cdc-stop-position “commit_time: 2018-02-09T12:12:12“</p>',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'One or more tags to be assigned to the replication task.' }),
    ).exactOptional(),
    TaskData: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Supplemental information that the task requires to migrate the data for certain source and target endpoints. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.TaskData.html">Specifying Supplemental Data for Task Settings</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    ResourceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name for the resource identifier at the end of the <code>EndpointArn</code> response parameter that is returned in the created <code>Endpoint</code> object. The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as <code>Example-App-ARN1</code>. For example, this value might result in the <code>EndpointArn</code> value <code>arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1</code>. If you don't specify a <code>ResourceIdentifier</code> value, DMS generates a default identifier value for the end of <code>EndpointArn</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'ReplicationTaskIdentifier',
      'SourceEndpointArn',
      'TargetEndpointArn',
      'ReplicationInstanceArn',
      'MigrationType',
      'TableMappings',
    ],
    title: 'CreateReplicationTaskMessage',
    description: '<p/>',
  })
  .openapi('CreateReplicationTaskMessage')

const CertificateWalletSchema = z.string().openapi('CertificateWallet')

const CertificateSchema = z
  .object({
    CertificateIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A customer-assigned name for the certificate. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens.",
        }),
    ).exactOptional(),
    CertificateCreationDate: TStampSchema.and(
      z.any().openapi({ description: 'The date that the certificate was created.' }),
    ).exactOptional(),
    CertificatePem: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The contents of a <code>.pem</code> file, which contains an X.509 certificate.',
        }),
    ).exactOptional(),
    CertificateWallet: CertificateWalletSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of an imported Oracle Wallet certificate for use with SSL. Example: <code>filebase64("${path.root}/rds-ca-2019-root.sso")</code> ',
        }),
    ).exactOptional(),
    CertificateArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the certificate.' }),
    ).exactOptional(),
    CertificateOwner: StringSchema.and(
      z.any().openapi({ description: 'The owner of the certificate.' }),
    ).exactOptional(),
    ValidFromDate: TStampSchema.and(
      z.any().openapi({ description: 'The beginning date that the certificate is valid.' }),
    ).exactOptional(),
    ValidToDate: TStampSchema.and(
      z.any().openapi({ description: 'The final date that the certificate is valid.' }),
    ).exactOptional(),
    SigningAlgorithm: StringSchema.and(
      z.any().openapi({ description: 'The signing algorithm for the certificate.' }),
    ).exactOptional(),
    KeyLength: IntegerOptionalSchema.and(
      z.any().openapi({ description: 'The key length of the cryptographic algorithm being used.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The SSL certificate that can be used to encrypt connections between the endpoints and the replication instance.',
    required: [],
  })
  .openapi('Certificate')

const DeleteCertificateResponseSchema = z
  .object({
    Certificate: CertificateSchema.and(
      z.any().openapi({ description: 'The Secure Sockets Layer (SSL) certificate.' }),
    ).exactOptional(),
  })
  .openapi({ example: { Certificate: {} }, required: [] })
  .openapi('DeleteCertificateResponse')

const DeleteCertificateMessageSchema = z
  .object({
    CertificateArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the certificate.' }),
    ),
  })
  .openapi({ required: ['CertificateArn'], title: 'DeleteCertificateMessage' })
  .openapi('DeleteCertificateMessage')

const ConnectionSchema = z
  .object({
    ReplicationInstanceArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the replication instance.' }),
    ).exactOptional(),
    EndpointArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN string that uniquely identifies the endpoint.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The connection status. This parameter can return one of the following values:</p> <ul> <li> <p> <code>"successful"</code> </p> </li> <li> <p> <code>"testing"</code> </p> </li> <li> <p> <code>"failed"</code> </p> </li> <li> <p> <code>"deleting"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    LastFailureMessage: StringSchema.and(
      z.any().openapi({ description: 'The error message when the connection last failed.' }),
    ).exactOptional(),
    EndpointIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The identifier of the endpoint. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens.",
        }),
    ).exactOptional(),
    ReplicationInstanceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The replication instance identifier. This parameter is stored as a lowercase string.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Status of the connection between an endpoint and a replication instance, including Amazon Resource Names (ARNs) and the last error message issued.',
    required: [],
  })
  .openapi('Connection')

const DeleteConnectionResponseSchema = z
  .object({
    Connection: ConnectionSchema.and(
      z.any().openapi({ description: 'The connection that is being deleted.' }),
    ).exactOptional(),
  })
  .openapi({ example: { Connection: {} }, description: '<p/>', required: [] })
  .openapi('DeleteConnectionResponse')

const DeleteConnectionMessageSchema = z
  .object({
    EndpointArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.',
        }),
    ),
    ReplicationInstanceArn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the replication instance.' }),
    ),
  })
  .openapi({
    required: ['EndpointArn', 'ReplicationInstanceArn'],
    title: 'DeleteConnectionMessage',
    description: '<p/>',
  })
  .openapi('DeleteConnectionMessage')

const DeleteEndpointResponseSchema = z
  .object({
    Endpoint: EndpointSchema.and(
      z.any().openapi({ description: 'The endpoint that was deleted.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Endpoint: {
        EndpointArn: 'arn:aws:dms:us-east-1:123456789012:endpoint:RAAR3R22XSH46S3PWLC3NJAWKM',
        EndpointIdentifier: 'test-endpoint-1',
        EndpointType: 'source',
        EngineName: 'mysql',
        KmsKeyId: 'arn:aws:kms:us-east-1:123456789012:key/4c1731d6-5435-ed4d-be13-d53411a7cfbd',
        Port: 3306,
        ServerName: 'mydb.cx1llnox7iyx.us-west-2.rds.amazonaws.com',
        Status: 'active',
        Username: 'username',
      },
    },
    description: '<p/>',
    required: [],
  })
  .openapi('DeleteEndpointResponse')

const DeleteEndpointMessageSchema = z
  .object({
    EndpointArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.',
        }),
    ),
  })
  .openapi({ required: ['EndpointArn'], title: 'DeleteEndpointMessage', description: '<p/>' })
  .openapi('DeleteEndpointMessage')

const DeleteEventSubscriptionResponseSchema = z
  .object({
    EventSubscription: EventSubscriptionSchema.and(
      z.any().openapi({ description: 'The event subscription that was deleted.' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('DeleteEventSubscriptionResponse')

const DeleteEventSubscriptionMessageSchema = z
  .object({
    SubscriptionName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the DMS event notification subscription to be deleted.',
        }),
    ),
  })
  .openapi({
    required: ['SubscriptionName'],
    title: 'DeleteEventSubscriptionMessage',
    description: '<p/>',
  })
  .openapi('DeleteEventSubscriptionMessage')

const DeleteCollectorRequestSchema = z
  .object({
    CollectorReferencedId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The reference ID of the Fleet Advisor collector to delete.' }),
    ),
  })
  .openapi({ required: ['CollectorReferencedId'], title: 'DeleteCollectorRequest' })
  .openapi('DeleteCollectorRequest')

const CollectorNotFoundFaultSchema = z.any().openapi('CollectorNotFoundFault')

const DeleteFleetAdvisorDatabasesResponseSchema = z
  .object({
    DatabaseIds: StringListSchema.and(
      z.any().openapi({ description: 'The IDs of the databases that the operation deleted.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteFleetAdvisorDatabasesResponse')

const DeleteFleetAdvisorDatabasesRequestSchema = z
  .object({
    DatabaseIds: StringListSchema.and(
      z
        .any()
        .openapi({ description: 'The IDs of the Fleet Advisor collector databases to delete.' }),
    ),
  })
  .openapi({ required: ['DatabaseIds'], title: 'DeleteFleetAdvisorDatabasesRequest' })
  .openapi('DeleteFleetAdvisorDatabasesRequest')

const InvalidOperationFaultSchema = z.any().openapi('InvalidOperationFault')

const DeleteReplicationInstanceResponseSchema = z
  .object({
    ReplicationInstance: ReplicationInstanceSchema.and(
      z.any().openapi({ description: 'The replication instance that was deleted.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ReplicationInstance: {
        AllocatedStorage: 5,
        AutoMinorVersionUpgrade: true,
        EngineVersion: '1.5.0',
        KmsKeyId: 'arn:aws:kms:us-east-1:123456789012:key/4c1731d6-5435-ed4d-be13-d53411a7cfbd',
        PendingModifiedValues: {},
        PreferredMaintenanceWindow: 'sun:06:00-sun:14:00',
        PubliclyAccessible: true,
        ReplicationInstanceArn: 'arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ',
        ReplicationInstanceClass: 'dms.t2.micro',
        ReplicationInstanceIdentifier: 'test-rep-1',
        ReplicationInstanceStatus: 'creating',
        ReplicationSubnetGroup: {
          ReplicationSubnetGroupDescription: 'default',
          ReplicationSubnetGroupIdentifier: 'default',
          SubnetGroupStatus: 'Complete',
          Subnets: [
            {
              SubnetAvailabilityZone: { Name: 'us-east-1d' },
              SubnetIdentifier: 'subnet-f6dd91af',
              SubnetStatus: 'Active',
            },
            {
              SubnetAvailabilityZone: { Name: 'us-east-1b' },
              SubnetIdentifier: 'subnet-3605751d',
              SubnetStatus: 'Active',
            },
            {
              SubnetAvailabilityZone: { Name: 'us-east-1c' },
              SubnetIdentifier: 'subnet-c2daefb5',
              SubnetStatus: 'Active',
            },
            {
              SubnetAvailabilityZone: { Name: 'us-east-1e' },
              SubnetIdentifier: 'subnet-85e90cb8',
              SubnetStatus: 'Active',
            },
          ],
          VpcId: 'vpc-6741a603',
        },
      },
    },
    description: '<p/>',
    required: [],
  })
  .openapi('DeleteReplicationInstanceResponse')

const DeleteReplicationInstanceMessageSchema = z
  .object({
    ReplicationInstanceArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the replication instance to be deleted.',
        }),
    ),
  })
  .openapi({
    required: ['ReplicationInstanceArn'],
    title: 'DeleteReplicationInstanceMessage',
    description: '<p/>',
  })
  .openapi('DeleteReplicationInstanceMessage')

const DeleteReplicationSubnetGroupResponseSchema = z
  .object({})
  .openapi({ example: {}, description: '<p/>' })
  .openapi('DeleteReplicationSubnetGroupResponse')

const DeleteReplicationSubnetGroupMessageSchema = z
  .object({
    ReplicationSubnetGroupIdentifier: StringSchema.and(
      z.any().openapi({ description: 'The subnet group name of the replication instance.' }),
    ),
  })
  .openapi({
    required: ['ReplicationSubnetGroupIdentifier'],
    title: 'DeleteReplicationSubnetGroupMessage',
    description: '<p/>',
  })
  .openapi('DeleteReplicationSubnetGroupMessage')

const DeleteReplicationTaskResponseSchema = z
  .object({
    ReplicationTask: ReplicationTaskSchema.and(
      z.any().openapi({ description: 'The deleted replication task.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ReplicationTask: {
        MigrationType: 'full-load',
        ReplicationInstanceArn: 'arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ',
        ReplicationTaskArn: 'arn:aws:dms:us-east-1:123456789012:task:OEAMB3NXSTZ6LFYZFEPPBBXPYM',
        ReplicationTaskCreationDate: '2016-12-14T18:25:43Z',
        ReplicationTaskIdentifier: 'task1',
        ReplicationTaskSettings:
          '{"TargetMetadata":{"TargetSchema":"","SupportLobs":true,"FullLobMode":true,"LobChunkSize":64,"LimitedSizeLobMode":false,"LobMaxSize":0},"FullLoadSettings":{"FullLoadEnabled":true,"ApplyChangesEnabled":false,"TargetTablePrepMode":"DROP_AND_CREATE","CreatePkAfterFullLoad":false,"StopTaskCachedChangesApplied":false,"StopTaskCachedChangesNotApplied":false,"ResumeEnabled":false,"ResumeMinTableSize":100000,"ResumeOnlyClusteredPKTables":true,"MaxFullLoadSubTasks":8,"TransactionConsistencyTimeout":600,"CommitRate":10000},"Logging":{"EnableLogging":false}}',
        SourceEndpointArn: 'arn:aws:dms:us-east-1:123456789012:endpoint:ZW5UAN6P4E77EC7YWHK4RZZ3BE',
        Status: 'creating',
        TableMappings: 'file://mappingfile.json',
        TargetEndpointArn: 'arn:aws:dms:us-east-1:123456789012:endpoint:ASXWXJZLNWNT5HTWCGV2BUJQ7E',
      },
    },
    description: '<p/>',
    required: [],
  })
  .openapi('DeleteReplicationTaskResponse')

const DeleteReplicationTaskMessageSchema = z
  .object({
    ReplicationTaskArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the replication task to be deleted.',
        }),
    ),
  })
  .openapi({
    required: ['ReplicationTaskArn'],
    title: 'DeleteReplicationTaskMessage',
    description: '<p/>',
  })
  .openapi('DeleteReplicationTaskMessage')

const DeleteReplicationTaskAssessmentRunResponseSchema = z
  .object({
    ReplicationTaskAssessmentRun: ReplicationTaskAssessmentRunSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ReplicationTaskAssessmentRun</code> object for the deleted assessment run.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('DeleteReplicationTaskAssessmentRunResponse')

const DeleteReplicationTaskAssessmentRunMessageSchema = z
  .object({
    ReplicationTaskAssessmentRunArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Resource Name (ARN) of the premigration assessment run to be deleted.',
        }),
    ),
  })
  .openapi({
    required: ['ReplicationTaskAssessmentRunArn'],
    title: 'DeleteReplicationTaskAssessmentRunMessage',
    description: '<p/>',
  })
  .openapi('DeleteReplicationTaskAssessmentRunMessage')

const AccountQuotaSchema = z
  .object({
    AccountQuotaName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the DMS quota for this Amazon Web Services account.',
        }),
    ).exactOptional(),
    Used: LongSchema.and(
      z.any().openapi({ description: 'The amount currently used toward the quota maximum.' }),
    ).exactOptional(),
    Max: LongSchema.and(
      z.any().openapi({ description: 'The maximum allowed value for the quota.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes a quota for an Amazon Web Services account, for example the number of replication instances allowed.',
    required: [],
  })
  .openapi('AccountQuota')

const AccountQuotaListSchema = z.array(AccountQuotaSchema).openapi('AccountQuotaList')

const DescribeAccountAttributesResponseSchema = z
  .object({
    AccountQuotas: AccountQuotaListSchema.and(
      z.any().openapi({ description: 'Account quota information.' }),
    ).exactOptional(),
    UniqueAccountIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique DMS identifier for an account in a particular Amazon Web Services Region. The value of this identifier has the following format: <code>c99999999999</code>. DMS uses this identifier to name artifacts. For example, DMS uses this identifier to name the default Amazon S3 bucket for storing task assessment reports in a given Amazon Web Services Region. The format of this S3 bucket name is the following: <code>dms-<i>AccountNumber</i>-<i>UniqueAccountIdentifier</i>.</code> Here is an example name for this default S3 bucket: <code>dms-111122223333-c44445555666</code>.</p> <note> <p>DMS supports the <code>UniqueAccountIdentifier</code> parameter in versions 3.1.4 and later.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      AccountQuotas: [
        { AccountQuotaName: 'ReplicationInstances', Max: 20, Used: 0 },
        { AccountQuotaName: 'AllocatedStorage', Max: 20, Used: 0 },
        { AccountQuotaName: 'Endpoints', Max: 20, Used: 0 },
      ],
    },
    description: '<p/>',
    required: [],
  })
  .openapi('DescribeAccountAttributesResponse')

const DescribeAccountAttributesMessageSchema = z
  .object({})
  .openapi({ title: 'DescribeAccountAttributesMessage', description: '<p/>' })
  .openapi('DescribeAccountAttributesMessage')

const IndividualAssessmentNameListSchema = z
  .array(StringSchema)
  .openapi('IndividualAssessmentNameList')

const DescribeApplicableIndividualAssessmentsResponseSchema = z
  .object({
    IndividualAssessmentNames: IndividualAssessmentNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of names for the individual assessments supported by the premigration assessment run that you start based on the specified request parameters. For more information on the available individual assessments, including compatibility with different migration task configurations, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Working with premigration assessment runs</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Pagination token returned for you to pass to a subsequent request. If you pass this token as the <code>Marker</code> value in a subsequent request, the response includes only records beyond the marker, up to the value specified in the request by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('DescribeApplicableIndividualAssessmentsResponse')

const DescribeApplicableIndividualAssessmentsMessageSchema = z
  .object({
    ReplicationTaskArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Resource Name (ARN) of a migration task on which you want to base the default list of individual assessments.',
        }),
    ).exactOptional(),
    ReplicationInstanceArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of a replication instance on which you want to base the default list of individual assessments.',
        }),
    ).exactOptional(),
    SourceEngineName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Name of a database engine that the specified replication instance supports as a source.',
        }),
    ).exactOptional(),
    TargetEngineName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Name of a database engine that the specified replication instance supports as a target.',
        }),
    ).exactOptional(),
    MigrationType: MigrationTypeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'Name of the migration type that each provided individual assessment must support.',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeApplicableIndividualAssessmentsMessage',
    description: '<p/>',
    required: [],
  })
  .openapi('DescribeApplicableIndividualAssessmentsMessage')

const CertificateListSchema = z.array(CertificateSchema).openapi('CertificateList')

const DescribeCertificatesResponseSchema = z
  .object({
    Marker: StringSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    Certificates: CertificateListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Secure Sockets Layer (SSL) certificates associated with the replication instance.',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { Certificates: [], Marker: '' }, required: [] })
  .openapi('DescribeCertificatesResponse')

const FilterValueListSchema = z.array(StringSchema).openapi('FilterValueList')

const FilterSchema = z
  .object({
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the filter as specified for a <code>Describe*</code> or similar operation.',
        }),
    ),
    Values: FilterValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The filter value, which can specify one or more values used to narrow the returned results.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Values'],
    description:
      'Identifies the name and value of a filter object. This filter is used to limit the number and type of DMS objects that are returned for a particular <code>Describe*</code> call or similar operation. Filters are used as an optional parameter for certain API operations. ',
  })
  .openapi('Filter')

const FilterListSchema = z.array(FilterSchema).openapi('FilterList')

const DescribeCertificatesMessageSchema = z
  .object({
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters applied to the certificates described in the form of key-value pairs. Valid values are <code>certificate-arn</code> and <code>certificate-id</code>.',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 10</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeCertificatesMessage', required: [] })
  .openapi('DescribeCertificatesMessage')

const ConnectionListSchema = z.array(ConnectionSchema).openapi('ConnectionList')

const DescribeConnectionsResponseSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
    Connections: ConnectionListSchema.and(
      z.any().openapi({ description: 'A description of the connections.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Connections: [
        {
          EndpointArn:
            'arn:aws:dms:us-east-arn:aws:dms:us-east-1:123456789012:endpoint:ZW5UAN6P4E77EC7YWHK4RZZ3BE',
          EndpointIdentifier: 'testsrc1',
          ReplicationInstanceArn:
            'arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ',
          ReplicationInstanceIdentifier: 'test',
          Status: 'successful',
        },
      ],
      Marker: '',
    },
    description: '<p/>',
    required: [],
  })
  .openapi('DescribeConnectionsResponse')

const DescribeConnectionsMessageSchema = z
  .object({
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The filters applied to the connection.</p> <p>Valid filter names: endpoint-arn | replication-instance-arn</p>',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeConnectionsMessage', description: '<p/>', required: [] })
  .openapi('DescribeConnectionsMessage')

const EndpointSettingTypeValueSchema = z
  .enum(['string', 'boolean', 'integer', 'enum'])
  .openapi('EndpointSettingTypeValue')

const EndpointSettingEnumValuesSchema = z.array(StringSchema).openapi('EndpointSettingEnumValues')

const EndpointSettingSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name that you want to give the endpoint settings.' }),
    ).exactOptional(),
    Type: EndpointSettingTypeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of endpoint. Valid values are <code>source</code> and <code>target</code>.',
        }),
    ).exactOptional(),
    EnumValues: EndpointSettingEnumValuesSchema.and(
      z.any().openapi({ description: 'Enumerated values to use for this endpoint.' }),
    ).exactOptional(),
    Sensitive: BooleanOptionalSchema.and(
      z.any().openapi({ description: 'A value that marks this endpoint setting as sensitive.' }),
    ).exactOptional(),
    Units: StringSchema.and(
      z.any().openapi({ description: 'The unit of measure for this endpoint setting.' }),
    ).exactOptional(),
    Applicability: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The relevance or validity of an endpoint setting for an engine name and its endpoint type.',
        }),
    ).exactOptional(),
    IntValueMin: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description: 'The minimum value of an endpoint setting that is of type <code>int</code>.',
        }),
    ).exactOptional(),
    IntValueMax: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum value of an endpoint setting that is of type <code>int</code>.',
        }),
    ).exactOptional(),
    DefaultValue: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default value of the endpoint setting if no value is specified using <code>CreateEndpoint</code> or <code>ModifyEndpoint</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Endpoint settings.', required: [] })
  .openapi('EndpointSetting')

const EndpointSettingsListSchema = z.array(EndpointSettingSchema).openapi('EndpointSettingsList')

const DescribeEndpointSettingsResponseSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
    EndpointSettings: EndpointSettingsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Descriptions of the endpoint settings available for your source or target database engine.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeEndpointSettingsResponse')

const DescribeEndpointSettingsMessageSchema = z
  .object({
    EngineName: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The databse engine used for your source or target endpoint.' }),
    ),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['EngineName'], title: 'DescribeEndpointSettingsMessage' })
  .openapi('DescribeEndpointSettingsMessage')

const SupportedEndpointTypeSchema = z
  .object({
    EngineName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The database engine name. Valid values, depending on the EndpointType, include <code>"mysql"</code>, <code>"oracle"</code>, <code>"postgres"</code>, <code>"mariadb"</code>, <code>"aurora"</code>, <code>"aurora-postgresql"</code>, <code>"redshift"</code>, <code>"s3"</code>, <code>"db2"</code>, <code>"db2-zos"</code>, <code>"azuredb"</code>, <code>"sybase"</code>, <code>"dynamodb"</code>, <code>"mongodb"</code>, <code>"kinesis"</code>, <code>"kafka"</code>, <code>"elasticsearch"</code>, <code>"documentdb"</code>, <code>"sqlserver"</code>, <code>"neptune"</code>, and <code>"babelfish"</code>.',
        }),
    ).exactOptional(),
    SupportsCDC: BooleanSchema.and(
      z.any().openapi({ description: 'Indicates if change data capture (CDC) is supported.' }),
    ).exactOptional(),
    EndpointType: ReplicationEndpointTypeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of endpoint. Valid values are <code>source</code> and <code>target</code>.',
        }),
    ).exactOptional(),
    ReplicationInstanceEngineMinimumVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The earliest DMS engine version that supports this endpoint engine. Note that endpoint engines released with DMS versions earlier than 3.1.1 do not return a value for this parameter.',
        }),
    ).exactOptional(),
    EngineDisplayName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The expanded name for the engine name. For example, if the <code>EngineName</code> parameter is "aurora", this value would be "Amazon Aurora MySQL".',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about types of supported endpoints in response to a request by the <code>DescribeEndpointTypes</code> operation. This information includes the type of endpoint, the database engine name, and whether change data capture (CDC) is supported.',
    required: [],
  })
  .openapi('SupportedEndpointType')

const SupportedEndpointTypeListSchema = z
  .array(SupportedEndpointTypeSchema)
  .openapi('SupportedEndpointTypeList')

const DescribeEndpointTypesResponseSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
    SupportedEndpointTypes: SupportedEndpointTypeListSchema.and(
      z.any().openapi({ description: 'The types of endpoints that are supported.' }),
    ).exactOptional(),
  })
  .openapi({
    example: { Marker: '', SupportedEndpointTypes: [] },
    description: '<p/>',
    required: [],
  })
  .openapi('DescribeEndpointTypesResponse')

const DescribeEndpointTypesMessageSchema = z
  .object({
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters applied to the endpoint types.</p> <p>Valid filter names: engine-name | endpoint-type</p>',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeEndpointTypesMessage', description: '<p/>', required: [] })
  .openapi('DescribeEndpointTypesMessage')

const EndpointListSchema = z.array(EndpointSchema).openapi('EndpointList')

const DescribeEndpointsResponseSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
    Endpoints: EndpointListSchema.and(
      z.any().openapi({ description: 'Endpoint description.' }),
    ).exactOptional(),
  })
  .openapi({ example: { Endpoints: [], Marker: '' }, description: '<p/>', required: [] })
  .openapi('DescribeEndpointsResponse')

const DescribeEndpointsMessageSchema = z
  .object({
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters applied to the endpoints.</p> <p>Valid filter names: endpoint-arn | endpoint-type | endpoint-id | engine-name</p>',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeEndpointsMessage', description: '<p/>', required: [] })
  .openapi('DescribeEndpointsMessage')

const EventCategoryGroupSchema = z
  .object({
    SourceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The type of DMS resource that generates events. </p> <p>Valid values: replication-instance | replication-server | security-group | replication-task</p>',
        }),
    ).exactOptional(),
    EventCategories: EventCategoriesListSchema.and(
      z
        .any()
        .openapi({
          description: " A list of event categories from a source type that you've chosen.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Lists categories of events subscribed to, and generated by, the applicable DMS resource type. This data type appears in response to the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_EventCategoryGroup.html"> <code>DescribeEventCategories</code> </a> action.',
    required: [],
  })
  .openapi('EventCategoryGroup')

const EventCategoryGroupListSchema = z
  .array(EventCategoryGroupSchema)
  .openapi('EventCategoryGroupList')

const DescribeEventCategoriesResponseSchema = z
  .object({
    EventCategoryGroupList: EventCategoryGroupListSchema.and(
      z.any().openapi({ description: 'A list of event categories.' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('DescribeEventCategoriesResponse')

const DescribeEventCategoriesMessageSchema = z
  .object({
    SourceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The type of DMS resource that generates events. </p> <p>Valid values: replication-instance | replication-task</p>',
        }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z.any().openapi({ description: 'Filters applied to the event categories.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeEventCategoriesMessage', description: '<p/>', required: [] })
  .openapi('DescribeEventCategoriesMessage')

const EventSubscriptionsListSchema = z
  .array(EventSubscriptionSchema)
  .openapi('EventSubscriptionsList')

const DescribeEventSubscriptionsResponseSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
    EventSubscriptionsList: EventSubscriptionsListSchema.and(
      z.any().openapi({ description: 'A list of event subscriptions.' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('DescribeEventSubscriptionsResponse')

const DescribeEventSubscriptionsMessageSchema = z
  .object({
    SubscriptionName: StringSchema.and(
      z.any().openapi({ description: 'The name of the DMS event subscription to be described.' }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters applied to event subscriptions.</p> <p>Valid filter names: event-subscription-arn | event-subscription-id </p>',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeEventSubscriptionsMessage', description: '<p/>', required: [] })
  .openapi('DescribeEventSubscriptionsMessage')

const SourceTypeSchema = z.literal('replication-instance').openapi('SourceType')

const EventSchema = z
  .object({
    SourceIdentifier: StringSchema.and(
      z.any().openapi({ description: ' The identifier of an event source.' }),
    ).exactOptional(),
    SourceType: SourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The type of DMS resource that generates events. </p> <p>Valid values: replication-instance | endpoint | replication-task</p>',
        }),
    ).exactOptional(),
    Message: StringSchema.and(
      z.any().openapi({ description: 'The event message.' }),
    ).exactOptional(),
    EventCategories: EventCategoriesListSchema.and(
      z
        .any()
        .openapi({ description: 'The event categories available for the specified source type.' }),
    ).exactOptional(),
    Date: TStampSchema.and(
      z.any().openapi({ description: 'The date of the event.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes an identifiable significant activity that affects a replication instance or task. This object can provide the message, the available event categories, the date and source of the event, and the DMS resource type.',
    required: [],
  })
  .openapi('Event')

const EventListSchema = z.array(EventSchema).openapi('EventList')

const DescribeEventsResponseSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
    Events: EventListSchema.and(
      z.any().openapi({ description: 'The events described.' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('DescribeEventsResponse')

const DescribeEventsMessageSchema = z
  .object({
    SourceIdentifier: StringSchema.and(
      z.any().openapi({ description: ' The identifier of an event source.' }),
    ).exactOptional(),
    SourceType: SourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of DMS resource that generates events.</p> <p>Valid values: replication-instance | replication-task</p>',
        }),
    ).exactOptional(),
    StartTime: TStampSchema.and(
      z.any().openapi({ description: 'The start time for the events to be listed.' }),
    ).exactOptional(),
    EndTime: TStampSchema.and(
      z.any().openapi({ description: 'The end time for the events to be listed.' }),
    ).exactOptional(),
    Duration: IntegerOptionalSchema.and(
      z.any().openapi({ description: 'The duration of the events to be listed.' }),
    ).exactOptional(),
    EventCategories: EventCategoriesListSchema.and(
      z
        .any()
        .openapi({
          description: "A list of event categories for the source type that you've chosen.",
        }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters applied to events. The only valid filter is <code>replication-instance-id</code>.',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeEventsMessage', description: '<p/>', required: [] })
  .openapi('DescribeEventsMessage')

const VersionStatusSchema = z
  .enum(['UP_TO_DATE', 'OUTDATED', 'UNSUPPORTED'])
  .openapi('VersionStatus')

const CollectorStatusSchema = z.enum(['UNREGISTERED', 'ACTIVE']).openapi('CollectorStatus')

const CollectorHealthCheckSchema = z
  .object({
    CollectorStatus: CollectorStatusSchema.and(
      z.any().openapi({ description: 'The status of the Fleet Advisor collector.' }),
    ).exactOptional(),
    LocalCollectorS3Access: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({ description: 'Whether the local collector can access its Amazon S3 bucket.' }),
    ).exactOptional(),
    WebCollectorS3Access: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({ description: 'Whether the web collector can access its Amazon S3 bucket.' }),
    ).exactOptional(),
    WebCollectorGrantedRoleBasedAccess: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether the role that you provided when creating the Fleet Advisor collector has sufficient permissions to access the Fleet Advisor web collector.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the last Fleet Advisor collector health check.',
    required: [],
  })
  .openapi('CollectorHealthCheck')

const InventoryDataSchema = z
  .object({
    NumberOfDatabases: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of databases in the Fleet Advisor collector inventory.',
        }),
    ).exactOptional(),
    NumberOfSchemas: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of schemas in the Fleet Advisor collector inventory.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a Fleet Advisor collector inventory.', required: [] })
  .openapi('InventoryData')

const CollectorResponseSchema = z
  .object({
    CollectorReferencedId: StringSchema.and(
      z.any().openapi({ description: 'The reference ID of the Fleet Advisor collector.' }),
    ).exactOptional(),
    CollectorName: StringSchema.and(
      z.any().openapi({ description: 'The name of the Fleet Advisor collector .' }),
    ).exactOptional(),
    CollectorVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of your Fleet Advisor collector, in semantic versioning format, for example <code>1.0.2</code> ',
        }),
    ).exactOptional(),
    VersionStatus: VersionStatusSchema.and(
      z.any().openapi({ description: 'Whether the collector version is up to date.' }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'A summary description of the Fleet Advisor collector.' }),
    ).exactOptional(),
    S3BucketName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 bucket that the Fleet Advisor collector uses to store inventory metadata.',
        }),
    ).exactOptional(),
    ServiceAccessRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM role that grants permissions to access the specified Amazon S3 bucket.',
        }),
    ).exactOptional(),
    CollectorHealthCheck: CollectorHealthCheckSchema.exactOptional(),
    LastDataReceived: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp of the last time the collector received data, in the following format: <code>2022-01-24T19:04:02.596113Z</code> ',
        }),
    ).exactOptional(),
    RegisteredDate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp when DMS registered the collector, in the following format: <code>2022-01-24T19:04:02.596113Z</code> ',
        }),
    ).exactOptional(),
    CreatedDate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp when you created the collector, in the following format: <code>2022-01-24T19:04:02.596113Z</code> ',
        }),
    ).exactOptional(),
    ModifiedDate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp when DMS last modified the collector, in the following format: <code>2022-01-24T19:04:02.596113Z</code> ',
        }),
    ).exactOptional(),
    InventoryData: InventoryDataSchema.exactOptional(),
  })
  .openapi({ description: 'Describes a Fleet Advisor collector.', required: [] })
  .openapi('CollectorResponse')

const CollectorResponsesSchema = z.array(CollectorResponseSchema).openapi('CollectorResponses')

const DescribeFleetAdvisorCollectorsResponseSchema = z
  .object({
    Collectors: CollectorResponsesSchema.and(
      z
        .any()
        .openapi({
          description:
            "Provides descriptions of the Fleet Advisor collectors, including the collectors' name and ID, and the latest inventory data. ",
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>NextToken</code> is returned, there are more results available. The value of <code>NextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeFleetAdvisorCollectorsResponse')

const DescribeFleetAdvisorCollectorsRequestSchema = z
  .object({
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> If you specify any of the following filters, the output includes information for only those collectors that meet the filter criteria:</p> <ul> <li> <p> <code>collector-referenced-id</code> – The ID of the collector agent, for example <code>d4610ac5-e323-4ad9-bc50-eaf7249dfe9d</code>.</p> </li> <li> <p> <code>collector-name</code> – The name of the collector agent.</p> </li> </ul> <p>An example is: <code>describe-fleet-advisor-collectors --filter Name="collector-referenced-id",Values="d4610ac5-e323-4ad9-bc50-eaf7249dfe9d"</code> </p>',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({ description: 'Sets the maximum number of records returned in the response.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>NextToken</code> is returned by a previous response, there are more results available. The value of <code>NextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeFleetAdvisorCollectorsRequest', required: [] })
  .openapi('DescribeFleetAdvisorCollectorsRequest')

const LongOptionalSchema = z.int().openapi('LongOptional')

const ServerShortInfoResponseSchema = z
  .object({
    ServerId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of a server in a Fleet Advisor collector inventory.' }),
    ).exactOptional(),
    IpAddress: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The IP address of a server in a Fleet Advisor collector inventory.',
        }),
    ).exactOptional(),
    ServerName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name address of a server in a Fleet Advisor collector inventory.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes a server in a Fleet Advisor collector inventory.',
    required: [],
  })
  .openapi('ServerShortInfoResponse')

const DatabaseInstanceSoftwareDetailsResponseSchema = z
  .object({
    Engine: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The database engine of a database in a Fleet Advisor collector inventory, for example <code>Microsoft SQL Server</code>.',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The database engine version of a database in a Fleet Advisor collector inventory, for example <code>2019</code>.',
        }),
    ).exactOptional(),
    EngineEdition: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The database engine edition of a database in a Fleet Advisor collector inventory, for example <code>Express</code>.',
        }),
    ).exactOptional(),
    ServicePack: StringSchema.and(
      z.any().openapi({ description: 'The service pack level of the database.' }),
    ).exactOptional(),
    SupportLevel: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The support level of the database, for example <code>Mainstream support</code>.',
        }),
    ).exactOptional(),
    OsArchitecture: IntegerOptionalSchema.and(
      z.any().openapi({ description: 'The operating system architecture of the database.' }),
    ).exactOptional(),
    Tooltip: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the database engine software, for example <code>Mainstream support ends on November 14th, 2024</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes an inventory database instance for a Fleet Advisor collector.',
    required: [],
  })
  .openapi('DatabaseInstanceSoftwareDetailsResponse')

const CollectorShortInfoResponseSchema = z
  .object({
    CollectorReferencedId: StringSchema.and(
      z.any().openapi({ description: 'The reference ID of the Fleet Advisor collector.' }),
    ).exactOptional(),
    CollectorName: StringSchema.and(
      z.any().openapi({ description: 'The name of the Fleet Advisor collector.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Briefly describes a Fleet Advisor collector.', required: [] })
  .openapi('CollectorShortInfoResponse')

const CollectorsListSchema = z.array(CollectorShortInfoResponseSchema).openapi('CollectorsList')

const DatabaseResponseSchema = z
  .object({
    DatabaseId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of a database in a Fleet Advisor collector inventory.' }),
    ).exactOptional(),
    DatabaseName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of a database in a Fleet Advisor collector inventory. ',
        }),
    ).exactOptional(),
    IpAddress: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The IP address of a database in a Fleet Advisor collector inventory. ',
        }),
    ).exactOptional(),
    NumberOfSchemas: LongOptionalSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of schemas in a Fleet Advisor collector inventory database. ',
        }),
    ).exactOptional(),
    Server: ServerShortInfoResponseSchema.and(
      z
        .any()
        .openapi({
          description: 'The server name of a database in a Fleet Advisor collector inventory. ',
        }),
    ).exactOptional(),
    SoftwareDetails: DatabaseInstanceSoftwareDetailsResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            'The software details of a database in a Fleet Advisor collector inventory, such as database engine and version.',
        }),
    ).exactOptional(),
    Collectors: CollectorsListSchema.and(
      z.any().openapi({ description: 'A list of collectors associated with the database.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes a database in a Fleet Advisor collector inventory.',
    required: [],
  })
  .openapi('DatabaseResponse')

const DatabaseListSchema = z.array(DatabaseResponseSchema).openapi('DatabaseList')

const DescribeFleetAdvisorDatabasesResponseSchema = z
  .object({
    Databases: DatabaseListSchema.and(
      z
        .any()
        .openapi({
          description:
            "Provides descriptions of the Fleet Advisor collector databases, including the database's collector, ID, and name.",
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>NextToken</code> is returned, there are more results available. The value of <code>NextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeFleetAdvisorDatabasesResponse')

const DescribeFleetAdvisorDatabasesRequestSchema = z
  .object({
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> If you specify any of the following filters, the output includes information for only those databases that meet the filter criteria: </p> <ul> <li> <p> <code>database-id</code> – The ID of the database.</p> </li> <li> <p> <code>database-name</code> – The name of the database.</p> </li> <li> <p> <code>database-engine</code> – The name of the database engine.</p> </li> <li> <p> <code>server-ip-address</code> – The IP address of the database server.</p> </li> <li> <p> <code>database-ip-address</code> – The IP address of the database.</p> </li> <li> <p> <code>collector-name</code> – The name of the associated Fleet Advisor collector.</p> </li> </ul> <p>An example is: <code>describe-fleet-advisor-databases --filter Name="database-id",Values="45"</code> </p>',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({ description: 'Sets the maximum number of records returned in the response.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>NextToken</code> is returned by a previous response, there are more results available. The value of <code>NextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeFleetAdvisorDatabasesRequest', required: [] })
  .openapi('DescribeFleetAdvisorDatabasesRequest')

const FleetAdvisorLsaAnalysisResponseSchema = z
  .object({
    LsaAnalysisId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of an LSA analysis run by a Fleet Advisor collector.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The status of an LSA analysis run by a Fleet Advisor collector.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes a large-scale assessment (LSA) analysis run by a Fleet Advisor collector.',
    required: [],
  })
  .openapi('FleetAdvisorLsaAnalysisResponse')

const FleetAdvisorLsaAnalysisResponseListSchema = z
  .array(FleetAdvisorLsaAnalysisResponseSchema)
  .openapi('FleetAdvisorLsaAnalysisResponseList')

const DescribeFleetAdvisorLsaAnalysisResponseSchema = z
  .object({
    Analysis: FleetAdvisorLsaAnalysisResponseListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of <code>FleetAdvisorLsaAnalysisResponse</code> objects.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>NextToken</code> is returned, there are more results available. The value of <code>NextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeFleetAdvisorLsaAnalysisResponse')

const DescribeFleetAdvisorLsaAnalysisRequestSchema = z
  .object({
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({ description: 'Sets the maximum number of records returned in the response.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>NextToken</code> is returned by a previous response, there are more results available. The value of <code>NextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeFleetAdvisorLsaAnalysisRequest', required: [] })
  .openapi('DescribeFleetAdvisorLsaAnalysisRequest')

const FleetAdvisorSchemaObjectResponseSchema = z
  .object({
    SchemaId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of a schema object in a Fleet Advisor collector inventory.',
        }),
    ).exactOptional(),
    ObjectType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of the schema object, as reported by the database engine. Examples include the following:</p> <ul> <li> <p> <code>function</code> </p> </li> <li> <p> <code>trigger</code> </p> </li> <li> <p> <code>SYSTEM_TABLE</code> </p> </li> <li> <p> <code>QUEUE</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    NumberOfObjects: LongOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of objects in a schema object in a Fleet Advisor collector inventory.',
        }),
    ).exactOptional(),
    CodeLineCount: LongOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of lines of code in a schema object in a Fleet Advisor collector inventory.',
        }),
    ).exactOptional(),
    CodeSize: LongOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The size level of the code in a schema object in a Fleet Advisor collector inventory.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes a schema object in a Fleet Advisor collector inventory.',
    required: [],
  })
  .openapi('FleetAdvisorSchemaObjectResponse')

const FleetAdvisorSchemaObjectListSchema = z
  .array(FleetAdvisorSchemaObjectResponseSchema)
  .openapi('FleetAdvisorSchemaObjectList')

const DescribeFleetAdvisorSchemaObjectSummaryResponseSchema = z
  .object({
    FleetAdvisorSchemaObjects: FleetAdvisorSchemaObjectListSchema.and(
      z
        .any()
        .openapi({
          description: 'A collection of <code>FleetAdvisorSchemaObjectResponse</code> objects.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>NextToken</code> is returned, there are more results available. The value of <code>NextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeFleetAdvisorSchemaObjectSummaryResponse')

const DescribeFleetAdvisorSchemaObjectSummaryRequestSchema = z
  .object({
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> If you specify any of the following filters, the output includes information for only those schema objects that meet the filter criteria:</p> <ul> <li> <p> <code>schema-id</code> – The ID of the schema, for example <code>d4610ac5-e323-4ad9-bc50-eaf7249dfe9d</code>.</p> </li> </ul> <p>Example: <code>describe-fleet-advisor-schema-object-summary --filter Name="schema-id",Values="50"</code> </p>',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({ description: 'Sets the maximum number of records returned in the response.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>NextToken</code> is returned by a previous response, there are more results available. The value of <code>NextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeFleetAdvisorSchemaObjectSummaryRequest', required: [] })
  .openapi('DescribeFleetAdvisorSchemaObjectSummaryRequest')

const DatabaseShortInfoResponseSchema = z
  .object({
    DatabaseId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of a database in a Fleet Advisor collector inventory.' }),
    ).exactOptional(),
    DatabaseName: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of a database in a Fleet Advisor collector inventory.' }),
    ).exactOptional(),
    DatabaseIpAddress: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The IP address of a database in a Fleet Advisor collector inventory.',
        }),
    ).exactOptional(),
    DatabaseEngine: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The database engine of a database in a Fleet Advisor collector inventory, for example <code>PostgreSQL</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes a database in a Fleet Advisor collector inventory.',
    required: [],
  })
  .openapi('DatabaseShortInfoResponse')

const SchemaShortInfoResponseSchema = z
  .object({
    SchemaId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of a schema in a Fleet Advisor collector inventory.' }),
    ).exactOptional(),
    SchemaName: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of a schema in a Fleet Advisor collector inventory.' }),
    ).exactOptional(),
    DatabaseId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of a database in a Fleet Advisor collector inventory.' }),
    ).exactOptional(),
    DatabaseName: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of a database in a Fleet Advisor collector inventory.' }),
    ).exactOptional(),
    DatabaseIpAddress: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The IP address of a database in a Fleet Advisor collector inventory.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes a schema in a Fleet Advisor collector inventory.',
    required: [],
  })
  .openapi('SchemaShortInfoResponse')

const DoubleOptionalSchema = z.float64().openapi('DoubleOptional')

const SchemaResponseSchema = z
  .object({
    CodeLineCount: LongOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of lines of code in a schema in a Fleet Advisor collector inventory.',
        }),
    ).exactOptional(),
    CodeSize: LongOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The size level of the code in a schema in a Fleet Advisor collector inventory.',
        }),
    ).exactOptional(),
    Complexity: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The complexity level of the code in a schema in a Fleet Advisor collector inventory.',
        }),
    ).exactOptional(),
    Server: ServerShortInfoResponseSchema.and(
      z
        .any()
        .openapi({
          description: 'The database server for a schema in a Fleet Advisor collector inventory.',
        }),
    ).exactOptional(),
    DatabaseInstance: DatabaseShortInfoResponseSchema.and(
      z
        .any()
        .openapi({
          description: 'The database for a schema in a Fleet Advisor collector inventory.',
        }),
    ).exactOptional(),
    SchemaId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of a schema in a Fleet Advisor collector inventory.' }),
    ).exactOptional(),
    SchemaName: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of a schema in a Fleet Advisor collector inventory.' }),
    ).exactOptional(),
    OriginalSchema: SchemaShortInfoResponseSchema.exactOptional(),
    Similarity: DoubleOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The similarity value for a schema in a Fleet Advisor collector inventory. A higher similarity value indicates that a schema is likely to be a duplicate.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes a schema in a Fleet Advisor collector inventory.',
    required: [],
  })
  .openapi('SchemaResponse')

const FleetAdvisorSchemaListSchema = z.array(SchemaResponseSchema).openapi('FleetAdvisorSchemaList')

const DescribeFleetAdvisorSchemasResponseSchema = z
  .object({
    FleetAdvisorSchemas: FleetAdvisorSchemaListSchema.and(
      z.any().openapi({ description: 'A collection of <code>SchemaResponse</code> objects.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>NextToken</code> is returned, there are more results available. The value of <code>NextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeFleetAdvisorSchemasResponse')

const DescribeFleetAdvisorSchemasRequestSchema = z
  .object({
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> If you specify any of the following filters, the output includes information for only those schemas that meet the filter criteria:</p> <ul> <li> <p> <code>complexity</code> – The schema's complexity, for example <code>Simple</code>.</p> </li> <li> <p> <code>database-id</code> – The ID of the schema's database.</p> </li> <li> <p> <code>database-ip-address</code> – The IP address of the schema's database.</p> </li> <li> <p> <code>database-name</code> – The name of the schema's database.</p> </li> <li> <p> <code>database-engine</code> – The name of the schema database's engine.</p> </li> <li> <p> <code>original-schema-name</code> – The name of the schema's database's main schema.</p> </li> <li> <p> <code>schema-id</code> – The ID of the schema, for example <code>15</code>.</p> </li> <li> <p> <code>schema-name</code> – The name of the schema.</p> </li> <li> <p> <code>server-ip-address</code> – The IP address of the schema database's server.</p> </li> </ul> <p>An example is: <code>describe-fleet-advisor-schemas --filter Name=\"schema-id\",Values=\"50\"</code> </p>",
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({ description: 'Sets the maximum number of records returned in the response.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>NextToken</code> is returned by a previous response, there are more results available. The value of <code>NextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeFleetAdvisorSchemasRequest', required: [] })
  .openapi('DescribeFleetAdvisorSchemasRequest')

const AvailabilityZonesListSchema = z.array(StringSchema).openapi('AvailabilityZonesList')

const ReleaseStatusValuesSchema = z.enum(['beta', 'prod']).openapi('ReleaseStatusValues')

const OrderableReplicationInstanceSchema = z
  .object({
    EngineVersion: StringSchema.and(
      z.any().openapi({ description: 'The version of the replication engine.' }),
    ).exactOptional(),
    ReplicationInstanceClass: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The compute and memory capacity of the replication instance as defined for the specified replication instance class. For example to specify the instance class dms.c4.large, set this parameter to <code>"dms.c4.large"</code>.</p> <p>For more information on the settings and capacities for the available replication instance classes, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth"> Selecting the right DMS replication instance for your migration</a>. </p>',
        }),
    ).exactOptional(),
    StorageType: StringSchema.and(
      z.any().openapi({ description: 'The type of storage used by the replication instance.' }),
    ).exactOptional(),
    MinAllocatedStorage: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum amount of storage (in gigabytes) that can be allocated for the replication instance.',
        }),
    ).exactOptional(),
    MaxAllocatedStorage: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum amount of storage (in gigabytes) that can be allocated for the replication instance.',
        }),
    ).exactOptional(),
    DefaultAllocatedStorage: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default amount of storage (in gigabytes) that is allocated for the replication instance.',
        }),
    ).exactOptional(),
    IncludedAllocatedStorage: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of storage (in gigabytes) that is allocated for the replication instance.',
        }),
    ).exactOptional(),
    AvailabilityZones: AvailabilityZonesListSchema.and(
      z.any().openapi({ description: 'List of Availability Zones for this replication instance.' }),
    ).exactOptional(),
    ReleaseStatus: ReleaseStatusValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value returned when the specified <code>EngineVersion</code> of the replication instance is in Beta or test mode. This indicates some features might not work as expected.</p> <note> <p>DMS supports the <code>ReleaseStatus</code> parameter in versions 3.1.4 and later.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "In response to the <code>DescribeOrderableReplicationInstances</code> operation, this object describes an available replication instance. This description includes the replication instance's type, engine version, and allocated storage.",
    required: [],
  })
  .openapi('OrderableReplicationInstance')

const OrderableReplicationInstanceListSchema = z
  .array(OrderableReplicationInstanceSchema)
  .openapi('OrderableReplicationInstanceList')

const DescribeOrderableReplicationInstancesResponseSchema = z
  .object({
    OrderableReplicationInstances: OrderableReplicationInstanceListSchema.and(
      z.any().openapi({ description: 'The order-able replication instances available.' }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { Marker: '', OrderableReplicationInstances: [] },
    description: '<p/>',
    required: [],
  })
  .openapi('DescribeOrderableReplicationInstancesResponse')

const DescribeOrderableReplicationInstancesMessageSchema = z
  .object({
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeOrderableReplicationInstancesMessage',
    description: '<p/>',
    required: [],
  })
  .openapi('DescribeOrderableReplicationInstancesMessage')

const PendingMaintenanceActionsSchema: z.ZodType<PendingMaintenanceActionsType> = z
  .lazy(() => z.array(ResourcePendingMaintenanceActionsSchema))
  .openapi('PendingMaintenanceActions')

const DescribePendingMaintenanceActionsResponseSchema = z
  .object({
    PendingMaintenanceActions: PendingMaintenanceActionsSchema.and(
      z.any().openapi({ description: 'The pending maintenance action.' }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('DescribePendingMaintenanceActionsResponse')

const DescribePendingMaintenanceActionsMessageSchema = z
  .object({
    ReplicationInstanceArn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the replication instance.' }),
    ).exactOptional(),
    Filters: FilterListSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribePendingMaintenanceActionsMessage', description: '<p/>', required: [] })
  .openapi('DescribePendingMaintenanceActionsMessage')

const LimitationSchema = z
  .object({
    DatabaseId: StringSchema.and(
      z.any().openapi({ description: 'The identifier of the source database.' }),
    ).exactOptional(),
    EngineName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the target engine that Fleet Advisor should use in the target engine recommendation. Valid values include <code>"rds-aurora-mysql"</code>, <code>"rds-aurora-postgresql"</code>, <code>"rds-mysql"</code>, <code>"rds-oracle"</code>, <code>"rds-sql-server"</code>, and <code>"rds-postgresql"</code>.',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the limitation. Describes unsupported database features, migration action items, and other limitations.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the limitation. Provides additional information about the limitation, and includes recommended actions that you can take to address or avoid this limitation.',
        }),
    ).exactOptional(),
    Impact: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The impact of the limitation. You can use this parameter to prioritize limitations that you want to address. Valid values include <code>"Blocker"</code>, <code>"High"</code>, <code>"Medium"</code>, and <code>"Low"</code>.',
        }),
    ).exactOptional(),
    Type: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the limitation, such as action required, upgrade required, and limited feature.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Provides information about the limitations of target Amazon Web Services engines.</p> <p>Your source database might include features that the target Amazon Web Services engine doesn't support. Fleet Advisor lists these features as limitations. You should consider these limitations during database migration. For each limitation, Fleet Advisor recommends an action that you can take to address or avoid this limitation.</p>",
    required: [],
  })
  .openapi('Limitation')

const LimitationListSchema = z.array(LimitationSchema).openapi('LimitationList')

const DescribeRecommendationLimitationsResponseSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique pagination token returned for you to pass to a subsequent request. Fleet Advisor returns this token when the number of records in the response is greater than the <code>MaxRecords</code> value. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.',
        }),
    ).exactOptional(),
    Limitations: LimitationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of limitations for recommendations of target Amazon Web Services engines.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeRecommendationLimitationsResponse')

const DescribeRecommendationLimitationsRequestSchema = z
  .object({
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters applied to the limitations described in the form of key-value pairs.',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, Fleet Advisor includes a pagination token in the response so that you can retrieve the remaining results.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p> <p>If <code>NextToken</code> is returned by a previous response, there are more results available. The value of <code>NextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeRecommendationLimitationsRequest', required: [] })
  .openapi('DescribeRecommendationLimitationsRequest')

const RdsRequirementsSchema = z
  .object({
    EngineEdition: StringSchema.and(
      z.any().openapi({ description: 'The required target Amazon RDS engine edition.' }),
    ).exactOptional(),
    InstanceVcpu: DoubleOptionalSchema.and(
      z
        .any()
        .openapi({
          description: 'The required number of virtual CPUs (vCPU) on the Amazon RDS DB instance.',
        }),
    ).exactOptional(),
    InstanceMemory: DoubleOptionalSchema.and(
      z.any().openapi({ description: 'The required memory on the Amazon RDS DB instance.' }),
    ).exactOptional(),
    StorageSize: IntegerOptionalSchema.and(
      z.any().openapi({ description: 'The required Amazon RDS DB instance storage size.' }),
    ).exactOptional(),
    StorageIops: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The required number of I/O operations completed each second (IOPS) on your Amazon RDS DB instance.',
        }),
    ).exactOptional(),
    DeploymentOption: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The required deployment option for the Amazon RDS DB instance. Valid values include <code>"MULTI_AZ"</code> for Multi-AZ deployments and <code>"SINGLE_AZ"</code> for Single-AZ deployments.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information that describes the requirements to the target engine on Amazon RDS.',
    required: [],
  })
  .openapi('RdsRequirements')

const RdsConfigurationSchema = z
  .object({
    EngineEdition: StringSchema.and(
      z
        .any()
        .openapi({ description: 'Describes the recommended target Amazon RDS engine edition.' }),
    ).exactOptional(),
    InstanceType: StringSchema.and(
      z
        .any()
        .openapi({ description: 'Describes the recommended target Amazon RDS instance type.' }),
    ).exactOptional(),
    InstanceVcpu: DoubleOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the number of virtual CPUs (vCPU) on the recommended Amazon RDS DB instance that meets your requirements.',
        }),
    ).exactOptional(),
    InstanceMemory: DoubleOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the memory on the recommended Amazon RDS DB instance that meets your requirements.',
        }),
    ).exactOptional(),
    StorageType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes the storage type of the recommended Amazon RDS DB instance that meets your requirements.</p> <p>Amazon RDS provides three storage types: General Purpose SSD (also known as gp2 and gp3), Provisioned IOPS SSD (also known as io1), and magnetic (also known as standard).</p>',
        }),
    ).exactOptional(),
    StorageSize: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the storage size of the recommended Amazon RDS DB instance that meets your requirements.',
        }),
    ).exactOptional(),
    StorageIops: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the number of I/O operations completed each second (IOPS) on the recommended Amazon RDS DB instance that meets your requirements.',
        }),
    ).exactOptional(),
    DeploymentOption: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the deployment option for the recommended Amazon RDS DB instance. The deployment options include Multi-AZ and Single-AZ deployments. Valid values include <code>"MULTI_AZ"</code> and <code>"SINGLE_AZ"</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information that describes the configuration of the recommended target engine on Amazon RDS.',
    required: [],
  })
  .openapi('RdsConfiguration')

const RdsRecommendationSchema = z
  .object({
    RequirementsToTarget: RdsRequirementsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Supplemental information about the requirements to the recommended target database on Amazon RDS.',
        }),
    ).exactOptional(),
    TargetConfiguration: RdsConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Supplemental information about the configuration of the recommended target database on Amazon RDS.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information that describes a recommendation of a target engine on Amazon RDS.',
    required: [],
  })
  .openapi('RdsRecommendation')

const RecommendationDataSchema = z
  .object({
    RdsEngine: RdsRecommendationSchema.and(
      z
        .any()
        .openapi({ description: 'The recommendation of a target Amazon RDS database engine.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about the target engine for the specified source database.',
    required: [],
  })
  .openapi('RecommendationData')

const RecommendationSchema = z
  .object({
    DatabaseId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the source database for which Fleet Advisor provided this recommendation.',
        }),
    ).exactOptional(),
    EngineName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the target engine. Valid values include <code>"rds-aurora-mysql"</code>, <code>"rds-aurora-postgresql"</code>, <code>"rds-mysql"</code>, <code>"rds-oracle"</code>, <code>"rds-sql-server"</code>, and <code>"rds-postgresql"</code>.',
        }),
    ).exactOptional(),
    CreatedDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date when Fleet Advisor created the target engine recommendation.',
        }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the target engine recommendation. Valid values include <code>"alternate"</code>, <code>"in-progress"</code>, <code>"not-viable"</code>, and <code>"recommended"</code>.',
        }),
    ).exactOptional(),
    Preferred: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates that this target is the rightsized migration destination.',
        }),
    ).exactOptional(),
    Settings: RecommendationSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings in JSON format for the preferred target engine parameters. These parameters include capacity, resource utilization, and the usage type (production, development, or testing).',
        }),
    ).exactOptional(),
    Data: RecommendationDataSchema.and(
      z
        .any()
        .openapi({
          description: 'The recommendation of a target engine for the specified source database.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Provides information that describes a recommendation of a target engine.</p> <p>A <i>recommendation</i> is a set of possible Amazon Web Services target engines that you can choose to migrate your source on-premises database. In this set, Fleet Advisor suggests a single target engine as the right sized migration destination. To determine this rightsized migration destination, Fleet Advisor uses the inventory metadata and metrics from data collector. You can use recommendations before the start of migration to save costs and reduce risks.</p> <p>With recommendations, you can explore different target options and compare metrics, so you can make an informed decision when you choose the migration target.</p>',
    required: [],
  })
  .openapi('Recommendation')

const RecommendationListSchema = z.array(RecommendationSchema).openapi('RecommendationList')

const DescribeRecommendationsResponseSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique pagination token returned for you to pass to a subsequent request. Fleet Advisor returns this token when the number of records in the response is greater than the <code>MaxRecords</code> value. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.',
        }),
    ).exactOptional(),
    Recommendations: RecommendationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of recommendations of target engines that Fleet Advisor created for the source database.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeRecommendationsResponse')

const DescribeRecommendationsRequestSchema = z
  .object({
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters applied to the target engine recommendations described in the form of key-value pairs.',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, Fleet Advisor includes a pagination token in the response so that you can retrieve the remaining results.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p> <p>If <code>NextToken</code> is returned by a previous response, there are more results available. The value of <code>NextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeRecommendationsRequest', required: [] })
  .openapi('DescribeRecommendationsRequest')

const RefreshSchemasStatusTypeValueSchema = z
  .enum(['successful', 'failed', 'refreshing'])
  .openapi('RefreshSchemasStatusTypeValue')

const RefreshSchemasStatusSchema = z
  .object({
    EndpointArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.',
        }),
    ).exactOptional(),
    ReplicationInstanceArn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the replication instance.' }),
    ).exactOptional(),
    Status: RefreshSchemasStatusTypeValueSchema.and(
      z.any().openapi({ description: 'The status of the schema.' }),
    ).exactOptional(),
    LastRefreshDate: TStampSchema.and(
      z.any().openapi({ description: 'The date the schema was last refreshed.' }),
    ).exactOptional(),
    LastFailureMessage: StringSchema.and(
      z.any().openapi({ description: 'The last failure message for the schema.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information that describes status of a schema at an endpoint specified by the <code>DescribeRefreshSchemaStatus</code> operation.',
    required: [],
  })
  .openapi('RefreshSchemasStatus')

const DescribeRefreshSchemasStatusResponseSchema = z
  .object({
    RefreshSchemasStatus: RefreshSchemasStatusSchema.and(
      z.any().openapi({ description: 'The status of the schema.' }),
    ).exactOptional(),
  })
  .openapi({ example: { RefreshSchemasStatus: {} }, description: '<p/>', required: [] })
  .openapi('DescribeRefreshSchemasStatusResponse')

const DescribeRefreshSchemasStatusMessageSchema = z
  .object({
    EndpointArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.',
        }),
    ),
  })
  .openapi({
    required: ['EndpointArn'],
    title: 'DescribeRefreshSchemasStatusMessage',
    description: '<p/>',
  })
  .openapi('DescribeRefreshSchemasStatusMessage')

const ReplicationInstanceTaskLogSchema = z
  .object({
    ReplicationTaskName: StringSchema.and(
      z.any().openapi({ description: 'The name of the replication task.' }),
    ).exactOptional(),
    ReplicationTaskArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the replication task.' }),
    ).exactOptional(),
    ReplicationInstanceTaskLogSize: LongSchema.and(
      z.any().openapi({ description: 'The size, in bytes, of the replication task log.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains metadata for a replication instance task log.', required: [] })
  .openapi('ReplicationInstanceTaskLog')

const ReplicationInstanceTaskLogsListSchema = z
  .array(ReplicationInstanceTaskLogSchema)
  .openapi('ReplicationInstanceTaskLogsList')

const DescribeReplicationInstanceTaskLogsResponseSchema = z
  .object({
    ReplicationInstanceArn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the replication instance.' }),
    ).exactOptional(),
    ReplicationInstanceTaskLogs: ReplicationInstanceTaskLogsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of replication task log metadata. Each member of the array contains the replication task name, ARN, and task log size (in bytes). ',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeReplicationInstanceTaskLogsResponse')

const DescribeReplicationInstanceTaskLogsMessageSchema = z
  .object({
    ReplicationInstanceArn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the replication instance.' }),
    ),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ReplicationInstanceArn'],
    title: 'DescribeReplicationInstanceTaskLogsMessage',
  })
  .openapi('DescribeReplicationInstanceTaskLogsMessage')

const ReplicationInstanceListSchema = z
  .array(ReplicationInstanceSchema)
  .openapi('ReplicationInstanceList')

const DescribeReplicationInstancesResponseSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
    ReplicationInstances: ReplicationInstanceListSchema.and(
      z.any().openapi({ description: 'The replication instances described.' }),
    ).exactOptional(),
  })
  .openapi({ example: { Marker: '', ReplicationInstances: [] }, description: '<p/>', required: [] })
  .openapi('DescribeReplicationInstancesResponse')

const DescribeReplicationInstancesMessageSchema = z
  .object({
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters applied to replication instances.</p> <p>Valid filter names: replication-instance-arn | replication-instance-id | replication-instance-class | engine-version</p>',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeReplicationInstancesMessage', description: '<p/>', required: [] })
  .openapi('DescribeReplicationInstancesMessage')

const ReplicationSubnetGroupsSchema = z
  .array(ReplicationSubnetGroupSchema)
  .openapi('ReplicationSubnetGroups')

const DescribeReplicationSubnetGroupsResponseSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
    ReplicationSubnetGroups: ReplicationSubnetGroupsSchema.and(
      z.any().openapi({ description: 'A description of the replication subnet groups.' }),
    ).exactOptional(),
  })
  .openapi({
    example: { Marker: '', ReplicationSubnetGroups: [] },
    description: '<p/>',
    required: [],
  })
  .openapi('DescribeReplicationSubnetGroupsResponse')

const DescribeReplicationSubnetGroupsMessageSchema = z
  .object({
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters applied to replication subnet groups.</p> <p>Valid filter names: replication-subnet-group-id</p>',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeReplicationSubnetGroupsMessage', description: '<p/>', required: [] })
  .openapi('DescribeReplicationSubnetGroupsMessage')

const ReplicationTaskAssessmentResultSchema = z
  .object({
    ReplicationTaskIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The replication task identifier of the task on which the task assessment was run. ',
        }),
    ).exactOptional(),
    ReplicationTaskArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the replication task. ' }),
    ).exactOptional(),
    ReplicationTaskLastAssessmentDate: TStampSchema.and(
      z.any().openapi({ description: 'The date the task assessment was completed. ' }),
    ).exactOptional(),
    AssessmentStatus: StringSchema.and(
      z.any().openapi({ description: ' The status of the task assessment. ' }),
    ).exactOptional(),
    AssessmentResultsFile: StringSchema.and(
      z.any().openapi({ description: ' The file containing the results of the task assessment. ' }),
    ).exactOptional(),
    AssessmentResults: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The task assessment results in JSON format. </p> <p>The response object only contains this field if you provide <a>DescribeReplicationTaskAssessmentResultsMessage$ReplicationTaskArn</a> in the request.</p>',
        }),
    ).exactOptional(),
    S3ObjectUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The URL of the S3 object containing the task assessment results. </p> <p>The response object only contains this field if you provide <a>DescribeReplicationTaskAssessmentResultsMessage$ReplicationTaskArn</a> in the request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: ' The task assessment report in JSON format. ', required: [] })
  .openapi('ReplicationTaskAssessmentResult')

const ReplicationTaskAssessmentResultListSchema = z
  .array(ReplicationTaskAssessmentResultSchema)
  .openapi('ReplicationTaskAssessmentResultList')

const DescribeReplicationTaskAssessmentResultsResponseSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
    BucketName: StringSchema.and(
      z
        .any()
        .openapi({
          description: '- The Amazon S3 bucket where the task assessment report is located. ',
        }),
    ).exactOptional(),
    ReplicationTaskAssessmentResults: ReplicationTaskAssessmentResultListSchema.and(
      z.any().openapi({ description: ' The task assessment report. ' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('DescribeReplicationTaskAssessmentResultsResponse')

const DescribeReplicationTaskAssessmentResultsMessageSchema = z
  .object({
    ReplicationTaskArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) string that uniquely identifies the task. When this input parameter is specified, the API returns only one result and ignore the values of the <code>MaxRecords</code> and <code>Marker</code> parameters. ',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeReplicationTaskAssessmentResultsMessage',
    description: '<p/>',
    required: [],
  })
  .openapi('DescribeReplicationTaskAssessmentResultsMessage')

const ReplicationTaskAssessmentRunListSchema = z
  .array(ReplicationTaskAssessmentRunSchema)
  .openapi('ReplicationTaskAssessmentRunList')

const DescribeReplicationTaskAssessmentRunsResponseSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pagination token returned for you to pass to a subsequent request. If you pass this token as the <code>Marker</code> value in a subsequent request, the response includes only records beyond the marker, up to the value specified in the request by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
    ReplicationTaskAssessmentRuns: ReplicationTaskAssessmentRunListSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more premigration assessment runs as specified by <code>Filters</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('DescribeReplicationTaskAssessmentRunsResponse')

const DescribeReplicationTaskAssessmentRunsMessageSchema = z
  .object({
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters applied to the premigration assessment runs described in the form of key-value pairs.</p> <p>Valid filter names: <code>replication-task-assessment-run-arn</code>, <code>replication-task-arn</code>, <code>replication-instance-arn</code>, <code>status</code> </p>',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeReplicationTaskAssessmentRunsMessage',
    description: '<p/>',
    required: [],
  })
  .openapi('DescribeReplicationTaskAssessmentRunsMessage')

const ReplicationTaskIndividualAssessmentSchema = z
  .object({
    ReplicationTaskIndividualAssessmentArn: StringSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of this individual assessment.' }),
    ).exactOptional(),
    ReplicationTaskAssessmentRunArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of the premigration assessment run that is created to run this individual assessment.',
        }),
    ).exactOptional(),
    IndividualAssessmentName: StringSchema.and(
      z.any().openapi({ description: 'Name of this individual assessment.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Individual assessment status.</p> <p>This status can have one of the following values:</p> <ul> <li> <p> <code>"cancelled"</code> </p> </li> <li> <p> <code>"error"</code> </p> </li> <li> <p> <code>"failed"</code> </p> </li> <li> <p> <code>"passed"</code> </p> </li> <li> <p> <code>"pending"</code> </p> </li> <li> <p> <code>"running"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    ReplicationTaskIndividualAssessmentStartDate: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Date when this individual assessment was started as part of running the <code>StartReplicationTaskAssessmentRun</code> operation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information that describes an individual assessment from a premigration assessment run.',
    required: [],
  })
  .openapi('ReplicationTaskIndividualAssessment')

const ReplicationTaskIndividualAssessmentListSchema = z
  .array(ReplicationTaskIndividualAssessmentSchema)
  .openapi('ReplicationTaskIndividualAssessmentList')

const DescribeReplicationTaskIndividualAssessmentsResponseSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pagination token returned for you to pass to a subsequent request. If you pass this token as the <code>Marker</code> value in a subsequent request, the response includes only records beyond the marker, up to the value specified in the request by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
    ReplicationTaskIndividualAssessments: ReplicationTaskIndividualAssessmentListSchema.and(
      z
        .any()
        .openapi({
          description: 'One or more individual assessments as specified by <code>Filters</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('DescribeReplicationTaskIndividualAssessmentsResponse')

const DescribeReplicationTaskIndividualAssessmentsMessageSchema = z
  .object({
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters applied to the individual assessments described in the form of key-value pairs.</p> <p>Valid filter names: <code>replication-task-assessment-run-arn</code>, <code>replication-task-arn</code>, <code>status</code> </p>',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeReplicationTaskIndividualAssessmentsMessage',
    description: '<p/>',
    required: [],
  })
  .openapi('DescribeReplicationTaskIndividualAssessmentsMessage')

const ReplicationTaskListSchema = z.array(ReplicationTaskSchema).openapi('ReplicationTaskList')

const DescribeReplicationTasksResponseSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
    ReplicationTasks: ReplicationTaskListSchema.and(
      z.any().openapi({ description: 'A description of the replication tasks.' }),
    ).exactOptional(),
  })
  .openapi({ example: { Marker: '', ReplicationTasks: [] }, description: '<p/>', required: [] })
  .openapi('DescribeReplicationTasksResponse')

const DescribeReplicationTasksMessageSchema = z
  .object({
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters applied to replication tasks.</p> <p>Valid filter names: replication-task-arn | replication-task-id | migration-type | endpoint-arn | replication-instance-arn</p>',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
    WithoutSettings: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'An option to set to avoid returning information about settings. Use this to reduce overhead when setting information is too large. To use this option, choose <code>true</code>; otherwise, choose <code>false</code> (the default).',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeReplicationTasksMessage', description: '<p/>', required: [] })
  .openapi('DescribeReplicationTasksMessage')

const SchemaListSchema = z.array(StringSchema).openapi('SchemaList')

const DescribeSchemasResponseSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
    Schemas: SchemaListSchema.and(
      z.any().openapi({ description: 'The described schema.' }),
    ).exactOptional(),
  })
  .openapi({ example: { Marker: '', Schemas: [] }, description: '<p/>', required: [] })
  .openapi('DescribeSchemasResponse')

const DescribeSchemasMessageSchema = z
  .object({
    EndpointArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.',
        }),
    ),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['EndpointArn'], title: 'DescribeSchemasMessage', description: '<p/>' })
  .openapi('DescribeSchemasMessage')

const TableStatisticsSchema = z
  .object({
    SchemaName: StringSchema.and(
      z.any().openapi({ description: 'The schema name.' }),
    ).exactOptional(),
    TableName: StringSchema.and(
      z.any().openapi({ description: 'The name of the table.' }),
    ).exactOptional(),
    Inserts: LongSchema.and(
      z.any().openapi({ description: 'The number of insert actions performed on a table.' }),
    ).exactOptional(),
    Deletes: LongSchema.and(
      z.any().openapi({ description: 'The number of delete actions performed on a table.' }),
    ).exactOptional(),
    Updates: LongSchema.and(
      z.any().openapi({ description: 'The number of update actions performed on a table.' }),
    ).exactOptional(),
    Ddls: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The data definition language (DDL) used to build and modify the structure of your tables.',
        }),
    ).exactOptional(),
    AppliedInserts: LongOptionalSchema.and(
      z.any().openapi({ description: 'The number of insert actions applied on a target table.' }),
    ).exactOptional(),
    AppliedDeletes: LongOptionalSchema.and(
      z.any().openapi({ description: 'The number of delete actions applied on a target table.' }),
    ).exactOptional(),
    AppliedUpdates: LongOptionalSchema.and(
      z.any().openapi({ description: 'The number of update actions applied on a target table.' }),
    ).exactOptional(),
    AppliedDdls: LongOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of data definition language (DDL) statements used to build and modify the structure of your tables applied on the target.',
        }),
    ).exactOptional(),
    FullLoadRows: LongSchema.and(
      z.any().openapi({ description: 'The number of rows added during the full load operation.' }),
    ).exactOptional(),
    FullLoadCondtnlChkFailedRows: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of rows that failed conditional checks during the full load operation (valid only for migrations where DynamoDB is the target).',
        }),
    ).exactOptional(),
    FullLoadErrorRows: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of rows that failed to load during the full load operation (valid only for migrations where DynamoDB is the target).',
        }),
    ).exactOptional(),
    FullLoadStartTime: TStampSchema.and(
      z.any().openapi({ description: 'The time when the full load operation started.' }),
    ).exactOptional(),
    FullLoadEndTime: TStampSchema.and(
      z.any().openapi({ description: 'The time when the full load operation completed.' }),
    ).exactOptional(),
    FullLoadReloaded: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that indicates if the table was reloaded (<code>true</code>) or loaded as part of a new full load operation (<code>false</code>).',
        }),
    ).exactOptional(),
    LastUpdateTime: TStampSchema.and(
      z.any().openapi({ description: 'The last time a table was updated.' }),
    ).exactOptional(),
    TableState: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of the tables described.</p> <p>Valid states: Table does not exist | Before load | Full load | Table completed | Table cancelled | Table error | Table is being reloaded</p>',
        }),
    ).exactOptional(),
    ValidationPendingRecords: LongSchema.and(
      z.any().openapi({ description: 'The number of records that have yet to be validated.' }),
    ).exactOptional(),
    ValidationFailedRecords: LongSchema.and(
      z.any().openapi({ description: 'The number of records that failed validation.' }),
    ).exactOptional(),
    ValidationSuspendedRecords: LongSchema.and(
      z.any().openapi({ description: "The number of records that couldn't be validated." }),
    ).exactOptional(),
    ValidationState: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The validation state of the table.</p> <p>This parameter can have the following values:</p> <ul> <li> <p>Not enabled – Validation isn't enabled for the table in the migration task.</p> </li> <li> <p>Pending records – Some records in the table are waiting for validation.</p> </li> <li> <p>Mismatched records – Some records in the table don't match between the source and target.</p> </li> <li> <p>Suspended records – Some records in the table couldn't be validated.</p> </li> <li> <p>No primary key –The table couldn't be validated because it has no primary key.</p> </li> <li> <p>Table error – The table wasn't validated because it's in an error state and some data wasn't migrated.</p> </li> <li> <p>Validated – All rows in the table are validated. If the table is updated, the status can change from Validated.</p> </li> <li> <p>Error – The table couldn't be validated because of an unexpected error.</p> </li> <li> <p>Pending validation – The table is waiting validation.</p> </li> <li> <p>Preparing table – Preparing the table enabled in the migration task for validation.</p> </li> <li> <p>Pending revalidation – All rows in the table are pending validation after the table was updated.</p> </li> </ul>",
        }),
    ).exactOptional(),
    ValidationStateDetails: StringSchema.and(
      z.any().openapi({ description: 'Additional details about the state of validation.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides a collection of table statistics in response to a request by the <code>DescribeTableStatistics</code> operation.',
    required: [],
  })
  .openapi('TableStatistics')

const TableStatisticsListSchema = z.array(TableStatisticsSchema).openapi('TableStatisticsList')

const DescribeTableStatisticsResponseSchema = z
  .object({
    ReplicationTaskArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the replication task.' }),
    ).exactOptional(),
    TableStatistics: TableStatisticsListSchema.and(
      z.any().openapi({ description: 'The table statistics.' }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { Marker: '', ReplicationTaskArn: '', TableStatistics: [] },
    description: '<p/>',
    required: [],
  })
  .openapi('DescribeTableStatisticsResponse')

const DescribeTableStatisticsMessageSchema = z
  .object({
    ReplicationTaskArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the replication task.' }),
    ),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 500.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters applied to table statistics.</p> <p>Valid filter names: schema-name | table-name | table-state</p> <p>A combination of filters creates an AND condition where each record matches all specified filters.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ReplicationTaskArn'],
    title: 'DescribeTableStatisticsMessage',
    description: '<p/>',
  })
  .openapi('DescribeTableStatisticsMessage')

const ImportCertificateResponseSchema = z
  .object({
    Certificate: CertificateSchema.and(
      z.any().openapi({ description: 'The certificate to be uploaded.' }),
    ).exactOptional(),
  })
  .openapi({ example: { Certificate: {} }, required: [] })
  .openapi('ImportCertificateResponse')

const ImportCertificateMessageSchema = z
  .object({
    CertificateIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A customer-assigned name for the certificate. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens.",
        }),
    ),
    CertificatePem: SecretStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The contents of a <code>.pem</code> file, which contains an X.509 certificate.',
        }),
    ).exactOptional(),
    CertificateWallet: CertificateWalletSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The location of an imported Oracle Wallet certificate for use with SSL. Provide the name of a <code>.sso</code> file using the <code>fileb://</code> prefix. You can\'t provide the certificate inline.</p> <p>Example: <code>filebase64("${path.root}/rds-ca-2019-root.sso")</code> </p>',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags associated with the certificate.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['CertificateIdentifier'], title: 'ImportCertificateMessage' })
  .openapi('ImportCertificateMessage')

const InvalidCertificateFaultSchema = z.any().openapi('InvalidCertificateFault')

const ListTagsForResourceResponseSchema = z
  .object({
    TagList: TagListSchema.and(
      z.any().openapi({ description: 'A list of tags for the resource.' }),
    ).exactOptional(),
  })
  .openapi({ example: { TagList: [] }, description: '<p/>', required: [] })
  .openapi('ListTagsForResourceResponse')

const ArnListSchema = z.array(StringSchema).openapi('ArnList')

const ListTagsForResourceMessageSchema = z
  .object({
    ResourceArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) string that uniquely identifies the DMS resource to list tags for. This returns a list of keys (names of tags) created for the resource and their associated tag values.',
        }),
    ).exactOptional(),
    ResourceArnList: ArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            "List of ARNs that identify multiple DMS resources that you want to list tags for. This returns a list of keys (tag names) and their associated tag values. It also returns each tag's associated <code>ResourceArn</code> value, which is the ARN of the resource for which each listed tag is created. ",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListTagsForResourceMessage', description: '<p/>', required: [] })
  .openapi('ListTagsForResourceMessage')

const ModifyEndpointResponseSchema = z
  .object({
    Endpoint: EndpointSchema.and(
      z.any().openapi({ description: 'The modified endpoint.' }),
    ).exactOptional(),
  })
  .openapi({ example: { Endpoint: {} }, description: '<p/>', required: [] })
  .openapi('ModifyEndpointResponse')

const ModifyEndpointMessageSchema = z
  .object({
    EndpointArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.',
        }),
    ),
    EndpointIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The database endpoint identifier. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens.",
        }),
    ).exactOptional(),
    EndpointType: ReplicationEndpointTypeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of endpoint. Valid values are <code>source</code> and <code>target</code>.',
        }),
    ).exactOptional(),
    EngineName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The database engine name. Valid values, depending on the EndpointType, include <code>"mysql"</code>, <code>"oracle"</code>, <code>"postgres"</code>, <code>"mariadb"</code>, <code>"aurora"</code>, <code>"aurora-postgresql"</code>, <code>"redshift"</code>, <code>"s3"</code>, <code>"db2"</code>, <code>"db2-zos"</code>, <code>"azuredb"</code>, <code>"sybase"</code>, <code>"dynamodb"</code>, <code>"mongodb"</code>, <code>"kinesis"</code>, <code>"kafka"</code>, <code>"elasticsearch"</code>, <code>"documentdb"</code>, <code>"sqlserver"</code>, <code>"neptune"</code>, and <code>"babelfish"</code>.',
        }),
    ).exactOptional(),
    Username: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The user name to be used to login to the endpoint database.' }),
    ).exactOptional(),
    Password: SecretStringSchema.and(
      z
        .any()
        .openapi({ description: 'The password to be used to login to the endpoint database.' }),
    ).exactOptional(),
    ServerName: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the server where the endpoint database resides.' }),
    ).exactOptional(),
    Port: IntegerOptionalSchema.and(
      z.any().openapi({ description: 'The port used by the endpoint database.' }),
    ).exactOptional(),
    DatabaseName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the endpoint database. For a MySQL source or target endpoint, do not specify DatabaseName.',
        }),
    ).exactOptional(),
    ExtraConnectionAttributes: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional attributes associated with the connection. To reset this parameter, pass the empty string ("") as an argument.',
        }),
    ).exactOptional(),
    CertificateArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the certificate used for SSL connection.',
        }),
    ).exactOptional(),
    SslMode: DmsSslModeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The SSL mode used to connect to the endpoint. The default value is <code>none</code>.',
        }),
    ).exactOptional(),
    ServiceAccessRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) for the IAM role you want to use to modify the endpoint. The role must allow the <code>iam:PassRole</code> action.',
        }),
    ).exactOptional(),
    ExternalTableDefinition: StringSchema.and(
      z.any().openapi({ description: 'The external table definition.' }),
    ).exactOptional(),
    DynamoDbSettings: DynamoDbSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings in JSON format for the target Amazon DynamoDB endpoint. For information about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.DynamoDB.html#CHAP_Target.DynamoDB.ObjectMapping">Using Object Mapping to Migrate Data to DynamoDB</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    S3Settings: S3SettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings in JSON format for the target Amazon S3 endpoint. For more information about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring">Extra Connection Attributes When Using Amazon S3 as a Target for DMS</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    DmsTransferSettings: DmsTransferSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The settings in JSON format for the DMS transfer type of source endpoint. </p> <p>Attributes include the following:</p> <ul> <li> <p>serviceAccessRoleArn - The Amazon Resource Name (ARN) used by the service access IAM role. The role must allow the <code>iam:PassRole</code> action.</p> </li> <li> <p>BucketName - The name of the S3 bucket to use.</p> </li> </ul> <p>Shorthand syntax for these settings is as follows: <code>ServiceAccessRoleArn=string ,BucketName=string</code> </p> <p>JSON syntax for these settings is as follows: <code>{ "ServiceAccessRoleArn": "string", "BucketName": "string"} </code> </p>',
        }),
    ).exactOptional(),
    MongoDbSettings: MongoDbSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings in JSON format for the source MongoDB endpoint. For more information about the available settings, see the configuration properties section in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MongoDB.html#CHAP_Source.MongoDB.Configuration">Endpoint configuration settings when using MongoDB as a source for Database Migration Service</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    KinesisSettings: KinesisSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. For more information about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kinesis.html#CHAP_Target.Kinesis.ObjectMapping">Using object mapping to migrate data to a Kinesis data stream</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    KafkaSettings: KafkaSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings in JSON format for the target Apache Kafka endpoint. For more information about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kafka.html#CHAP_Target.Kafka.ObjectMapping">Using object mapping to migrate data to a Kafka topic</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    ElasticsearchSettings: ElasticsearchSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings in JSON format for the target OpenSearch endpoint. For more information about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Elasticsearch.html#CHAP_Target.Elasticsearch.Configuration">Extra Connection Attributes When Using OpenSearch as a Target for DMS</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    NeptuneSettings: NeptuneSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings in JSON format for the target Amazon Neptune endpoint. For more information about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Neptune.html#CHAP_Target.Neptune.EndpointSettings">Specifying graph-mapping rules using Gremlin and R2RML for Amazon Neptune as a target</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    RedshiftSettings: RedshiftSettingsSchema.exactOptional(),
    PostgreSQLSettings: PostgreSQLSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings in JSON format for the source and target PostgreSQL endpoint. For information about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.PostgreSQL.html#CHAP_Source.PostgreSQL.ConnectionAttrib">Extra connection attributes when using PostgreSQL as a source for DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.PostgreSQL.html#CHAP_Target.PostgreSQL.ConnectionAttrib"> Extra connection attributes when using PostgreSQL as a target for DMS</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    MySQLSettings: MySQLSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings in JSON format for the source and target MySQL endpoint. For information about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MySQL.html#CHAP_Source.MySQL.ConnectionAttrib">Extra connection attributes when using MySQL as a source for DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.MySQL.html#CHAP_Target.MySQL.ConnectionAttrib">Extra connection attributes when using a MySQL-compatible database as a target for DMS</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    OracleSettings: OracleSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings in JSON format for the source and target Oracle endpoint. For information about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.ConnectionAttrib">Extra connection attributes when using Oracle as a source for DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Oracle.html#CHAP_Target.Oracle.ConnectionAttrib"> Extra connection attributes when using Oracle as a target for DMS</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    SybaseSettings: SybaseSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings in JSON format for the source and target SAP ASE endpoint. For information about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SAP.html#CHAP_Source.SAP.ConnectionAttrib">Extra connection attributes when using SAP ASE as a source for DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.SAP.html#CHAP_Target.SAP.ConnectionAttrib">Extra connection attributes when using SAP ASE as a target for DMS</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    MicrosoftSQLServerSettings: MicrosoftSQLServerSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings in JSON format for the source and target Microsoft SQL Server endpoint. For information about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SQLServer.html#CHAP_Source.SQLServer.ConnectionAttrib">Extra connection attributes when using SQL Server as a source for DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.SQLServer.html#CHAP_Target.SQLServer.ConnectionAttrib"> Extra connection attributes when using SQL Server as a target for DMS</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    IBMDb2Settings: IBMDb2SettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings in JSON format for the source IBM Db2 LUW endpoint. For information about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.DB2.html#CHAP_Source.DB2.ConnectionAttrib">Extra connection attributes when using Db2 LUW as a source for DMS</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    DocDbSettings: DocDbSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings in JSON format for the source DocumentDB endpoint. For more information about the available settings, see the configuration properties section in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.DocumentDB.html"> Using DocumentDB as a Target for Database Migration Service </a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
    RedisSettings: RedisSettingsSchema.and(
      z.any().openapi({ description: 'Settings in JSON format for the Redis target endpoint.' }),
    ).exactOptional(),
    ExactSettings: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If this attribute is Y, the current call to <code>ModifyEndpoint</code> replaces all existing endpoint settings with the exact settings that you specify in this call. If this attribute is N, the current call to <code>ModifyEndpoint</code> does two things: </p> <ul> <li> <p>It replaces any endpoint settings that already exist with new values, for settings with the same names.</p> </li> <li> <p>It creates new endpoint settings that you specify in the call, for settings with different names. </p> </li> </ul> <p>For example, if you call <code>create-endpoint ... --endpoint-settings \'{"a":1}\' ...</code>, the endpoint has the following endpoint settings: <code>\'{"a":1}\'</code>. If you then call <code>modify-endpoint ... --endpoint-settings \'{"b":2}\' ...</code> for the same endpoint, the endpoint has the following settings: <code>\'{"a":1,"b":2}\'</code>. </p> <p>However, suppose that you follow this with a call to <code>modify-endpoint ... --endpoint-settings \'{"b":2}\' --exact-settings ...</code> for that same endpoint again. Then the endpoint has the following settings: <code>\'{"b":2}\'</code>. All existing settings are replaced with the exact settings that you specify. </p>',
        }),
    ).exactOptional(),
    GcpMySQLSettings: GcpMySQLSettingsSchema.and(
      z
        .any()
        .openapi({ description: 'Settings in JSON format for the source GCP MySQL endpoint.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['EndpointArn'], title: 'ModifyEndpointMessage', description: '<p/>' })
  .openapi('ModifyEndpointMessage')

const ModifyEventSubscriptionResponseSchema = z
  .object({
    EventSubscription: EventSubscriptionSchema.and(
      z.any().openapi({ description: 'The modified event subscription.' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('ModifyEventSubscriptionResponse')

const ModifyEventSubscriptionMessageSchema = z
  .object({
    SubscriptionName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the DMS event notification subscription to be modified.',
        }),
    ),
    SnsTopicArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.',
        }),
    ).exactOptional(),
    SourceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The type of DMS resource that generates the events you want to subscribe to. </p> <p>Valid values: replication-instance | replication-task</p>',
        }),
    ).exactOptional(),
    EventCategories: EventCategoriesListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of event categories for a source type that you want to subscribe to. Use the <code>DescribeEventCategories</code> action to see a list of event categories. ',
        }),
    ).exactOptional(),
    Enabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description: ' A Boolean value; set to <b>true</b> to activate the subscription. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SubscriptionName'],
    title: 'ModifyEventSubscriptionMessage',
    description: '<p/>',
  })
  .openapi('ModifyEventSubscriptionMessage')

const ModifyReplicationInstanceResponseSchema = z
  .object({
    ReplicationInstance: ReplicationInstanceSchema.and(
      z.any().openapi({ description: 'The modified replication instance.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ReplicationInstance: {
        AllocatedStorage: 5,
        AutoMinorVersionUpgrade: true,
        EngineVersion: '1.5.0',
        KmsKeyId: 'arn:aws:kms:us-east-1:123456789012:key/4c1731d6-5435-ed4d-be13-d53411a7cfbd',
        PendingModifiedValues: {},
        PreferredMaintenanceWindow: 'sun:06:00-sun:14:00',
        PubliclyAccessible: true,
        ReplicationInstanceArn: 'arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ',
        ReplicationInstanceClass: 'dms.t2.micro',
        ReplicationInstanceIdentifier: 'test-rep-1',
        ReplicationInstanceStatus: 'available',
        ReplicationSubnetGroup: {
          ReplicationSubnetGroupDescription: 'default',
          ReplicationSubnetGroupIdentifier: 'default',
          SubnetGroupStatus: 'Complete',
          Subnets: [
            {
              SubnetAvailabilityZone: { Name: 'us-east-1d' },
              SubnetIdentifier: 'subnet-f6dd91af',
              SubnetStatus: 'Active',
            },
            {
              SubnetAvailabilityZone: { Name: 'us-east-1b' },
              SubnetIdentifier: 'subnet-3605751d',
              SubnetStatus: 'Active',
            },
            {
              SubnetAvailabilityZone: { Name: 'us-east-1c' },
              SubnetIdentifier: 'subnet-c2daefb5',
              SubnetStatus: 'Active',
            },
            {
              SubnetAvailabilityZone: { Name: 'us-east-1e' },
              SubnetIdentifier: 'subnet-85e90cb8',
              SubnetStatus: 'Active',
            },
          ],
          VpcId: 'vpc-6741a603',
        },
      },
    },
    description: '<p/>',
    required: [],
  })
  .openapi('ModifyReplicationInstanceResponse')

const ModifyReplicationInstanceMessageSchema = z
  .object({
    ReplicationInstanceArn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the replication instance.' }),
    ),
    AllocatedStorage: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of storage (in gigabytes) to be allocated for the replication instance.',
        }),
    ).exactOptional(),
    ApplyImmediately: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the changes should be applied immediately or during the next maintenance window.',
        }),
    ).exactOptional(),
    ReplicationInstanceClass: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The compute and memory capacity of the replication instance as defined for the specified replication instance class. For example to specify the instance class dms.c4.large, set this parameter to <code>"dms.c4.large"</code>.</p> <p>For more information on the settings and capacities for the available replication instance classes, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth"> Selecting the right DMS replication instance for your migration</a>. </p>',
        }),
    ).exactOptional(),
    VpcSecurityGroupIds: VpcSecurityGroupIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the VPC security group to be used with the replication instance. The VPC security group must work with the VPC containing the replication instance. ',
        }),
    ).exactOptional(),
    PreferredMaintenanceWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The weekly time range (in UTC) during which system maintenance can occur, which might result in an outage. Changing this parameter does not result in an outage, except in the following situation, and the change is asynchronously applied as soon as possible. If moving this window to the current time, there must be at least 30 minutes between the current time and end of the window to ensure pending changes are applied.</p> <p>Default: Uses existing setting</p> <p>Format: ddd:hh24:mi-ddd:hh24:mi</p> <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p> <p>Constraints: Must be at least 30 minutes</p>',
        }),
    ).exactOptional(),
    MultiAZ: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            " Specifies whether the replication instance is a Multi-AZ deployment. You can't set the <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to <code>true</code>. ",
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The engine version number of the replication instance.</p> <p>When modifying a major engine version of an instance, also set <code>AllowMajorVersionUpgrade</code> to <code>true</code>.</p>',
        }),
    ).exactOptional(),
    AllowMajorVersionUpgrade: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates that major version upgrades are allowed. Changing this parameter does not result in an outage, and the change is asynchronously applied as soon as possible.</p> <p>This parameter must be set to <code>true</code> when specifying a value for the <code>EngineVersion</code> parameter that is a different major version than the replication instance's current version.</p>",
        }),
    ).exactOptional(),
    AutoMinorVersionUpgrade: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A value that indicates that minor version upgrades are applied automatically to the replication instance during the maintenance window. Changing this parameter doesn't result in an outage, except in the case described following. The change is asynchronously applied as soon as possible. </p> <p>An outage does result if these factors apply: </p> <ul> <li> <p>This parameter is set to <code>true</code> during the maintenance window.</p> </li> <li> <p>A newer minor version is available. </p> </li> <li> <p>DMS has enabled automatic patching for the given engine version. </p> </li> </ul> <p>When <code>AutoMinorVersionUpgrade</code> is enabled, DMS uses the current default engine version when you modify a replication instance. For example, if you set <code>EngineVersion</code> to a lower version number than the current default version, DMS uses the default version.</p> <p>If <code>AutoMinorVersionUpgrade</code> <i>isn’t</i> enabled when you modify a replication instance, DMS uses the engine version specified by the <code>EngineVersion</code> parameter.</p>",
        }),
    ).exactOptional(),
    ReplicationInstanceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The replication instance identifier. This parameter is stored as a lowercase string.',
        }),
    ).exactOptional(),
    NetworkType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of IP address protocol used by a replication instance, such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing. IPv6 only is not yet supported.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ReplicationInstanceArn'],
    title: 'ModifyReplicationInstanceMessage',
    description: '<p/>',
  })
  .openapi('ModifyReplicationInstanceMessage')

const UpgradeDependencyFailureFaultSchema = z.any().openapi('UpgradeDependencyFailureFault')

const ModifyReplicationSubnetGroupResponseSchema = z
  .object({
    ReplicationSubnetGroup: ReplicationSubnetGroupSchema.and(
      z.any().openapi({ description: 'The modified replication subnet group.' }),
    ).exactOptional(),
  })
  .openapi({ example: { ReplicationSubnetGroup: {} }, description: '<p/>', required: [] })
  .openapi('ModifyReplicationSubnetGroupResponse')

const ModifyReplicationSubnetGroupMessageSchema = z
  .object({
    ReplicationSubnetGroupIdentifier: StringSchema.and(
      z.any().openapi({ description: 'The name of the replication instance subnet group.' }),
    ),
    ReplicationSubnetGroupDescription: StringSchema.and(
      z.any().openapi({ description: 'A description for the replication instance subnet group.' }),
    ).exactOptional(),
    SubnetIds: SubnetIdentifierListSchema.and(
      z.any().openapi({ description: 'A list of subnet IDs.' }),
    ),
  })
  .openapi({
    required: ['ReplicationSubnetGroupIdentifier', 'SubnetIds'],
    title: 'ModifyReplicationSubnetGroupMessage',
    description: '<p/>',
  })
  .openapi('ModifyReplicationSubnetGroupMessage')

const SubnetAlreadyInUseSchema = z.any().openapi('SubnetAlreadyInUse')

const ModifyReplicationTaskResponseSchema = z
  .object({
    ReplicationTask: ReplicationTaskSchema.and(
      z.any().openapi({ description: 'The replication task that was modified.' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('ModifyReplicationTaskResponse')

const ModifyReplicationTaskMessageSchema = z
  .object({
    ReplicationTaskArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the replication task.' }),
    ),
    ReplicationTaskIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The replication task identifier.</p> <p>Constraints:</p> <ul> <li> <p>Must contain 1-255 alphanumeric characters or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>',
        }),
    ).exactOptional(),
    MigrationType: MigrationTypeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The migration type. Valid values: <code>full-load</code> | <code>cdc</code> | <code>full-load-and-cdc</code> ',
        }),
    ).exactOptional(),
    TableMappings: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'When using the CLI or boto3, provide the path of the JSON file that contains the table mappings. Precede the path with <code>file://</code>. For example, <code>--table-mappings file://mappingfile.json</code>. When working with the DMS API, provide the JSON as the parameter value. ',
        }),
    ).exactOptional(),
    ReplicationTaskSettings: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'JSON file that contains settings for the task, such as task metadata settings.',
        }),
    ).exactOptional(),
    CdcStartTime: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates the start time for a change data capture (CDC) operation. Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error.</p> <p>Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”</p>',
        }),
    ).exactOptional(),
    CdcStartPosition: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error.</p> <p> The value can be in date, checkpoint, or LSN/SCN format.</p> <p>Date Example: --cdc-start-position “2018-03-08T12:12:12”</p> <p>Checkpoint Example: --cdc-start-position "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93"</p> <p>LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”</p> <note> <p>When you use this task setting with a source PostgreSQL database, a logical replication slot should already be created and associated with the source endpoint. You can verify this by setting the <code>slotName</code> extra connection attribute to the name of this logical replication slot. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.PostgreSQL.html#CHAP_Source.PostgreSQL.ConnectionAttrib">Extra Connection Attributes When Using PostgreSQL as a Source for DMS</a>.</p> </note>',
        }),
    ).exactOptional(),
    CdcStopPosition: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time.</p> <p>Server time example: --cdc-stop-position “server_time:2018-02-09T12:12:12”</p> <p>Commit time example: --cdc-stop-position “commit_time: 2018-02-09T12:12:12“</p>',
        }),
    ).exactOptional(),
    TaskData: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Supplemental information that the task requires to migrate the data for certain source and target endpoints. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.TaskData.html">Specifying Supplemental Data for Task Settings</a> in the <i>Database Migration Service User Guide.</i> ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ReplicationTaskArn'],
    title: 'ModifyReplicationTaskMessage',
    description: '<p/>',
  })
  .openapi('ModifyReplicationTaskMessage')

const MoveReplicationTaskResponseSchema = z
  .object({
    ReplicationTask: ReplicationTaskSchema.and(
      z.any().openapi({ description: 'The replication task that was moved.' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('MoveReplicationTaskResponse')

const MoveReplicationTaskMessageSchema = z
  .object({
    ReplicationTaskArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the task that you want to move.',
        }),
    ),
    TargetReplicationInstanceArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the replication instance where you want to move the task to.',
        }),
    ),
  })
  .openapi({
    required: ['ReplicationTaskArn', 'TargetReplicationInstanceArn'],
    title: 'MoveReplicationTaskMessage',
    description: '<p/>',
  })
  .openapi('MoveReplicationTaskMessage')

const RebootReplicationInstanceResponseSchema = z
  .object({
    ReplicationInstance: ReplicationInstanceSchema.and(
      z.any().openapi({ description: 'The replication instance that is being rebooted. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RebootReplicationInstanceResponse')

const RebootReplicationInstanceMessageSchema = z
  .object({
    ReplicationInstanceArn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the replication instance.' }),
    ),
    ForceFailover: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            "If this parameter is <code>true</code>, the reboot is conducted through a Multi-AZ failover. If the instance isn't configured for Multi-AZ, then you can't specify <code>true</code>. ( <code>--force-planned-failover</code> and <code>--force-failover</code> can't both be set to <code>true</code>.)",
        }),
    ).exactOptional(),
    ForcePlannedFailover: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            "If this parameter is <code>true</code>, the reboot is conducted through a planned Multi-AZ failover where resources are released and cleaned up prior to conducting the failover. If the instance isn''t configured for Multi-AZ, then you can't specify <code>true</code>. ( <code>--force-planned-failover</code> and <code>--force-failover</code> can't both be set to <code>true</code>.)",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ReplicationInstanceArn'], title: 'RebootReplicationInstanceMessage' })
  .openapi('RebootReplicationInstanceMessage')

const RefreshSchemasResponseSchema = z
  .object({
    RefreshSchemasStatus: RefreshSchemasStatusSchema.and(
      z.any().openapi({ description: 'The status of the refreshed schema.' }),
    ).exactOptional(),
  })
  .openapi({ example: { RefreshSchemasStatus: {} }, description: '<p/>', required: [] })
  .openapi('RefreshSchemasResponse')

const RefreshSchemasMessageSchema = z
  .object({
    EndpointArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.',
        }),
    ),
    ReplicationInstanceArn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the replication instance.' }),
    ),
  })
  .openapi({
    required: ['EndpointArn', 'ReplicationInstanceArn'],
    title: 'RefreshSchemasMessage',
    description: '<p/>',
  })
  .openapi('RefreshSchemasMessage')

const ReloadTablesResponseSchema = z
  .object({
    ReplicationTaskArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the replication task. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReloadTablesResponse')

const TableToReloadSchema = z
  .object({
    SchemaName: StringSchema.and(
      z.any().openapi({ description: 'The schema name of the table to be reloaded.' }),
    ),
    TableName: StringSchema.and(
      z.any().openapi({ description: 'The table name of the table to be reloaded.' }),
    ),
  })
  .openapi({
    required: ['SchemaName', 'TableName'],
    description: 'Provides the name of the schema and table to be reloaded.',
  })
  .openapi('TableToReload')

const TableListToReloadSchema = z.array(TableToReloadSchema).openapi('TableListToReload')

const ReloadOptionValueSchema = z
  .enum(['data-reload', 'validate-only'])
  .openapi('ReloadOptionValue')

const ReloadTablesMessageSchema = z
  .object({
    ReplicationTaskArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the replication task. ' }),
    ),
    TablesToReload: TableListToReloadSchema.and(
      z.any().openapi({ description: 'The name and schema of the table to be reloaded. ' }),
    ),
    ReloadOption: ReloadOptionValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Options for reload. Specify <code>data-reload</code> to reload the data and re-validate it if validation is enabled. Specify <code>validate-only</code> to re-validate the table. This option applies only when validation is enabled for the task. </p> <p>Valid values: data-reload, validate-only</p> <p>Default value is data-reload.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ReplicationTaskArn', 'TablesToReload'], title: 'ReloadTablesMessage' })
  .openapi('ReloadTablesMessage')

const RemoveTagsFromResourceResponseSchema = z
  .object({})
  .openapi({ example: {}, description: '<p/>' })
  .openapi('RemoveTagsFromResourceResponse')

const KeyListSchema = z.array(StringSchema).openapi('KeyList')

const RemoveTagsFromResourceMessageSchema = z
  .object({
    ResourceArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An DMS resource from which you want to remove tag(s). The value for this parameter is an Amazon Resource Name (ARN).',
        }),
    ),
    TagKeys: KeyListSchema.and(
      z.any().openapi({ description: 'The tag key (name) of the tag to be removed.' }),
    ),
  })
  .openapi({
    required: ['ResourceArn', 'TagKeys'],
    title: 'RemoveTagsFromResourceMessage',
    description: 'Removes one or more tags from an DMS resource.',
  })
  .openapi('RemoveTagsFromResourceMessage')

const RunFleetAdvisorLsaAnalysisResponseSchema = z
  .object({
    LsaAnalysisId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the LSA analysis run.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The status of the LSA analysis, for example <code>COMPLETED</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RunFleetAdvisorLsaAnalysisResponse')

const StartRecommendationsRequestSchema = z
  .object({
    DatabaseId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the source database to analyze and provide recommendations for.',
        }),
    ),
    Settings: RecommendationSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings in JSON format that Fleet Advisor uses to determine target engine recommendations. These parameters include target instance sizing and availability and durability settings. For target instance sizing, Fleet Advisor supports the following two options: total capacity and resource utilization. For availability and durability, Fleet Advisor supports the following two options: production (Multi-AZ deployments) and Dev/Test (Single-AZ deployments).',
        }),
    ),
  })
  .openapi({ required: ['DatabaseId', 'Settings'], title: 'StartRecommendationsRequest' })
  .openapi('StartRecommendationsRequest')

const StartReplicationTaskResponseSchema = z
  .object({
    ReplicationTask: ReplicationTaskSchema.and(
      z.any().openapi({ description: 'The replication task started.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ReplicationTask: {
        MigrationType: 'full-load',
        ReplicationInstanceArn: 'arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ',
        ReplicationTaskArn: 'arn:aws:dms:us-east-1:123456789012:task:OEAMB3NXSTZ6LFYZFEPPBBXPYM',
        ReplicationTaskCreationDate: '2016-12-14T18:25:43Z',
        ReplicationTaskIdentifier: 'task1',
        ReplicationTaskSettings:
          '{"TargetMetadata":{"TargetSchema":"","SupportLobs":true,"FullLobMode":true,"LobChunkSize":64,"LimitedSizeLobMode":false,"LobMaxSize":0},"FullLoadSettings":{"FullLoadEnabled":true,"ApplyChangesEnabled":false,"TargetTablePrepMode":"DROP_AND_CREATE","CreatePkAfterFullLoad":false,"StopTaskCachedChangesApplied":false,"StopTaskCachedChangesNotApplied":false,"ResumeEnabled":false,"ResumeMinTableSize":100000,"ResumeOnlyClusteredPKTables":true,"MaxFullLoadSubTasks":8,"TransactionConsistencyTimeout":600,"CommitRate":10000},"Logging":{"EnableLogging":false}}',
        SourceEndpointArn: 'arn:aws:dms:us-east-1:123456789012:endpoint:ZW5UAN6P4E77EC7YWHK4RZZ3BE',
        Status: 'creating',
        TableMappings: 'file://mappingfile.json',
        TargetEndpointArn: 'arn:aws:dms:us-east-1:123456789012:endpoint:ASXWXJZLNWNT5HTWCGV2BUJQ7E',
      },
    },
    description: '<p/>',
    required: [],
  })
  .openapi('StartReplicationTaskResponse')

const StartReplicationTaskTypeValueSchema = z
  .enum(['start-replication', 'resume-processing', 'reload-target'])
  .openapi('StartReplicationTaskTypeValue')

const StartReplicationTaskMessageSchema = z
  .object({
    ReplicationTaskArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the replication task to be started.',
        }),
    ),
    StartReplicationTaskType: StartReplicationTaskTypeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of replication task to start.</p> <p>When the migration type is <code>full-load</code> or <code>full-load-and-cdc</code>, the only valid value for the first run of the task is <code>start-replication</code>. This option will start the migration.</p> <p>You can also use <a>ReloadTables</a> to reload specific tables that failed during migration instead of restarting the task.</p> <p>The <code>resume-processing</code> option isn't applicable for a full-load task, because you can't resume partially loaded tables during the full load phase.</p> <p>For a <code>full-load-and-cdc</code> task, DMS migrates table data, and then applies data changes that occur on the source. To load all the tables again, and start capturing source changes, use <code>reload-target</code>. Otherwise use <code>resume-processing</code>, to replicate the changes from the last stop position.</p>",
        }),
    ),
    CdcStartTime: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates the start time for a change data capture (CDC) operation. Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error.</p> <p>Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”</p>',
        }),
    ).exactOptional(),
    CdcStartPosition: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error.</p> <p> The value can be in date, checkpoint, or LSN/SCN format.</p> <p>Date Example: --cdc-start-position “2018-03-08T12:12:12”</p> <p>Checkpoint Example: --cdc-start-position "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93"</p> <p>LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”</p> <note> <p>When you use this task setting with a source PostgreSQL database, a logical replication slot should already be created and associated with the source endpoint. You can verify this by setting the <code>slotName</code> extra connection attribute to the name of this logical replication slot. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.PostgreSQL.html#CHAP_Source.PostgreSQL.ConnectionAttrib">Extra Connection Attributes When Using PostgreSQL as a Source for DMS</a>.</p> </note>',
        }),
    ).exactOptional(),
    CdcStopPosition: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time.</p> <p>Server time example: --cdc-stop-position “server_time:2018-02-09T12:12:12”</p> <p>Commit time example: --cdc-stop-position “commit_time: 2018-02-09T12:12:12“</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ReplicationTaskArn', 'StartReplicationTaskType'],
    title: 'StartReplicationTaskMessage',
    description: '<p/>',
  })
  .openapi('StartReplicationTaskMessage')

const StartReplicationTaskAssessmentResponseSchema = z
  .object({
    ReplicationTask: ReplicationTaskSchema.and(
      z.any().openapi({ description: ' The assessed replication task. ' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('StartReplicationTaskAssessmentResponse')

const StartReplicationTaskAssessmentMessageSchema = z
  .object({
    ReplicationTaskArn: StringSchema.and(
      z.any().openapi({ description: ' The Amazon Resource Name (ARN) of the replication task. ' }),
    ),
  })
  .openapi({
    required: ['ReplicationTaskArn'],
    title: 'StartReplicationTaskAssessmentMessage',
    description: '<p/>',
  })
  .openapi('StartReplicationTaskAssessmentMessage')

const StartReplicationTaskAssessmentRunResponseSchema = z
  .object({
    ReplicationTaskAssessmentRun: ReplicationTaskAssessmentRunSchema.and(
      z.any().openapi({ description: 'The premigration assessment run that was started.' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('StartReplicationTaskAssessmentRunResponse')

const IncludeTestListSchema = z.array(StringSchema).openapi('IncludeTestList')

const ExcludeTestListSchema = z.array(StringSchema).openapi('ExcludeTestList')

const StartReplicationTaskAssessmentRunMessageSchema = z
  .object({
    ReplicationTaskArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Resource Name (ARN) of the migration task associated with the premigration assessment run that you want to start.',
        }),
    ),
    ServiceAccessRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of the service role needed to start the assessment run. The role must allow the <code>iam:PassRole</code> action.',
        }),
    ),
    ResultLocationBucket: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon S3 bucket where you want DMS to store the results of this assessment run.',
        }),
    ),
    ResultLocationFolder: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Folder within an Amazon S3 bucket where you want DMS to store the results of this assessment run.',
        }),
    ).exactOptional(),
    ResultEncryptionMode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Encryption mode that you can specify to encrypt the results of this assessment run. If you don\'t specify this request parameter, DMS stores the assessment run results without encryption. You can specify one of the options following:</p> <ul> <li> <p> <code>"SSE_S3"</code> – The server-side encryption provided as a default by Amazon S3.</p> </li> <li> <p> <code>"SSE_KMS"</code> – Key Management Service (KMS) encryption. This encryption can use either a custom KMS encryption key that you specify or the default KMS encryption key that DMS provides.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ResultKmsKeyArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of a custom KMS encryption key that you specify when you set <code>ResultEncryptionMode</code> to <code>"SSE_KMS</code>".',
        }),
    ).exactOptional(),
    AssessmentRunName: StringSchema.and(
      z.any().openapi({ description: 'Unique name to identify the assessment run.' }),
    ),
    IncludeOnly: IncludeTestListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Space-separated list of names for specific individual assessments that you want to include. These names come from the default list of individual assessments that DMS supports for the associated migration task. This task is specified by <code>ReplicationTaskArn</code>.</p> <note> <p>You can't set a value for <code>IncludeOnly</code> if you also set a value for <code>Exclude</code> in the API operation. </p> <p>To identify the names of the default individual assessments that DMS supports for the associated migration task, run the <code>DescribeApplicableIndividualAssessments</code> operation using its own <code>ReplicationTaskArn</code> request parameter.</p> </note>",
        }),
    ).exactOptional(),
    Exclude: ExcludeTestListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Space-separated list of names for specific individual assessments that you want to exclude. These names come from the default list of individual assessments that DMS supports for the associated migration task. This task is specified by <code>ReplicationTaskArn</code>.</p> <note> <p>You can't set a value for <code>Exclude</code> if you also set a value for <code>IncludeOnly</code> in the API operation.</p> <p>To identify the names of the default individual assessments that DMS supports for the associated migration task, run the <code>DescribeApplicableIndividualAssessments</code> operation using its own <code>ReplicationTaskArn</code> request parameter.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'ReplicationTaskArn',
      'ServiceAccessRoleArn',
      'ResultLocationBucket',
      'AssessmentRunName',
    ],
    title: 'StartReplicationTaskAssessmentRunMessage',
    description: '<p/>',
  })
  .openapi('StartReplicationTaskAssessmentRunMessage')

const KMSFaultSchema = z.any().openapi('KMSFault')

const StopReplicationTaskResponseSchema = z
  .object({
    ReplicationTask: ReplicationTaskSchema.and(
      z.any().openapi({ description: 'The replication task stopped.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ReplicationTask: {
        MigrationType: 'full-load',
        ReplicationInstanceArn: 'arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ',
        ReplicationTaskArn: 'arn:aws:dms:us-east-1:123456789012:task:OEAMB3NXSTZ6LFYZFEPPBBXPYM',
        ReplicationTaskCreationDate: '2016-12-14T18:25:43Z',
        ReplicationTaskIdentifier: 'task1',
        ReplicationTaskSettings:
          '{"TargetMetadata":{"TargetSchema":"","SupportLobs":true,"FullLobMode":true,"LobChunkSize":64,"LimitedSizeLobMode":false,"LobMaxSize":0},"FullLoadSettings":{"FullLoadEnabled":true,"ApplyChangesEnabled":false,"TargetTablePrepMode":"DROP_AND_CREATE","CreatePkAfterFullLoad":false,"StopTaskCachedChangesApplied":false,"StopTaskCachedChangesNotApplied":false,"ResumeEnabled":false,"ResumeMinTableSize":100000,"ResumeOnlyClusteredPKTables":true,"MaxFullLoadSubTasks":8,"TransactionConsistencyTimeout":600,"CommitRate":10000},"Logging":{"EnableLogging":false}}',
        SourceEndpointArn: 'arn:aws:dms:us-east-1:123456789012:endpoint:ZW5UAN6P4E77EC7YWHK4RZZ3BE',
        Status: 'creating',
        TableMappings: 'file://mappingfile.json',
        TargetEndpointArn: 'arn:aws:dms:us-east-1:123456789012:endpoint:ASXWXJZLNWNT5HTWCGV2BUJQ7E',
      },
    },
    description: '<p/>',
    required: [],
  })
  .openapi('StopReplicationTaskResponse')

const StopReplicationTaskMessageSchema = z
  .object({
    ReplicationTaskArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name(ARN) of the replication task to be stopped.',
        }),
    ),
  })
  .openapi({
    required: ['ReplicationTaskArn'],
    title: 'StopReplicationTaskMessage',
    description: '<p/>',
  })
  .openapi('StopReplicationTaskMessage')

const TestConnectionResponseSchema = z
  .object({
    Connection: ConnectionSchema.and(
      z.any().openapi({ description: 'The connection tested.' }),
    ).exactOptional(),
  })
  .openapi({ example: { Connection: {} }, description: '<p/>', required: [] })
  .openapi('TestConnectionResponse')

const TestConnectionMessageSchema = z
  .object({
    ReplicationInstanceArn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the replication instance.' }),
    ),
    EndpointArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.',
        }),
    ),
  })
  .openapi({
    required: ['ReplicationInstanceArn', 'EndpointArn'],
    title: 'TestConnectionMessage',
    description: '<p/>',
  })
  .openapi('TestConnectionMessage')

const UpdateSubscriptionsToEventBridgeResponseSchema = z
  .object({
    Result: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string that indicates how many event subscriptions were migrated and how many remain to be migrated.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('UpdateSubscriptionsToEventBridgeResponse')

const UpdateSubscriptionsToEventBridgeMessageSchema = z
  .object({
    ForceMove: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'When set to true, this operation migrates DMS subscriptions for Amazon SNS notifications no matter what your replication instance version is. If not set or set to false, this operation runs only when all your replication instances are from DMS version 3.4.6 or higher. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateSubscriptionsToEventBridgeMessage', description: '<p/>', required: [] })
  .openapi('UpdateSubscriptionsToEventBridgeMessage')

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

export const postXAmzTargetAmazonDMSv20160101AddTagsToResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.AddTagsToResource',
  description:
    'Adds metadata tags to an DMS resource, including replication instance, endpoint, subnet group, and migration task. These tags can also be used with cost allocation reporting to track cost associated with DMS resources, or used in a Condition statement in an IAM policy for DMS. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.',
  operationId: 'AddTagsToResource',
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
        .literal('AmazonDMSv20160101.AddTagsToResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.AddTagsToResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AddTagsToResourceMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddTagsToResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101ApplyPendingMaintenanceActionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.ApplyPendingMaintenanceAction',
  description:
    'Applies a pending maintenance action to a resource (for example, to a replication instance).',
  operationId: 'ApplyPendingMaintenanceAction',
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
        .literal('AmazonDMSv20160101.ApplyPendingMaintenanceAction')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.ApplyPendingMaintenanceAction'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ApplyPendingMaintenanceActionMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ApplyPendingMaintenanceActionResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101BatchStartRecommendationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.BatchStartRecommendations',
  description:
    '<p>Starts the analysis of up to 20 source databases to recommend target engines for each source database. This is a batch version of <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartRecommendations.html">StartRecommendations</a>.</p> <p>The result of analysis of each source database is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p>',
  operationId: 'BatchStartRecommendations',
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
        .literal('AmazonDMSv20160101.BatchStartRecommendations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.BatchStartRecommendations'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchStartRecommendationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchStartRecommendationsResponseSchema } },
    },
    480: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
    481: {
      description: 'AccessDeniedFault',
      content: { 'application/json': { schema: AccessDeniedFaultSchema } },
    },
    482: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101CancelReplicationTaskAssessmentRunRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.CancelReplicationTaskAssessmentRun',
  description:
    "<p>Cancels a single premigration assessment run.</p> <p>This operation prevents any individual assessments from running if they haven't started running. It also attempts to cancel any individual assessments that are currently running.</p>",
  operationId: 'CancelReplicationTaskAssessmentRun',
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
        .literal('AmazonDMSv20160101.CancelReplicationTaskAssessmentRun')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AmazonDMSv20160101.CancelReplicationTaskAssessmentRun'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CancelReplicationTaskAssessmentRunMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelReplicationTaskAssessmentRunResponseSchema } },
    },
    480: {
      description: 'AccessDeniedFault',
      content: { 'application/json': { schema: AccessDeniedFaultSchema } },
    },
    481: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101CreateEndpointRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.CreateEndpoint',
  description:
    "<p>Creates an endpoint using the provided settings.</p> <note> <p>For a MySQL source or target endpoint, don't explicitly specify the database using the <code>DatabaseName</code> request parameter on the <code>CreateEndpoint</code> API call. Specifying <code>DatabaseName</code> when you create a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.</p> </note>",
  operationId: 'CreateEndpoint',
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
        .literal('AmazonDMSv20160101.CreateEndpoint')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.CreateEndpoint'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateEndpointMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateEndpointResponseSchema } },
    },
    480: {
      description: 'KMSKeyNotAccessibleFault',
      content: { 'application/json': { schema: KMSKeyNotAccessibleFaultSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsFault',
      content: { 'application/json': { schema: ResourceAlreadyExistsFaultSchema } },
    },
    482: {
      description: 'ResourceQuotaExceededFault',
      content: { 'application/json': { schema: ResourceQuotaExceededFaultSchema } },
    },
    483: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
    484: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
    485: {
      description: 'AccessDeniedFault',
      content: { 'application/json': { schema: AccessDeniedFaultSchema } },
    },
    486: {
      description: 'S3AccessDeniedFault',
      content: { 'application/json': { schema: S3AccessDeniedFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101CreateEventSubscriptionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.CreateEventSubscription',
  description:
    '<p> Creates an DMS event notification subscription. </p> <p>You can specify the type of source (<code>SourceType</code>) you want to be notified of, provide a list of DMS source IDs (<code>SourceIds</code>) that triggers the events, and provide a list of event categories (<code>EventCategories</code>) for events you want to be notified of. If you specify both the <code>SourceType</code> and <code>SourceIds</code>, such as <code>SourceType = replication-instance</code> and <code>SourceIdentifier = my-replinstance</code>, you will be notified of all the replication instance events for the specified source. If you specify a <code>SourceType</code> but don\'t specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your DMS sources. If you don\'t specify either <code>SourceType</code> nor <code>SourceIdentifier</code>, you will be notified of events generated from all DMS sources belonging to your customer account.</p> <p>For more information about DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> </p>',
  operationId: 'CreateEventSubscription',
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
        .literal('AmazonDMSv20160101.CreateEventSubscription')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.CreateEventSubscription'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateEventSubscriptionMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateEventSubscriptionResponseSchema } },
    },
    480: {
      description: 'ResourceQuotaExceededFault',
      content: { 'application/json': { schema: ResourceQuotaExceededFaultSchema } },
    },
    481: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
    482: {
      description: 'ResourceAlreadyExistsFault',
      content: { 'application/json': { schema: ResourceAlreadyExistsFaultSchema } },
    },
    483: {
      description: 'SNSInvalidTopicFault',
      content: { 'application/json': { schema: SNSInvalidTopicFaultSchema } },
    },
    484: {
      description: 'SNSNoAuthorizationFault',
      content: { 'application/json': { schema: SNSNoAuthorizationFaultSchema } },
    },
    485: {
      description: 'KMSAccessDeniedFault',
      content: { 'application/json': { schema: KMSAccessDeniedFaultSchema } },
    },
    486: {
      description: 'KMSDisabledFault',
      content: { 'application/json': { schema: KMSDisabledFaultSchema } },
    },
    487: {
      description: 'KMSInvalidStateFault',
      content: { 'application/json': { schema: KMSInvalidStateFaultSchema } },
    },
    488: {
      description: 'KMSNotFoundFault',
      content: { 'application/json': { schema: KMSNotFoundFaultSchema } },
    },
    489: {
      description: 'KMSThrottlingFault',
      content: { 'application/json': { schema: KMSThrottlingFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101CreateFleetAdvisorCollectorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.CreateFleetAdvisorCollector',
  description: 'Creates a Fleet Advisor collector using the specified parameters.',
  operationId: 'CreateFleetAdvisorCollector',
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
        .literal('AmazonDMSv20160101.CreateFleetAdvisorCollector')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.CreateFleetAdvisorCollector'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateFleetAdvisorCollectorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFleetAdvisorCollectorResponseSchema } },
    },
    480: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
    481: {
      description: 'AccessDeniedFault',
      content: { 'application/json': { schema: AccessDeniedFaultSchema } },
    },
    482: {
      description: 'S3AccessDeniedFault',
      content: { 'application/json': { schema: S3AccessDeniedFaultSchema } },
    },
    483: {
      description: 'S3ResourceNotFoundFault',
      content: { 'application/json': { schema: S3ResourceNotFoundFaultSchema } },
    },
    484: {
      description: 'ResourceQuotaExceededFault',
      content: { 'application/json': { schema: ResourceQuotaExceededFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101CreateReplicationInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.CreateReplicationInstance',
  description:
    '<p>Creates the replication instance using the specified parameters.</p> <p>DMS requires that your account have certain roles with appropriate permissions before you can create a replication instance. For information on the required roles, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.APIRole">Creating the IAM Roles to Use With the CLI and DMS API</a>. For information on the required permissions, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.IAMPermissions">IAM Permissions Needed to Use DMS</a>.</p>',
  operationId: 'CreateReplicationInstance',
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
        .literal('AmazonDMSv20160101.CreateReplicationInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.CreateReplicationInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateReplicationInstanceMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateReplicationInstanceResponseSchema } },
    },
    480: {
      description: 'AccessDeniedFault',
      content: { 'application/json': { schema: AccessDeniedFaultSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsFault',
      content: { 'application/json': { schema: ResourceAlreadyExistsFaultSchema } },
    },
    482: {
      description: 'InsufficientResourceCapacityFault',
      content: { 'application/json': { schema: InsufficientResourceCapacityFaultSchema } },
    },
    483: {
      description: 'ResourceQuotaExceededFault',
      content: { 'application/json': { schema: ResourceQuotaExceededFaultSchema } },
    },
    484: {
      description: 'StorageQuotaExceededFault',
      content: { 'application/json': { schema: StorageQuotaExceededFaultSchema } },
    },
    485: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
    486: {
      description: 'ReplicationSubnetGroupDoesNotCoverEnoughAZs',
      content: {
        'application/json': { schema: ReplicationSubnetGroupDoesNotCoverEnoughAZsSchema },
      },
    },
    487: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
    488: {
      description: 'InvalidSubnet',
      content: { 'application/json': { schema: InvalidSubnetSchema } },
    },
    489: {
      description: 'KMSKeyNotAccessibleFault',
      content: { 'application/json': { schema: KMSKeyNotAccessibleFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101CreateReplicationSubnetGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.CreateReplicationSubnetGroup',
  description:
    '<p>Creates a replication subnet group given a list of the subnet IDs in a VPC.</p> <p>The VPC needs to have at least one subnet in at least two availability zones in the Amazon Web Services Region, otherwise the service will throw a <code>ReplicationSubnetGroupDoesNotCoverEnoughAZs</code> exception.</p>',
  operationId: 'CreateReplicationSubnetGroup',
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
        .literal('AmazonDMSv20160101.CreateReplicationSubnetGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.CreateReplicationSubnetGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateReplicationSubnetGroupMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateReplicationSubnetGroupResponseSchema } },
    },
    480: {
      description: 'AccessDeniedFault',
      content: { 'application/json': { schema: AccessDeniedFaultSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsFault',
      content: { 'application/json': { schema: ResourceAlreadyExistsFaultSchema } },
    },
    482: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
    483: {
      description: 'ResourceQuotaExceededFault',
      content: { 'application/json': { schema: ResourceQuotaExceededFaultSchema } },
    },
    484: {
      description: 'ReplicationSubnetGroupDoesNotCoverEnoughAZs',
      content: {
        'application/json': { schema: ReplicationSubnetGroupDoesNotCoverEnoughAZsSchema },
      },
    },
    485: {
      description: 'InvalidSubnet',
      content: { 'application/json': { schema: InvalidSubnetSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101CreateReplicationTaskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.CreateReplicationTask',
  description: 'Creates a replication task using the specified parameters.',
  operationId: 'CreateReplicationTask',
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
        .literal('AmazonDMSv20160101.CreateReplicationTask')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.CreateReplicationTask'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateReplicationTaskMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateReplicationTaskResponseSchema } },
    },
    480: {
      description: 'AccessDeniedFault',
      content: { 'application/json': { schema: AccessDeniedFaultSchema } },
    },
    481: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
    482: {
      description: 'ResourceAlreadyExistsFault',
      content: { 'application/json': { schema: ResourceAlreadyExistsFaultSchema } },
    },
    483: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
    484: {
      description: 'KMSKeyNotAccessibleFault',
      content: { 'application/json': { schema: KMSKeyNotAccessibleFaultSchema } },
    },
    485: {
      description: 'ResourceQuotaExceededFault',
      content: { 'application/json': { schema: ResourceQuotaExceededFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DeleteCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DeleteCertificate',
  description: 'Deletes the specified certificate. ',
  operationId: 'DeleteCertificate',
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
        .literal('AmazonDMSv20160101.DeleteCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.DeleteCertificate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteCertificateMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteCertificateResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DeleteConnectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DeleteConnection',
  description: 'Deletes the connection between a replication instance and an endpoint.',
  operationId: 'DeleteConnection',
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
        .literal('AmazonDMSv20160101.DeleteConnection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.DeleteConnection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteConnectionMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteConnectionResponseSchema } },
    },
    480: {
      description: 'AccessDeniedFault',
      content: { 'application/json': { schema: AccessDeniedFaultSchema } },
    },
    481: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DeleteEndpointRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DeleteEndpoint',
  description:
    '<p>Deletes the specified endpoint.</p> <note> <p>All tasks associated with the endpoint must be deleted before you can delete the endpoint.</p> </note> <p/>',
  operationId: 'DeleteEndpoint',
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
        .literal('AmazonDMSv20160101.DeleteEndpoint')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.DeleteEndpoint'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteEndpointMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteEndpointResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DeleteEventSubscriptionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DeleteEventSubscription',
  description: ' Deletes an DMS event subscription. ',
  operationId: 'DeleteEventSubscription',
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
        .literal('AmazonDMSv20160101.DeleteEventSubscription')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.DeleteEventSubscription'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteEventSubscriptionMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteEventSubscriptionResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DeleteFleetAdvisorCollectorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorCollector',
  description: 'Deletes the specified Fleet Advisor collector.',
  operationId: 'DeleteFleetAdvisorCollector',
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
        .literal('AmazonDMSv20160101.DeleteFleetAdvisorCollector')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.DeleteFleetAdvisorCollector'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteCollectorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
    481: {
      description: 'CollectorNotFoundFault',
      content: { 'application/json': { schema: CollectorNotFoundFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DeleteFleetAdvisorDatabasesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorDatabases',
  description: 'Deletes the specified Fleet Advisor collector databases.',
  operationId: 'DeleteFleetAdvisorDatabases',
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
        .literal('AmazonDMSv20160101.DeleteFleetAdvisorDatabases')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.DeleteFleetAdvisorDatabases'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteFleetAdvisorDatabasesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteFleetAdvisorDatabasesResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidOperationFault',
      content: { 'application/json': { schema: InvalidOperationFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DeleteReplicationInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationInstance',
  description:
    '<p>Deletes the specified replication instance.</p> <note> <p>You must delete any migration tasks that are associated with the replication instance before you can delete it.</p> </note> <p/>',
  operationId: 'DeleteReplicationInstance',
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
        .literal('AmazonDMSv20160101.DeleteReplicationInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.DeleteReplicationInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteReplicationInstanceMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteReplicationInstanceResponseSchema } },
    },
    480: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
    481: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DeleteReplicationSubnetGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationSubnetGroup',
  description: 'Deletes a subnet group.',
  operationId: 'DeleteReplicationSubnetGroup',
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
        .literal('AmazonDMSv20160101.DeleteReplicationSubnetGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.DeleteReplicationSubnetGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteReplicationSubnetGroupMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteReplicationSubnetGroupResponseSchema } },
    },
    480: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
    481: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DeleteReplicationTaskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTask',
  description: 'Deletes the specified replication task.',
  operationId: 'DeleteReplicationTask',
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
        .literal('AmazonDMSv20160101.DeleteReplicationTask')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.DeleteReplicationTask'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteReplicationTaskMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteReplicationTaskResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DeleteReplicationTaskAssessmentRunRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun',
  description:
    '<p>Deletes the record of a single premigration assessment run.</p> <p>This operation removes all metadata that DMS maintains about this assessment run. However, the operation leaves untouched all information about this assessment run that is stored in your Amazon S3 bucket.</p>',
  operationId: 'DeleteReplicationTaskAssessmentRun',
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
        .literal('AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteReplicationTaskAssessmentRunMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteReplicationTaskAssessmentRunResponseSchema } },
    },
    480: {
      description: 'AccessDeniedFault',
      content: { 'application/json': { schema: AccessDeniedFaultSchema } },
    },
    481: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DescribeAccountAttributesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DescribeAccountAttributes',
  description:
    "<p>Lists all of the DMS attributes for a customer account. These attributes include DMS quotas for the account and a unique account identifier in a particular DMS region. DMS quotas include a list of resource quotas supported by the account, such as the number of replication instances allowed. The description for each resource quota, includes the quota name, current usage toward that quota, and the quota's maximum value. DMS uses the unique account identifier to name each artifact used by DMS in the given region.</p> <p>This command does not take any parameters.</p>",
  operationId: 'DescribeAccountAttributes',
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
        .literal('AmazonDMSv20160101.DescribeAccountAttributes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.DescribeAccountAttributes'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeAccountAttributesMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAccountAttributesResponseSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DescribeApplicableIndividualAssessmentsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonDMSv20160101.DescribeApplicableIndividualAssessments',
    description:
      '<p>Provides a list of individual assessments that you can specify for a new premigration assessment run, given one or more parameters.</p> <p>If you specify an existing migration task, this operation provides the default individual assessments you can specify for that task. Otherwise, the specified parameters model elements of a possible migration task on which to base a premigration assessment run.</p> <p>To use these migration task modeling parameters, you must specify an existing replication instance, a source database engine, a target database engine, and a migration type. This combination of parameters potentially limits the default individual assessments available for an assessment run created for a corresponding migration task.</p> <p>If you specify no parameters, this operation provides a list of all possible individual assessments that you can specify for an assessment run. If you specify any one of the task modeling parameters, you must specify all of them or the operation cannot provide a list of individual assessments. The only parameter that you can specify alone is for an existing migration task. The specified task definition then determines the default list of individual assessments that you can specify in an assessment run for the task.</p>',
    operationId: 'DescribeApplicableIndividualAssessments',
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
          .literal('AmazonDMSv20160101.DescribeApplicableIndividualAssessments')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonDMSv20160101.DescribeApplicableIndividualAssessments'],
              },
            },
          }),
      }),
      query: z.object({
        MaxRecords: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'MaxRecords',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        Marker: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'Marker',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DescribeApplicableIndividualAssessmentsMessageSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeApplicableIndividualAssessmentsResponseSchema },
        },
      },
      480: {
        description: 'AccessDeniedFault',
        content: { 'application/json': { schema: AccessDeniedFaultSchema } },
      },
      481: {
        description: 'ResourceNotFoundFault',
        content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
      },
      482: {
        description: 'InvalidResourceStateFault',
        content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
      },
    },
  })

export const postXAmzTargetAmazonDMSv20160101DescribeCertificatesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DescribeCertificates',
  description: 'Provides a description of the certificate.',
  operationId: 'DescribeCertificates',
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
        .literal('AmazonDMSv20160101.DescribeCertificates')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.DescribeCertificates'] },
          },
        }),
    }),
    query: z.object({
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeCertificatesMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeCertificatesResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DescribeConnectionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DescribeConnections',
  description:
    'Describes the status of the connections that have been made between the replication instance and an endpoint. Connections are created when you test an endpoint.',
  operationId: 'DescribeConnections',
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
        .literal('AmazonDMSv20160101.DescribeConnections')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.DescribeConnections'] },
          },
        }),
    }),
    query: z.object({
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeConnectionsMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeConnectionsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DescribeEndpointSettingsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointSettings',
  description:
    'Returns information about the possible endpoint settings available when you create an endpoint for a specific database engine.',
  operationId: 'DescribeEndpointSettings',
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
        .literal('AmazonDMSv20160101.DescribeEndpointSettings')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.DescribeEndpointSettings'] },
          },
        }),
    }),
    query: z.object({
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEndpointSettingsMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEndpointSettingsResponseSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DescribeEndpointTypesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointTypes',
  description: 'Returns information about the type of endpoints available.',
  operationId: 'DescribeEndpointTypes',
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
        .literal('AmazonDMSv20160101.DescribeEndpointTypes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.DescribeEndpointTypes'] },
          },
        }),
    }),
    query: z.object({
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEndpointTypesMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEndpointTypesResponseSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DescribeEndpointsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DescribeEndpoints',
  description: 'Returns information about the endpoints for your account in the current region.',
  operationId: 'DescribeEndpoints',
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
        .literal('AmazonDMSv20160101.DescribeEndpoints')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.DescribeEndpoints'] },
          },
        }),
    }),
    query: z.object({
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEndpointsMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEndpointsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DescribeEventCategoriesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DescribeEventCategories',
  description:
    'Lists categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> ',
  operationId: 'DescribeEventCategories',
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
        .literal('AmazonDMSv20160101.DescribeEventCategories')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.DescribeEventCategories'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEventCategoriesMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEventCategoriesResponseSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DescribeEventSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DescribeEventSubscriptions',
  description:
    '<p>Lists all the event subscriptions for a customer account. The description of a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>. </p> <p>If you specify <code>SubscriptionName</code>, this action lists the description for that subscription.</p>',
  operationId: 'DescribeEventSubscriptions',
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
        .literal('AmazonDMSv20160101.DescribeEventSubscriptions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.DescribeEventSubscriptions'] },
          },
        }),
    }),
    query: z.object({
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEventSubscriptionsMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEventSubscriptionsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DescribeEventsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DescribeEvents',
  description:
    ' Lists events for a given source identifier and source type. You can also specify a start and end time. For more information on DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> ',
  operationId: 'DescribeEvents',
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
        .literal('AmazonDMSv20160101.DescribeEvents')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.DescribeEvents'] },
          },
        }),
    }),
    query: z.object({
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEventsMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEventsResponseSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorCollectorsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorCollectors',
  description: 'Returns a list of the Fleet Advisor collectors in your account.',
  operationId: 'DescribeFleetAdvisorCollectors',
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
        .literal('AmazonDMSv20160101.DescribeFleetAdvisorCollectors')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.DescribeFleetAdvisorCollectors'] },
          },
        }),
    }),
    query: z.object({
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
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
      content: { 'application/json': { schema: DescribeFleetAdvisorCollectorsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFleetAdvisorCollectorsResponseSchema } },
    },
    480: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorDatabasesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorDatabases',
  description: 'Returns a list of Fleet Advisor databases in your account.',
  operationId: 'DescribeFleetAdvisorDatabases',
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
        .literal('AmazonDMSv20160101.DescribeFleetAdvisorDatabases')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.DescribeFleetAdvisorDatabases'] },
          },
        }),
    }),
    query: z.object({
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
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
      content: { 'application/json': { schema: DescribeFleetAdvisorDatabasesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFleetAdvisorDatabasesResponseSchema } },
    },
    480: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorLsaAnalysisRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis',
  description:
    'Provides descriptions of large-scale assessment (LSA) analyses produced by your Fleet Advisor collectors. ',
  operationId: 'DescribeFleetAdvisorLsaAnalysis',
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
        .literal('AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis'],
            },
          },
        }),
    }),
    query: z.object({
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
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
      content: { 'application/json': { schema: DescribeFleetAdvisorLsaAnalysisRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFleetAdvisorLsaAnalysisResponseSchema } },
    },
    480: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemaObjectSummaryRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary',
    description:
      'Provides descriptions of the schemas discovered by your Fleet Advisor collectors.',
    operationId: 'DescribeFleetAdvisorSchemaObjectSummary',
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
          .literal('AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary'],
              },
            },
          }),
      }),
      query: z.object({
        MaxRecords: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'MaxRecords',
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
          'application/json': { schema: DescribeFleetAdvisorSchemaObjectSummaryRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeFleetAdvisorSchemaObjectSummaryResponseSchema },
        },
      },
      480: {
        description: 'InvalidResourceStateFault',
        content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
      },
    },
  })

export const postXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemasRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemas',
  description: 'Returns a list of schemas detected by Fleet Advisor Collectors in your account.',
  operationId: 'DescribeFleetAdvisorSchemas',
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
        .literal('AmazonDMSv20160101.DescribeFleetAdvisorSchemas')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.DescribeFleetAdvisorSchemas'] },
          },
        }),
    }),
    query: z.object({
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
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
      content: { 'application/json': { schema: DescribeFleetAdvisorSchemasRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFleetAdvisorSchemasResponseSchema } },
    },
    480: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DescribeOrderableReplicationInstancesRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonDMSv20160101.DescribeOrderableReplicationInstances',
    description:
      'Returns information about the replication instance types that can be created in the specified region.',
    operationId: 'DescribeOrderableReplicationInstances',
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
          .literal('AmazonDMSv20160101.DescribeOrderableReplicationInstances')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonDMSv20160101.DescribeOrderableReplicationInstances'],
              },
            },
          }),
      }),
      query: z.object({
        MaxRecords: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'MaxRecords',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        Marker: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'Marker',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DescribeOrderableReplicationInstancesMessageSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeOrderableReplicationInstancesResponseSchema },
        },
      },
    },
  })

export const postXAmzTargetAmazonDMSv20160101DescribePendingMaintenanceActionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DescribePendingMaintenanceActions',
  description: 'For internal use only',
  operationId: 'DescribePendingMaintenanceActions',
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
        .literal('AmazonDMSv20160101.DescribePendingMaintenanceActions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AmazonDMSv20160101.DescribePendingMaintenanceActions'],
            },
          },
        }),
    }),
    query: z.object({
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribePendingMaintenanceActionsMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribePendingMaintenanceActionsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DescribeRecommendationLimitationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendationLimitations',
  description:
    'Returns a paginated list of limitations for recommendations of target Amazon Web Services engines.',
  operationId: 'DescribeRecommendationLimitations',
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
        .literal('AmazonDMSv20160101.DescribeRecommendationLimitations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AmazonDMSv20160101.DescribeRecommendationLimitations'],
            },
          },
        }),
    }),
    query: z.object({
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
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
      content: { 'application/json': { schema: DescribeRecommendationLimitationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRecommendationLimitationsResponseSchema } },
    },
    480: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
    481: {
      description: 'AccessDeniedFault',
      content: { 'application/json': { schema: AccessDeniedFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DescribeRecommendationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendations',
  description:
    'Returns a paginated list of target engine recommendations for your source databases.',
  operationId: 'DescribeRecommendations',
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
        .literal('AmazonDMSv20160101.DescribeRecommendations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.DescribeRecommendations'] },
          },
        }),
    }),
    query: z.object({
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
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
      content: { 'application/json': { schema: DescribeRecommendationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRecommendationsResponseSchema } },
    },
    480: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
    481: {
      description: 'AccessDeniedFault',
      content: { 'application/json': { schema: AccessDeniedFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DescribeRefreshSchemasStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DescribeRefreshSchemasStatus',
  description: 'Returns the status of the RefreshSchemas operation.',
  operationId: 'DescribeRefreshSchemasStatus',
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
        .literal('AmazonDMSv20160101.DescribeRefreshSchemasStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.DescribeRefreshSchemasStatus'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeRefreshSchemasStatusMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRefreshSchemasStatusResponseSchema } },
    },
    480: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
    481: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DescribeReplicationInstanceTaskLogsRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs',
    description: 'Returns information about the task logs for the specified task.',
    operationId: 'DescribeReplicationInstanceTaskLogs',
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
          .literal('AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs'],
              },
            },
          }),
      }),
      query: z.object({
        MaxRecords: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'MaxRecords',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        Marker: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'Marker',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DescribeReplicationInstanceTaskLogsMessageSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeReplicationInstanceTaskLogsResponseSchema },
        },
      },
      480: {
        description: 'ResourceNotFoundFault',
        content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
      },
      481: {
        description: 'InvalidResourceStateFault',
        content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
      },
    },
  },
)

export const postXAmzTargetAmazonDMSv20160101DescribeReplicationInstancesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstances',
  description:
    'Returns information about replication instances for your account in the current region.',
  operationId: 'DescribeReplicationInstances',
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
        .literal('AmazonDMSv20160101.DescribeReplicationInstances')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.DescribeReplicationInstances'] },
          },
        }),
    }),
    query: z.object({
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeReplicationInstancesMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeReplicationInstancesResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DescribeReplicationSubnetGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationSubnetGroups',
  description: 'Returns information about the replication subnet groups.',
  operationId: 'DescribeReplicationSubnetGroups',
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
        .literal('AmazonDMSv20160101.DescribeReplicationSubnetGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AmazonDMSv20160101.DescribeReplicationSubnetGroups'],
            },
          },
        }),
    }),
    query: z.object({
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeReplicationSubnetGroupsMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeReplicationSubnetGroupsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentResultsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults',
    description:
      '<p>Returns the task assessment results from the Amazon S3 bucket that DMS creates in your Amazon Web Services account. This action always returns the latest results.</p> <p>For more information about DMS task assessments, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Creating a task assessment report</a> in the <i>Database Migration Service User Guide</i>.</p>',
    operationId: 'DescribeReplicationTaskAssessmentResults',
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
          .literal('AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults'],
              },
            },
          }),
      }),
      query: z.object({
        MaxRecords: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'MaxRecords',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        Marker: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'Marker',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DescribeReplicationTaskAssessmentResultsMessageSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeReplicationTaskAssessmentResultsResponseSchema },
        },
      },
      480: {
        description: 'ResourceNotFoundFault',
        content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
      },
    },
  })

export const postXAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentRunsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns',
    description:
      "<p>Returns a paginated list of premigration assessment runs based on filter settings.</p> <p>These filter settings can specify a combination of premigration assessment runs, migration tasks, replication instances, and assessment run status values.</p> <note> <p>This operation doesn't return information about individual assessments. For this information, see the <code>DescribeReplicationTaskIndividualAssessments</code> operation. </p> </note>",
    operationId: 'DescribeReplicationTaskAssessmentRuns',
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
          .literal('AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns'],
              },
            },
          }),
      }),
      query: z.object({
        MaxRecords: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'MaxRecords',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        Marker: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'Marker',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DescribeReplicationTaskAssessmentRunsMessageSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeReplicationTaskAssessmentRunsResponseSchema },
        },
      },
      480: {
        description: 'ResourceNotFoundFault',
        content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
      },
    },
  })

export const postXAmzTargetAmazonDMSv20160101DescribeReplicationTaskIndividualAssessmentsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments',
    description:
      '<p>Returns a paginated list of individual assessments based on filter settings.</p> <p>These filter settings can specify a combination of premigration assessment runs, migration tasks, and assessment status values.</p>',
    operationId: 'DescribeReplicationTaskIndividualAssessments',
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
          .literal('AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments'],
              },
            },
          }),
      }),
      query: z.object({
        MaxRecords: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'MaxRecords',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        Marker: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'Marker',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DescribeReplicationTaskIndividualAssessmentsMessageSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: DescribeReplicationTaskIndividualAssessmentsResponseSchema,
          },
        },
      },
      480: {
        description: 'ResourceNotFoundFault',
        content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
      },
    },
  })

export const postXAmzTargetAmazonDMSv20160101DescribeReplicationTasksRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTasks',
  description:
    'Returns information about replication tasks for your account in the current region.',
  operationId: 'DescribeReplicationTasks',
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
        .literal('AmazonDMSv20160101.DescribeReplicationTasks')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.DescribeReplicationTasks'] },
          },
        }),
    }),
    query: z.object({
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeReplicationTasksMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeReplicationTasksResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DescribeSchemasRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DescribeSchemas',
  description: '<p>Returns information about the schema for the specified endpoint.</p> <p/>',
  operationId: 'DescribeSchemas',
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
        .literal('AmazonDMSv20160101.DescribeSchemas')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.DescribeSchemas'] },
          },
        }),
    }),
    query: z.object({
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeSchemasMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeSchemasResponseSchema } },
    },
    480: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
    481: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101DescribeTableStatisticsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.DescribeTableStatistics',
  description:
    '<p>Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted.</p> <p>Note that the "last updated" column the DMS console only indicates the time that DMS last updated the table statistics record for a table. It does not indicate the time of the last update to the table.</p>',
  operationId: 'DescribeTableStatistics',
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
        .literal('AmazonDMSv20160101.DescribeTableStatistics')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.DescribeTableStatistics'] },
          },
        }),
    }),
    query: z.object({
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeTableStatisticsMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeTableStatisticsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101ImportCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.ImportCertificate',
  description: 'Uploads the specified certificate.',
  operationId: 'ImportCertificate',
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
        .literal('AmazonDMSv20160101.ImportCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.ImportCertificate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ImportCertificateMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ImportCertificateResponseSchema } },
    },
    480: {
      description: 'ResourceAlreadyExistsFault',
      content: { 'application/json': { schema: ResourceAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'InvalidCertificateFault',
      content: { 'application/json': { schema: InvalidCertificateFaultSchema } },
    },
    482: {
      description: 'ResourceQuotaExceededFault',
      content: { 'application/json': { schema: ResourceQuotaExceededFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101ListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.ListTagsForResource',
  description:
    'Lists all metadata tags attached to an DMS resource, including replication instance, endpoint, subnet group, and migration task. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.',
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
        .literal('AmazonDMSv20160101.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.ListTagsForResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsForResourceMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101ModifyEndpointRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.ModifyEndpoint',
  description:
    "<p>Modifies the specified endpoint.</p> <note> <p>For a MySQL source or target endpoint, don't explicitly specify the database using the <code>DatabaseName</code> request parameter on the <code>ModifyEndpoint</code> API call. Specifying <code>DatabaseName</code> when you modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.</p> </note>",
  operationId: 'ModifyEndpoint',
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
        .literal('AmazonDMSv20160101.ModifyEndpoint')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.ModifyEndpoint'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ModifyEndpointMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ModifyEndpointResponseSchema } },
    },
    480: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
    481: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
    482: {
      description: 'ResourceAlreadyExistsFault',
      content: { 'application/json': { schema: ResourceAlreadyExistsFaultSchema } },
    },
    483: {
      description: 'KMSKeyNotAccessibleFault',
      content: { 'application/json': { schema: KMSKeyNotAccessibleFaultSchema } },
    },
    484: {
      description: 'AccessDeniedFault',
      content: { 'application/json': { schema: AccessDeniedFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101ModifyEventSubscriptionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.ModifyEventSubscription',
  description: 'Modifies an existing DMS event notification subscription. ',
  operationId: 'ModifyEventSubscription',
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
        .literal('AmazonDMSv20160101.ModifyEventSubscription')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.ModifyEventSubscription'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ModifyEventSubscriptionMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ModifyEventSubscriptionResponseSchema } },
    },
    480: {
      description: 'ResourceQuotaExceededFault',
      content: { 'application/json': { schema: ResourceQuotaExceededFaultSchema } },
    },
    481: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
    482: {
      description: 'SNSInvalidTopicFault',
      content: { 'application/json': { schema: SNSInvalidTopicFaultSchema } },
    },
    483: {
      description: 'SNSNoAuthorizationFault',
      content: { 'application/json': { schema: SNSNoAuthorizationFaultSchema } },
    },
    484: {
      description: 'KMSAccessDeniedFault',
      content: { 'application/json': { schema: KMSAccessDeniedFaultSchema } },
    },
    485: {
      description: 'KMSDisabledFault',
      content: { 'application/json': { schema: KMSDisabledFaultSchema } },
    },
    486: {
      description: 'KMSInvalidStateFault',
      content: { 'application/json': { schema: KMSInvalidStateFaultSchema } },
    },
    487: {
      description: 'KMSNotFoundFault',
      content: { 'application/json': { schema: KMSNotFoundFaultSchema } },
    },
    488: {
      description: 'KMSThrottlingFault',
      content: { 'application/json': { schema: KMSThrottlingFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101ModifyReplicationInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationInstance',
  description:
    '<p>Modifies the replication instance to apply new settings. You can change one or more parameters by specifying these parameters and the new values in the request.</p> <p>Some settings are applied during the maintenance window.</p> <p/>',
  operationId: 'ModifyReplicationInstance',
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
        .literal('AmazonDMSv20160101.ModifyReplicationInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.ModifyReplicationInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ModifyReplicationInstanceMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ModifyReplicationInstanceResponseSchema } },
    },
    480: {
      description: 'AccessDeniedFault',
      content: { 'application/json': { schema: AccessDeniedFaultSchema } },
    },
    481: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
    482: {
      description: 'ResourceAlreadyExistsFault',
      content: { 'application/json': { schema: ResourceAlreadyExistsFaultSchema } },
    },
    483: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
    484: {
      description: 'InsufficientResourceCapacityFault',
      content: { 'application/json': { schema: InsufficientResourceCapacityFaultSchema } },
    },
    485: {
      description: 'StorageQuotaExceededFault',
      content: { 'application/json': { schema: StorageQuotaExceededFaultSchema } },
    },
    486: {
      description: 'UpgradeDependencyFailureFault',
      content: { 'application/json': { schema: UpgradeDependencyFailureFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101ModifyReplicationSubnetGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationSubnetGroup',
  description: 'Modifies the settings for the specified replication subnet group.',
  operationId: 'ModifyReplicationSubnetGroup',
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
        .literal('AmazonDMSv20160101.ModifyReplicationSubnetGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.ModifyReplicationSubnetGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ModifyReplicationSubnetGroupMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ModifyReplicationSubnetGroupResponseSchema } },
    },
    480: {
      description: 'AccessDeniedFault',
      content: { 'application/json': { schema: AccessDeniedFaultSchema } },
    },
    481: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
    482: {
      description: 'ResourceQuotaExceededFault',
      content: { 'application/json': { schema: ResourceQuotaExceededFaultSchema } },
    },
    483: {
      description: 'SubnetAlreadyInUse',
      content: { 'application/json': { schema: SubnetAlreadyInUseSchema } },
    },
    484: {
      description: 'ReplicationSubnetGroupDoesNotCoverEnoughAZs',
      content: {
        'application/json': { schema: ReplicationSubnetGroupDoesNotCoverEnoughAZsSchema },
      },
    },
    485: {
      description: 'InvalidSubnet',
      content: { 'application/json': { schema: InvalidSubnetSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101ModifyReplicationTaskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationTask',
  description:
    '<p>Modifies the specified replication task.</p> <p>You can\'t modify the task endpoints. The task must be stopped before you can modify it. </p> <p>For more information about DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks</a> in the <i>Database Migration Service User Guide</i>.</p>',
  operationId: 'ModifyReplicationTask',
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
        .literal('AmazonDMSv20160101.ModifyReplicationTask')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.ModifyReplicationTask'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ModifyReplicationTaskMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ModifyReplicationTaskResponseSchema } },
    },
    480: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
    481: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
    482: {
      description: 'ResourceAlreadyExistsFault',
      content: { 'application/json': { schema: ResourceAlreadyExistsFaultSchema } },
    },
    483: {
      description: 'KMSKeyNotAccessibleFault',
      content: { 'application/json': { schema: KMSKeyNotAccessibleFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101MoveReplicationTaskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.MoveReplicationTask',
  description:
    'Moves a replication task from its current replication instance to a different target replication instance using the specified parameters. The target replication instance must be created with the same or later DMS version as the current replication instance.',
  operationId: 'MoveReplicationTask',
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
        .literal('AmazonDMSv20160101.MoveReplicationTask')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.MoveReplicationTask'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: MoveReplicationTaskMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MoveReplicationTaskResponseSchema } },
    },
    480: {
      description: 'AccessDeniedFault',
      content: { 'application/json': { schema: AccessDeniedFaultSchema } },
    },
    481: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
    482: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
    483: {
      description: 'KMSKeyNotAccessibleFault',
      content: { 'application/json': { schema: KMSKeyNotAccessibleFaultSchema } },
    },
    484: {
      description: 'ResourceQuotaExceededFault',
      content: { 'application/json': { schema: ResourceQuotaExceededFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101RebootReplicationInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.RebootReplicationInstance',
  description:
    'Reboots a replication instance. Rebooting results in a momentary outage, until the replication instance becomes available again.',
  operationId: 'RebootReplicationInstance',
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
        .literal('AmazonDMSv20160101.RebootReplicationInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.RebootReplicationInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RebootReplicationInstanceMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RebootReplicationInstanceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101RefreshSchemasRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.RefreshSchemas',
  description:
    'Populates the schema for the specified endpoint. This is an asynchronous operation and can take several minutes. You can check the status of this operation by calling the DescribeRefreshSchemasStatus operation.',
  operationId: 'RefreshSchemas',
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
        .literal('AmazonDMSv20160101.RefreshSchemas')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.RefreshSchemas'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RefreshSchemasMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RefreshSchemasResponseSchema } },
    },
    480: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
    481: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
    482: {
      description: 'KMSKeyNotAccessibleFault',
      content: { 'application/json': { schema: KMSKeyNotAccessibleFaultSchema } },
    },
    483: {
      description: 'ResourceQuotaExceededFault',
      content: { 'application/json': { schema: ResourceQuotaExceededFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101ReloadTablesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.ReloadTables',
  description:
    '<p>Reloads the target database table with the source data. </p> <p>You can only use this operation with a task in the <code>RUNNING</code> state, otherwise the service will throw an <code>InvalidResourceStateFault</code> exception.</p>',
  operationId: 'ReloadTables',
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
        .literal('AmazonDMSv20160101.ReloadTables')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.ReloadTables'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ReloadTablesMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ReloadTablesResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101RemoveTagsFromResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.RemoveTagsFromResource',
  description:
    'Removes metadata tags from an DMS resource, including replication instance, endpoint, subnet group, and migration task. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.',
  operationId: 'RemoveTagsFromResource',
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
        .literal('AmazonDMSv20160101.RemoveTagsFromResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.RemoveTagsFromResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RemoveTagsFromResourceMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RemoveTagsFromResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101RunFleetAdvisorLsaAnalysisRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis',
  description:
    'Runs large-scale assessment (LSA) analysis on every Fleet Advisor collector in your account.',
  operationId: 'RunFleetAdvisorLsaAnalysis',
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
        .literal('AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RunFleetAdvisorLsaAnalysisResponseSchema } },
    },
    480: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
    481: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101StartRecommendationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.StartRecommendations',
  description:
    '<p>Starts the analysis of your source database to provide recommendations of target engines.</p> <p>You can create recommendations for multiple source databases using <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_BatchStartRecommendations.html">BatchStartRecommendations</a>.</p>',
  operationId: 'StartRecommendations',
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
        .literal('AmazonDMSv20160101.StartRecommendations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.StartRecommendations'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartRecommendationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
    481: {
      description: 'AccessDeniedFault',
      content: { 'application/json': { schema: AccessDeniedFaultSchema } },
    },
    482: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101StartReplicationTaskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.StartReplicationTask',
  description:
    '<p>Starts the replication task.</p> <p>For more information about DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks </a> in the <i>Database Migration Service User Guide.</i> </p>',
  operationId: 'StartReplicationTask',
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
        .literal('AmazonDMSv20160101.StartReplicationTask')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.StartReplicationTask'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartReplicationTaskMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartReplicationTaskResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
    482: {
      description: 'AccessDeniedFault',
      content: { 'application/json': { schema: AccessDeniedFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessment',
  description:
    '<p> Starts the replication task assessment for unsupported data types in the source database. </p> <p>You can only use this operation for a task if the following conditions are true:</p> <ul> <li> <p>The task must be in the <code>stopped</code> state.</p> </li> <li> <p>The task must have successful connections to the source and target.</p> </li> </ul> <p>If either of these conditions are not met, an <code>InvalidResourceStateFault</code> error will result. </p> <p>For information about DMS task assessments, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Creating a task assessment report</a> in the <i>Database Migration Service User Guide</i>.</p>',
  operationId: 'StartReplicationTaskAssessment',
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
        .literal('AmazonDMSv20160101.StartReplicationTaskAssessment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.StartReplicationTaskAssessment'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartReplicationTaskAssessmentMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartReplicationTaskAssessmentResponseSchema } },
    },
    480: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
    481: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentRunRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessmentRun',
  description:
    '<p>Starts a new premigration assessment run for one or more individual assessments of a migration task.</p> <p>The assessments that you can specify depend on the source and target database engine and the migration type defined for the given task. To run this operation, your migration task must already be created. After you run this operation, you can review the status of each individual assessment. You can also run the migration task manually after the assessment run and its individual assessments complete.</p>',
  operationId: 'StartReplicationTaskAssessmentRun',
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
        .literal('AmazonDMSv20160101.StartReplicationTaskAssessmentRun')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AmazonDMSv20160101.StartReplicationTaskAssessmentRun'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartReplicationTaskAssessmentRunMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartReplicationTaskAssessmentRunResponseSchema } },
    },
    480: {
      description: 'AccessDeniedFault',
      content: { 'application/json': { schema: AccessDeniedFaultSchema } },
    },
    481: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
    483: {
      description: 'KMSAccessDeniedFault',
      content: { 'application/json': { schema: KMSAccessDeniedFaultSchema } },
    },
    484: {
      description: 'KMSDisabledFault',
      content: { 'application/json': { schema: KMSDisabledFaultSchema } },
    },
    485: { description: 'KMSFault', content: { 'application/json': { schema: KMSFaultSchema } } },
    486: {
      description: 'KMSInvalidStateFault',
      content: { 'application/json': { schema: KMSInvalidStateFaultSchema } },
    },
    487: {
      description: 'KMSNotFoundFault',
      content: { 'application/json': { schema: KMSNotFoundFaultSchema } },
    },
    488: {
      description: 'KMSKeyNotAccessibleFault',
      content: { 'application/json': { schema: KMSKeyNotAccessibleFaultSchema } },
    },
    489: {
      description: 'S3AccessDeniedFault',
      content: { 'application/json': { schema: S3AccessDeniedFaultSchema } },
    },
    490: {
      description: 'S3ResourceNotFoundFault',
      content: { 'application/json': { schema: S3ResourceNotFoundFaultSchema } },
    },
    491: {
      description: 'ResourceAlreadyExistsFault',
      content: { 'application/json': { schema: ResourceAlreadyExistsFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101StopReplicationTaskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.StopReplicationTask',
  description: 'Stops the replication task.',
  operationId: 'StopReplicationTask',
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
        .literal('AmazonDMSv20160101.StopReplicationTask')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.StopReplicationTask'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopReplicationTaskMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopReplicationTaskResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101TestConnectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.TestConnection',
  description: 'Tests the connection between the replication instance and the endpoint.',
  operationId: 'TestConnection',
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
        .literal('AmazonDMSv20160101.TestConnection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDMSv20160101.TestConnection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TestConnectionMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TestConnectionResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundFault',
      content: { 'application/json': { schema: ResourceNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
    482: {
      description: 'KMSKeyNotAccessibleFault',
      content: { 'application/json': { schema: KMSKeyNotAccessibleFaultSchema } },
    },
    483: {
      description: 'ResourceQuotaExceededFault',
      content: { 'application/json': { schema: ResourceQuotaExceededFaultSchema } },
    },
    484: {
      description: 'AccessDeniedFault',
      content: { 'application/json': { schema: AccessDeniedFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDMSv20160101UpdateSubscriptionsToEventBridgeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDMSv20160101.UpdateSubscriptionsToEventBridge',
  description:
    '<p>Migrates 10 active and enabled Amazon SNS subscriptions at a time and converts them to corresponding Amazon EventBridge rules. By default, this operation migrates subscriptions only when all your replication instance versions are 3.4.6 or higher. If any replication instances are from versions earlier than 3.4.6, the operation raises an error and tells you to upgrade these instances to version 3.4.6 or higher. To enable migration regardless of version, set the <code>Force</code> option to true. However, if you don\'t upgrade instances earlier than version 3.4.6, some types of events might not be available when you use Amazon EventBridge.</p> <p>To call this operation, make sure that you have certain permissions added to your user account. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html#CHAP_Events-migrate-to-eventbridge">Migrating event subscriptions to Amazon EventBridge</a> in the <i>Amazon Web Services Database Migration Service User Guide</i>.</p>',
  operationId: 'UpdateSubscriptionsToEventBridge',
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
        .literal('AmazonDMSv20160101.UpdateSubscriptionsToEventBridge')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AmazonDMSv20160101.UpdateSubscriptionsToEventBridge'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateSubscriptionsToEventBridgeMessageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSubscriptionsToEventBridgeResponseSchema } },
    },
    480: {
      description: 'AccessDeniedFault',
      content: { 'application/json': { schema: AccessDeniedFaultSchema } },
    },
    481: {
      description: 'InvalidResourceStateFault',
      content: { 'application/json': { schema: InvalidResourceStateFaultSchema } },
    },
  },
})
