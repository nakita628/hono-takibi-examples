import { createRoute, z } from '@hono/zod-openapi'

const UniqueIdSchema = z
  .string()
  .regex(/^[A-Za-z-0-9]+$/)
  .length(22)
  .openapi('UniqueId')

const CancelJournalKinesisStreamResponseSchema = z
  .object({
    StreamId: UniqueIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The UUID (Base62-encoded text) of the canceled QLDB journal stream.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CancelJournalKinesisStreamResponse')

const InvalidParameterExceptionSchema = z.any().openapi('InvalidParameterException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ResourcePreconditionNotMetExceptionSchema = z
  .any()
  .openapi('ResourcePreconditionNotMetException')

const LedgerNameSchema = z
  .string()
  .regex(/(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$/)
  .min(1)
  .max(32)
  .openapi('LedgerName')

const ArnSchema = z.string().min(20).max(1600).openapi('Arn')

const LedgerStateSchema = z
  .enum(['CREATING', 'ACTIVE', 'DELETING', 'DELETED'])
  .openapi('LedgerState')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const PermissionsModeSchema = z.enum(['ALLOW_ALL', 'STANDARD']).openapi('PermissionsMode')

const DeletionProtectionSchema = z.boolean().openapi('DeletionProtection')

const CreateLedgerResponseSchema = z
  .object({
    Name: LedgerNameSchema.and(
      z.any().openapi({ description: 'The name of the ledger.' }),
    ).exactOptional(),
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the ledger.' }),
    ).exactOptional(),
    State: LedgerStateSchema.and(
      z.any().openapi({ description: 'The current status of the ledger.' }),
    ).exactOptional(),
    CreationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in epoch time format, when the ledger was created. (Epoch time format is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.)',
        }),
    ).exactOptional(),
    PermissionsMode: PermissionsModeSchema.and(
      z.any().openapi({ description: 'The permissions mode of the ledger that you created.' }),
    ).exactOptional(),
    DeletionProtection: DeletionProtectionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The flag that prevents a ledger from being deleted by any user. If not provided on ledger creation, this feature is enabled (<code>true</code>) by default.</p> <p>If deletion protection is enabled, you must first disable it before you can delete the ledger. You can disable it by calling the <code>UpdateLedger</code> operation to set the flag to <code>false</code>.</p>',
        }),
    ).exactOptional(),
    KmsKeyArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the customer managed KMS key that the ledger uses for encryption at rest. If this parameter is undefined, the ledger uses an Amazon Web Services owned KMS key for encryption.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateLedgerResponse')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const ResourceAlreadyExistsExceptionSchema = z.any().openapi('ResourceAlreadyExistsException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const StreamStatusSchema = z
  .enum(['ACTIVE', 'COMPLETED', 'CANCELED', 'FAILED', 'IMPAIRED'])
  .openapi('StreamStatus')

const BooleanSchema = z.boolean().openapi('Boolean')

const KinesisConfigurationSchema = z
  .object({
    StreamArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the Kinesis Data Streams resource.',
        }),
    ),
    AggregationEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Enables QLDB to publish multiple data records in a single Kinesis Data Streams record, increasing the number of records sent per API call.</p> <p> <i>This option is enabled by default.</i> Record aggregation has important implications for processing records and requires de-aggregation in your stream consumer. To learn more, see <a href="https://docs.aws.amazon.com/streams/latest/dev/kinesis-kpl-concepts.html">KPL Key Concepts</a> and <a href="https://docs.aws.amazon.com/streams/latest/dev/kinesis-kpl-consumer-deaggregation.html">Consumer De-aggregation</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['StreamArn'],
    description:
      'The configuration settings of the Amazon Kinesis Data Streams destination for an Amazon QLDB journal stream.',
  })
  .openapi('KinesisConfiguration')

const ErrorCauseSchema = z
  .enum(['KINESIS_STREAM_NOT_FOUND', 'IAM_PERMISSION_REVOKED'])
  .openapi('ErrorCause')

const StreamNameSchema = z
  .string()
  .regex(/(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$/)
  .min(1)
  .max(32)
  .openapi('StreamName')

const JournalKinesisStreamDescriptionSchema = z
  .object({
    LedgerName: LedgerNameSchema.and(z.any().openapi({ description: 'The name of the ledger.' })),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in epoch time format, when the QLDB journal stream was created. (Epoch time format is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.)',
        }),
    ).exactOptional(),
    InclusiveStartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The inclusive start date and time from which to start streaming journal data.',
        }),
    ).exactOptional(),
    ExclusiveEndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The exclusive date and time that specifies when the stream ends. If this parameter is undefined, the stream runs indefinitely until you cancel it.',
        }),
    ).exactOptional(),
    RoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a journal stream to write data records to a Kinesis Data Streams resource.',
        }),
    ),
    StreamId: UniqueIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The UUID (represented in Base62-encoded text) of the QLDB journal stream.',
        }),
    ),
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the QLDB journal stream.' }),
    ).exactOptional(),
    Status: StreamStatusSchema.and(
      z.any().openapi({ description: 'The current state of the QLDB journal stream.' }),
    ),
    KinesisConfiguration: KinesisConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration settings of the Amazon Kinesis Data Streams destination for a QLDB journal stream.',
        }),
    ),
    ErrorCause: ErrorCauseSchema.and(
      z
        .any()
        .openapi({
          description:
            'The error message that describes the reason that a stream has a status of <code>IMPAIRED</code> or <code>FAILED</code>. This is not applicable to streams that have other status values.',
        }),
    ).exactOptional(),
    StreamName: StreamNameSchema.and(
      z.any().openapi({ description: 'The user-defined name of the QLDB journal stream.' }),
    ),
  })
  .openapi({
    required: ['LedgerName', 'RoleArn', 'StreamId', 'Status', 'KinesisConfiguration', 'StreamName'],
    description:
      'Information about an Amazon QLDB journal stream, including the Amazon Resource Name (ARN), stream name, creation time, current status, and the parameters of the original stream creation request.',
  })
  .openapi('JournalKinesisStreamDescription')

const DescribeJournalKinesisStreamResponseSchema = z
  .object({
    Stream: JournalKinesisStreamDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the QLDB journal stream returned by a <code>DescribeJournalS3Export</code> request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeJournalKinesisStreamResponse')

const ExportStatusSchema = z.enum(['IN_PROGRESS', 'COMPLETED', 'CANCELLED']).openapi('ExportStatus')

const S3BucketSchema = z
  .string()
  .regex(/^[A-Za-z-0-9-_.]+$/)
  .min(3)
  .max(255)
  .openapi('S3Bucket')

const S3PrefixSchema = z.string().min(0).max(128).openapi('S3Prefix')

const S3ObjectEncryptionTypeSchema = z
  .enum(['SSE_KMS', 'SSE_S3', 'NO_ENCRYPTION'])
  .openapi('S3ObjectEncryptionType')

const S3EncryptionConfigurationSchema = z
  .object({
    ObjectEncryptionType: S3ObjectEncryptionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon S3 object encryption type.</p> <p>To learn more about server-side encryption options in Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html">Protecting Data Using Server-Side Encryption</a> in the <i>Amazon S3 Developer Guide</i>.</p>',
        }),
    ),
    KmsKeyArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of a symmetric key in Key Management Service (KMS). Amazon S3 does not support asymmetric KMS keys.</p> <p>You must provide a <code>KmsKeyArn</code> if you specify <code>SSE_KMS</code> as the <code>ObjectEncryptionType</code>.</p> <p> <code>KmsKeyArn</code> is not required if you specify <code>SSE_S3</code> as the <code>ObjectEncryptionType</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ObjectEncryptionType'],
    description:
      'The encryption settings that are used by a journal export job to write data in an Amazon Simple Storage Service (Amazon S3) bucket.',
  })
  .openapi('S3EncryptionConfiguration')

const S3ExportConfigurationSchema = z
  .object({
    Bucket: S3BucketSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon S3 bucket name in which a journal export job writes the journal contents.</p> <p>The bucket name must comply with the Amazon S3 bucket naming conventions. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html">Bucket Restrictions and Limitations</a> in the <i>Amazon S3 Developer Guide</i>.</p>',
        }),
    ),
    Prefix: S3PrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The prefix for the Amazon S3 bucket in which a journal export job writes the journal contents.</p> <p>The prefix must comply with Amazon S3 key naming rules and restrictions. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html">Object Key and Metadata</a> in the <i>Amazon S3 Developer Guide</i>.</p> <p>The following are examples of valid <code>Prefix</code> values:</p> <ul> <li> <p> <code>JournalExports-ForMyLedger/Testing/</code> </p> </li> <li> <p> <code>JournalExports</code> </p> </li> <li> <p> <code>My:Tests/</code> </p> </li> </ul>',
        }),
    ),
    EncryptionConfiguration: S3EncryptionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The encryption settings that are used by a journal export job to write data in an Amazon S3 bucket.',
        }),
    ),
  })
  .openapi({
    required: ['Bucket', 'Prefix', 'EncryptionConfiguration'],
    description:
      'The Amazon Simple Storage Service (Amazon S3) bucket location in which a journal export job writes the journal contents.',
  })
  .openapi('S3ExportConfiguration')

