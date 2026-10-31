import { createRoute, z } from '@hono/zod-openapi'

const AccountIdSchema = z
  .string()
  .regex(/^\d{12}$/)
  .max(64)
  .openapi('AccountId')

const S3BucketArnStringSchema = z
  .string()
  .regex(/arn:[^:]+:s3:.*/)
  .min(1)
  .max(128)
  .openapi('S3BucketArnString')

const ManifestPrefixStringSchema = z.string().min(1).max(512).openapi('ManifestPrefixString')

const SSES3EncryptionSchema = z
  .object({})
  .openapi({
    description: 'Configuration for the use of SSE-S3 to encrypt generated manifest objects.',
  })
  .openapi('SSES3Encryption')

const KmsKeyArnStringSchema = z.string().min(1).max(2000).openapi('KmsKeyArnString')

const SSEKMSEncryptionSchema = z
  .object({
    KeyId: KmsKeyArnStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the ID of the Amazon Web Services Key Management Service (Amazon Web Services KMS) symmetric encryption customer managed key to use for encrypting generated manifest objects.',
        }),
    ),
  })
  .openapi({
    required: ['KeyId'],
    description: 'Configuration for the use of SSE-KMS to encrypt generated manifest objects.',
  })
  .openapi('SSEKMSEncryption')

const GeneratedManifestEncryptionSchema = z
  .object({
    SSES3: SSES3EncryptionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'SSE-S3' },
          description: 'Specifies the use of SSE-S3 to encrypt generated manifest objects.',
        }),
    ).exactOptional(),
    SSEKMS: SSEKMSEncryptionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'SSE-KMS' },
          description:
            'Configuration details on how SSE-KMS is used to encrypt generated manifest objects.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The encryption configuration to use when storing the generated manifest.',
    required: [],
  })
  .openapi('GeneratedManifestEncryption')

const GeneratedManifestFormatSchema = z
  .literal('S3InventoryReport_CSV_20211130')
  .openapi('GeneratedManifestFormat')

const S3ManifestOutputLocationSchema = z
  .object({
    ExpectedManifestBucketOwner: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The Account ID that owns the bucket the generated manifest is written to.',
        }),
    ).exactOptional(),
    Bucket: S3BucketArnStringSchema.and(
      z
        .any()
        .openapi({ description: 'The bucket ARN the generated manifest should be written to.' }),
    ),
    ManifestPrefix: ManifestPrefixStringSchema.and(
      z
        .any()
        .openapi({
          description: 'Prefix identifying one or more objects to which the manifest applies.',
        }),
    ).exactOptional(),
    ManifestEncryption: GeneratedManifestEncryptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies what encryption should be used when the generated manifest objects are written.',
        }),
    ).exactOptional(),
    ManifestFormat: GeneratedManifestFormatSchema.and(
      z.any().openapi({ description: 'The format of the generated manifest.' }),
    ),
  })
  .openapi({
    required: ['Bucket', 'ManifestFormat'],
    description: 'Location details for where the generated manifest should be written.',
  })
  .openapi('S3ManifestOutputLocation')

const BooleanSchema = z.boolean().openapi('Boolean')

const ObjectCreationTimeSchema = z.iso.datetime({ offset: true }).openapi('ObjectCreationTime')

const ReplicationStatusSchema = z
  .enum(['COMPLETED', 'FAILED', 'REPLICA', 'NONE'])
  .openapi('ReplicationStatus')

const ReplicationStatusFilterListSchema = z
  .array(ReplicationStatusSchema)
  .openapi('ReplicationStatusFilterList')

const JobManifestGeneratorFilterSchema = z
  .object({
    EligibleForReplication: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Include objects in the generated manifest only if they are eligible for replication according to the Replication configuration on the source bucket.',
        }),
    ).exactOptional(),
    CreatedAfter: ObjectCreationTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'If provided, the generated manifest should include only source bucket objects that were created after this time.',
        }),
    ).exactOptional(),
    CreatedBefore: ObjectCreationTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'If provided, the generated manifest should include only source bucket objects that were created before this time.',
        }),
    ).exactOptional(),
    ObjectReplicationStatuses: ReplicationStatusFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If provided, the generated manifest should include only source bucket objects that have one of the specified Replication statuses.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: "The filter used to describe a set of objects for the job's manifest.",
    required: [],
  })
  .openapi('JobManifestGeneratorFilter')

const S3JobManifestGeneratorSchema = z
  .object({
    ExpectedBucketOwner: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Web Services account ID that owns the bucket the generated manifest is written to. If provided the generated manifest bucket's owner Amazon Web Services account ID must match this value, else the job fails.",
        }),
    ).exactOptional(),
    SourceBucket: S3BucketArnStringSchema.and(
      z.any().openapi({ description: 'The source bucket used by the ManifestGenerator.' }),
    ),
    ManifestOutputLocation: S3ManifestOutputLocationSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the location the generated manifest will be written to.',
        }),
    ).exactOptional(),
    Filter: JobManifestGeneratorFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies rules the S3JobManifestGenerator should use to use to decide whether an object in the source bucket should or should not be included in the generated job manifest.',
        }),
    ).exactOptional(),
    EnableManifestOutput: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Determines whether or not to write the job's generated manifest to a bucket.",
        }),
    ),
  })
  .openapi({
    required: ['SourceBucket', 'EnableManifestOutput'],
    description: 'The container for the service that will create the S3 manifest.',
  })
  .openapi('S3JobManifestGenerator')

type JobManifestGeneratorType = {
  S3JobManifestGenerator?: z.infer<typeof S3JobManifestGeneratorSchema> & { [key: string]: unknown }
}

const S3AccessPointArnSchema = z.string().min(4).max(128).openapi('S3AccessPointArn')

const AliasSchema = z
  .string()
  .regex(/^[0-9a-z\\-]{63}/)
  .max(63)
  .openapi('Alias')

const CreateAccessPointResultSchema = z
  .object({
    AccessPointArn: S3AccessPointArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the access point.</p> <note> <p>This is only supported by Amazon S3 on Outposts.</p> </note>',
        }),
    ).exactOptional(),
    Alias: AliasSchema.and(
      z.any().openapi({ description: 'The name or alias of the access point.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateAccessPointResult')

const VpcIdSchema = z.string().min(1).max(1024).openapi('VpcId')

const SettingSchema = z.boolean().openapi('Setting')

const ObjectLambdaAccessPointArnSchema = z
  .string()
  .regex(/arn:[^:]+:s3-object-lambda:[^:]*:\d{12}:accesspoint\/.*/)
  .min(1)
  .max(2048)
  .openapi('ObjectLambdaAccessPointArn')

const ObjectLambdaAccessPointAliasValueSchema = z
  .string()
  .regex(/^[0-9a-z\\-]{3,63}/)
  .min(3)
  .max(63)
  .openapi('ObjectLambdaAccessPointAliasValue')

const ObjectLambdaAccessPointAliasStatusSchema = z
  .enum(['PROVISIONING', 'READY'])
  .openapi('ObjectLambdaAccessPointAliasStatus')

const ObjectLambdaAccessPointAliasSchema = z
  .object({
    Value: ObjectLambdaAccessPointAliasValueSchema.and(
      z.any().openapi({ description: 'The alias value of the Object Lambda Access Point.' }),
    ).exactOptional(),
    Status: ObjectLambdaAccessPointAliasStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the Object Lambda Access Point alias. If the status is <code>PROVISIONING</code>, the Object Lambda Access Point is provisioning the alias and the alias is not ready for use yet. If the status is <code>READY</code>, the Object Lambda Access Point alias is successfully provisioned and ready for use.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The alias of an Object Lambda Access Point. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-use.html#ol-access-points-alias">How to use a bucket-style alias for your S3 bucket Object Lambda Access Point</a>.',
    required: [],
  })
  .openapi('ObjectLambdaAccessPointAlias')

const CreateAccessPointForObjectLambdaResultSchema = z
  .object({
    ObjectLambdaAccessPointArn: ObjectLambdaAccessPointArnSchema.and(
      z.any().openapi({ description: 'Specifies the ARN for the Object Lambda Access Point.' }),
    ).exactOptional(),
    Alias: ObjectLambdaAccessPointAliasSchema.and(
      z.any().openapi({ description: 'The alias of the Object Lambda Access Point.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateAccessPointForObjectLambdaResult')

const ObjectLambdaSupportingAccessPointArnSchema = z
  .string()
  .regex(/arn:[^:]+:s3:[^:]*:\d{12}:accesspoint\/.*/)
  .min(1)
  .max(2048)
  .openapi('ObjectLambdaSupportingAccessPointArn')

const ObjectLambdaAllowedFeatureSchema = z
  .enum(['GetObject-Range', 'GetObject-PartNumber', 'HeadObject-Range', 'HeadObject-PartNumber'])
  .openapi('ObjectLambdaAllowedFeature')

const ObjectLambdaAllowedFeaturesListSchema = z
  .array(ObjectLambdaAllowedFeatureSchema.and(z.any().openapi({ xml: { name: 'AllowedFeature' } })))
  .openapi('ObjectLambdaAllowedFeaturesList')

const ObjectLambdaTransformationConfigurationActionSchema = z
  .enum(['GetObject', 'HeadObject', 'ListObjects', 'ListObjectsV2'])
  .openapi('ObjectLambdaTransformationConfigurationAction')

const ObjectLambdaTransformationConfigurationActionsListSchema = z
  .array(
    ObjectLambdaTransformationConfigurationActionSchema.and(
      z.any().openapi({ xml: { name: 'Action' } }),
    ),
  )
  .openapi('ObjectLambdaTransformationConfigurationActionsList')

const FunctionArnStringSchema = z
  .string()
  .regex(
    /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
  )
  .min(1)
  .max(1024)
  .openapi('FunctionArnString')

const AwsLambdaTransformationPayloadSchema = z.string().openapi('AwsLambdaTransformationPayload')

const AwsLambdaTransformationSchema = z
  .object({
    FunctionArn: FunctionArnStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the Lambda function.' }),
    ),
    FunctionPayload: AwsLambdaTransformationPayloadSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional JSON that provides supplemental data to the Lambda function used to transform objects.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FunctionArn'],
    description: 'Lambda function used to transform objects through an Object Lambda Access Point.',
  })
  .openapi('AwsLambdaTransformation')

const ObjectLambdaContentTransformationSchema = z
  .object({
    AwsLambda: AwsLambdaTransformationSchema.and(
      z.any().openapi({ description: 'A container for an Lambda function.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A container for AwsLambdaTransformation.', required: [] })
  .openapi('ObjectLambdaContentTransformation')

const ObjectLambdaTransformationConfigurationSchema = z
  .object({
    Actions: ObjectLambdaTransformationConfigurationActionsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container for the action of an Object Lambda Access Point configuration. Valid inputs are <code>GetObject</code>, <code>ListObjects</code>, <code>HeadObject</code>, and <code>ListObjectsV2</code>.',
        }),
    ),
    ContentTransformation: ObjectLambdaContentTransformationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container for the content transformation of an Object Lambda Access Point configuration.',
        }),
    ),
  })
  .openapi({
    required: ['Actions', 'ContentTransformation'],
    description: 'A configuration used when creating an Object Lambda Access Point transformation.',
  })
  .openapi('ObjectLambdaTransformationConfiguration')

const ObjectLambdaTransformationConfigurationsListSchema = z
  .array(
    ObjectLambdaTransformationConfigurationSchema.and(
      z.any().openapi({ xml: { name: 'TransformationConfiguration' } }),
    ),
  )
  .openapi('ObjectLambdaTransformationConfigurationsList')

const S3RegionalBucketArnSchema = z.string().min(4).max(128).openapi('S3RegionalBucketArn')

const CreateBucketResultSchema = z
  .object({
    BucketArn: S3RegionalBucketArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the bucket.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateBucketResult')

const BucketLocationConstraintSchema = z
  .enum([
    'EU',
    'eu-west-1',
    'us-west-1',
    'us-west-2',
    'ap-south-1',
    'ap-southeast-1',
    'ap-southeast-2',
    'ap-northeast-1',
    'sa-east-1',
    'cn-north-1',
    'eu-central-1',
  ])
  .openapi('BucketLocationConstraint')

const BucketAlreadyExistsSchema = z.any().openapi('BucketAlreadyExists')

const BucketAlreadyOwnedByYouSchema = z.any().openapi('BucketAlreadyOwnedByYou')

const JobIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9\-\_]+/)
  .min(5)
  .max(36)
  .openapi('JobId')

const CreateJobResultSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID for this job. Amazon S3 generates this ID automatically and returns it after a successful <code>Create Job</code> request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateJobResult')

const LambdaInvokeOperationSchema = z
  .object({
    FunctionArn: FunctionArnStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the Lambda function that the specified job will invoke on every object in the manifest.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the configuration parameters for a <code>Lambda Invoke</code> operation.',
    required: [],
  })
  .openapi('LambdaInvokeOperation')

const S3CannedAccessControlListSchema = z
  .enum([
    'private',
    'public-read',
    'public-read-write',
    'aws-exec-read',
    'authenticated-read',
    'bucket-owner-read',
    'bucket-owner-full-control',
  ])
  .openapi('S3CannedAccessControlList')

const S3GranteeTypeIdentifierSchema = z
  .enum(['id', 'emailAddress', 'uri'])
  .openapi('S3GranteeTypeIdentifier')

const NonEmptyMaxLength1024StringSchema = z
  .string()
  .min(1)
  .max(1024)
  .openapi('NonEmptyMaxLength1024String')

const S3GranteeSchema = z
  .object({
    TypeIdentifier: S3GranteeTypeIdentifierSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    Identifier: NonEmptyMaxLength1024StringSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    DisplayName: NonEmptyMaxLength1024StringSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('S3Grantee')

const S3PermissionSchema = z
  .enum(['FULL_CONTROL', 'READ', 'WRITE', 'READ_ACP', 'WRITE_ACP'])
  .openapi('S3Permission')

const S3GrantSchema = z
  .object({
    Grantee: S3GranteeSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    Permission: S3PermissionSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('S3Grant')

const S3GrantListSchema = z.array(S3GrantSchema).openapi('S3GrantList')

const S3MetadataDirectiveSchema = z.enum(['COPY', 'REPLACE']).openapi('S3MetadataDirective')

const TimeStampSchema = z.iso.datetime({ offset: true }).openapi('TimeStamp')

const MaxLength1024StringSchema = z.string().max(1024).openapi('MaxLength1024String')

const S3UserMetadataSchema = z
  .record(z.string(), MaxLength1024StringSchema)
  .refine((val) => Object.keys(val).length <= 8192)
  .openapi('S3UserMetadata')

const S3ContentLengthSchema = z.int().min(0).openapi('S3ContentLength')

const S3SSEAlgorithmSchema = z.enum(['AES256', 'KMS']).openapi('S3SSEAlgorithm')

const S3ObjectMetadataSchema = z
  .object({
    CacheControl: NonEmptyMaxLength1024StringSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    ContentDisposition: NonEmptyMaxLength1024StringSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    ContentEncoding: NonEmptyMaxLength1024StringSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    ContentLanguage: NonEmptyMaxLength1024StringSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    UserMetadata: S3UserMetadataSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    ContentLength: S3ContentLengthSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    ContentMD5: NonEmptyMaxLength1024StringSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    ContentType: NonEmptyMaxLength1024StringSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    HttpExpiresDate: TimeStampSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    RequesterCharged: BooleanSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    SSEAlgorithm: S3SSEAlgorithmSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('S3ObjectMetadata')

const TagKeyStringSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(1024)
  .openapi('TagKeyString')

const TagValueStringSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .max(1024)
  .openapi('TagValueString')

const S3TagSchema = z
  .object({
    Key: TagKeyStringSchema.and(z.any().openapi({ description: 'Key of the tag' })),
    Value: TagValueStringSchema.and(z.any().openapi({ description: 'Value of the tag' })),
  })
  .openapi({ required: ['Key', 'Value'], description: 'A container for a key-value name pair.' })
  .openapi('S3Tag')

const S3TagSetSchema = z.array(S3TagSchema).openapi('S3TagSet')

const NonEmptyMaxLength2048StringSchema = z
  .string()
  .min(1)
  .max(2048)
  .openapi('NonEmptyMaxLength2048String')

const S3StorageClassSchema = z
  .enum([
    'STANDARD',
    'STANDARD_IA',
    'ONEZONE_IA',
    'GLACIER',
    'INTELLIGENT_TIERING',
    'DEEP_ARCHIVE',
    'GLACIER_IR',
  ])
  .openapi('S3StorageClass')

const S3ObjectLockLegalHoldStatusSchema = z
  .enum(['OFF', 'ON'])
  .openapi('S3ObjectLockLegalHoldStatus')

const S3ObjectLockModeSchema = z.enum(['COMPLIANCE', 'GOVERNANCE']).openapi('S3ObjectLockMode')

const S3ChecksumAlgorithmSchema = z
  .enum(['CRC32', 'CRC32C', 'SHA1', 'SHA256'])
  .openapi('S3ChecksumAlgorithm')

const S3CopyObjectOperationSchema = z
  .object({
    TargetResource: S3BucketArnStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the destination bucket Amazon Resource Name (ARN) for the batch copy operation. For example, to copy objects to a bucket named <code>destinationBucket</code>, set the <code>TargetResource</code> property to <code>arn:aws:s3:::destinationBucket</code>.',
        }),
    ).exactOptional(),
    CannedAccessControlList: S3CannedAccessControlListSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    AccessControlGrants: S3GrantListSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    MetadataDirective: S3MetadataDirectiveSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    ModifiedSinceConstraint: TimeStampSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    NewObjectMetadata: S3ObjectMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            "If you don't provide this parameter, Amazon S3 copies all the metadata from the original objects. If you specify an empty set, the new objects will have no tags. Otherwise, Amazon S3 assigns the supplied tags to the new objects.",
        }),
    ).exactOptional(),
    NewObjectTagging: S3TagSetSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    RedirectLocation: NonEmptyMaxLength2048StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies an optional metadata property for website redirects, <code>x-amz-website-redirect-location</code>. Allows webpage redirects if the object is accessed through a website endpoint.',
        }),
    ).exactOptional(),
    RequesterPays: BooleanSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    StorageClass: S3StorageClassSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    UnModifiedSinceConstraint: TimeStampSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    SSEAwsKmsKeyId: KmsKeyArnStringSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    TargetKeyPrefix: NonEmptyMaxLength1024StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the folder prefix that you want the objects to be copied into. For example, to copy objects into a folder named <code>Folder1</code> in the destination bucket, set the <code>TargetKeyPrefix</code> property to <code>Folder1</code>.',
        }),
    ).exactOptional(),
    ObjectLockLegalHoldStatus: S3ObjectLockLegalHoldStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The legal hold status to be applied to all objects in the Batch Operations job.',
        }),
    ).exactOptional(),
    ObjectLockMode: S3ObjectLockModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The retention mode to be applied to all objects in the Batch Operations job.',
        }),
    ).exactOptional(),
    ObjectLockRetainUntilDate: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date when the applied object retention configuration expires on all objects in the Batch Operations job.',
        }),
    ).exactOptional(),
    BucketKeyEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using Amazon Web Services KMS (SSE-KMS). Setting this header to <code>true</code> causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS.</p> <p>Specifying this header with an <i>object</i> action doesn’t affect <i>bucket-level</i> settings for S3 Bucket Key.</p>',
        }),
    ).exactOptional(),
    ChecksumAlgorithm: S3ChecksumAlgorithmSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the algorithm that you want Amazon S3 to use to create the checksum. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CheckingObjectIntegrity.xml"> Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the configuration parameters for a PUT Copy object operation. S3 Batch Operations passes every object to the underlying <code>CopyObject</code> API operation. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectCOPY.html">CopyObject</a>.',
    required: [],
  })
  .openapi('S3CopyObjectOperation')

const S3ObjectOwnerSchema = z
  .object({
    ID: NonEmptyMaxLength1024StringSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    DisplayName: NonEmptyMaxLength1024StringSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('S3ObjectOwner')

const S3AccessControlListSchema = z
  .object({
    Owner: S3ObjectOwnerSchema.and(z.any().openapi({ description: '<p/>' })),
    Grants: S3GrantListSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
  })
  .openapi({ required: ['Owner'], description: '<p/>' })
  .openapi('S3AccessControlList')

const S3AccessControlPolicySchema = z
  .object({
    AccessControlList: S3AccessControlListSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    CannedAccessControlList: S3CannedAccessControlListSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('S3AccessControlPolicy')

const S3SetObjectAclOperationSchema = z
  .object({
    AccessControlPolicy: S3AccessControlPolicySchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the configuration parameters for a PUT Object ACL operation. S3 Batch Operations passes every object to the underlying <code>PutObjectAcl</code> API operation. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTacl.html">PutObjectAcl</a>.',
    required: [],
  })
  .openapi('S3SetObjectAclOperation')

const S3SetObjectTaggingOperationSchema = z
  .object({ TagSet: S3TagSetSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional() })
  .openapi({
    description:
      'Contains the configuration parameters for a PUT Object Tagging operation. S3 Batch Operations passes every object to the underlying <code>PutObjectTagging</code> API operation. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTtagging.html">PutObjectTagging</a>.',
    required: [],
  })
  .openapi('S3SetObjectTaggingOperation')

const S3DeleteObjectTaggingOperationSchema = z
  .object({})
  .openapi({
    description:
      "Contains no configuration parameters because the DELETE Object tagging (<code>DeleteObjectTagging</code>) API operation accepts only the bucket name and key name as parameters, which are defined in the job's manifest.",
  })
  .openapi('S3DeleteObjectTaggingOperation')

const S3ExpirationInDaysSchema = z.int().min(0).openapi('S3ExpirationInDays')

const S3GlacierJobTierSchema = z.enum(['BULK', 'STANDARD']).openapi('S3GlacierJobTier')

const S3InitiateRestoreObjectOperationSchema = z
  .object({
    ExpirationInDays: S3ExpirationInDaysSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This argument specifies how long the S3 Glacier or S3 Glacier Deep Archive object remains available in Amazon S3. S3 Initiate Restore Object jobs that target S3 Glacier and S3 Glacier Deep Archive objects require <code>ExpirationInDays</code> set to 1 or greater.</p> <p>Conversely, do <i>not</i> set <code>ExpirationInDays</code> when creating S3 Initiate Restore Object jobs that target S3 Intelligent-Tiering Archive Access and Deep Archive Access tier objects. Objects in S3 Intelligent-Tiering archive access tiers are not subject to restore expiry, so specifying <code>ExpirationInDays</code> results in restore request failure.</p> <p>S3 Batch Operations jobs can operate either on S3 Glacier and S3 Glacier Deep Archive storage class objects or on S3 Intelligent-Tiering Archive Access and Deep Archive Access storage tier objects, but not both types in the same job. If you need to restore objects of both types you <i>must</i> create separate Batch Operations jobs. </p>',
        }),
    ).exactOptional(),
    GlacierJobTier: S3GlacierJobTierSchema.and(
      z
        .any()
        .openapi({
          description:
            'S3 Batch Operations supports <code>STANDARD</code> and <code>BULK</code> retrieval tiers, but not the <code>EXPEDITED</code> retrieval tier.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the configuration parameters for a POST Object restore job. S3 Batch Operations passes every object to the underlying <code>RestoreObject</code> API operation. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPOSTrestore.html#RESTObjectPOSTrestore-restore-request">RestoreObject</a>.',
    required: [],
  })
  .openapi('S3InitiateRestoreObjectOperation')

const S3ObjectLockLegalHoldSchema = z
  .object({
    Status: S3ObjectLockLegalHoldStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Object Lock legal hold status to be applied to all objects in the Batch Operations job.',
        }),
    ),
  })
  .openapi({
    required: ['Status'],
    description:
      'Whether S3 Object Lock legal hold will be applied to objects in an S3 Batch Operations job.',
  })
  .openapi('S3ObjectLockLegalHold')

const S3SetObjectLegalHoldOperationSchema = z
  .object({
    LegalHold: S3ObjectLockLegalHoldSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the Object Lock legal hold status to be applied to all objects in the Batch Operations job.',
        }),
    ),
  })
  .openapi({
    required: ['LegalHold'],
    description:
      'Contains the configuration for an S3 Object Lock legal hold operation that an S3 Batch Operations job passes to every object to the underlying <code>PutObjectLegalHold</code> API operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-legal-hold.html">Using S3 Object Lock legal hold with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.',
  })
  .openapi('S3SetObjectLegalHoldOperation')

const S3ObjectLockRetentionModeSchema = z
  .enum(['COMPLIANCE', 'GOVERNANCE'])
  .openapi('S3ObjectLockRetentionMode')

const S3RetentionSchema = z
  .object({
    RetainUntilDate: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date when the applied Object Lock retention will expire on all objects set by the Batch Operations job.',
        }),
    ).exactOptional(),
    Mode: S3ObjectLockRetentionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Object Lock retention mode to be applied to all objects in the Batch Operations job.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the S3 Object Lock retention mode to be applied to all objects in the S3 Batch Operations job. If you don\'t provide <code>Mode</code> and <code>RetainUntilDate</code> data types in your operation, you will remove the retention from your objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using S3 Object Lock retention with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.',
    required: [],
  })
  .openapi('S3Retention')

const S3SetObjectRetentionOperationSchema = z
  .object({
    BypassGovernanceRetention: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates if the action should be applied to objects in the Batch Operations job even if they have Object Lock <code> GOVERNANCE</code> type in place.',
        }),
    ).exactOptional(),
    Retention: S3RetentionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the Object Lock retention mode to be applied to all objects in the Batch Operations job. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using S3 Object Lock retention with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.',
        }),
    ),
  })
  .openapi({
    required: ['Retention'],
    description:
      'Contains the configuration parameters for the Object Lock retention action for an S3 Batch Operations job. Batch Operations passes every object to the underlying <code>PutObjectRetention</code> API operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using S3 Object Lock retention with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.',
  })
  .openapi('S3SetObjectRetentionOperation')

const S3ReplicateObjectOperationSchema = z
  .object({})
  .openapi({
    description:
      "Directs the specified job to invoke <code>ReplicateObject</code> on every object in the job's manifest.",
  })
  .openapi('S3ReplicateObjectOperation')

const JobReportFormatSchema = z.literal('Report_CSV_20180820').openapi('JobReportFormat')

const ReportPrefixStringSchema = z.string().min(1).max(512).openapi('ReportPrefixString')

const JobReportScopeSchema = z.enum(['AllTasks', 'FailedTasksOnly']).openapi('JobReportScope')

const JobManifestFormatSchema = z
  .enum(['S3BatchOperations_CSV_20180820', 'S3InventoryReport_CSV_20161130'])
  .openapi('JobManifestFormat')

const JobManifestFieldNameSchema = z
  .enum(['Ignore', 'Bucket', 'Key', 'VersionId'])
  .openapi('JobManifestFieldName')

const JobManifestFieldListSchema = z
  .array(JobManifestFieldNameSchema)
  .openapi('JobManifestFieldList')

const JobManifestSpecSchema = z
  .object({
    Format: JobManifestFormatSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates which of the available formats the specified manifest uses.',
        }),
    ),
    Fields: JobManifestFieldListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the specified manifest object is in the <code>S3BatchOperations_CSV_20180820</code> format, this element describes which columns contain the required data.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Format'],
    description:
      'Describes the format of a manifest. If the manifest is in CSV format, also describes the columns contained within the manifest.',
  })
  .openapi('JobManifestSpec')

const S3KeyArnStringSchema = z
  .string()
  .regex(/arn:[^:]+:s3:.*/)
  .min(1)
  .max(2000)
  .openapi('S3KeyArnString')

const S3ObjectVersionIdSchema = z.string().min(1).max(2000).openapi('S3ObjectVersionId')

const JobManifestLocationSchema = z
  .object({
    ObjectArn: S3KeyArnStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) for a manifest object.</p> <important> <p>When you\'re using XML requests, you must replace special characters (such as carriage returns) in object keys with their equivalent XML entity codes. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints"> XML-related object key constraints</a> in the <i>Amazon S3 User Guide</i>.</p> </important>',
        }),
    ),
    ObjectVersionId: S3ObjectVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The optional version ID to identify a specific version of the manifest object.',
        }),
    ).exactOptional(),
    ETag: NonEmptyMaxLength1024StringSchema.and(
      z.any().openapi({ description: 'The ETag for the specified manifest object.' }),
    ),
  })
  .openapi({
    required: ['ObjectArn', 'ETag'],
    description: 'Contains the information required to locate a manifest object.',
  })
  .openapi('JobManifestLocation')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const IdempotencyExceptionSchema = z.any().openapi('IdempotencyException')

const InternalServiceExceptionSchema = z.any().openapi('InternalServiceException')

const AsyncRequestTokenARNSchema = z
  .string()
  .regex(/arn:.+/)
  .min(1)
  .max(1024)
  .openapi('AsyncRequestTokenARN')

const CreateMultiRegionAccessPointResultSchema = z
  .object({
    RequestTokenARN: AsyncRequestTokenARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The request token associated with the request. You can use this token with <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html">DescribeMultiRegionAccessPointOperation</a> to determine the status of asynchronous requests.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateMultiRegionAccessPointResult')

const MultiRegionAccessPointNameSchema = z
  .string()
  .regex(/^[a-z0-9][-a-z0-9]{1,48}[a-z0-9]$/)
  .max(50)
  .openapi('MultiRegionAccessPointName')

const PublicAccessBlockConfigurationSchema = z
  .object({
    BlockPublicAcls: SettingSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account. Setting this element to <code>TRUE</code> causes the following behavior:</p> <ul> <li> <p> <code>PutBucketAcl</code> and <code>PutObjectAcl</code> calls fail if the specified ACL is public.</p> </li> <li> <p>PUT Object calls fail if the request includes a public ACL.</p> </li> <li> <p>PUT Bucket calls fail if the request includes a public ACL.</p> </li> </ul> <p>Enabling this setting doesn't affect existing policies or ACLs.</p> <p>This property is not supported for Amazon S3 on Outposts.</p>",
        }),
    ).exactOptional(),
    IgnorePublicAcls: SettingSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. Setting this element to <code>TRUE</code> causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain. </p> <p>Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.</p> <p>This property is not supported for Amazon S3 on Outposts.</p>",
        }),
    ).exactOptional(),
    BlockPublicPolicy: SettingSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies whether Amazon S3 should block public bucket policies for buckets in this account. Setting this element to <code>TRUE</code> causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access. </p> <p>Enabling this setting doesn't affect existing bucket policies.</p> <p>This property is not supported for Amazon S3 on Outposts.</p>",
        }),
    ).exactOptional(),
    RestrictPublicBuckets: SettingSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies whether Amazon S3 should restrict public bucket policies for buckets in this account. Setting this element to <code>TRUE</code> restricts access to buckets with public policies to only Amazon Web Service principals and authorized users within this account.</p> <p>Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.</p> <p>This property is not supported for Amazon S3 on Outposts.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 account. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p> <p>This data type is not supported for Amazon S3 on Outposts.</p>',
    required: [],
  })
  .openapi('PublicAccessBlockConfiguration')

