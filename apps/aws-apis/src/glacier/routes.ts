import { createRoute, z } from '@hono/zod-openapi'

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const InvalidParameterValueExceptionSchema = z.any().openapi('InvalidParameterValueException')

const MissingParameterValueExceptionSchema = z.any().openapi('MissingParameterValueException')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const TagValueSchema = z.string().openapi('TagValue')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const ArchiveCreationOutputSchema = z
  .object({})
  .openapi({
    example: {
      archiveId:
        'kKB7ymWJVpPSwhGP6ycSOAekp9ZYe_--zM_mw6k76ZFGEIWQX-ybtRDvc2VkPSDtfKmQrj0IRQLSGsNuDp-AJVlu2ccmDSyDUmZwKbwbpAdGATGDiB3hHO0bjbGehXTcApVud_wyDw',
      checksum: '969fb39823836d81f0cc028195fcdbcbbe76cdde932d4646fa7de5f21e18aa67',
      location:
        '/0123456789012/vaults/my-vault/archives/kKB7ymWJVpPSwhGP6ycSOAekp9ZYe_--zM_mw6k76ZFGEIWQX-ybtRDvc2VkPSDtfKmQrj0IRQLSGsNuDp-AJVlu2ccmDSyDUmZwKbwbpAdGATGDiB3hHO0bjbGehXTcApVud_wyDw',
    },
    description:
      '<p>Contains the Amazon S3 Glacier response to your request.</p> <p>For information about the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-post.html">Upload Archive</a>. For conceptual information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in Amazon S3 Glacier</a>.</p>',
  })
  .openapi('ArchiveCreationOutput')

const CreateVaultOutputSchema = z
  .object({})
  .openapi({
    example: { location: '/111122223333/vaults/my-vault' },
    description: 'Contains the Amazon S3 Glacier response to your request.',
  })
  .openapi('CreateVaultOutput')

const StringSchema = z.string().openapi('String')

const ActionCodeSchema = z
  .enum(['ArchiveRetrieval', 'InventoryRetrieval', 'Select'])
  .openapi('ActionCode')

const BooleanSchema = z.boolean().openapi('Boolean')

const StatusCodeSchema = z.enum(['InProgress', 'Succeeded', 'Failed']).openapi('StatusCode')

const SizeSchema = z.int().openapi('Size')

const DateTimeSchema = z.string().openapi('DateTime')

const InventoryRetrievalJobDescriptionSchema = z
  .object({
    Format: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The output format for the vault inventory list, which is set by the <b>InitiateJob</b> request when initiating a job to retrieve a vault inventory. Valid values are <code>CSV</code> and <code>JSON</code>.',
        }),
    ).exactOptional(),
    StartDate: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start of the date range in Universal Coordinated Time (UTC) for vault inventory retrieval that includes archives created on or after this date. This value should be a string in the ISO 8601 date format, for example <code>2013-03-20T17:03:43Z</code>.',
        }),
    ).exactOptional(),
    EndDate: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The end of the date range in UTC for vault inventory retrieval that includes archives created before this date. This value should be a string in the ISO 8601 date format, for example <code>2013-03-20T17:03:43Z</code>.',
        }),
    ).exactOptional(),
    Limit: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of inventory items returned per vault inventory retrieval request. This limit is set when initiating the job with the a <b>InitiateJob</b> request. ',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An opaque string that represents where to continue pagination of the vault inventory retrieval results. You use the marker in a new <b>InitiateJob</b> request to obtain additional inventory items. If there are no more inventory items, this value is <code>null</code>. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html#api-initiate-job-post-vault-inventory-list-filtering"> Range Inventory Retrieval</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the options for a range inventory retrieval job.',
    required: [],
  })
  .openapi('InventoryRetrievalJobDescription')

const FileHeaderInfoSchema = z.enum(['USE', 'IGNORE', 'NONE']).openapi('FileHeaderInfo')

const CSVInputSchema = z
  .object({
    FileHeaderInfo: FileHeaderInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the first line of input. Valid values are <code>None</code>, <code>Ignore</code>, and <code>Use</code>.',
        }),
    ).exactOptional(),
    Comments: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A single character used to indicate that a row should be ignored when the character is present at the start of that row.',
        }),
    ).exactOptional(),
    QuoteEscapeCharacter: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A single character used for escaping the quotation-mark character inside an already escaped value.',
        }),
    ).exactOptional(),
    RecordDelimiter: StringSchema.and(
      z
        .any()
        .openapi({ description: 'A value used to separate individual records from each other.' }),
    ).exactOptional(),
    FieldDelimiter: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value used to separate individual fields from each other within a record.',
        }),
    ).exactOptional(),
    QuoteCharacter: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value used as an escape character where the field delimiter is part of the value.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about the comma-separated value (CSV) file to select from.',
    required: [],
  })
  .openapi('CSVInput')

const InputSerializationSchema = z
  .object({
    csv: CSVInputSchema.and(
      z.any().openapi({ description: 'Describes the serialization of a CSV-encoded object.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes how the archive is serialized.', required: [] })
  .openapi('InputSerialization')

const ExpressionTypeSchema = z.literal('SQL').openapi('ExpressionType')

const QuoteFieldsSchema = z.enum(['ALWAYS', 'ASNEEDED']).openapi('QuoteFields')

const CSVOutputSchema = z
  .object({
    QuoteFields: QuoteFieldsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that indicates whether all output fields should be contained within quotation marks.',
        }),
    ).exactOptional(),
    QuoteEscapeCharacter: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A single character used for escaping the quotation-mark character inside an already escaped value.',
        }),
    ).exactOptional(),
    RecordDelimiter: StringSchema.and(
      z
        .any()
        .openapi({ description: 'A value used to separate individual records from each other.' }),
    ).exactOptional(),
    FieldDelimiter: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value used to separate individual fields from each other within a record.',
        }),
    ).exactOptional(),
    QuoteCharacter: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value used as an escape character where the field delimiter is part of the value.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about the comma-separated value (CSV) file that the job results are stored in.',
    required: [],
  })
  .openapi('CSVOutput')

const OutputSerializationSchema = z
  .object({
    csv: CSVOutputSchema.and(
      z.any().openapi({ description: 'Describes the serialization of CSV-encoded query results.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes how the select output is serialized.', required: [] })
  .openapi('OutputSerialization')

const SelectParametersSchema = z
  .object({
    InputSerialization: InputSerializationSchema.and(
      z.any().openapi({ description: 'Describes the serialization format of the object.' }),
    ).exactOptional(),
    ExpressionType: ExpressionTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of the provided expression, for example <code>SQL</code>.',
        }),
    ).exactOptional(),
    Expression: StringSchema.and(
      z.any().openapi({ description: 'The expression that is used to select the object.' }),
    ).exactOptional(),
    OutputSerialization: OutputSerializationSchema.and(
      z
        .any()
        .openapi({ description: 'Describes how the results of the select job are serialized.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about the parameters used for a select.',
    required: [],
  })
  .openapi('SelectParameters')

const EncryptionTypeSchema = z.enum(['aws:kms', 'AES256']).openapi('EncryptionType')

const EncryptionSchema = z
  .object({
    EncryptionType: EncryptionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The server-side encryption algorithm used when storing job results in Amazon S3, for example <code>AES256</code> or <code>aws:kms</code>.',
        }),
    ).exactOptional(),
    KMSKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS KMS key ID to use for object encryption. All GET and PUT requests for an object protected by AWS KMS fail if not made by using Secure Sockets Layer (SSL) or Signature Version 4. ',
        }),
    ).exactOptional(),
    KMSContext: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional. If the encryption type is <code>aws:kms</code>, you can use this value to specify the encryption context for the job results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about the encryption used to store the job results in Amazon S3. ',
    required: [],
  })
  .openapi('Encryption')

const CannedACLSchema = z
  .enum([
    'private',
    'public-read',
    'public-read-write',
    'aws-exec-read',
    'authenticated-read',
    'bucket-owner-read',
    'bucket-owner-full-control',
  ])
  .openapi('CannedACL')

const TypeSchema = z.enum(['AmazonCustomerByEmail', 'CanonicalUser', 'Group']).openapi('Type')

const GranteeSchema = z
  .object({
    Type: TypeSchema.and(z.any().openapi({ description: 'Type of grantee' })),
    DisplayName: StringSchema.and(
      z.any().openapi({ description: 'Screen name of the grantee.' }),
    ).exactOptional(),
    URI: StringSchema.and(
      z.any().openapi({ description: 'URI of the grantee group.' }),
    ).exactOptional(),
    ID: StringSchema.and(
      z.any().openapi({ description: 'The canonical user ID of the grantee.' }),
    ).exactOptional(),
    EmailAddress: StringSchema.and(
      z.any().openapi({ description: 'Email address of the grantee.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Type'], description: 'Contains information about the grantee.' })
  .openapi('Grantee')

const PermissionSchema = z
  .enum(['FULL_CONTROL', 'WRITE', 'WRITE_ACP', 'READ', 'READ_ACP'])
  .openapi('Permission')

const GrantSchema = z
  .object({
    Grantee: GranteeSchema.and(z.any().openapi({ description: 'The grantee.' })).exactOptional(),
    Permission: PermissionSchema.and(
      z.any().openapi({ description: 'Specifies the permission given to the grantee. ' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about a grant.', required: [] })
  .openapi('Grant')

const AccessControlPolicyListSchema = z.array(GrantSchema).openapi('AccessControlPolicyList')

const HashmapSchema = z.record(z.string(), StringSchema).openapi('Hashmap')

const StorageClassSchema = z
  .enum(['STANDARD', 'REDUCED_REDUNDANCY', 'STANDARD_IA'])
  .openapi('StorageClass')

const S3LocationSchema = z
  .object({
    BucketName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the Amazon S3 bucket where the job results are stored.',
        }),
    ).exactOptional(),
    Prefix: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The prefix that is prepended to the results for this request.' }),
    ).exactOptional(),
    Encryption: EncryptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains information about the encryption used to store the job results in Amazon S3.',
        }),
    ).exactOptional(),
    CannedACL: CannedACLSchema.and(
      z
        .any()
        .openapi({
          description: 'The canned access control list (ACL) to apply to the job results.',
        }),
    ).exactOptional(),
    AccessControlList: AccessControlPolicyListSchema.and(
      z
        .any()
        .openapi({ description: 'A list of grants that control access to the staged results.' }),
    ).exactOptional(),
    Tagging: HashmapSchema.and(
      z.any().openapi({ description: 'The tag-set that is applied to the job results.' }),
    ).exactOptional(),
    UserMetadata: HashmapSchema.and(
      z
        .any()
        .openapi({ description: 'A map of metadata to store with the job results in Amazon S3.' }),
    ).exactOptional(),
    StorageClass: StorageClassSchema.and(
      z.any().openapi({ description: 'The storage class used to store the job results.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about the location in Amazon S3 where the select job results are stored.',
    required: [],
  })
  .openapi('S3Location')

const OutputLocationSchema = z
  .object({
    S3: S3LocationSchema.and(
      z
        .any()
        .openapi({
          description: 'Describes an S3 location that will receive the results of the job request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about the location where the select job results are stored.',
    required: [],
  })
  .openapi('OutputLocation')

const GlacierJobDescriptionSchema = z
  .object({
    JobId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'An opaque string that identifies an Amazon S3 Glacier job.' }),
    ).exactOptional(),
    JobDescription: StringSchema.and(
      z.any().openapi({ description: 'The job description provided when initiating the job.' }),
    ).exactOptional(),
    Action: ActionCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The job type. This value is either <code>ArchiveRetrieval</code>, <code>InventoryRetrieval</code>, or <code>Select</code>. ',
        }),
    ).exactOptional(),
    ArchiveId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The archive ID requested for a select job or archive retrieval. Otherwise, this field is null.',
        }),
    ).exactOptional(),
    VaultARN: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the vault from which an archive retrieval was requested.',
        }),
    ).exactOptional(),
    CreationDate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The UTC date when the job was created. This value is a string representation of ISO 8601 date format, for example <code>"2012-03-20T17:03:43.221Z"</code>.',
        }),
    ).exactOptional(),
    Completed: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "The job status. When a job is completed, you get the job's output using Get Job Output (GET output).",
        }),
    ).exactOptional(),
    StatusCode: StatusCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status code can be <code>InProgress</code>, <code>Succeeded</code>, or <code>Failed</code>, and indicates the status of the job.',
        }),
    ).exactOptional(),
    StatusMessage: StringSchema.and(
      z.any().openapi({ description: 'A friendly message that describes the job status.' }),
    ).exactOptional(),
    ArchiveSizeInBytes: SizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'For an archive retrieval job, this value is the size in bytes of the archive being requested for download. For an inventory retrieval or select job, this value is null.',
        }),
    ).exactOptional(),
    InventorySizeInBytes: SizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'For an inventory retrieval job, this value is the size in bytes of the inventory requested for download. For an archive retrieval or select job, this value is null.',
        }),
    ).exactOptional(),
    SNSTopic: StringSchema.and(
      z.any().openapi({ description: 'An Amazon SNS topic that receives notification.' }),
    ).exactOptional(),
    CompletionDate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The UTC time that the job request completed. While the job is in progress, the value is null.',
        }),
    ).exactOptional(),
    SHA256TreeHash: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For an archive retrieval job, this value is the checksum of the archive. Otherwise, this value is null.</p> <p>The SHA256 tree hash value for the requested range of an archive. If the <b>InitiateJob</b> request for an archive specified a tree-hash aligned range, then this field returns a value.</p> <p>If the whole archive is retrieved, this value is the same as the ArchiveSHA256TreeHash value.</p> <p>This field is null for the following:</p> <ul> <li> <p>Archive retrieval jobs that specify a range that is not tree-hash aligned</p> </li> </ul> <ul> <li> <p>Archival jobs that specify a range that is equal to the whole archive, when the job status is <code>InProgress</code> </p> </li> </ul> <ul> <li> <p>Inventory jobs</p> </li> <li> <p>Select jobs</p> </li> </ul>',
        }),
    ).exactOptional(),
    ArchiveSHA256TreeHash: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The SHA256 tree hash of the entire archive for an archive retrieval. For inventory retrieval or select jobs, this field is null.',
        }),
    ).exactOptional(),
    RetrievalByteRange: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The retrieved byte range for archive retrieval jobs in the form <i>StartByteValue</i>-<i>EndByteValue</i>. If no range was specified in the archive retrieval, then the whole archive is retrieved. In this case, <i>StartByteValue</i> equals 0 and <i>EndByteValue</i> equals the size of the archive minus 1. For inventory retrieval or select jobs, this field is null. ',
        }),
    ).exactOptional(),
    Tier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tier to use for a select or an archive retrieval. Valid values are <code>Expedited</code>, <code>Standard</code>, or <code>Bulk</code>. <code>Standard</code> is the default.',
        }),
    ).exactOptional(),
    InventoryRetrievalParameters: InventoryRetrievalJobDescriptionSchema.and(
      z.any().openapi({ description: 'Parameters used for range inventory retrieval.' }),
    ).exactOptional(),
    JobOutputPath: StringSchema.and(
      z.any().openapi({ description: 'Contains the job output location.' }),
    ).exactOptional(),
    SelectParameters: SelectParametersSchema.and(
      z.any().openapi({ description: 'Contains the parameters used for a select.' }),
    ).exactOptional(),
    OutputLocation: OutputLocationSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains the location where the data from the select job is stored.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Action: 'InventoryRetrieval',
      Completed: false,
      CreationDate: '2015-07-17T20:23:41.616Z',
      InventoryRetrievalParameters: { Format: 'JSON' },
      JobId:
        'zbxcm3Z_3z5UkoroF7SuZKrxgGoDc3RloGduS7Eg-RO47Yc6FxsdGBgf_Q2DK5Ejh18CnTS5XW4_XqlNHS61dsO4CnMW',
      StatusCode: 'InProgress',
      VaultARN: 'arn:aws:glacier:us-west-2:0123456789012:vaults/my-vault',
    },
    description: 'Contains the description of an Amazon S3 Glacier job.',
    required: [],
  })
  .openapi('GlacierJobDescription')