const OutputFormatSchema = z.enum(['ION_BINARY', 'ION_TEXT', 'JSON']).openapi('OutputFormat')

const JournalS3ExportDescriptionSchema = z
  .object({
    LedgerName: LedgerNameSchema.and(z.any().openapi({ description: 'The name of the ledger.' })),
    ExportId: UniqueIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The UUID (represented in Base62-encoded text) of the journal export job.',
        }),
    ),
    ExportCreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in epoch time format, when the export job was created. (Epoch time format is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.)',
        }),
    ),
    Status: ExportStatusSchema.and(
      z.any().openapi({ description: 'The current state of the journal export job.' }),
    ),
    InclusiveStartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The inclusive start date and time for the range of journal contents that was specified in the original export request.',
        }),
    ),
    ExclusiveEndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The exclusive end date and time for the range of journal contents that was specified in the original export request.',
        }),
    ),
    S3ExportConfiguration: S3ExportConfigurationSchema,
    RoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a journal export job to do the following:</p> <ul> <li> <p>Write objects into your Amazon Simple Storage Service (Amazon S3) bucket.</p> </li> <li> <p>(Optional) Use your customer managed key in Key Management Service (KMS) for server-side encryption of your exported data.</p> </li> </ul>',
        }),
    ),
    OutputFormat: OutputFormatSchema.and(
      z.any().openapi({ description: 'The output format of the exported journal data.' }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'LedgerName',
      'ExportId',
      'ExportCreationTime',
      'Status',
      'InclusiveStartTime',
      'ExclusiveEndTime',
      'S3ExportConfiguration',
      'RoleArn',
    ],
    description:
      'Information about a journal export job, including the ledger name, export ID, creation time, current status, and the parameters of the original export creation request.',
  })
  .openapi('JournalS3ExportDescription')

const DescribeJournalS3ExportResponseSchema = z
  .object({
    ExportDescription: JournalS3ExportDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the journal export job returned by a <code>DescribeJournalS3Export</code> request.',
        }),
    ),
  })
  .openapi({ required: ['ExportDescription'] })
  .openapi('DescribeJournalS3ExportResponse')

const EncryptionStatusSchema = z
  .enum(['ENABLED', 'UPDATING', 'KMS_KEY_INACCESSIBLE'])
  .openapi('EncryptionStatus')

const LedgerEncryptionDescriptionSchema = z
  .object({
    KmsKeyArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the customer managed KMS key that the ledger uses for encryption at rest. If this parameter is undefined, the ledger uses an Amazon Web Services owned KMS key for encryption.',
        }),
    ),
    EncryptionStatus: EncryptionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current state of encryption at rest for the ledger. This can be one of the following values:</p> <ul> <li> <p> <code>ENABLED</code>: Encryption is fully enabled using the specified key.</p> </li> <li> <p> <code>UPDATING</code>: The ledger is actively processing the specified key change.</p> <p>Key changes in QLDB are asynchronous. The ledger is fully accessible without any performance impact while the key change is being processed. The amount of time it takes to update a key varies depending on the ledger size.</p> </li> <li> <p> <code>KMS_KEY_INACCESSIBLE</code>: The specified customer managed KMS key is not accessible, and the ledger is impaired. Either the key was disabled or deleted, or the grants on the key were revoked. When a ledger is impaired, it is not accessible and does not accept any read or write requests.</p> <p>An impaired ledger automatically returns to an active state after you restore the grants on the key, or re-enable the key that was disabled. However, deleting a customer managed KMS key is irreversible. After a key is deleted, you can no longer access the ledgers that are protected with that key, and the data becomes unrecoverable permanently.</p> </li> </ul>',
        }),
    ),
    InaccessibleKmsKeyDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The date and time, in epoch time format, when the KMS key first became inaccessible, in the case of an error. (Epoch time format is the number of seconds that have elapsed since 12:00:00 AM January 1, 1970 UTC.)</p> <p>This parameter is undefined if the KMS key is accessible.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['KmsKeyArn', 'EncryptionStatus'],
    description:
      '<p>Information about the encryption of data at rest in an Amazon QLDB ledger. This includes the current status, the key in Key Management Service (KMS), and when the key became inaccessible (in the case of an error).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/encryption-at-rest.html">Encryption at rest</a> in the <i>Amazon QLDB Developer Guide</i>.</p>',
  })
  .openapi('LedgerEncryptionDescription')

const DescribeLedgerResponseSchema = z
  .object({
    Name: LedgerNameSchema.and(
      z.any().openapi({ description: 'The name of the ledger.' }),
    ).exactOptional(),
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the ledger.' }),
    ).exactOptional(),
    State: LedgerStateSchema.and(
      z.any().openapi({ description: 'The current status of the ledger.' }),
    ).exactOptional(),
    CreationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in epoch time format, when the ledger was created. (Epoch time format is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.)',
        }),
    ).exactOptional(),
    PermissionsMode: PermissionsModeSchema.and(
      z.any().openapi({ description: 'The permissions mode of the ledger.' }),
    ).exactOptional(),
    DeletionProtection: DeletionProtectionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The flag that prevents a ledger from being deleted by any user. If not provided on ledger creation, this feature is enabled (<code>true</code>) by default.</p> <p>If deletion protection is enabled, you must first disable it before you can delete the ledger. You can disable it by calling the <code>UpdateLedger</code> operation to set the flag to <code>false</code>.</p>',
        }),
    ).exactOptional(),
    EncryptionDescription: LedgerEncryptionDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the encryption of data at rest in the ledger. This includes the current status, the KMS key, and when the key became inaccessible (in the case of an error).',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeLedgerResponse')

const ExportJournalToS3ResponseSchema = z
  .object({
    ExportId: UniqueIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The UUID (represented in Base62-encoded text) that QLDB assigns to each journal export job.</p> <p>To describe your export request and check the status of the job, you can use <code>ExportId</code> to call <code>DescribeJournalS3Export</code>.</p>',
        }),
    ),
  })
  .openapi({ required: ['ExportId'] })
  .openapi('ExportJournalToS3Response')

const IonTextSchema = z.string().min(1).max(1048576).openapi('IonText')

const ValueHolderSchema = z
  .object({
    IonText: IonTextSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Ion plaintext value contained in a <code>ValueHolder</code> structure.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A structure that can contain a value in multiple encoding formats.',
    required: [],
  })
  .openapi('ValueHolder')