const BucketNameSchema = z.string().min(3).max(255).openapi('BucketName')

const RegionSchema = z
  .object({
    Bucket: BucketNameSchema.and(
      z.any().openapi({ description: 'The name of the associated bucket for the Region.' }),
    ),
    BucketAccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Web Services account ID that owns the Amazon S3 bucket that's associated with this Multi-Region Access Point.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Bucket'],
    description:
      'A Region that supports a Multi-Region Access Point as well as the associated bucket for the Region.',
  })
  .openapi('Region')

const RegionCreationListSchema = z
  .array(RegionSchema.and(z.any().openapi({ xml: { name: 'Region' } })))
  .openapi('RegionCreationList')

const DeleteJobTaggingResultSchema = z.object({}).openapi('DeleteJobTaggingResult')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const DeleteMultiRegionAccessPointResultSchema = z
  .object({
    RequestTokenARN: AsyncRequestTokenARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The request token associated with the request. You can use this token with <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html">DescribeMultiRegionAccessPointOperation</a> to determine the status of asynchronous requests.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteMultiRegionAccessPointResult')

const DeleteStorageLensConfigurationTaggingResultSchema = z
  .object({})
  .openapi('DeleteStorageLensConfigurationTaggingResult')

const ConfirmationRequiredSchema = z.boolean().openapi('ConfirmationRequired')

const NonEmptyMaxLength256StringSchema = z
  .string()
  .min(1)
  .max(256)
  .openapi('NonEmptyMaxLength256String')

const JobArnSchema = z
  .string()
  .regex(/arn:[^:]+:s3:[a-zA-Z0-9\-]+:\d{12}:job\/.*/)
  .min(1)
  .max(1024)
  .openapi('JobArn')

const JobStatusSchema = z
  .enum([
    'Active',
    'Cancelled',
    'Cancelling',
    'Complete',
    'Completing',
    'Failed',
    'Failing',
    'New',
    'Paused',
    'Pausing',
    'Preparing',
    'Ready',
    'Suspended',
  ])
  .openapi('JobStatus')

const JobManifestSchema = z
  .object({
    Spec: JobManifestSpecSchema.and(
      z
        .any()
        .openapi({
          description:
            "Describes the format of the specified job's manifest. If the manifest is in CSV format, also describes the columns contained within the manifest.",
        }),
    ),
    Location: JobManifestLocationSchema.and(
      z
        .any()
        .openapi({
          description: "Contains the information required to locate the specified job's manifest.",
        }),
    ),
  })
  .openapi({
    required: ['Spec', 'Location'],
    description: "Contains the configuration information for a job's manifest.",
  })
  .openapi('JobManifest')

const JobOperationSchema = z
  .object({
    LambdaInvoke: LambdaInvokeOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Directs the specified job to invoke an Lambda function on every object in the manifest.',
        }),
    ).exactOptional(),
    S3PutObjectCopy: S3CopyObjectOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Directs the specified job to run a PUT Copy object call on every object in the manifest.',
        }),
    ).exactOptional(),
    S3PutObjectAcl: S3SetObjectAclOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Directs the specified job to run a <code>PutObjectAcl</code> call on every object in the manifest.',
        }),
    ).exactOptional(),
    S3PutObjectTagging: S3SetObjectTaggingOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Directs the specified job to run a PUT Object tagging call on every object in the manifest.',
        }),
    ).exactOptional(),
    S3DeleteObjectTagging: S3DeleteObjectTaggingOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Directs the specified job to execute a DELETE Object tagging call on every object in the manifest.',
        }),
    ).exactOptional(),
    S3InitiateRestoreObject: S3InitiateRestoreObjectOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Directs the specified job to initiate restore requests for every archived object in the manifest.',
        }),
    ).exactOptional(),
    S3PutObjectLegalHold: S3SetObjectLegalHoldOperationSchema.exactOptional(),
    S3PutObjectRetention: S3SetObjectRetentionOperationSchema.exactOptional(),
    S3ReplicateObject: S3ReplicateObjectOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            "Directs the specified job to invoke <code>ReplicateObject</code> on every object in the job's manifest.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The operation that you want this job to perform on every object listed in the manifest. For more information about the available operations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-operations.html">Operations</a> in the <i>Amazon S3 User Guide</i>.',
    required: [],
  })
  .openapi('JobOperation')

const JobPrioritySchema = z.int().min(0).max(2147483647).openapi('JobPriority')

const JobTotalNumberOfTasksSchema = z.int().min(0).openapi('JobTotalNumberOfTasks')

const JobNumberOfTasksSucceededSchema = z.int().min(0).openapi('JobNumberOfTasksSucceeded')

const JobNumberOfTasksFailedSchema = z.int().min(0).openapi('JobNumberOfTasksFailed')

const JobTimeInStateSecondsSchema = z.int().min(0).openapi('JobTimeInStateSeconds')

const JobTimersSchema = z
  .object({
    ElapsedTimeInActiveSeconds: JobTimeInStateSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the elapsed time in seconds the job has been in the Active job state.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides timing details for the job.', required: [] })
  .openapi('JobTimers')

const JobProgressSummarySchema = z
  .object({
    TotalNumberOfTasks: JobTotalNumberOfTasksSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    NumberOfTasksSucceeded: JobNumberOfTasksSucceededSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    NumberOfTasksFailed: JobNumberOfTasksFailedSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    Timers: JobTimersSchema.and(
      z.any().openapi({ description: "The JobTimers attribute of a job's progress summary." }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the total number of tasks that the specified job has started, the number of tasks that succeeded, and the number of tasks that failed.',
    required: [],
  })
  .openapi('JobProgressSummary')

const JobStatusUpdateReasonSchema = z.string().min(1).max(256).openapi('JobStatusUpdateReason')

const JobFailureCodeSchema = z.string().min(1).max(64).openapi('JobFailureCode')

const JobFailureReasonSchema = z.string().min(1).max(256).openapi('JobFailureReason')

const JobFailureSchema = z
  .object({
    FailureCode: JobFailureCodeSchema.and(
      z.any().openapi({ description: 'The failure code, if any, for the specified job.' }),
    ).exactOptional(),
    FailureReason: JobFailureReasonSchema.and(
      z.any().openapi({ description: 'The failure reason, if any, for the specified job.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'If this job failed, this element indicates why the job failed.',
    required: [],
  })
  .openapi('JobFailure')

const JobFailureListSchema = z.array(JobFailureSchema).openapi('JobFailureList')

const JobReportSchema = z
  .object({
    Bucket: S3BucketArnStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the bucket where specified job-completion report will be stored.',
        }),
    ).exactOptional(),
    Format: JobReportFormatSchema.and(
      z.any().openapi({ description: 'The format of the specified job-completion report.' }),
    ).exactOptional(),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether the specified job will generate a job-completion report.',
        }),
    ),
    Prefix: ReportPrefixStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional prefix to describe where in the specified bucket the job-completion report will be stored. Amazon S3 stores the job-completion report at <code>&lt;prefix&gt;/job-&lt;job-id&gt;/report.json</code>.',
        }),
    ).exactOptional(),
    ReportScope: JobReportScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the job-completion report will include details of all tasks or only failed tasks.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Enabled'],
    description: 'Contains the configuration parameters for a job-completion report.',
  })
  .openapi('JobReport')

const JobCreationTimeSchema = z.iso.datetime({ offset: true }).openapi('JobCreationTime')

const JobTerminationDateSchema = z.iso.datetime({ offset: true }).openapi('JobTerminationDate')

const IAMRoleArnSchema = z
  .string()
  .regex(/arn:[^:]+:iam::\d{12}:role\/.*/)
  .min(1)
  .max(2048)
  .openapi('IAMRoleArn')

const SuspendedDateSchema = z.iso.datetime({ offset: true }).openapi('SuspendedDate')

const SuspendedCauseSchema = z.string().min(1).max(1024).openapi('SuspendedCause')

const JobManifestGeneratorSchema: z.ZodType<JobManifestGeneratorType> = z
  .lazy(() =>
    z
      .object({
        S3JobManifestGenerator: S3JobManifestGeneratorSchema.and(
          z.any().openapi({ description: "The S3 job ManifestGenerator's configuration details." }),
        ).exactOptional(),
      })
      .openapi({
        description: "Configures the type of the job's ManifestGenerator.",
        required: [],
      }),
  )
  .openapi('JobManifestGenerator')

const S3GeneratedManifestDescriptorSchema = z
  .object({
    Format: GeneratedManifestFormatSchema.and(
      z.any().openapi({ description: 'The format of the generated manifest.' }),
    ).exactOptional(),
    Location: JobManifestLocationSchema.exactOptional(),
  })
  .openapi({
    description:
      "Describes the specified job's generated manifest. Batch Operations jobs created with a ManifestGenerator populate details of this descriptor after execution of the ManifestGenerator.",
    required: [],
  })
  .openapi('S3GeneratedManifestDescriptor')

const JobDescriptorSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The ID for the specified job.' }),
    ).exactOptional(),
    ConfirmationRequired: ConfirmationRequiredSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether confirmation is required before Amazon S3 begins running the specified job. Confirmation is required only for jobs created through the Amazon S3 console.',
        }),
    ).exactOptional(),
    Description: NonEmptyMaxLength256StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The description for this job, if one was provided in this job's <code>Create Job</code> request.",
        }),
    ).exactOptional(),
    JobArn: JobArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for this job.' }),
    ).exactOptional(),
    Status: JobStatusSchema.and(
      z.any().openapi({ description: 'The current status of the specified job.' }),
    ).exactOptional(),
    Manifest: JobManifestSchema.and(
      z
        .any()
        .openapi({
          description: "The configuration information for the specified job's manifest object.",
        }),
    ).exactOptional(),
    Operation: JobOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The operation that the specified job is configured to run on the objects listed in the manifest.',
        }),
    ).exactOptional(),
    Priority: JobPrioritySchema.and(
      z.any().openapi({ description: 'The priority of the specified job.' }),
    ).exactOptional(),
    ProgressSummary: JobProgressSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the total number of tasks that the specified job has run, the number of tasks that succeeded, and the number of tasks that failed.',
        }),
    ).exactOptional(),
    StatusUpdateReason: JobStatusUpdateReasonSchema.and(
      z.any().openapi({ description: 'The reason for updating the job.' }),
    ).exactOptional(),
    FailureReasons: JobFailureListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the specified job failed, this field contains information describing the failure.',
        }),
    ).exactOptional(),
    Report: JobReportSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the configuration information for the job-completion report if you requested one in the <code>Create Job</code> request.',
        }),
    ).exactOptional(),
    CreationTime: JobCreationTimeSchema.and(
      z.any().openapi({ description: 'A timestamp indicating when this job was created.' }),
    ).exactOptional(),
    TerminationDate: JobTerminationDateSchema.and(
      z
        .any()
        .openapi({
          description:
            "A timestamp indicating when this job terminated. A job's termination date is the date and time when it succeeded, failed, or was canceled.",
        }),
    ).exactOptional(),
    RoleArn: IAMRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the Identity and Access Management (IAM) role assigned to run the tasks for this job.',
        }),
    ).exactOptional(),
    SuspendedDate: SuspendedDateSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp when this job was suspended, if it has been suspended.',
        }),
    ).exactOptional(),
    SuspendedCause: SuspendedCauseSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reason why the specified job was suspended. A job is only suspended if you create it through the Amazon S3 console. When you create the job, it enters the <code>Suspended</code> state to await confirmation before running. After you confirm the job, it automatically exits the <code>Suspended</code> state.',
        }),
    ).exactOptional(),
    ManifestGenerator: JobManifestGeneratorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The manifest generator that was used to generate a job manifest for this job.',
        }),
    ).exactOptional(),
    GeneratedManifestDescriptor: S3GeneratedManifestDescriptorSchema.and(
      z
        .any()
        .openapi({
          description:
            "The attribute of the JobDescriptor containing details about the job's generated manifest.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A container element for the job configuration and status information returned by a <code>Describe Job</code> request.',
    required: [],
  })
  .openapi('JobDescriptor')

const DescribeJobResultSchema = z
  .object({
    Job: JobDescriptorSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the configuration parameters and status for the job specified in the <code>Describe Job</code> request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeJobResult')

const AsyncCreationTimestampSchema = z.iso
  .datetime({ offset: true })
  .openapi('AsyncCreationTimestamp')

const AsyncOperationNameSchema = z
  .enum([
    'CreateMultiRegionAccessPoint',
    'DeleteMultiRegionAccessPoint',
    'PutMultiRegionAccessPointPolicy',
  ])
  .openapi('AsyncOperationName')

const CreateMultiRegionAccessPointInputSchema = z
  .object({
    Name: MultiRegionAccessPointNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the Multi-Region Access Point associated with this request.',
        }),
    ),
    PublicAccessBlock: PublicAccessBlockConfigurationSchema.exactOptional(),
    Regions: RegionCreationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The buckets in different Regions that are associated with the Multi-Region Access Point.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Regions'],
    description:
      'A container for the information associated with a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a> request. ',
  })
  .openapi('CreateMultiRegionAccessPointInput')

const DeleteMultiRegionAccessPointInputSchema = z
  .object({
    Name: MultiRegionAccessPointNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the Multi-Region Access Point associated with this request.',
        }),
    ),
  })
  .openapi({
    required: ['Name'],
    description:
      'A container for the information associated with a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html">DeleteMultiRegionAccessPoint</a> request.',
  })
  .openapi('DeleteMultiRegionAccessPointInput')

const PolicySchema = z.string().openapi('Policy')

const PutMultiRegionAccessPointPolicyInputSchema = z
  .object({
    Name: MultiRegionAccessPointNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the Multi-Region Access Point associated with the request.',
        }),
    ),
    Policy: PolicySchema.and(
      z
        .any()
        .openapi({
          description: 'The policy details for the <code>PutMultiRegionAccessPoint</code> request.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Policy'],
    description:
      'A container for the information associated with a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutMultiRegionAccessPoint.html">PutMultiRegionAccessPoint</a> request.',
  })
  .openapi('PutMultiRegionAccessPointPolicyInput')

const AsyncRequestParametersSchema = z
  .object({
    CreateMultiRegionAccessPointRequest: CreateMultiRegionAccessPointInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container of the parameters for a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a> request.',
        }),
    ).exactOptional(),
    DeleteMultiRegionAccessPointRequest: DeleteMultiRegionAccessPointInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container of the parameters for a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html">DeleteMultiRegionAccessPoint</a> request.',
        }),
    ).exactOptional(),
    PutMultiRegionAccessPointPolicyRequest: PutMultiRegionAccessPointPolicyInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container of the parameters for a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutMultiRegionAccessPoint.html">PutMultiRegionAccessPoint</a> request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A container for the request parameters associated with an asynchronous request.',
    required: [],
  })
  .openapi('AsyncRequestParameters')

const AsyncRequestStatusSchema = z.string().openapi('AsyncRequestStatus')

const RegionNameSchema = z.string().min(1).max(64).openapi('RegionName')

const MultiRegionAccessPointRegionalResponseSchema = z
  .object({
    Name: RegionNameSchema.and(
      z.any().openapi({ description: 'The name of the Region in the Multi-Region Access Point.' }),
    ).exactOptional(),
    RequestStatus: AsyncRequestStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'The current status of the Multi-Region Access Point in this Region.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Status information for a single Multi-Region Access Point Region.',
    required: [],
  })
  .openapi('MultiRegionAccessPointRegionalResponse')

const MultiRegionAccessPointRegionalResponseListSchema = z
  .array(
    MultiRegionAccessPointRegionalResponseSchema.and(z.any().openapi({ xml: { name: 'Region' } })),
  )
  .openapi('MultiRegionAccessPointRegionalResponseList')

const MultiRegionAccessPointsAsyncResponseSchema = z
  .object({
    Regions: MultiRegionAccessPointRegionalResponseListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of status information for the different Regions that a Multi-Region Access Point supports.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The Multi-Region Access Point details that are returned when querying about an asynchronous request.',
    required: [],
  })
  .openapi('MultiRegionAccessPointsAsyncResponse')

const AsyncErrorDetailsSchema = z
  .object({
    Code: MaxLength1024StringSchema.and(
      z.any().openapi({ description: 'A string that uniquely identifies the error condition.' }),
    ).exactOptional(),
    Message: MaxLength1024StringSchema.and(
      z.any().openapi({ description: 'A generic description of the error condition in English.' }),
    ).exactOptional(),
    Resource: MaxLength1024StringSchema.and(
      z.any().openapi({ description: 'The identifier of the resource associated with the error.' }),
    ).exactOptional(),
    RequestId: MaxLength1024StringSchema.and(
      z.any().openapi({ description: 'The ID of the request associated with the error.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Error details for the failed asynchronous operation.', required: [] })
  .openapi('AsyncErrorDetails')

const AsyncResponseDetailsSchema = z
  .object({
    MultiRegionAccessPointDetails: MultiRegionAccessPointsAsyncResponseSchema.and(
      z.any().openapi({ description: 'The details for the Multi-Region Access Point.' }),
    ).exactOptional(),
    ErrorDetails: AsyncErrorDetailsSchema.and(
      z.any().openapi({ description: 'Error details for an asynchronous request.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A container for the response details that are returned when querying about an asynchronous request.',
    required: [],
  })
  .openapi('AsyncResponseDetails')

const AsyncOperationSchema = z
  .object({
    CreationTime: AsyncCreationTimestampSchema.and(
      z.any().openapi({ description: 'The time that the request was sent to the service.' }),
    ).exactOptional(),
    Operation: AsyncOperationNameSchema.and(
      z.any().openapi({ description: 'The specific operation for the asynchronous request.' }),
    ).exactOptional(),
    RequestTokenARN: AsyncRequestTokenARNSchema.and(
      z.any().openapi({ description: 'The request token associated with the request.' }),
    ).exactOptional(),
    RequestParameters: AsyncRequestParametersSchema.and(
      z.any().openapi({ description: 'The parameters associated with the request.' }),
    ).exactOptional(),
    RequestStatus: AsyncRequestStatusSchema.and(
      z.any().openapi({ description: 'The current status of the request.' }),
    ).exactOptional(),
    ResponseDetails: AsyncResponseDetailsSchema.and(
      z.any().openapi({ description: 'The details of the response.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A container for the information about an asynchronous operation.',
    required: [],
  })
  .openapi('AsyncOperation')

const DescribeMultiRegionAccessPointOperationResultSchema = z
  .object({
    AsyncOperation: AsyncOperationSchema.and(
      z
        .any()
        .openapi({
          description: 'A container element containing the details of the asynchronous operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeMultiRegionAccessPointOperationResult')

const AccessPointNameSchema = z.string().min(3).max(255).openapi('AccessPointName')

const NetworkOriginSchema = z.enum(['Internet', 'VPC']).openapi('NetworkOrigin')

const VpcConfigurationSchema = z
  .object({
    VpcId: VpcIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this field is specified, this access point will only allow connections from the specified VPC ID.',
        }),
    ),
  })
  .openapi({
    required: ['VpcId'],
    description: 'The virtual private cloud (VPC) configuration for an access point.',
  })
  .openapi('VpcConfiguration')

const CreationDateSchema = z.iso.datetime({ offset: true }).openapi('CreationDate')

const EndpointsSchema = z.record(z.string(), NonEmptyMaxLength1024StringSchema).openapi('Endpoints')

const GetAccessPointResultSchema = z
  .object({
    Name: AccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the specified access point.' }),
    ).exactOptional(),
    Bucket: BucketNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the bucket associated with the specified access point.',
        }),
    ).exactOptional(),
    NetworkOrigin: NetworkOriginSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates whether this access point allows access from the public internet. If <code>VpcConfiguration</code> is specified for this access point, then <code>NetworkOrigin</code> is <code>VPC</code>, and the access point doesn't allow access from the public internet. Otherwise, <code>NetworkOrigin</code> is <code>Internet</code>, and the access point allows access from the public internet, subject to the access point and bucket access policies.</p> <p>This will always be true for an Amazon S3 on Outposts access point</p>",
        }),
    ).exactOptional(),
    VpcConfiguration: VpcConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains the virtual private cloud (VPC) configuration for the specified access point.</p> <note> <p>This element is empty if this access point is an Amazon S3 on Outposts access point that is used by other Amazon Web Services.</p> </note>',
        }),
    ).exactOptional(),
    PublicAccessBlockConfiguration: PublicAccessBlockConfigurationSchema.exactOptional(),
    CreationDate: CreationDateSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time when the specified access point was created.' }),
    ).exactOptional(),
    Alias: AliasSchema.and(
      z.any().openapi({ description: 'The name or alias of the access point.' }),
    ).exactOptional(),
    AccessPointArn: S3AccessPointArnSchema.and(
      z.any().openapi({ description: 'The ARN of the access point.' }),
    ).exactOptional(),
    Endpoints: EndpointsSchema.and(
      z.any().openapi({ description: 'The VPC endpoint for the access point.' }),
    ).exactOptional(),
    BucketAccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the S3 bucket associated with this access point.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAccessPointResult')

const ObjectLambdaConfigurationSchema = z
  .object({
    SupportingAccessPoint: ObjectLambdaSupportingAccessPointArnSchema.and(
      z
        .any()
        .openapi({
          description: 'Standard access point associated with the Object Lambda Access Point.',
        }),
    ),
    CloudWatchMetricsEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'A container for whether the CloudWatch metrics configuration is enabled.',
        }),
    ).exactOptional(),
    AllowedFeatures: ObjectLambdaAllowedFeaturesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container for allowed features. Valid inputs are <code>GetObject-Range</code>, <code>GetObject-PartNumber</code>, <code>HeadObject-Range</code>, and <code>HeadObject-PartNumber</code>.',
        }),
    ).exactOptional(),
    TransformationConfigurations: ObjectLambdaTransformationConfigurationsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container for transformation configurations for an Object Lambda Access Point.',
        }),
    ),
  })
  .openapi({
    required: ['SupportingAccessPoint', 'TransformationConfigurations'],
    description: 'A configuration used when creating an Object Lambda Access Point.',
  })
  .openapi('ObjectLambdaConfiguration')

const GetAccessPointConfigurationForObjectLambdaResultSchema = z
  .object({
    Configuration: ObjectLambdaConfigurationSchema.and(
      z.any().openapi({ description: 'Object Lambda Access Point configuration document.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAccessPointConfigurationForObjectLambdaResult')

const ObjectLambdaAccessPointNameSchema = z
  .string()
  .regex(/^[a-z0-9]([a-z0-9\-]*[a-z0-9])?$/)
  .min(3)
  .max(45)
  .openapi('ObjectLambdaAccessPointName')

const GetAccessPointForObjectLambdaResultSchema = z
  .object({
    Name: ObjectLambdaAccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the Object Lambda Access Point.' }),
    ).exactOptional(),
    PublicAccessBlockConfiguration: PublicAccessBlockConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration to block all public access. This setting is turned on and can not be edited. ',
        }),
    ).exactOptional(),
    CreationDate: CreationDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when the specified Object Lambda Access Point was created.',
        }),
    ).exactOptional(),
    Alias: ObjectLambdaAccessPointAliasSchema.and(
      z.any().openapi({ description: 'The alias of the Object Lambda Access Point.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAccessPointForObjectLambdaResult')

const GetAccessPointPolicyResultSchema = z
  .object({
    Policy: PolicySchema.and(
      z
        .any()
        .openapi({
          description: 'The access point policy associated with the specified access point.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAccessPointPolicyResult')

const ObjectLambdaPolicySchema = z.string().openapi('ObjectLambdaPolicy')

const GetAccessPointPolicyForObjectLambdaResultSchema = z
  .object({
    Policy: ObjectLambdaPolicySchema.and(
      z.any().openapi({ description: 'Object Lambda Access Point resource policy document.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAccessPointPolicyForObjectLambdaResult')

const IsPublicSchema = z.boolean().openapi('IsPublic')

const PolicyStatusSchema = z
  .object({
    IsPublic: IsPublicSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
  })
  .openapi({
    description:
      'Indicates whether this access point policy is public. For more information about how Amazon S3 evaluates policies to determine whether they are public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>. ',
    required: [],
  })
  .openapi('PolicyStatus')

const GetAccessPointPolicyStatusResultSchema = z
  .object({
    PolicyStatus: PolicyStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates the current policy status of the specified access point.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAccessPointPolicyStatusResult')

const GetAccessPointPolicyStatusForObjectLambdaResultSchema = z
  .object({ PolicyStatus: PolicyStatusSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('GetAccessPointPolicyStatusForObjectLambdaResult')

const PublicAccessBlockEnabledSchema = z.boolean().openapi('PublicAccessBlockEnabled')

const GetBucketResultSchema = z
  .object({
    Bucket: BucketNameSchema.and(
      z.any().openapi({ description: 'The Outposts bucket requested.' }),
    ).exactOptional(),
    PublicAccessBlockEnabled: PublicAccessBlockEnabledSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    CreationDate: CreationDateSchema.and(
      z.any().openapi({ description: 'The creation date of the Outposts bucket.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBucketResult')

const DateSchema = z.iso.datetime({ offset: true }).openapi('Date')

const DaysSchema = z.int().openapi('Days')

const ExpiredObjectDeleteMarkerSchema = z.boolean().openapi('ExpiredObjectDeleteMarker')

const LifecycleExpirationSchema = z
  .object({
    Date: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates at what date the object is to be deleted. Should be in GMT ISO 8601 format.',
        }),
    ).exactOptional(),
    Days: DaysSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the lifetime, in days, of the objects that are subject to the rule. The value must be a non-zero positive integer.',
        }),
    ).exactOptional(),
    ExpiredObjectDeleteMarker: ExpiredObjectDeleteMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether Amazon S3 will remove a delete marker with no noncurrent versions. If set to true, the delete marker will be expired. If set to false, the policy takes no action. This cannot be specified with Days or Date in a Lifecycle Expiration Policy.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The container of the Outposts bucket lifecycle expiration.',
    required: [],
  })
  .openapi('LifecycleExpiration')

const IDSchema = z.string().openapi('ID')

const PrefixSchema = z.string().openapi('Prefix')

const ObjectSizeGreaterThanBytesSchema = z.int().openapi('ObjectSizeGreaterThanBytes')

const ObjectSizeLessThanBytesSchema = z.int().openapi('ObjectSizeLessThanBytes')

const LifecycleRuleAndOperatorSchema = z
  .object({
    Prefix: PrefixSchema.and(
      z
        .any()
        .openapi({
          description: 'Prefix identifying one or more objects to which the rule applies.',
        }),
    ).exactOptional(),
    Tags: S3TagSetSchema.and(
      z
        .any()
        .openapi({
          description:
            "All of these tags must exist in the object's tag set in order for the rule to apply.",
        }),
    ).exactOptional(),
    ObjectSizeGreaterThan: ObjectSizeGreaterThanBytesSchema.and(
      z.any().openapi({ description: 'Minimum object size to which the rule applies.' }),
    ).exactOptional(),
    ObjectSizeLessThan: ObjectSizeLessThanBytesSchema.and(
      z.any().openapi({ description: 'Maximum object size to which the rule applies.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The container for the Outposts bucket lifecycle rule and operator.',
    required: [],
  })
  .openapi('LifecycleRuleAndOperator')

const LifecycleRuleFilterSchema = z
  .object({
    Prefix: PrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Prefix identifying one or more objects to which the rule applies.</p> <important> <p>When you\'re using XML requests, you must replace special characters (such as carriage returns) in object keys with their equivalent XML entity codes. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints"> XML-related object key constraints</a> in the <i>Amazon S3 User Guide</i>.</p> </important>',
        }),
    ).exactOptional(),
    Tag: S3TagSchema.exactOptional(),
    And: LifecycleRuleAndOperatorSchema.and(
      z
        .any()
        .openapi({
          description: 'The container for the <code>AND</code> condition for the lifecycle rule.',
        }),
    ).exactOptional(),
    ObjectSizeGreaterThan: ObjectSizeGreaterThanBytesSchema.and(
      z.any().openapi({ description: 'Minimum object size to which the rule applies.' }),
    ).exactOptional(),
    ObjectSizeLessThan: ObjectSizeLessThanBytesSchema.and(
      z.any().openapi({ description: 'Maximum object size to which the rule applies.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The container for the filter of the lifecycle rule.', required: [] })
  .openapi('LifecycleRuleFilter')

const ExpirationStatusSchema = z.enum(['Enabled', 'Disabled']).openapi('ExpirationStatus')

const TransitionStorageClassSchema = z
  .enum(['GLACIER', 'STANDARD_IA', 'ONEZONE_IA', 'INTELLIGENT_TIERING', 'DEEP_ARCHIVE'])
  .openapi('TransitionStorageClass')

const TransitionSchema = z
  .object({
    Date: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates when objects are transitioned to the specified storage class. The date value must be in ISO 8601 format. The time is always midnight UTC.',
        }),
    ).exactOptional(),
    Days: DaysSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the number of days after creation when objects are transitioned to the specified storage class. The value must be a positive integer.',
        }),
    ).exactOptional(),
    StorageClass: TransitionStorageClassSchema.and(
      z
        .any()
        .openapi({ description: 'The storage class to which you want the object to transition.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies when an object transitions to a specified storage class. For more information about Amazon S3 Lifecycle configuration rules, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/lifecycle-transition-general-considerations.html"> Transitioning objects using Amazon S3 Lifecycle</a> in the <i>Amazon S3 User Guide</i>.',
    required: [],
  })
  .openapi('Transition')

const TransitionListSchema = z
  .array(TransitionSchema.and(z.any().openapi({ xml: { name: 'Transition' } })))
  .openapi('TransitionList')

const NoncurrentVersionTransitionSchema = z
  .object({
    NoncurrentDays: DaysSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action. For information about the noncurrent days calculations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations"> How Amazon S3 Calculates How Long an Object Has Been Noncurrent</a> in the <i>Amazon S3 User Guide</i>.',
        }),
    ).exactOptional(),
    StorageClass: TransitionStorageClassSchema.and(
      z.any().openapi({ description: 'The class of storage used to store the object.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The container for the noncurrent version transition.', required: [] })
  .openapi('NoncurrentVersionTransition')

const NoncurrentVersionTransitionListSchema = z
  .array(
    NoncurrentVersionTransitionSchema.and(
      z.any().openapi({ xml: { name: 'NoncurrentVersionTransition' } }),
    ),
  )
  .openapi('NoncurrentVersionTransitionList')

const NoncurrentVersionCountSchema = z.int().openapi('NoncurrentVersionCount')

const NoncurrentVersionExpirationSchema = z
  .object({
    NoncurrentDays: DaysSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action. For information about the noncurrent days calculations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations">How Amazon S3 Calculates When an Object Became Noncurrent</a> in the <i>Amazon S3 User Guide</i>.',
        }),
    ).exactOptional(),
    NewerNoncurrentVersions: NoncurrentVersionCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies how many noncurrent versions S3 on Outposts will retain. If there are this many more recent noncurrent versions, S3 on Outposts will take the associated action. For more information about noncurrent versions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html">Lifecycle configuration elements</a> in the <i>Amazon S3 User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The container of the noncurrent version expiration.', required: [] })
  .openapi('NoncurrentVersionExpiration')

const DaysAfterInitiationSchema = z.int().openapi('DaysAfterInitiation')

const AbortIncompleteMultipartUploadSchema = z
  .object({
    DaysAfterInitiation: DaysAfterInitiationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload to the Outposts bucket.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The container for abort incomplete multipart upload', required: [] })
  .openapi('AbortIncompleteMultipartUpload')

const LifecycleRuleSchema = z
  .object({
    Expiration: LifecycleExpirationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the expiration for the lifecycle of the object in the form of date, days and, whether the object has a delete marker.',
        }),
    ).exactOptional(),
    ID: IDSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique identifier for the rule. The value cannot be longer than 255 characters.',
        }),
    ).exactOptional(),
    Filter: LifecycleRuleFilterSchema.and(
      z.any().openapi({ description: 'The container for the filter of lifecycle rule.' }),
    ).exactOptional(),
    Status: ExpirationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "If 'Enabled', the rule is currently being applied. If 'Disabled', the rule is not currently being applied.",
        }),
    ),
    Transitions: TransitionListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies when an Amazon S3 object transitions to a specified storage class.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>',
        }),
    ).exactOptional(),
    NoncurrentVersionTransitions: NoncurrentVersionTransitionListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> Specifies the transition rule for the lifecycle rule that describes when noncurrent objects transition to a specific storage class. If your bucket is versioning-enabled (or versioning is suspended), you can set this action to request that Amazon S3 transition noncurrent object versions to a specific storage class at a set period in the object's lifetime. </p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>",
        }),
    ).exactOptional(),
    NoncurrentVersionExpiration: NoncurrentVersionExpirationSchema.and(
      z.any().openapi({ description: 'The noncurrent version expiration of the lifecycle rule.' }),
    ).exactOptional(),
    AbortIncompleteMultipartUpload: AbortIncompleteMultipartUploadSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 waits before permanently removing all parts of the upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config"> Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Configuration</a> in the <i>Amazon S3 User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Status'],
    description: 'The container for the Outposts bucket lifecycle rule.',
  })
  .openapi('LifecycleRule')