const LongSchema = z.int().openapi('Long')

const DescribeVaultOutputSchema = z
  .object({
    VaultARN: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the vault.' }),
    ).exactOptional(),
    VaultName: StringSchema.and(
      z.any().openapi({ description: 'The name of the vault.' }),
    ).exactOptional(),
    CreationDate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Universal Coordinated Time (UTC) date when the vault was created. This value should be a string in the ISO 8601 date format, for example <code>2012-03-20T17:03:43.221Z</code>.',
        }),
    ).exactOptional(),
    LastInventoryDate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Universal Coordinated Time (UTC) date when Amazon S3 Glacier completed the last vault inventory. This value should be a string in the ISO 8601 date format, for example <code>2012-03-20T17:03:43.221Z</code>.',
        }),
    ).exactOptional(),
    NumberOfArchives: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of archives in the vault as of the last inventory date. This field will return <code>null</code> if an inventory has not yet run on the vault, for example if you just created the vault.',
        }),
    ).exactOptional(),
    SizeInBytes: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'Total size, in bytes, of the archives in the vault as of the last inventory date. This field will return null if an inventory has not yet run on the vault, for example if you just created the vault.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      CreationDate: '2016-09-23T19:27:18.665Z',
      NumberOfArchives: 0,
      SizeInBytes: 0,
      VaultARN: 'arn:aws:glacier:us-west-2:111122223333:vaults/my-vault',
      VaultName: 'my-vault',
    },
    description: 'Contains the Amazon S3 Glacier response to your request.',
    required: [],
  })
  .openapi('DescribeVaultOutput')

const NullableLongSchema = z.int().openapi('NullableLong')

const DataRetrievalRuleSchema = z
  .object({
    Strategy: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of data retrieval policy to set.</p> <p>Valid values: BytesPerHour|FreeTier|None</p>',
        }),
    ).exactOptional(),
    BytesPerHour: NullableLongSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of bytes that can be retrieved in an hour.</p> <p>This field is required only if the value of the Strategy field is <code>BytesPerHour</code>. Your PUT operation will be rejected if the Strategy field is not set to <code>BytesPerHour</code> and you set this field.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Data retrieval policy rule.', required: [] })
  .openapi('DataRetrievalRule')

const DataRetrievalRulesListSchema = z
  .array(DataRetrievalRuleSchema)
  .openapi('DataRetrievalRulesList')

const DataRetrievalPolicySchema = z
  .object({
    Rules: DataRetrievalRulesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The policy rule. Although this is a list type, currently there must be only one rule, which contains a Strategy field and optionally a BytesPerHour field.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Data retrieval policy.', required: [] })
  .openapi('DataRetrievalPolicy')

const GetDataRetrievalPolicyOutputSchema = z
  .object({
    Policy: DataRetrievalPolicySchema.and(
      z
        .any()
        .openapi({ description: 'Contains the returned data retrieval policy in JSON format.' }),
    ).exactOptional(),
  })
  .openapi({
    example: { Policy: { Rules: [{ BytesPerHour: 10737418240, Strategy: 'BytesPerHour' }] } },
    description:
      'Contains the Amazon S3 Glacier response to the <code>GetDataRetrievalPolicy</code> request.',
    required: [],
  })
  .openapi('GetDataRetrievalPolicyOutput')

const StreamSchema = z.string().openapi('Stream')

const HttpstatusSchema = z.int().openapi('Httpstatus')

const GetJobOutputOutputSchema = z
  .object({
    body: StreamSchema.and(
      z.any().openapi({ description: 'The job data, either archive data or inventory data.' }),
    ).exactOptional(),
    status: HttpstatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The HTTP response code for a job output request. The value depends on whether a range was specified in the request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      acceptRanges: 'bytes',
      body: 'inventory-data',
      contentType: 'application/json',
      status: 200,
    },
    description: 'Contains the Amazon S3 Glacier response to your request.',
    required: [],
  })
  .openapi('GetJobOutputOutput')

const VaultAccessPolicySchema = z
  .object({
    Policy: StringSchema.and(
      z.any().openapi({ description: 'The vault access policy.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains the vault access policy.', required: [] })
  .openapi('VaultAccessPolicy')

const GetVaultAccessPolicyOutputSchema = z
  .object({
    policy: VaultAccessPolicySchema.and(
      z
        .any()
        .openapi({ description: 'Contains the returned vault access policy as a JSON string.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      policy: {
        Policy:
          '{"Version":"2012-10-17","Statement":[{"Sid":"Define-owner-access-rights","Effect":"Allow","Principal":{"AWS":"arn:aws:iam::999999999999:root"},"Action":"glacier:DeleteArchive","Resource":"arn:aws:glacier:us-west-2:999999999999:vaults/examplevault"}]}',
      },
    },
    description: 'Output for GetVaultAccessPolicy.',
    required: [],
  })
  .openapi('GetVaultAccessPolicyOutput')

const GetVaultLockOutputSchema = z
  .object({
    Policy: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The vault lock policy as a JSON string, which uses "\\" as an escape character.',
        }),
    ).exactOptional(),
    State: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The state of the vault lock. <code>InProgress</code> or <code>Locked</code>.',
        }),
    ).exactOptional(),
    ExpirationDate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The UTC date and time at which the lock ID expires. This value can be <code>null</code> if the vault lock is in a <code>Locked</code> state.',
        }),
    ).exactOptional(),
    CreationDate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The UTC date and time at which the vault lock was put into the <code>InProgress</code> state.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      CreationDate: 'exampledate',
      ExpirationDate: 'exampledate',
      Policy:
        '{"Version":"2012-10-17","Statement":[{"Sid":"Define-vault-lock","Effect":"Deny","Principal":{"AWS":"arn:aws:iam::999999999999:root"},"Action":"glacier:DeleteArchive","Resource":"arn:aws:glacier:us-west-2:999999999999:vaults/examplevault","Condition":{"NumericLessThanEquals":{"glacier:ArchiveAgeinDays":"365"}}}]}',
      State: 'InProgress',
    },
    description: 'Contains the Amazon S3 Glacier response to your request.',
    required: [],
  })
  .openapi('GetVaultLockOutput')

const NotificationEventListSchema = z.array(StringSchema).openapi('NotificationEventList')

const VaultNotificationConfigSchema = z
  .object({
    SNSTopic: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Simple Notification Service (Amazon SNS) topic Amazon Resource Name (ARN).',
        }),
    ).exactOptional(),
    Events: NotificationEventListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of one or more events for which Amazon S3 Glacier will send a notification to the specified Amazon SNS topic.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: "Represents a vault's notification configuration.", required: [] })
  .openapi('VaultNotificationConfig')

const GetVaultNotificationsOutputSchema = z
  .object({
    vaultNotificationConfig: VaultNotificationConfigSchema.and(
      z.any().openapi({ description: 'Returns the notification configuration set on the vault.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      vaultNotificationConfig: {
        Events: ['InventoryRetrievalCompleted', 'ArchiveRetrievalCompleted'],
        SNSTopic: 'arn:aws:sns:us-west-2:0123456789012:my-vault',
      },
    },
    description: 'Contains the Amazon S3 Glacier response to your request.',
    required: [],
  })
  .openapi('GetVaultNotificationsOutput')

const InitiateJobOutputSchema = z
  .object({})
  .openapi({
    example: {
      jobId:
        ' HkF9p6o7yjhFx-K3CGl6fuSm6VzW9T7esGQfco8nUXVYwS0jlb5gq1JZ55yHgt5vP54ZShjoQzQVVh7vEXAMPLEjobID',
      location:
        '/111122223333/vaults/examplevault/jobs/HkF9p6o7yjhFx-K3CGl6fuSm6VzW9T7esGQfco8nUXVYwS0jlb5gq1JZ55yHgt5vP54ZShjoQzQVVh7vEXAMPLEjobID',
    },
    description: 'Contains the Amazon S3 Glacier response to your request.',
  })
  .openapi('InitiateJobOutput')

const InventoryRetrievalJobInputSchema = z
  .object({
    StartDate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start of the date range in UTC for vault inventory retrieval that includes archives created on or after this date. This value should be a string in the ISO 8601 date format, for example <code>2013-03-20T17:03:43Z</code>.',
        }),
    ).exactOptional(),
    EndDate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The end of the date range in UTC for vault inventory retrieval that includes archives created before this date. This value should be a string in the ISO 8601 date format, for example <code>2013-03-20T17:03:43Z</code>.',
        }),
    ).exactOptional(),
    Limit: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the maximum number of inventory items returned per vault inventory retrieval request. Valid values are greater than or equal to 1.',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An opaque string that represents where to continue pagination of the vault inventory retrieval results. You use the marker in a new <b>InitiateJob</b> request to obtain additional inventory items. If there are no more inventory items, this value is <code>null</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides options for specifying a range inventory retrieval job.',
    required: [],
  })
  .openapi('InventoryRetrievalJobInput')

const PolicyEnforcedExceptionSchema = z.any().openapi('PolicyEnforcedException')

const InsufficientCapacityExceptionSchema = z.any().openapi('InsufficientCapacityException')