const GetBlockResponseSchema = z
  .object({
    Block: ValueHolderSchema.and(
      z.any().openapi({ description: 'The block data object in Amazon Ion format.' }),
    ),
    Proof: ValueHolderSchema.and(
      z
        .any()
        .openapi({
          description:
            'The proof object in Amazon Ion format returned by a <code>GetBlock</code> request. A proof contains the list of hash values required to recalculate the specified digest using a Merkle tree, starting with the specified block.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Block'] })
  .openapi('GetBlockResponse')

const DigestSchema = z.string().length(32).openapi('Digest')

const GetDigestResponseSchema = z
  .object({
    Digest: DigestSchema.and(
      z
        .any()
        .openapi({
          description:
            'The 256-bit hash value representing the digest returned by a <code>GetDigest</code> request.',
        }),
    ),
    DigestTipAddress: ValueHolderSchema.and(
      z
        .any()
        .openapi({
          description:
            'The latest block location covered by the digest that you requested. An address is an Amazon Ion structure that has two fields: <code>strandId</code> and <code>sequenceNo</code>.',
        }),
    ),
  })
  .openapi({ required: ['Digest', 'DigestTipAddress'] })
  .openapi('GetDigestResponse')

const GetRevisionResponseSchema = z
  .object({
    Proof: ValueHolderSchema.and(
      z
        .any()
        .openapi({
          description:
            'The proof object in Amazon Ion format returned by a <code>GetRevision</code> request. A proof contains the list of hash values that are required to recalculate the specified digest using a Merkle tree, starting with the specified document revision.',
        }),
    ).exactOptional(),
    Revision: ValueHolderSchema.and(
      z.any().openapi({ description: 'The document revision data object in Amazon Ion format.' }),
    ),
  })
  .openapi({ required: ['Revision'] })
  .openapi('GetRevisionResponse')

const JournalKinesisStreamDescriptionListSchema = z
  .array(JournalKinesisStreamDescriptionSchema)
  .openapi('JournalKinesisStreamDescriptionList')

const NextTokenSchema = z
  .string()
  .regex(/^[A-Za-z-0-9+\/=]+$/)
  .min(4)
  .max(1024)
  .openapi('NextToken')

const ListJournalKinesisStreamsForLedgerResponseSchema = z
  .object({
    Streams: JournalKinesisStreamDescriptionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The array of QLDB journal stream descriptors that are associated with the given ledger.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<ul> <li> <p>If <code>NextToken</code> is empty, the last page of results has been processed and there are no more results to be retrieved.</p> </li> <li> <p>If <code>NextToken</code> is <i>not</i> empty, more results are available. To retrieve the next page of results, use the value of <code>NextToken</code> in a subsequent <code>ListJournalKinesisStreamsForLedger</code> call.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListJournalKinesisStreamsForLedgerResponse')

const JournalS3ExportListSchema = z
  .array(JournalS3ExportDescriptionSchema)
  .openapi('JournalS3ExportList')

const ListJournalS3ExportsResponseSchema = z
  .object({
    JournalS3Exports: JournalS3ExportListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The array of journal export job descriptions for all ledgers that are associated with the current Amazon Web Services account and Region.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<ul> <li> <p>If <code>NextToken</code> is empty, then the last page of results has been processed and there are no more results to be retrieved.</p> </li> <li> <p>If <code>NextToken</code> is <i>not</i> empty, then there are more results available. To retrieve the next page of results, use the value of <code>NextToken</code> in a subsequent <code>ListJournalS3Exports</code> call.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListJournalS3ExportsResponse')

const ListJournalS3ExportsForLedgerResponseSchema = z
  .object({
    JournalS3Exports: JournalS3ExportListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The array of journal export job descriptions that are associated with the specified ledger.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<ul> <li> <p>If <code>NextToken</code> is empty, then the last page of results has been processed and there are no more results to be retrieved.</p> </li> <li> <p>If <code>NextToken</code> is <i>not</i> empty, then there are more results available. To retrieve the next page of results, use the value of <code>NextToken</code> in a subsequent <code>ListJournalS3ExportsForLedger</code> call.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListJournalS3ExportsForLedgerResponse')

const LedgerSummarySchema = z
  .object({
    Name: LedgerNameSchema.and(
      z.any().openapi({ description: 'The name of the ledger.' }),
    ).exactOptional(),
    State: LedgerStateSchema.and(
      z.any().openapi({ description: 'The current status of the ledger.' }),
    ).exactOptional(),
    CreationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in epoch time format, when the ledger was created. (Epoch time format is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.)',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about a ledger, including its name, state, and when it was created.',
    required: [],
  })
  .openapi('LedgerSummary')

const LedgerListSchema = z.array(LedgerSummarySchema).openapi('LedgerList')

const ListLedgersResponseSchema = z
  .object({
    Ledgers: LedgerListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The array of ledger summaries that are associated with the current Amazon Web Services account and Region.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A pagination token, indicating whether there are more results available:</p> <ul> <li> <p>If <code>NextToken</code> is empty, then the last page of results has been processed and there are no more results to be retrieved.</p> </li> <li> <p>If <code>NextToken</code> is <i>not</i> empty, then there are more results available. To retrieve the next page of results, use the value of <code>NextToken</code> in a subsequent <code>ListLedgers</code> call.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListLedgersResponse')

const TagsSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 200)
  .openapi('Tags')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags that are currently associated with the specified Amazon QLDB resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const StreamJournalToKinesisResponseSchema = z
  .object({
    StreamId: UniqueIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The UUID (represented in Base62-encoded text) that QLDB assigns to each QLDB journal stream.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StreamJournalToKinesisResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const UpdateLedgerResponseSchema = z
  .object({
    Name: LedgerNameSchema.and(
      z.any().openapi({ description: 'The name of the ledger.' }),
    ).exactOptional(),
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the ledger.' }),
    ).exactOptional(),
    State: LedgerStateSchema.and(
      z.any().openapi({ description: 'The current status of the ledger.' }),
    ).exactOptional(),
    CreationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in epoch time format, when the ledger was created. (Epoch time format is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.)',
        }),
    ).exactOptional(),
    DeletionProtection: DeletionProtectionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The flag that prevents a ledger from being deleted by any user. If not provided on ledger creation, this feature is enabled (<code>true</code>) by default.</p> <p>If deletion protection is enabled, you must first disable it before you can delete the ledger. You can disable it by calling the <code>UpdateLedger</code> operation to set the flag to <code>false</code>.</p>',
        }),
    ).exactOptional(),
    EncryptionDescription: LedgerEncryptionDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the encryption of data at rest in the ledger. This includes the current status, the KMS key, and when the key became inaccessible (in the case of an error).',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateLedgerResponse')

const UpdateLedgerPermissionsModeResponseSchema = z
  .object({
    Name: LedgerNameSchema.and(
      z.any().openapi({ description: 'The name of the ledger.' }),
    ).exactOptional(),
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the ledger.' }),
    ).exactOptional(),
    PermissionsMode: PermissionsModeSchema.and(
      z.any().openapi({ description: 'The current permissions mode of the ledger.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateLedgerPermissionsModeResponse')

const CancelJournalKinesisStreamRequestSchema = z
  .object({})
  .openapi({ title: 'CancelJournalKinesisStreamRequest' })
  .openapi('CancelJournalKinesisStreamRequest')

const KmsKeySchema = z.string().max(1600).openapi('KmsKey')

const CreateLedgerRequestSchema = z
  .object({
    Name: LedgerNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the ledger that you want to create. The name must be unique among all of the ledgers in your Amazon Web Services account in the current Region.</p> <p>Naming constraints for ledger names are defined in <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/limits.html#limits.naming">Quotas in Amazon QLDB</a> in the <i>Amazon QLDB Developer Guide</i>.</p>',
        }),
    ),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key-value pairs to add as tags to the ledger that you want to create. Tag keys are case sensitive. Tag values are case sensitive and can be null.',
        }),
    ).exactOptional(),
    PermissionsMode: PermissionsModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The permissions mode to assign to the ledger that you want to create. This parameter can have one of the following values:</p> <ul> <li> <p> <code>ALLOW_ALL</code>: A legacy permissions mode that enables access control with API-level granularity for ledgers.</p> <p>This mode allows users who have the <code>SendCommand</code> API permission for this ledger to run all PartiQL commands (hence, <code>ALLOW_ALL</code>) on any tables in the specified ledger. This mode disregards any table-level or command-level IAM permissions policies that you create for the ledger.</p> </li> <li> <p> <code>STANDARD</code>: (<i>Recommended</i>) A permissions mode that enables access control with finer granularity for ledgers, tables, and PartiQL commands.</p> <p>By default, this mode denies all user requests to run any PartiQL commands on any tables in this ledger. To allow PartiQL commands to run, you must create IAM permissions policies for specific table resources and PartiQL actions, in addition to the <code>SendCommand</code> API permission for the ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-standard-mode.html">Getting started with the standard permissions mode</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> </ul> <note> <p>We strongly recommend using the <code>STANDARD</code> permissions mode to maximize the security of your ledger data.</p> </note>',
        }),
    ),
    DeletionProtection: DeletionProtectionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The flag that prevents a ledger from being deleted by any user. If not provided on ledger creation, this feature is enabled (<code>true</code>) by default.</p> <p>If deletion protection is enabled, you must first disable it before you can delete the ledger. You can disable it by calling the <code>UpdateLedger</code> operation to set the flag to <code>false</code>.</p>',
        }),
    ).exactOptional(),
    KmsKey: KmsKeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The key in Key Management Service (KMS) to use for encryption of data at rest in the ledger. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/encryption-at-rest.html">Encryption at rest</a> in the <i>Amazon QLDB Developer Guide</i>.</p> <p>Use one of the following options to specify this parameter:</p> <ul> <li> <p> <code>AWS_OWNED_KMS_KEY</code>: Use an KMS key that is owned and managed by Amazon Web Services on your behalf.</p> </li> <li> <p> <b>Undefined</b>: By default, use an Amazon Web Services owned KMS key.</p> </li> <li> <p> <b>A valid symmetric customer managed KMS key</b>: Use the specified KMS key in your account that you create, own, and manage.</p> <p>Amazon QLDB does not support asymmetric keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using symmetric and asymmetric keys</a> in the <i>Key Management Service Developer Guide</i>.</p> </li> </ul> <p>To specify a customer managed KMS key, you can use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with <code>"alias/"</code>. To specify a key in a different Amazon Web Services account, you must use the key ARN or alias ARN.</p> <p>For example:</p> <ul> <li> <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> <li> <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> <li> <p>Alias name: <code>alias/ExampleAlias</code> </p> </li> <li> <p>Alias ARN: <code>arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id">Key identifiers (KeyId)</a> in the <i>Key Management Service Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'PermissionsMode'], title: 'CreateLedgerRequest' })
  .openapi('CreateLedgerRequest')

const DeleteLedgerRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteLedgerRequest' })
  .openapi('DeleteLedgerRequest')

const DescribeJournalKinesisStreamRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeJournalKinesisStreamRequest' })
  .openapi('DescribeJournalKinesisStreamRequest')