const LifecycleRulesSchema = z
  .array(LifecycleRuleSchema.and(z.any().openapi({ xml: { name: 'Rule' } })))
  .openapi('LifecycleRules')

const GetBucketLifecycleConfigurationResultSchema = z
  .object({
    Rules: LifecycleRulesSchema.and(
      z.any().openapi({ description: 'Container for the lifecycle rule of the Outposts bucket.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBucketLifecycleConfigurationResult')

const GetBucketPolicyResultSchema = z
  .object({
    Policy: PolicySchema.and(
      z.any().openapi({ description: 'The policy of the Outposts bucket.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBucketPolicyResult')

const RoleSchema = z.string().openapi('Role')

const PrioritySchema = z.int().openapi('Priority')

const ReplicationRuleAndOperatorSchema = z
  .object({
    Prefix: PrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object key name prefix that identifies the subset of objects that the rule applies to.',
        }),
    ).exactOptional(),
    Tags: S3TagSetSchema.and(
      z.any().openapi({ description: 'An array of tags that contain key and value pairs.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A container for specifying rule filters. The filters determine the subset of objects to which the rule applies. This element is required only if you specify more than one filter. </p> <p>For example:</p> <ul> <li> <p>If you specify both a <code>Prefix</code> and a <code>Tag</code> filter, wrap these filters in an <code>And</code> element. </p> </li> <li> <p>If you specify a filter based on multiple tags, wrap the <code>Tag</code> elements in an <code>And</code> element.</p> </li> </ul>',
    required: [],
  })
  .openapi('ReplicationRuleAndOperator')

const ReplicationRuleFilterSchema = z
  .object({
    Prefix: PrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An object key name prefix that identifies the subset of objects that the rule applies to.</p> <important> <p>When you\'re using XML requests, you must replace special characters (such as carriage returns) in object keys with their equivalent XML entity codes. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints"> XML-related object key constraints</a> in the <i>Amazon S3 User Guide</i>.</p> </important>',
        }),
    ).exactOptional(),
    Tag: S3TagSchema.exactOptional(),
    And: ReplicationRuleAndOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A container for specifying rule filters. The filters determine the subset of objects that the rule applies to. This element is required only if you specify more than one filter. For example: </p> <ul> <li> <p>If you specify both a <code>Prefix</code> and a <code>Tag</code> filter, wrap these filters in an <code>And</code> element.</p> </li> <li> <p>If you specify a filter based on multiple tags, wrap the <code>Tag</code> elements in an <code>And</code> element.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A filter that identifies the subset of objects to which the replication rule applies. A <code>Filter</code> element must specify exactly one <code>Prefix</code>, <code>Tag</code>, or <code>And</code> child element.',
    required: [],
  })
  .openapi('ReplicationRuleFilter')

const ReplicationRuleStatusSchema = z.enum(['Enabled', 'Disabled']).openapi('ReplicationRuleStatus')

const SseKmsEncryptedObjectsStatusSchema = z
  .enum(['Enabled', 'Disabled'])
  .openapi('SseKmsEncryptedObjectsStatus')

const SseKmsEncryptedObjectsSchema = z
  .object({
    Status: SseKmsEncryptedObjectsStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether Amazon S3 replicates objects that are created with server-side encryption by using an KMS key stored in Key Management Service.',
        }),
    ),
  })
  .openapi({
    required: ['Status'],
    description:
      '<p>A container for filter information that you can use to select S3 objects that are encrypted with Key Management Service (KMS).</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>',
  })
  .openapi('SseKmsEncryptedObjects')

const ReplicaModificationsStatusSchema = z
  .enum(['Enabled', 'Disabled'])
  .openapi('ReplicaModificationsStatus')

const ReplicaModificationsSchema = z
  .object({
    Status: ReplicaModificationsStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether S3 on Outposts replicates modifications to object metadata on replicas.',
        }),
    ),
  })
  .openapi({
    required: ['Status'],
    description:
      '<p>A filter that you can use to specify whether replica modification sync is enabled. S3 on Outposts replica modification sync can help you keep object metadata synchronized between replicas and source objects. By default, S3 on Outposts replicates metadata from the source objects to the replicas only. When replica modification sync is enabled, S3 on Outposts replicates metadata changes made to the replica copies back to the source object, making the replication bidirectional.</p> <p>To replicate object metadata modifications on replicas, you can specify this element and set the <code>Status</code> of this element to <code>Enabled</code>.</p> <note> <p>You must enable replica modification sync on the source and destination buckets to replicate replica metadata changes between the source and the replicas.</p> </note>',
  })
  .openapi('ReplicaModifications')

const SourceSelectionCriteriaSchema = z
  .object({
    SseKmsEncryptedObjects: SseKmsEncryptedObjectsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A filter that you can use to select Amazon S3 objects that are encrypted with server-side encryption by using Key Management Service (KMS) keys. If you include <code>SourceSelectionCriteria</code> in the replication configuration, this element is required. </p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>',
        }),
    ).exactOptional(),
    ReplicaModifications: ReplicaModificationsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A filter that you can use to specify whether replica modification sync is enabled. S3 on Outposts replica modification sync can help you keep object metadata synchronized between replicas and source objects. By default, S3 on Outposts replicates metadata from the source objects to the replicas only. When replica modification sync is enabled, S3 on Outposts replicates metadata changes made to the replica copies back to the source object, making the replication bidirectional.</p> <p>To replicate object metadata modifications on replicas, you can specify this element and set the <code>Status</code> of this element to <code>Enabled</code>.</p> <note> <p>You must enable replica modification sync on the source and destination buckets to replicate replica metadata changes between the source and the replicas.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A container that describes additional filters for identifying the source objects that you want to replicate. You can choose to enable or disable the replication of these objects.',
    required: [],
  })
  .openapi('SourceSelectionCriteria')

const ExistingObjectReplicationStatusSchema = z
  .enum(['Enabled', 'Disabled'])
  .openapi('ExistingObjectReplicationStatus')

const ExistingObjectReplicationSchema = z
  .object({
    Status: ExistingObjectReplicationStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether Amazon S3 replicates existing source bucket objects. ',
        }),
    ),
  })
  .openapi({
    required: ['Status'],
    description:
      '<p>An optional configuration to replicate existing source bucket objects. </p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>',
  })
  .openapi('ExistingObjectReplication')

const BucketIdentifierStringSchema = z.string().openapi('BucketIdentifierString')

const ReplicationTimeStatusSchema = z.enum(['Enabled', 'Disabled']).openapi('ReplicationTimeStatus')

const MinutesSchema = z.int().openapi('Minutes')

const ReplicationTimeValueSchema = z
  .object({
    Minutes: MinutesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains an integer that specifies the time period in minutes. </p> <p>Valid value: 15</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A container that specifies the time value for S3 Replication Time Control (S3 RTC). This value is also used for the replication metrics <code>EventThreshold</code> element. </p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>',
    required: [],
  })
  .openapi('ReplicationTimeValue')

const ReplicationTimeSchema = z
  .object({
    Status: ReplicationTimeStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether S3 Replication Time Control (S3 RTC) is enabled. ',
        }),
    ),
    Time: ReplicationTimeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container that specifies the time by which replication should be complete for all objects and operations on objects. ',
        }),
    ),
  })
  .openapi({
    required: ['Status', 'Time'],
    description:
      '<p>A container that specifies S3 Replication Time Control (S3 RTC) related information, including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>',
  })
  .openapi('ReplicationTime')

const OwnerOverrideSchema = z.literal('Destination').openapi('OwnerOverride')

const AccessControlTranslationSchema = z
  .object({
    Owner: OwnerOverrideSchema.and(
      z.any().openapi({ description: 'Specifies the replica ownership.' }),
    ),
  })
  .openapi({
    required: ['Owner'],
    description:
      '<p>A container for information about access control for replicas.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>',
  })
  .openapi('AccessControlTranslation')

const ReplicaKmsKeyIDSchema = z.string().openapi('ReplicaKmsKeyID')

const EncryptionConfigurationSchema = z
  .object({
    ReplicaKmsKeyID: ReplicaKmsKeyIDSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the ID of the customer managed KMS key that\'s stored in Key Management Service (KMS) for the destination bucket. This ID is either the Amazon Resource Name (ARN) for the KMS key or the alias ARN for the KMS key. Amazon S3 uses this KMS key to encrypt replica objects. Amazon S3 supports only symmetric encryption KMS keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#symmetric-cmks">Symmetric encryption KMS keys</a> in the <i>Amazon Web Services Key Management Service Developer Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Specifies encryption-related information for an Amazon S3 bucket that is a destination for replicated objects.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>',
    required: [],
  })
  .openapi('EncryptionConfiguration')

const MetricsStatusSchema = z.enum(['Enabled', 'Disabled']).openapi('MetricsStatus')

const MetricsSchema = z
  .object({
    Status: MetricsStatusSchema.and(
      z.any().openapi({ description: 'Specifies whether replication metrics are enabled. ' }),
    ),
    EventThreshold: ReplicationTimeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A container that specifies the time threshold for emitting the <code>s3:Replication:OperationMissedThreshold</code> event. </p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Status'],
    description: 'A container that specifies replication metrics-related settings.',
  })
  .openapi('Metrics')

const ReplicationStorageClassSchema = z
  .enum([
    'STANDARD',
    'REDUCED_REDUNDANCY',
    'STANDARD_IA',
    'ONEZONE_IA',
    'INTELLIGENT_TIERING',
    'GLACIER',
    'DEEP_ARCHIVE',
    'OUTPOSTS',
    'GLACIER_IR',
  ])
  .openapi('ReplicationStorageClass')

const DestinationSchema = z
  .object({
    Account: AccountIdSchema.and(
      z.any().openapi({ description: "The destination bucket owner's account ID. " }),
    ).exactOptional(),
    Bucket: BucketIdentifierStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the access point for the destination bucket where you want S3 on Outposts to store the replication results.',
        }),
    ),
    ReplicationTime: ReplicationTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A container that specifies S3 Replication Time Control (S3 RTC) settings, including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated. Must be specified together with a <code>Metrics</code> block. </p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>',
        }),
    ).exactOptional(),
    AccessControlTranslation: AccessControlTranslationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify this property only in a cross-account scenario (where the source and destination bucket owners are not the same), and you want to change replica ownership to the Amazon Web Services account that owns the destination bucket. If this property is not specified in the replication configuration, the replicas are owned by same Amazon Web Services account that owns the source object.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>',
        }),
    ).exactOptional(),
    EncryptionConfiguration: EncryptionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A container that provides information about encryption. If <code>SourceSelectionCriteria</code> is specified, you must specify this element.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>',
        }),
    ).exactOptional(),
    Metrics: MetricsSchema.and(
      z
        .any()
        .openapi({
          description: ' A container that specifies replication metrics-related settings. ',
        }),
    ).exactOptional(),
    StorageClass: ReplicationStorageClassSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The storage class to use when replicating objects. All objects stored on S3 on Outposts are stored in the <code>OUTPOSTS</code> storage class. S3 on Outposts uses the <code>OUTPOSTS</code> storage class to create the object replicas. </p> <note> <p>Values other than <code>OUTPOSTS</code> are not supported by Amazon S3 on Outposts. </p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Bucket'],
    description:
      'Specifies information about the replication destination bucket and its settings for an S3 on Outposts replication configuration.',
  })
  .openapi('Destination')

const DeleteMarkerReplicationStatusSchema = z
  .enum(['Enabled', 'Disabled'])
  .openapi('DeleteMarkerReplicationStatus')

const DeleteMarkerReplicationSchema = z
  .object({
    Status: DeleteMarkerReplicationStatusSchema.and(
      z.any().openapi({ description: 'Indicates whether to replicate delete markers.' }),
    ),
  })
  .openapi({
    required: ['Status'],
    description:
      '<p>Specifies whether S3 on Outposts replicates delete markers. If you specify a <code>Filter</code> element in your replication configuration, you must also include a <code>DeleteMarkerReplication</code> element. If your <code>Filter</code> includes a <code>Tag</code> element, the <code>DeleteMarkerReplication</code> element\'s <code>Status</code> child element must be set to <code>Disabled</code>, because S3 on Outposts does not support replicating delete markers for tag-based rules.</p> <p>For more information about delete marker replication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsReplication.html#outposts-replication-what-is-replicated">How delete operations affect replication</a> in the <i>Amazon S3 User Guide</i>. </p>',
  })
  .openapi('DeleteMarkerReplication')

const ReplicationRuleSchema = z
  .object({
    ID: IDSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the rule. The maximum value is 255 characters.',
        }),
    ).exactOptional(),
    Priority: PrioritySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The priority indicates which rule has precedence whenever two or more replication rules conflict. S3 on Outposts attempts to replicate objects according to all replication rules. However, if there are two or more rules with the same destination Outposts bucket, then objects will be replicated according to the rule with the highest priority. The higher the number, the higher the priority. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-between-outposts.html">Creating replication rules on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p>',
        }),
    ).exactOptional(),
    Prefix: PrefixSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<p>An object key name prefix that identifies the object or objects to which the rule applies. The maximum prefix length is 1,024 characters. To include all objects in an Outposts bucket, specify an empty string.</p> <important> <p>When you\'re using XML requests, you must replace special characters (such as carriage returns) in object keys with their equivalent XML entity codes. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints"> XML-related object key constraints</a> in the <i>Amazon S3 User Guide</i>.</p> </important>Prefix has been deprecated',
        }),
    ).exactOptional(),
    Filter: ReplicationRuleFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'A filter that identifies the subset of objects to which the replication rule applies. A <code>Filter</code> element must specify exactly one <code>Prefix</code>, <code>Tag</code>, or <code>And</code> child element.',
        }),
    ).exactOptional(),
    Status: ReplicationRuleStatusSchema.and(
      z.any().openapi({ description: 'Specifies whether the rule is enabled.' }),
    ),
    SourceSelectionCriteria: SourceSelectionCriteriaSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container that describes additional filters for identifying the source Outposts objects that you want to replicate. You can choose to enable or disable the replication of these objects.',
        }),
    ).exactOptional(),
    ExistingObjectReplication: ExistingObjectReplicationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional configuration to replicate existing source bucket objects. </p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>',
        }),
    ).exactOptional(),
    Destination: DestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container for information about the replication destination and its configurations.',
        }),
    ),
    DeleteMarkerReplication: DeleteMarkerReplicationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether S3 on Outposts replicates delete markers. If you specify a <code>Filter</code> element in your replication configuration, you must also include a <code>DeleteMarkerReplication</code> element. If your <code>Filter</code> includes a <code>Tag</code> element, the <code>DeleteMarkerReplication</code> element\'s <code>Status</code> child element must be set to <code>Disabled</code>, because S3 on Outposts doesn\'t support replicating delete markers for tag-based rules.</p> <p>For more information about delete marker replication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsReplication.html#outposts-replication-what-is-replicated">How delete operations affect replication</a> in the <i>Amazon S3 User Guide</i>. </p>',
        }),
    ).exactOptional(),
    Bucket: BucketIdentifierStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the access point for the source Outposts bucket that you want S3 on Outposts to replicate the objects from.',
        }),
    ),
  })
  .openapi({
    required: ['Status', 'Destination', 'Bucket'],
    description:
      'Specifies which S3 on Outposts objects to replicate and where to store the replicas.',
  })
  .openapi('ReplicationRule')

const ReplicationRulesSchema = z
  .array(ReplicationRuleSchema.and(z.any().openapi({ xml: { name: 'Rule' } })))
  .openapi('ReplicationRules')

const ReplicationConfigurationSchema = z
  .object({
    Role: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that S3 on Outposts assumes when replicating objects. For information about S3 replication on Outposts configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/outposts-replication-how-setup.html">Setting up replication</a> in the <i>Amazon S3 User Guide</i>.',
        }),
    ),
    Rules: ReplicationRulesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container for one or more replication rules. A replication configuration must have at least one rule and can contain an array of 100 rules at the most. ',
        }),
    ),
  })
  .openapi({
    required: ['Role', 'Rules'],
    description:
      'A container for one or more replication rules. A replication configuration must have at least one rule and you can add up to 100 rules. The maximum size of a replication configuration is 128 KB.',
  })
  .openapi('ReplicationConfiguration')

const GetBucketReplicationResultSchema = z
  .object({
    ReplicationConfiguration: ReplicationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container for one or more replication rules. A replication configuration must have at least one rule and you can add up to 100 rules. The maximum size of a replication configuration is 128 KB.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBucketReplicationResult')

const GetBucketTaggingResultSchema = z
  .object({
    TagSet: S3TagSetSchema.and(
      z.any().openapi({ description: 'The tags set of the Outposts bucket.' }),
    ),
  })
  .openapi({ required: ['TagSet'] })
  .openapi('GetBucketTaggingResult')

const BucketVersioningStatusSchema = z
  .enum(['Enabled', 'Suspended'])
  .openapi('BucketVersioningStatus')

const MFADeleteStatusSchema = z.enum(['Enabled', 'Disabled']).openapi('MFADeleteStatus')

const GetBucketVersioningResultSchema = z
  .object({
    Status: BucketVersioningStatusSchema.and(
      z.any().openapi({ description: 'The versioning state of the S3 on Outposts bucket.' }),
    ).exactOptional(),
    MFADelete: MFADeleteStatusSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'MfaDelete' },
          description:
            'Specifies whether MFA delete is enabled in the bucket versioning configuration. This element is returned only if the bucket has been configured with MFA delete. If MFA delete has never been configured for the bucket, this element is not returned.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBucketVersioningResult')

const GetJobTaggingResultSchema = z
  .object({
    Tags: S3TagSetSchema.and(
      z
        .any()
        .openapi({ description: 'The set of tags associated with the S3 Batch Operations job.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetJobTaggingResult')

const MultiRegionAccessPointAliasSchema = z
  .string()
  .regex(/^[a-z][a-z0-9]*[.]mrap$/)
  .max(63)
  .openapi('MultiRegionAccessPointAlias')

const CreationTimestampSchema = z.iso.datetime({ offset: true }).openapi('CreationTimestamp')

const MultiRegionAccessPointStatusSchema = z
  .enum([
    'READY',
    'INCONSISTENT_ACROSS_REGIONS',
    'CREATING',
    'PARTIALLY_CREATED',
    'PARTIALLY_DELETED',
    'DELETING',
  ])
  .openapi('MultiRegionAccessPointStatus')

const RegionReportSchema = z
  .object({
    Bucket: BucketNameSchema.and(
      z.any().openapi({ description: 'The name of the bucket.' }),
    ).exactOptional(),
    Region: RegionNameSchema.and(
      z.any().openapi({ description: 'The name of the Region.' }),
    ).exactOptional(),
    BucketAccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Web Services account ID that owns the Amazon S3 bucket that's associated with this Multi-Region Access Point.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: "A combination of a bucket and Region that's part of a Multi-Region Access Point.",
    required: [],
  })
  .openapi('RegionReport')

const RegionReportListSchema = z
  .array(RegionReportSchema.and(z.any().openapi({ xml: { name: 'Region' } })))
  .openapi('RegionReportList')

const MultiRegionAccessPointReportSchema = z
  .object({
    Name: MultiRegionAccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the Multi-Region Access Point.' }),
    ).exactOptional(),
    Alias: MultiRegionAccessPointAliasSchema.and(
      z
        .any()
        .openapi({
          description:
            'The alias for the Multi-Region Access Point. For more information about the distinction between the name and the alias of an Multi-Region Access Point, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html#multi-region-access-point-naming">Managing Multi-Region Access Points</a>.',
        }),
    ).exactOptional(),
    CreatedAt: CreationTimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'When the Multi-Region Access Point create request was received.',
        }),
    ).exactOptional(),
    PublicAccessBlock: PublicAccessBlockConfigurationSchema.exactOptional(),
    Status: MultiRegionAccessPointStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current status of the Multi-Region Access Point.</p> <p> <code>CREATING</code> and <code>DELETING</code> are temporary states that exist while the request is propagating and being completed. If a Multi-Region Access Point has a status of <code>PARTIALLY_CREATED</code>, you can retry creation or send a request to delete the Multi-Region Access Point. If a Multi-Region Access Point has a status of <code>PARTIALLY_DELETED</code>, you can retry a delete request to finish the deletion of the Multi-Region Access Point.</p>',
        }),
    ).exactOptional(),
    Regions: RegionReportListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of the Regions and buckets associated with the Multi-Region Access Point.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A collection of statuses for a Multi-Region Access Point in the various Regions it supports.',
    required: [],
  })
  .openapi('MultiRegionAccessPointReport')