const InitiateMultipartUploadOutputSchema = z
  .object({})
  .openapi({
    example: {
      location:
        '/111122223333/vaults/my-vault/multipart-uploads/19gaRezEXAMPLES6Ry5YYdqthHOC_kGRCT03L9yetr220UmPtBYKk-OssZtLqyFu7sY1_lR7vgFuJV6NtcV5zpsJ',
      uploadId:
        '19gaRezEXAMPLES6Ry5YYdqthHOC_kGRCT03L9yetr220UmPtBYKk-OssZtLqyFu7sY1_lR7vgFuJV6NtcV5zpsJ',
    },
    description: 'The Amazon S3 Glacier response to your request.',
  })
  .openapi('InitiateMultipartUploadOutput')

const InitiateVaultLockOutputSchema = z
  .object({})
  .openapi({
    example: { lockId: 'AE863rKkWZU53SLW5be4DUcW' },
    description: 'Contains the Amazon S3 Glacier response to your request.',
  })
  .openapi('InitiateVaultLockOutput')

const JobListSchema = z.array(GlacierJobDescriptionSchema).openapi('JobList')

const ListJobsOutputSchema = z
  .object({
    JobList: JobListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of job objects. Each job object contains metadata describing the job.',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An opaque string used for pagination that specifies the job at which the listing of jobs should begin. You get the <code>marker</code> value from a previous List Jobs response. You only need to include the marker if you are continuing the pagination of the results started in a previous List Jobs request. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      JobList: [
        {
          Action: 'ArchiveRetrieval',
          ArchiveId:
            'kKB7ymWJVpPSwhGP6ycSOAekp9ZYe_--zM_mw6k76ZFGEIWQX-ybtRDvc2VkPSDtfKmQrj0IRQLSGsNuDp-AJVlu2ccmDSyDUmZwKbwbpAdGATGDiB3hHO0bjbGehXTcApVud_wyDw',
          ArchiveSHA256TreeHash: '9628195fcdbcbbe76cdde932d4646fa7de5f219fb39823836d81f0cc0e18aa67',
          ArchiveSizeInBytes: 3145728,
          Completed: false,
          CreationDate: '2015-07-17T21:16:13.840Z',
          JobDescription: 'Retrieve archive on 2015-07-17',
          JobId:
            'l7IL5-EkXyEY9Ws95fClzIbk2O5uLYaFdAYOi-azsX_Z8V6NH4yERHzars8wTKYQMX6nBDI9cMNHzyZJO59-8N9aHWav',
          RetrievalByteRange: '0-3145727',
          SHA256TreeHash: '9628195fcdbcbbe76cdde932d4646fa7de5f219fb39823836d81f0cc0e18aa67',
          SNSTopic: 'arn:aws:sns:us-west-2:0123456789012:my-vault',
          StatusCode: 'InProgress',
          VaultARN: 'arn:aws:glacier:us-west-2:0123456789012:vaults/my-vault',
        },
        {
          Action: 'InventoryRetrieval',
          Completed: false,
          CreationDate: '2015-07-17T20:23:41.616Z',
          InventoryRetrievalParameters: { Format: 'JSON' },
          JobId:
            'zbxcm3Z_3z5UkoroF7SuZKrxgGoDc3RloGduS7Eg-RO47Yc6FxsdGBgf_Q2DK5Ejh18CnTS5XW4_XqlNHS61dsO4CnMW',
          StatusCode: 'InProgress',
          VaultARN: 'arn:aws:glacier:us-west-2:0123456789012:vaults/my-vault',
        },
      ],
    },
    description: 'Contains the Amazon S3 Glacier response to your request.',
    required: [],
  })
  .openapi('ListJobsOutput')

const UploadListElementSchema = z
  .object({
    MultipartUploadId: StringSchema.and(
      z.any().openapi({ description: 'The ID of a multipart upload.' }),
    ).exactOptional(),
    VaultARN: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the vault that contains the archive.',
        }),
    ).exactOptional(),
    ArchiveDescription: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The description of the archive that was specified in the Initiate Multipart Upload request.',
        }),
    ).exactOptional(),
    PartSizeInBytes: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The part size, in bytes, specified in the Initiate Multipart Upload request. This is the size of all the parts in the upload except the last part, which may be smaller than this size.',
        }),
    ).exactOptional(),
    CreationDate: StringSchema.and(
      z.any().openapi({ description: 'The UTC time at which the multipart upload was initiated.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A list of in-progress multipart uploads for a vault.', required: [] })
  .openapi('UploadListElement')

const UploadsListSchema = z.array(UploadListElementSchema).openapi('UploadsList')

const ListMultipartUploadsOutputSchema = z
  .object({
    UploadsList: UploadsListSchema.and(
      z.any().openapi({ description: 'A list of in-progress multipart uploads.' }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An opaque string that represents where to continue pagination of the results. You use the marker in a new List Multipart Uploads request to obtain more uploads in the list. If there are no more uploads, this value is <code>null</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Marker: 'null',
      UploadsList: [
        {
          ArchiveDescription: 'archive 1',
          CreationDate: '2012-03-19T23:20:59.130Z',
          MultipartUploadId:
            'xsQdFIRsfJr20CW2AbZBKpRZAFTZSJIMtL2hYf8mvp8dM0m4RUzlaqoEye6g3h3ecqB_zqwB7zLDMeSWhwo65re4C4Ev',
          PartSizeInBytes: 4194304,
          VaultARN: 'arn:aws:glacier:us-west-2:012345678901:vaults/examplevault',
        },
        {
          ArchiveDescription: 'archive 2',
          CreationDate: '2012-04-01T15:00:00.000Z',
          MultipartUploadId:
            'nPyGOnyFcx67qqX7E-0tSGiRi88hHMOwOxR-_jNyM6RjVMFfV29lFqZ3rNsSaWBugg6OP92pRtufeHdQH7ClIpSF6uJc',
          PartSizeInBytes: 4194304,
          VaultARN: 'arn:aws:glacier:us-west-2:012345678901:vaults/examplevault',
        },
        {
          ArchiveDescription: 'archive 3',
          CreationDate: '2012-03-20T17:03:43.221Z',
          MultipartUploadId:
            'qt-RBst_7yO8gVIonIBsAxr2t-db0pE4s8MNeGjKjGdNpuU-cdSAcqG62guwV9r5jh5mLyFPzFEitTpNE7iQfHiu1XoV',
          PartSizeInBytes: 4194304,
          VaultARN: 'arn:aws:glacier:us-west-2:012345678901:vaults/examplevault',
        },
      ],
    },
    description: 'Contains the Amazon S3 Glacier response to your request.',
    required: [],
  })
  .openapi('ListMultipartUploadsOutput')

const PartListElementSchema = z
  .object({
    RangeInBytes: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The byte range of a part, inclusive of the upper value of the range.',
        }),
    ).exactOptional(),
    SHA256TreeHash: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The SHA256 tree hash value that Amazon S3 Glacier calculated for the part. This field is never <code>null</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A list of the part sizes of the multipart upload.', required: [] })
  .openapi('PartListElement')

const PartListSchema = z.array(PartListElementSchema).openapi('PartList')

const ListPartsOutputSchema = z
  .object({
    MultipartUploadId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the upload to which the parts are associated.' }),
    ).exactOptional(),
    VaultARN: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the vault to which the multipart upload was initiated.',
        }),
    ).exactOptional(),
    ArchiveDescription: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The description of the archive that was specified in the Initiate Multipart Upload request.',
        }),
    ).exactOptional(),
    PartSizeInBytes: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The part size in bytes. This is the same value that you specified in the Initiate Multipart Upload request.',
        }),
    ).exactOptional(),
    CreationDate: StringSchema.and(
      z.any().openapi({ description: 'The UTC time at which the multipart upload was initiated.' }),
    ).exactOptional(),
    Parts: PartListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the part sizes of the multipart upload. Each object in the array contains a <code>RangeBytes</code> and <code>sha256-tree-hash</code> name/value pair.',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An opaque string that represents where to continue pagination of the results. You use the marker in a new List Parts request to obtain more jobs in the list. If there are no more parts, this value is <code>null</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ArchiveDescription: 'archive description',
      CreationDate: '2012-03-20T17:03:43.221Z',
      Marker: 'null',
      MultipartUploadId:
        'OW2fM5iVylEpFEMM9_HpKowRapC3vn5sSL39_396UW9zLFUWVrnRHaPjUJddQ5OxSHVXjYtrN47NBZ-khxOjyEXAMPLE',
      PartSizeInBytes: 4194304,
      Parts: [
        { RangeInBytes: '0-4194303', SHA256TreeHash: '01d34dabf7be316472c93b1ef80721f5d4' },
        { RangeInBytes: '4194304-8388607', SHA256TreeHash: '0195875365afda349fc21c84c099987164' },
      ],
      VaultARN: 'arn:aws:glacier:us-west-2:012345678901:vaults/demo1-vault',
    },
    description: 'Contains the Amazon S3 Glacier response to your request.',
    required: [],
  })
  .openapi('ListPartsOutput')

const ProvisionedCapacityDescriptionSchema = z
  .object({
    CapacityId: StringSchema.and(
      z.any().openapi({ description: 'The ID that identifies the provisioned capacity unit.' }),
    ).exactOptional(),
    StartDate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the provisioned capacity unit was purchased, in Universal Coordinated Time (UTC).',
        }),
    ).exactOptional(),
    ExpirationDate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the provisioned capacity unit expires, in Universal Coordinated Time (UTC).',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The definition for a provisioned capacity unit.', required: [] })
  .openapi('ProvisionedCapacityDescription')

const ProvisionedCapacityListSchema = z
  .array(ProvisionedCapacityDescriptionSchema)
  .openapi('ProvisionedCapacityList')