const DescribeJournalS3ExportRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeJournalS3ExportRequest' })
  .openapi('DescribeJournalS3ExportRequest')

const DescribeLedgerRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeLedgerRequest' })
  .openapi('DescribeLedgerRequest')

const ExportJournalToS3RequestSchema = z
  .object({
    InclusiveStartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The inclusive start date and time for the range of journal contents to export.</p> <p>The <code>InclusiveStartTime</code> must be in <code>ISO 8601</code> date and time format and in Universal Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code>.</p> <p>The <code>InclusiveStartTime</code> must be before <code>ExclusiveEndTime</code>.</p> <p>If you provide an <code>InclusiveStartTime</code> that is before the ledger's <code>CreationDateTime</code>, Amazon QLDB defaults it to the ledger's <code>CreationDateTime</code>.</p>",
        }),
    ),
    ExclusiveEndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The exclusive end date and time for the range of journal contents to export.</p> <p>The <code>ExclusiveEndTime</code> must be in <code>ISO 8601</code> date and time format and in Universal Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code>.</p> <p>The <code>ExclusiveEndTime</code> must be less than or equal to the current UTC date and time.</p>',
        }),
    ),
    S3ExportConfiguration: S3ExportConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration settings of the Amazon S3 bucket destination for your export request.',
        }),
    ),
    RoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a journal export job to do the following:</p> <ul> <li> <p>Write objects into your Amazon Simple Storage Service (Amazon S3) bucket.</p> </li> <li> <p>(Optional) Use your customer managed key in Key Management Service (KMS) for server-side encryption of your exported data.</p> </li> </ul> <p>To pass a role to QLDB when requesting a journal export, you must have permissions to perform the <code>iam:PassRole</code> action on the IAM role resource. This is required for all journal export requests.</p>',
        }),
    ),
    OutputFormat: OutputFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The output format of your exported journal data. If this parameter is not specified, the exported data defaults to <code>ION_TEXT</code> format.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['InclusiveStartTime', 'ExclusiveEndTime', 'S3ExportConfiguration', 'RoleArn'],
    title: 'ExportJournalToS3Request',
  })
  .openapi('ExportJournalToS3Request')

const GetBlockRequestSchema = z
  .object({
    BlockAddress: ValueHolderSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The location of the block that you want to request. An address is an Amazon Ion structure that has two fields: <code>strandId</code> and <code>sequenceNo</code>.</p> <p>For example: <code>{strandId:"BlFTjlSXze9BIh1KOszcE3",sequenceNo:14}</code>.</p>',
        }),
    ),
    DigestTipAddress: ValueHolderSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The latest block location covered by the digest for which to request a proof. An address is an Amazon Ion structure that has two fields: <code>strandId</code> and <code>sequenceNo</code>.</p> <p>For example: <code>{strandId:"BlFTjlSXze9BIh1KOszcE3",sequenceNo:49}</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['BlockAddress'], title: 'GetBlockRequest' })
  .openapi('GetBlockRequest')

const GetDigestRequestSchema = z
  .object({})
  .openapi({ title: 'GetDigestRequest' })
  .openapi('GetDigestRequest')

const GetRevisionRequestSchema = z
  .object({
    BlockAddress: ValueHolderSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The block location of the document revision to be verified. An address is an Amazon Ion structure that has two fields: <code>strandId</code> and <code>sequenceNo</code>.</p> <p>For example: <code>{strandId:"BlFTjlSXze9BIh1KOszcE3",sequenceNo:14}</code>.</p>',
        }),
    ),
    DocumentId: UniqueIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The UUID (represented in Base62-encoded text) of the document to be verified.',
        }),
    ),
    DigestTipAddress: ValueHolderSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The latest block location covered by the digest for which to request a proof. An address is an Amazon Ion structure that has two fields: <code>strandId</code> and <code>sequenceNo</code>.</p> <p>For example: <code>{strandId:"BlFTjlSXze9BIh1KOszcE3",sequenceNo:49}</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['BlockAddress', 'DocumentId'], title: 'GetRevisionRequest' })
  .openapi('GetRevisionRequest')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const ListJournalKinesisStreamsForLedgerRequestSchema = z
  .object({})
  .openapi({ title: 'ListJournalKinesisStreamsForLedgerRequest' })
  .openapi('ListJournalKinesisStreamsForLedgerRequest')

const ListJournalS3ExportsForLedgerRequestSchema = z
  .object({})
  .openapi({ title: 'ListJournalS3ExportsForLedgerRequest' })
  .openapi('ListJournalS3ExportsForLedgerRequest')

const ListJournalS3ExportsRequestSchema = z
  .object({})
  .openapi({ title: 'ListJournalS3ExportsRequest' })
  .openapi('ListJournalS3ExportsRequest')

const ListLedgersRequestSchema = z
  .object({})
  .openapi({ title: 'ListLedgersRequest' })
  .openapi('ListLedgersRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const StreamJournalToKinesisRequestSchema = z
  .object({
    RoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a journal stream to write data records to a Kinesis Data Streams resource.</p> <p>To pass a role to QLDB when requesting a journal stream, you must have permissions to perform the <code>iam:PassRole</code> action on the IAM role resource. This is required for all journal stream requests.</p>',
        }),
    ),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key-value pairs to add as tags to the stream that you want to create. Tag keys are case sensitive. Tag values are case sensitive and can be null.',
        }),
    ).exactOptional(),
    InclusiveStartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The inclusive start date and time from which to start streaming journal data. This parameter must be in <code>ISO 8601</code> date and time format and in Universal Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code>.</p> <p>The <code>InclusiveStartTime</code> cannot be in the future and must be before <code>ExclusiveEndTime</code>.</p> <p>If you provide an <code>InclusiveStartTime</code> that is before the ledger's <code>CreationDateTime</code>, QLDB effectively defaults it to the ledger's <code>CreationDateTime</code>.</p>",
        }),
    ),
    ExclusiveEndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The exclusive date and time that specifies when the stream ends. If you don't define this parameter, the stream runs indefinitely until you cancel it.</p> <p>The <code>ExclusiveEndTime</code> must be in <code>ISO 8601</code> date and time format and in Universal Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code>.</p>",
        }),
    ).exactOptional(),
    KinesisConfiguration: KinesisConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration settings of the Kinesis Data Streams destination for your stream request.',
        }),
    ),
    StreamName: StreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name that you want to assign to the QLDB journal stream. User-defined names can help identify and indicate the purpose of a stream.</p> <p>Your stream name must be unique among other <i>active</i> streams for a given ledger. Stream names have the same naming constraints as ledger names, as defined in <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/limits.html#limits.naming">Quotas in Amazon QLDB</a> in the <i>Amazon QLDB Developer Guide</i>.</p>',
        }),
    ),
  })
  .openapi({
    required: ['RoleArn', 'InclusiveStartTime', 'KinesisConfiguration', 'StreamName'],
    title: 'StreamJournalToKinesisRequest',
  })
  .openapi('StreamJournalToKinesisRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key-value pairs to add as tags to the specified QLDB resource. Tag keys are case sensitive. If you specify a key that already exists for the resource, your request fails and returns an error. Tag values are case sensitive and can be null.',
        }),
    ),
  })
  .openapi({ required: ['Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateLedgerPermissionsModeRequestSchema = z
  .object({
    PermissionsMode: PermissionsModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The permissions mode to assign to the ledger. This parameter can have one of the following values:</p> <ul> <li> <p> <code>ALLOW_ALL</code>: A legacy permissions mode that enables access control with API-level granularity for ledgers.</p> <p>This mode allows users who have the <code>SendCommand</code> API permission for this ledger to run all PartiQL commands (hence, <code>ALLOW_ALL</code>) on any tables in the specified ledger. This mode disregards any table-level or command-level IAM permissions policies that you create for the ledger.</p> </li> <li> <p> <code>STANDARD</code>: (<i>Recommended</i>) A permissions mode that enables access control with finer granularity for ledgers, tables, and PartiQL commands.</p> <p>By default, this mode denies all user requests to run any PartiQL commands on any tables in this ledger. To allow PartiQL commands to run, you must create IAM permissions policies for specific table resources and PartiQL actions, in addition to the <code>SendCommand</code> API permission for the ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-standard-mode.html">Getting started with the standard permissions mode</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> </ul> <note> <p>We strongly recommend using the <code>STANDARD</code> permissions mode to maximize the security of your ledger data.</p> </note>',
        }),
    ),
  })
  .openapi({ required: ['PermissionsMode'], title: 'UpdateLedgerPermissionsModeRequest' })
  .openapi('UpdateLedgerPermissionsModeRequest')