const GetMultiRegionAccessPointResultSchema = z
  .object({
    AccessPoint: MultiRegionAccessPointReportSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container element containing the details of the requested Multi-Region Access Point.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMultiRegionAccessPointResult')

const EstablishedMultiRegionAccessPointPolicySchema = z
  .object({
    Policy: PolicySchema.and(
      z.any().openapi({ description: 'The details of the last established policy.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The last established access control policy for a Multi-Region Access Point.</p> <p>When you update the policy, the update is first listed as the proposed policy. After the update is finished and all Regions have been updated, the proposed policy is listed as the established policy. If both policies have the same version number, the proposed policy is the established policy.</p>',
    required: [],
  })
  .openapi('EstablishedMultiRegionAccessPointPolicy')

const ProposedMultiRegionAccessPointPolicySchema = z
  .object({
    Policy: PolicySchema.and(
      z.any().openapi({ description: 'The details of the proposed policy.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The proposed access control policy for the Multi-Region Access Point.</p> <p>When you update the policy, the update is first listed as the proposed policy. After the update is finished and all Regions have been updated, the proposed policy is listed as the established policy. If both policies have the same version number, the proposed policy is the established policy.</p>',
    required: [],
  })
  .openapi('ProposedMultiRegionAccessPointPolicy')

const MultiRegionAccessPointPolicyDocumentSchema = z
  .object({
    Established: EstablishedMultiRegionAccessPointPolicySchema.and(
      z
        .any()
        .openapi({ description: 'The last established policy for the Multi-Region Access Point.' }),
    ).exactOptional(),
    Proposed: ProposedMultiRegionAccessPointPolicySchema.and(
      z.any().openapi({ description: 'The proposed policy for the Multi-Region Access Point.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The Multi-Region Access Point access control policy.</p> <p>When you update the policy, the update is first listed as the proposed policy. After the update is finished and all Regions have been updated, the proposed policy is listed as the established policy. If both policies have the same version number, the proposed policy is the established policy.</p>',
    required: [],
  })
  .openapi('MultiRegionAccessPointPolicyDocument')

const GetMultiRegionAccessPointPolicyResultSchema = z
  .object({
    Policy: MultiRegionAccessPointPolicyDocumentSchema.and(
      z
        .any()
        .openapi({
          description: 'The policy associated with the specified Multi-Region Access Point.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMultiRegionAccessPointPolicyResult')

const GetMultiRegionAccessPointPolicyStatusResultSchema = z
  .object({ Established: PolicyStatusSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('GetMultiRegionAccessPointPolicyStatusResult')

const MultiRegionAccessPointIdSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\:.-]{3,200}$/)
  .max(200)
  .openapi('MultiRegionAccessPointId')

const TrafficDialPercentageSchema = z.int().min(0).max(100).openapi('TrafficDialPercentage')

const MultiRegionAccessPointRouteSchema = z
  .object({
    Bucket: BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the Amazon S3 bucket for which you'll submit a routing configuration change. Either the <code>Bucket</code> or the <code>Region</code> value must be provided. If both are provided, the bucket must be in the specified Region.",
        }),
    ).exactOptional(),
    Region: RegionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Web Services Region to which you'll be submitting a routing configuration change. Either the <code>Bucket</code> or the <code>Region</code> value must be provided. If both are provided, the bucket must be in the specified Region.",
        }),
    ).exactOptional(),
    TrafficDialPercentage: TrafficDialPercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The traffic state for the specified bucket or Amazon Web Services Region. </p> <p>A value of <code>0</code> indicates a passive state, which means that no new traffic will be routed to the Region. </p> <p>A value of <code>100</code> indicates an active state, which means that traffic will be routed to the specified Region. </p> <p>When the routing configuration for a Region is changed from active to passive, any in-progress operations (uploads, copies, deletes, and so on) to the formerly active Region will continue to run to until a final success or failure status is reached.</p> <p>If all Regions in the routing configuration are designated as passive, you'll receive an <code>InvalidRequest</code> error.</p>",
        }),
    ),
  })
  .openapi({
    required: ['TrafficDialPercentage'],
    description:
      '<p>A structure for a Multi-Region Access Point that indicates where Amazon S3 traffic can be routed. Routes can be either active or passive. Active routes can process Amazon S3 requests through the Multi-Region Access Point, but passive routes are not eligible to process Amazon S3 requests. </p> <p>Each route contains the Amazon S3 bucket name and the Amazon Web Services Region that the bucket is located in. The route also includes the <code>TrafficDialPercentage</code> value, which shows whether the bucket and Region are active (indicated by a value of <code>100</code>) or passive (indicated by a value of <code>0</code>).</p>',
  })
  .openapi('MultiRegionAccessPointRoute')

const RouteListSchema = z
  .array(MultiRegionAccessPointRouteSchema.and(z.any().openapi({ xml: { name: 'Route' } })))
  .openapi('RouteList')

const GetMultiRegionAccessPointRoutesResultSchema = z
  .object({
    Mrap: MultiRegionAccessPointIdSchema.and(
      z.any().openapi({ description: 'The Multi-Region Access Point ARN.' }),
    ).exactOptional(),
    Routes: RouteListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The different routes that make up the route configuration. Active routes return a value of <code>100</code>, and passive routes return a value of <code>0</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMultiRegionAccessPointRoutesResult')

const GetPublicAccessBlockOutputSchema = z
  .object({
    PublicAccessBlockConfiguration: PublicAccessBlockConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>PublicAccessBlock</code> configuration currently in effect for this Amazon Web Services account.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetPublicAccessBlockOutput')

const NoSuchPublicAccessBlockConfigurationSchema = z
  .any()
  .openapi('NoSuchPublicAccessBlockConfiguration')

const ConfigIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9\-\_\.]+/)
  .min(1)
  .max(64)
  .openapi('ConfigId')

const IsEnabledSchema = z.boolean().openapi('IsEnabled')

const ActivityMetricsSchema = z
  .object({
    IsEnabled: IsEnabledSchema.and(
      z
        .any()
        .openapi({
          description: 'A container that indicates whether activity metrics are enabled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The container element for Amazon S3 Storage Lens activity metrics. Activity metrics show details about how your storage is requested, such as requests (for example, All requests, Get requests, Put requests), bytes uploaded or downloaded, and errors.</p> <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p>',
    required: [],
  })
  .openapi('ActivityMetrics')

const StorageLensPrefixLevelDelimiterSchema = z
  .string()
  .max(1)
  .openapi('StorageLensPrefixLevelDelimiter')

const StorageLensPrefixLevelMaxDepthSchema = z
  .int()
  .min(1)
  .max(10)
  .openapi('StorageLensPrefixLevelMaxDepth')

const MinStorageBytesPercentageSchema = z
  .float64()
  .min(0.1)
  .max(100)
  .openapi('MinStorageBytesPercentage')

const SelectionCriteriaSchema = z
  .object({
    Delimiter: StorageLensPrefixLevelDelimiterSchema.and(
      z
        .any()
        .openapi({
          description: 'A container for the delimiter of the selection criteria being used.',
        }),
    ).exactOptional(),
    MaxDepth: StorageLensPrefixLevelMaxDepthSchema.and(
      z.any().openapi({ description: 'The max depth of the selection criteria' }),
    ).exactOptional(),
    MinStorageBytesPercentage: MinStorageBytesPercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The minimum number of storage bytes percentage whose metrics will be selected.</p> <note> <p>You must choose a value greater than or equal to <code>1.0</code>.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('SelectionCriteria')

const PrefixLevelStorageMetricsSchema = z
  .object({
    IsEnabled: IsEnabledSchema.and(
      z
        .any()
        .openapi({
          description: 'A container for whether prefix-level storage metrics are enabled.',
        }),
    ).exactOptional(),
    SelectionCriteria: SelectionCriteriaSchema.exactOptional(),
  })
  .openapi({
    description: 'A container for the prefix-level storage metrics for S3 Storage Lens.',
    required: [],
  })
  .openapi('PrefixLevelStorageMetrics')

const PrefixLevelSchema = z
  .object({
    StorageMetrics: PrefixLevelStorageMetricsSchema.and(
      z
        .any()
        .openapi({
          description: 'A container for the prefix-level storage metrics for S3 Storage Lens.',
        }),
    ),
  })
  .openapi({
    required: ['StorageMetrics'],
    description: 'A container for the prefix-level configuration.',
  })
  .openapi('PrefixLevel')

const AdvancedCostOptimizationMetricsSchema = z
  .object({
    IsEnabled: IsEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container that indicates whether advanced cost-optimization metrics are enabled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The container element for Amazon S3 Storage Lens advanced cost-optimization metrics. Advanced cost-optimization metrics provide insights that you can use to manage and optimize your storage costs, for example, lifecycle rule counts for transitions, expirations, and incomplete multipart uploads.</p> <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p>',
    required: [],
  })
  .openapi('AdvancedCostOptimizationMetrics')

const AdvancedDataProtectionMetricsSchema = z
  .object({
    IsEnabled: IsEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container that indicates whether advanced data-protection metrics are enabled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The container element for Amazon S3 Storage Lens advanced data-protection metrics. Advanced data-protection metrics provide insights that you can use to perform audits and protect your data, for example replication rule counts within and across Regions.</p> <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p>',
    required: [],
  })
  .openapi('AdvancedDataProtectionMetrics')

const DetailedStatusCodesMetricsSchema = z
  .object({
    IsEnabled: IsEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container that indicates whether detailed status code metrics are enabled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The container element for Amazon S3 Storage Lens detailed status code metrics. Detailed status code metrics generate metrics for HTTP status codes, such as <code>200 OK</code>, <code>403 Forbidden</code>, <code>503 Service Unavailable</code> and others. </p> <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p>',
    required: [],
  })
  .openapi('DetailedStatusCodesMetrics')

const BucketLevelSchema = z
  .object({
    ActivityMetrics: ActivityMetricsSchema.and(
      z
        .any()
        .openapi({
          description: 'A container for the bucket-level activity metrics for S3 Storage Lens.',
        }),
    ).exactOptional(),
    PrefixLevel: PrefixLevelSchema.and(
      z
        .any()
        .openapi({ description: 'A container for the prefix-level metrics for S3 Storage Lens. ' }),
    ).exactOptional(),
    AdvancedCostOptimizationMetrics: AdvancedCostOptimizationMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container for bucket-level advanced cost-optimization metrics for S3 Storage Lens.',
        }),
    ).exactOptional(),
    AdvancedDataProtectionMetrics: AdvancedDataProtectionMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container for bucket-level advanced data-protection metrics for S3 Storage Lens.',
        }),
    ).exactOptional(),
    DetailedStatusCodesMetrics: DetailedStatusCodesMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container for bucket-level detailed status code metrics for S3 Storage Lens.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A container for the bucket-level configuration for Amazon S3 Storage Lens.</p> <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p>',
    required: [],
  })
  .openapi('BucketLevel')

const AccountLevelSchema = z
  .object({
    ActivityMetrics: ActivityMetricsSchema.and(
      z.any().openapi({ description: 'A container for S3 Storage Lens activity metrics.' }),
    ).exactOptional(),
    BucketLevel: BucketLevelSchema.and(
      z
        .any()
        .openapi({
          description: 'A container for the S3 Storage Lens bucket-level configuration.',
        }),
    ),
    AdvancedCostOptimizationMetrics: AdvancedCostOptimizationMetricsSchema.and(
      z
        .any()
        .openapi({
          description: 'A container for S3 Storage Lens advanced cost-optimization metrics.',
        }),
    ).exactOptional(),
    AdvancedDataProtectionMetrics: AdvancedDataProtectionMetricsSchema.and(
      z
        .any()
        .openapi({
          description: 'A container for S3 Storage Lens advanced data-protection metrics.',
        }),
    ).exactOptional(),
    DetailedStatusCodesMetrics: DetailedStatusCodesMetricsSchema.and(
      z.any().openapi({ description: 'A container for detailed status code metrics. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BucketLevel'],
    description:
      '<p>A container for the account-level Amazon S3 Storage Lens configuration.</p> <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p>',
  })
  .openapi('AccountLevel')

const BucketsSchema = z
  .array(S3BucketArnStringSchema.and(z.any().openapi({ xml: { name: 'Arn' } })))
  .openapi('Buckets')

const S3AWSRegionSchema = z
  .string()
  .regex(/[a-z0-9\-]+/)
  .min(5)
  .max(30)
  .openapi('S3AWSRegion')

const RegionsSchema = z
  .array(S3AWSRegionSchema.and(z.any().openapi({ xml: { name: 'Region' } })))
  .openapi('Regions')

const IncludeSchema = z
  .object({
    Buckets: BucketsSchema.and(
      z.any().openapi({ description: 'A container for the S3 Storage Lens bucket includes.' }),
    ).exactOptional(),
    Regions: RegionsSchema.and(
      z.any().openapi({ description: 'A container for the S3 Storage Lens Region includes.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A container for what Amazon S3 Storage Lens configuration includes.',
    required: [],
  })
  .openapi('Include')

const ExcludeSchema = z
  .object({
    Buckets: BucketsSchema.and(
      z.any().openapi({ description: 'A container for the S3 Storage Lens bucket excludes.' }),
    ).exactOptional(),
    Regions: RegionsSchema.and(
      z.any().openapi({ description: 'A container for the S3 Storage Lens Region excludes.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A container for what Amazon S3 Storage Lens will exclude.',
    required: [],
  })
  .openapi('Exclude')

const FormatSchema = z.enum(['CSV', 'Parquet']).openapi('Format')

const OutputSchemaVersionSchema = z.literal('V_1').openapi('OutputSchemaVersion')

const SSES3Schema = z.object({}).openapi({ description: '<p/>' }).openapi('SSES3')

const SSEKMSKeyIdSchema = z.string().openapi('SSEKMSKeyId')

const SSEKMSSchema = z
  .object({
    KeyId: SSEKMSKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container for the ARN of the SSE-KMS encryption. This property is read-only and follows the following format: <code> arn:aws:kms:<i>us-east-1</i>:<i>example-account-id</i>:key/<i>example-9a73-4afc-8d29-8f5900cef44e</i> </code> ',
        }),
    ),
  })
  .openapi({ required: ['KeyId'], description: '<p/>' })
  .openapi('SSEKMS')

const StorageLensDataExportEncryptionSchema = z
  .object({
    SSES3: SSES3Schema.and(
      z.any().openapi({ xml: { name: 'SSE-S3' }, description: '<p/>' }),
    ).exactOptional(),
    SSEKMS: SSEKMSSchema.and(
      z.any().openapi({ xml: { name: 'SSE-KMS' }, description: '<p/>' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A container for the encryption of the S3 Storage Lens metrics exports.',
    required: [],
  })
  .openapi('StorageLensDataExportEncryption')

const S3BucketDestinationSchema = z
  .object({
    Format: FormatSchema.and(z.any().openapi({ description: '<p/>' })),
    OutputSchemaVersion: OutputSchemaVersionSchema.and(
      z.any().openapi({ description: 'The schema version of the export file.' }),
    ),
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The account ID of the owner of the S3 Storage Lens metrics export bucket.',
        }),
    ),
    Arn: S3BucketArnStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the bucket. This property is read-only and follows the following format: <code> arn:aws:s3:<i>us-east-1</i>:<i>example-account-id</i>:bucket/<i>your-destination-bucket-name</i> </code> ',
        }),
    ),
    Prefix: PrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'The prefix of the destination bucket where the metrics export will be delivered.',
        }),
    ).exactOptional(),
    Encryption: StorageLensDataExportEncryptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The container for the type encryption of the metrics exports in this bucket.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Format', 'OutputSchemaVersion', 'AccountId', 'Arn'],
    description:
      'A container for the bucket where the Amazon S3 Storage Lens metrics export files are located.',
  })
  .openapi('S3BucketDestination')

const CloudWatchMetricsSchema = z
  .object({
    IsEnabled: IsEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container that indicates whether CloudWatch publishing for S3 Storage Lens metrics is enabled. A value of <code>true</code> indicates that CloudWatch publishing for S3 Storage Lens metrics is enabled.',
        }),
    ),
  })
  .openapi({
    required: ['IsEnabled'],
    description:
      '<p>A container for enabling Amazon CloudWatch publishing for S3 Storage Lens metrics.</p> <p>For more information about publishing S3 Storage Lens metrics to CloudWatch, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_view_metrics_cloudwatch.html">Monitor S3 Storage Lens metrics in CloudWatch</a> in the <i>Amazon S3 User Guide</i>.</p>',
  })
  .openapi('CloudWatchMetrics')

const StorageLensDataExportSchema = z
  .object({
    S3BucketDestination: S3BucketDestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A container for the bucket where the S3 Storage Lens metrics export will be located.</p> <note> <p>This bucket must be located in the same Region as the storage lens configuration. </p> </note>',
        }),
    ).exactOptional(),
    CloudWatchMetrics: CloudWatchMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container for enabling Amazon CloudWatch publishing for S3 Storage Lens metrics.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A container to specify the properties of your S3 Storage Lens metrics export, including the destination, schema, and format.',
    required: [],
  })
  .openapi('StorageLensDataExport')

const AwsOrgArnSchema = z
  .string()
  .regex(/arn:[a-z\-]+:organizations::\d{12}:organization\/o-[a-z0-9]{10,32}/)
  .min(1)
  .max(1024)
  .openapi('AwsOrgArn')

const StorageLensAwsOrgSchema = z
  .object({
    Arn: AwsOrgArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container for the Amazon Resource Name (ARN) of the Amazon Web Services organization. This property is read-only and follows the following format: <code> arn:aws:organizations:<i>us-east-1</i>:<i>example-account-id</i>:organization/<i>o-ex2l495dck</i> </code> ',
        }),
    ),
  })
  .openapi({
    required: ['Arn'],
    description: 'The Amazon Web Services organization for your S3 Storage Lens.',
  })
  .openapi('StorageLensAwsOrg')

const StorageLensArnSchema = z
  .string()
  .regex(/arn:[a-z\-]+:s3:[a-z0-9\-]+:\d{12}:storage\-lens\/.*/)
  .min(1)
  .max(1024)
  .openapi('StorageLensArn')

const StorageLensConfigurationSchema = z
  .object({
    Id: ConfigIdSchema.and(
      z
        .any()
        .openapi({ description: 'A container for the Amazon S3 Storage Lens configuration ID.' }),
    ),
    AccountLevel: AccountLevelSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container for all the account-level configurations of your S3 Storage Lens configuration.',
        }),
    ),
    Include: IncludeSchema.and(
      z
        .any()
        .openapi({
          description:
            "A container for what is included in this configuration. This container can only be valid if there is no <code>Exclude</code> container submitted, and it's not empty. ",
        }),
    ).exactOptional(),
    Exclude: ExcludeSchema.and(
      z
        .any()
        .openapi({
          description:
            "A container for what is excluded in this configuration. This container can only be valid if there is no <code>Include</code> container submitted, and it's not empty. ",
        }),
    ).exactOptional(),
    DataExport: StorageLensDataExportSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container to specify the properties of your S3 Storage Lens metrics export including, the destination, schema and format.',
        }),
    ).exactOptional(),
    IsEnabled: IsEnabledSchema.and(
      z
        .any()
        .openapi({
          description: 'A container for whether the S3 Storage Lens configuration is enabled.',
        }),
    ),
    AwsOrg: StorageLensAwsOrgSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container for the Amazon Web Services organization for this S3 Storage Lens configuration.',
        }),
    ).exactOptional(),
    StorageLensArn: StorageLensArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the S3 Storage Lens configuration. This property is read-only and follows the following format: <code> arn:aws:s3:<i>us-east-1</i>:<i>example-account-id</i>:storage-lens/<i>your-dashboard-name</i> </code> ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Id', 'AccountLevel', 'IsEnabled'],
    description: 'A container for the Amazon S3 Storage Lens configuration.',
  })
  .openapi('StorageLensConfiguration')

const GetStorageLensConfigurationResultSchema = z
  .object({
    StorageLensConfiguration: StorageLensConfigurationSchema.and(
      z.any().openapi({ description: 'The S3 Storage Lens configuration requested.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetStorageLensConfigurationResult')

const StorageLensTagSchema = z
  .object({
    Key: TagKeyStringSchema.and(z.any().openapi({ description: '<p/>' })),
    Value: TagValueStringSchema.and(z.any().openapi({ description: '<p/>' })),
  })
  .openapi({ required: ['Key', 'Value'], description: '<p/>' })
  .openapi('StorageLensTag')

const StorageLensTagsSchema = z
  .array(StorageLensTagSchema.and(z.any().openapi({ xml: { name: 'Tag' } })))
  .openapi('StorageLensTags')

const GetStorageLensConfigurationTaggingResultSchema = z
  .object({
    Tags: StorageLensTagsSchema.and(
      z.any().openapi({ description: 'The tags of S3 Storage Lens configuration requested.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetStorageLensConfigurationTaggingResult')

const AccessPointSchema = z
  .object({
    Name: AccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of this access point.' }),
    ),
    NetworkOrigin: NetworkOriginSchema.and(
      z
        .any()
        .openapi({
          description:
            "Indicates whether this access point allows access from the public internet. If <code>VpcConfiguration</code> is specified for this access point, then <code>NetworkOrigin</code> is <code>VPC</code>, and the access point doesn't allow access from the public internet. Otherwise, <code>NetworkOrigin</code> is <code>Internet</code>, and the access point allows access from the public internet, subject to the access point and bucket access policies.",
        }),
    ),
    VpcConfiguration: VpcConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The virtual private cloud (VPC) configuration for this access point, if one exists.</p> <note> <p>This element is empty if this access point is an Amazon S3 on Outposts access point that is used by other Amazon Web Services.</p> </note>',
        }),
    ).exactOptional(),
    Bucket: BucketNameSchema.and(
      z.any().openapi({ description: 'The name of the bucket associated with this access point.' }),
    ),
    AccessPointArn: S3AccessPointArnSchema.and(
      z.any().openapi({ description: 'The ARN for the access point.' }),
    ).exactOptional(),
    Alias: AliasSchema.and(
      z.any().openapi({ description: 'The name or alias of the access point.' }),
    ).exactOptional(),
    BucketAccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the S3 bucket associated with this access point.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'NetworkOrigin', 'Bucket'],
    description: 'An access point used to access a bucket.',
  })
  .openapi('AccessPoint')

const AccessPointListSchema = z
  .array(AccessPointSchema.and(z.any().openapi({ xml: { name: 'AccessPoint' } })))
  .openapi('AccessPointList')

const ListAccessPointsResultSchema = z
  .object({
    AccessPointList: AccessPointListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains identification and configuration information for one or more access points associated with the specified bucket.',
        }),
    ).exactOptional(),
    NextToken: NonEmptyMaxLength1024StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the specified bucket has more access points than can be returned in one call to this API, this field contains a continuation token that you can provide in subsequent calls to this API to retrieve additional access points.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAccessPointsResult')

const ObjectLambdaAccessPointSchema = z
  .object({
    Name: ObjectLambdaAccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the Object Lambda Access Point.' }),
    ),
    ObjectLambdaAccessPointArn: ObjectLambdaAccessPointArnSchema.and(
      z.any().openapi({ description: 'Specifies the ARN for the Object Lambda Access Point.' }),
    ).exactOptional(),
    Alias: ObjectLambdaAccessPointAliasSchema.and(
      z.any().openapi({ description: 'The alias of the Object Lambda Access Point.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name'],
    description:
      'An access point with an attached Lambda function used to access transformed data from an Amazon S3 bucket.',
  })
  .openapi('ObjectLambdaAccessPoint')

const ObjectLambdaAccessPointListSchema = z
  .array(
    ObjectLambdaAccessPointSchema.and(
      z.any().openapi({ xml: { name: 'ObjectLambdaAccessPoint' } }),
    ),
  )
  .openapi('ObjectLambdaAccessPointList')

const ListAccessPointsForObjectLambdaResultSchema = z
  .object({
    ObjectLambdaAccessPointList: ObjectLambdaAccessPointListSchema.and(
      z.any().openapi({ description: 'Returns list of Object Lambda Access Points.' }),
    ).exactOptional(),
    NextToken: NonEmptyMaxLength1024StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the list has more access points than can be returned in one call to this API, this field contains a continuation token that you can provide in subsequent calls to this API to retrieve additional access points.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAccessPointsForObjectLambdaResult')

const StringForNextTokenSchema = z
  .string()
  .regex(/^[A-Za-z0-9\+\:\/\=\?\#-_]+$/)
  .min(1)
  .max(1024)
  .openapi('StringForNextToken')

const OperationNameSchema = z
  .enum([
    'LambdaInvoke',
    'S3PutObjectCopy',
    'S3PutObjectAcl',
    'S3PutObjectTagging',
    'S3DeleteObjectTagging',
    'S3InitiateRestoreObject',
    'S3PutObjectLegalHold',
    'S3PutObjectRetention',
    'S3ReplicateObject',
  ])
  .openapi('OperationName')

const JobListDescriptorSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The ID for the specified job.' }),
    ).exactOptional(),
    Description: NonEmptyMaxLength256StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The user-specified description that was included in the specified job's <code>Create Job</code> request.",
        }),
    ).exactOptional(),
    Operation: OperationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The operation that the specified job is configured to run on every object listed in the manifest.',
        }),
    ).exactOptional(),
    Priority: JobPrioritySchema.and(
      z.any().openapi({ description: 'The current priority for the specified job.' }),
    ).exactOptional(),
    Status: JobStatusSchema.and(
      z.any().openapi({ description: "The specified job's current status." }),
    ).exactOptional(),
    CreationTime: JobCreationTimeSchema.and(
      z
        .any()
        .openapi({ description: 'A timestamp indicating when the specified job was created.' }),
    ).exactOptional(),
    TerminationDate: JobTerminationDateSchema.and(
      z
        .any()
        .openapi({
          description:
            "A timestamp indicating when the specified job terminated. A job's termination date is the date and time when it succeeded, failed, or was canceled.",
        }),
    ).exactOptional(),
    ProgressSummary: JobProgressSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the total number of tasks that the specified job has run, the number of tasks that succeeded, and the number of tasks that failed.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the configuration and status information for a single job retrieved as part of a job list.',
    required: [],
  })
  .openapi('JobListDescriptor')

const JobListDescriptorListSchema = z
  .array(JobListDescriptorSchema)
  .openapi('JobListDescriptorList')

const ListJobsResultSchema = z
  .object({
    NextToken: StringForNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the <code>List Jobs</code> request produced more than the maximum number of results, you can pass this value into a subsequent <code>List Jobs</code> request in order to retrieve the next page of results.',
        }),
    ).exactOptional(),
    Jobs: JobListDescriptorListSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of current jobs and jobs that have ended within the last 30 days.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListJobsResult')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const InvalidNextTokenExceptionSchema = z.any().openapi('InvalidNextTokenException')

const MultiRegionAccessPointReportListSchema = z
  .array(MultiRegionAccessPointReportSchema.and(z.any().openapi({ xml: { name: 'AccessPoint' } })))
  .openapi('MultiRegionAccessPointReportList')

const ListMultiRegionAccessPointsResultSchema = z
  .object({
    AccessPoints: MultiRegionAccessPointReportListSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of Multi-Region Access Points associated with the user.',
        }),
    ).exactOptional(),
    NextToken: NonEmptyMaxLength1024StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the specified bucket has more Multi-Region Access Points than can be returned in one call to this action, this field contains a continuation token. You can use this token tin subsequent calls to this action to retrieve additional Multi-Region Access Points.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListMultiRegionAccessPointsResult')

const NonEmptyMaxLength64StringSchema = z
  .string()
  .min(1)
  .max(64)
  .openapi('NonEmptyMaxLength64String')

const RegionalBucketSchema = z
  .object({
    Bucket: BucketNameSchema.and(z.any().openapi({ description: '<p/>' })),
    BucketArn: S3RegionalBucketArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the regional bucket.' }),
    ).exactOptional(),
    PublicAccessBlockEnabled: PublicAccessBlockEnabledSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ),
    CreationDate: CreationDateSchema.and(
      z.any().openapi({ description: 'The creation date of the regional bucket' }),
    ),
    OutpostId: NonEmptyMaxLength64StringSchema.and(
      z.any().openapi({ description: 'The Outposts ID of the regional bucket.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Bucket', 'PublicAccessBlockEnabled', 'CreationDate'],
    description: 'The container for the regional bucket.',
  })
  .openapi('RegionalBucket')

const RegionalBucketListSchema = z
  .array(RegionalBucketSchema.and(z.any().openapi({ xml: { name: 'RegionalBucket' } })))
  .openapi('RegionalBucketList')

const ListRegionalBucketsResultSchema = z
  .object({
    RegionalBucketList: RegionalBucketListSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    NextToken: NonEmptyMaxLength1024StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>NextToken</code> is sent when <code>isTruncated</code> is true, which means there are more buckets that can be listed. The next list requests to Amazon S3 can be continued with this <code>NextToken</code>. <code>NextToken</code> is obfuscated and is not a real key.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRegionalBucketsResult')

const ContinuationTokenSchema = z.string().openapi('ContinuationToken')

const ListStorageLensConfigurationEntrySchema = z
  .object({
    Id: ConfigIdSchema.and(
      z.any().openapi({ description: 'A container for the S3 Storage Lens configuration ID.' }),
    ),
    StorageLensArn: StorageLensArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the S3 Storage Lens configuration. This property is read-only.',
        }),
    ),
    HomeRegion: S3AWSRegionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container for the S3 Storage Lens home Region. Your metrics data is stored and retained in your designated S3 Storage Lens home Region.',
        }),
    ),
    IsEnabled: IsEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container for whether the S3 Storage Lens configuration is enabled. This property is required.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Id', 'StorageLensArn', 'HomeRegion'],
    description:
      'Part of <code>ListStorageLensConfigurationResult</code>. Each entry includes the description of the S3 Storage Lens configuration, its home Region, whether it is enabled, its Amazon Resource Name (ARN), and config ID.',
  })
  .openapi('ListStorageLensConfigurationEntry')

const StorageLensConfigurationListSchema = z
  .array(
    ListStorageLensConfigurationEntrySchema.and(
      z.any().openapi({ xml: { name: 'StorageLensConfiguration' } }),
    ),
  )
  .openapi({ xml: { wrapped: false } })
  .openapi('StorageLensConfigurationList')

const ListStorageLensConfigurationsResultSchema = z
  .object({
    NextToken: ContinuationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the request produced more than the maximum number of S3 Storage Lens configuration results, you can pass this value into a subsequent request to retrieve the next page of results.',
        }),
    ).exactOptional(),
    StorageLensConfigurationList: StorageLensConfigurationListSchema.and(
      z.any().openapi({ description: 'A list of S3 Storage Lens configurations.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListStorageLensConfigurationsResult')

const MFADeleteSchema = z.enum(['Enabled', 'Disabled']).openapi('MFADelete')

const PutJobTaggingResultSchema = z.object({}).openapi('PutJobTaggingResult')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const PutMultiRegionAccessPointPolicyResultSchema = z
  .object({
    RequestTokenARN: AsyncRequestTokenARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The request token associated with the request. You can use this token with <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html">DescribeMultiRegionAccessPointOperation</a> to determine the status of asynchronous requests.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutMultiRegionAccessPointPolicyResult')

const PutStorageLensConfigurationTaggingResultSchema = z
  .object({})
  .openapi('PutStorageLensConfigurationTaggingResult')

const SubmitMultiRegionAccessPointRoutesResultSchema = z
  .object({})
  .openapi('SubmitMultiRegionAccessPointRoutesResult')

const UpdateJobPriorityResultSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The ID for the job whose priority Amazon S3 updated.' }),
    ),
    Priority: JobPrioritySchema.and(
      z.any().openapi({ description: 'The new priority assigned to the specified job.' }),
    ),
  })
  .openapi({ required: ['JobId', 'Priority'] })
  .openapi('UpdateJobPriorityResult')

const UpdateJobStatusResultSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The ID for the job whose status was updated.' }),
    ).exactOptional(),
    Status: JobStatusSchema.and(
      z.any().openapi({ description: 'The current status for the specified job.' }),
    ).exactOptional(),
    StatusUpdateReason: JobStatusUpdateReasonSchema.and(
      z.any().openapi({ description: "The reason that the specified job's status was updated." }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateJobStatusResult')

const JobStatusExceptionSchema = z.any().openapi('JobStatusException')

const BucketCannedACLSchema = z
  .enum(['private', 'public-read', 'public-read-write', 'authenticated-read'])
  .openapi('BucketCannedACL')

const ConfirmRemoveSelfBucketAccessSchema = z.boolean().openapi('ConfirmRemoveSelfBucketAccess')

const CreateAccessPointForObjectLambdaRequestSchema = z
  .object({
    Configuration: ObjectLambdaConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'Object Lambda Access Point configuration as a JSON document.' }),
    ),
  })
  .openapi({ required: ['Configuration'], title: 'CreateAccessPointForObjectLambdaRequest' })
  .openapi('CreateAccessPointForObjectLambdaRequest')

const CreateAccessPointRequestSchema = z
  .object({
    Bucket: BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the bucket that you want to associate this access point with.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>',
        }),
    ),
    VpcConfiguration: VpcConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If you include this field, Amazon S3 restricts access to this access point to requests from the specified virtual private cloud (VPC).</p> <note> <p>This is required for creating an access point for Amazon S3 on Outposts buckets.</p> </note>',
        }),
    ).exactOptional(),
    PublicAccessBlockConfiguration: PublicAccessBlockConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The <code>PublicAccessBlock</code> configuration that you want to apply to the access point. ',
        }),
    ).exactOptional(),
    BucketAccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the S3 bucket associated with this access point.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Bucket'], title: 'CreateAccessPointRequest' })
  .openapi('CreateAccessPointRequest')

const CreateBucketConfigurationSchema = z
  .object({
    LocationConstraint: BucketLocationConstraintSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the Region where the bucket will be created. If you are creating a bucket on the US East (N. Virginia) Region (us-east-1), you do not need to specify the location. </p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The container for the bucket configuration.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>',
    required: [],
  })
  .openapi('CreateBucketConfiguration')

const GrantFullControlSchema = z.string().openapi('GrantFullControl')

const GrantReadSchema = z.string().openapi('GrantRead')

const GrantReadACPSchema = z.string().openapi('GrantReadACP')

const GrantWriteSchema = z.string().openapi('GrantWrite')

const GrantWriteACPSchema = z.string().openapi('GrantWriteACP')

const ObjectLockEnabledForBucketSchema = z.boolean().openapi('ObjectLockEnabledForBucket')

const CreateBucketRequestSchema = z
  .object({
    CreateBucketConfiguration: CreateBucketConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The configuration information for the bucket.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'CreateBucketRequest',
    xml: { namespace: 'http://awss3control.amazonaws.com/doc/2018-08-20/' },
    required: [],
  })
  .openapi('CreateBucketRequest')

const LocationSchema = z.string().openapi('Location')