const ListProvisionedCapacityOutputSchema = z
  .object({
    ProvisionedCapacityList: ProvisionedCapacityListSchema.and(
      z.any().openapi({ description: 'The response body contains the following JSON fields.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ProvisionedCapacityList: [
        {
          CapacityId: 'zSaq7NzHFQDANTfQkDen4V7z',
          ExpirationDate: '2016-12-12T00:00:00.000Z',
          StartDate: '2016-11-11T20:11:51.095Z',
        },
        {
          CapacityId: 'yXaq7NzHFQNADTfQkDen4V7z',
          ExpirationDate: '2017-01-15T00:00:00.000Z',
          StartDate: '2016-12-13T20:11:51.095Z',
        },
      ],
    },
    required: [],
  })
  .openapi('ListProvisionedCapacityOutput')

const TagMapSchema = z.record(z.string(), TagValueSchema).openapi('TagMap')

const ListTagsForVaultOutputSchema = z
  .object({
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The tags attached to the vault. Each tag is composed of a key and a value.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { Tags: { date: 'july2015', id: '1234' } },
    description: 'Contains the Amazon S3 Glacier response to your request.',
    required: [],
  })
  .openapi('ListTagsForVaultOutput')

const VaultListSchema = z.array(DescribeVaultOutputSchema).openapi('VaultList')

const ListVaultsOutputSchema = z
  .object({
    VaultList: VaultListSchema.and(
      z.any().openapi({ description: 'List of vaults.' }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The vault ARN at which to continue pagination of the results. You use the marker in another List Vaults request to obtain more vaults in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      VaultList: [
        {
          CreationDate: '2015-04-06T21:23:45.708Z',
          LastInventoryDate: '2015-04-07T00:26:19.028Z',
          NumberOfArchives: 1,
          SizeInBytes: 3178496,
          VaultARN: 'arn:aws:glacier:us-west-2:0123456789012:vaults/my-vault',
          VaultName: 'my-vault',
        },
      ],
    },
    description: 'Contains the Amazon S3 Glacier response to your request.',
    required: [],
  })
  .openapi('ListVaultsOutput')

const PurchaseProvisionedCapacityOutputSchema = z
  .object({})
  .openapi({ example: { capacityId: 'zSaq7NzHFQDANTfQkDen4V7z' } })
  .openapi('PurchaseProvisionedCapacityOutput')

const RequestTimeoutExceptionSchema = z.any().openapi('RequestTimeoutException')

const UploadMultipartPartOutputSchema = z
  .object({})
  .openapi({
    example: { checksum: 'c06f7cd4baacb087002a99a5f48bf953' },
    description: 'Contains the Amazon S3 Glacier response to your request.',
  })
  .openapi('UploadMultipartPartOutput')

const AbortMultipartUploadInputSchema = z
  .object({})
  .openapi({
    title: 'AbortMultipartUploadInput',
    description:
      '<p>Provides options to abort a multipart upload identified by the upload ID.</p> <p>For information about the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-abort-upload.html">Abort Multipart Upload</a>. For conceptual information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in Amazon S3 Glacier</a>.</p>',
  })
  .openapi('AbortMultipartUploadInput')

const AbortVaultLockInputSchema = z
  .object({})
  .openapi({
    title: 'AbortVaultLockInput',
    description: 'The input values for <code>AbortVaultLock</code>.',
  })
  .openapi('AbortVaultLockInput')

const AddTagsToVaultInputSchema = z
  .object({
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags to add to the vault. Each tag is composed of a key and a value. The value can be an empty string.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'AddTagsToVaultInput',
    description: 'The input values for <code>AddTagsToVault</code>.',
    required: [],
  })
  .openapi('AddTagsToVaultInput')

const CompleteMultipartUploadInputSchema = z
  .object({})
  .openapi({
    title: 'CompleteMultipartUploadInput',
    description:
      'Provides options to complete a multipart upload operation. This informs Amazon Glacier that all the archive parts have been uploaded and Amazon S3 Glacier (Glacier) can now assemble the archive from the uploaded parts. After assembling and saving the archive to the vault, Glacier returns the URI path of the newly created archive resource.',
  })
  .openapi('CompleteMultipartUploadInput')

const CompleteVaultLockInputSchema = z
  .object({})
  .openapi({
    title: 'CompleteVaultLockInput',
    description: 'The input values for <code>CompleteVaultLock</code>.',
  })
  .openapi('CompleteVaultLockInput')

const CreateVaultInputSchema = z
  .object({})
  .openapi({ title: 'CreateVaultInput', description: 'Provides options to create a vault.' })
  .openapi('CreateVaultInput')

const DeleteArchiveInputSchema = z
  .object({})
  .openapi({
    title: 'DeleteArchiveInput',
    description: 'Provides options for deleting an archive from an Amazon S3 Glacier vault.',
  })
  .openapi('DeleteArchiveInput')

const DeleteVaultAccessPolicyInputSchema = z
  .object({})
  .openapi({ title: 'DeleteVaultAccessPolicyInput', description: 'DeleteVaultAccessPolicy input.' })
  .openapi('DeleteVaultAccessPolicyInput')

const DeleteVaultInputSchema = z
  .object({})
  .openapi({
    title: 'DeleteVaultInput',
    description: 'Provides options for deleting a vault from Amazon S3 Glacier.',
  })
  .openapi('DeleteVaultInput')

const DeleteVaultNotificationsInputSchema = z
  .object({})
  .openapi({
    title: 'DeleteVaultNotificationsInput',
    description:
      'Provides options for deleting a vault notification configuration from an Amazon Glacier vault.',
  })
  .openapi('DeleteVaultNotificationsInput')

const DescribeJobInputSchema = z
  .object({})
  .openapi({
    title: 'DescribeJobInput',
    description: 'Provides options for retrieving a job description.',
  })
  .openapi('DescribeJobInput')

const DescribeVaultInputSchema = z
  .object({})
  .openapi({
    title: 'DescribeVaultInput',
    description: 'Provides options for retrieving metadata for a specific vault in Amazon Glacier.',
  })
  .openapi('DescribeVaultInput')

const GetDataRetrievalPolicyInputSchema = z
  .object({})
  .openapi({
    title: 'GetDataRetrievalPolicyInput',
    description: 'Input for GetDataRetrievalPolicy.',
  })
  .openapi('GetDataRetrievalPolicyInput')

const GetJobOutputInputSchema = z
  .object({})
  .openapi({
    title: 'GetJobOutputInput',
    description: 'Provides options for downloading output of an Amazon S3 Glacier job.',
  })
  .openapi('GetJobOutputInput')

const GetVaultAccessPolicyInputSchema = z
  .object({})
  .openapi({ title: 'GetVaultAccessPolicyInput', description: 'Input for GetVaultAccessPolicy.' })
  .openapi('GetVaultAccessPolicyInput')

const GetVaultLockInputSchema = z
  .object({})
  .openapi({
    title: 'GetVaultLockInput',
    description: 'The input values for <code>GetVaultLock</code>.',
  })
  .openapi('GetVaultLockInput')

const GetVaultNotificationsInputSchema = z
  .object({})
  .openapi({
    title: 'GetVaultNotificationsInput',
    description:
      'Provides options for retrieving the notification configuration set on an Amazon Glacier vault.',
  })
  .openapi('GetVaultNotificationsInput')

const JobParametersSchema = z
  .object({
    Format: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'When initiating a job to retrieve a vault inventory, you can optionally add this parameter to your request to specify the output format. If you are initiating an inventory job and do not specify a Format field, JSON is the default format. Valid values are "CSV" and "JSON".',
        }),
    ).exactOptional(),
    Type: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The job type. You can initiate a job to perform a select query on an archive, retrieve an archive, or get an inventory of a vault. Valid values are "select", "archive-retrieval" and "inventory-retrieval".',
        }),
    ).exactOptional(),
    ArchiveId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the archive that you want to retrieve. This field is required only if <code>Type</code> is set to <code>select</code> or <code>archive-retrieval</code>code&gt;. An error occurs if you specify this request parameter for an inventory retrieval job request. ',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The optional description for the job. The description must be less than or equal to 1,024 bytes. The allowable characters are 7-bit ASCII without control codes-specifically, ASCII values 32-126 decimal or 0x20-0x7E hexadecimal.',
        }),
    ).exactOptional(),
    SNSTopic: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon SNS topic ARN to which Amazon S3 Glacier sends a notification when the job is completed and the output is ready for you to download. The specified topic publishes the notification to its subscribers. The SNS topic must exist.',
        }),
    ).exactOptional(),
    RetrievalByteRange: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The byte range to retrieve for an archive retrieval. in the form "<i>StartByteValue</i>-<i>EndByteValue</i>" If not specified, the whole archive is retrieved. If specified, the byte range must be megabyte (1024*1024) aligned which means that <i>StartByteValue</i> must be divisible by 1 MB and <i>EndByteValue</i> plus 1 must be divisible by 1 MB or be the end of the archive specified as the archive byte size value minus 1. If RetrievalByteRange is not megabyte aligned, this operation returns a 400 response. </p> <p>An error occurs if you specify this field for an inventory retrieval job request.</p>',
        }),
    ).exactOptional(),
    Tier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tier to use for a select or an archive retrieval job. Valid values are <code>Expedited</code>, <code>Standard</code>, or <code>Bulk</code>. <code>Standard</code> is the default.',
        }),
    ).exactOptional(),
    InventoryRetrievalParameters: InventoryRetrievalJobInputSchema.and(
      z.any().openapi({ description: 'Input parameters used for range inventory retrieval.' }),
    ).exactOptional(),
    SelectParameters: SelectParametersSchema.and(
      z.any().openapi({ description: 'Contains the parameters that define a job.' }),
    ).exactOptional(),
    OutputLocation: OutputLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains information about the location where the select job results are stored.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides options for defining a job.', required: [] })
  .openapi('JobParameters')