const UpdateLedgerRequestSchema = z
  .object({
    DeletionProtection: DeletionProtectionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The flag that prevents a ledger from being deleted by any user. If not provided on ledger creation, this feature is enabled (<code>true</code>) by default.</p> <p>If deletion protection is enabled, you must first disable it before you can delete the ledger. You can disable it by calling the <code>UpdateLedger</code> operation to set the flag to <code>false</code>.</p>',
        }),
    ).exactOptional(),
    KmsKey: KmsKeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The key in Key Management Service (KMS) to use for encryption of data at rest in the ledger. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/encryption-at-rest.html">Encryption at rest</a> in the <i>Amazon QLDB Developer Guide</i>.</p> <p>Use one of the following options to specify this parameter:</p> <ul> <li> <p> <code>AWS_OWNED_KMS_KEY</code>: Use an KMS key that is owned and managed by Amazon Web Services on your behalf.</p> </li> <li> <p> <b>Undefined</b>: Make no changes to the KMS key of the ledger.</p> </li> <li> <p> <b>A valid symmetric customer managed KMS key</b>: Use the specified KMS key in your account that you create, own, and manage.</p> <p>Amazon QLDB does not support asymmetric keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using symmetric and asymmetric keys</a> in the <i>Key Management Service Developer Guide</i>.</p> </li> </ul> <p>To specify a customer managed KMS key, you can use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with <code>"alias/"</code>. To specify a key in a different Amazon Web Services account, you must use the key ARN or alias ARN.</p> <p>For example:</p> <ul> <li> <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> <li> <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> <li> <p>Alias name: <code>alias/ExampleAlias</code> </p> </li> <li> <p>Alias ARN: <code>arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id">Key identifiers (KeyId)</a> in the <i>Key Management Service Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateLedgerRequest', required: [] })
  .openapi('UpdateLedgerRequest')

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

export const getLedgersNameJournalKinesisStreamsStreamIdRoute = createRoute({
  method: 'get',
  path: '/ledgers/{name}/journal-kinesis-streams/{streamId}',
  description:
    '<p>Returns detailed information about a given Amazon QLDB journal stream. The output includes the Amazon Resource Name (ARN), stream name, current status, creation time, and the parameters of the original stream creation request.</p> <p>This action does not return any expired journal streams. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/streams.create.html#streams.create.states.expiration">Expiration for terminal streams</a> in the <i>Amazon QLDB Developer Guide</i>.</p>',
  operationId: 'DescribeJournalKinesisStream',
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
      name: z
        .string()
        .regex(/(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$/)
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the ledger.',
            schema: {
              type: 'string',
              pattern: '(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$',
              minLength: 1,
              maxLength: 32,
            },
          },
        }),
      streamId: z
        .string()
        .regex(/^[A-Za-z-0-9]+$/)
        .length(22)
        .openapi({
          param: {
            name: 'streamId',
            in: 'path',
            required: true,
            description:
              'The UUID (represented in Base62-encoded text) of the QLDB journal stream to describe.',
            schema: { type: 'string', pattern: '^[A-Za-z-0-9]+$', minLength: 22, maxLength: 22 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeJournalKinesisStreamResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourcePreconditionNotMetException',
      content: { 'application/json': { schema: ResourcePreconditionNotMetExceptionSchema } },
    },
  },
})

export const deleteLedgersNameJournalKinesisStreamsStreamIdRoute = createRoute({
  method: 'delete',
  path: '/ledgers/{name}/journal-kinesis-streams/{streamId}',
  description:
    "<p>Ends a given Amazon QLDB journal stream. Before a stream can be canceled, its current status must be <code>ACTIVE</code>.</p> <p>You can't restart a stream after you cancel it. Canceled QLDB stream resources are subject to a 7-day retention period, so they are automatically deleted after this limit expires.</p>",
  operationId: 'CancelJournalKinesisStream',
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
      name: z
        .string()
        .regex(/(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$/)
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the ledger.',
            schema: {
              type: 'string',
              pattern: '(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$',
              minLength: 1,
              maxLength: 32,
            },
          },
        }),
      streamId: z
        .string()
        .regex(/^[A-Za-z-0-9]+$/)
        .length(22)
        .openapi({
          param: {
            name: 'streamId',
            in: 'path',
            required: true,
            description:
              'The UUID (represented in Base62-encoded text) of the QLDB journal stream to be canceled.',
            schema: { type: 'string', pattern: '^[A-Za-z-0-9]+$', minLength: 22, maxLength: 22 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelJournalKinesisStreamResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourcePreconditionNotMetException',
      content: { 'application/json': { schema: ResourcePreconditionNotMetExceptionSchema } },
    },
  },
})

export const getLedgersRoute = createRoute({
  method: 'get',
  path: '/ledgers',
  description:
    '<p>Returns an array of ledger summaries that are associated with the current Amazon Web Services account and Region.</p> <p>This action returns a maximum of 100 items and is paginated so that you can retrieve all the items by calling <code>ListLedgers</code> multiple times.</p>',
  operationId: 'ListLedgers',
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
      max_results: z
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
            name: 'max_results',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return in a single <code>ListLedgers</code> request. (The actual number of results returned might be fewer.)',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      next_token: z
        .string()
        .regex(/^[A-Za-z-0-9+\/=]+$/)
        .min(4)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'next_token',
            in: 'query',
            required: false,
            description:
              'A pagination token, indicating that you want to retrieve the next page of results. If you received a value for <code>NextToken</code> in the response from a previous <code>ListLedgers</code> call, then you should use that value as input here.',
            schema: {
              type: 'string',
              pattern: '^[A-Za-z-0-9+/=]+$',
              minLength: 4,
              maxLength: 1024,
            },
          },
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLedgersResponseSchema } },
    },
  },
})