const CreateJobRequestSchema = z
  .object({
    ConfirmationRequired: ConfirmationRequiredSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether confirmation is required before Amazon S3 runs the job. Confirmation is only required for jobs created through the Amazon S3 console.',
        }),
    ).exactOptional(),
    Operation: JobOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The action that you want this job to perform on every object listed in the manifest. For more information about the available actions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-actions.html">Operations</a> in the <i>Amazon S3 User Guide</i>.',
        }),
    ),
    Report: JobReportSchema.and(
      z
        .any()
        .openapi({
          description: 'Configuration parameters for the optional job-completion report.',
        }),
    ),
    ClientRequestToken: NonEmptyMaxLength64StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "An idempotency token to ensure that you don't accidentally submit the same request twice. You can use any string up to the maximum length.",
        }),
    ),
    Manifest: JobManifestSchema.and(
      z.any().openapi({ description: 'Configuration parameters for the manifest.' }),
    ).exactOptional(),
    Description: NonEmptyMaxLength256StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A description for this job. You can use any string within the permitted length. Descriptions don't need to be unique and can be used for multiple jobs.",
        }),
    ).exactOptional(),
    Priority: JobPrioritySchema.and(
      z
        .any()
        .openapi({
          description:
            'The numerical priority for this job. Higher numbers indicate higher priority.',
        }),
    ),
    RoleArn: IAMRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) for the Identity and Access Management (IAM) role that Batch Operations will use to run this job's action on every object in the manifest.",
        }),
    ),
    Tags: S3TagSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of tags to associate with the S3 Batch Operations job. This is an optional parameter. ',
        }),
    ).exactOptional(),
    ManifestGenerator: JobManifestGeneratorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The attribute container for the ManifestGenerator details. Jobs must be created with either a manifest file or a ManifestGenerator, but not both.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Operation', 'Report', 'ClientRequestToken', 'Priority', 'RoleArn'],
    title: 'CreateJobRequest',
  })
  .openapi('CreateJobRequest')

const MultiRegionAccessPointClientTokenSchema = z
  .string()
  .regex(/\S+/)
  .max(64)
  .openapi('MultiRegionAccessPointClientToken')

const CreateMultiRegionAccessPointRequestSchema = z
  .object({
    ClientToken: MultiRegionAccessPointClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An idempotency token used to identify the request and guarantee that requests are unique.',
        }),
    ),
    Details: CreateMultiRegionAccessPointInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container element containing details about the Multi-Region Access Point.',
        }),
    ),
  })
  .openapi({ required: ['ClientToken', 'Details'], title: 'CreateMultiRegionAccessPointRequest' })
  .openapi('CreateMultiRegionAccessPointRequest')

const DeleteAccessPointForObjectLambdaRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteAccessPointForObjectLambdaRequest' })
  .openapi('DeleteAccessPointForObjectLambdaRequest')

const DeleteAccessPointPolicyForObjectLambdaRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteAccessPointPolicyForObjectLambdaRequest' })
  .openapi('DeleteAccessPointPolicyForObjectLambdaRequest')

const DeleteAccessPointPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteAccessPointPolicyRequest' })
  .openapi('DeleteAccessPointPolicyRequest')

const DeleteAccessPointRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteAccessPointRequest' })
  .openapi('DeleteAccessPointRequest')

const DeleteBucketLifecycleConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteBucketLifecycleConfigurationRequest' })
  .openapi('DeleteBucketLifecycleConfigurationRequest')

const DeleteBucketPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteBucketPolicyRequest' })
  .openapi('DeleteBucketPolicyRequest')

const DeleteBucketReplicationRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteBucketReplicationRequest' })
  .openapi('DeleteBucketReplicationRequest')

const DeleteBucketRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteBucketRequest' })
  .openapi('DeleteBucketRequest')

const DeleteBucketTaggingRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteBucketTaggingRequest' })
  .openapi('DeleteBucketTaggingRequest')

const DeleteJobTaggingRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteJobTaggingRequest' })
  .openapi('DeleteJobTaggingRequest')

const DeleteMultiRegionAccessPointRequestSchema = z
  .object({
    ClientToken: MultiRegionAccessPointClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An idempotency token used to identify the request and guarantee that requests are unique.',
        }),
    ),
    Details: DeleteMultiRegionAccessPointInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container element containing details about the Multi-Region Access Point.',
        }),
    ),
  })
  .openapi({ required: ['ClientToken', 'Details'], title: 'DeleteMultiRegionAccessPointRequest' })
  .openapi('DeleteMultiRegionAccessPointRequest')

const DeletePublicAccessBlockRequestSchema = z
  .object({})
  .openapi({ title: 'DeletePublicAccessBlockRequest' })
  .openapi('DeletePublicAccessBlockRequest')

const DeleteStorageLensConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteStorageLensConfigurationRequest' })
  .openapi('DeleteStorageLensConfigurationRequest')

const DeleteStorageLensConfigurationTaggingRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteStorageLensConfigurationTaggingRequest' })
  .openapi('DeleteStorageLensConfigurationTaggingRequest')

const DescribeJobRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeJobRequest' })
  .openapi('DescribeJobRequest')

const DescribeMultiRegionAccessPointOperationRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeMultiRegionAccessPointOperationRequest' })
  .openapi('DescribeMultiRegionAccessPointOperationRequest')

const GetAccessPointConfigurationForObjectLambdaRequestSchema = z
  .object({})
  .openapi({ title: 'GetAccessPointConfigurationForObjectLambdaRequest' })
  .openapi('GetAccessPointConfigurationForObjectLambdaRequest')

const GetAccessPointForObjectLambdaRequestSchema = z
  .object({})
  .openapi({ title: 'GetAccessPointForObjectLambdaRequest' })
  .openapi('GetAccessPointForObjectLambdaRequest')

const GetAccessPointPolicyForObjectLambdaRequestSchema = z
  .object({})
  .openapi({ title: 'GetAccessPointPolicyForObjectLambdaRequest' })
  .openapi('GetAccessPointPolicyForObjectLambdaRequest')

const GetAccessPointPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'GetAccessPointPolicyRequest' })
  .openapi('GetAccessPointPolicyRequest')

const GetAccessPointPolicyStatusForObjectLambdaRequestSchema = z
  .object({})
  .openapi({ title: 'GetAccessPointPolicyStatusForObjectLambdaRequest' })
  .openapi('GetAccessPointPolicyStatusForObjectLambdaRequest')

const GetAccessPointPolicyStatusRequestSchema = z
  .object({})
  .openapi({ title: 'GetAccessPointPolicyStatusRequest' })
  .openapi('GetAccessPointPolicyStatusRequest')

const GetAccessPointRequestSchema = z
  .object({})
  .openapi({ title: 'GetAccessPointRequest' })
  .openapi('GetAccessPointRequest')

const GetBucketLifecycleConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'GetBucketLifecycleConfigurationRequest' })
  .openapi('GetBucketLifecycleConfigurationRequest')

const GetBucketPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'GetBucketPolicyRequest' })
  .openapi('GetBucketPolicyRequest')

const GetBucketReplicationRequestSchema = z
  .object({})
  .openapi({ title: 'GetBucketReplicationRequest' })
  .openapi('GetBucketReplicationRequest')

const GetBucketRequestSchema = z
  .object({})
  .openapi({ title: 'GetBucketRequest' })
  .openapi('GetBucketRequest')

const GetBucketTaggingRequestSchema = z
  .object({})
  .openapi({ title: 'GetBucketTaggingRequest' })
  .openapi('GetBucketTaggingRequest')

const GetBucketVersioningRequestSchema = z
  .object({})
  .openapi({ title: 'GetBucketVersioningRequest' })
  .openapi('GetBucketVersioningRequest')

const GetJobTaggingRequestSchema = z
  .object({})
  .openapi({ title: 'GetJobTaggingRequest' })
  .openapi('GetJobTaggingRequest')

const GetMultiRegionAccessPointPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'GetMultiRegionAccessPointPolicyRequest' })
  .openapi('GetMultiRegionAccessPointPolicyRequest')

const GetMultiRegionAccessPointPolicyStatusRequestSchema = z
  .object({})
  .openapi({ title: 'GetMultiRegionAccessPointPolicyStatusRequest' })
  .openapi('GetMultiRegionAccessPointPolicyStatusRequest')

const GetMultiRegionAccessPointRequestSchema = z
  .object({})
  .openapi({ title: 'GetMultiRegionAccessPointRequest' })
  .openapi('GetMultiRegionAccessPointRequest')

const GetMultiRegionAccessPointRoutesRequestSchema = z
  .object({})
  .openapi({ title: 'GetMultiRegionAccessPointRoutesRequest' })
  .openapi('GetMultiRegionAccessPointRoutesRequest')

const GetPublicAccessBlockRequestSchema = z
  .object({})
  .openapi({ title: 'GetPublicAccessBlockRequest' })
  .openapi('GetPublicAccessBlockRequest')

const GetStorageLensConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'GetStorageLensConfigurationRequest' })
  .openapi('GetStorageLensConfigurationRequest')

const GetStorageLensConfigurationTaggingRequestSchema = z
  .object({})
  .openapi({ title: 'GetStorageLensConfigurationTaggingRequest' })
  .openapi('GetStorageLensConfigurationTaggingRequest')

const JobStatusListSchema = z.array(JobStatusSchema).openapi('JobStatusList')

const LifecycleConfigurationSchema = z
  .object({
    Rules: LifecycleRulesSchema.and(
      z
        .any()
        .openapi({
          description: 'A lifecycle rule for individual objects in an Outposts bucket. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The container for the Outposts bucket lifecycle configuration.',
    required: [],
  })
  .openapi('LifecycleConfiguration')

const MaxResultsSchema = z.int().min(0).max(1000).openapi('MaxResults')

const ListAccessPointsForObjectLambdaRequestSchema = z
  .object({})
  .openapi({ title: 'ListAccessPointsForObjectLambdaRequest' })
  .openapi('ListAccessPointsForObjectLambdaRequest')

const ListAccessPointsRequestSchema = z
  .object({})
  .openapi({ title: 'ListAccessPointsRequest' })
  .openapi('ListAccessPointsRequest')

const ListJobsRequestSchema = z
  .object({})
  .openapi({ title: 'ListJobsRequest' })
  .openapi('ListJobsRequest')

const ListMultiRegionAccessPointsRequestSchema = z
  .object({})
  .openapi({ title: 'ListMultiRegionAccessPointsRequest' })
  .openapi('ListMultiRegionAccessPointsRequest')

const ListRegionalBucketsRequestSchema = z
  .object({})
  .openapi({ title: 'ListRegionalBucketsRequest' })
  .openapi('ListRegionalBucketsRequest')

const ListStorageLensConfigurationsRequestSchema = z
  .object({})
  .openapi({ title: 'ListStorageLensConfigurationsRequest' })
  .openapi('ListStorageLensConfigurationsRequest')

const MFASchema = z.string().openapi('MFA')

const PutAccessPointConfigurationForObjectLambdaRequestSchema = z
  .object({
    Configuration: ObjectLambdaConfigurationSchema.and(
      z.any().openapi({ description: 'Object Lambda Access Point configuration document.' }),
    ),
  })
  .openapi({
    required: ['Configuration'],
    title: 'PutAccessPointConfigurationForObjectLambdaRequest',
  })
  .openapi('PutAccessPointConfigurationForObjectLambdaRequest')

const PutAccessPointPolicyForObjectLambdaRequestSchema = z
  .object({
    Policy: ObjectLambdaPolicySchema.and(
      z.any().openapi({ description: 'Object Lambda Access Point resource policy document.' }),
    ),
  })
  .openapi({ required: ['Policy'], title: 'PutAccessPointPolicyForObjectLambdaRequest' })
  .openapi('PutAccessPointPolicyForObjectLambdaRequest')

const PutAccessPointPolicyRequestSchema = z
  .object({
    Policy: PolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'The policy that you want to apply to the specified access point. For more information about access point policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html">Managing data access with Amazon S3 access points</a> in the <i>Amazon S3 User Guide</i>.',
        }),
    ),
  })
  .openapi({ required: ['Policy'], title: 'PutAccessPointPolicyRequest' })
  .openapi('PutAccessPointPolicyRequest')

const PutBucketLifecycleConfigurationRequestSchema = z
  .object({
    LifecycleConfiguration: LifecycleConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Container for lifecycle rules. You can add as many as 1,000 rules.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'PutBucketLifecycleConfigurationRequest',
    xml: { namespace: 'http://awss3control.amazonaws.com/doc/2018-08-20/' },
    required: [],
  })
  .openapi('PutBucketLifecycleConfigurationRequest')

const PutBucketPolicyRequestSchema = z
  .object({
    Policy: PolicySchema.and(
      z.any().openapi({ description: 'The bucket policy as a JSON document.' }),
    ),
  })
  .openapi({ required: ['Policy'], title: 'PutBucketPolicyRequest' })
  .openapi('PutBucketPolicyRequest')

const PutBucketReplicationRequestSchema = z
  .object({
    ReplicationConfiguration: ReplicationConfigurationSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ),
  })
  .openapi({
    required: ['ReplicationConfiguration'],
    title: 'PutBucketReplicationRequest',
    xml: { namespace: 'http://awss3control.amazonaws.com/doc/2018-08-20/' },
  })
  .openapi('PutBucketReplicationRequest')

const TaggingSchema = z
  .object({
    TagSet: S3TagSetSchema.and(z.any().openapi({ description: 'A collection for a set of tags.' })),
  })
  .openapi({ required: ['TagSet'], description: '<p/>' })
  .openapi('Tagging')

const PutBucketTaggingRequestSchema = z
  .object({ Tagging: TaggingSchema.and(z.any().openapi({ description: '<p/>' })) })
  .openapi({
    required: ['Tagging'],
    title: 'PutBucketTaggingRequest',
    xml: { namespace: 'http://awss3control.amazonaws.com/doc/2018-08-20/' },
  })
  .openapi('PutBucketTaggingRequest')

const VersioningConfigurationSchema = z
  .object({
    MFADelete: MFADeleteSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'MfaDelete' },
          description:
            'Specifies whether MFA delete is enabled or disabled in the bucket versioning configuration for the S3 on Outposts bucket.',
        }),
    ).exactOptional(),
    Status: BucketVersioningStatusSchema.and(
      z.any().openapi({ description: 'Sets the versioning state of the S3 on Outposts bucket.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the versioning state of an Amazon S3 on Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketVersioning.html">PutBucketVersioning</a>.',
    required: [],
  })
  .openapi('VersioningConfiguration')

const PutBucketVersioningRequestSchema = z
  .object({
    VersioningConfiguration: VersioningConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The root-level tag for the <code>VersioningConfiguration</code> parameters.',
        }),
    ),
  })
  .openapi({
    required: ['VersioningConfiguration'],
    title: 'PutBucketVersioningRequest',
    xml: { namespace: 'http://awss3control.amazonaws.com/doc/2018-08-20/' },
  })
  .openapi('PutBucketVersioningRequest')

const PutJobTaggingRequestSchema = z
  .object({
    Tags: S3TagSetSchema.and(
      z
        .any()
        .openapi({ description: 'The set of tags to associate with the S3 Batch Operations job.' }),
    ),
  })
  .openapi({ required: ['Tags'], title: 'PutJobTaggingRequest' })
  .openapi('PutJobTaggingRequest')

const PutMultiRegionAccessPointPolicyRequestSchema = z
  .object({
    ClientToken: MultiRegionAccessPointClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An idempotency token used to identify the request and guarantee that requests are unique.',
        }),
    ),
    Details: PutMultiRegionAccessPointPolicyInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container element containing the details of the policy for the Multi-Region Access Point.',
        }),
    ),
  })
  .openapi({
    required: ['ClientToken', 'Details'],
    title: 'PutMultiRegionAccessPointPolicyRequest',
  })
  .openapi('PutMultiRegionAccessPointPolicyRequest')

const PutPublicAccessBlockRequestSchema = z
  .object({
    PublicAccessBlockConfiguration: PublicAccessBlockConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>PublicAccessBlock</code> configuration that you want to apply to the specified Amazon Web Services account.',
        }),
    ),
  })
  .openapi({
    required: ['PublicAccessBlockConfiguration'],
    title: 'PutPublicAccessBlockRequest',
    xml: { namespace: 'http://awss3control.amazonaws.com/doc/2018-08-20/' },
  })
  .openapi('PutPublicAccessBlockRequest')

const PutStorageLensConfigurationRequestSchema = z
  .object({
    StorageLensConfiguration: StorageLensConfigurationSchema.and(
      z.any().openapi({ description: 'The S3 Storage Lens configuration.' }),
    ),
    Tags: StorageLensTagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The tag set of the S3 Storage Lens configuration.</p> <note> <p>You can set up to a maximum of 50 tags.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['StorageLensConfiguration'], title: 'PutStorageLensConfigurationRequest' })
  .openapi('PutStorageLensConfigurationRequest')

const PutStorageLensConfigurationTaggingRequestSchema = z
  .object({
    Tags: StorageLensTagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The tag set of the S3 Storage Lens configuration.</p> <note> <p>You can set up to a maximum of 50 tags.</p> </note>',
        }),
    ),
  })
  .openapi({ required: ['Tags'], title: 'PutStorageLensConfigurationTaggingRequest' })
  .openapi('PutStorageLensConfigurationTaggingRequest')

const RequestedJobStatusSchema = z.enum(['Cancelled', 'Ready']).openapi('RequestedJobStatus')

const SubmitMultiRegionAccessPointRoutesRequestSchema = z
  .object({
    RouteUpdates: RouteListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The different routes that make up the new route configuration. Active routes return a value of <code>100</code>, and passive routes return a value of <code>0</code>.',
        }),
    ),
  })
  .openapi({ required: ['RouteUpdates'], title: 'SubmitMultiRegionAccessPointRoutesRequest' })
  .openapi('SubmitMultiRegionAccessPointRoutesRequest')

const UpdateJobPriorityRequestSchema = z
  .object({})
  .openapi({ title: 'UpdateJobPriorityRequest' })
  .openapi('UpdateJobPriorityRequest')

const UpdateJobStatusRequestSchema = z
  .object({})
  .openapi({ title: 'UpdateJobStatusRequest' })
  .openapi('UpdateJobStatusRequest')

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

export const getV20180820AccesspointNameXAmzAccountIdRoute = createRoute({
  method: 'get',
  path: '/v20180820/accesspoint/{name}#x-amz-account-id',
  description:
    '<p>Returns configuration information about the specified access point.</p> <p/> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html#API_control_GetAccessPoint_Examples">Examples</a> section.</p> <p>The following actions are related to <code>GetAccessPoint</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html">CreateAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html">DeleteAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPoints.html">ListAccessPoints</a> </p> </li> </ul>',
  operationId: 'GetAccessPoint',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The Amazon Web Services account ID for the account that owns the specified access point.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .min(3)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              '<p>The name of the access point whose configuration information you want to retrieve.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/accesspoint/&lt;my-accesspoint-name&gt;</code>. For example, to access the access point <code>reports-ap</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>',
            schema: { type: 'string', minLength: 3, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetAccessPointResultSchema } },
    },
  },
})

export const putV20180820AccesspointNameXAmzAccountIdRoute = createRoute({
  method: 'put',
  path: '/v20180820/accesspoint/{name}#x-amz-account-id',
  description:
    '<p>Creates an access point and associates it with the specified bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html">Managing Data Access with Amazon S3 Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p/> <note> <p>S3 on Outposts only supports VPC-style access points. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html"> Accessing Amazon S3 on Outposts using virtual private cloud (VPC) only access points</a> in the <i>Amazon S3 User Guide</i>.</p> </note> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html#API_control_CreateAccessPoint_Examples">Examples</a> section.</p> <p/> <p>The following actions are related to <code>CreateAccessPoint</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html">GetAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html">DeleteAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPoints.html">ListAccessPoints</a> </p> </li> </ul>',
  operationId: 'CreateAccessPoint',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The Amazon Web Services account ID for the account that owns the specified access point.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .min(3)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name you want to assign to this access point.',
            schema: { type: 'string', minLength: 3, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              Bucket: z
                .string()
                .min(3)
                .max(255)
                .openapi({
                  description:
                    '<p>The name of the bucket that you want to associate this access point with.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>',
                }),
              VpcConfiguration: z
                .object({
                  VpcId: VpcIdSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'If this field is specified, this access point will only allow connections from the specified VPC ID.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'The virtual private cloud (VPC) configuration for an access point.',
                  required: [],
                }),
              PublicAccessBlockConfiguration: z
                .object({
                  BlockPublicAcls: SettingSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account. Setting this element to <code>TRUE</code> causes the following behavior:</p> <ul> <li> <p> <code>PutBucketAcl</code> and <code>PutObjectAcl</code> calls fail if the specified ACL is public.</p> </li> <li> <p>PUT Object calls fail if the request includes a public ACL.</p> </li> <li> <p>PUT Bucket calls fail if the request includes a public ACL.</p> </li> </ul> <p>Enabling this setting doesn't affect existing policies or ACLs.</p> <p>This property is not supported for Amazon S3 on Outposts.</p>",
                      }),
                  ).exactOptional(),
                  IgnorePublicAcls: SettingSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. Setting this element to <code>TRUE</code> causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain. </p> <p>Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.</p> <p>This property is not supported for Amazon S3 on Outposts.</p>",
                      }),
                  ).exactOptional(),
                  BlockPublicPolicy: SettingSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>Specifies whether Amazon S3 should block public bucket policies for buckets in this account. Setting this element to <code>TRUE</code> causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access. </p> <p>Enabling this setting doesn't affect existing bucket policies.</p> <p>This property is not supported for Amazon S3 on Outposts.</p>",
                      }),
                  ).exactOptional(),
                  RestrictPublicBuckets: SettingSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>Specifies whether Amazon S3 should restrict public bucket policies for buckets in this account. Setting this element to <code>TRUE</code> restricts access to buckets with public policies to only Amazon Web Service principals and authorized users within this account.</p> <p>Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.</p> <p>This property is not supported for Amazon S3 on Outposts.</p>",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '<p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 account. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p> <p>This data type is not supported for Amazon S3 on Outposts.</p>',
                  required: [],
                }),
              BucketAccountId: z
                .string()
                .regex(/^\d{12}$/)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Web Services account ID associated with the S3 bucket associated with this access point.',
                }),
            })
            .openapi({ required: ['Bucket'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateAccessPointResultSchema } },
    },
  },
})

export const deleteV20180820AccesspointNameXAmzAccountIdRoute = createRoute({
  method: 'delete',
  path: '/v20180820/accesspoint/{name}#x-amz-account-id',
  description:
    '<p>Deletes the specified access point.</p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html#API_control_DeleteAccessPoint_Examples">Examples</a> section.</p> <p>The following actions are related to <code>DeleteAccessPoint</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html">CreateAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html">GetAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPoints.html">ListAccessPoints</a> </p> </li> </ul>',
  operationId: 'DeleteAccessPoint',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The Amazon Web Services account ID for the account that owns the specified access point.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .min(3)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              '<p>The name of the access point you want to delete.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/accesspoint/&lt;my-accesspoint-name&gt;</code>. For example, to access the access point <code>reports-ap</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>',
            schema: { type: 'string', minLength: 3, maxLength: 255 },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getV20180820AccesspointforobjectlambdaNameXAmzAccountIdRoute = createRoute({
  method: 'get',
  path: '/v20180820/accesspointforobjectlambda/{name}#x-amz-account-id',
  description:
    '<p>Returns configuration information about the specified Object Lambda Access Point</p> <p>The following actions are related to <code>GetAccessPointForObjectLambda</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPointForObjectLambda.html">CreateAccessPointForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointForObjectLambda.html">DeleteAccessPointForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPointsForObjectLambda.html">ListAccessPointsForObjectLambda</a> </p> </li> </ul>',
  operationId: 'GetAccessPointForObjectLambda',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The account ID for the account that owns the specified Object Lambda Access Point.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .regex(/^[a-z0-9]([a-z0-9\-]*[a-z0-9])?$/)
        .min(3)
        .max(45)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the Object Lambda Access Point.',
            schema: {
              type: 'string',
              pattern: '^[a-z0-9]([a-z0-9\\-]*[a-z0-9])?$',
              minLength: 3,
              maxLength: 45,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetAccessPointForObjectLambdaResultSchema } },
    },
  },
})

export const putV20180820AccesspointforobjectlambdaNameXAmzAccountIdRoute = createRoute({
  method: 'put',
  path: '/v20180820/accesspointforobjectlambda/{name}#x-amz-account-id',
  description:
    '<p>Creates an Object Lambda Access Point. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/transforming-objects.html">Transforming objects with Object Lambda Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following actions are related to <code>CreateAccessPointForObjectLambda</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointForObjectLambda.html">DeleteAccessPointForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointForObjectLambda.html">GetAccessPointForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPointsForObjectLambda.html">ListAccessPointsForObjectLambda</a> </p> </li> </ul>',
  operationId: 'CreateAccessPointForObjectLambda',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The Amazon Web Services account ID for owner of the specified Object Lambda Access Point.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .regex(/^[a-z0-9]([a-z0-9\-]*[a-z0-9])?$/)
        .min(3)
        .max(45)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name you want to assign to this Object Lambda Access Point.',
            schema: {
              type: 'string',
              pattern: '^[a-z0-9]([a-z0-9\\-]*[a-z0-9])?$',
              minLength: 3,
              maxLength: 45,
            },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              Configuration: z
                .object({
                  SupportingAccessPoint: ObjectLambdaSupportingAccessPointArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Standard access point associated with the Object Lambda Access Point.',
                      }),
                  ).exactOptional(),
                  CloudWatchMetricsEnabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A container for whether the CloudWatch metrics configuration is enabled.',
                      }),
                  ).exactOptional(),
                  AllowedFeatures: ObjectLambdaAllowedFeaturesListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A container for allowed features. Valid inputs are <code>GetObject-Range</code>, <code>GetObject-PartNumber</code>, <code>HeadObject-Range</code>, and <code>HeadObject-PartNumber</code>.',
                      }),
                  ).exactOptional(),
                  TransformationConfigurations:
                    ObjectLambdaTransformationConfigurationsListSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'A container for transformation configurations for an Object Lambda Access Point.',
                        }),
                    ).exactOptional(),
                })
                .openapi({
                  description: 'A configuration used when creating an Object Lambda Access Point.',
                  required: [],
                }),
            })
            .openapi({ required: ['Configuration'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateAccessPointForObjectLambdaResultSchema } },
    },
  },
})

export const deleteV20180820AccesspointforobjectlambdaNameXAmzAccountIdRoute = createRoute({
  method: 'delete',
  path: '/v20180820/accesspointforobjectlambda/{name}#x-amz-account-id',
  description:
    '<p>Deletes the specified Object Lambda Access Point.</p> <p>The following actions are related to <code>DeleteAccessPointForObjectLambda</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPointForObjectLambda.html">CreateAccessPointForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointForObjectLambda.html">GetAccessPointForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPointsForObjectLambda.html">ListAccessPointsForObjectLambda</a> </p> </li> </ul>',
  operationId: 'DeleteAccessPointForObjectLambda',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The account ID for the account that owns the specified Object Lambda Access Point.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .regex(/^[a-z0-9]([a-z0-9\-]*[a-z0-9])?$/)
        .min(3)
        .max(45)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the access point you want to delete.',
            schema: {
              type: 'string',
              pattern: '^[a-z0-9]([a-z0-9\\-]*[a-z0-9])?$',
              minLength: 3,
              maxLength: 45,
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const putV20180820BucketNameRoute = createRoute({
  method: 'put',
  path: '/v20180820/bucket/{name}',
  description:
    '<note> <p>This action creates an Amazon S3 on Outposts bucket. To create an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">Create Bucket</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Creates a new Outposts bucket. By creating the bucket, you become the bucket owner. To create an Outposts bucket, you must have S3 on Outposts. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in <i>Amazon S3 User Guide</i>.</p> <p>Not every string is an acceptable bucket name. For information on bucket naming restrictions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/BucketRestrictions.html#bucketnamingrules">Working with Amazon S3 Buckets</a>.</p> <p>S3 on Outposts buckets support:</p> <ul> <li> <p>Tags</p> </li> <li> <p>LifecycleConfigurations for deleting expired objects</p> </li> </ul> <p>For a complete list of restrictions and Amazon S3 feature limitations on S3 on Outposts, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OnOutpostsRestrictionsLimitations.html"> Amazon S3 on Outposts Restrictions and Limitations</a>.</p> <p>For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and <code>x-amz-outpost-id</code> in your API request, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateBucket.html#API_control_CreateBucket_Examples">Examples</a> section.</p> <p>The following actions are related to <code>CreateBucket</code> for Amazon S3 on Outposts:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucket.html">GetBucket</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucket.html">DeleteBucket</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html">CreateAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html">PutAccessPointPolicy</a> </p> </li> </ul>',
  operationId: 'CreateBucket',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-acl': z
        .enum(['private', 'public-read', 'public-read-write', 'authenticated-read'])
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-acl',
            in: 'header',
            required: false,
            description:
              '<p>The canned ACL to apply to the bucket.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>',
            schema: {
              type: 'string',
              enum: ['private', 'public-read', 'public-read-write', 'authenticated-read'],
            },
          },
        }),
      'x-amz-grant-full-control': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-grant-full-control',
            in: 'header',
            required: false,
            description:
              '<p>Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>',
            schema: { type: 'string' },
          },
        }),
      'x-amz-grant-read': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-grant-read',
            in: 'header',
            required: false,
            description:
              '<p>Allows grantee to list the objects in the bucket.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>',
            schema: { type: 'string' },
          },
        }),
      'x-amz-grant-read-acp': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-grant-read-acp',
            in: 'header',
            required: false,
            description:
              '<p>Allows grantee to read the bucket ACL.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>',
            schema: { type: 'string' },
          },
        }),
      'x-amz-grant-write': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-grant-write',
            in: 'header',
            required: false,
            description:
              '<p>Allows grantee to create, overwrite, and delete any object in the bucket.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>',
            schema: { type: 'string' },
          },
        }),
      'x-amz-grant-write-acp': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-grant-write-acp',
            in: 'header',
            required: false,
            description:
              '<p>Allows grantee to write the ACL for the applicable bucket.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>',
            schema: { type: 'string' },
          },
        }),
      'x-amz-bucket-object-lock-enabled': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-bucket-object-lock-enabled',
            in: 'header',
            required: false,
            description:
              '<p>Specifies whether you want S3 Object Lock to be enabled for the new bucket.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>',
            schema: { type: 'boolean' },
          },
        }),
      'x-amz-outpost-id': z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-outpost-id',
            in: 'header',
            required: false,
            description:
              '<p>The ID of the Outposts where the bucket is being created.</p> <note> <p>This ID is required by Amazon S3 on Outposts buckets.</p> </note>',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .min(3)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the bucket.',
            schema: { type: 'string', minLength: 3, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              CreateBucketConfiguration: z
                .object({
                  LocationConstraint: BucketLocationConstraintSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Specifies the Region where the bucket will be created. If you are creating a bucket on the US East (N. Virginia) Region (us-east-1), you do not need to specify the location. </p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '<p>The container for the bucket configuration.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>',
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
    200: { description: 'Success', content: { 'text/xml': { schema: CreateBucketResultSchema } } },
    480: {
      description: 'BucketAlreadyExists',
      content: { 'text/xml': { schema: BucketAlreadyExistsSchema } },
    },
    481: {
      description: 'BucketAlreadyOwnedByYou',
      content: { 'text/xml': { schema: BucketAlreadyOwnedByYouSchema } },
    },
  },
})