const InitiateJobInputSchema = z
  .object({
    jobParameters: JobParametersSchema.and(
      z.any().openapi({ description: 'Provides options for specifying job information.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'InitiateJobInput',
    description: 'Provides options for initiating an Amazon S3 Glacier job.',
    required: [],
  })
  .openapi('InitiateJobInput')

const InitiateMultipartUploadInputSchema = z
  .object({})
  .openapi({
    title: 'InitiateMultipartUploadInput',
    description:
      'Provides options for initiating a multipart upload to an Amazon S3 Glacier vault.',
  })
  .openapi('InitiateMultipartUploadInput')

const VaultLockPolicySchema = z
  .object({
    Policy: StringSchema.and(
      z.any().openapi({ description: 'The vault lock policy.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains the vault lock policy.', required: [] })
  .openapi('VaultLockPolicy')

const InitiateVaultLockInputSchema = z
  .object({
    policy: VaultLockPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'The vault lock policy as a JSON string, which uses "\\" as an escape character.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'InitiateVaultLockInput',
    description: 'The input values for <code>InitiateVaultLock</code>.',
    required: [],
  })
  .openapi('InitiateVaultLockInput')

const ListJobsInputSchema = z
  .object({})
  .openapi({
    title: 'ListJobsInput',
    description: 'Provides options for retrieving a job list for an Amazon S3 Glacier vault.',
  })
  .openapi('ListJobsInput')

const ListMultipartUploadsInputSchema = z
  .object({})
  .openapi({
    title: 'ListMultipartUploadsInput',
    description:
      'Provides options for retrieving list of in-progress multipart uploads for an Amazon Glacier vault.',
  })
  .openapi('ListMultipartUploadsInput')

const ListPartsInputSchema = z
  .object({})
  .openapi({
    title: 'ListPartsInput',
    description:
      'Provides options for retrieving a list of parts of an archive that have been uploaded in a specific multipart upload.',
  })
  .openapi('ListPartsInput')

const ListProvisionedCapacityInputSchema = z
  .object({})
  .openapi({ title: 'ListProvisionedCapacityInput' })
  .openapi('ListProvisionedCapacityInput')

const ListTagsForVaultInputSchema = z
  .object({})
  .openapi({
    title: 'ListTagsForVaultInput',
    description: 'The input value for <code>ListTagsForVaultInput</code>.',
  })
  .openapi('ListTagsForVaultInput')

const ListVaultsInputSchema = z
  .object({})
  .openapi({
    title: 'ListVaultsInput',
    description:
      "Provides options to retrieve the vault list owned by the calling user's account. The list provides metadata information for each vault.",
  })
  .openapi('ListVaultsInput')

const PurchaseProvisionedCapacityInputSchema = z
  .object({})
  .openapi({ title: 'PurchaseProvisionedCapacityInput' })
  .openapi('PurchaseProvisionedCapacityInput')

const TagKeyListSchema = z.array(StringSchema).openapi('TagKeyList')

const RemoveTagsFromVaultInputSchema = z
  .object({
    TagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of tag keys. Each corresponding tag is removed from the vault.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'RemoveTagsFromVaultInput',
    description: 'The input value for <code>RemoveTagsFromVaultInput</code>.',
    required: [],
  })
  .openapi('RemoveTagsFromVaultInput')

const SetDataRetrievalPolicyInputSchema = z
  .object({
    Policy: DataRetrievalPolicySchema.and(
      z.any().openapi({ description: 'The data retrieval policy in JSON format.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'SetDataRetrievalPolicyInput',
    description: 'SetDataRetrievalPolicy input.',
    required: [],
  })
  .openapi('SetDataRetrievalPolicyInput')

const SetVaultAccessPolicyInputSchema = z
  .object({
    policy: VaultAccessPolicySchema.and(
      z.any().openapi({ description: 'The vault access policy as a JSON string.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'SetVaultAccessPolicyInput',
    description: 'SetVaultAccessPolicy input.',
    required: [],
  })
  .openapi('SetVaultAccessPolicyInput')

const SetVaultNotificationsInputSchema = z
  .object({
    vaultNotificationConfig: VaultNotificationConfigSchema.and(
      z
        .any()
        .openapi({ description: 'Provides options for specifying notification configuration.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'SetVaultNotificationsInput',
    description:
      'Provides options to configure notifications that will be sent when specific events happen to a vault.',
    required: [],
  })
  .openapi('SetVaultNotificationsInput')

const TagKeySchema = z.string().openapi('TagKey')

const UploadArchiveInputSchema = z
  .object({
    body: StreamSchema.and(z.any().openapi({ description: 'The data to upload.' })).exactOptional(),
  })
  .openapi({
    title: 'UploadArchiveInput',
    description: 'Provides options to add an archive to a vault.',
    required: [],
  })
  .openapi('UploadArchiveInput')

const UploadMultipartPartInputSchema = z
  .object({
    body: StreamSchema.and(z.any().openapi({ description: 'The data to upload.' })).exactOptional(),
  })
  .openapi({
    title: 'UploadMultipartPartInput',
    description: 'Provides options to upload a part of an archive in a multipart upload operation.',
    required: [],
  })
  .openapi('UploadMultipartPartInput')

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

export const getAccountIdVaultsVaultNameMultipartUploadsUploadIdRoute = createRoute({
  method: 'get',
  path: '/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}',
  description:
    '<p>This operation lists the parts of an archive that have been uploaded in a specific multipart upload. You can make this request at any time during an in-progress multipart upload before you complete the upload (see <a>CompleteMultipartUpload</a>. List Parts returns an error for completed uploads. The list returned in the List Parts response is sorted by part range. </p> <p>The List Parts operation supports pagination. By default, this operation returns up to 50 uploaded parts in the response. You should always check the response for a <code>marker</code> at which to continue the list; if there are no more items the <code>marker</code> is <code>null</code>. To return a list of parts that begins at a specific part, set the <code>marker</code> request parameter to the value you obtained from a previous List Parts request. You can also limit the number of parts returned in the response by specifying the <code>limit</code> parameter in the request. </p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don\'t have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-parts.html">List Parts</a> in the <i>Amazon Glacier Developer Guide</i>.</p>',
  operationId: 'ListParts',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. ",
            schema: { type: 'string' },
          },
        }),
      vaultName: z
        .string()
        .openapi({
          param: {
            name: 'vaultName',
            in: 'path',
            required: true,
            description: 'The name of the vault.',
            schema: { type: 'string' },
          },
        }),
      uploadId: z
        .string()
        .openapi({
          param: {
            name: 'uploadId',
            in: 'path',
            required: true,
            description: 'The upload ID of the multipart upload.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            required: false,
            description:
              'An opaque string used for pagination. This value specifies the part at which the listing of parts should begin. Get the marker value from the response of a previous List Parts response. You need only include the marker if you are continuing the pagination of results started in a previous List Parts request.',
            schema: { type: 'string' },
          },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The maximum number of parts to be returned. The default limit is 50. The number of parts returned might be fewer than the specified limit, but the number of returned parts never exceeds the limit.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPartsOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const putAccountIdVaultsVaultNameMultipartUploadsUploadIdRoute = createRoute({
  method: 'put',
  path: '/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}',
  description:
    '<p>This operation uploads a part of an archive. You can upload archive parts in any order. You can also upload them in parallel. You can upload up to 10,000 parts for a multipart upload.</p> <p>Amazon Glacier rejects your upload part request if any of the following conditions is true:</p> <ul> <li> <p> <b>SHA256 tree hash does not match</b>To ensure that part data is not corrupted in transmission, you compute a SHA256 tree hash of the part and include it in your request. Upon receiving the part data, Amazon S3 Glacier also computes a SHA256 tree hash. If these hash values don\'t match, the operation fails. For information about computing a SHA256 tree hash, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/checksum-calculations.html">Computing Checksums</a>.</p> </li> <li> <p> <b>Part size does not match</b>The size of each part except the last must match the size specified in the corresponding <a>InitiateMultipartUpload</a> request. The size of the last part must be the same size as, or smaller than, the specified size.</p> <note> <p>If you upload a part whose size is smaller than the part size you specified in your initiate multipart upload request and that part is not the last part, then the upload part request will succeed. However, the subsequent Complete Multipart Upload request will fail.</p> </note> </li> <li> <p> <b>Range does not align</b>The byte range value in the request does not align with the part size specified in the corresponding initiate request. For example, if you specify a part size of 4194304 bytes (4 MB), then 0 to 4194303 bytes (4 MB - 1) and 4194304 (4 MB) to 8388607 (8 MB - 1) are valid part ranges. However, if you set a range value of 2 MB to 6 MB, the range does not align with the part size and the upload will fail. </p> </li> </ul> <p>This operation is idempotent. If you upload the same part multiple times, the data included in the most recent request overwrites the previously uploaded data.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don\'t have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-archive-mpu.html">Uploading Large Archives in Parts (Multipart Upload)</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-upload-part.html">Upload Part </a> in the <i>Amazon Glacier Developer Guide</i>.</p>',
  operationId: 'UploadMultipartPart',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-sha256-tree-hash': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-sha256-tree-hash',
            in: 'header',
            required: false,
            description: 'The SHA256 tree hash of the data being uploaded.',
            schema: { type: 'string' },
          },
        }),
      'Content-Range': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Content-Range',
            in: 'header',
            required: false,
            description:
              'Identifies the range of bytes in the assembled archive that will be uploaded in this part. Amazon S3 Glacier uses this information to assemble the archive in the proper sequence. The format of this header follows RFC 2616. An example header is Content-Range:bytes 0-4194303/*.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. ",
            schema: { type: 'string' },
          },
        }),
      vaultName: z
        .string()
        .openapi({
          param: {
            name: 'vaultName',
            in: 'path',
            required: true,
            description: 'The name of the vault.',
            schema: { type: 'string' },
          },
        }),
      uploadId: z
        .string()
        .openapi({
          param: {
            name: 'uploadId',
            in: 'path',
            required: true,
            description: 'The upload ID of the multipart upload.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              body: z.string().exactOptional().openapi({ description: 'The data to upload.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: UploadMultipartPartOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'RequestTimeoutException',
      content: { 'application/json': { schema: RequestTimeoutExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postAccountIdVaultsVaultNameMultipartUploadsUploadIdRoute = createRoute({
  method: 'post',
  path: '/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}',
  description:
    '<p>You call this operation to inform Amazon S3 Glacier (Glacier) that all the archive parts have been uploaded and that Glacier can now assemble the archive from the uploaded parts. After assembling and saving the archive to the vault, Glacier returns the URI path of the newly created archive resource. Using the URI path, you can then access the archive. After you upload an archive, you should save the archive ID returned to retrieve the archive at a later point. You can also get the vault inventory to obtain a list of archive IDs in a vault. For more information, see <a>InitiateJob</a>.</p> <p>In the request, you must include the computed SHA256 tree hash of the entire archive you have uploaded. For information about computing a SHA256 tree hash, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/checksum-calculations.html">Computing Checksums</a>. On the server side, Glacier also constructs the SHA256 tree hash of the assembled archive. If the values match, Glacier saves the archive to the vault; otherwise, it returns an error, and the operation fails. The <a>ListParts</a> operation returns a list of parts uploaded for a specific multipart upload. It includes checksum information for each uploaded part that can be used to debug a bad checksum issue.</p> <p>Additionally, Glacier also checks for any missing content ranges when assembling the archive, if missing content ranges are found, Glacier returns an error and the operation fails.</p> <p>Complete Multipart Upload is an idempotent operation. After your first successful complete multipart upload, if you call the operation again within a short period, the operation will succeed and return the same archive ID. This is useful in the event you experience a network issue that causes an aborted connection or receive a 500 server error, in which case you can repeat your Complete Multipart Upload request and get the same archive ID without creating duplicate archives. Note, however, that after the multipart upload completes, you cannot call the List Parts operation and the multipart upload will not appear in List Multipart Uploads response, even if idempotent complete is possible.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don\'t have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-archive-mpu.html">Uploading Large Archives in Parts (Multipart Upload)</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-complete-upload.html">Complete Multipart Upload</a> in the <i>Amazon Glacier Developer Guide</i>. </p>',
  operationId: 'CompleteMultipartUpload',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-archive-size': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-archive-size',
            in: 'header',
            required: false,
            description:
              'The total size, in bytes, of the entire archive. This value should be the sum of all the sizes of the individual parts that you uploaded.',
            schema: { type: 'string' },
          },
        }),
      'x-amz-sha256-tree-hash': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-sha256-tree-hash',
            in: 'header',
            required: false,
            description:
              'The SHA256 tree hash of the entire archive. It is the tree hash of SHA256 tree hash of the individual parts. If the value you specify in the request does not match the SHA256 tree hash of the final assembled archive as computed by Amazon S3 Glacier (Glacier), Glacier returns an error and the request fails.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.",
            schema: { type: 'string' },
          },
        }),
      vaultName: z
        .string()
        .openapi({
          param: {
            name: 'vaultName',
            in: 'path',
            required: true,
            description: 'The name of the vault.',
            schema: { type: 'string' },
          },
        }),
      uploadId: z
        .string()
        .openapi({
          param: {
            name: 'uploadId',
            in: 'path',
            required: true,
            description: 'The upload ID of the multipart upload.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: ArchiveCreationOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteAccountIdVaultsVaultNameMultipartUploadsUploadIdRoute = createRoute({
  method: 'delete',
  path: '/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}',
  description:
    '<p>This operation aborts a multipart upload identified by the upload ID.</p> <p>After the Abort Multipart Upload request succeeds, you cannot upload any more parts to the multipart upload or complete the multipart upload. Aborting a completed upload fails. However, aborting an already-aborted upload will succeed, for a short time. For more information about uploading a part and completing a multipart upload, see <a>UploadMultipartPart</a> and <a>CompleteMultipartUpload</a>.</p> <p>This operation is idempotent.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don\'t have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-abort-upload.html">Abort Multipart Upload</a> in the <i>Amazon Glacier Developer Guide</i>. </p>',
  operationId: 'AbortMultipartUpload',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.",
            schema: { type: 'string' },
          },
        }),
      vaultName: z
        .string()
        .openapi({
          param: {
            name: 'vaultName',
            in: 'path',
            required: true,
            description: 'The name of the vault.',
            schema: { type: 'string' },
          },
        }),
      uploadId: z
        .string()
        .openapi({
          param: {
            name: 'uploadId',
            in: 'path',
            required: true,
            description: 'The upload ID of the multipart upload to delete.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getAccountIdVaultsVaultNameLockPolicyRoute = createRoute({
  method: 'get',
  path: '/{accountId}/vaults/{vaultName}/lock-policy',
  description:
    '<p>This operation retrieves the following attributes from the <code>lock-policy</code> subresource set on the specified vault: </p> <ul> <li> <p>The vault lock policy set on the vault.</p> </li> <li> <p>The state of the vault lock, which is either <code>InProgess</code> or <code>Locked</code>.</p> </li> <li> <p>When the lock ID expires. The lock ID is used to complete the vault locking process.</p> </li> <li> <p>When the vault lock was initiated and put into the <code>InProgress</code> state.</p> </li> </ul> <p>A vault lock is put into the <code>InProgress</code> state by calling <a>InitiateVaultLock</a>. A vault lock is put into the <code>Locked</code> state by calling <a>CompleteVaultLock</a>. You can abort the vault locking process by calling <a>AbortVaultLock</a>. For more information about the vault locking process, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon Glacier Vault Lock</a>. </p> <p>If there is no vault lock policy set on the vault, the operation returns a <code>404 Not found</code> error. For more information about vault lock policies, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html">Amazon Glacier Access Control with Vault Lock Policies</a>. </p>',
  operationId: 'GetVaultLock',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.",
            schema: { type: 'string' },
          },
        }),
      vaultName: z
        .string()
        .openapi({
          param: {
            name: 'vaultName',
            in: 'path',
            required: true,
            description: 'The name of the vault.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetVaultLockOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postAccountIdVaultsVaultNameLockPolicyRoute = createRoute({
  method: 'post',
  path: '/{accountId}/vaults/{vaultName}/lock-policy',
  description:
    '<p>This operation initiates the vault locking process by doing the following:</p> <ul> <li> <p>Installing a vault lock policy on the specified vault.</p> </li> <li> <p>Setting the lock state of vault lock to <code>InProgress</code>.</p> </li> <li> <p>Returning a lock ID, which is used to complete the vault locking process.</p> </li> </ul> <p>You can set one vault lock policy for each vault and this policy can be up to 20 KB in size. For more information about vault lock policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html">Amazon Glacier Access Control with Vault Lock Policies</a>. </p> <p>You must complete the vault locking process within 24 hours after the vault lock enters the <code>InProgress</code> state. After the 24 hour window ends, the lock ID expires, the vault automatically exits the <code>InProgress</code> state, and the vault lock policy is removed from the vault. You call <a>CompleteVaultLock</a> to complete the vault locking process by setting the state of the vault lock to <code>Locked</code>. </p> <p>After a vault lock is in the <code>Locked</code> state, you cannot initiate a new vault lock for the vault.</p> <p>You can abort the vault locking process by calling <a>AbortVaultLock</a>. You can get the state of the vault lock by calling <a>GetVaultLock</a>. For more information about the vault locking process, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon Glacier Vault Lock</a>.</p> <p>If this operation is called when the vault lock is in the <code>InProgress</code> state, the operation returns an <code>AccessDeniedException</code> error. When the vault lock is in the <code>InProgress</code> state you must call <a>AbortVaultLock</a> before you can initiate a new vault lock policy. </p>',
  operationId: 'InitiateVaultLock',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.",
            schema: { type: 'string' },
          },
        }),
      vaultName: z
        .string()
        .openapi({
          param: {
            name: 'vaultName',
            in: 'path',
            required: true,
            description: 'The name of the vault.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              policy: z
                .object({
                  Policy: StringSchema.and(
                    z.any().openapi({ description: 'The vault lock policy.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Contains the vault lock policy.', required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: InitiateVaultLockOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteAccountIdVaultsVaultNameLockPolicyRoute = createRoute({
  method: 'delete',
  path: '/{accountId}/vaults/{vaultName}/lock-policy',
  description:
    '<p>This operation aborts the vault locking process if the vault lock is not in the <code>Locked</code> state. If the vault lock is in the <code>Locked</code> state when this operation is requested, the operation returns an <code>AccessDeniedException</code> error. Aborting the vault locking process removes the vault lock policy from the specified vault. </p> <p>A vault lock is put into the <code>InProgress</code> state by calling <a>InitiateVaultLock</a>. A vault lock is put into the <code>Locked</code> state by calling <a>CompleteVaultLock</a>. You can get the state of a vault lock by calling <a>GetVaultLock</a>. For more information about the vault locking process, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon Glacier Vault Lock</a>. For more information about vault lock policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html">Amazon Glacier Access Control with Vault Lock Policies</a>. </p> <p>This operation is idempotent. You can successfully invoke this operation multiple times, if the vault lock is in the <code>InProgress</code> state or if there is no policy associated with the vault.</p>',
  operationId: 'AbortVaultLock',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.",
            schema: { type: 'string' },
          },
        }),
      vaultName: z
        .string()
        .openapi({
          param: {
            name: 'vaultName',
            in: 'path',
            required: true,
            description: 'The name of the vault.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postAccountIdVaultsVaultNameTagsOperationAddRoute = createRoute({
  method: 'post',
  path: '/{accountId}/vaults/{vaultName}/tags#operation=add',
  description:
    'This operation adds the specified tags to a vault. Each tag is composed of a key and a value. Each vault can have up to 10 tags. If your request would cause the tag limit for the vault to be exceeded, the operation throws the <code>LimitExceededException</code> error. If a tag already exists on the vault under a specified key, the existing key value will be overwritten. For more information about tags, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html">Tagging Amazon S3 Glacier Resources</a>. ',
  operationId: 'AddTagsToVault',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.",
            schema: { type: 'string' },
          },
        }),
      vaultName: z
        .string()
        .openapi({
          param: {
            name: 'vaultName',
            in: 'path',
            required: true,
            description: 'The name of the vault.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      operation: z
        .literal('add')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['add'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Tags: z
                .record(z.string(), TagValueSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The tags to add to the vault. Each tag is composed of a key and a value. The value can be an empty string.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postAccountIdVaultsVaultNameLockPolicyLockIdRoute = createRoute({
  method: 'post',
  path: '/{accountId}/vaults/{vaultName}/lock-policy/{lockId}',
  description:
    '<p>This operation completes the vault locking process by transitioning the vault lock from the <code>InProgress</code> state to the <code>Locked</code> state, which causes the vault lock policy to become unchangeable. A vault lock is put into the <code>InProgress</code> state by calling <a>InitiateVaultLock</a>. You can obtain the state of the vault lock by calling <a>GetVaultLock</a>. For more information about the vault locking process, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon Glacier Vault Lock</a>. </p> <p>This operation is idempotent. This request is always successful if the vault lock is in the <code>Locked</code> state and the provided lock ID matches the lock ID originally used to lock the vault.</p> <p>If an invalid lock ID is passed in the request when the vault lock is in the <code>Locked</code> state, the operation returns an <code>AccessDeniedException</code> error. If an invalid lock ID is passed in the request when the vault lock is in the <code>InProgress</code> state, the operation throws an <code>InvalidParameter</code> error.</p>',
  operationId: 'CompleteVaultLock',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.",
            schema: { type: 'string' },
          },
        }),
      vaultName: z
        .string()
        .openapi({
          param: {
            name: 'vaultName',
            in: 'path',
            required: true,
            description: 'The name of the vault.',
            schema: { type: 'string' },
          },
        }),
      lockId: z
        .string()
        .openapi({
          param: {
            name: 'lockId',
            in: 'path',
            required: true,
            description:
              'The <code>lockId</code> value is the lock ID obtained from a <a>InitiateVaultLock</a> request.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getAccountIdVaultsVaultNameRoute = createRoute({
  method: 'get',
  path: '/{accountId}/vaults/{vaultName}',
  description:
    '<p>This operation returns information about a vault, including the vault\'s Amazon Resource Name (ARN), the date the vault was created, the number of archives it contains, and the total size of all the archives in the vault. The number of archives and their total size are as of the last inventory generation. This means that if you add or remove an archive from a vault, and then immediately use Describe Vault, the change in contents will not be immediately reflected. If you want to retrieve the latest inventory of the vault, use <a>InitiateJob</a>. Amazon S3 Glacier generates vault inventories approximately daily. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-inventory.html">Downloading a Vault Inventory in Amazon S3 Glacier</a>. </p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don\'t have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/retrieving-vault-info.html">Retrieving Vault Metadata in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-get.html">Describe Vault </a> in the <i>Amazon Glacier Developer Guide</i>. </p>',
  operationId: 'DescribeVault',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. ",
            schema: { type: 'string' },
          },
        }),
      vaultName: z
        .string()
        .openapi({
          param: {
            name: 'vaultName',
            in: 'path',
            required: true,
            description: 'The name of the vault.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeVaultOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const putAccountIdVaultsVaultNameRoute = createRoute({
  method: 'put',
  path: '/{accountId}/vaults/{vaultName}',
  description:
    "<p>This operation creates a new vault with the specified name. The name of the vault must be unique within a region for an AWS account. You can create up to 1,000 vaults per account. If you need to create more vaults, contact Amazon S3 Glacier.</p> <p>You must use the following guidelines when naming a vault.</p> <ul> <li> <p>Names can be between 1 and 255 characters long.</p> </li> <li> <p>Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), and '.' (period).</p> </li> </ul> <p>This operation is idempotent.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href=\"https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html\">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href=\"https://docs.aws.amazon.com/amazonglacier/latest/dev/creating-vaults.html\">Creating a Vault in Amazon Glacier</a> and <a href=\"https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-put.html\">Create Vault </a> in the <i>Amazon Glacier Developer Guide</i>. </p>",
  operationId: 'CreateVault',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.",
            schema: { type: 'string' },
          },
        }),
      vaultName: z
        .string()
        .openapi({
          param: {
            name: 'vaultName',
            in: 'path',
            required: true,
            description: 'The name of the vault.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateVaultOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const deleteAccountIdVaultsVaultNameRoute = createRoute({
  method: 'delete',
  path: '/{accountId}/vaults/{vaultName}',
  description:
    '<p>This operation deletes a vault. Amazon S3 Glacier will delete a vault only if there are no archives in the vault as of the last inventory and there have been no writes to the vault since the last inventory. If either of these conditions is not satisfied, the vault deletion fails (that is, the vault is not removed) and Amazon S3 Glacier returns an error. You can use <a>DescribeVault</a> to return the number of archives in a vault, and you can use <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html">Initiate a Job (POST jobs)</a> to initiate a new inventory retrieval for a vault. The inventory contains the archive IDs you use to delete archives using <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-delete.html">Delete Archive (DELETE archive)</a>.</p> <p>This operation is idempotent.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don\'t have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/deleting-vaults.html">Deleting a Vault in Amazon Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-delete.html">Delete Vault </a> in the <i>Amazon S3 Glacier Developer Guide</i>. </p>',
  operationId: 'DeleteVault',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.",
            schema: { type: 'string' },
          },
        }),
      vaultName: z
        .string()
        .openapi({
          param: {
            name: 'vaultName',
            in: 'path',
            required: true,
            description: 'The name of the vault.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteAccountIdVaultsVaultNameArchivesArchiveIdRoute = createRoute({
  method: 'delete',
  path: '/{accountId}/vaults/{vaultName}/archives/{archiveId}',
  description:
    '<p>This operation deletes an archive from a vault. Subsequent requests to initiate a retrieval of this archive will fail. Archive retrievals that are in progress for this archive ID may or may not succeed according to the following scenarios:</p> <ul> <li> <p>If the archive retrieval job is actively preparing the data for download when Amazon S3 Glacier receives the delete archive request, the archival retrieval operation might fail.</p> </li> <li> <p>If the archive retrieval job has successfully prepared the archive for download when Amazon S3 Glacier receives the delete archive request, you will be able to download the output.</p> </li> </ul> <p>This operation is idempotent. Attempting to delete an already-deleted archive does not result in an error.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don\'t have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/deleting-an-archive.html">Deleting an Archive in Amazon Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-delete.html">Delete Archive</a> in the <i>Amazon Glacier Developer Guide</i>. </p>',
  operationId: 'DeleteArchive',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.",
            schema: { type: 'string' },
          },
        }),
      vaultName: z
        .string()
        .openapi({
          param: {
            name: 'vaultName',
            in: 'path',
            required: true,
            description: 'The name of the vault.',
            schema: { type: 'string' },
          },
        }),
      archiveId: z
        .string()
        .openapi({
          param: {
            name: 'archiveId',
            in: 'path',
            required: true,
            description: 'The ID of the archive to delete.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getAccountIdVaultsVaultNameAccessPolicyRoute = createRoute({
  method: 'get',
  path: '/{accountId}/vaults/{vaultName}/access-policy',
  description:
    'This operation retrieves the <code>access-policy</code> subresource set on the vault; for more information on setting this subresource, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-SetVaultAccessPolicy.html">Set Vault Access Policy (PUT access-policy)</a>. If there is no access policy set on the vault, the operation returns a <code>404 Not found</code> error. For more information about vault access policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html">Amazon Glacier Access Control with Vault Access Policies</a>.',
  operationId: 'GetVaultAccessPolicy',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.",
            schema: { type: 'string' },
          },
        }),
      vaultName: z
        .string()
        .openapi({
          param: {
            name: 'vaultName',
            in: 'path',
            required: true,
            description: 'The name of the vault.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetVaultAccessPolicyOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const putAccountIdVaultsVaultNameAccessPolicyRoute = createRoute({
  method: 'put',
  path: '/{accountId}/vaults/{vaultName}/access-policy',
  description:
    'This operation configures an access policy for a vault and will overwrite an existing policy. To configure a vault access policy, send a PUT request to the <code>access-policy</code> subresource of the vault. An access policy is specific to a vault and is also called a vault subresource. You can set one access policy per vault and the policy can be up to 20 KB in size. For more information about vault access policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html">Amazon Glacier Access Control with Vault Access Policies</a>. ',
  operationId: 'SetVaultAccessPolicy',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.",
            schema: { type: 'string' },
          },
        }),
      vaultName: z
        .string()
        .openapi({
          param: {
            name: 'vaultName',
            in: 'path',
            required: true,
            description: 'The name of the vault.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              policy: z
                .object({
                  Policy: StringSchema.and(
                    z.any().openapi({ description: 'The vault access policy.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Contains the vault access policy.', required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteAccountIdVaultsVaultNameAccessPolicyRoute = createRoute({
  method: 'delete',
  path: '/{accountId}/vaults/{vaultName}/access-policy',
  description:
    '<p>This operation deletes the access policy associated with the specified vault. The operation is eventually consistent; that is, it might take some time for Amazon S3 Glacier to completely remove the access policy, and you might still see the effect of the policy for a short time after you send the delete request.</p> <p>This operation is idempotent. You can invoke delete multiple times, even if there is no policy associated with the vault. For more information about vault access policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html">Amazon Glacier Access Control with Vault Access Policies</a>. </p>',
  operationId: 'DeleteVaultAccessPolicy',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. ",
            schema: { type: 'string' },
          },
        }),
      vaultName: z
        .string()
        .openapi({
          param: {
            name: 'vaultName',
            in: 'path',
            required: true,
            description: 'The name of the vault.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getAccountIdVaultsVaultNameNotificationConfigurationRoute = createRoute({
  method: 'get',
  path: '/{accountId}/vaults/{vaultName}/notification-configuration',
  description:
    '<p>This operation retrieves the <code>notification-configuration</code> subresource of the specified vault.</p> <p>For information about setting a notification configuration on a vault, see <a>SetVaultNotifications</a>. If a notification configuration for a vault is not set, the operation returns a <code>404 Not Found</code> error. For more information about vault notifications, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html">Configuring Vault Notifications in Amazon S3 Glacier</a>. </p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don\'t have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html">Configuring Vault Notifications in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-get.html">Get Vault Notification Configuration </a> in the <i>Amazon Glacier Developer Guide</i>. </p>',
  operationId: 'GetVaultNotifications',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.",
            schema: { type: 'string' },
          },
        }),
      vaultName: z
        .string()
        .openapi({
          param: {
            name: 'vaultName',
            in: 'path',
            required: true,
            description: 'The name of the vault.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetVaultNotificationsOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const putAccountIdVaultsVaultNameNotificationConfigurationRoute = createRoute({
  method: 'put',
  path: '/{accountId}/vaults/{vaultName}/notification-configuration',
  description:
    '<p>This operation configures notifications that will be sent when specific events happen to a vault. By default, you don\'t get any notifications.</p> <p>To configure vault notifications, send a PUT request to the <code>notification-configuration</code> subresource of the vault. The request should include a JSON document that provides an Amazon SNS topic and specific events for which you want Amazon S3 Glacier to send notifications to the topic.</p> <p>Amazon SNS topics must grant permission to the vault to be allowed to publish notifications to the topic. You can configure a vault to publish a notification for the following vault events:</p> <ul> <li> <p> <b>ArchiveRetrievalCompleted</b> This event occurs when a job that was initiated for an archive retrieval is completed (<a>InitiateJob</a>). The status of the completed job can be "Succeeded" or "Failed". The notification sent to the SNS topic is the same output as returned from <a>DescribeJob</a>. </p> </li> <li> <p> <b>InventoryRetrievalCompleted</b> This event occurs when a job that was initiated for an inventory retrieval is completed (<a>InitiateJob</a>). The status of the completed job can be "Succeeded" or "Failed". The notification sent to the SNS topic is the same output as returned from <a>DescribeJob</a>. </p> </li> </ul> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don\'t have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html">Configuring Vault Notifications in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-put.html">Set Vault Notification Configuration </a> in the <i>Amazon Glacier Developer Guide</i>. </p>',
  operationId: 'SetVaultNotifications',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.",
            schema: { type: 'string' },
          },
        }),
      vaultName: z
        .string()
        .openapi({
          param: {
            name: 'vaultName',
            in: 'path',
            required: true,
            description: 'The name of the vault.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              vaultNotificationConfig: z
                .object({
                  SNSTopic: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Simple Notification Service (Amazon SNS) topic Amazon Resource Name (ARN).',
                      }),
                  ).exactOptional(),
                  Events: NotificationEventListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A list of one or more events for which Amazon S3 Glacier will send a notification to the specified Amazon SNS topic.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: "Represents a vault's notification configuration.",
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteAccountIdVaultsVaultNameNotificationConfigurationRoute = createRoute({
  method: 'delete',
  path: '/{accountId}/vaults/{vaultName}/notification-configuration',
  description:
    '<p>This operation deletes the notification configuration set for a vault. The operation is eventually consistent; that is, it might take some time for Amazon S3 Glacier to completely disable the notifications and you might still receive some notifications for a short time after you send the delete request.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don\'t have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html">Configuring Vault Notifications in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-delete.html">Delete Vault Notification Configuration </a> in the Amazon S3 Glacier Developer Guide. </p>',
  operationId: 'DeleteVaultNotifications',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. ",
            schema: { type: 'string' },
          },
        }),
      vaultName: z
        .string()
        .openapi({
          param: {
            name: 'vaultName',
            in: 'path',
            required: true,
            description: 'The name of the vault.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getAccountIdVaultsVaultNameJobsJobIdRoute = createRoute({
  method: 'get',
  path: '/{accountId}/vaults/{vaultName}/jobs/{jobId}',
  description:
    '<p>This operation returns information about a job you previously initiated, including the job initiation date, the user who initiated the job, the job status code/message and the Amazon SNS topic to notify after Amazon S3 Glacier (Glacier) completes the job. For more information about initiating a job, see <a>InitiateJob</a>. </p> <note> <p>This operation enables you to check the status of your job. However, it is strongly recommended that you set up an Amazon SNS topic and specify it in your initiate job request so that Glacier can notify the topic after it completes the job.</p> </note> <p>A job ID will not expire for at least 24 hours after Glacier completes the job.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don\'t have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For more information about using this operation, see the documentation for the underlying REST API <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-describe-job-get.html">Describe Job</a> in the <i>Amazon Glacier Developer Guide</i>. </p>',
  operationId: 'DescribeJob',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. ",
            schema: { type: 'string' },
          },
        }),
      vaultName: z
        .string()
        .openapi({
          param: {
            name: 'vaultName',
            in: 'path',
            required: true,
            description: 'The name of the vault.',
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            description: 'The ID of the job to describe.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GlacierJobDescriptionSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getAccountIdPoliciesDataRetrievalRoute = createRoute({
  method: 'get',
  path: '/{accountId}/policies/data-retrieval',
  description:
    'This operation returns the current data retrieval policy for the account and region specified in the GET request. For more information about data retrieval policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/data-retrieval-policy.html">Amazon Glacier Data Retrieval Policies</a>.',
  operationId: 'GetDataRetrievalPolicy',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID. ",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDataRetrievalPolicyOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const putAccountIdPoliciesDataRetrievalRoute = createRoute({
  method: 'put',
  path: '/{accountId}/policies/data-retrieval',
  description:
    '<p>This operation sets and then enacts a data retrieval policy in the region specified in the PUT request. You can set one policy per region for an AWS account. The policy is enacted within a few minutes of a successful PUT operation.</p> <p>The set policy operation does not affect retrieval jobs that were in progress before the policy was enacted. For more information about data retrieval policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/data-retrieval-policy.html">Amazon Glacier Data Retrieval Policies</a>. </p>',
  operationId: 'SetDataRetrievalPolicy',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.",
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Policy: z
                .object({
                  Rules: DataRetrievalRulesListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The policy rule. Although this is a list type, currently there must be only one rule, which contains a Strategy field and optionally a BytesPerHour field.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Data retrieval policy.', required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getAccountIdVaultsVaultNameJobsJobIdOutputRoute = createRoute({
  method: 'get',
  path: '/{accountId}/vaults/{vaultName}/jobs/{jobId}/output',
  description:
    '<p>This operation downloads the output of the job you initiated using <a>InitiateJob</a>. Depending on the job type you specified when you initiated the job, the output will be either the content of an archive or a vault inventory.</p> <p>You can download all the job output or download a portion of the output by specifying a byte range. In the case of an archive retrieval job, depending on the byte range you specify, Amazon S3 Glacier (Glacier) returns the checksum for the portion of the data. You can compute the checksum on the client and verify that the values match to ensure the portion you downloaded is the correct data.</p> <p>A job ID will not expire for at least 24 hours after Glacier completes the job. That a byte range. For both archive and inventory retrieval jobs, you should verify the downloaded size against the size returned in the headers from the <b>Get Job Output</b> response.</p> <p>For archive retrieval jobs, you should also verify that the size is what you expected. If you download a portion of the output, the expected size is based on the range of bytes you specified. For example, if you specify a range of <code>bytes=0-1048575</code>, you should verify your download size is 1,048,576 bytes. If you download an entire archive, the expected size is the size of the archive when you uploaded it to Amazon S3 Glacier The expected size is also returned in the headers from the <b>Get Job Output</b> response.</p> <p>In the case of an archive retrieval job, depending on the byte range you specify, Glacier returns the checksum for the portion of the data. To ensure the portion you downloaded is the correct data, compute the checksum on the client, verify that the values match, and verify that the size is what you expected.</p> <p>A job ID does not expire for at least 24 hours after Glacier completes the job. That is, you can download the job output within the 24 hours period after Amazon Glacier completes the job.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don\'t have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-inventory.html">Downloading a Vault Inventory</a>, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/downloading-an-archive.html">Downloading an Archive</a>, and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-job-output-get.html">Get Job Output </a> </p>',
  operationId: 'GetJobOutput',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Range',
            in: 'header',
            required: false,
            description:
              '<p>The range of bytes to retrieve from the output. For example, if you want to download the first 1,048,576 bytes, specify the range as <code>bytes=0-1048575</code>. By default, this operation downloads the entire output.</p> <p>If the job output is large, then you can use a range to retrieve a portion of the output. This allows you to download the entire output in smaller chunks of bytes. For example, suppose you have 1 GB of job output you want to download and you decide to download 128 MB chunks of data at a time, which is a total of eight Get Job Output requests. You use the following process to download the job output:</p> <ol> <li> <p>Download a 128 MB chunk of output by specifying the appropriate byte range. Verify that all 128 MB of data was received.</p> </li> <li> <p>Along with the data, the response includes a SHA256 tree hash of the payload. You compute the checksum of the payload on the client and compare it with the checksum you received in the response to ensure you received all the expected data.</p> </li> <li> <p>Repeat steps 1 and 2 for all the eight 128 MB chunks of output data, each time specifying the appropriate byte range.</p> </li> <li> <p>After downloading all the parts of the job output, you have a list of eight checksum values. Compute the tree hash of these values to find the checksum of the entire output. Using the <a>DescribeJob</a> API, obtain job information of the job that provided you the output. The response includes the checksum of the entire archive stored in Amazon S3 Glacier. You compare this value with the checksum you computed to ensure you have downloaded the entire archive content with no errors.</p> <p/> </li> </ol>',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.",
            schema: { type: 'string' },
          },
        }),
      vaultName: z
        .string()
        .openapi({
          param: {
            name: 'vaultName',
            in: 'path',
            required: true,
            description: 'The name of the vault.',
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            description: 'The job ID whose data is downloaded.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetJobOutputOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getAccountIdVaultsVaultNameJobsRoute = createRoute({
  method: 'get',
  path: '/{accountId}/vaults/{vaultName}/jobs',
  description:
    '<p>This operation lists jobs for a vault, including jobs that are in-progress and jobs that have recently finished. The List Job operation returns a list of these jobs sorted by job initiation time.</p> <note> <p>Amazon Glacier retains recently completed jobs for a period before deleting them; however, it eventually removes completed jobs. The output of completed jobs can be retrieved. Retaining completed jobs for a period of time after they have completed enables you to get a job output in the event you miss the job completion notification or your first attempt to download it fails. For example, suppose you start an archive retrieval job to download an archive. After the job completes, you start to download the archive but encounter a network error. In this scenario, you can retry and download the archive while the job exists.</p> </note> <p>The List Jobs operation supports pagination. You should always check the response <code>Marker</code> field. If there are no more jobs to list, the <code>Marker</code> field is set to <code>null</code>. If there are more jobs to list, the <code>Marker</code> field is set to a non-null value, which you can use to continue the pagination of the list. To return a list of jobs that begins at a specific job, set the marker request parameter to the <code>Marker</code> value for that job that you obtained from a previous List Jobs request.</p> <p>You can set a maximum limit for the number of jobs returned in the response by specifying the <code>limit</code> parameter in the request. The default limit is 50. The number of jobs returned might be fewer than the limit, but the number of returned jobs never exceeds the limit.</p> <p>Additionally, you can filter the jobs list returned by specifying the optional <code>statuscode</code> parameter or <code>completed</code> parameter, or both. Using the <code>statuscode</code> parameter, you can specify to return only jobs that match either the <code>InProgress</code>, <code>Succeeded</code>, or <code>Failed</code> status. Using the <code>completed</code> parameter, you can specify to return only jobs that were completed (<code>true</code>) or jobs that were not completed (<code>false</code>).</p> <p>For more information about using this operation, see the documentation for the underlying REST API <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-jobs-get.html">List Jobs</a>. </p>',
  operationId: 'ListJobs',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. ",
            schema: { type: 'string' },
          },
        }),
      vaultName: z
        .string()
        .openapi({
          param: {
            name: 'vaultName',
            in: 'path',
            required: true,
            description: 'The name of the vault.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The maximum number of jobs to be returned. The default limit is 50. The number of jobs returned might be fewer than the specified limit, but the number of returned jobs never exceeds the limit.',
            schema: { type: 'string' },
          },
        }),
      marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            required: false,
            description:
              'An opaque string used for pagination. This value specifies the job at which the listing of jobs should begin. Get the marker value from a previous List Jobs response. You only need to include the marker if you are continuing the pagination of results started in a previous List Jobs request.',
            schema: { type: 'string' },
          },
        }),
      statuscode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'statuscode',
            in: 'query',
            required: false,
            description:
              'The type of job status to return. You can specify the following values: <code>InProgress</code>, <code>Succeeded</code>, or <code>Failed</code>.',
            schema: { type: 'string' },
          },
        }),
      completed: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'completed',
            in: 'query',
            required: false,
            description:
              'The state of the jobs to return. You can specify <code>true</code> or <code>false</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListJobsOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postAccountIdVaultsVaultNameJobsRoute = createRoute({
  method: 'post',
  path: '/{accountId}/vaults/{vaultName}/jobs',
  description:
    'This operation initiates a job of the specified type, which can be a select, an archival retrieval, or a vault retrieval. For more information about using this operation, see the documentation for the underlying REST API <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html">Initiate a Job</a>. ',
  operationId: 'InitiateJob',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.",
            schema: { type: 'string' },
          },
        }),
      vaultName: z
        .string()
        .openapi({
          param: {
            name: 'vaultName',
            in: 'path',
            required: true,
            description: 'The name of the vault.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              jobParameters: z
                .object({
                  Format: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'When initiating a job to retrieve a vault inventory, you can optionally add this parameter to your request to specify the output format. If you are initiating an inventory job and do not specify a Format field, JSON is the default format. Valid values are "CSV" and "JSON".',
                      }),
                  ).exactOptional(),
                  Type: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The job type. You can initiate a job to perform a select query on an archive, retrieve an archive, or get an inventory of a vault. Valid values are "select", "archive-retrieval" and "inventory-retrieval".',
                      }),
                  ).exactOptional(),
                  ArchiveId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The ID of the archive that you want to retrieve. This field is required only if <code>Type</code> is set to <code>select</code> or <code>archive-retrieval</code>code&gt;. An error occurs if you specify this request parameter for an inventory retrieval job request. ',
                      }),
                  ).exactOptional(),
                  Description: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The optional description for the job. The description must be less than or equal to 1,024 bytes. The allowable characters are 7-bit ASCII without control codes-specifically, ASCII values 32-126 decimal or 0x20-0x7E hexadecimal.',
                      }),
                  ).exactOptional(),
                  SNSTopic: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon SNS topic ARN to which Amazon S3 Glacier sends a notification when the job is completed and the output is ready for you to download. The specified topic publishes the notification to its subscribers. The SNS topic must exist.',
                      }),
                  ).exactOptional(),
                  RetrievalByteRange: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The byte range to retrieve for an archive retrieval. in the form "<i>StartByteValue</i>-<i>EndByteValue</i>" If not specified, the whole archive is retrieved. If specified, the byte range must be megabyte (1024*1024) aligned which means that <i>StartByteValue</i> must be divisible by 1 MB and <i>EndByteValue</i> plus 1 must be divisible by 1 MB or be the end of the archive specified as the archive byte size value minus 1. If RetrievalByteRange is not megabyte aligned, this operation returns a 400 response. </p> <p>An error occurs if you specify this field for an inventory retrieval job request.</p>',
                      }),
                  ).exactOptional(),
                  Tier: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The tier to use for a select or an archive retrieval job. Valid values are <code>Expedited</code>, <code>Standard</code>, or <code>Bulk</code>. <code>Standard</code> is the default.',
                      }),
                  ).exactOptional(),
                  InventoryRetrievalParameters: InventoryRetrievalJobInputSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Input parameters used for range inventory retrieval.',
                      }),
                  ).exactOptional(),
                  SelectParameters: SelectParametersSchema.and(
                    z.any().openapi({ description: 'Contains the parameters that define a job.' }),
                  ).exactOptional(),
                  OutputLocation: OutputLocationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Contains information about the location where the select job results are stored.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Provides options for defining a job.', required: [] }),
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
      content: { 'application/json': { schema: InitiateJobOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'PolicyEnforcedException',
      content: { 'application/json': { schema: PolicyEnforcedExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    484: {
      description: 'InsufficientCapacityException',
      content: { 'application/json': { schema: InsufficientCapacityExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getAccountIdVaultsVaultNameMultipartUploadsRoute = createRoute({
  method: 'get',
  path: '/{accountId}/vaults/{vaultName}/multipart-uploads',
  description:
    '<p>This operation lists in-progress multipart uploads for the specified vault. An in-progress multipart upload is a multipart upload that has been initiated by an <a>InitiateMultipartUpload</a> request, but has not yet been completed or aborted. The list returned in the List Multipart Upload response has no guaranteed order. </p> <p>The List Multipart Uploads operation supports pagination. By default, this operation returns up to 50 multipart uploads in the response. You should always check the response for a <code>marker</code> at which to continue the list; if there are no more items the <code>marker</code> is <code>null</code>. To return a list of multipart uploads that begins at a specific upload, set the <code>marker</code> request parameter to the value you obtained from a previous List Multipart Upload request. You can also limit the number of uploads returned in the response by specifying the <code>limit</code> parameter in the request.</p> <p>Note the difference between this operation and listing parts (<a>ListParts</a>). The List Multipart Uploads operation lists all multipart uploads for a vault and does not require a multipart upload ID. The List Parts operation requires a multipart upload ID since parts are associated with a single upload.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don\'t have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-uploads.html">List Multipart Uploads </a> in the <i>Amazon Glacier Developer Guide</i>.</p>',
  operationId: 'ListMultipartUploads',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. ",
            schema: { type: 'string' },
          },
        }),
      vaultName: z
        .string()
        .openapi({
          param: {
            name: 'vaultName',
            in: 'path',
            required: true,
            description: 'The name of the vault.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            required: false,
            description:
              'An opaque string used for pagination. This value specifies the upload at which the listing of uploads should begin. Get the marker value from a previous List Uploads response. You need only include the marker if you are continuing the pagination of results started in a previous List Uploads request.',
            schema: { type: 'string' },
          },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'Specifies the maximum number of uploads returned in the response body. If this value is not specified, the List Uploads operation returns up to 50 uploads.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListMultipartUploadsOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postAccountIdVaultsVaultNameMultipartUploadsRoute = createRoute({
  method: 'post',
  path: '/{accountId}/vaults/{vaultName}/multipart-uploads',
  description:
    '<p>This operation initiates a multipart upload. Amazon S3 Glacier creates a multipart upload resource and returns its ID in the response. The multipart upload ID is used in subsequent requests to upload parts of an archive (see <a>UploadMultipartPart</a>).</p> <p>When you initiate a multipart upload, you specify the part size in number of bytes. The part size must be a megabyte (1024 KB) multiplied by a power of 2-for example, 1048576 (1 MB), 2097152 (2 MB), 4194304 (4 MB), 8388608 (8 MB), and so on. The minimum allowable part size is 1 MB, and the maximum is 4 GB.</p> <p>Every part you upload to this resource (see <a>UploadMultipartPart</a>), except the last one, must have the same size. The last one can be the same size or smaller. For example, suppose you want to upload a 16.2 MB file. If you initiate the multipart upload with a part size of 4 MB, you will upload four parts of 4 MB each and one part of 0.2 MB. </p> <note> <p>You don\'t need to know the size of the archive when you start a multipart upload because Amazon S3 Glacier does not require you to specify the overall archive size.</p> </note> <p>After you complete the multipart upload, Amazon S3 Glacier (Glacier) removes the multipart upload resource referenced by the ID. Glacier also removes the multipart upload resource if you cancel the multipart upload or it may be removed if there is no activity for a period of 24 hours.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don\'t have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-archive-mpu.html">Uploading Large Archives in Parts (Multipart Upload)</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-initiate-upload.html">Initiate Multipart Upload</a> in the <i>Amazon Glacier Developer Guide</i>.</p>',
  operationId: 'InitiateMultipartUpload',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-archive-description': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-archive-description',
            in: 'header',
            required: false,
            description:
              '<p>The archive description that you are uploading in parts.</p> <p>The part size must be a megabyte (1024 KB) multiplied by a power of 2, for example 1048576 (1 MB), 2097152 (2 MB), 4194304 (4 MB), 8388608 (8 MB), and so on. The minimum allowable part size is 1 MB, and the maximum is 4 GB (4096 MB).</p>',
            schema: { type: 'string' },
          },
        }),
      'x-amz-part-size': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-part-size',
            in: 'header',
            required: false,
            description:
              'The size of each part except the last, in bytes. The last part can be smaller than this part size.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. ",
            schema: { type: 'string' },
          },
        }),
      vaultName: z
        .string()
        .openapi({
          param: {
            name: 'vaultName',
            in: 'path',
            required: true,
            description: 'The name of the vault.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: InitiateMultipartUploadOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getAccountIdProvisionedCapacityRoute = createRoute({
  method: 'get',
  path: '/{accountId}/provisioned-capacity',
  description: 'This operation lists the provisioned capacity units for the specified AWS account.',
  operationId: 'ListProvisionedCapacity',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, don't include any hyphens ('-') in the ID. ",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListProvisionedCapacityOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postAccountIdProvisionedCapacityRoute = createRoute({
  method: 'post',
  path: '/{accountId}/provisioned-capacity',
  description: 'This operation purchases a provisioned capacity unit for an AWS account. ',
  operationId: 'PurchaseProvisionedCapacity',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, don't include any hyphens ('-') in the ID. ",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: PurchaseProvisionedCapacityOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getAccountIdVaultsVaultNameTagsRoute = createRoute({
  method: 'get',
  path: '/{accountId}/vaults/{vaultName}/tags',
  description:
    'This operation lists all the tags attached to a vault. The operation returns an empty map if there are no tags. For more information about tags, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html">Tagging Amazon S3 Glacier Resources</a>.',
  operationId: 'ListTagsForVault',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.",
            schema: { type: 'string' },
          },
        }),
      vaultName: z
        .string()
        .openapi({
          param: {
            name: 'vaultName',
            in: 'path',
            required: true,
            description: 'The name of the vault.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForVaultOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getAccountIdVaultsRoute = createRoute({
  method: 'get',
  path: '/{accountId}/vaults',
  description:
    '<p>This operation lists all vaults owned by the calling user\'s account. The list returned in the response is ASCII-sorted by vault name.</p> <p>By default, this operation returns up to 10 items. If there are more vaults to list, the response <code>marker</code> field contains the vault Amazon Resource Name (ARN) at which to continue the list with a new List Vaults request; otherwise, the <code>marker</code> field is <code>null</code>. To return a list of vaults that begins at a specific vault, set the <code>marker</code> request parameter to the vault ARN you obtained from a previous List Vaults request. You can also limit the number of vaults returned in the response by specifying the <code>limit</code> parameter in the request. </p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don\'t have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/retrieving-vault-info.html">Retrieving Vault Metadata in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vaults-get.html">List Vaults </a> in the <i>Amazon Glacier Developer Guide</i>. </p>',
  operationId: 'ListVaults',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.",
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            required: false,
            description:
              'A string used for pagination. The marker specifies the vault ARN after which the listing of vaults should begin.',
            schema: { type: 'string' },
          },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The maximum number of vaults to be returned. The default limit is 10. The number of vaults returned might be fewer than the specified limit, but the number of returned vaults never exceeds the limit.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListVaultsOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postAccountIdVaultsVaultNameTagsOperationRemoveRoute = createRoute({
  method: 'post',
  path: '/{accountId}/vaults/{vaultName}/tags#operation=remove',
  description:
    'This operation removes one or more tags from the set of tags attached to a vault. For more information about tags, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html">Tagging Amazon S3 Glacier Resources</a>. This operation is idempotent. The operation will be successful, even if there are no tags attached to the vault. ',
  operationId: 'RemoveTagsFromVault',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.",
            schema: { type: 'string' },
          },
        }),
      vaultName: z
        .string()
        .openapi({
          param: {
            name: 'vaultName',
            in: 'path',
            required: true,
            description: 'The name of the vault.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      operation: z
        .literal('remove')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['remove'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TagKeys: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of tag keys. Each corresponding tag is removed from the vault.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postAccountIdVaultsVaultNameArchivesRoute = createRoute({
  method: 'post',
  path: '/{accountId}/vaults/{vaultName}/archives',
  description:
    '<p>This operation adds an archive to a vault. This is a synchronous operation, and for a successful upload, your data is durably persisted. Amazon S3 Glacier returns the archive ID in the <code>x-amz-archive-id</code> header of the response. </p> <p>You must use the archive ID to access your data in Amazon S3 Glacier. After you upload an archive, you should save the archive ID returned so that you can retrieve or delete the archive later. Besides saving the archive ID, you can also index it and give it a friendly name to allow for better searching. You can also use the optional archive description field to specify how the archive is referred to in an external index of archives, such as you might create in Amazon DynamoDB. You can also get the vault inventory to obtain a list of archive IDs in a vault. For more information, see <a>InitiateJob</a>. </p> <p>You must provide a SHA256 tree hash of the data you are uploading. For information about computing a SHA256 tree hash, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/checksum-calculations.html">Computing Checksums</a>. </p> <p>You can optionally specify an archive description of up to 1,024 printable ASCII characters. You can get the archive description when you either retrieve the archive or get the vault inventory. For more information, see <a>InitiateJob</a>. Amazon Glacier does not interpret the description in any way. An archive description does not need to be unique. You cannot use the description to retrieve or sort the archive list. </p> <p>Archives are immutable. After you upload an archive, you cannot edit the archive or its description.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don\'t have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-an-archive.html">Uploading an Archive in Amazon Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-post.html">Upload Archive</a> in the <i>Amazon Glacier Developer Guide</i>. </p>',
  operationId: 'UploadArchive',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-archive-description': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-archive-description',
            in: 'header',
            required: false,
            description: 'The optional description of the archive you are uploading.',
            schema: { type: 'string' },
          },
        }),
      'x-amz-sha256-tree-hash': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-sha256-tree-hash',
            in: 'header',
            required: false,
            description: 'The SHA256 tree hash of the data being uploaded.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      vaultName: z
        .string()
        .openapi({
          param: {
            name: 'vaultName',
            in: 'path',
            required: true,
            description: 'The name of the vault.',
            schema: { type: 'string' },
          },
        }),
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description:
              "The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. ",
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              body: z.string().exactOptional().openapi({ description: 'The data to upload.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: ArchiveCreationOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'RequestTimeoutException',
      content: { 'application/json': { schema: RequestTimeoutExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})