export const postLedgersRoute = createRoute({
  method: 'post',
  path: '/ledgers',
  description: 'Creates a new ledger in your Amazon Web Services account in the current Region.',
  operationId: 'CreateLedger',
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
              Name: z
                .string()
                .regex(/(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$/)
                .min(1)
                .max(32)
                .openapi({
                  description:
                    '<p>The name of the ledger that you want to create. The name must be unique among all of the ledgers in your Amazon Web Services account in the current Region.</p> <p>Naming constraints for ledger names are defined in <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/limits.html#limits.naming">Quotas in Amazon QLDB</a> in the <i>Amazon QLDB Developer Guide</i>.</p>',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 200)
                .exactOptional()
                .openapi({
                  description:
                    'The key-value pairs to add as tags to the ledger that you want to create. Tag keys are case sensitive. Tag values are case sensitive and can be null.',
                }),
              PermissionsMode: z
                .enum(['ALLOW_ALL', 'STANDARD'])
                .openapi({
                  description:
                    '<p>The permissions mode to assign to the ledger that you want to create. This parameter can have one of the following values:</p> <ul> <li> <p> <code>ALLOW_ALL</code>: A legacy permissions mode that enables access control with API-level granularity for ledgers.</p> <p>This mode allows users who have the <code>SendCommand</code> API permission for this ledger to run all PartiQL commands (hence, <code>ALLOW_ALL</code>) on any tables in the specified ledger. This mode disregards any table-level or command-level IAM permissions policies that you create for the ledger.</p> </li> <li> <p> <code>STANDARD</code>: (<i>Recommended</i>) A permissions mode that enables access control with finer granularity for ledgers, tables, and PartiQL commands.</p> <p>By default, this mode denies all user requests to run any PartiQL commands on any tables in this ledger. To allow PartiQL commands to run, you must create IAM permissions policies for specific table resources and PartiQL actions, in addition to the <code>SendCommand</code> API permission for the ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-standard-mode.html">Getting started with the standard permissions mode</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> </ul> <note> <p>We strongly recommend using the <code>STANDARD</code> permissions mode to maximize the security of your ledger data.</p> </note>',
                }),
              DeletionProtection: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The flag that prevents a ledger from being deleted by any user. If not provided on ledger creation, this feature is enabled (<code>true</code>) by default.</p> <p>If deletion protection is enabled, you must first disable it before you can delete the ledger. You can disable it by calling the <code>UpdateLedger</code> operation to set the flag to <code>false</code>.</p>',
                }),
              KmsKey: z
                .string()
                .max(1600)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The key in Key Management Service (KMS) to use for encryption of data at rest in the ledger. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/encryption-at-rest.html">Encryption at rest</a> in the <i>Amazon QLDB Developer Guide</i>.</p> <p>Use one of the following options to specify this parameter:</p> <ul> <li> <p> <code>AWS_OWNED_KMS_KEY</code>: Use an KMS key that is owned and managed by Amazon Web Services on your behalf.</p> </li> <li> <p> <b>Undefined</b>: By default, use an Amazon Web Services owned KMS key.</p> </li> <li> <p> <b>A valid symmetric customer managed KMS key</b>: Use the specified KMS key in your account that you create, own, and manage.</p> <p>Amazon QLDB does not support asymmetric keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using symmetric and asymmetric keys</a> in the <i>Key Management Service Developer Guide</i>.</p> </li> </ul> <p>To specify a customer managed KMS key, you can use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with <code>"alias/"</code>. To specify a key in a different Amazon Web Services account, you must use the key ARN or alias ARN.</p> <p>For example:</p> <ul> <li> <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> <li> <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> <li> <p>Alias name: <code>alias/ExampleAlias</code> </p> </li> <li> <p>Alias ARN: <code>arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id">Key identifiers (KeyId)</a> in the <i>Key Management Service Developer Guide</i>.</p>',
                }),
            })
            .openapi({ required: ['Name', 'PermissionsMode'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLedgerResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const getLedgersNameRoute = createRoute({
  method: 'get',
  path: '/ledgers/{name}',
  description:
    'Returns information about a ledger, including its state, permissions mode, encryption at rest settings, and when it was created.',
  operationId: 'DescribeLedger',
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
      name: z
        .string()
        .regex(/(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$/)
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the ledger that you want to describe.',
            schema: {
              type: 'string',
              pattern: '(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$',
              minLength: 1,
              maxLength: 32,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeLedgerResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const deleteLedgersNameRoute = createRoute({
  method: 'delete',
  path: '/ledgers/{name}',
  description:
    '<p>Deletes a ledger and all of its contents. This action is irreversible.</p> <p>If deletion protection is enabled, you must first disable it before you can delete the ledger. You can disable it by calling the <code>UpdateLedger</code> operation to set the flag to <code>false</code>.</p>',
  operationId: 'DeleteLedger',
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
      name: z
        .string()
        .regex(/(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$/)
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the ledger that you want to delete.',
            schema: {
              type: 'string',
              pattern: '(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$',
              minLength: 1,
              maxLength: 32,
            },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'ResourcePreconditionNotMetException',
      content: { 'application/json': { schema: ResourcePreconditionNotMetExceptionSchema } },
    },
  },
})

export const patchLedgersNameRoute = createRoute({
  method: 'patch',
  path: '/ledgers/{name}',
  description: 'Updates properties on a ledger.',
  operationId: 'UpdateLedger',
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
      name: z
        .string()
        .regex(/(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$/)
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the ledger.',
            schema: {
              type: 'string',
              pattern: '(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$',
              minLength: 1,
              maxLength: 32,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              DeletionProtection: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The flag that prevents a ledger from being deleted by any user. If not provided on ledger creation, this feature is enabled (<code>true</code>) by default.</p> <p>If deletion protection is enabled, you must first disable it before you can delete the ledger. You can disable it by calling the <code>UpdateLedger</code> operation to set the flag to <code>false</code>.</p>',
                }),
              KmsKey: z
                .string()
                .max(1600)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The key in Key Management Service (KMS) to use for encryption of data at rest in the ledger. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/encryption-at-rest.html">Encryption at rest</a> in the <i>Amazon QLDB Developer Guide</i>.</p> <p>Use one of the following options to specify this parameter:</p> <ul> <li> <p> <code>AWS_OWNED_KMS_KEY</code>: Use an KMS key that is owned and managed by Amazon Web Services on your behalf.</p> </li> <li> <p> <b>Undefined</b>: Make no changes to the KMS key of the ledger.</p> </li> <li> <p> <b>A valid symmetric customer managed KMS key</b>: Use the specified KMS key in your account that you create, own, and manage.</p> <p>Amazon QLDB does not support asymmetric keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using symmetric and asymmetric keys</a> in the <i>Key Management Service Developer Guide</i>.</p> </li> </ul> <p>To specify a customer managed KMS key, you can use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with <code>"alias/"</code>. To specify a key in a different Amazon Web Services account, you must use the key ARN or alias ARN.</p> <p>For example:</p> <ul> <li> <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> <li> <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> <li> <p>Alias name: <code>alias/ExampleAlias</code> </p> </li> <li> <p>Alias ARN: <code>arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id">Key identifiers (KeyId)</a> in the <i>Key Management Service Developer Guide</i>.</p>',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateLedgerResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getLedgersNameJournalS3ExportsExportIdRoute = createRoute({
  method: 'get',
  path: '/ledgers/{name}/journal-s3-exports/{exportId}',
  description:
    '<p>Returns information about a journal export job, including the ledger name, export ID, creation time, current status, and the parameters of the original export creation request.</p> <p>This action does not return any expired export jobs. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/export-journal.request.html#export-journal.request.expiration">Export job expiration</a> in the <i>Amazon QLDB Developer Guide</i>.</p> <p>If the export job with the given <code>ExportId</code> doesn\'t exist, then throws <code>ResourceNotFoundException</code>.</p> <p>If the ledger with the given <code>Name</code> doesn\'t exist, then throws <code>ResourceNotFoundException</code>.</p>',
  operationId: 'DescribeJournalS3Export',
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
      name: z
        .string()
        .regex(/(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$/)
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the ledger.',
            schema: {
              type: 'string',
              pattern: '(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$',
              minLength: 1,
              maxLength: 32,
            },
          },
        }),
      exportId: z
        .string()
        .regex(/^[A-Za-z-0-9]+$/)
        .length(22)
        .openapi({
          param: {
            name: 'exportId',
            in: 'path',
            required: true,
            description:
              'The UUID (represented in Base62-encoded text) of the journal export job to describe.',
            schema: { type: 'string', pattern: '^[A-Za-z-0-9]+$', minLength: 22, maxLength: 22 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeJournalS3ExportResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getLedgersNameJournalS3ExportsRoute = createRoute({
  method: 'get',
  path: '/ledgers/{name}/journal-s3-exports',
  description:
    '<p>Returns an array of journal export job descriptions for a specified ledger.</p> <p>This action returns a maximum of <code>MaxResults</code> items, and is paginated so that you can retrieve all the items by calling <code>ListJournalS3ExportsForLedger</code> multiple times.</p> <p>This action does not return any expired export jobs. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/export-journal.request.html#export-journal.request.expiration">Export job expiration</a> in the <i>Amazon QLDB Developer Guide</i>.</p>',
  operationId: 'ListJournalS3ExportsForLedger',
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
      name: z
        .string()
        .regex(/(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$/)
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the ledger.',
            schema: {
              type: 'string',
              pattern: '(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$',
              minLength: 1,
              maxLength: 32,
            },
          },
        }),
    }),
    query: z.object({
      max_results: z
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
            name: 'max_results',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return in a single <code>ListJournalS3ExportsForLedger</code> request. (The actual number of results returned might be fewer.)',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      next_token: z
        .string()
        .regex(/^[A-Za-z-0-9+\/=]+$/)
        .min(4)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'next_token',
            in: 'query',
            required: false,
            description:
              'A pagination token, indicating that you want to retrieve the next page of results. If you received a value for <code>NextToken</code> in the response from a previous <code>ListJournalS3ExportsForLedger</code> call, then you should use that value as input here.',
            schema: {
              type: 'string',
              pattern: '^[A-Za-z-0-9+/=]+$',
              minLength: 4,
              maxLength: 1024,
            },
          },
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListJournalS3ExportsForLedgerResponseSchema } },
    },
  },
})

export const postLedgersNameJournalS3ExportsRoute = createRoute({
  method: 'post',
  path: '/ledgers/{name}/journal-s3-exports',
  description:
    '<p>Exports journal contents within a date and time range from a ledger into a specified Amazon Simple Storage Service (Amazon S3) bucket. A journal export job can write the data objects in either the text or binary representation of Amazon Ion format, or in <i>JSON Lines</i> text format.</p> <p>In JSON Lines format, each journal block in the exported data object is a valid JSON object that is delimited by a newline. You can use this format to easily integrate JSON exports with analytics tools such as Glue and Amazon Athena because these services can parse newline-delimited JSON automatically. For more information about the format, see <a href="https://jsonlines.org/">JSON Lines</a>.</p> <p>If the ledger with the given <code>Name</code> doesn\'t exist, then throws <code>ResourceNotFoundException</code>.</p> <p>If the ledger with the given <code>Name</code> is in <code>CREATING</code> status, then throws <code>ResourcePreconditionNotMetException</code>.</p> <p>You can initiate up to two concurrent journal export requests for each ledger. Beyond this limit, journal export requests throw <code>LimitExceededException</code>.</p>',
  operationId: 'ExportJournalToS3',
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
      name: z
        .string()
        .regex(/(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$/)
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the ledger.',
            schema: {
              type: 'string',
              pattern: '(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$',
              minLength: 1,
              maxLength: 32,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              InclusiveStartTime: z.iso
                .datetime({ offset: true })
                .openapi({
                  description:
                    "<p>The inclusive start date and time for the range of journal contents to export.</p> <p>The <code>InclusiveStartTime</code> must be in <code>ISO 8601</code> date and time format and in Universal Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code>.</p> <p>The <code>InclusiveStartTime</code> must be before <code>ExclusiveEndTime</code>.</p> <p>If you provide an <code>InclusiveStartTime</code> that is before the ledger's <code>CreationDateTime</code>, Amazon QLDB defaults it to the ledger's <code>CreationDateTime</code>.</p>",
                }),
              ExclusiveEndTime: z.iso
                .datetime({ offset: true })
                .openapi({
                  description:
                    '<p>The exclusive end date and time for the range of journal contents to export.</p> <p>The <code>ExclusiveEndTime</code> must be in <code>ISO 8601</code> date and time format and in Universal Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code>.</p> <p>The <code>ExclusiveEndTime</code> must be less than or equal to the current UTC date and time.</p>',
                }),
              S3ExportConfiguration: z
                .object({
                  Bucket: S3BucketSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The Amazon S3 bucket name in which a journal export job writes the journal contents.</p> <p>The bucket name must comply with the Amazon S3 bucket naming conventions. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html">Bucket Restrictions and Limitations</a> in the <i>Amazon S3 Developer Guide</i>.</p>',
                      }),
                  ).exactOptional(),
                  Prefix: S3PrefixSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The prefix for the Amazon S3 bucket in which a journal export job writes the journal contents.</p> <p>The prefix must comply with Amazon S3 key naming rules and restrictions. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html">Object Key and Metadata</a> in the <i>Amazon S3 Developer Guide</i>.</p> <p>The following are examples of valid <code>Prefix</code> values:</p> <ul> <li> <p> <code>JournalExports-ForMyLedger/Testing/</code> </p> </li> <li> <p> <code>JournalExports</code> </p> </li> <li> <p> <code>My:Tests/</code> </p> </li> </ul>',
                      }),
                  ).exactOptional(),
                  EncryptionConfiguration: S3EncryptionConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The encryption settings that are used by a journal export job to write data in an Amazon S3 bucket.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'The Amazon Simple Storage Service (Amazon S3) bucket location in which a journal export job writes the journal contents.',
                  required: [],
                }),
              RoleArn: z
                .string()
                .min(20)
                .max(1600)
                .openapi({
                  description:
                    '<p>The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a journal export job to do the following:</p> <ul> <li> <p>Write objects into your Amazon Simple Storage Service (Amazon S3) bucket.</p> </li> <li> <p>(Optional) Use your customer managed key in Key Management Service (KMS) for server-side encryption of your exported data.</p> </li> </ul> <p>To pass a role to QLDB when requesting a journal export, you must have permissions to perform the <code>iam:PassRole</code> action on the IAM role resource. This is required for all journal export requests.</p>',
                }),
              OutputFormat: z
                .enum(['ION_BINARY', 'ION_TEXT', 'JSON'])
                .exactOptional()
                .openapi({
                  description:
                    'The output format of your exported journal data. If this parameter is not specified, the exported data defaults to <code>ION_TEXT</code> format.',
                }),
            })
            .openapi({
              required: [
                'InclusiveStartTime',
                'ExclusiveEndTime',
                'S3ExportConfiguration',
                'RoleArn',
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
      content: { 'application/json': { schema: ExportJournalToS3ResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourcePreconditionNotMetException',
      content: { 'application/json': { schema: ResourcePreconditionNotMetExceptionSchema } },
    },
  },
})

export const postLedgersNameBlockRoute = createRoute({
  method: 'post',
  path: '/ledgers/{name}/block',
  description:
    '<p>Returns a block object at a specified address in a journal. Also returns a proof of the specified block for verification if <code>DigestTipAddress</code> is provided.</p> <p>For information about the data contents in a block, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/journal-contents.html">Journal contents</a> in the <i>Amazon QLDB Developer Guide</i>.</p> <p>If the specified ledger doesn\'t exist or is in <code>DELETING</code> status, then throws <code>ResourceNotFoundException</code>.</p> <p>If the specified ledger is in <code>CREATING</code> status, then throws <code>ResourcePreconditionNotMetException</code>.</p> <p>If no block exists with the specified address, then throws <code>InvalidParameterException</code>.</p>',
  operationId: 'GetBlock',
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
      name: z
        .string()
        .regex(/(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$/)
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the ledger.',
            schema: {
              type: 'string',
              pattern: '(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$',
              minLength: 1,
              maxLength: 32,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              BlockAddress: z
                .object({
                  IonText: IonTextSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An Amazon Ion plaintext value contained in a <code>ValueHolder</code> structure.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'A structure that can contain a value in multiple encoding formats.',
                  required: [],
                }),
              DigestTipAddress: z
                .object({
                  IonText: IonTextSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An Amazon Ion plaintext value contained in a <code>ValueHolder</code> structure.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'A structure that can contain a value in multiple encoding formats.',
                  required: [],
                }),
            })
            .openapi({ required: ['BlockAddress'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBlockResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourcePreconditionNotMetException',
      content: { 'application/json': { schema: ResourcePreconditionNotMetExceptionSchema } },
    },
  },
})

export const postLedgersNameDigestRoute = createRoute({
  method: 'post',
  path: '/ledgers/{name}/digest',
  description:
    'Returns the digest of a ledger at the latest committed block in the journal. The response includes a 256-bit hash value and a block address.',
  operationId: 'GetDigest',
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
      name: z
        .string()
        .regex(/(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$/)
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the ledger.',
            schema: {
              type: 'string',
              pattern: '(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$',
              minLength: 1,
              maxLength: 32,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDigestResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourcePreconditionNotMetException',
      content: { 'application/json': { schema: ResourcePreconditionNotMetExceptionSchema } },
    },
  },
})

export const postLedgersNameRevisionRoute = createRoute({
  method: 'post',
  path: '/ledgers/{name}/revision',
  description:
    'Returns a revision data object for a specified document ID and block address. Also returns a proof of the specified revision for verification if <code>DigestTipAddress</code> is provided.',
  operationId: 'GetRevision',
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
      name: z
        .string()
        .regex(/(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$/)
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the ledger.',
            schema: {
              type: 'string',
              pattern: '(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$',
              minLength: 1,
              maxLength: 32,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              BlockAddress: z
                .object({
                  IonText: IonTextSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An Amazon Ion plaintext value contained in a <code>ValueHolder</code> structure.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'A structure that can contain a value in multiple encoding formats.',
                  required: [],
                }),
              DocumentId: z
                .string()
                .regex(/^[A-Za-z-0-9]+$/)
                .length(22)
                .openapi({
                  description:
                    'The UUID (represented in Base62-encoded text) of the document to be verified.',
                }),
              DigestTipAddress: z
                .object({
                  IonText: IonTextSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An Amazon Ion plaintext value contained in a <code>ValueHolder</code> structure.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'A structure that can contain a value in multiple encoding formats.',
                  required: [],
                }),
            })
            .openapi({ required: ['BlockAddress', 'DocumentId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRevisionResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourcePreconditionNotMetException',
      content: { 'application/json': { schema: ResourcePreconditionNotMetExceptionSchema } },
    },
  },
})

export const getLedgersNameJournalKinesisStreamsRoute = createRoute({
  method: 'get',
  path: '/ledgers/{name}/journal-kinesis-streams',
  description:
    '<p>Returns an array of all Amazon QLDB journal stream descriptors for a given ledger. The output of each stream descriptor includes the same details that are returned by <code>DescribeJournalKinesisStream</code>.</p> <p>This action does not return any expired journal streams. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/streams.create.html#streams.create.states.expiration">Expiration for terminal streams</a> in the <i>Amazon QLDB Developer Guide</i>.</p> <p>This action returns a maximum of <code>MaxResults</code> items. It is paginated so that you can retrieve all the items by calling <code>ListJournalKinesisStreamsForLedger</code> multiple times.</p>',
  operationId: 'ListJournalKinesisStreamsForLedger',
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
      name: z
        .string()
        .regex(/(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$/)
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the ledger.',
            schema: {
              type: 'string',
              pattern: '(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$',
              minLength: 1,
              maxLength: 32,
            },
          },
        }),
    }),
    query: z.object({
      max_results: z
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
            name: 'max_results',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return in a single <code>ListJournalKinesisStreamsForLedger</code> request. (The actual number of results returned might be fewer.)',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      next_token: z
        .string()
        .regex(/^[A-Za-z-0-9+\/=]+$/)
        .min(4)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'next_token',
            in: 'query',
            required: false,
            description:
              'A pagination token, indicating that you want to retrieve the next page of results. If you received a value for <code>NextToken</code> in the response from a previous <code>ListJournalKinesisStreamsForLedger</code> call, you should use that value as input here.',
            schema: {
              type: 'string',
              pattern: '^[A-Za-z-0-9+/=]+$',
              minLength: 4,
              maxLength: 1024,
            },
          },
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListJournalKinesisStreamsForLedgerResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourcePreconditionNotMetException',
      content: { 'application/json': { schema: ResourcePreconditionNotMetExceptionSchema } },
    },
  },
})

