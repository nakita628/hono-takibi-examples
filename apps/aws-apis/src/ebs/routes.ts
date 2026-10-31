import { createRoute, z } from '@hono/zod-openapi'

const StatusSchema = z.enum(['completed', 'pending', 'error']).openapi('Status')

const CompleteSnapshotResponseSchema = z
  .object({
    Status: StatusSchema.and(
      z.any().openapi({ description: 'The status of the snapshot.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CompleteSnapshotResponse')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const RequestThrottledExceptionSchema = z.any().openapi('RequestThrottledException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const BlockDataSchema = z.string().openapi('BlockData')

const GetSnapshotBlockResponseSchema = z
  .object({
    BlockData: BlockDataSchema.and(
      z.any().openapi({ description: 'The data content of the block.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSnapshotBlockResponse')

const BlockIndexSchema = z.int().min(0).openapi('BlockIndex')

const BlockTokenSchema = z
  .string()
  .regex(/^[A-Za-z0-9+\/=]+$/)
  .max(256)
  .openapi('BlockToken')

const ChangedBlockSchema = z
  .object({
    BlockIndex: BlockIndexSchema.and(
      z.any().openapi({ description: 'The block index.' }),
    ).exactOptional(),
    FirstBlockToken: BlockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The block token for the block index of the <code>FirstSnapshotId</code> specified in the <code>ListChangedBlocks</code> operation. This value is absent if the first snapshot does not have the changed block that is on the second snapshot.',
        }),
    ).exactOptional(),
    SecondBlockToken: BlockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The block token for the block index of the <code>SecondSnapshotId</code> specified in the <code>ListChangedBlocks</code> operation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A block of data in an Amazon Elastic Block Store snapshot that is different from another snapshot of the same volume/snapshot lineage.',
    required: [],
  })
  .openapi('ChangedBlock')

const ChangedBlocksSchema = z.array(ChangedBlockSchema).openapi('ChangedBlocks')

const TimeStampSchema = z.iso.datetime({ offset: true }).openapi('TimeStamp')

const VolumeSizeSchema = z.int().min(1).openapi('VolumeSize')

const BlockSizeSchema = z.int().openapi('BlockSize')

const PageTokenSchema = z
  .string()
  .regex(/^[A-Za-z0-9+\/=]+$/)
  .max(256)
  .openapi('PageToken')

const ListChangedBlocksResponseSchema = z
  .object({
    ChangedBlocks: ChangedBlocksSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of objects containing information about the changed blocks.',
        }),
    ).exactOptional(),
    ExpiryTime: TimeStampSchema.and(
      z.any().openapi({ description: 'The time when the <code>BlockToken</code> expires.' }),
    ).exactOptional(),
    VolumeSize: VolumeSizeSchema.and(
      z.any().openapi({ description: 'The size of the volume in GB.' }),
    ).exactOptional(),
    BlockSize: BlockSizeSchema.and(
      z.any().openapi({ description: 'The size of the blocks in the snapshot, in bytes.' }),
    ).exactOptional(),
    NextToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is null when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListChangedBlocksResponse')

const BlockSchema = z
  .object({
    BlockIndex: BlockIndexSchema.and(
      z.any().openapi({ description: 'The block index.' }),
    ).exactOptional(),
    BlockToken: BlockTokenSchema.and(
      z.any().openapi({ description: 'The block token for the block index.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A block of data in an Amazon Elastic Block Store snapshot.',
    required: [],
  })
  .openapi('Block')

const BlocksSchema = z.array(BlockSchema).openapi('Blocks')

const ListSnapshotBlocksResponseSchema = z
  .object({
    Blocks: BlocksSchema.and(
      z
        .any()
        .openapi({ description: 'An array of objects containing information about the blocks.' }),
    ).exactOptional(),
    ExpiryTime: TimeStampSchema.and(
      z.any().openapi({ description: 'The time when the <code>BlockToken</code> expires.' }),
    ).exactOptional(),
    VolumeSize: VolumeSizeSchema.and(
      z.any().openapi({ description: 'The size of the volume in GB.' }),
    ).exactOptional(),
    BlockSize: BlockSizeSchema.and(
      z.any().openapi({ description: 'The size of the blocks in the snapshot, in bytes.' }),
    ).exactOptional(),
    NextToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is null when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSnapshotBlocksResponse')

const PutSnapshotBlockResponseSchema = z.object({}).openapi('PutSnapshotBlockResponse')

const DescriptionSchema = z
  .string()
  .regex(/^[\S\s]+$/)
  .max(255)
  .openapi('Description')

const SnapshotIdSchema = z
  .string()
  .regex(/^snap-[0-9a-f]+$/)
  .min(1)
  .max(64)
  .openapi('SnapshotId')

const OwnerIdSchema = z.string().regex(/\S+/).min(1).max(24).openapi('OwnerId')

const TagKeySchema = z
  .string()
  .regex(/^[\S\s]+$/)
  .max(127)
  .openapi('TagKey')

const TagValueSchema = z
  .string()
  .regex(/^[\S\s]*$/)
  .max(255)
  .openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(z.any().openapi({ description: 'The key of the tag.' })).exactOptional(),
    Value: TagValueSchema.and(
      z.any().openapi({ description: 'The value of the tag.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a tag.', required: [] })
  .openapi('Tag')

const TagsSchema = z.array(TagSchema).openapi('Tags')

const KmsKeyArnSchema = z
  .string()
  .regex(/arn:aws[a-z\-]*:kms:.*:[0-9]{12}:key\/.*/)
  .min(1)
  .max(2048)
  .openapi('KmsKeyArn')

const StartSnapshotResponseSchema = z
  .object({
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the snapshot.' }),
    ).exactOptional(),
    SnapshotId: SnapshotIdSchema.and(
      z.any().openapi({ description: 'The ID of the snapshot.' }),
    ).exactOptional(),
    OwnerId: OwnerIdSchema.and(
      z.any().openapi({ description: 'The Amazon Web Services account ID of the snapshot owner.' }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z.any().openapi({ description: 'The status of the snapshot.' }),
    ).exactOptional(),
    StartTime: TimeStampSchema.and(
      z.any().openapi({ description: 'The timestamp when the snapshot was created.' }),
    ).exactOptional(),
    VolumeSize: VolumeSizeSchema.and(
      z.any().openapi({ description: 'The size of the volume, in GiB.' }),
    ).exactOptional(),
    BlockSize: BlockSizeSchema.and(
      z.any().openapi({ description: 'The size of the blocks in the snapshot, in bytes.' }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags applied to the snapshot. You can specify up to 50 tags per snapshot. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html"> Tagging your Amazon EC2 resources</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.',
        }),
    ).exactOptional(),
    ParentSnapshotId: SnapshotIdSchema.and(
      z.any().openapi({ description: 'The ID of the parent snapshot.' }),
    ).exactOptional(),
    KmsKeyArn: KmsKeyArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Key Management Service (KMS) key used to encrypt the snapshot.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartSnapshotResponse')

const ConcurrentLimitExceededExceptionSchema = z.any().openapi('ConcurrentLimitExceededException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const BooleanSchema = z.boolean().openapi('Boolean')

const ChangedBlocksCountSchema = z.int().min(0).openapi('ChangedBlocksCount')

const ChecksumSchema = z
  .string()
  .regex(/^[A-Za-z0-9+\/=]+$/)
  .max(64)
  .openapi('Checksum')

const ChecksumAggregationMethodSchema = z.literal('LINEAR').openapi('ChecksumAggregationMethod')

const ChecksumAlgorithmSchema = z.literal('SHA256').openapi('ChecksumAlgorithm')

const CompleteSnapshotRequestSchema = z
  .object({})
  .openapi({ title: 'CompleteSnapshotRequest' })
  .openapi('CompleteSnapshotRequest')

const DataLengthSchema = z.int().openapi('DataLength')

const GetSnapshotBlockRequestSchema = z
  .object({})
  .openapi({ title: 'GetSnapshotBlockRequest' })
  .openapi('GetSnapshotBlockRequest')

const IdempotencyTokenSchema = z
  .string()
  .regex(/^[\S]+$/)
  .max(255)
  .openapi('IdempotencyToken')

const MaxResultsSchema = z.int().min(100).max(10000).openapi('MaxResults')

const ListChangedBlocksRequestSchema = z
  .object({})
  .openapi({ title: 'ListChangedBlocksRequest' })
  .openapi('ListChangedBlocksRequest')

const ListSnapshotBlocksRequestSchema = z
  .object({})
  .openapi({ title: 'ListSnapshotBlocksRequest' })
  .openapi('ListSnapshotBlocksRequest')

const ProgressSchema = z.int().min(0).max(100).openapi('Progress')

const PutSnapshotBlockRequestSchema = z
  .object({
    BlockData: BlockDataSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The data to write to the block.</p> <p>The block data is not signed as part of the Signature Version 4 signing process. As a result, you must generate and provide a Base64-encoded SHA256 checksum for the block data using the <b>x-amz-Checksum</b> header. Also, you must specify the checksum algorithm using the <b>x-amz-Checksum-Algorithm</b> header. The checksum that you provide is part of the Signature Version 4 signing process. It is validated against a checksum generated by Amazon EBS to ensure the validity and authenticity of the data. If the checksums do not correspond, the request fails. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-accessing-snapshot.html#ebsapis-using-checksums"> Using checksums with the EBS direct APIs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>',
        }),
    ),
  })
  .openapi({ required: ['BlockData'], title: 'PutSnapshotBlockRequest' })
  .openapi('PutSnapshotBlockRequest')

const TimeoutSchema = z.int().min(10).max(4320).openapi('Timeout')

const StartSnapshotRequestSchema = z
  .object({
    VolumeSize: VolumeSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The size of the volume, in GiB. The maximum size is <code>65536</code> GiB (64 TiB).',
        }),
    ),
    ParentSnapshotId: SnapshotIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the parent snapshot. If there is no parent snapshot, or if you are creating the first snapshot for an on-premises volume, omit this parameter.</p> <p>You can\'t specify <b>ParentSnapshotId</b> and <b>Encrypted</b> in the same request. If you specify both parameters, the request fails with <code>ValidationException</code>.</p> <p>The encryption status of the snapshot depends on the values that you specify for <b>Encrypted</b>, <b>KmsKeyArn</b>, and <b>ParentSnapshotId</b>, and whether your Amazon Web Services account is enabled for <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default"> encryption by default</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html"> Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <important> <p>If you specify an encrypted parent snapshot, you must have permission to use the KMS key that was used to encrypt the parent snapshot. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapi-permissions.html#ebsapi-kms-permissions"> Permissions to use Key Management Service keys</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </important>',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'The tags to apply to the snapshot.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description for the snapshot.' }),
    ).exactOptional(),
    ClientToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully. The subsequent retries with the same client token return the result from the original successful request and they have no additional effect.</p> <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-direct-api-idempotency.html"> Idempotency for StartSnapshot API</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>',
        }),
    ).exactOptional(),
    Encrypted: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether to encrypt the snapshot.</p> <p>You can\'t specify <b>Encrypted</b> and <b> ParentSnapshotId</b> in the same request. If you specify both parameters, the request fails with <code>ValidationException</code>.</p> <p>The encryption status of the snapshot depends on the values that you specify for <b>Encrypted</b>, <b>KmsKeyArn</b>, and <b>ParentSnapshotId</b>, and whether your Amazon Web Services account is enabled for <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default"> encryption by default</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html"> Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <important> <p>To create an encrypted snapshot, you must have permission to use the KMS key. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapi-permissions.html#ebsapi-kms-permissions"> Permissions to use Key Management Service keys</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </important>',
        }),
    ).exactOptional(),
    KmsKeyArn: KmsKeyArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the Key Management Service (KMS) key to be used to encrypt the snapshot.</p> <p>The encryption status of the snapshot depends on the values that you specify for <b>Encrypted</b>, <b>KmsKeyArn</b>, and <b>ParentSnapshotId</b>, and whether your Amazon Web Services account is enabled for <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default"> encryption by default</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html"> Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <important> <p>To create an encrypted snapshot, you must have permission to use the KMS key. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapi-permissions.html#ebsapi-kms-permissions"> Permissions to use Key Management Service keys</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </important>',
        }),
    ).exactOptional(),
    Timeout: TimeoutSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The amount of time (in minutes) after which the snapshot is automatically cancelled if:</p> <ul> <li> <p>No blocks are written to the snapshot.</p> </li> <li> <p>The snapshot is not completed after writing the last block of data.</p> </li> </ul> <p>If no value is specified, the timeout defaults to <code>60</code> minutes.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['VolumeSize'], title: 'StartSnapshotRequest' })
  .openapi('StartSnapshotRequest')

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