export const getV20180820JobsXAmzAccountIdRoute = createRoute({
  method: 'get',
  path: '/v20180820/jobs#x-amz-account-id',
  description:
    '<p>Lists current S3 Batch Operations jobs and jobs that have ended within the last 30 days for the Amazon Web Services account making the request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops.html">S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p> <p>Related actions include:</p> <p/> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html">DescribeJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobPriority.html">UpdateJobPriority</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a> </p> </li> </ul>',
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
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The Amazon Web Services account ID associated with the S3 Batch Operations job.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    query: z.object({
      jobStatuses: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(JobStatusSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'jobStatuses',
            in: 'query',
            required: false,
            description:
              'The <code>List Jobs</code> request returns jobs that match the statuses listed in this element.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/JobStatus' } },
          },
        }),
      nextToken: z
        .string()
        .regex(/^[A-Za-z0-9\+\:\/\=\?\#-_]+$/)
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'A pagination token to request the next page of results. Use the token that Amazon S3 returned in the <code>NextToken</code> element of the <code>ListJobsResult</code> from the previous <code>List Jobs</code> request.',
            schema: {
              type: 'string',
              pattern: '^[A-Za-z0-9\\+\\:\\/\\=\\?\\#-_]+$',
              minLength: 1,
              maxLength: 1024,
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
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of jobs that Amazon S3 will include in the <code>List Jobs</code> response. If there are more jobs than this number, the response will include a pagination token in the <code>NextToken</code> field to enable you to retrieve the next page of results.',
            schema: { type: 'integer', minimum: 0, maximum: 1000 },
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
    200: { description: 'Success', content: { 'text/xml': { schema: ListJobsResultSchema } } },
    480: {
      description: 'InvalidRequestException',
      content: { 'text/xml': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceException',
      content: { 'text/xml': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'text/xml': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postV20180820JobsXAmzAccountIdRoute = createRoute({
  method: 'post',
  path: '/v20180820/jobs#x-amz-account-id',
  description:
    '<p>You can use S3 Batch Operations to perform large-scale batch actions on Amazon S3 objects. Batch Operations can run a single action on lists of Amazon S3 objects that you specify. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops.html">S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p> <p>This action creates a S3 Batch Operations job.</p> <p/> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html">DescribeJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html">ListJobs</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobPriority.html">UpdateJobPriority</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_JobOperation.html">JobOperation</a> </p> </li> </ul>',
  operationId: 'CreateJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description: 'The Amazon Web Services account ID that creates the job.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              ConfirmationRequired: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates whether confirmation is required before Amazon S3 runs the job. Confirmation is only required for jobs created through the Amazon S3 console.',
                }),
              Operation: z
                .object({
                  LambdaInvoke: LambdaInvokeOperationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Directs the specified job to invoke an Lambda function on every object in the manifest.',
                      }),
                  ).exactOptional(),
                  S3PutObjectCopy: S3CopyObjectOperationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Directs the specified job to run a PUT Copy object call on every object in the manifest.',
                      }),
                  ).exactOptional(),
                  S3PutObjectAcl: S3SetObjectAclOperationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Directs the specified job to run a <code>PutObjectAcl</code> call on every object in the manifest.',
                      }),
                  ).exactOptional(),
                  S3PutObjectTagging: S3SetObjectTaggingOperationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Directs the specified job to run a PUT Object tagging call on every object in the manifest.',
                      }),
                  ).exactOptional(),
                  S3DeleteObjectTagging: S3DeleteObjectTaggingOperationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Directs the specified job to execute a DELETE Object tagging call on every object in the manifest.',
                      }),
                  ).exactOptional(),
                  S3InitiateRestoreObject: S3InitiateRestoreObjectOperationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Directs the specified job to initiate restore requests for every archived object in the manifest.',
                      }),
                  ).exactOptional(),
                  S3PutObjectLegalHold: S3SetObjectLegalHoldOperationSchema.exactOptional(),
                  S3PutObjectRetention: S3SetObjectRetentionOperationSchema.exactOptional(),
                  S3ReplicateObject: S3ReplicateObjectOperationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "Directs the specified job to invoke <code>ReplicateObject</code> on every object in the job's manifest.",
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'The operation that you want this job to perform on every object listed in the manifest. For more information about the available operations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-operations.html">Operations</a> in the <i>Amazon S3 User Guide</i>.',
                  required: [],
                }),
              Report: z
                .object({
                  Bucket: S3BucketArnStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name (ARN) for the bucket where specified job-completion report will be stored.',
                      }),
                  ).exactOptional(),
                  Format: JobReportFormatSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The format of the specified job-completion report.',
                      }),
                  ).exactOptional(),
                  Enabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Indicates whether the specified job will generate a job-completion report.',
                      }),
                  ).exactOptional(),
                  Prefix: ReportPrefixStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An optional prefix to describe where in the specified bucket the job-completion report will be stored. Amazon S3 stores the job-completion report at <code>&lt;prefix&gt;/job-&lt;job-id&gt;/report.json</code>.',
                      }),
                  ).exactOptional(),
                  ReportScope: JobReportScopeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Indicates whether the job-completion report will include details of all tasks or only failed tasks.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'Contains the configuration parameters for a job-completion report.',
                  required: [],
                }),
              ClientRequestToken: z
                .string()
                .min(1)
                .max(64)
                .openapi({
                  description:
                    "An idempotency token to ensure that you don't accidentally submit the same request twice. You can use any string up to the maximum length.",
                }),
              Manifest: z
                .object({
                  Spec: JobManifestSpecSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "Describes the format of the specified job's manifest. If the manifest is in CSV format, also describes the columns contained within the manifest.",
                      }),
                  ).exactOptional(),
                  Location: JobManifestLocationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "Contains the information required to locate the specified job's manifest.",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: "Contains the configuration information for a job's manifest.",
                  required: [],
                }),
              Description: z
                .string()
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    "A description for this job. You can use any string within the permitted length. Descriptions don't need to be unique and can be used for multiple jobs.",
                }),
              Priority: z
                .int()
                .min(0)
                .max(2147483647)
                .openapi({
                  description:
                    'The numerical priority for this job. Higher numbers indicate higher priority.',
                }),
              RoleArn: z
                .string()
                .regex(/arn:[^:]+:iam::\d{12}:role\/.*/)
                .min(1)
                .max(2048)
                .openapi({
                  description:
                    "The Amazon Resource Name (ARN) for the Identity and Access Management (IAM) role that Batch Operations will use to run this job's action on every object in the manifest.",
                }),
              Tags: z
                .array(S3TagSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A set of tags to associate with the S3 Batch Operations job. This is an optional parameter. ',
                }),
              ManifestGenerator: z
                .object({
                  S3JobManifestGenerator: S3JobManifestGeneratorSchema.and(
                    z
                      .any()
                      .openapi({
                        description: "The S3 job ManifestGenerator's configuration details.",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: "Configures the type of the job's ManifestGenerator.",
                  required: [],
                }),
            })
            .openapi({
              required: ['Operation', 'Report', 'ClientRequestToken', 'Priority', 'RoleArn'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: CreateJobResultSchema } } },
    480: {
      description: 'TooManyRequestsException',
      content: { 'text/xml': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'text/xml': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'IdempotencyException',
      content: { 'text/xml': { schema: IdempotencyExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'text/xml': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postV20180820AsyncRequestsMrapCreateXAmzAccountIdRoute = createRoute({
  method: 'post',
  path: '/v20180820/async-requests/mrap/create#x-amz-account-id',
  description:
    '<p>Creates a Multi-Region Access Point and associates it with the specified buckets. For more information about creating Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html">Creating Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManagingMultiRegionAccessPoints.html">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>This request is asynchronous, meaning that you might receive a response before the command has completed. When this request provides a response, it provides a token that you can use to monitor the status of the request with <code>DescribeMultiRegionAccessPointOperation</code>.</p> <p>The following actions are related to <code>CreateMultiRegionAccessPoint</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html">DeleteMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html">DescribeMultiRegionAccessPointOperation</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPoint.html">GetMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListMultiRegionAccessPoints.html">ListMultiRegionAccessPoints</a> </p> </li> </ul>',
  operationId: 'CreateMultiRegionAccessPoint',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The Amazon Web Services account ID for the owner of the Multi-Region Access Point. The owner of the Multi-Region Access Point also must own the underlying buckets.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              ClientToken: z
                .string()
                .regex(/\S+/)
                .max(64)
                .openapi({
                  description:
                    'An idempotency token used to identify the request and guarantee that requests are unique.',
                }),
              Details: z
                .object({
                  Name: MultiRegionAccessPointNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The name of the Multi-Region Access Point associated with this request.',
                      }),
                  ).exactOptional(),
                  PublicAccessBlock: PublicAccessBlockConfigurationSchema.exactOptional(),
                  Regions: RegionCreationListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The buckets in different Regions that are associated with the Multi-Region Access Point.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'A container for the information associated with a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a> request. ',
                  required: [],
                }),
            })
            .openapi({ required: ['ClientToken', 'Details'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateMultiRegionAccessPointResultSchema } },
    },
  },
})

export const getV20180820AccesspointNamePolicyXAmzAccountIdRoute = createRoute({
  method: 'get',
  path: '/v20180820/accesspoint/{name}/policy#x-amz-account-id',
  description:
    '<p>Returns the access point policy associated with the specified access point.</p> <p>The following actions are related to <code>GetAccessPointPolicy</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html">PutAccessPointPolicy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicy.html">DeleteAccessPointPolicy</a> </p> </li> </ul>',
  operationId: 'GetAccessPointPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description: 'The account ID for the account that owns the specified access point.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .min(3)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              '<p>The name of the access point whose policy you want to retrieve.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/accesspoint/&lt;my-accesspoint-name&gt;</code>. For example, to access the access point <code>reports-ap</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>',
            schema: { type: 'string', minLength: 3, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetAccessPointPolicyResultSchema } },
    },
  },
})