export const postLedgersNameJournalKinesisStreamsRoute = createRoute({
  method: 'post',
  path: '/ledgers/{name}/journal-kinesis-streams',
  description:
    "Creates a journal stream for a given Amazon QLDB ledger. The stream captures every document revision that is committed to the ledger's journal and delivers the data to a specified Amazon Kinesis Data Streams resource.",
  operationId: 'StreamJournalToKinesis',
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
      name: z
        .string()
        .regex(/(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$/)
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the ledger.',
            schema: {
              type: 'string',
              pattern: '(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$',
              minLength: 1,
              maxLength: 32,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              RoleArn: z
                .string()
                .min(20)
                .max(1600)
                .openapi({
                  description:
                    '<p>The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a journal stream to write data records to a Kinesis Data Streams resource.</p> <p>To pass a role to QLDB when requesting a journal stream, you must have permissions to perform the <code>iam:PassRole</code> action on the IAM role resource. This is required for all journal stream requests.</p>',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 200)
                .exactOptional()
                .openapi({
                  description:
                    'The key-value pairs to add as tags to the stream that you want to create. Tag keys are case sensitive. Tag values are case sensitive and can be null.',
                }),
              InclusiveStartTime: z.iso
                .datetime({ offset: true })
                .openapi({
                  description:
                    "<p>The inclusive start date and time from which to start streaming journal data. This parameter must be in <code>ISO 8601</code> date and time format and in Universal Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code>.</p> <p>The <code>InclusiveStartTime</code> cannot be in the future and must be before <code>ExclusiveEndTime</code>.</p> <p>If you provide an <code>InclusiveStartTime</code> that is before the ledger's <code>CreationDateTime</code>, QLDB effectively defaults it to the ledger's <code>CreationDateTime</code>.</p>",
                }),
              ExclusiveEndTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    "<p>The exclusive date and time that specifies when the stream ends. If you don't define this parameter, the stream runs indefinitely until you cancel it.</p> <p>The <code>ExclusiveEndTime</code> must be in <code>ISO 8601</code> date and time format and in Universal Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code>.</p>",
                }),
              KinesisConfiguration: z
                .object({
                  StreamArn: ArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name (ARN) of the Kinesis Data Streams resource.',
                      }),
                  ).exactOptional(),
                  AggregationEnabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Enables QLDB to publish multiple data records in a single Kinesis Data Streams record, increasing the number of records sent per API call.</p> <p> <i>This option is enabled by default.</i> Record aggregation has important implications for processing records and requires de-aggregation in your stream consumer. To learn more, see <a href="https://docs.aws.amazon.com/streams/latest/dev/kinesis-kpl-concepts.html">KPL Key Concepts</a> and <a href="https://docs.aws.amazon.com/streams/latest/dev/kinesis-kpl-consumer-deaggregation.html">Consumer De-aggregation</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p>',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'The configuration settings of the Amazon Kinesis Data Streams destination for an Amazon QLDB journal stream.',
                  required: [],
                }),
              StreamName: z
                .string()
                .regex(/(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$/)
                .min(1)
                .max(32)
                .openapi({
                  description:
                    '<p>The name that you want to assign to the QLDB journal stream. User-defined names can help identify and indicate the purpose of a stream.</p> <p>Your stream name must be unique among other <i>active</i> streams for a given ledger. Stream names have the same naming constraints as ledger names, as defined in <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/limits.html#limits.naming">Quotas in Amazon QLDB</a> in the <i>Amazon QLDB Developer Guide</i>.</p>',
                }),
            })
            .openapi({
              required: ['RoleArn', 'InclusiveStartTime', 'KinesisConfiguration', 'StreamName'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StreamJournalToKinesisResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourcePreconditionNotMetException',
      content: { 'application/json': { schema: ResourcePreconditionNotMetExceptionSchema } },
    },
  },
})