export const postSnapshotsCompletionSnapshotIdXAmzChangedBlocksCountRoute = createRoute({
  method: 'post',
  path: '/snapshots/completion/{snapshotId}#x-amz-ChangedBlocksCount',
  description:
    'Seals and completes the snapshot after all of the required blocks of data have been written to it. Completing the snapshot changes the status to <code>completed</code>. You cannot write new blocks to a snapshot after it has been completed.',
  operationId: 'CompleteSnapshot',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-ChangedBlocksCount': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .openapi({
          param: {
            name: 'x-amz-ChangedBlocksCount',
            in: 'header',
            required: true,
            description: 'The number of blocks that were written to the snapshot.',
            schema: { type: 'integer', minimum: 0 },
          },
        }),
      'x-amz-Checksum': z
        .string()
        .regex(/^[A-Za-z0-9+\/=]+$/)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-Checksum',
            in: 'header',
            required: false,
            description:
              '<p>An aggregated Base-64 SHA256 checksum based on the checksums of each written block.</p> <p>To generate the aggregated checksum using the linear aggregation method, arrange the checksums for each written block in ascending order of their block index, concatenate them to form a single string, and then generate the checksum on the entire string using the SHA256 algorithm.</p>',
            schema: { type: 'string', pattern: '^[A-Za-z0-9+/=]+$', maxLength: 64 },
          },
        }),
      'x-amz-Checksum-Algorithm': z
        .literal('SHA256')
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-Checksum-Algorithm',
            in: 'header',
            required: false,
            description:
              'The algorithm used to generate the checksum. Currently, the only supported algorithm is <code>SHA256</code>.',
            schema: { type: 'string', enum: ['SHA256'], pattern: '^[A-Za-z0-9]+$', maxLength: 32 },
          },
        }),
      'x-amz-Checksum-Aggregation-Method': z
        .literal('LINEAR')
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-Checksum-Aggregation-Method',
            in: 'header',
            required: false,
            description:
              'The aggregation method used to generate the checksum. Currently, the only supported aggregation method is <code>LINEAR</code>.',
            schema: { type: 'string', enum: ['LINEAR'], pattern: '^[A-Za-z0-9]+$', maxLength: 32 },
          },
        }),
    }),
    params: z.object({
      snapshotId: z
        .string()
        .regex(/^snap-[0-9a-f]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'snapshotId',
            in: 'path',
            required: true,
            description: 'The ID of the snapshot.',
            schema: { type: 'string', pattern: '^snap-[0-9a-f]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: CompleteSnapshotResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'RequestThrottledException',
      content: { 'application/json': { schema: RequestThrottledExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getSnapshotsSnapshotIdBlocksBlockIndexBlockTokenRoute = createRoute({
  method: 'get',
  path: '/snapshots/{snapshotId}/blocks/{blockIndex}#blockToken',
  description: 'Returns the data in a block in an Amazon Elastic Block Store snapshot.',
  operationId: 'GetSnapshotBlock',
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
      snapshotId: z
        .string()
        .regex(/^snap-[0-9a-f]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'snapshotId',
            in: 'path',
            required: true,
            description:
              '<p>The ID of the snapshot containing the block from which to get data.</p> <important> <p>If the specified snapshot is encrypted, you must have permission to use the KMS key that was used to encrypt the snapshot. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html"> Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </important>',
            schema: { type: 'string', pattern: '^snap-[0-9a-f]+$', minLength: 1, maxLength: 64 },
          },
        }),
      blockIndex: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .openapi({
          param: {
            name: 'blockIndex',
            in: 'path',
            required: true,
            description:
              'The block index of the block in which to read the data. A block index is a logical index in units of <code>512</code> KiB blocks. To identify the block index, divide the logical offset of the data in the logical volume by the block size (logical offset of data/<code>524288</code>). The logical offset of the data must be <code>512</code> KiB aligned.',
            schema: { type: 'integer', minimum: 0 },
          },
        }),
    }),
    query: z.object({
      blockToken: z
        .string()
        .regex(/^[A-Za-z0-9+\/=]+$/)
        .max(256)
        .openapi({
          param: {
            name: 'blockToken',
            in: 'query',
            required: true,
            description:
              'The block token of the block from which to get data. You can obtain the <code>BlockToken</code> by running the <code>ListChangedBlocks</code> or <code>ListSnapshotBlocks</code> operations.',
            schema: { type: 'string', pattern: '^[A-Za-z0-9+/=]+$', maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSnapshotBlockResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'RequestThrottledException',
      content: { 'application/json': { schema: RequestThrottledExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getSnapshotsSecondSnapshotIdChangedblocksRoute = createRoute({
  method: 'get',
  path: '/snapshots/{secondSnapshotId}/changedblocks',
  description:
    'Returns information about the blocks that are different between two Amazon Elastic Block Store snapshots of the same volume/snapshot lineage.',
  operationId: 'ListChangedBlocks',
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
      firstSnapshotId: z
        .string()
        .regex(/^snap-[0-9a-f]+$/)
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'firstSnapshotId',
            in: 'query',
            required: false,
            description:
              '<p>The ID of the first snapshot to use for the comparison.</p> <important> <p>The <code>FirstSnapshotID</code> parameter must be specified with a <code>SecondSnapshotId</code> parameter; otherwise, an error occurs.</p> </important>',
            schema: { type: 'string', pattern: '^snap-[0-9a-f]+$', minLength: 1, maxLength: 64 },
          },
        }),
      pageToken: z
        .string()
        .regex(/^[A-Za-z0-9+\/=]+$/)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'pageToken',
            in: 'query',
            required: false,
            description:
              '<p>The token to request the next page of results.</p> <p>If you specify <b>NextToken</b>, then <b>StartingBlockIndex</b> is ignored.</p>',
            schema: { type: 'string', pattern: '^[A-Za-z0-9+/=]+$', maxLength: 256 },
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
          z.int().min(100).max(10000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              '<p>The maximum number of blocks to be returned by the request.</p> <p>Even if additional blocks can be retrieved from the snapshot, the request can return less blocks than <b>MaxResults</b> or an empty array of blocks.</p> <p>To retrieve the next set of blocks from the snapshot, make another request with the returned <b>NextToken</b> value. The value of <b>NextToken</b> is <code>null</code> when there are no more blocks to return.</p>',
            schema: { type: 'integer', minimum: 100, maximum: 10000 },
          },
        }),
      startingBlockIndex: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'startingBlockIndex',
            in: 'query',
            required: false,
            description:
              '<p>The block index from which the comparison should start.</p> <p>The list in the response will start from this block index or the next valid block index in the snapshots.</p> <p>If you specify <b>NextToken</b>, then <b>StartingBlockIndex</b> is ignored.</p>',
            schema: { type: 'integer', minimum: 0 },
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
    params: z.object({
      secondSnapshotId: z
        .string()
        .regex(/^snap-[0-9a-f]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'secondSnapshotId',
            in: 'path',
            required: true,
            description:
              '<p>The ID of the second snapshot to use for the comparison.</p> <important> <p>The <code>SecondSnapshotId</code> parameter must be specified with a <code>FirstSnapshotID</code> parameter; otherwise, an error occurs.</p> </important>',
            schema: { type: 'string', pattern: '^snap-[0-9a-f]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListChangedBlocksResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'RequestThrottledException',
      content: { 'application/json': { schema: RequestThrottledExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getSnapshotsSnapshotIdBlocksRoute = createRoute({
  method: 'get',
  path: '/snapshots/{snapshotId}/blocks',
  description: 'Returns information about the blocks in an Amazon Elastic Block Store snapshot.',
  operationId: 'ListSnapshotBlocks',
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
      snapshotId: z
        .string()
        .regex(/^snap-[0-9a-f]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'snapshotId',
            in: 'path',
            required: true,
            description: 'The ID of the snapshot from which to get block indexes and block tokens.',
            schema: { type: 'string', pattern: '^snap-[0-9a-f]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    query: z.object({
      pageToken: z
        .string()
        .regex(/^[A-Za-z0-9+\/=]+$/)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'pageToken',
            in: 'query',
            required: false,
            description:
              '<p>The token to request the next page of results.</p> <p>If you specify <b>NextToken</b>, then <b>StartingBlockIndex</b> is ignored.</p>',
            schema: { type: 'string', pattern: '^[A-Za-z0-9+/=]+$', maxLength: 256 },
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
          z.int().min(100).max(10000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              '<p>The maximum number of blocks to be returned by the request.</p> <p>Even if additional blocks can be retrieved from the snapshot, the request can return less blocks than <b>MaxResults</b> or an empty array of blocks.</p> <p>To retrieve the next set of blocks from the snapshot, make another request with the returned <b>NextToken</b> value. The value of <b>NextToken</b> is <code>null</code> when there are no more blocks to return.</p>',
            schema: { type: 'integer', minimum: 100, maximum: 10000 },
          },
        }),
      startingBlockIndex: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'startingBlockIndex',
            in: 'query',
            required: false,
            description:
              '<p>The block index from which the list should start. The list in the response will start from this block index or the next valid block index in the snapshot.</p> <p>If you specify <b>NextToken</b>, then <b>StartingBlockIndex</b> is ignored.</p>',
            schema: { type: 'integer', minimum: 0 },
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
      content: { 'application/json': { schema: ListSnapshotBlocksResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'RequestThrottledException',
      content: { 'application/json': { schema: RequestThrottledExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putSnapshotsSnapshotIdBlocksBlockIndexXAmzDataLengthXAmzChecksumXAmzChecksumAlgorithmRoute =
  createRoute({
    method: 'put',
    path: '/snapshots/{snapshotId}/blocks/{blockIndex}#x-amz-Data-Length&x-amz-Checksum&x-amz-Checksum-Algorithm',
    description:
      '<p>Writes a block of data to a snapshot. If the specified block contains data, the existing data is overwritten. The target snapshot must be in the <code>pending</code> state.</p> <p>Data written to a snapshot must be aligned with 512-KiB sectors.</p>',
    operationId: 'PutSnapshotBlock',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'x-amz-Data-Length': z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .openapi({
            param: {
              name: 'x-amz-Data-Length',
              in: 'header',
              required: true,
              description:
                '<p>The size of the data to write to the block, in bytes. Currently, the only supported size is <code>524288</code> bytes.</p> <p>Valid values: <code>524288</code> </p>',
              schema: { type: 'integer' },
            },
          }),
        'x-amz-Progress': z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(0).max(100),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'x-amz-Progress',
              in: 'header',
              required: false,
              description: 'The progress of the write process, as a percentage.',
              schema: { type: 'integer', minimum: 0, maximum: 100 },
            },
          }),
        'x-amz-Checksum': z
          .string()
          .regex(/^[A-Za-z0-9+\/=]+$/)
          .max(64)
          .openapi({
            param: {
              name: 'x-amz-Checksum',
              in: 'header',
              required: true,
              description:
                'A Base64-encoded SHA256 checksum of the data. Only SHA256 checksums are supported.',
              schema: { type: 'string', pattern: '^[A-Za-z0-9+/=]+$', maxLength: 64 },
            },
          }),
        'x-amz-Checksum-Algorithm': z
          .literal('SHA256')
          .openapi({
            param: {
              name: 'x-amz-Checksum-Algorithm',
              in: 'header',
              required: true,
              description:
                'The algorithm used to generate the checksum. Currently, the only supported algorithm is <code>SHA256</code>.',
              schema: {
                type: 'string',
                enum: ['SHA256'],
                pattern: '^[A-Za-z0-9]+$',
                maxLength: 32,
              },
            },
          }),
      }),
      params: z.object({
        snapshotId: z
          .string()
          .regex(/^snap-[0-9a-f]+$/)
          .min(1)
          .max(64)
          .openapi({
            param: {
              name: 'snapshotId',
              in: 'path',
              required: true,
              description:
                '<p>The ID of the snapshot.</p> <important> <p>If the specified snapshot is encrypted, you must have permission to use the KMS key that was used to encrypt the snapshot. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html"> Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>..</p> </important>',
              schema: { type: 'string', pattern: '^snap-[0-9a-f]+$', minLength: 1, maxLength: 64 },
            },
          }),
        blockIndex: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(0),
          )
          .openapi({
            param: {
              name: 'blockIndex',
              in: 'path',
              required: true,
              description:
                'The block index of the block in which to write the data. A block index is a logical index in units of <code>512</code> KiB blocks. To identify the block index, divide the logical offset of the data in the logical volume by the block size (logical offset of data/<code>524288</code>). The logical offset of the data must be <code>512</code> KiB aligned.',
              schema: { type: 'integer', minimum: 0 },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                BlockData: z
                  .string()
                  .openapi({
                    description:
                      '<p>The data to write to the block.</p> <p>The block data is not signed as part of the Signature Version 4 signing process. As a result, you must generate and provide a Base64-encoded SHA256 checksum for the block data using the <b>x-amz-Checksum</b> header. Also, you must specify the checksum algorithm using the <b>x-amz-Checksum-Algorithm</b> header. The checksum that you provide is part of the Signature Version 4 signing process. It is validated against a checksum generated by Amazon EBS to ensure the validity and authenticity of the data. If the checksums do not correspond, the request fails. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-accessing-snapshot.html#ebsapis-using-checksums"> Using checksums with the EBS direct APIs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>',
                  }),
              })
              .openapi({ required: ['BlockData'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      201: {
        description: 'Success',
        content: { 'application/json': { schema: PutSnapshotBlockResponseSchema } },
      },
      480: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      481: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'RequestThrottledException',
        content: { 'application/json': { schema: RequestThrottledExceptionSchema } },
      },
      484: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      485: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postSnapshotsRoute = createRoute({
  method: 'post',
  path: '/snapshots',
  description:
    '<p>Creates a new Amazon EBS snapshot. The new snapshot enters the <code>pending</code> state after the request completes. </p> <p>After creating the snapshot, use <a href="https://docs.aws.amazon.com/ebs/latest/APIReference/API_PutSnapshotBlock.html"> PutSnapshotBlock</a> to write blocks of data to the snapshot.</p>',
  operationId: 'StartSnapshot',
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
              VolumeSize: z
                .int()
                .min(1)
                .openapi({
                  description:
                    'The size of the volume, in GiB. The maximum size is <code>65536</code> GiB (64 TiB).',
                }),
              ParentSnapshotId: z
                .string()
                .regex(/^snap-[0-9a-f]+$/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The ID of the parent snapshot. If there is no parent snapshot, or if you are creating the first snapshot for an on-premises volume, omit this parameter.</p> <p>You can\'t specify <b>ParentSnapshotId</b> and <b>Encrypted</b> in the same request. If you specify both parameters, the request fails with <code>ValidationException</code>.</p> <p>The encryption status of the snapshot depends on the values that you specify for <b>Encrypted</b>, <b>KmsKeyArn</b>, and <b>ParentSnapshotId</b>, and whether your Amazon Web Services account is enabled for <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default"> encryption by default</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html"> Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <important> <p>If you specify an encrypted parent snapshot, you must have permission to use the KMS key that was used to encrypt the parent snapshot. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapi-permissions.html#ebsapi-kms-permissions"> Permissions to use Key Management Service keys</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </important>',
                }),
              Tags: z
                .array(TagSchema)
                .exactOptional()
                .openapi({ description: 'The tags to apply to the snapshot.' }),
              Description: z
                .string()
                .regex(/^[\S\s]+$/)
                .max(255)
                .exactOptional()
                .openapi({ description: 'A description for the snapshot.' }),
              ClientToken: z
                .string()
                .regex(/^[\S]+$/)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully. The subsequent retries with the same client token return the result from the original successful request and they have no additional effect.</p> <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-direct-api-idempotency.html"> Idempotency for StartSnapshot API</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>',
                }),
              Encrypted: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Indicates whether to encrypt the snapshot.</p> <p>You can\'t specify <b>Encrypted</b> and <b> ParentSnapshotId</b> in the same request. If you specify both parameters, the request fails with <code>ValidationException</code>.</p> <p>The encryption status of the snapshot depends on the values that you specify for <b>Encrypted</b>, <b>KmsKeyArn</b>, and <b>ParentSnapshotId</b>, and whether your Amazon Web Services account is enabled for <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default"> encryption by default</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html"> Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <important> <p>To create an encrypted snapshot, you must have permission to use the KMS key. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapi-permissions.html#ebsapi-kms-permissions"> Permissions to use Key Management Service keys</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </important>',
                }),
              KmsKeyArn: z
                .string()
                .regex(/arn:aws[a-z\-]*:kms:.*:[0-9]{12}:key\/.*/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The Amazon Resource Name (ARN) of the Key Management Service (KMS) key to be used to encrypt the snapshot.</p> <p>The encryption status of the snapshot depends on the values that you specify for <b>Encrypted</b>, <b>KmsKeyArn</b>, and <b>ParentSnapshotId</b>, and whether your Amazon Web Services account is enabled for <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default"> encryption by default</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html"> Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <important> <p>To create an encrypted snapshot, you must have permission to use the KMS key. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapi-permissions.html#ebsapi-kms-permissions"> Permissions to use Key Management Service keys</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </important>',
                }),
              Timeout: z
                .int()
                .min(10)
                .max(4320)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The amount of time (in minutes) after which the snapshot is automatically cancelled if:</p> <ul> <li> <p>No blocks are written to the snapshot.</p> </li> <li> <p>The snapshot is not completed after writing the last block of data.</p> </li> </ul> <p>If no value is specified, the timeout defaults to <code>60</code> minutes.</p>',
                }),
            })
            .openapi({ required: ['VolumeSize'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: StartSnapshotResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'RequestThrottledException',
      content: { 'application/json': { schema: RequestThrottledExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    486: {
      description: 'ConcurrentLimitExceededException',
      content: { 'application/json': { schema: ConcurrentLimitExceededExceptionSchema } },
    },
    487: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})