export const putV20180820AccesspointNamePolicyXAmzAccountIdRoute = createRoute({
  method: 'put',
  path: '/v20180820/accesspoint/{name}/policy#x-amz-account-id',
  description:
    '<p>Associates an access policy with the specified access point. Each access point can have only one policy, so a request made to this API replaces any existing policy associated with the specified access point.</p> <p/> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html#API_control_PutAccessPointPolicy_Examples">Examples</a> section.</p> <p>The following actions are related to <code>PutAccessPointPolicy</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicy.html">GetAccessPointPolicy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicy.html">DeleteAccessPointPolicy</a> </p> </li> </ul>',
  operationId: 'PutAccessPointPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The Amazon Web Services account ID for owner of the bucket associated with the specified access point.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .min(3)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              '<p>The name of the access point that you want to associate with the specified policy.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/accesspoint/&lt;my-accesspoint-name&gt;</code>. For example, to access the access point <code>reports-ap</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>',
            schema: { type: 'string', minLength: 3, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              Policy: z
                .string()
                .openapi({
                  description:
                    'The policy that you want to apply to the specified access point. For more information about access point policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html">Managing data access with Amazon S3 access points</a> in the <i>Amazon S3 User Guide</i>.',
                }),
            })
            .openapi({ required: ['Policy'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const deleteV20180820AccesspointNamePolicyXAmzAccountIdRoute = createRoute({
  method: 'delete',
  path: '/v20180820/accesspoint/{name}/policy#x-amz-account-id',
  description:
    '<p>Deletes the access point policy for the specified access point.</p> <p/> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicy.html#API_control_DeleteAccessPointPolicy_Examples">Examples</a> section.</p> <p>The following actions are related to <code>DeleteAccessPointPolicy</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html">PutAccessPointPolicy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicy.html">GetAccessPointPolicy</a> </p> </li> </ul>',
  operationId: 'DeleteAccessPointPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description: 'The account ID for the account that owns the specified access point.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .min(3)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              '<p>The name of the access point whose policy you want to delete.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/accesspoint/&lt;my-accesspoint-name&gt;</code>. For example, to access the access point <code>reports-ap</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>',
            schema: { type: 'string', minLength: 3, maxLength: 255 },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdRoute = createRoute({
  method: 'get',
  path: '/v20180820/accesspointforobjectlambda/{name}/policy#x-amz-account-id',
  description:
    '<p>Returns the resource policy for an Object Lambda Access Point.</p> <p>The following actions are related to <code>GetAccessPointPolicyForObjectLambda</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicyForObjectLambda.html">DeleteAccessPointPolicyForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicyForObjectLambda.html">PutAccessPointPolicyForObjectLambda</a> </p> </li> </ul>',
  operationId: 'GetAccessPointPolicyForObjectLambda',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The account ID for the account that owns the specified Object Lambda Access Point.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .regex(/^[a-z0-9]([a-z0-9\-]*[a-z0-9])?$/)
        .min(3)
        .max(45)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the Object Lambda Access Point.',
            schema: {
              type: 'string',
              pattern: '^[a-z0-9]([a-z0-9\\-]*[a-z0-9])?$',
              minLength: 3,
              maxLength: 45,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetAccessPointPolicyForObjectLambdaResultSchema } },
    },
  },
})

export const putV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdRoute = createRoute({
  method: 'put',
  path: '/v20180820/accesspointforobjectlambda/{name}/policy#x-amz-account-id',
  description:
    '<p>Creates or replaces resource policy for an Object Lambda Access Point. For an example policy, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-create.html#olap-create-cli">Creating Object Lambda Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following actions are related to <code>PutAccessPointPolicyForObjectLambda</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicyForObjectLambda.html">DeleteAccessPointPolicyForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicyForObjectLambda.html">GetAccessPointPolicyForObjectLambda</a> </p> </li> </ul>',
  operationId: 'PutAccessPointPolicyForObjectLambda',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The account ID for the account that owns the specified Object Lambda Access Point.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .regex(/^[a-z0-9]([a-z0-9\-]*[a-z0-9])?$/)
        .min(3)
        .max(45)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the Object Lambda Access Point.',
            schema: {
              type: 'string',
              pattern: '^[a-z0-9]([a-z0-9\\-]*[a-z0-9])?$',
              minLength: 3,
              maxLength: 45,
            },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              Policy: z
                .string()
                .openapi({ description: 'Object Lambda Access Point resource policy document.' }),
            })
            .openapi({ required: ['Policy'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const deleteV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdRoute = createRoute({
  method: 'delete',
  path: '/v20180820/accesspointforobjectlambda/{name}/policy#x-amz-account-id',
  description:
    '<p>Removes the resource policy for an Object Lambda Access Point.</p> <p>The following actions are related to <code>DeleteAccessPointPolicyForObjectLambda</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicyForObjectLambda.html">GetAccessPointPolicyForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicyForObjectLambda.html">PutAccessPointPolicyForObjectLambda</a> </p> </li> </ul>',
  operationId: 'DeleteAccessPointPolicyForObjectLambda',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The account ID for the account that owns the specified Object Lambda Access Point.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .regex(/^[a-z0-9]([a-z0-9\-]*[a-z0-9])?$/)
        .min(3)
        .max(45)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              'The name of the Object Lambda Access Point you want to delete the policy for.',
            schema: {
              type: 'string',
              pattern: '^[a-z0-9]([a-z0-9\\-]*[a-z0-9])?$',
              minLength: 3,
              maxLength: 45,
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getV20180820BucketNameXAmzAccountIdRoute = createRoute({
  method: 'get',
  path: '/v20180820/bucket/{name}#x-amz-account-id',
  description:
    '<p>Gets an Amazon S3 on Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html"> Using Amazon S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you are using an identity other than the root user of the Amazon Web Services account that owns the Outposts bucket, the calling identity must have the <code>s3-outposts:GetBucket</code> permissions on the specified Outposts bucket and belong to the Outposts bucket owner\'s account in order to use this action. Only users from Outposts bucket owner account with the right permissions can perform actions on an Outposts bucket. </p> <p> If you don\'t have <code>s3-outposts:GetBucket</code> permissions or you\'re not using an identity that belongs to the bucket owner\'s account, Amazon S3 returns a <code>403 Access Denied</code> error.</p> <p>The following actions are related to <code>GetBucket</code> for Amazon S3 on Outposts:</p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucket.html#API_control_GetBucket_Examples">Examples</a> section.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateBucket.html">CreateBucket</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucket.html">DeleteBucket</a> </p> </li> </ul>',
  operationId: 'GetBucket',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description: 'The Amazon Web Services account ID of the Outposts bucket.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .min(3)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              '<p>Specifies the bucket.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>',
            schema: { type: 'string', minLength: 3, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: GetBucketResultSchema } } },
  },
})

export const deleteV20180820BucketNameXAmzAccountIdRoute = createRoute({
  method: 'delete',
  path: '/v20180820/bucket/{name}#x-amz-account-id',
  description:
    '<note> <p>This action deletes an Amazon S3 on Outposts bucket. To delete an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html">DeleteBucket</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Deletes the Amazon S3 on Outposts bucket. All objects (including all object versions and delete markers) in the bucket must be deleted before the bucket itself can be deleted. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in <i>Amazon S3 User Guide</i>.</p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucket.html#API_control_DeleteBucket_Examples">Examples</a> section.</p> <p class="title"> <b>Related Resources</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateBucket.html">CreateBucket</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucket.html">GetBucket</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html">DeleteObject</a> </p> </li> </ul>',
  operationId: 'DeleteBucket',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description: 'The account ID that owns the Outposts bucket.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .min(3)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              '<p>Specifies the bucket being deleted.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>',
            schema: { type: 'string', minLength: 3, maxLength: 255 },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getV20180820BucketNameLifecycleconfigurationXAmzAccountIdRoute = createRoute({
  method: 'get',
  path: '/v20180820/bucket/{name}/lifecycleconfiguration#x-amz-account-id',
  description:
    '<note> <p>This action gets an Amazon S3 on Outposts bucket\'s lifecycle configuration. To get an S3 bucket\'s lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Returns the lifecycle configuration information set on the Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> and for information about lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html"> Object Lifecycle Management</a> in <i>Amazon S3 User Guide</i>.</p> <p>To use this action, you must have permission to perform the <code>s3-outposts:GetLifecycleConfiguration</code> action. The Outposts bucket owner has this permission, by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html#API_control_GetBucketLifecycleConfiguration_Examples">Examples</a> section.</p> <p> <code>GetBucketLifecycleConfiguration</code> has the following special error:</p> <ul> <li> <p>Error code: <code>NoSuchLifecycleConfiguration</code> </p> <ul> <li> <p>Description: The lifecycle configuration does not exist.</p> </li> <li> <p>HTTP Status Code: 404 Not Found</p> </li> <li> <p>SOAP Fault Code Prefix: Client</p> </li> </ul> </li> </ul> <p>The following actions are related to <code>GetBucketLifecycleConfiguration</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketLifecycleConfiguration.html">DeleteBucketLifecycleConfiguration</a> </p> </li> </ul>',
  operationId: 'GetBucketLifecycleConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description: 'The Amazon Web Services account ID of the Outposts bucket.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .min(3)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              '<p>The Amazon Resource Name (ARN) of the bucket.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>',
            schema: { type: 'string', minLength: 3, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetBucketLifecycleConfigurationResultSchema } },
    },
  },
})

export const putV20180820BucketNameLifecycleconfigurationXAmzAccountIdRoute = createRoute({
  method: 'put',
  path: '/v20180820/bucket/{name}/lifecycleconfiguration#x-amz-account-id',
  description:
    '<note> <p>This action puts a lifecycle configuration to an Amazon S3 on Outposts bucket. To put a lifecycle configuration to an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Creates a new lifecycle configuration for the S3 on Outposts bucket or replaces an existing lifecycle configuration. Outposts buckets only support lifecycle configurations that delete/expire objects after a certain period of time and abort incomplete multipart uploads.</p> <p/> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html#API_control_PutBucketLifecycleConfiguration_Examples">Examples</a> section.</p> <p>The following actions are related to <code>PutBucketLifecycleConfiguration</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketLifecycleConfiguration.html">DeleteBucketLifecycleConfiguration</a> </p> </li> </ul>',
  operationId: 'PutBucketLifecycleConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description: 'The Amazon Web Services account ID of the Outposts bucket.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .min(3)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the bucket for which to set the configuration.',
            schema: { type: 'string', minLength: 3, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              LifecycleConfiguration: z
                .object({
                  Rules: LifecycleRulesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A lifecycle rule for individual objects in an Outposts bucket. ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'The container for the Outposts bucket lifecycle configuration.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const deleteV20180820BucketNameLifecycleconfigurationXAmzAccountIdRoute = createRoute({
  method: 'delete',
  path: '/v20180820/bucket/{name}/lifecycleconfiguration#x-amz-account-id',
  description:
    '<note> <p>This action deletes an Amazon S3 on Outposts bucket\'s lifecycle configuration. To delete an S3 bucket\'s lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketLifecycle.html">DeleteBucketLifecycle</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Deletes the lifecycle configuration from the specified Outposts bucket. Amazon S3 on Outposts removes all the lifecycle configuration rules in the lifecycle subresource associated with the bucket. Your objects never expire, and Amazon S3 on Outposts no longer automatically deletes any objects on the basis of rules contained in the deleted lifecycle configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in <i>Amazon S3 User Guide</i>.</p> <p>To use this action, you must have permission to perform the <code>s3-outposts:DeleteLifecycleConfiguration</code> action. By default, the bucket owner has this permission and the Outposts bucket owner can grant this permission to others.</p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketLifecycleConfiguration.html#API_control_DeleteBucketLifecycleConfiguration_Examples">Examples</a> section.</p> <p>For more information about object expiration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#intro-lifecycle-rules-actions">Elements to Describe Lifecycle Actions</a>.</p> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a> </p> </li> </ul>',
  operationId: 'DeleteBucketLifecycleConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description: 'The account ID of the lifecycle configuration to delete.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .min(3)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              '<p>Specifies the bucket.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>',
            schema: { type: 'string', minLength: 3, maxLength: 255 },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getV20180820BucketNamePolicyXAmzAccountIdRoute = createRoute({
  method: 'get',
  path: '/v20180820/bucket/{name}/policy#x-amz-account-id',
  description:
    '<note> <p>This action gets a bucket policy for an Amazon S3 on Outposts bucket. To get a policy for an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicy.html">GetBucketPolicy</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Returns the policy of a specified Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must have the <code>GetBucketPolicy</code> permissions on the specified bucket and belong to the bucket owner\'s account in order to use this action.</p> <p>Only users from Outposts bucket owner account with the right permissions can perform actions on an Outposts bucket. If you don\'t have <code>s3-outposts:GetBucketPolicy</code> permissions or you\'re not using an identity that belongs to the bucket owner\'s account, Amazon S3 returns a <code>403 Access Denied</code> error.</p> <important> <p>As a security precaution, the root user of the Amazon Web Services account that owns a bucket can always use this action, even if the policy explicitly denies the root user the ability to perform this action.</p> </important> <p>For more information about bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User Policies</a>.</p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketPolicy.html#API_control_GetBucketPolicy_Examples">Examples</a> section.</p> <p>The following actions are related to <code>GetBucketPolicy</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketPolicy.html">PutBucketPolicy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketPolicy.html">DeleteBucketPolicy</a> </p> </li> </ul>',
  operationId: 'GetBucketPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description: 'The Amazon Web Services account ID of the Outposts bucket.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .min(3)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              '<p>Specifies the bucket.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>',
            schema: { type: 'string', minLength: 3, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetBucketPolicyResultSchema } },
    },
  },
})

export const putV20180820BucketNamePolicyXAmzAccountIdRoute = createRoute({
  method: 'put',
  path: '/v20180820/bucket/{name}/policy#x-amz-account-id',
  description:
    '<note> <p>This action puts a bucket policy to an Amazon S3 on Outposts bucket. To put a policy on an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketPolicy.html">PutBucketPolicy</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Applies an Amazon S3 bucket policy to an Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you are using an identity other than the root user of the Amazon Web Services account that owns the Outposts bucket, the calling identity must have the <code>PutBucketPolicy</code> permissions on the specified Outposts bucket and belong to the bucket owner\'s account in order to use this action.</p> <p>If you don\'t have <code>PutBucketPolicy</code> permissions, Amazon S3 returns a <code>403 Access Denied</code> error. If you have the correct permissions, but you\'re not using an identity that belongs to the bucket owner\'s account, Amazon S3 returns a <code>405 Method Not Allowed</code> error.</p> <important> <p> As a security precaution, the root user of the Amazon Web Services account that owns a bucket can always use this action, even if the policy explicitly denies the root user the ability to perform this action. </p> </important> <p>For more information about bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User Policies</a>.</p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketPolicy.html#API_control_PutBucketPolicy_Examples">Examples</a> section.</p> <p>The following actions are related to <code>PutBucketPolicy</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketPolicy.html">GetBucketPolicy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketPolicy.html">DeleteBucketPolicy</a> </p> </li> </ul>',
  operationId: 'PutBucketPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description: 'The Amazon Web Services account ID of the Outposts bucket.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
      'x-amz-confirm-remove-self-bucket-access': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-confirm-remove-self-bucket-access',
            in: 'header',
            required: false,
            description:
              '<p>Set this parameter to true to confirm that you want to remove your permissions to change this bucket policy in the future.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>',
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .min(3)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              '<p>Specifies the bucket.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>',
            schema: { type: 'string', minLength: 3, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              Policy: z.string().openapi({ description: 'The bucket policy as a JSON document.' }),
            })
            .openapi({ required: ['Policy'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const deleteV20180820BucketNamePolicyXAmzAccountIdRoute = createRoute({
  method: 'delete',
  path: '/v20180820/bucket/{name}/policy#x-amz-account-id',
  description:
    '<note> <p>This action deletes an Amazon S3 on Outposts bucket policy. To delete an S3 bucket policy, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketPolicy.html">DeleteBucketPolicy</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>This implementation of the DELETE action uses the policy subresource to delete the policy of a specified Amazon S3 on Outposts bucket. If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must have the <code>s3-outposts:DeleteBucketPolicy</code> permissions on the specified Outposts bucket and belong to the bucket owner\'s account to use this action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in <i>Amazon S3 User Guide</i>.</p> <p>If you don\'t have <code>DeleteBucketPolicy</code> permissions, Amazon S3 returns a <code>403 Access Denied</code> error. If you have the correct permissions, but you\'re not using an identity that belongs to the bucket owner\'s account, Amazon S3 returns a <code>405 Method Not Allowed</code> error. </p> <important> <p>As a security precaution, the root user of the Amazon Web Services account that owns a bucket can always use this action, even if the policy explicitly denies the root user the ability to perform this action.</p> </important> <p>For more information about bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User Policies</a>. </p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketPolicy.html#API_control_DeleteBucketPolicy_Examples">Examples</a> section.</p> <p>The following actions are related to <code>DeleteBucketPolicy</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketPolicy.html">GetBucketPolicy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketPolicy.html">PutBucketPolicy</a> </p> </li> </ul>',
  operationId: 'DeleteBucketPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description: 'The account ID of the Outposts bucket.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .min(3)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              '<p>Specifies the bucket.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>',
            schema: { type: 'string', minLength: 3, maxLength: 255 },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getV20180820BucketNameReplicationXAmzAccountIdRoute = createRoute({
  method: 'get',
  path: '/v20180820/bucket/{name}/replication#x-amz-account-id',
  description:
    '<note> <p>This operation gets an Amazon S3 on Outposts bucket\'s replication configuration. To get an S3 bucket\'s replication configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketReplication.html">GetBucketReplication</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Returns the replication configuration of an S3 on Outposts bucket. For more information about S3 on Outposts, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>. For information about S3 replication on Outposts configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsReplication.html">Replicating objects for S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>It can take a while to propagate <code>PUT</code> or <code>DELETE</code> requests for a replication configuration to all S3 on Outposts systems. Therefore, the replication configuration that\'s returned by a <code>GET</code> request soon after a <code>PUT</code> or <code>DELETE</code> request might return a more recent result than what\'s on the Outpost. If an Outpost is offline, the delay in updating the replication configuration on that Outpost can be significant.</p> </note> <p>This action requires permissions for the <code>s3-outposts:GetReplicationConfiguration</code> action. The Outposts bucket owner has this permission by default and can grant it to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsIAM.html">Setting up IAM with S3 on Outposts</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsBucketPolicy.html">Managing access to S3 on Outposts bucket</a> in the <i>Amazon S3 User Guide</i>.</p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketReplication.html#API_control_GetBucketReplication_Examples">Examples</a> section.</p> <p>If you include the <code>Filter</code> element in a replication configuration, you must also include the <code>DeleteMarkerReplication</code>, <code>Status</code>, and <code>Priority</code> elements. The response also returns those elements.</p> <p>For information about S3 on Outposts replication failure reasons, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/outposts-replication-eventbridge.html#outposts-replication-failure-codes">Replication failure reasons</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following operations are related to <code>GetBucketReplication</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketReplication.html">PutBucketReplication</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketReplication.html">DeleteBucketReplication</a> </p> </li> </ul>',
  operationId: 'GetBucketReplication',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description: 'The Amazon Web Services account ID of the Outposts bucket.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .min(3)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              '<p>Specifies the bucket to get the replication information for.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>',
            schema: { type: 'string', minLength: 3, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetBucketReplicationResultSchema } },
    },
  },
})

export const putV20180820BucketNameReplicationXAmzAccountIdRoute = createRoute({
  method: 'put',
  path: '/v20180820/bucket/{name}/replication#x-amz-account-id',
  description:
    '<note> <p>This action creates an Amazon S3 on Outposts bucket\'s replication configuration. To create an S3 bucket\'s replication configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketReplication.html">PutBucketReplication</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Creates a replication configuration or replaces an existing one. For information about S3 replication on Outposts configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsReplication.html">Replicating objects for S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>It can take a while to propagate <code>PUT</code> or <code>DELETE</code> requests for a replication configuration to all S3 on Outposts systems. Therefore, the replication configuration that\'s returned by a <code>GET</code> request soon after a <code>PUT</code> or <code>DELETE</code> request might return a more recent result than what\'s on the Outpost. If an Outpost is offline, the delay in updating the replication configuration on that Outpost can be significant.</p> </note> <p>Specify the replication configuration in the request body. In the replication configuration, you provide the following information:</p> <ul> <li> <p>The name of the destination bucket or buckets where you want S3 on Outposts to replicate objects</p> </li> <li> <p>The Identity and Access Management (IAM) role that S3 on Outposts can assume to replicate objects on your behalf</p> </li> <li> <p>Other relevant information, such as replication rules</p> </li> </ul> <p>A replication configuration must include at least one rule and can contain a maximum of 100. Each rule identifies a subset of objects to replicate by filtering the objects in the source Outposts bucket. To choose additional subsets of objects to replicate, add a rule for each subset.</p> <p>To specify a subset of the objects in the source Outposts bucket to apply a replication rule to, add the <code>Filter</code> element as a child of the <code>Rule</code> element. You can filter objects based on an object key prefix, one or more object tags, or both. When you add the <code>Filter</code> element in the configuration, you must also add the following elements: <code>DeleteMarkerReplication</code>, <code>Status</code>, and <code>Priority</code>.</p> <p>Using <code>PutBucketReplication</code> on Outposts requires that both the source and destination buckets must have versioning enabled. For information about enabling versioning on a bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsManagingVersioning.html">Managing S3 Versioning for your S3 on Outposts bucket</a>.</p> <p>For information about S3 on Outposts replication failure reasons, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/outposts-replication-eventbridge.html#outposts-replication-failure-codes">Replication failure reasons</a> in the <i>Amazon S3 User Guide</i>.</p> <p> <b>Handling Replication of Encrypted Objects</b> </p> <p>Outposts buckets are encrypted at all times. All the objects in the source Outposts bucket are encrypted and can be replicated. Also, all the replicas in the destination Outposts bucket are encrypted with the same encryption key as the objects in the source Outposts bucket.</p> <p> <b>Permissions</b> </p> <p>To create a <code>PutBucketReplication</code> request, you must have <code>s3-outposts:PutReplicationConfiguration</code> permissions for the bucket. The Outposts bucket owner has this permission by default and can grant it to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsIAM.html">Setting up IAM with S3 on Outposts</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsBucketPolicy.html">Managing access to S3 on Outposts buckets</a>. </p> <note> <p>To perform this operation, the user or role must also have the <code>iam:CreateRole</code> and <code>iam:PassRole</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a user permissions to pass a role to an Amazon Web Services service</a>.</p> </note> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketReplication.html#API_control_PutBucketReplication_Examples">Examples</a> section.</p> <p>The following operations are related to <code>PutBucketReplication</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketReplication.html">GetBucketReplication</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketReplication.html">DeleteBucketReplication</a> </p> </li> </ul>',
  operationId: 'PutBucketReplication',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description: 'The Amazon Web Services account ID of the Outposts bucket.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .min(3)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              '<p>Specifies the S3 on Outposts bucket to set the configuration for.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>',
            schema: { type: 'string', minLength: 3, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              ReplicationConfiguration: z
                .object({
                  Role: RoleSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that S3 on Outposts assumes when replicating objects. For information about S3 replication on Outposts configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/outposts-replication-how-setup.html">Setting up replication</a> in the <i>Amazon S3 User Guide</i>.',
                      }),
                  ).exactOptional(),
                  Rules: ReplicationRulesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A container for one or more replication rules. A replication configuration must have at least one rule and can contain an array of 100 rules at the most. ',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'A container for one or more replication rules. A replication configuration must have at least one rule and you can add up to 100 rules. The maximum size of a replication configuration is 128 KB.',
                  required: [],
                }),
            })
            .openapi({ required: ['ReplicationConfiguration'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const deleteV20180820BucketNameReplicationXAmzAccountIdRoute = createRoute({
  method: 'delete',
  path: '/v20180820/bucket/{name}/replication#x-amz-account-id',
  description:
    '<note> <p>This operation deletes an Amazon S3 on Outposts bucket\'s replication configuration. To delete an S3 bucket\'s replication configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketReplication.html">DeleteBucketReplication</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Deletes the replication configuration from the specified S3 on Outposts bucket.</p> <p>To use this operation, you must have permissions to perform the <code>s3-outposts:PutReplicationConfiguration</code> action. The Outposts bucket owner has this permission by default and can grant it to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsIAM.html">Setting up IAM with S3 on Outposts</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsBucketPolicy.html">Managing access to S3 on Outposts buckets</a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>It can take a while to propagate <code>PUT</code> or <code>DELETE</code> requests for a replication configuration to all S3 on Outposts systems. Therefore, the replication configuration that\'s returned by a <code>GET</code> request soon after a <code>PUT</code> or <code>DELETE</code> request might return a more recent result than what\'s on the Outpost. If an Outpost is offline, the delay in updating the replication configuration on that Outpost can be significant.</p> </note> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketReplication.html#API_control_DeleteBucketReplication_Examples">Examples</a> section.</p> <p>For information about S3 replication on Outposts configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsReplication.html">Replicating objects for S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following operations are related to <code>DeleteBucketReplication</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketReplication.html">PutBucketReplication</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketReplication.html">GetBucketReplication</a> </p> </li> </ul>',
  operationId: 'DeleteBucketReplication',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The Amazon Web Services account ID of the Outposts bucket to delete the replication configuration for.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .min(3)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              '<p>Specifies the S3 on Outposts bucket to delete the replication configuration for.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>',
            schema: { type: 'string', minLength: 3, maxLength: 255 },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getV20180820BucketNameTaggingXAmzAccountIdRoute = createRoute({
  method: 'get',
  path: '/v20180820/bucket/{name}/tagging#x-amz-account-id',
  description:
    '<note> <p>This action gets an Amazon S3 on Outposts bucket\'s tags. To get an S3 bucket tags, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketTagging.html">GetBucketTagging</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Returns the tag set associated with the Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p> <p>To use this action, you must have permission to perform the <code>GetBucketTagging</code> action. By default, the bucket owner has this permission and can grant this permission to others.</p> <p> <code>GetBucketTagging</code> has the following special error:</p> <ul> <li> <p>Error code: <code>NoSuchTagSetError</code> </p> <ul> <li> <p>Description: There is no tag set associated with the bucket.</p> </li> </ul> </li> </ul> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketTagging.html#API_control_GetBucketTagging_Examples">Examples</a> section.</p> <p>The following actions are related to <code>GetBucketTagging</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketTagging.html">PutBucketTagging</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketTagging.html">DeleteBucketTagging</a> </p> </li> </ul>',
  operationId: 'GetBucketTagging',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description: 'The Amazon Web Services account ID of the Outposts bucket.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .min(3)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              '<p>Specifies the bucket.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>',
            schema: { type: 'string', minLength: 3, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetBucketTaggingResultSchema } },
    },
  },
})

export const putV20180820BucketNameTaggingXAmzAccountIdRoute = createRoute({
  method: 'put',
  path: '/v20180820/bucket/{name}/tagging#x-amz-account-id',
  description:
    '<note> <p>This action puts tags on an Amazon S3 on Outposts bucket. To put tags on an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketTagging.html">PutBucketTagging</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Sets the tags for an S3 on Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p> <p>Use tags to organize your Amazon Web Services bill to reflect your own cost structure. To do this, sign up to get your Amazon Web Services account bill with tag key values included. Then, to see the cost of combined resources, organize your billing information according to resources with the same tag key values. For example, you can tag several resources with a specific application name, and then organize your billing information to see the total cost of that application across several services. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Cost allocation and tagging</a>.</p> <note> <p>Within a bucket, if you add a tag that has the same key as an existing tag, the new value overwrites the old value. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CostAllocTagging.html"> Using cost allocation in Amazon S3 bucket tags</a>.</p> </note> <p>To use this action, you must have permissions to perform the <code>s3-outposts:PutBucketTagging</code> action. The Outposts bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources"> Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing access permissions to your Amazon S3 resources</a>.</p> <p> <code>PutBucketTagging</code> has the following special errors:</p> <ul> <li> <p>Error code: <code>InvalidTagError</code> </p> <ul> <li> <p>Description: The tag provided was not a valid tag. This error can occur if the tag did not pass input validation. For information about tag restrictions, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html"> User-Defined Tag Restrictions</a> and <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/aws-tag-restrictions.html"> Amazon Web Services-Generated Cost Allocation Tag Restrictions</a>.</p> </li> </ul> </li> <li> <p>Error code: <code>MalformedXMLError</code> </p> <ul> <li> <p>Description: The XML provided does not match the schema.</p> </li> </ul> </li> <li> <p>Error code: <code>OperationAbortedError </code> </p> <ul> <li> <p>Description: A conflicting conditional action is currently in progress against this resource. Try again.</p> </li> </ul> </li> <li> <p>Error code: <code>InternalError</code> </p> <ul> <li> <p>Description: The service was unable to apply the provided tag to the bucket.</p> </li> </ul> </li> </ul> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketTagging.html#API_control_PutBucketTagging_Examples">Examples</a> section.</p> <p>The following actions are related to <code>PutBucketTagging</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketTagging.html">GetBucketTagging</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketTagging.html">DeleteBucketTagging</a> </p> </li> </ul>',
  operationId: 'PutBucketTagging',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description: 'The Amazon Web Services account ID of the Outposts bucket.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .min(3)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              '<p>The Amazon Resource Name (ARN) of the bucket.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>',
            schema: { type: 'string', minLength: 3, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              Tagging: z
                .object({
                  TagSet: S3TagSetSchema.and(
                    z.any().openapi({ description: 'A collection for a set of tags.' }),
                  ).exactOptional(),
                })
                .openapi({ description: '<p/>', required: [] }),
            })
            .openapi({ required: ['Tagging'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const deleteV20180820BucketNameTaggingXAmzAccountIdRoute = createRoute({
  method: 'delete',
  path: '/v20180820/bucket/{name}/tagging#x-amz-account-id',
  description:
    '<note> <p>This action deletes an Amazon S3 on Outposts bucket\'s tags. To delete an S3 bucket tags, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketTagging.html">DeleteBucketTagging</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Deletes the tags from the Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in <i>Amazon S3 User Guide</i>.</p> <p>To use this action, you must have permission to perform the <code>PutBucketTagging</code> action. By default, the bucket owner has this permission and can grant this permission to others. </p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketTagging.html#API_control_DeleteBucketTagging_Examples">Examples</a> section.</p> <p>The following actions are related to <code>DeleteBucketTagging</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketTagging.html">GetBucketTagging</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketTagging.html">PutBucketTagging</a> </p> </li> </ul>',
  operationId: 'DeleteBucketTagging',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The Amazon Web Services account ID of the Outposts bucket tag set to be removed.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .min(3)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              '<p>The bucket ARN that has the tag set to be removed.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>',
            schema: { type: 'string', minLength: 3, maxLength: 255 },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const getV20180820JobsIdTaggingXAmzAccountIdRoute = createRoute({
  method: 'get',
  path: '/v20180820/jobs/{id}/tagging#x-amz-account-id',
  description:
    '<p>Returns the tags on an S3 Batch Operations job. To use the <code>GetJobTagging</code> operation, you must have permission to perform the <code>s3:GetJobTagging</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html#batch-ops-job-tags">Controlling access and labeling jobs using tags</a> in the <i>Amazon S3 User Guide</i>.</p> <p/> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutJobTagging.html">PutJobTagging</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteJobTagging.html">DeleteJobTagging</a> </p> </li> </ul>',
  operationId: 'GetJobTagging',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The Amazon Web Services account ID associated with the S3 Batch Operations job.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .regex(/[a-zA-Z0-9\-\_]+/)
        .min(5)
        .max(36)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'The ID for the S3 Batch Operations job whose tags you want to retrieve.',
            schema: { type: 'string', pattern: '[a-zA-Z0-9\\-\\_]+', minLength: 5, maxLength: 36 },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: GetJobTaggingResultSchema } } },
    480: {
      description: 'InternalServiceException',
      content: { 'text/xml': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'text/xml': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const putV20180820JobsIdTaggingXAmzAccountIdRoute = createRoute({
  method: 'put',
  path: '/v20180820/jobs/{id}/tagging#x-amz-account-id',
  description:
    '<p>Sets the supplied tag-set on an S3 Batch Operations job.</p> <p>A tag is a key-value pair. You can associate S3 Batch Operations tags with any job by sending a PUT request against the tagging subresource that is associated with the job. To modify the existing tag set, you can either replace the existing tag set entirely, or make changes within the existing tag set by retrieving the existing tag set using <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetJobTagging.html">GetJobTagging</a>, modify that tag set, and use this action to replace the tag set with the one you modified. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html#batch-ops-job-tags">Controlling access and labeling jobs using tags</a> in the <i>Amazon S3 User Guide</i>. </p> <p/> <note> <ul> <li> <p>If you send this request with an empty tag set, Amazon S3 deletes the existing tag set on the Batch Operations job. If you use this method, you are charged for a Tier 1 Request (PUT). For more information, see <a href="http://aws.amazon.com/s3/pricing/">Amazon S3 pricing</a>.</p> </li> <li> <p>For deleting existing tags for your Batch Operations job, a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteJobTagging.html">DeleteJobTagging</a> request is preferred because it achieves the same result without incurring charges.</p> </li> <li> <p>A few things to consider about using tags:</p> <ul> <li> <p>Amazon S3 limits the maximum number of tags to 50 tags per job.</p> </li> <li> <p>You can associate up to 50 tags with a job as long as they have unique tag keys.</p> </li> <li> <p>A tag key can be up to 128 Unicode characters in length, and tag values can be up to 256 Unicode characters in length.</p> </li> <li> <p>The key and values are case sensitive.</p> </li> <li> <p>For tagging-related restrictions related to characters and encodings, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>Billing and Cost Management User Guide</i>.</p> </li> </ul> </li> </ul> </note> <p/> <p>To use the <code>PutJobTagging</code> operation, you must have permission to perform the <code>s3:PutJobTagging</code> action.</p> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetJobTagging.html">GetJobTagging</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteJobTagging.html">DeleteJobTagging</a> </p> </li> </ul>',
  operationId: 'PutJobTagging',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The Amazon Web Services account ID associated with the S3 Batch Operations job.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .regex(/[a-zA-Z0-9\-\_]+/)
        .min(5)
        .max(36)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'The ID for the S3 Batch Operations job whose tags you want to replace.',
            schema: { type: 'string', pattern: '[a-zA-Z0-9\\-\\_]+', minLength: 5, maxLength: 36 },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              Tags: z
                .array(S3TagSchema)
                .openapi({
                  description: 'The set of tags to associate with the S3 Batch Operations job.',
                }),
            })
            .openapi({ required: ['Tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: PutJobTaggingResultSchema } } },
    480: {
      description: 'InternalServiceException',
      content: { 'text/xml': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'text/xml': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyTagsException',
      content: { 'text/xml': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const deleteV20180820JobsIdTaggingXAmzAccountIdRoute = createRoute({
  method: 'delete',
  path: '/v20180820/jobs/{id}/tagging#x-amz-account-id',
  description:
    '<p>Removes the entire tag set from the specified S3 Batch Operations job. To use the <code>DeleteJobTagging</code> operation, you must have permission to perform the <code>s3:DeleteJobTagging</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html#batch-ops-job-tags">Controlling access and labeling jobs using tags</a> in the <i>Amazon S3 User Guide</i>.</p> <p/> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetJobTagging.html">GetJobTagging</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutJobTagging.html">PutJobTagging</a> </p> </li> </ul>',
  operationId: 'DeleteJobTagging',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The Amazon Web Services account ID associated with the S3 Batch Operations job.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .regex(/[a-zA-Z0-9\-\_]+/)
        .min(5)
        .max(36)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'The ID for the S3 Batch Operations job whose tags you want to delete.',
            schema: { type: 'string', pattern: '[a-zA-Z0-9\\-\\_]+', minLength: 5, maxLength: 36 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteJobTaggingResultSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'text/xml': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'text/xml': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postV20180820AsyncRequestsMrapDeleteXAmzAccountIdRoute = createRoute({
  method: 'post',
  path: '/v20180820/async-requests/mrap/delete#x-amz-account-id',
  description:
    '<p>Deletes a Multi-Region Access Point. This action does not delete the buckets associated with the Multi-Region Access Point, only the Multi-Region Access Point itself.</p> <p>This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManagingMultiRegionAccessPoints.html">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>This request is asynchronous, meaning that you might receive a response before the command has completed. When this request provides a response, it provides a token that you can use to monitor the status of the request with <code>DescribeMultiRegionAccessPointOperation</code>.</p> <p>The following actions are related to <code>DeleteMultiRegionAccessPoint</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html">DescribeMultiRegionAccessPointOperation</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPoint.html">GetMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListMultiRegionAccessPoints.html">ListMultiRegionAccessPoints</a> </p> </li> </ul>',
  operationId: 'DeleteMultiRegionAccessPoint',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The Amazon Web Services account ID for the owner of the Multi-Region Access Point.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              ClientToken: z
                .string()
                .regex(/\S+/)
                .max(64)
                .openapi({
                  description:
                    'An idempotency token used to identify the request and guarantee that requests are unique.',
                }),
              Details: z
                .object({
                  Name: MultiRegionAccessPointNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The name of the Multi-Region Access Point associated with this request.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'A container for the information associated with a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html">DeleteMultiRegionAccessPoint</a> request.',
                  required: [],
                }),
            })
            .openapi({ required: ['ClientToken', 'Details'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteMultiRegionAccessPointResultSchema } },
    },
  },
})

export const getV20180820ConfigurationPublicAccessBlockXAmzAccountIdRoute = createRoute({
  method: 'get',
  path: '/v20180820/configuration/publicAccessBlock#x-amz-account-id',
  description:
    '<p>Retrieves the <code>PublicAccessBlock</code> configuration for an Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html"> Using Amazon S3 block public access</a>.</p> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeletePublicAccessBlock.html">DeletePublicAccessBlock</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutPublicAccessBlock.html">PutPublicAccessBlock</a> </p> </li> </ul>',
  operationId: 'GetPublicAccessBlock',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The account ID for the Amazon Web Services account whose <code>PublicAccessBlock</code> configuration you want to retrieve.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetPublicAccessBlockOutputSchema } },
    },
    480: {
      description: 'NoSuchPublicAccessBlockConfiguration',
      content: { 'text/xml': { schema: NoSuchPublicAccessBlockConfigurationSchema } },
    },
  },
})

export const putV20180820ConfigurationPublicAccessBlockXAmzAccountIdRoute = createRoute({
  method: 'put',
  path: '/v20180820/configuration/publicAccessBlock#x-amz-account-id',
  description:
    '<p>Creates or modifies the <code>PublicAccessBlock</code> configuration for an Amazon Web Services account. For this operation, users must have the <code>s3:PutAccountPublicAccessBlock</code> permission. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html"> Using Amazon S3 block public access</a>.</p> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetPublicAccessBlock.html">GetPublicAccessBlock</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeletePublicAccessBlock.html">DeletePublicAccessBlock</a> </p> </li> </ul>',
  operationId: 'PutPublicAccessBlock',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The account ID for the Amazon Web Services account whose <code>PublicAccessBlock</code> configuration you want to set.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              PublicAccessBlockConfiguration: z
                .object({
                  BlockPublicAcls: SettingSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account. Setting this element to <code>TRUE</code> causes the following behavior:</p> <ul> <li> <p> <code>PutBucketAcl</code> and <code>PutObjectAcl</code> calls fail if the specified ACL is public.</p> </li> <li> <p>PUT Object calls fail if the request includes a public ACL.</p> </li> <li> <p>PUT Bucket calls fail if the request includes a public ACL.</p> </li> </ul> <p>Enabling this setting doesn't affect existing policies or ACLs.</p> <p>This property is not supported for Amazon S3 on Outposts.</p>",
                      }),
                  ).exactOptional(),
                  IgnorePublicAcls: SettingSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. Setting this element to <code>TRUE</code> causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain. </p> <p>Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.</p> <p>This property is not supported for Amazon S3 on Outposts.</p>",
                      }),
                  ).exactOptional(),
                  BlockPublicPolicy: SettingSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>Specifies whether Amazon S3 should block public bucket policies for buckets in this account. Setting this element to <code>TRUE</code> causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access. </p> <p>Enabling this setting doesn't affect existing bucket policies.</p> <p>This property is not supported for Amazon S3 on Outposts.</p>",
                      }),
                  ).exactOptional(),
                  RestrictPublicBuckets: SettingSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>Specifies whether Amazon S3 should restrict public bucket policies for buckets in this account. Setting this element to <code>TRUE</code> restricts access to buckets with public policies to only Amazon Web Service principals and authorized users within this account.</p> <p>Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.</p> <p>This property is not supported for Amazon S3 on Outposts.</p>",
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    '<p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 account. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p> <p>This data type is not supported for Amazon S3 on Outposts.</p>',
                  required: [],
                }),
            })
            .openapi({ required: ['PublicAccessBlockConfiguration'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const deleteV20180820ConfigurationPublicAccessBlockXAmzAccountIdRoute = createRoute({
  method: 'delete',
  path: '/v20180820/configuration/publicAccessBlock#x-amz-account-id',
  description:
    '<p>Removes the <code>PublicAccessBlock</code> configuration for an Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html"> Using Amazon S3 block public access</a>.</p> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetPublicAccessBlock.html">GetPublicAccessBlock</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutPublicAccessBlock.html">PutPublicAccessBlock</a> </p> </li> </ul>',
  operationId: 'DeletePublicAccessBlock',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The account ID for the Amazon Web Services account whose <code>PublicAccessBlock</code> configuration you want to remove.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getV20180820StoragelensStoragelensidXAmzAccountIdRoute = createRoute({
  method: 'get',
  path: '/v20180820/storagelens/{storagelensid}#x-amz-account-id',
  description:
    '<p>Gets the Amazon S3 Storage Lens configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage activity and usage with Amazon S3 Storage Lens </a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>To use this action, you must have permission to perform the <code>s3:GetStorageLensConfiguration</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p> </note>',
  operationId: 'GetStorageLensConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description: 'The account ID of the requester.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      storagelensid: z
        .string()
        .regex(/[a-zA-Z0-9\-\_\.]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'storagelensid',
            in: 'path',
            required: true,
            description: 'The ID of the Amazon S3 Storage Lens configuration.',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z0-9\\-\\_\\.]+',
              minLength: 1,
              maxLength: 64,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetStorageLensConfigurationResultSchema } },
    },
  },
})

export const putV20180820StoragelensStoragelensidXAmzAccountIdRoute = createRoute({
  method: 'put',
  path: '/v20180820/storagelens/{storagelensid}#x-amz-account-id',
  description:
    '<p>Puts an Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Working with Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>To use this action, you must have permission to perform the <code>s3:PutStorageLensConfiguration</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p> </note>',
  operationId: 'PutStorageLensConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description: 'The account ID of the requester.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      storagelensid: z
        .string()
        .regex(/[a-zA-Z0-9\-\_\.]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'storagelensid',
            in: 'path',
            required: true,
            description: 'The ID of the S3 Storage Lens configuration.',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z0-9\\-\\_\\.]+',
              minLength: 1,
              maxLength: 64,
            },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              StorageLensConfiguration: z
                .object({
                  Id: ConfigIdSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'A container for the Amazon S3 Storage Lens configuration ID.',
                      }),
                  ).exactOptional(),
                  AccountLevel: AccountLevelSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A container for all the account-level configurations of your S3 Storage Lens configuration.',
                      }),
                  ).exactOptional(),
                  Include: IncludeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A container for what is included in this configuration. This container can only be valid if there is no <code>Exclude</code> container submitted, and it's not empty. ",
                      }),
                  ).exactOptional(),
                  Exclude: ExcludeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A container for what is excluded in this configuration. This container can only be valid if there is no <code>Include</code> container submitted, and it's not empty. ",
                      }),
                  ).exactOptional(),
                  DataExport: StorageLensDataExportSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A container to specify the properties of your S3 Storage Lens metrics export including, the destination, schema and format.',
                      }),
                  ).exactOptional(),
                  IsEnabled: IsEnabledSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A container for whether the S3 Storage Lens configuration is enabled.',
                      }),
                  ).exactOptional(),
                  AwsOrg: StorageLensAwsOrgSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A container for the Amazon Web Services organization for this S3 Storage Lens configuration.',
                      }),
                  ).exactOptional(),
                  StorageLensArn: StorageLensArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name (ARN) of the S3 Storage Lens configuration. This property is read-only and follows the following format: <code> arn:aws:s3:<i>us-east-1</i>:<i>example-account-id</i>:storage-lens/<i>your-dashboard-name</i> </code> ',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'A container for the Amazon S3 Storage Lens configuration.',
                  required: [],
                }),
              Tags: z
                .array(StorageLensTagSchema.and(z.any().openapi({ xml: { name: 'Tag' } })))
                .exactOptional()
                .openapi({
                  description:
                    '<p>The tag set of the S3 Storage Lens configuration.</p> <note> <p>You can set up to a maximum of 50 tags.</p> </note>',
                }),
            })
            .openapi({ required: ['StorageLensConfiguration'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const deleteV20180820StoragelensStoragelensidXAmzAccountIdRoute = createRoute({
  method: 'delete',
  path: '/v20180820/storagelens/{storagelensid}#x-amz-account-id',
  description:
    '<p>Deletes the Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage activity and usage with Amazon S3 Storage Lens </a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>To use this action, you must have permission to perform the <code>s3:DeleteStorageLensConfiguration</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p> </note>',
  operationId: 'DeleteStorageLensConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description: 'The account ID of the requester.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      storagelensid: z
        .string()
        .regex(/[a-zA-Z0-9\-\_\.]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'storagelensid',
            in: 'path',
            required: true,
            description: 'The ID of the S3 Storage Lens configuration.',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z0-9\\-\\_\\.]+',
              minLength: 1,
              maxLength: 64,
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getV20180820StoragelensStoragelensidTaggingXAmzAccountIdRoute = createRoute({
  method: 'get',
  path: '/v20180820/storagelens/{storagelensid}/tagging#x-amz-account-id',
  description:
    '<p>Gets the tags of Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage activity and usage with Amazon S3 Storage Lens </a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>To use this action, you must have permission to perform the <code>s3:GetStorageLensConfigurationTagging</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p> </note>',
  operationId: 'GetStorageLensConfigurationTagging',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description: 'The account ID of the requester.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      storagelensid: z
        .string()
        .regex(/[a-zA-Z0-9\-\_\.]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'storagelensid',
            in: 'path',
            required: true,
            description: 'The ID of the Amazon S3 Storage Lens configuration.',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z0-9\\-\\_\\.]+',
              minLength: 1,
              maxLength: 64,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetStorageLensConfigurationTaggingResultSchema } },
    },
  },
})

export const putV20180820StoragelensStoragelensidTaggingXAmzAccountIdRoute = createRoute({
  method: 'put',
  path: '/v20180820/storagelens/{storagelensid}/tagging#x-amz-account-id',
  description:
    '<p>Put or replace tags on an existing Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage activity and usage with Amazon S3 Storage Lens </a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>To use this action, you must have permission to perform the <code>s3:PutStorageLensConfigurationTagging</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p> </note>',
  operationId: 'PutStorageLensConfigurationTagging',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description: 'The account ID of the requester.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      storagelensid: z
        .string()
        .regex(/[a-zA-Z0-9\-\_\.]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'storagelensid',
            in: 'path',
            required: true,
            description: 'The ID of the S3 Storage Lens configuration.',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z0-9\\-\\_\\.]+',
              minLength: 1,
              maxLength: 64,
            },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              Tags: z
                .array(StorageLensTagSchema.and(z.any().openapi({ xml: { name: 'Tag' } })))
                .openapi({
                  description:
                    '<p>The tag set of the S3 Storage Lens configuration.</p> <note> <p>You can set up to a maximum of 50 tags.</p> </note>',
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
      content: { 'text/xml': { schema: PutStorageLensConfigurationTaggingResultSchema } },
    },
  },
})

export const deleteV20180820StoragelensStoragelensidTaggingXAmzAccountIdRoute = createRoute({
  method: 'delete',
  path: '/v20180820/storagelens/{storagelensid}/tagging#x-amz-account-id',
  description:
    '<p>Deletes the Amazon S3 Storage Lens configuration tags. For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage activity and usage with Amazon S3 Storage Lens </a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>To use this action, you must have permission to perform the <code>s3:DeleteStorageLensConfigurationTagging</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p> </note>',
  operationId: 'DeleteStorageLensConfigurationTagging',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description: 'The account ID of the requester.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      storagelensid: z
        .string()
        .regex(/[a-zA-Z0-9\-\_\.]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'storagelensid',
            in: 'path',
            required: true,
            description: 'The ID of the S3 Storage Lens configuration.',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z0-9\\-\\_\\.]+',
              minLength: 1,
              maxLength: 64,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteStorageLensConfigurationTaggingResultSchema } },
    },
  },
})