export const getJournalS3ExportsRoute = createRoute({
  method: 'get',
  path: '/journal-s3-exports',
  description:
    '<p>Returns an array of journal export job descriptions for all ledgers that are associated with the current Amazon Web Services account and Region.</p> <p>This action returns a maximum of <code>MaxResults</code> items, and is paginated so that you can retrieve all the items by calling <code>ListJournalS3Exports</code> multiple times.</p> <p>This action does not return any expired export jobs. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/export-journal.request.html#export-journal.request.expiration">Export job expiration</a> in the <i>Amazon QLDB Developer Guide</i>.</p>',
  operationId: 'ListJournalS3Exports',
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
      max_results: z
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
            name: 'max_results',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return in a single <code>ListJournalS3Exports</code> request. (The actual number of results returned might be fewer.)',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      next_token: z
        .string()
        .regex(/^[A-Za-z-0-9+\/=]+$/)
        .min(4)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'next_token',
            in: 'query',
            required: false,
            description:
              'A pagination token, indicating that you want to retrieve the next page of results. If you received a value for <code>NextToken</code> in the response from a previous <code>ListJournalS3Exports</code> call, then you should use that value as input here.',
            schema: {
              type: 'string',
              pattern: '^[A-Za-z-0-9+/=]+$',
              minLength: 4,
              maxLength: 1024,
            },
          },
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListJournalS3ExportsResponseSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description: 'Returns all tags for a specified Amazon QLDB resource.',
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
        .min(20)
        .max(1600)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              '<p>The Amazon Resource Name (ARN) for which to list the tags. For example:</p> <p> <code>arn:aws:qldb:us-east-1:123456789012:ledger/exampleLedger</code> </p>',
            schema: { type: 'string', minLength: 20, maxLength: 1600 },
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
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description:
    '<p>Adds one or more tags to a specified Amazon QLDB resource.</p> <p>A resource can have up to 50 tags. If you try to create more than 50 tags for a resource, your request fails and returns an error.</p>',
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
        .min(20)
        .max(1600)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              '<p>The Amazon Resource Name (ARN) to which you want to add the tags. For example:</p> <p> <code>arn:aws:qldb:us-east-1:123456789012:ledger/exampleLedger</code> </p>',
            schema: { type: 'string', minLength: 20, maxLength: 1600 },
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
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 200)
                .openapi({
                  description:
                    'The key-value pairs to add as tags to the specified QLDB resource. Tag keys are case sensitive. If you specify a key that already exists for the resource, your request fails and returns an error. Tag values are case sensitive and can be null.',
                }),
            })
            .openapi({ required: ['Tags'] }),
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
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description:
    'Removes one or more tags from a specified Amazon QLDB resource. You can specify up to 50 tag keys to remove.',
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
        .min(20)
        .max(1600)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              '<p>The Amazon Resource Name (ARN) from which to remove the tags. For example:</p> <p> <code>arn:aws:qldb:us-east-1:123456789012:ledger/exampleLedger</code> </p>',
            schema: { type: 'string', minLength: 20, maxLength: 1600 },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema).min(0).max(200),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'The list of tag keys to remove.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagKey' },
              minItems: 0,
              maxItems: 200,
            },
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
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const patchLedgersNamePermissionsModeRoute = createRoute({
  method: 'patch',
  path: '/ledgers/{name}/permissions-mode',
  description:
    '<p>Updates the permissions mode of a ledger.</p> <important> <p>Before you switch to the <code>STANDARD</code> permissions mode, you must first create all required IAM policies and table tags to avoid disruption to your users. To learn more, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/ledger-management.basics.html#ledger-mgmt.basics.update-permissions.migrating">Migrating to the standard permissions mode</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </important>',
  operationId: 'UpdateLedgerPermissionsMode',
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
      name: z
        .string()
        .regex(/(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$/)
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the ledger.',
            schema: {
              type: 'string',
              pattern: '(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$',
              minLength: 1,
              maxLength: 32,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              PermissionsMode: z
                .enum(['ALLOW_ALL', 'STANDARD'])
                .openapi({
                  description:
                    '<p>The permissions mode to assign to the ledger. This parameter can have one of the following values:</p> <ul> <li> <p> <code>ALLOW_ALL</code>: A legacy permissions mode that enables access control with API-level granularity for ledgers.</p> <p>This mode allows users who have the <code>SendCommand</code> API permission for this ledger to run all PartiQL commands (hence, <code>ALLOW_ALL</code>) on any tables in the specified ledger. This mode disregards any table-level or command-level IAM permissions policies that you create for the ledger.</p> </li> <li> <p> <code>STANDARD</code>: (<i>Recommended</i>) A permissions mode that enables access control with finer granularity for ledgers, tables, and PartiQL commands.</p> <p>By default, this mode denies all user requests to run any PartiQL commands on any tables in this ledger. To allow PartiQL commands to run, you must create IAM permissions policies for specific table resources and PartiQL actions, in addition to the <code>SendCommand</code> API permission for the ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-standard-mode.html">Getting started with the standard permissions mode</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> </ul> <note> <p>We strongly recommend using the <code>STANDARD</code> permissions mode to maximize the security of your ledger data.</p> </note>',
                }),
            })
            .openapi({ required: ['PermissionsMode'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateLedgerPermissionsModeResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})