export const getV20180820JobsIdXAmzAccountIdRoute = createRoute({
  method: 'get',
  path: '/v20180820/jobs/{id}#x-amz-account-id',
  description:
    '<p>Retrieves the configuration parameters and status for a Batch Operations job. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops.html">S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p> <p/> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html">ListJobs</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobPriority.html">UpdateJobPriority</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a> </p> </li> </ul>',
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
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The Amazon Web Services account ID associated with the S3 Batch Operations job.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .regex(/[a-zA-Z0-9\-\_]+/)
        .min(5)
        .max(36)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'The ID for the job whose information you want to retrieve.',
            schema: { type: 'string', pattern: '[a-zA-Z0-9\\-\\_]+', minLength: 5, maxLength: 36 },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: DescribeJobResultSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'text/xml': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'text/xml': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'text/xml': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const getV20180820AsyncRequestsMrapRequestTokenXAmzAccountIdRoute = createRoute({
  method: 'get',
  path: '/v20180820/async-requests/mrap/{request_token}#x-amz-account-id',
  description:
    '<p>Retrieves the status of an asynchronous request to manage a Multi-Region Access Point. For more information about managing Multi-Region Access Points and how asynchronous requests work, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManagingMultiRegionAccessPoints.html">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following actions are related to <code>GetMultiRegionAccessPoint</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html">DeleteMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPoint.html">GetMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListMultiRegionAccessPoints.html">ListMultiRegionAccessPoints</a> </p> </li> </ul>',
  operationId: 'DescribeMultiRegionAccessPointOperation',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The Amazon Web Services account ID for the owner of the Multi-Region Access Point.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      request_token: z
        .string()
        .regex(/arn:.+/)
        .min(1)
        .max(1024)
        .openapi({
          param: {
            name: 'request_token',
            in: 'path',
            required: true,
            description:
              'The request token associated with the request you want to know about. This request token is returned as part of the response when you make an asynchronous request. You provide this token to query about the status of the asynchronous action.',
            schema: { type: 'string', pattern: 'arn:.+', minLength: 1, maxLength: 1024 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeMultiRegionAccessPointOperationResultSchema } },
    },
  },
})

export const getV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountIdRoute =
  createRoute({
    method: 'get',
    path: '/v20180820/accesspointforobjectlambda/{name}/configuration#x-amz-account-id',
    description:
      '<p>Returns configuration for an Object Lambda Access Point.</p> <p>The following actions are related to <code>GetAccessPointConfigurationForObjectLambda</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointConfigurationForObjectLambda.html">PutAccessPointConfigurationForObjectLambda</a> </p> </li> </ul>',
    operationId: 'GetAccessPointConfigurationForObjectLambda',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'x-amz-account-id': z
          .string()
          .regex(/^\d{12}$/)
          .max(64)
          .openapi({
            param: {
              name: 'x-amz-account-id',
              in: 'header',
              required: true,
              description:
                'The account ID for the account that owns the specified Object Lambda Access Point.',
              schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
            },
          }),
      }),
      params: z.object({
        name: z
          .string()
          .regex(/^[a-z0-9]([a-z0-9\-]*[a-z0-9])?$/)
          .min(3)
          .max(45)
          .openapi({
            param: {
              name: 'name',
              in: 'path',
              required: true,
              description:
                'The name of the Object Lambda Access Point you want to return the configuration for.',
              schema: {
                type: 'string',
                pattern: '^[a-z0-9]([a-z0-9\\-]*[a-z0-9])?$',
                minLength: 3,
                maxLength: 45,
              },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'text/xml': { schema: GetAccessPointConfigurationForObjectLambdaResultSchema } },
      },
    },
  })

export const putV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountIdRoute =
  createRoute({
    method: 'put',
    path: '/v20180820/accesspointforobjectlambda/{name}/configuration#x-amz-account-id',
    description:
      '<p>Replaces configuration for an Object Lambda Access Point.</p> <p>The following actions are related to <code>PutAccessPointConfigurationForObjectLambda</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointConfigurationForObjectLambda.html">GetAccessPointConfigurationForObjectLambda</a> </p> </li> </ul>',
    operationId: 'PutAccessPointConfigurationForObjectLambda',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'x-amz-account-id': z
          .string()
          .regex(/^\d{12}$/)
          .max(64)
          .openapi({
            param: {
              name: 'x-amz-account-id',
              in: 'header',
              required: true,
              description:
                'The account ID for the account that owns the specified Object Lambda Access Point.',
              schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
            },
          }),
      }),
      params: z.object({
        name: z
          .string()
          .regex(/^[a-z0-9]([a-z0-9\-]*[a-z0-9])?$/)
          .min(3)
          .max(45)
          .openapi({
            param: {
              name: 'name',
              in: 'path',
              required: true,
              description: 'The name of the Object Lambda Access Point.',
              schema: {
                type: 'string',
                pattern: '^[a-z0-9]([a-z0-9\\-]*[a-z0-9])?$',
                minLength: 3,
                maxLength: 45,
              },
            },
          }),
      }),
      body: {
        content: {
          'text/xml': {
            schema: z
              .object({
                Configuration: z
                  .object({
                    SupportingAccessPoint: ObjectLambdaSupportingAccessPointArnSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Standard access point associated with the Object Lambda Access Point.',
                        }),
                    ).exactOptional(),
                    CloudWatchMetricsEnabled: BooleanSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'A container for whether the CloudWatch metrics configuration is enabled.',
                        }),
                    ).exactOptional(),
                    AllowedFeatures: ObjectLambdaAllowedFeaturesListSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'A container for allowed features. Valid inputs are <code>GetObject-Range</code>, <code>GetObject-PartNumber</code>, <code>HeadObject-Range</code>, and <code>HeadObject-PartNumber</code>.',
                        }),
                    ).exactOptional(),
                    TransformationConfigurations:
                      ObjectLambdaTransformationConfigurationsListSchema.and(
                        z
                          .any()
                          .openapi({
                            description:
                              'A container for transformation configurations for an Object Lambda Access Point.',
                          }),
                      ).exactOptional(),
                  })
                  .openapi({
                    description:
                      'A configuration used when creating an Object Lambda Access Point.',
                    required: [],
                  }),
              })
              .openapi({ required: ['Configuration'] }),
          },
        },
        required: true,
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const getV20180820AccesspointNamePolicyStatusXAmzAccountIdRoute = createRoute({
  method: 'get',
  path: '/v20180820/accesspoint/{name}/policyStatus#x-amz-account-id',
  description:
    'Indicates whether the specified access point currently has a policy that allows public access. For more information about public access through access points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html">Managing Data Access with Amazon S3 access points</a> in the <i>Amazon S3 User Guide</i>.',
  operationId: 'GetAccessPointPolicyStatus',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description: 'The account ID for the account that owns the specified access point.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .min(3)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the access point whose policy status you want to retrieve.',
            schema: { type: 'string', minLength: 3, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetAccessPointPolicyStatusResultSchema } },
    },
  },
})

export const getV20180820AccesspointforobjectlambdaNamePolicyStatusXAmzAccountIdRoute = createRoute(
  {
    method: 'get',
    path: '/v20180820/accesspointforobjectlambda/{name}/policyStatus#x-amz-account-id',
    description:
      'Returns the status of the resource policy associated with an Object Lambda Access Point.',
    operationId: 'GetAccessPointPolicyStatusForObjectLambda',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'x-amz-account-id': z
          .string()
          .regex(/^\d{12}$/)
          .max(64)
          .openapi({
            param: {
              name: 'x-amz-account-id',
              in: 'header',
              required: true,
              description:
                'The account ID for the account that owns the specified Object Lambda Access Point.',
              schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
            },
          }),
      }),
      params: z.object({
        name: z
          .string()
          .regex(/^[a-z0-9]([a-z0-9\-]*[a-z0-9])?$/)
          .min(3)
          .max(45)
          .openapi({
            param: {
              name: 'name',
              in: 'path',
              required: true,
              description: 'The name of the Object Lambda Access Point.',
              schema: {
                type: 'string',
                pattern: '^[a-z0-9]([a-z0-9\\-]*[a-z0-9])?$',
                minLength: 3,
                maxLength: 45,
              },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'text/xml': { schema: GetAccessPointPolicyStatusForObjectLambdaResultSchema } },
      },
    },
  },
)

export const getV20180820BucketNameVersioningXAmzAccountIdRoute = createRoute({
  method: 'get',
  path: '/v20180820/bucket/{name}/versioning#x-amz-account-id',
  description:
    '<note> <p>This operation returns the versioning state for S3 on Outposts buckets only. To return the versioning state for an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html">GetBucketVersioning</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Returns the versioning state for an S3 on Outposts bucket. With S3 Versioning, you can save multiple distinct copies of your objects and recover from unintended user actions and application failures.</p> <p>If you\'ve never set versioning on your bucket, it has no versioning state. In that case, the <code>GetBucketVersioning</code> request does not return a versioning state value.</p> <p>For more information about versioning, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html">Versioning</a> in the <i>Amazon S3 User Guide</i>.</p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketVersioning.html#API_control_GetBucketVersioning_Examples">Examples</a> section.</p> <p>The following operations are related to <code>GetBucketVersioning</code> for S3 on Outposts.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketVersioning.html">PutBucketVersioning</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a> </p> </li> </ul>',
  operationId: 'GetBucketVersioning',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description: 'The Amazon Web Services account ID of the S3 on Outposts bucket.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .min(3)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The S3 on Outposts bucket to return the versioning state for.',
            schema: { type: 'string', minLength: 3, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetBucketVersioningResultSchema } },
    },
  },
})

export const putV20180820BucketNameVersioningXAmzAccountIdRoute = createRoute({
  method: 'put',
  path: '/v20180820/bucket/{name}/versioning#x-amz-account-id',
  description:
    '<note> <p>This operation sets the versioning state for S3 on Outposts buckets only. To set the versioning state for an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketVersioning.html">PutBucketVersioning</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Sets the versioning state for an S3 on Outposts bucket. With S3 Versioning, you can save multiple distinct copies of your objects and recover from unintended user actions and application failures.</p> <p>You can set the versioning state to one of the following:</p> <ul> <li> <p> <b>Enabled</b> - Enables versioning for the objects in the bucket. All objects added to the bucket receive a unique version ID.</p> </li> <li> <p> <b>Suspended</b> - Suspends versioning for the objects in the bucket. All objects added to the bucket receive the version ID <code>null</code>.</p> </li> </ul> <p>If you\'ve never set versioning on your bucket, it has no versioning state. In that case, a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketVersioning.html"> GetBucketVersioning</a> request does not return a versioning state value.</p> <p>When you enable S3 Versioning, for each object in your bucket, you have a current version and zero or more noncurrent versions. You can configure your bucket S3 Lifecycle rules to expire noncurrent versions after a specified time period. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsLifecycleManaging.html"> Creating and managing a lifecycle configuration for your S3 on Outposts bucket</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you have an object expiration lifecycle configuration in your non-versioned bucket and you want to maintain the same permanent delete behavior when you enable versioning, you must add a noncurrent expiration policy. The noncurrent expiration lifecycle configuration will manage the deletes of the noncurrent object versions in the version-enabled bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html">Versioning</a> in the <i>Amazon S3 User Guide</i>.</p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketVersioning.html#API_control_PutBucketVersioning_Examples">Examples</a> section.</p> <p>The following operations are related to <code>PutBucketVersioning</code> for S3 on Outposts.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketVersioning.html">GetBucketVersioning</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a> </p> </li> </ul>',
  operationId: 'PutBucketVersioning',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description: 'The Amazon Web Services account ID of the S3 on Outposts bucket.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
      'x-amz-mfa': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-mfa',
            in: 'header',
            required: false,
            description:
              "The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device.",
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .min(3)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The S3 on Outposts bucket to set the versioning state for.',
            schema: { type: 'string', minLength: 3, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              VersioningConfiguration: z
                .object({
                  MFADelete: MFADeleteSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'MfaDelete' },
                        description:
                          'Specifies whether MFA delete is enabled or disabled in the bucket versioning configuration for the S3 on Outposts bucket.',
                      }),
                  ).exactOptional(),
                  Status: BucketVersioningStatusSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Sets the versioning state of the S3 on Outposts bucket.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Describes the versioning state of an Amazon S3 on Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketVersioning.html">PutBucketVersioning</a>.',
                  required: [],
                }),
            })
            .openapi({ required: ['VersioningConfiguration'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const getV20180820MrapInstancesNameXAmzAccountIdRoute = createRoute({
  method: 'get',
  path: '/v20180820/mrap/instances/{name}#x-amz-account-id',
  description:
    '<p>Returns configuration information about the specified Multi-Region Access Point.</p> <p>This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManagingMultiRegionAccessPoints.html">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following actions are related to <code>GetMultiRegionAccessPoint</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html">DeleteMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html">DescribeMultiRegionAccessPointOperation</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListMultiRegionAccessPoints.html">ListMultiRegionAccessPoints</a> </p> </li> </ul>',
  operationId: 'GetMultiRegionAccessPoint',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The Amazon Web Services account ID for the owner of the Multi-Region Access Point.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .regex(/^[a-z0-9][-a-z0-9]{1,48}[a-z0-9]$/)
        .max(50)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              'The name of the Multi-Region Access Point whose configuration information you want to receive. The name of the Multi-Region Access Point is different from the alias. For more information about the distinction between the name and the alias of an Multi-Region Access Point, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html#multi-region-access-point-naming">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.',
            schema: { type: 'string', pattern: '^[a-z0-9][-a-z0-9]{1,48}[a-z0-9]$', maxLength: 50 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetMultiRegionAccessPointResultSchema } },
    },
  },
})

export const getV20180820MrapInstancesNamePolicyXAmzAccountIdRoute = createRoute({
  method: 'get',
  path: '/v20180820/mrap/instances/{name}/policy#x-amz-account-id',
  description:
    '<p>Returns the access control policy of the specified Multi-Region Access Point.</p> <p>This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManagingMultiRegionAccessPoints.html">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following actions are related to <code>GetMultiRegionAccessPointPolicy</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPointPolicyStatus.html">GetMultiRegionAccessPointPolicyStatus</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutMultiRegionAccessPointPolicy.html">PutMultiRegionAccessPointPolicy</a> </p> </li> </ul>',
  operationId: 'GetMultiRegionAccessPointPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The Amazon Web Services account ID for the owner of the Multi-Region Access Point.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .regex(/^[a-z0-9][-a-z0-9]{1,48}[a-z0-9]$/)
        .max(50)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              'Specifies the Multi-Region Access Point. The name of the Multi-Region Access Point is different from the alias. For more information about the distinction between the name and the alias of an Multi-Region Access Point, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html#multi-region-access-point-naming">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.',
            schema: { type: 'string', pattern: '^[a-z0-9][-a-z0-9]{1,48}[a-z0-9]$', maxLength: 50 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetMultiRegionAccessPointPolicyResultSchema } },
    },
  },
})

export const getV20180820MrapInstancesNamePolicystatusXAmzAccountIdRoute = createRoute({
  method: 'get',
  path: '/v20180820/mrap/instances/{name}/policystatus#x-amz-account-id',
  description:
    '<p>Indicates whether the specified Multi-Region Access Point has an access control policy that allows public access.</p> <p>This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManagingMultiRegionAccessPoints.html">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following actions are related to <code>GetMultiRegionAccessPointPolicyStatus</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPointPolicy.html">GetMultiRegionAccessPointPolicy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutMultiRegionAccessPointPolicy.html">PutMultiRegionAccessPointPolicy</a> </p> </li> </ul>',
  operationId: 'GetMultiRegionAccessPointPolicyStatus',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The Amazon Web Services account ID for the owner of the Multi-Region Access Point.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .regex(/^[a-z0-9][-a-z0-9]{1,48}[a-z0-9]$/)
        .max(50)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              'Specifies the Multi-Region Access Point. The name of the Multi-Region Access Point is different from the alias. For more information about the distinction between the name and the alias of an Multi-Region Access Point, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html#multi-region-access-point-naming">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.',
            schema: { type: 'string', pattern: '^[a-z0-9][-a-z0-9]{1,48}[a-z0-9]$', maxLength: 50 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetMultiRegionAccessPointPolicyStatusResultSchema } },
    },
  },
})

export const getV20180820MrapInstancesMrapRoutesXAmzAccountIdRoute = createRoute({
  method: 'get',
  path: '/v20180820/mrap/instances/{mrap}/routes#x-amz-account-id',
  description:
    '<p>Returns the routing configuration for a Multi-Region Access Point, indicating which Regions are active or passive.</p> <p>To obtain routing control changes and failover requests, use the Amazon S3 failover control infrastructure endpoints in these five Amazon Web Services Regions:</p> <ul> <li> <p> <code>us-east-1</code> </p> </li> <li> <p> <code>us-west-2</code> </p> </li> <li> <p> <code>ap-southeast-2</code> </p> </li> <li> <p> <code>ap-northeast-1</code> </p> </li> <li> <p> <code>eu-west-1</code> </p> </li> </ul> <note> <p>Your Amazon S3 bucket does not need to be in these five Regions.</p> </note>',
  operationId: 'GetMultiRegionAccessPointRoutes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The Amazon Web Services account ID for the owner of the Multi-Region Access Point.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      mrap: z
        .string()
        .regex(/^[a-zA-Z0-9\:.-]{3,200}$/)
        .max(200)
        .openapi({
          param: {
            name: 'mrap',
            in: 'path',
            required: true,
            description: 'The Multi-Region Access Point ARN.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9\\:.-]{3,200}$', maxLength: 200 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetMultiRegionAccessPointRoutesResultSchema } },
    },
  },
})

export const patchV20180820MrapInstancesMrapRoutesXAmzAccountIdRoute = createRoute({
  method: 'patch',
  path: '/v20180820/mrap/instances/{mrap}/routes#x-amz-account-id',
  description:
    "<p>Submits an updated route configuration for a Multi-Region Access Point. This API operation updates the routing status for the specified Regions from active to passive, or from passive to active. A value of <code>0</code> indicates a passive status, which means that traffic won't be routed to the specified Region. A value of <code>100</code> indicates an active status, which means that traffic will be routed to the specified Region. At least one Region must be active at all times.</p> <p>When the routing configuration is changed, any in-progress operations (uploads, copies, deletes, and so on) to formerly active Regions will continue to run to their final completion state (success or failure). The routing configurations of any Regions that aren’t specified remain unchanged.</p> <note> <p>Updated routing configurations might not be immediately applied. It can take up to 2 minutes for your changes to take effect.</p> </note> <p>To submit routing control changes and failover requests, use the Amazon S3 failover control infrastructure endpoints in these five Amazon Web Services Regions:</p> <ul> <li> <p> <code>us-east-1</code> </p> </li> <li> <p> <code>us-west-2</code> </p> </li> <li> <p> <code>ap-southeast-2</code> </p> </li> <li> <p> <code>ap-northeast-1</code> </p> </li> <li> <p> <code>eu-west-1</code> </p> </li> </ul> <note> <p>Your Amazon S3 bucket does not need to be in these five Regions.</p> </note>",
  operationId: 'SubmitMultiRegionAccessPointRoutes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The Amazon Web Services account ID for the owner of the Multi-Region Access Point.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      mrap: z
        .string()
        .regex(/^[a-zA-Z0-9\:.-]{3,200}$/)
        .max(200)
        .openapi({
          param: {
            name: 'mrap',
            in: 'path',
            required: true,
            description: 'The Multi-Region Access Point ARN.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9\\:.-]{3,200}$', maxLength: 200 },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              RouteUpdates: z
                .array(
                  MultiRegionAccessPointRouteSchema.and(
                    z.any().openapi({ xml: { name: 'Route' } }),
                  ),
                )
                .openapi({
                  description:
                    'The different routes that make up the new route configuration. Active routes return a value of <code>100</code>, and passive routes return a value of <code>0</code>.',
                }),
            })
            .openapi({ required: ['RouteUpdates'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SubmitMultiRegionAccessPointRoutesResultSchema } },
    },
  },
})

export const getV20180820AccesspointXAmzAccountIdRoute = createRoute({
  method: 'get',
  path: '/v20180820/accesspoint#x-amz-account-id',
  description:
    '<p>Returns a list of the access points that are owned by the current account that\'s associated with the specified bucket. You can retrieve up to 1000 access points per call. If the specified bucket has more than 1,000 access points (or the number specified in <code>maxResults</code>, whichever is less), the response will include a continuation token that you can use to list the additional access points.</p> <p/> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html#API_control_GetAccessPoint_Examples">Examples</a> section.</p> <p>The following actions are related to <code>ListAccessPoints</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html">CreateAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html">DeleteAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html">GetAccessPoint</a> </p> </li> </ul>',
  operationId: 'ListAccessPoints',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The Amazon Web Services account ID for the account that owns the specified access points.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    query: z.object({
      bucket: z
        .string()
        .min(3)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'bucket',
            in: 'query',
            required: false,
            description:
              '<p>The name of the bucket whose associated access points you want to list.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>',
            schema: { type: 'string', minLength: 3, maxLength: 255 },
          },
        }),
      nextToken: z
        .string()
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'A continuation token. If a previous call to <code>ListAccessPoints</code> returned a continuation token in the <code>NextToken</code> field, then providing that value here causes Amazon S3 to retrieve the next page of results.',
            schema: { type: 'string', minLength: 1, maxLength: 1024 },
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
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of access points that you want to include in the list. If the specified bucket has more than this number of access points, then the response will include a continuation token in the <code>NextToken</code> field that you can use to retrieve the next page of access points.',
            schema: { type: 'integer', minimum: 0, maximum: 1000 },
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
      content: { 'text/xml': { schema: ListAccessPointsResultSchema } },
    },
  },
})

export const getV20180820AccesspointforobjectlambdaXAmzAccountIdRoute = createRoute({
  method: 'get',
  path: '/v20180820/accesspointforobjectlambda#x-amz-account-id',
  description:
    '<p>Returns some or all (up to 1,000) access points associated with the Object Lambda Access Point per call. If there are more access points than what can be returned in one call, the response will include a continuation token that you can use to list the additional access points.</p> <p>The following actions are related to <code>ListAccessPointsForObjectLambda</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPointForObjectLambda.html">CreateAccessPointForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointForObjectLambda.html">DeleteAccessPointForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointForObjectLambda.html">GetAccessPointForObjectLambda</a> </p> </li> </ul>',
  operationId: 'ListAccessPointsForObjectLambda',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The account ID for the account that owns the specified Object Lambda Access Point.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'If the list has more access points than can be returned in one call to this API, this field contains a continuation token that you can provide in subsequent calls to this API to retrieve additional access points.',
            schema: { type: 'string', minLength: 1, maxLength: 1024 },
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
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of access points that you want to include in the list. The response may contain fewer access points but will never contain more. If there are more than this number of access points, then the response will include a continuation token in the <code>NextToken</code> field that you can use to retrieve the next page of access points.',
            schema: { type: 'integer', minimum: 0, maximum: 1000 },
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
      content: { 'text/xml': { schema: ListAccessPointsForObjectLambdaResultSchema } },
    },
  },
})

export const getV20180820MrapInstancesXAmzAccountIdRoute = createRoute({
  method: 'get',
  path: '/v20180820/mrap/instances#x-amz-account-id',
  description:
    '<p>Returns a list of the Multi-Region Access Points currently associated with the specified Amazon Web Services account. Each call can return up to 100 Multi-Region Access Points, the maximum number of Multi-Region Access Points that can be associated with a single account.</p> <p>This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManagingMultiRegionAccessPoints.html">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following actions are related to <code>ListMultiRegionAccessPoint</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html">DeleteMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html">DescribeMultiRegionAccessPointOperation</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPoint.html">GetMultiRegionAccessPoint</a> </p> </li> </ul>',
  operationId: 'ListMultiRegionAccessPoints',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The Amazon Web Services account ID for the owner of the Multi-Region Access Point.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'Not currently used. Do not use this parameter.',
            schema: { type: 'string', minLength: 1, maxLength: 1024 },
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
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'Not currently used. Do not use this parameter.',
            schema: { type: 'integer', minimum: 0, maximum: 1000 },
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
      content: { 'text/xml': { schema: ListMultiRegionAccessPointsResultSchema } },
    },
  },
})

export const getV20180820BucketXAmzAccountIdRoute = createRoute({
  method: 'get',
  path: '/v20180820/bucket#x-amz-account-id',
  description:
    '<p>Returns a list of all Outposts buckets in an Outpost that are owned by the authenticated sender of the request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p> <p>For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and <code>x-amz-outpost-id</code> in your request, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListRegionalBuckets.html#API_control_ListRegionalBuckets_Examples">Examples</a> section.</p>',
  operationId: 'ListRegionalBuckets',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description: 'The Amazon Web Services account ID of the Outposts bucket.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
      'x-amz-outpost-id': z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-outpost-id',
            in: 'header',
            required: false,
            description:
              '<p>The ID of the Outposts resource.</p> <note> <p>This ID is required by Amazon S3 on Outposts buckets.</p> </note>',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: '<p/>',
            schema: { type: 'string', minLength: 1, maxLength: 1024 },
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
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: '<p/>',
            schema: { type: 'integer', minimum: 0, maximum: 1000 },
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
      content: { 'text/xml': { schema: ListRegionalBucketsResultSchema } },
    },
  },
})

export const getV20180820StoragelensXAmzAccountIdRoute = createRoute({
  method: 'get',
  path: '/v20180820/storagelens#x-amz-account-id',
  description:
    '<p>Gets a list of Amazon S3 Storage Lens configurations. For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage activity and usage with Amazon S3 Storage Lens </a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>To use this action, you must have permission to perform the <code>s3:ListStorageLensConfigurations</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p> </note>',
  operationId: 'ListStorageLensConfigurations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description: 'The account ID of the requester.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'A pagination token to request the next page of results.',
            schema: { type: 'string' },
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
      content: { 'text/xml': { schema: ListStorageLensConfigurationsResultSchema } },
    },
  },
})

export const postV20180820AsyncRequestsMrapPutPolicyXAmzAccountIdRoute = createRoute({
  method: 'post',
  path: '/v20180820/async-requests/mrap/put-policy#x-amz-account-id',
  description:
    '<p>Associates an access control policy with the specified Multi-Region Access Point. Each Multi-Region Access Point can have only one policy, so a request made to this action replaces any existing policy that is associated with the specified Multi-Region Access Point.</p> <p>This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManagingMultiRegionAccessPoints.html">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following actions are related to <code>PutMultiRegionAccessPointPolicy</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPointPolicy.html">GetMultiRegionAccessPointPolicy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPointPolicyStatus.html">GetMultiRegionAccessPointPolicyStatus</a> </p> </li> </ul>',
  operationId: 'PutMultiRegionAccessPointPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The Amazon Web Services account ID for the owner of the Multi-Region Access Point.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              ClientToken: z
                .string()
                .regex(/\S+/)
                .max(64)
                .openapi({
                  description:
                    'An idempotency token used to identify the request and guarantee that requests are unique.',
                }),
              Details: z
                .object({
                  Name: MultiRegionAccessPointNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The name of the Multi-Region Access Point associated with the request.',
                      }),
                  ).exactOptional(),
                  Policy: PolicySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The policy details for the <code>PutMultiRegionAccessPoint</code> request.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'A container for the information associated with a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutMultiRegionAccessPoint.html">PutMultiRegionAccessPoint</a> request.',
                  required: [],
                }),
            })
            .openapi({ required: ['ClientToken', 'Details'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: PutMultiRegionAccessPointPolicyResultSchema } },
    },
  },
})

export const postV20180820JobsIdPriorityXAmzAccountIdPriorityRoute = createRoute({
  method: 'post',
  path: '/v20180820/jobs/{id}/priority#x-amz-account-id&priority',
  description:
    '<p>Updates an existing S3 Batch Operations job\'s priority. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops.html">S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p> <p/> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html">ListJobs</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html">DescribeJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a> </p> </li> </ul>',
  operationId: 'UpdateJobPriority',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The Amazon Web Services account ID associated with the S3 Batch Operations job.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .regex(/[a-zA-Z0-9\-\_]+/)
        .min(5)
        .max(36)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'The ID for the job whose priority you want to update.',
            schema: { type: 'string', pattern: '[a-zA-Z0-9\\-\\_]+', minLength: 5, maxLength: 36 },
          },
        }),
    }),
    query: z.object({
      priority: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(2147483647),
        )
        .openapi({
          param: {
            name: 'priority',
            in: 'query',
            required: true,
            description: 'The priority you want to assign to this job.',
            schema: { type: 'integer', minimum: 0, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateJobPriorityResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'text/xml': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'text/xml': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'text/xml': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postV20180820JobsIdStatusXAmzAccountIdRequestedJobStatusRoute = createRoute({
  method: 'post',
  path: '/v20180820/jobs/{id}/status#x-amz-account-id&requestedJobStatus',
  description:
    '<p>Updates the status for the specified job. Use this action to confirm that you want to run a job or to cancel an existing job. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops.html">S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p> <p/> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html">ListJobs</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html">DescribeJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a> </p> </li> </ul>',
  operationId: 'UpdateJobStatus',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-account-id': z
        .string()
        .regex(/^\d{12}$/)
        .max(64)
        .openapi({
          param: {
            name: 'x-amz-account-id',
            in: 'header',
            required: true,
            description:
              'The Amazon Web Services account ID associated with the S3 Batch Operations job.',
            schema: { type: 'string', pattern: '^\\d{12}$', maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .regex(/[a-zA-Z0-9\-\_]+/)
        .min(5)
        .max(36)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'The ID of the job whose status you want to update.',
            schema: { type: 'string', pattern: '[a-zA-Z0-9\\-\\_]+', minLength: 5, maxLength: 36 },
          },
        }),
    }),
    query: z.object({
      requestedJobStatus: z
        .enum(['Cancelled', 'Ready'])
        .openapi({
          param: {
            name: 'requestedJobStatus',
            in: 'query',
            required: true,
            description: 'The status that you want to move the specified job to.',
            schema: { type: 'string', enum: ['Cancelled', 'Ready'] },
          },
        }),
      statusUpdateReason: z
        .string()
        .min(1)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'statusUpdateReason',
            in: 'query',
            required: false,
            description:
              "A description of the reason why you want to change the specified job's status. This field can be any string up to the maximum length.",
            schema: { type: 'string', minLength: 1, maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateJobStatusResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'text/xml': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'text/xml': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'JobStatusException',
      content: { 'text/xml': { schema: JobStatusExceptionSchema } },
    },
    484: {
      description: 'InternalServiceException',
      content: { 'text/xml': { schema: InternalServiceExceptionSchema } },
    },
  },
})
