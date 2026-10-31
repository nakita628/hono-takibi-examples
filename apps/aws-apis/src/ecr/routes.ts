import { createRoute, z } from '@hono/zod-openapi'

const MetricSchema = z.string().openapi('Metric')

const ReasonSchema = z.string().openapi('Reason')

const CvssScoreAdjustmentSchema = z
  .object({
    metric: MetricSchema.and(
      z.any().openapi({ description: 'The metric used to adjust the CVSS score.' }),
    ).exactOptional(),
    reason: ReasonSchema.and(
      z.any().openapi({ description: 'The reason the CVSS score has been adjustment.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Details on adjustments Amazon Inspector made to the CVSS score for a finding.',
    required: [],
  })
  .openapi('CvssScoreAdjustment')

const CvssScoreAdjustmentListSchema = z
  .array(CvssScoreAdjustmentSchema)
  .openapi('CvssScoreAdjustmentList')

const ScoreSchema = z.float64().openapi('Score')

const SourceSchema = z.string().openapi('Source')

const ScoringVectorSchema = z.string().openapi('ScoringVector')

const VersionSchema = z.string().openapi('Version')

const CvssScoreDetailsSchema = z
  .object({
    adjustments: CvssScoreAdjustmentListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains details about adjustment Amazon Inspector made to the CVSS score.',
        }),
    ).exactOptional(),
    score: ScoreSchema.and(z.any().openapi({ description: 'The CVSS score.' })).exactOptional(),
    scoreSource: SourceSchema.and(
      z.any().openapi({ description: 'The source for the CVSS score.' }),
    ).exactOptional(),
    scoringVector: ScoringVectorSchema.and(
      z.any().openapi({ description: 'The vector for the CVSS score.' }),
    ).exactOptional(),
    version: VersionSchema.and(
      z.any().openapi({ description: 'The CVSS version used in scoring.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the CVSS score.', required: [] })
  .openapi('CvssScoreDetails')

type ScoreDetailsType = {
  cvss?: z.infer<typeof CvssScoreDetailsSchema> & { [key: string]: unknown }
}

const LayerDigestSchema = z
  .string()
  .regex(/[a-zA-Z0-9-_+.]+:[a-fA-F0-9]+/)
  .openapi('LayerDigest')

const LayerAvailabilitySchema = z.enum(['AVAILABLE', 'UNAVAILABLE']).openapi('LayerAvailability')

const LayerSizeInBytesSchema = z.int().openapi('LayerSizeInBytes')

const MediaTypeSchema = z.string().openapi('MediaType')

const LayerSchema = z
  .object({
    layerDigest: LayerDigestSchema.and(
      z.any().openapi({ description: 'The <code>sha256</code> digest of the image layer.' }),
    ).exactOptional(),
    layerAvailability: LayerAvailabilitySchema.and(
      z.any().openapi({ description: 'The availability status of the image layer.' }),
    ).exactOptional(),
    layerSize: LayerSizeInBytesSchema.and(
      z.any().openapi({ description: 'The size, in bytes, of the image layer.' }),
    ).exactOptional(),
    mediaType: MediaTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The media type of the layer, such as <code>application/vnd.docker.image.rootfs.diff.tar.gzip</code> or <code>application/vnd.oci.image.layer.v1.tar+gzip</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object representing an Amazon ECR image layer.', required: [] })
  .openapi('Layer')

const LayerListSchema = z.array(LayerSchema).openapi('LayerList')

const BatchedOperationLayerDigestSchema = z
  .string()
  .min(0)
  .max(1000)
  .openapi('BatchedOperationLayerDigest')

const LayerFailureCodeSchema = z
  .enum(['InvalidLayerDigest', 'MissingLayerDigest'])
  .openapi('LayerFailureCode')

const LayerFailureReasonSchema = z.string().openapi('LayerFailureReason')

const LayerFailureSchema = z
  .object({
    layerDigest: BatchedOperationLayerDigestSchema.and(
      z.any().openapi({ description: 'The layer digest associated with the failure.' }),
    ).exactOptional(),
    failureCode: LayerFailureCodeSchema.and(
      z.any().openapi({ description: 'The failure code associated with the failure.' }),
    ).exactOptional(),
    failureReason: LayerFailureReasonSchema.and(
      z.any().openapi({ description: 'The reason for the failure.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object representing an Amazon ECR image layer failure.',
    required: [],
  })
  .openapi('LayerFailure')

const LayerFailureListSchema = z.array(LayerFailureSchema).openapi('LayerFailureList')

const BatchCheckLayerAvailabilityResponseSchema = z
  .object({
    layers: LayerListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of image layer objects corresponding to the image layer references in the request.',
        }),
    ).exactOptional(),
    failures: LayerFailureListSchema.and(
      z.any().openapi({ description: 'Any failures associated with the call.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchCheckLayerAvailabilityResponse')

const RegistryIdSchema = z
  .string()
  .regex(/[0-9]{12}/)
  .openapi('RegistryId')

const RepositoryNameSchema = z
  .string()
  .regex(/(?:[a-z0-9]+(?:[._-][a-z0-9]+)*\/)*[a-z0-9]+(?:[._-][a-z0-9]+)*/)
  .min(2)
  .max(256)
  .openapi('RepositoryName')

const BatchedOperationLayerDigestListSchema = z
  .array(BatchedOperationLayerDigestSchema)
  .min(1)
  .max(100)
  .openapi('BatchedOperationLayerDigestList')

const BatchCheckLayerAvailabilityRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry that contains the image layers to check. If you do not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the repository that is associated with the image layers to check.',
        }),
    ),
    layerDigests: BatchedOperationLayerDigestListSchema.and(
      z.any().openapi({ description: 'The digests of the image layers to check.' }),
    ),
  })
  .openapi({
    required: ['repositoryName', 'layerDigests'],
    title: 'BatchCheckLayerAvailabilityRequest',
  })
  .openapi('BatchCheckLayerAvailabilityRequest')

const RepositoryNotFoundExceptionSchema = z.any().openapi('RepositoryNotFoundException')

const InvalidParameterExceptionSchema = z.any().openapi('InvalidParameterException')

const ServerExceptionSchema = z.any().openapi('ServerException')

const ImageDigestSchema = z.string().openapi('ImageDigest')

const ImageTagSchema = z.string().min(1).max(300).openapi('ImageTag')

const ImageIdentifierSchema = z
  .object({
    imageDigest: ImageDigestSchema.and(
      z.any().openapi({ description: 'The <code>sha256</code> digest of the image manifest.' }),
    ).exactOptional(),
    imageTag: ImageTagSchema.and(
      z.any().openapi({ description: 'The tag used for the image.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object with identifying information for an image in an Amazon ECR repository.',
    required: [],
  })
  .openapi('ImageIdentifier')

const ImageIdentifierListSchema = z
  .array(ImageIdentifierSchema)
  .min(1)
  .max(100)
  .openapi('ImageIdentifierList')

const ImageFailureCodeSchema = z
  .enum([
    'InvalidImageDigest',
    'InvalidImageTag',
    'ImageTagDoesNotMatchDigest',
    'ImageNotFound',
    'MissingDigestAndTag',
    'ImageReferencedByManifestList',
    'KmsError',
  ])
  .openapi('ImageFailureCode')

const ImageFailureReasonSchema = z.string().openapi('ImageFailureReason')

const ImageFailureSchema = z
  .object({
    imageId: ImageIdentifierSchema.and(
      z.any().openapi({ description: 'The image ID associated with the failure.' }),
    ).exactOptional(),
    failureCode: ImageFailureCodeSchema.and(
      z.any().openapi({ description: 'The code associated with the failure.' }),
    ).exactOptional(),
    failureReason: ImageFailureReasonSchema.and(
      z.any().openapi({ description: 'The reason for the failure.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object representing an Amazon ECR image failure.', required: [] })
  .openapi('ImageFailure')

const ImageFailureListSchema = z.array(ImageFailureSchema).openapi('ImageFailureList')

const BatchDeleteImageResponseSchema = z
  .object({
    imageIds: ImageIdentifierListSchema.and(
      z.any().openapi({ description: 'The image IDs of the deleted images.' }),
    ).exactOptional(),
    failures: ImageFailureListSchema.and(
      z.any().openapi({ description: 'Any failures associated with the call.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      failures: [],
      imageIds: [
        {
          imageDigest: 'sha256:examplee6d1e504117a17000003d3753086354a38375961f2e665416ef4b1b2f',
          imageTag: 'precise',
        },
      ],
    },
    required: [],
  })
  .openapi('BatchDeleteImageResponse')

const BatchDeleteImageRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry that contains the image to delete. If you do not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The repository that contains the image to delete.' }),
    ),
    imageIds: ImageIdentifierListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of image ID references that correspond to images to delete. The format of the <code>imageIds</code> reference is <code>imageTag=tag</code> or <code>imageDigest=digest</code>.',
        }),
    ),
  })
  .openapi({
    required: ['repositoryName', 'imageIds'],
    title: 'BatchDeleteImageRequest',
    description:
      'Deletes specified images within a specified repository. Images are specified with either the <code>imageTag</code> or <code>imageDigest</code>.',
  })
  .openapi('BatchDeleteImageRequest')

const ImageManifestSchema = z.string().min(1).max(4194304).openapi('ImageManifest')

const ImageSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry containing the image.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name of the repository associated with the image.' }),
    ).exactOptional(),
    imageId: ImageIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object containing the image tag and image digest associated with an image.',
        }),
    ).exactOptional(),
    imageManifest: ImageManifestSchema.and(
      z.any().openapi({ description: 'The image manifest associated with the image.' }),
    ).exactOptional(),
    imageManifestMediaType: MediaTypeSchema.and(
      z.any().openapi({ description: 'The manifest media type of the image.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object representing an Amazon ECR image.', required: [] })
  .openapi('Image')

const ImageListSchema = z.array(ImageSchema).openapi('ImageList')

const BatchGetImageResponseSchema = z
  .object({
    images: ImageListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of image objects corresponding to the image references in the request.',
        }),
    ).exactOptional(),
    failures: ImageFailureListSchema.and(
      z.any().openapi({ description: 'Any failures associated with the call.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      failures: [],
      images: [
        {
          imageId: {
            imageDigest: 'sha256:example76bdff6d83a09ba2a818f0d00000063724a9ac3ba5019c56f74ebf42a',
            imageTag: 'precise',
          },
          imageManifest: '{\n "schemaVersion": 1,\n "name": "ubuntu",\n "tag": "precise",\n...',
          registryId: '244698725403',
          repositoryName: 'ubuntu',
        },
      ],
    },
    required: [],
  })
  .openapi('BatchGetImageResponse')

const MediaTypeListSchema = z.array(MediaTypeSchema).min(1).max(100).openapi('MediaTypeList')

const BatchGetImageRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry that contains the images to describe. If you do not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The repository that contains the images to describe.' }),
    ),
    imageIds: ImageIdentifierListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of image ID references that correspond to images to describe. The format of the <code>imageIds</code> reference is <code>imageTag=tag</code> or <code>imageDigest=digest</code>.',
        }),
    ),
    acceptedMediaTypes: MediaTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The accepted media types for the request.</p> <p>Valid values: <code>application/vnd.docker.distribution.manifest.v1+json</code> | <code>application/vnd.docker.distribution.manifest.v2+json</code> | <code>application/vnd.oci.image.manifest.v1+json</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['repositoryName', 'imageIds'], title: 'BatchGetImageRequest' })
  .openapi('BatchGetImageRequest')

const ArnSchema = z.string().openapi('Arn')

const ScanOnPushFlagSchema = z.boolean().openapi('ScanOnPushFlag')

const ScanFrequencySchema = z
  .enum(['SCAN_ON_PUSH', 'CONTINUOUS_SCAN', 'MANUAL'])
  .openapi('ScanFrequency')

const ScanningRepositoryFilterValueSchema = z
  .string()
  .regex(/^[a-z0-9*](?:[._\-\/a-z0-9*]?[a-z0-9*]+)*$/)
  .min(1)
  .max(255)
  .openapi('ScanningRepositoryFilterValue')

const ScanningRepositoryFilterTypeSchema = z
  .literal('WILDCARD')
  .openapi('ScanningRepositoryFilterType')

const ScanningRepositoryFilterSchema = z
  .object({
    filter: ScanningRepositoryFilterValueSchema.and(
      z.any().openapi({ description: 'The filter to use when scanning.' }),
    ),
    filterType: ScanningRepositoryFilterTypeSchema.and(
      z.any().openapi({ description: 'The type associated with the filter.' }),
    ),
  })
  .openapi({
    required: ['filter', 'filterType'],
    description:
      'The details of a scanning repository filter. For more information on how to use filters, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html#image-scanning-filters">Using filters</a> in the <i>Amazon Elastic Container Registry User Guide</i>.',
  })
  .openapi('ScanningRepositoryFilter')

const ScanningRepositoryFilterListSchema = z
  .array(ScanningRepositoryFilterSchema)
  .min(0)
  .max(100)
  .openapi('ScanningRepositoryFilterList')

const RepositoryScanningConfigurationSchema = z
  .object({
    repositoryArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the repository.' }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name of the repository.' }),
    ).exactOptional(),
    scanOnPush: ScanOnPushFlagSchema.and(
      z
        .any()
        .openapi({ description: 'Whether or not scan on push is configured for the repository.' }),
    ).exactOptional(),
    scanFrequency: ScanFrequencySchema.and(
      z.any().openapi({ description: 'The scan frequency for the repository.' }),
    ).exactOptional(),
    appliedScanFilters: ScanningRepositoryFilterListSchema.and(
      z.any().openapi({ description: 'The scan filters applied to the repository.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The details of the scanning configuration for a repository.',
    required: [],
  })
  .openapi('RepositoryScanningConfiguration')

const RepositoryScanningConfigurationListSchema = z
  .array(RepositoryScanningConfigurationSchema)
  .openapi('RepositoryScanningConfigurationList')

const ScanningConfigurationFailureCodeSchema = z
  .literal('REPOSITORY_NOT_FOUND')
  .openapi('ScanningConfigurationFailureCode')

const ScanningConfigurationFailureReasonSchema = z
  .string()
  .openapi('ScanningConfigurationFailureReason')

const RepositoryScanningConfigurationFailureSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name of the repository.' }),
    ).exactOptional(),
    failureCode: ScanningConfigurationFailureCodeSchema.and(
      z.any().openapi({ description: 'The failure code.' }),
    ).exactOptional(),
    failureReason: ScanningConfigurationFailureReasonSchema.and(
      z.any().openapi({ description: 'The reason for the failure.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The details about any failures associated with the scanning configuration of a repository.',
    required: [],
  })
  .openapi('RepositoryScanningConfigurationFailure')

const RepositoryScanningConfigurationFailureListSchema = z
  .array(RepositoryScanningConfigurationFailureSchema)
  .openapi('RepositoryScanningConfigurationFailureList')

const BatchGetRepositoryScanningConfigurationResponseSchema = z
  .object({
    scanningConfigurations: RepositoryScanningConfigurationListSchema.and(
      z
        .any()
        .openapi({ description: 'The scanning configuration for the requested repositories.' }),
    ).exactOptional(),
    failures: RepositoryScanningConfigurationFailureListSchema.and(
      z.any().openapi({ description: 'Any failures associated with the call.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchGetRepositoryScanningConfigurationResponse')

const ScanningConfigurationRepositoryNameListSchema = z
  .array(RepositoryNameSchema)
  .min(1)
  .max(25)
  .openapi('ScanningConfigurationRepositoryNameList')

const BatchGetRepositoryScanningConfigurationRequestSchema = z
  .object({
    repositoryNames: ScanningConfigurationRepositoryNameListSchema.and(
      z
        .any()
        .openapi({
          description: 'One or more repository names to get the scanning configuration for.',
        }),
    ),
  })
  .openapi({
    required: ['repositoryNames'],
    title: 'BatchGetRepositoryScanningConfigurationRequest',
  })
  .openapi('BatchGetRepositoryScanningConfigurationRequest')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const UploadIdSchema = z
  .string()
  .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/)
  .openapi('UploadId')

const CompleteLayerUploadResponseSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z.any().openapi({ description: 'The registry ID associated with the request.' }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The repository name associated with the request.' }),
    ).exactOptional(),
    uploadId: UploadIdSchema.and(
      z.any().openapi({ description: 'The upload ID associated with the layer.' }),
    ).exactOptional(),
    layerDigest: LayerDigestSchema.and(
      z.any().openapi({ description: 'The <code>sha256</code> digest of the image layer.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CompleteLayerUploadResponse')

const LayerDigestListSchema = z.array(LayerDigestSchema).min(1).max(100).openapi('LayerDigestList')

const CompleteLayerUploadRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry to which to upload layers. If you do not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the repository to associate with the image layer.' }),
    ),
    uploadId: UploadIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The upload ID from a previous <a>InitiateLayerUpload</a> operation to associate with the image layer.',
        }),
    ),
    layerDigests: LayerDigestListSchema.and(
      z.any().openapi({ description: 'The <code>sha256</code> digest of the image layer.' }),
    ),
  })
  .openapi({
    required: ['repositoryName', 'uploadId', 'layerDigests'],
    title: 'CompleteLayerUploadRequest',
  })
  .openapi('CompleteLayerUploadRequest')

const UploadNotFoundExceptionSchema = z.any().openapi('UploadNotFoundException')

const InvalidLayerExceptionSchema = z.any().openapi('InvalidLayerException')

const LayerPartTooSmallExceptionSchema = z.any().openapi('LayerPartTooSmallException')

const LayerAlreadyExistsExceptionSchema = z.any().openapi('LayerAlreadyExistsException')

const EmptyUploadExceptionSchema = z.any().openapi('EmptyUploadException')

const KmsExceptionSchema = z.any().openapi('KmsException')

const PullThroughCacheRuleRepositoryPrefixSchema = z
  .string()
  .regex(/[a-z0-9]+(?:[._-][a-z0-9]+)*/)
  .min(2)
  .max(20)
  .openapi('PullThroughCacheRuleRepositoryPrefix')

const UrlSchema = z.string().openapi('Url')

const CreationTimestampSchema = z.iso.datetime({ offset: true }).openapi('CreationTimestamp')

const CreatePullThroughCacheRuleResponseSchema = z
  .object({
    ecrRepositoryPrefix: PullThroughCacheRuleRepositoryPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon ECR repository prefix associated with the pull through cache rule.',
        }),
    ).exactOptional(),
    upstreamRegistryUrl: UrlSchema.and(
      z
        .any()
        .openapi({
          description: 'The upstream registry URL associated with the pull through cache rule.',
        }),
    ).exactOptional(),
    createdAt: CreationTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in JavaScript date format, when the pull through cache rule was created.',
        }),
    ).exactOptional(),
    registryId: RegistryIdSchema.and(
      z.any().openapi({ description: 'The registry ID associated with the request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreatePullThroughCacheRuleResponse')

const CreatePullThroughCacheRuleRequestSchema = z
  .object({
    ecrRepositoryPrefix: PullThroughCacheRuleRepositoryPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'The repository name prefix to use when caching images from the source registry.',
        }),
    ),
    upstreamRegistryUrl: UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The registry URL of the upstream public registry to use as the source for the pull through cache rule.',
        }),
    ),
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry to create the pull through cache rule for. If you do not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ecrRepositoryPrefix', 'upstreamRegistryUrl'],
    title: 'CreatePullThroughCacheRuleRequest',
  })
  .openapi('CreatePullThroughCacheRuleRequest')

const PullThroughCacheRuleAlreadyExistsExceptionSchema = z
  .any()
  .openapi('PullThroughCacheRuleAlreadyExistsException')

const UnsupportedUpstreamRegistryExceptionSchema = z
  .any()
  .openapi('UnsupportedUpstreamRegistryException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const ImageTagMutabilitySchema = z.enum(['MUTABLE', 'IMMUTABLE']).openapi('ImageTagMutability')

const ImageScanningConfigurationSchema = z
  .object({
    scanOnPush: ScanOnPushFlagSchema.and(
      z
        .any()
        .openapi({
          description:
            'The setting that determines whether images are scanned after being pushed to a repository. If set to <code>true</code>, images will be scanned after being pushed. If this parameter is not specified, it will default to <code>false</code> and images will not be scanned unless a scan is manually started with the <a href="https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_StartImageScan.html">API_StartImageScan</a> API.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The image scanning configuration for a repository.', required: [] })
  .openapi('ImageScanningConfiguration')

const EncryptionTypeSchema = z.enum(['AES256', 'KMS']).openapi('EncryptionType')

const KmsKeySchema = z.string().min(1).max(2048).openapi('KmsKey')

const EncryptionConfigurationSchema = z
  .object({
    encryptionType: EncryptionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The encryption type to use.</p> <p>If you use the <code>KMS</code> encryption type, the contents of the repository will be encrypted using server-side encryption with Key Management Service key stored in KMS. When you use KMS to encrypt your data, you can either use the default Amazon Web Services managed KMS key for Amazon ECR, or specify your own KMS key, which you already created. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html">Protecting data using server-side encryption with an KMS key stored in Key Management Service (SSE-KMS)</a> in the <i>Amazon Simple Storage Service Console Developer Guide</i>.</p> <p>If you use the <code>AES256</code> encryption type, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts the images in the repository using an AES-256 encryption algorithm. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html">Protecting data using server-side encryption with Amazon S3-managed encryption keys (SSE-S3)</a> in the <i>Amazon Simple Storage Service Console Developer Guide</i>.</p>',
        }),
    ),
    kmsKey: KmsKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'If you use the <code>KMS</code> encryption type, specify the KMS key to use for encryption. The alias, key ID, or full ARN of the KMS key can be specified. The key must exist in the same Region as the repository. If no key is specified, the default Amazon Web Services managed KMS key for Amazon ECR will be used.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['encryptionType'],
    description:
      '<p>The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.</p> <p>By default, when no encryption configuration is set or the <code>AES256</code> encryption type is used, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts your data at rest using an AES-256 encryption algorithm. This does not require any action on your part.</p> <p>For more control over the encryption of the contents of your repository, you can use server-side encryption with Key Management Service key stored in Key Management Service (KMS) to encrypt your images. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html">Amazon ECR encryption at rest</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>',
  })
  .openapi('EncryptionConfiguration')

const RepositorySchema = z
  .object({
    repositoryArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that identifies the repository. The ARN contains the <code>arn:aws:ecr</code> namespace, followed by the region of the repository, Amazon Web Services account ID of the repository owner, repository namespace, and repository name. For example, <code>arn:aws:ecr:region:012345678910:repository/test</code>.',
        }),
    ).exactOptional(),
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry that contains the repository.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name of the repository.' }),
    ).exactOptional(),
    repositoryUri: UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URI for the repository. You can use this URI for container image <code>push</code> and <code>pull</code> operations.',
        }),
    ).exactOptional(),
    createdAt: CreationTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in JavaScript date format, when the repository was created.',
        }),
    ).exactOptional(),
    imageTagMutability: ImageTagMutabilitySchema.and(
      z.any().openapi({ description: 'The tag mutability setting for the repository.' }),
    ).exactOptional(),
    imageScanningConfiguration: ImageScanningConfigurationSchema.exactOptional(),
    encryptionConfiguration: EncryptionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object representing a repository.', required: [] })
  .openapi('Repository')

const CreateRepositoryResponseSchema = z
  .object({
    repository: RepositorySchema.and(
      z.any().openapi({ description: 'The repository that was created.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      repository: {
        registryId: 12345678901,
        repositoryArn: 'arn:aws:ecr:us-west-2:012345678901:repository/project-a/nginx-web-app',
        repositoryName: 'project-a/nginx-web-app',
      },
    },
    required: [],
  })
  .openapi('CreateRepositoryResponse')

const TagKeySchema = z.string().openapi('TagKey')

const TagValueSchema = z.string().openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'One part of a key-value pair that make up a tag. A <code>key</code> is a general label that acts like a category for more specific tag values.',
        }),
    ).exactOptional(),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description: 'A <code>value</code> acts as a descriptor within a tag category (key).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The metadata to apply to a resource to help you categorize and organize them. Each tag consists of a key and a value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.',
    required: [],
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).openapi('TagList')

const CreateRepositoryRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry to create the repository. If you do not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name to use for the repository. The repository name may be specified on its own (such as <code>nginx-web-app</code>) or it can be prepended with a namespace to group the repository into a category (such as <code>project-a/nginx-web-app</code>).',
        }),
    ),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metadata that you apply to the repository to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.',
        }),
    ).exactOptional(),
    imageTagMutability: ImageTagMutabilitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag mutability setting for the repository. If this parameter is omitted, the default setting of <code>MUTABLE</code> will be used which will allow image tags to be overwritten. If <code>IMMUTABLE</code> is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.',
        }),
    ).exactOptional(),
    imageScanningConfiguration: ImageScanningConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The image scanning configuration for the repository. This determines whether images are scanned for known vulnerabilities after being pushed to the repository.',
        }),
    ).exactOptional(),
    encryptionConfiguration: EncryptionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['repositoryName'], title: 'CreateRepositoryRequest' })
  .openapi('CreateRepositoryRequest')

const InvalidTagParameterExceptionSchema = z.any().openapi('InvalidTagParameterException')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const RepositoryAlreadyExistsExceptionSchema = z.any().openapi('RepositoryAlreadyExistsException')

const LifecyclePolicyTextSchema = z.string().min(100).max(30720).openapi('LifecyclePolicyText')

const EvaluationTimestampSchema = z.iso.datetime({ offset: true }).openapi('EvaluationTimestamp')

const DeleteLifecyclePolicyResponseSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z.any().openapi({ description: 'The registry ID associated with the request.' }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The repository name associated with the request.' }),
    ).exactOptional(),
    lifecyclePolicyText: LifecyclePolicyTextSchema.and(
      z.any().openapi({ description: 'The JSON lifecycle policy text.' }),
    ).exactOptional(),
    lastEvaluatedAt: EvaluationTimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time stamp of the last time that the lifecycle policy was run.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteLifecyclePolicyResponse')

const DeleteLifecyclePolicyRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name of the repository.' }),
    ),
  })
  .openapi({ required: ['repositoryName'], title: 'DeleteLifecyclePolicyRequest' })
  .openapi('DeleteLifecyclePolicyRequest')

const LifecyclePolicyNotFoundExceptionSchema = z.any().openapi('LifecyclePolicyNotFoundException')

const DeletePullThroughCacheRuleResponseSchema = z
  .object({
    ecrRepositoryPrefix: PullThroughCacheRuleRepositoryPrefixSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon ECR repository prefix associated with the request.' }),
    ).exactOptional(),
    upstreamRegistryUrl: UrlSchema.and(
      z
        .any()
        .openapi({
          description: 'The upstream registry URL associated with the pull through cache rule.',
        }),
    ).exactOptional(),
    createdAt: CreationTimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp associated with the pull through cache rule.' }),
    ).exactOptional(),
    registryId: RegistryIdSchema.and(
      z.any().openapi({ description: 'The registry ID associated with the request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeletePullThroughCacheRuleResponse')

const DeletePullThroughCacheRuleRequestSchema = z
  .object({
    ecrRepositoryPrefix: PullThroughCacheRuleRepositoryPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon ECR repository prefix associated with the pull through cache rule to delete.',
        }),
    ),
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry that contains the pull through cache rule. If you do not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ecrRepositoryPrefix'], title: 'DeletePullThroughCacheRuleRequest' })
  .openapi('DeletePullThroughCacheRuleRequest')

const PullThroughCacheRuleNotFoundExceptionSchema = z
  .any()
  .openapi('PullThroughCacheRuleNotFoundException')

const RegistryPolicyTextSchema = z.string().min(0).max(10240).openapi('RegistryPolicyText')

const DeleteRegistryPolicyResponseSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z.any().openapi({ description: 'The registry ID associated with the request.' }),
    ).exactOptional(),
    policyText: RegistryPolicyTextSchema.and(
      z
        .any()
        .openapi({
          description: 'The contents of the registry permissions policy that was deleted.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteRegistryPolicyResponse')

const DeleteRegistryPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteRegistryPolicyRequest' })
  .openapi('DeleteRegistryPolicyRequest')

const RegistryPolicyNotFoundExceptionSchema = z.any().openapi('RegistryPolicyNotFoundException')

const DeleteRepositoryResponseSchema = z
  .object({
    repository: RepositorySchema.and(
      z.any().openapi({ description: 'The repository that was deleted.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      repository: {
        registryId: 12345678901,
        repositoryArn: 'arn:aws:ecr:us-west-2:012345678901:repository/ubuntu',
        repositoryName: 'ubuntu',
      },
    },
    required: [],
  })
  .openapi('DeleteRepositoryResponse')

const ForceFlagSchema = z.boolean().openapi('ForceFlag')

const DeleteRepositoryRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry that contains the repository to delete. If you do not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name of the repository to delete.' }),
    ),
    force: ForceFlagSchema.and(
      z.any().openapi({ description: ' If a repository contains images, forces the deletion.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['repositoryName'], title: 'DeleteRepositoryRequest' })
  .openapi('DeleteRepositoryRequest')

const RepositoryNotEmptyExceptionSchema = z.any().openapi('RepositoryNotEmptyException')

const RepositoryPolicyTextSchema = z.string().min(0).max(10240).openapi('RepositoryPolicyText')

const DeleteRepositoryPolicyResponseSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z.any().openapi({ description: 'The registry ID associated with the request.' }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The repository name associated with the request.' }),
    ).exactOptional(),
    policyText: RepositoryPolicyTextSchema.and(
      z
        .any()
        .openapi({
          description: 'The JSON repository policy that was deleted from the repository.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { policyText: '{ ... }', registryId: 12345678901, repositoryName: 'ubuntu' },
    required: [],
  })
  .openapi('DeleteRepositoryPolicyResponse')

const DeleteRepositoryPolicyRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry that contains the repository policy to delete. If you do not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the repository that is associated with the repository policy to delete.',
        }),
    ),
  })
  .openapi({ required: ['repositoryName'], title: 'DeleteRepositoryPolicyRequest' })
  .openapi('DeleteRepositoryPolicyRequest')

const RepositoryPolicyNotFoundExceptionSchema = z.any().openapi('RepositoryPolicyNotFoundException')

const RegionSchema = z
  .string()
  .regex(/[0-9a-z-]{2,25}/)
  .min(2)
  .max(25)
  .openapi('Region')

const ReplicationStatusSchema = z
  .enum(['IN_PROGRESS', 'COMPLETE', 'FAILED'])
  .openapi('ReplicationStatus')

const ReplicationErrorSchema = z.string().openapi('ReplicationError')

const ImageReplicationStatusSchema = z
  .object({
    region: RegionSchema.and(
      z.any().openapi({ description: 'The destination Region for the image replication.' }),
    ).exactOptional(),
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry to which the image belongs.',
        }),
    ).exactOptional(),
    status: ReplicationStatusSchema.and(
      z.any().openapi({ description: 'The image replication status.' }),
    ).exactOptional(),
    failureCode: ReplicationErrorSchema.and(
      z.any().openapi({ description: 'The failure code for a replication that has failed.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The status of the replication process for an image.', required: [] })
  .openapi('ImageReplicationStatus')

const ImageReplicationStatusListSchema = z
  .array(ImageReplicationStatusSchema)
  .openapi('ImageReplicationStatusList')

const DescribeImageReplicationStatusResponseSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The repository name associated with the request.' }),
    ).exactOptional(),
    imageId: ImageIdentifierSchema.exactOptional(),
    replicationStatuses: ImageReplicationStatusListSchema.and(
      z
        .any()
        .openapi({
          description: 'The replication status details for the images in the specified repository.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeImageReplicationStatusResponse')

const DescribeImageReplicationStatusRequestSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name of the repository that the image is in.' }),
    ),
    imageId: ImageIdentifierSchema,
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry. If you do not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['repositoryName', 'imageId'],
    title: 'DescribeImageReplicationStatusRequest',
  })
  .openapi('DescribeImageReplicationStatusRequest')

const ImageNotFoundExceptionSchema = z.any().openapi('ImageNotFoundException')

const ScanStatusSchema = z
  .enum([
    'IN_PROGRESS',
    'COMPLETE',
    'FAILED',
    'UNSUPPORTED_IMAGE',
    'ACTIVE',
    'PENDING',
    'SCAN_ELIGIBILITY_EXPIRED',
    'FINDINGS_UNAVAILABLE',
  ])
  .openapi('ScanStatus')

const ScanStatusDescriptionSchema = z.string().openapi('ScanStatusDescription')

const ImageScanStatusSchema = z
  .object({
    status: ScanStatusSchema.and(
      z.any().openapi({ description: 'The current state of an image scan.' }),
    ).exactOptional(),
    description: ScanStatusDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the image scan status.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The current status of an image scan.', required: [] })
  .openapi('ImageScanStatus')

const ScanTimestampSchema = z.iso.datetime({ offset: true }).openapi('ScanTimestamp')

const VulnerabilitySourceUpdateTimestampSchema = z.iso
  .datetime({ offset: true })
  .openapi('VulnerabilitySourceUpdateTimestamp')

const SeverityCountSchema = z.int().min(0).openapi('SeverityCount')

const FindingSeverityCountsSchema = z
  .record(z.string(), SeverityCountSchema)
  .openapi('FindingSeverityCounts')

const FindingNameSchema = z.string().openapi('FindingName')

const FindingDescriptionSchema = z.string().openapi('FindingDescription')

const FindingSeveritySchema = z
  .enum(['INFORMATIONAL', 'LOW', 'MEDIUM', 'HIGH', 'CRITICAL', 'UNDEFINED'])
  .openapi('FindingSeverity')

const AttributeKeySchema = z.string().min(1).max(128).openapi('AttributeKey')

const AttributeValueSchema = z.string().min(1).max(256).openapi('AttributeValue')

const AttributeSchema = z
  .object({
    key: AttributeKeySchema.and(z.any().openapi({ description: 'The attribute key.' })),
    value: AttributeValueSchema.and(
      z.any().openapi({ description: 'The value assigned to the attribute key.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['key'],
    description: 'This data type is used in the <a>ImageScanFinding</a> data type.',
  })
  .openapi('Attribute')

const AttributeListSchema = z.array(AttributeSchema).min(0).max(50).openapi('AttributeList')

const ImageScanFindingSchema = z
  .object({
    name: FindingNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name associated with the finding, usually a CVE number.' }),
    ).exactOptional(),
    description: FindingDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the finding.' }),
    ).exactOptional(),
    uri: UrlSchema.and(
      z
        .any()
        .openapi({
          description: 'A link containing additional details about the security vulnerability.',
        }),
    ).exactOptional(),
    severity: FindingSeveritySchema.and(
      z.any().openapi({ description: 'The finding severity.' }),
    ).exactOptional(),
    attributes: AttributeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of attributes of the host from which the finding is generated.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about an image scan finding.', required: [] })
  .openapi('ImageScanFinding')

const ImageScanFindingListSchema = z.array(ImageScanFindingSchema).openapi('ImageScanFindingList')

const FindingArnSchema = z.string().openapi('FindingArn')

const DateSchema = z.iso.datetime({ offset: true }).openapi('Date')

const BaseScoreSchema = z.float64().openapi('BaseScore')

const CvssScoreSchema = z
  .object({
    baseScore: BaseScoreSchema.and(
      z.any().openapi({ description: 'The base CVSS score used for the finding.' }),
    ).exactOptional(),
    scoringVector: ScoringVectorSchema.and(
      z.any().openapi({ description: 'The vector string of the CVSS score.' }),
    ).exactOptional(),
    source: SourceSchema.and(
      z.any().openapi({ description: 'The source of the CVSS score.' }),
    ).exactOptional(),
    version: VersionSchema.and(
      z.any().openapi({ description: 'The version of CVSS used for the score.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The CVSS score for a finding.', required: [] })
  .openapi('CvssScore')

const CvssScoreListSchema = z.array(CvssScoreSchema).openapi('CvssScoreList')

const ReferenceUrlsListSchema = z.array(UrlSchema).openapi('ReferenceUrlsList')

const RelatedVulnerabilitySchema = z.string().openapi('RelatedVulnerability')

const RelatedVulnerabilitiesListSchema = z
  .array(RelatedVulnerabilitySchema)
  .openapi('RelatedVulnerabilitiesList')

const SeveritySchema = z.string().openapi('Severity')

const VulnerabilityIdSchema = z.string().openapi('VulnerabilityId')

const ArchSchema = z.string().openapi('Arch')

const EpochSchema = z.int().openapi('Epoch')

const FilePathSchema = z.string().openapi('FilePath')

const VulnerablePackageNameSchema = z.string().openapi('VulnerablePackageName')

const PackageManagerSchema = z.string().openapi('PackageManager')

const ReleaseSchema = z.string().openapi('Release')

const SourceLayerHashSchema = z.string().openapi('SourceLayerHash')

const VulnerablePackageSchema = z
  .object({
    arch: ArchSchema.and(
      z.any().openapi({ description: 'The architecture of the vulnerable package.' }),
    ).exactOptional(),
    epoch: EpochSchema.and(
      z.any().openapi({ description: 'The epoch of the vulnerable package.' }),
    ).exactOptional(),
    filePath: FilePathSchema.and(
      z.any().openapi({ description: 'The file path of the vulnerable package.' }),
    ).exactOptional(),
    name: VulnerablePackageNameSchema.and(
      z.any().openapi({ description: 'The name of the vulnerable package.' }),
    ).exactOptional(),
    packageManager: PackageManagerSchema.and(
      z.any().openapi({ description: 'The package manager of the vulnerable package.' }),
    ).exactOptional(),
    release: ReleaseSchema.and(
      z.any().openapi({ description: 'The release of the vulnerable package.' }),
    ).exactOptional(),
    sourceLayerHash: SourceLayerHashSchema.and(
      z.any().openapi({ description: 'The source layer hash of the vulnerable package.' }),
    ).exactOptional(),
    version: VersionSchema.and(
      z.any().openapi({ description: 'The version of the vulnerable package.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information on the vulnerable package identified by a finding.',
    required: [],
  })
  .openapi('VulnerablePackage')

const VulnerablePackagesListSchema = z
  .array(VulnerablePackageSchema)
  .openapi('VulnerablePackagesList')

const PackageVulnerabilityDetailsSchema = z
  .object({
    cvss: CvssScoreListSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that contains details about the CVSS score of a finding.',
        }),
    ).exactOptional(),
    referenceUrls: ReferenceUrlsListSchema.and(
      z
        .any()
        .openapi({
          description: 'One or more URLs that contain details about this vulnerability type.',
        }),
    ).exactOptional(),
    relatedVulnerabilities: RelatedVulnerabilitiesListSchema.and(
      z
        .any()
        .openapi({
          description: 'One or more vulnerabilities related to the one identified in this finding.',
        }),
    ).exactOptional(),
    source: SourceSchema.and(
      z.any().openapi({ description: 'The source of the vulnerability information.' }),
    ).exactOptional(),
    sourceUrl: UrlSchema.and(
      z.any().openapi({ description: 'A URL to the source of the vulnerability information.' }),
    ).exactOptional(),
    vendorCreatedAt: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            "The date and time that this vulnerability was first added to the vendor's database.",
        }),
    ).exactOptional(),
    vendorSeverity: SeveritySchema.and(
      z
        .any()
        .openapi({ description: 'The severity the vendor has given to this vulnerability type.' }),
    ).exactOptional(),
    vendorUpdatedAt: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time the vendor last updated this vulnerability in their database.',
        }),
    ).exactOptional(),
    vulnerabilityId: VulnerabilityIdSchema.and(
      z.any().openapi({ description: 'The ID given to this vulnerability.' }),
    ).exactOptional(),
    vulnerablePackages: VulnerablePackagesListSchema.and(
      z.any().openapi({ description: 'The packages impacted by this vulnerability.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a package vulnerability finding.', required: [] })
  .openapi('PackageVulnerabilityDetails')

const RecommendationTextSchema = z.string().openapi('RecommendationText')

const RecommendationSchema = z
  .object({
    url: UrlSchema.and(
      z.any().openapi({ description: 'The URL address to the CVE remediation recommendations.' }),
    ).exactOptional(),
    text: RecommendationTextSchema.and(
      z
        .any()
        .openapi({ description: 'The recommended course of action to remediate the finding.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Details about the recommended course of action to remediate the finding.',
    required: [],
  })
  .openapi('Recommendation')

const RemediationSchema = z
  .object({
    recommendation: RecommendationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains information about the recommended course of action to remediate the finding.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information on how to remediate a finding.', required: [] })
  .openapi('Remediation')

const AuthorSchema = z.string().openapi('Author')

const ImageTagsListSchema = z.array(ImageTagSchema).openapi('ImageTagsList')

const PlatformSchema = z.string().openapi('Platform')

const AwsEcrContainerImageDetailsSchema = z
  .object({
    architecture: ArchSchema.and(
      z.any().openapi({ description: 'The architecture of the Amazon ECR container image.' }),
    ).exactOptional(),
    author: AuthorSchema.and(
      z.any().openapi({ description: 'The image author of the Amazon ECR container image.' }),
    ).exactOptional(),
    imageHash: ImageDigestSchema.and(
      z.any().openapi({ description: 'The image hash of the Amazon ECR container image.' }),
    ).exactOptional(),
    imageTags: ImageTagsListSchema.and(
      z
        .any()
        .openapi({ description: 'The image tags attached to the Amazon ECR container image.' }),
    ).exactOptional(),
    platform: PlatformSchema.and(
      z.any().openapi({ description: 'The platform of the Amazon ECR container image.' }),
    ).exactOptional(),
    pushedAt: DateSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time the Amazon ECR container image was pushed.' }),
    ).exactOptional(),
    registry: RegistryIdSchema.and(
      z.any().openapi({ description: 'The registry the Amazon ECR container image belongs to.' }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the repository the Amazon ECR container image resides in.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The image details of the Amazon ECR container image.', required: [] })
  .openapi('AwsEcrContainerImageDetails')

const ResourceDetailsSchema = z
  .object({
    awsEcrContainerImage: AwsEcrContainerImageDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains details about the Amazon ECR container image involved in the finding.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains details about the resource involved in the finding.',
    required: [],
  })
  .openapi('ResourceDetails')

const ResourceIdSchema = z.string().openapi('ResourceId')

const TagsSchema = z.record(z.string(), TagValueSchema).openapi('Tags')

const TypeSchema = z.string().openapi('Type')

const ResourceSchema = z
  .object({
    details: ResourceDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that contains details about the resource involved in a finding.',
        }),
    ).exactOptional(),
    id: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the resource.' }),
    ).exactOptional(),
    tags: TagsSchema.and(
      z.any().openapi({ description: 'The tags attached to the resource.' }),
    ).exactOptional(),
    type: TypeSchema.and(z.any().openapi({ description: 'The type of resource.' })).exactOptional(),
  })
  .openapi({ description: 'Details about the resource involved in a finding.', required: [] })
  .openapi('Resource')

const ResourceListSchema = z.array(ResourceSchema).openapi('ResourceList')

const ScoreDetailsSchema: z.ZodType<ScoreDetailsType> = z
  .lazy(() =>
    z
      .object({
        cvss: CvssScoreDetailsSchema.and(
          z
            .any()
            .openapi({
              description:
                'An object that contains details about the CVSS score given to a finding.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description: 'Information about the Amazon Inspector score given to a finding.',
        required: [],
      }),
  )
  .openapi('ScoreDetails')

const StatusSchema = z.string().openapi('Status')

const TitleSchema = z.string().openapi('Title')

const EnhancedImageScanFindingSchema = z
  .object({
    awsAccountId: RegistryIdSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Web Services account ID associated with the image.' }),
    ).exactOptional(),
    description: FindingDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the finding.' }),
    ).exactOptional(),
    findingArn: FindingArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Number (ARN) of the finding.' }),
    ).exactOptional(),
    firstObservedAt: DateSchema.and(
      z.any().openapi({ description: 'The date and time that the finding was first observed.' }),
    ).exactOptional(),
    lastObservedAt: DateSchema.and(
      z.any().openapi({ description: 'The date and time that the finding was last observed.' }),
    ).exactOptional(),
    packageVulnerabilityDetails: PackageVulnerabilityDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that contains the details of a package vulnerability finding.',
        }),
    ).exactOptional(),
    remediation: RemediationSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that contains the details about how to remediate a finding.',
        }),
    ).exactOptional(),
    resources: ResourceListSchema.and(
      z
        .any()
        .openapi({ description: 'Contains information on the resources involved in a finding.' }),
    ).exactOptional(),
    score: ScoreSchema.and(
      z.any().openapi({ description: 'The Amazon Inspector score given to the finding.' }),
    ).exactOptional(),
    scoreDetails: ScoreDetailsSchema.and(
      z
        .any()
        .openapi({ description: 'An object that contains details of the Amazon Inspector score.' }),
    ).exactOptional(),
    severity: SeveritySchema.and(
      z.any().openapi({ description: 'The severity of the finding.' }),
    ).exactOptional(),
    status: StatusSchema.and(
      z.any().openapi({ description: 'The status of the finding.' }),
    ).exactOptional(),
    title: TitleSchema.and(
      z.any().openapi({ description: 'The title of the finding.' }),
    ).exactOptional(),
    type: TypeSchema.and(
      z.any().openapi({ description: 'The type of the finding.' }),
    ).exactOptional(),
    updatedAt: DateSchema.and(
      z.any().openapi({ description: 'The date and time the finding was last updated at.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The details of an enhanced image scan. This is returned when enhanced scanning is enabled for your private registry.',
    required: [],
  })
  .openapi('EnhancedImageScanFinding')

const EnhancedImageScanFindingListSchema = z
  .array(EnhancedImageScanFindingSchema)
  .openapi('EnhancedImageScanFindingList')

const ImageScanFindingsSchema = z
  .object({
    imageScanCompletedAt: ScanTimestampSchema.and(
      z.any().openapi({ description: 'The time of the last completed image scan.' }),
    ).exactOptional(),
    vulnerabilitySourceUpdatedAt: VulnerabilitySourceUpdateTimestampSchema.and(
      z.any().openapi({ description: 'The time when the vulnerability data was last scanned.' }),
    ).exactOptional(),
    findingSeverityCounts: FindingSeverityCountsSchema.and(
      z.any().openapi({ description: 'The image vulnerability counts, sorted by severity.' }),
    ).exactOptional(),
    findings: ImageScanFindingListSchema.and(
      z.any().openapi({ description: 'The findings from the image scan.' }),
    ).exactOptional(),
    enhancedFindings: EnhancedImageScanFindingListSchema.and(
      z
        .any()
        .openapi({
          description: 'Details about the enhanced scan findings from Amazon Inspector.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The details of an image scan.', required: [] })
  .openapi('ImageScanFindings')

const NextTokenSchema = z.string().openapi('NextToken')

const DescribeImageScanFindingsResponseSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z.any().openapi({ description: 'The registry ID associated with the request.' }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The repository name associated with the request.' }),
    ).exactOptional(),
    imageId: ImageIdentifierSchema.exactOptional(),
    imageScanStatus: ImageScanStatusSchema.and(
      z.any().openapi({ description: 'The current state of the scan.' }),
    ).exactOptional(),
    imageScanFindings: ImageScanFindingsSchema.and(
      z.any().openapi({ description: 'The information contained in the image scan findings.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>DescribeImageScanFindings</code> request. When the results of a <code>DescribeImageScanFindings</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeImageScanFindingsResponse')

const MaxResultsSchema = z.int().min(1).max(1000).openapi('MaxResults')

const DescribeImageScanFindingsRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry that contains the repository in which to describe the image scan findings for. If you do not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The repository for the image for which to describe the scan findings.',
        }),
    ),
    imageId: ImageIdentifierSchema,
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value returned from a previous paginated <code>DescribeImageScanFindings</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is null when there are no more results to return.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of image scan results returned by <code>DescribeImageScanFindings</code> in paginated output. When this parameter is used, <code>DescribeImageScanFindings</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeImageScanFindings</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 1000. If this parameter is not used, then <code>DescribeImageScanFindings</code> returns up to 100 results and a <code>nextToken</code> value, if applicable.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['repositoryName', 'imageId'], title: 'DescribeImageScanFindingsRequest' })
  .openapi('DescribeImageScanFindingsRequest')

const ScanNotFoundExceptionSchema = z.any().openapi('ScanNotFoundException')

const ImageTagListSchema = z.array(ImageTagSchema).openapi('ImageTagList')

const ImageSizeInBytesSchema = z.int().openapi('ImageSizeInBytes')

const PushTimestampSchema = z.iso.datetime({ offset: true }).openapi('PushTimestamp')

const ImageScanFindingsSummarySchema = z
  .object({
    imageScanCompletedAt: ScanTimestampSchema.and(
      z.any().openapi({ description: 'The time of the last completed image scan.' }),
    ).exactOptional(),
    vulnerabilitySourceUpdatedAt: VulnerabilitySourceUpdateTimestampSchema.and(
      z.any().openapi({ description: 'The time when the vulnerability data was last scanned.' }),
    ).exactOptional(),
    findingSeverityCounts: FindingSeverityCountsSchema.and(
      z.any().openapi({ description: 'The image vulnerability counts, sorted by severity.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A summary of the last completed image scan.', required: [] })
  .openapi('ImageScanFindingsSummary')

const RecordedPullTimestampSchema = z.iso
  .datetime({ offset: true })
  .openapi('RecordedPullTimestamp')

const ImageDetailSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry to which this image belongs.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name of the repository to which this image belongs.' }),
    ).exactOptional(),
    imageDigest: ImageDigestSchema.and(
      z.any().openapi({ description: 'The <code>sha256</code> digest of the image manifest.' }),
    ).exactOptional(),
    imageTags: ImageTagListSchema.and(
      z.any().openapi({ description: 'The list of tags associated with this image.' }),
    ).exactOptional(),
    imageSizeInBytes: ImageSizeInBytesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The size, in bytes, of the image in the repository.</p> <p>If the image is a manifest list, this will be the max size of all manifests in the list.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size, so it may return a larger image size than the image sizes returned by <a>DescribeImages</a>.</p> </note>',
        }),
    ).exactOptional(),
    imagePushedAt: PushTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, expressed in standard JavaScript date format, at which the current image was pushed to the repository. ',
        }),
    ).exactOptional(),
    imageScanStatus: ImageScanStatusSchema.and(
      z.any().openapi({ description: 'The current state of the scan.' }),
    ).exactOptional(),
    imageScanFindingsSummary: ImageScanFindingsSummarySchema.and(
      z.any().openapi({ description: 'A summary of the last completed image scan.' }),
    ).exactOptional(),
    imageManifestMediaType: MediaTypeSchema.and(
      z.any().openapi({ description: 'The media type of the image manifest.' }),
    ).exactOptional(),
    artifactMediaType: MediaTypeSchema.and(
      z.any().openapi({ description: 'The artifact media type of the image.' }),
    ).exactOptional(),
    lastRecordedPullTime: RecordedPullTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The date and time, expressed in standard JavaScript date format, when Amazon ECR recorded the last image pull.</p> <note> <p>Amazon ECR refreshes the last image pull timestamp at least once every 24 hours. For example, if you pull an image once a day then the <code>lastRecordedPullTime</code> timestamp will indicate the exact time that the image was last pulled. However, if you pull an image once an hour, because Amazon ECR refreshes the <code>lastRecordedPullTime</code> timestamp at least once every 24 hours, the result may not be the exact time that the image was last pulled.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that describes an image returned by a <a>DescribeImages</a> operation.',
    required: [],
  })
  .openapi('ImageDetail')

const ImageDetailListSchema = z.array(ImageDetailSchema).openapi('ImageDetailList')

const DescribeImagesResponseSchema = z
  .object({
    imageDetails: ImageDetailListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of <a>ImageDetail</a> objects that contain data about the image.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>DescribeImages</code> request. When the results of a <code>DescribeImages</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeImagesResponse')

const TagStatusSchema = z.enum(['TAGGED', 'UNTAGGED', 'ANY']).openapi('TagStatus')

const DescribeImagesFilterSchema = z
  .object({
    tagStatus: TagStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag status with which to filter your <a>DescribeImages</a> results. You can filter results based on whether they are <code>TAGGED</code> or <code>UNTAGGED</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object representing a filter on a <a>DescribeImages</a> operation.',
    required: [],
  })
  .openapi('DescribeImagesFilter')

const DescribeImagesRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry that contains the repository in which to describe images. If you do not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The repository that contains the images to describe.' }),
    ),
    imageIds: ImageIdentifierListSchema.and(
      z.any().openapi({ description: 'The list of image IDs for the requested repository.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value returned from a previous paginated <code>DescribeImages</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return. This option cannot be used when you specify images with <code>imageIds</code>.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of repository results returned by <code>DescribeImages</code> in paginated output. When this parameter is used, <code>DescribeImages</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeImages</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 1000. If this parameter is not used, then <code>DescribeImages</code> returns up to 100 results and a <code>nextToken</code> value, if applicable. This option cannot be used when you specify images with <code>imageIds</code>.',
        }),
    ).exactOptional(),
    filter: DescribeImagesFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'The filter key and value with which to filter your <code>DescribeImages</code> results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['repositoryName'], title: 'DescribeImagesRequest' })
  .openapi('DescribeImagesRequest')

const PullThroughCacheRuleSchema = z
  .object({
    ecrRepositoryPrefix: PullThroughCacheRuleRepositoryPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon ECR repository prefix associated with the pull through cache rule.',
        }),
    ).exactOptional(),
    upstreamRegistryUrl: UrlSchema.and(
      z
        .any()
        .openapi({
          description: 'The upstream registry URL associated with the pull through cache rule.',
        }),
    ).exactOptional(),
    createdAt: CreationTimestampSchema.and(
      z.any().openapi({ description: 'The date and time the pull through cache was created.' }),
    ).exactOptional(),
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry the pull through cache rule is associated with.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The details of a pull through cache rule.', required: [] })
  .openapi('PullThroughCacheRule')

const PullThroughCacheRuleListSchema = z
  .array(PullThroughCacheRuleSchema)
  .openapi('PullThroughCacheRuleList')

const DescribePullThroughCacheRulesResponseSchema = z
  .object({
    pullThroughCacheRules: PullThroughCacheRuleListSchema.and(
      z.any().openapi({ description: 'The details of the pull through cache rules.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>DescribePullThroughCacheRulesRequest</code> request. When the results of a <code>DescribePullThroughCacheRulesRequest</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribePullThroughCacheRulesResponse')

const PullThroughCacheRuleRepositoryPrefixListSchema = z
  .array(PullThroughCacheRuleRepositoryPrefixSchema)
  .min(1)
  .max(100)
  .openapi('PullThroughCacheRuleRepositoryPrefixList')

const DescribePullThroughCacheRulesRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry to return the pull through cache rules for. If you do not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
    ecrRepositoryPrefixes: PullThroughCacheRuleRepositoryPrefixListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon ECR repository prefixes associated with the pull through cache rules to return. If no repository prefix value is specified, all pull through cache rules are returned.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value returned from a previous paginated <code>DescribePullThroughCacheRulesRequest</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is null when there are no more results to return.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of pull through cache rules returned by <code>DescribePullThroughCacheRulesRequest</code> in paginated output. When this parameter is used, <code>DescribePullThroughCacheRulesRequest</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribePullThroughCacheRulesRequest</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 1000. If this parameter is not used, then <code>DescribePullThroughCacheRulesRequest</code> returns up to 100 results and a <code>nextToken</code> value, if applicable.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribePullThroughCacheRulesRequest', required: [] })
  .openapi('DescribePullThroughCacheRulesRequest')

const ReplicationDestinationSchema = z
  .object({
    region: RegionSchema.and(z.any().openapi({ description: 'The Region to replicate to.' })),
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID of the Amazon ECR private registry to replicate to. When configuring cross-Region replication within your own registry, specify your own account ID.',
        }),
    ),
  })
  .openapi({
    required: ['region', 'registryId'],
    description: 'An array of objects representing the destination for a replication rule.',
  })
  .openapi('ReplicationDestination')

const ReplicationDestinationListSchema = z
  .array(ReplicationDestinationSchema)
  .min(0)
  .max(25)
  .openapi('ReplicationDestinationList')

const RepositoryFilterValueSchema = z
  .string()
  .regex(/^(?:[a-z0-9]+(?:[._-][a-z0-9]*)*\/)*[a-z0-9]*(?:[._-][a-z0-9]*)*$/)
  .min(2)
  .max(256)
  .openapi('RepositoryFilterValue')

const RepositoryFilterTypeSchema = z.literal('PREFIX_MATCH').openapi('RepositoryFilterType')

const RepositoryFilterSchema = z
  .object({
    filter: RepositoryFilterValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The repository filter details. When the <code>PREFIX_MATCH</code> filter type is specified, this value is required and should be the repository name prefix to configure replication for.',
        }),
    ),
    filterType: RepositoryFilterTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The repository filter type. The only supported value is <code>PREFIX_MATCH</code>, which is a repository name prefix specified with the <code>filter</code> parameter.',
        }),
    ),
  })
  .openapi({
    required: ['filter', 'filterType'],
    description:
      'The filter settings used with image replication. Specifying a repository filter to a replication rule provides a method for controlling which repositories in a private registry are replicated. If no repository filter is specified, all images in the repository are replicated.',
  })
  .openapi('RepositoryFilter')

const RepositoryFilterListSchema = z
  .array(RepositoryFilterSchema)
  .min(1)
  .max(100)
  .openapi('RepositoryFilterList')

const ReplicationRuleSchema = z
  .object({
    destinations: ReplicationDestinationListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of objects representing the destination for a replication rule.',
        }),
    ),
    repositoryFilters: RepositoryFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects representing the filters for a replication rule. Specifying a repository filter for a replication rule provides a method for controlling which repositories in a private registry are replicated.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['destinations'],
    description:
      'An array of objects representing the replication destinations and repository filters for a replication configuration.',
  })
  .openapi('ReplicationRule')

const ReplicationRuleListSchema = z
  .array(ReplicationRuleSchema)
  .min(0)
  .max(10)
  .openapi('ReplicationRuleList')

const ReplicationConfigurationSchema = z
  .object({
    rules: ReplicationRuleListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects representing the replication destinations and repository filters for a replication configuration.',
        }),
    ),
  })
  .openapi({ required: ['rules'], description: 'The replication configuration for a registry.' })
  .openapi('ReplicationConfiguration')

const DescribeRegistryResponseSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z.any().openapi({ description: 'The ID of the registry.' }),
    ).exactOptional(),
    replicationConfiguration: ReplicationConfigurationSchema.and(
      z.any().openapi({ description: 'The replication configuration for the registry.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeRegistryResponse')

const DescribeRegistryRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeRegistryRequest' })
  .openapi('DescribeRegistryRequest')

const RepositoryListSchema = z.array(RepositorySchema).openapi('RepositoryList')

const DescribeRepositoriesResponseSchema = z
  .object({
    repositories: RepositoryListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of repository objects corresponding to valid repositories.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>DescribeRepositories</code> request. When the results of a <code>DescribeRepositories</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      repositories: [
        {
          registryId: 12345678910,
          repositoryArn: 'arn:aws:ecr:us-west-2:012345678910:repository/ubuntu',
          repositoryName: 'ubuntu',
        },
        {
          registryId: 12345678910,
          repositoryArn: 'arn:aws:ecr:us-west-2:012345678910:repository/test',
          repositoryName: 'test',
        },
      ],
    },
    required: [],
  })
  .openapi('DescribeRepositoriesResponse')

const RepositoryNameListSchema = z
  .array(RepositoryNameSchema)
  .min(1)
  .max(100)
  .openapi('RepositoryNameList')

const DescribeRepositoriesRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry that contains the repositories to be described. If you do not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
    repositoryNames: RepositoryNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of repositories to describe. If this parameter is omitted, then all repositories in a registry are described.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeRepositories</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return. This option cannot be used when you specify repositories with <code>repositoryNames</code>.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of repository results returned by <code>DescribeRepositories</code> in paginated output. When this parameter is used, <code>DescribeRepositories</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeRepositories</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 1000. If this parameter is not used, then <code>DescribeRepositories</code> returns up to 100 results and a <code>nextToken</code> value, if applicable. This option cannot be used when you specify repositories with <code>repositoryNames</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeRepositoriesRequest', required: [] })
  .openapi('DescribeRepositoriesRequest')

const Base64Schema = z.string().regex(/^\S+$/).openapi('Base64')

const ExpirationTimestampSchema = z.iso.datetime({ offset: true }).openapi('ExpirationTimestamp')

const ProxyEndpointSchema = z.string().openapi('ProxyEndpoint')

const AuthorizationDataSchema = z
  .object({
    authorizationToken: Base64Schema.and(
      z
        .any()
        .openapi({
          description:
            'A base64-encoded string that contains authorization data for the specified Amazon ECR registry. When the string is decoded, it is presented in the format <code>user:password</code> for private registry authentication using <code>docker login</code>.',
        }),
    ).exactOptional(),
    expiresAt: ExpirationTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix time in seconds and milliseconds when the authorization token expires. Authorization tokens are valid for 12 hours.',
        }),
    ).exactOptional(),
    proxyEndpoint: ProxyEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The registry URL to use for this authorization token in a <code>docker login</code> command. The Amazon ECR registry URL format is <code>https://aws_account_id.dkr.ecr.region.amazonaws.com</code>. For example, <code>https://012345678910.dkr.ecr.us-east-1.amazonaws.com</code>.. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object representing authorization data for an Amazon ECR registry.',
    required: [],
  })
  .openapi('AuthorizationData')

const AuthorizationDataListSchema = z
  .array(AuthorizationDataSchema)
  .openapi('AuthorizationDataList')

const GetAuthorizationTokenResponseSchema = z
  .object({
    authorizationData: AuthorizationDataListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of authorization token data objects that correspond to the <code>registryIds</code> values in the request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      authorizationData: [
        {
          authorizationToken: 'QVdTOkN...',
          expiresAt: '1470951892432',
          proxyEndpoint: 'https://012345678901.dkr.ecr.us-west-2.amazonaws.com',
        },
      ],
    },
    required: [],
  })
  .openapi('GetAuthorizationTokenResponse')

const GetAuthorizationTokenRegistryIdListSchema = z
  .array(RegistryIdSchema)
  .min(1)
  .max(10)
  .openapi('GetAuthorizationTokenRegistryIdList')

const GetAuthorizationTokenRequestSchema = z
  .object({
    registryIds: GetAuthorizationTokenRegistryIdListSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            "A list of Amazon Web Services account IDs that are associated with the registries for which to get AuthorizationData objects. If you do not specify a registry, the default registry is assumed.This field is deprecated. The returned authorization token can be used to access any Amazon ECR registry that the IAM principal has access to, specifying a registry ID doesn't change the permissions scope of the authorization token.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetAuthorizationTokenRequest', required: [] })
  .openapi('GetAuthorizationTokenRequest')

const GetDownloadUrlForLayerResponseSchema = z
  .object({
    downloadUrl: UrlSchema.and(
      z
        .any()
        .openapi({ description: 'The pre-signed Amazon S3 download URL for the requested layer.' }),
    ).exactOptional(),
    layerDigest: LayerDigestSchema.and(
      z.any().openapi({ description: 'The digest of the image layer to download.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDownloadUrlForLayerResponse')

const GetDownloadUrlForLayerRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry that contains the image layer to download. If you do not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the repository that is associated with the image layer to download.',
        }),
    ),
    layerDigest: LayerDigestSchema.and(
      z.any().openapi({ description: 'The digest of the image layer to download.' }),
    ),
  })
  .openapi({ required: ['repositoryName', 'layerDigest'], title: 'GetDownloadUrlForLayerRequest' })
  .openapi('GetDownloadUrlForLayerRequest')

const LayersNotFoundExceptionSchema = z.any().openapi('LayersNotFoundException')

const LayerInaccessibleExceptionSchema = z.any().openapi('LayerInaccessibleException')

const GetLifecyclePolicyResponseSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z.any().openapi({ description: 'The registry ID associated with the request.' }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The repository name associated with the request.' }),
    ).exactOptional(),
    lifecyclePolicyText: LifecyclePolicyTextSchema.and(
      z.any().openapi({ description: 'The JSON lifecycle policy text.' }),
    ).exactOptional(),
    lastEvaluatedAt: EvaluationTimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time stamp of the last time that the lifecycle policy was run.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLifecyclePolicyResponse')

const GetLifecyclePolicyRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name of the repository.' }),
    ),
  })
  .openapi({ required: ['repositoryName'], title: 'GetLifecyclePolicyRequest' })
  .openapi('GetLifecyclePolicyRequest')

const LifecyclePolicyPreviewStatusSchema = z
  .enum(['IN_PROGRESS', 'COMPLETE', 'EXPIRED', 'FAILED'])
  .openapi('LifecyclePolicyPreviewStatus')

const ImageActionTypeSchema = z.literal('EXPIRE').openapi('ImageActionType')

const LifecyclePolicyRuleActionSchema = z
  .object({
    type: ImageActionTypeSchema.and(
      z.any().openapi({ description: 'The type of action to be taken.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The type of action to be taken.', required: [] })
  .openapi('LifecyclePolicyRuleAction')

const LifecyclePolicyRulePrioritySchema = z.int().min(1).openapi('LifecyclePolicyRulePriority')

const LifecyclePolicyPreviewResultSchema = z
  .object({
    imageTags: ImageTagListSchema.and(
      z.any().openapi({ description: 'The list of tags associated with this image.' }),
    ).exactOptional(),
    imageDigest: ImageDigestSchema.and(
      z.any().openapi({ description: 'The <code>sha256</code> digest of the image manifest.' }),
    ).exactOptional(),
    imagePushedAt: PushTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, expressed in standard JavaScript date format, at which the current image was pushed to the repository.',
        }),
    ).exactOptional(),
    action: LifecyclePolicyRuleActionSchema.and(
      z.any().openapi({ description: 'The type of action to be taken.' }),
    ).exactOptional(),
    appliedRulePriority: LifecyclePolicyRulePrioritySchema.and(
      z.any().openapi({ description: 'The priority of the applied rule.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The result of the lifecycle policy preview.', required: [] })
  .openapi('LifecyclePolicyPreviewResult')

const LifecyclePolicyPreviewResultListSchema = z
  .array(LifecyclePolicyPreviewResultSchema)
  .openapi('LifecyclePolicyPreviewResultList')

const ImageCountSchema = z.int().min(0).openapi('ImageCount')

const LifecyclePolicyPreviewSummarySchema = z
  .object({
    expiringImageTotalCount: ImageCountSchema.and(
      z.any().openapi({ description: 'The number of expiring images.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The summary of the lifecycle policy preview request.', required: [] })
  .openapi('LifecyclePolicyPreviewSummary')

const GetLifecyclePolicyPreviewResponseSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z.any().openapi({ description: 'The registry ID associated with the request.' }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The repository name associated with the request.' }),
    ).exactOptional(),
    lifecyclePolicyText: LifecyclePolicyTextSchema.and(
      z.any().openapi({ description: 'The JSON lifecycle policy text.' }),
    ).exactOptional(),
    status: LifecyclePolicyPreviewStatusSchema.and(
      z.any().openapi({ description: 'The status of the lifecycle policy preview request.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>GetLifecyclePolicyPreview</code> request. When the results of a <code>GetLifecyclePolicyPreview</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
    previewResults: LifecyclePolicyPreviewResultListSchema.and(
      z.any().openapi({ description: 'The results of the lifecycle policy preview request.' }),
    ).exactOptional(),
    summary: LifecyclePolicyPreviewSummarySchema.and(
      z
        .any()
        .openapi({ description: 'The list of images that is returned as a result of the action.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLifecyclePolicyPreviewResponse')

const LifecyclePreviewMaxResultsSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('LifecyclePreviewMaxResults')

const LifecyclePolicyPreviewFilterSchema = z
  .object({
    tagStatus: TagStatusSchema.and(
      z.any().openapi({ description: 'The tag status of the image.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The filter for the lifecycle policy preview.', required: [] })
  .openapi('LifecyclePolicyPreviewFilter')

const GetLifecyclePolicyPreviewRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name of the repository.' }),
    ),
    imageIds: ImageIdentifierListSchema.and(
      z.any().openapi({ description: 'The list of imageIDs to be included.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value returned from a previous paginated&#x2028; <code>GetLifecyclePolicyPreviewRequest</code> request where <code>maxResults</code> was used and the&#x2028; results exceeded the value of that parameter. Pagination continues from the end of the&#x2028; previous results that returned the <code>nextToken</code> value. This value is&#x2028; <code>null</code> when there are no more results to return. This option cannot be used when you specify images with <code>imageIds</code>.',
        }),
    ).exactOptional(),
    maxResults: LifecyclePreviewMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of repository results returned by <code>GetLifecyclePolicyPreviewRequest</code> in&#x2028; paginated output. When this parameter is used, <code>GetLifecyclePolicyPreviewRequest</code> only returns&#x2028; <code>maxResults</code> results in a single page along with a <code>nextToken</code>&#x2028; response element. The remaining results of the initial request can be seen by sending&#x2028; another <code>GetLifecyclePolicyPreviewRequest</code> request with the returned <code>nextToken</code>&#x2028; value. This value can be between 1 and 1000. If this&#x2028; parameter is not used, then <code>GetLifecyclePolicyPreviewRequest</code> returns up to&#x2028; 100 results and a <code>nextToken</code> value, if&#x2028; applicable. This option cannot be used when you specify images with <code>imageIds</code>.',
        }),
    ).exactOptional(),
    filter: LifecyclePolicyPreviewFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional parameter that filters results based on image tag status and all tags, if tagged.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['repositoryName'], title: 'GetLifecyclePolicyPreviewRequest' })
  .openapi('GetLifecyclePolicyPreviewRequest')

const LifecyclePolicyPreviewNotFoundExceptionSchema = z
  .any()
  .openapi('LifecyclePolicyPreviewNotFoundException')

const GetRegistryPolicyResponseSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z.any().openapi({ description: 'The ID of the registry.' }),
    ).exactOptional(),
    policyText: RegistryPolicyTextSchema.and(
      z.any().openapi({ description: 'The JSON text of the permissions policy for a registry.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRegistryPolicyResponse')

const GetRegistryPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'GetRegistryPolicyRequest' })
  .openapi('GetRegistryPolicyRequest')

const ScanTypeSchema = z.enum(['BASIC', 'ENHANCED']).openapi('ScanType')

const RegistryScanningRuleSchema = z
  .object({
    scanFrequency: ScanFrequencySchema.and(
      z
        .any()
        .openapi({
          description:
            'The frequency that scans are performed at for a private registry. When the <code>ENHANCED</code> scan type is specified, the supported scan frequencies are <code>CONTINUOUS_SCAN</code> and <code>SCAN_ON_PUSH</code>. When the <code>BASIC</code> scan type is specified, the <code>SCAN_ON_PUSH</code> and <code>MANUAL</code> scan frequencies are supported.',
        }),
    ),
    repositoryFilters: ScanningRepositoryFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The repository filters associated with the scanning configuration for a private registry.',
        }),
    ),
  })
  .openapi({
    required: ['scanFrequency', 'repositoryFilters'],
    description: 'The details of a scanning rule for a private registry.',
  })
  .openapi('RegistryScanningRule')

const RegistryScanningRuleListSchema = z
  .array(RegistryScanningRuleSchema)
  .min(0)
  .max(2)
  .openapi('RegistryScanningRuleList')

const RegistryScanningConfigurationSchema = z
  .object({
    scanType: ScanTypeSchema.and(
      z.any().openapi({ description: 'The type of scanning configured for the registry.' }),
    ).exactOptional(),
    rules: RegistryScanningRuleListSchema.and(
      z.any().openapi({ description: 'The scanning rules associated with the registry.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The scanning configuration for a private registry.', required: [] })
  .openapi('RegistryScanningConfiguration')

const GetRegistryScanningConfigurationResponseSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z.any().openapi({ description: 'The ID of the registry.' }),
    ).exactOptional(),
    scanningConfiguration: RegistryScanningConfigurationSchema.and(
      z.any().openapi({ description: 'The scanning configuration for the registry.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRegistryScanningConfigurationResponse')

const GetRegistryScanningConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'GetRegistryScanningConfigurationRequest' })
  .openapi('GetRegistryScanningConfigurationRequest')

const GetRepositoryPolicyResponseSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z.any().openapi({ description: 'The registry ID associated with the request.' }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The repository name associated with the request.' }),
    ).exactOptional(),
    policyText: RepositoryPolicyTextSchema.and(
      z
        .any()
        .openapi({
          description: 'The JSON repository policy text associated with the repository.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      policyText:
        '{\n  "Version" : "2008-10-17",\n  "Statement" : [ {\n    "Sid" : "new statement",\n    "Effect" : "Allow",\n    "Principal" : {\n     "AWS" : "arn:aws:iam::012345678901:role/CodeDeployDemo"\n    },\n"Action" : [ "ecr:GetDownloadUrlForLayer", "ecr:BatchGetImage", "ecr:BatchCheckLayerAvailability" ]\n } ]\n}',
      registryId: 12345678901,
      repositoryName: 'ubuntu',
    },
    required: [],
  })
  .openapi('GetRepositoryPolicyResponse')

const GetRepositoryPolicyRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name of the repository with the policy to retrieve.' }),
    ),
  })
  .openapi({ required: ['repositoryName'], title: 'GetRepositoryPolicyRequest' })
  .openapi('GetRepositoryPolicyRequest')

const PartSizeSchema = z.int().min(0).openapi('PartSize')

const InitiateLayerUploadResponseSchema = z
  .object({
    uploadId: UploadIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The upload ID for the layer upload. This parameter is passed to further <a>UploadLayerPart</a> and <a>CompleteLayerUpload</a> operations.',
        }),
    ).exactOptional(),
    partSize: PartSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The size, in bytes, that Amazon ECR expects future layer part uploads to be.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InitiateLayerUploadResponse')

const InitiateLayerUploadRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry to which you intend to upload layers. If you do not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the repository to which you intend to upload layers.',
        }),
    ),
  })
  .openapi({ required: ['repositoryName'], title: 'InitiateLayerUploadRequest' })
  .openapi('InitiateLayerUploadRequest')

const ListImagesResponseSchema = z
  .object({
    imageIds: ImageIdentifierListSchema.and(
      z.any().openapi({ description: 'The list of image IDs for the requested repository.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>ListImages</code> request. When the results of a <code>ListImages</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      imageIds: [
        {
          imageDigest: 'sha256:764f63476bdff6d83a09ba2a818f0d35757063724a9ac3ba5019c56f74ebf42a',
          imageTag: 'precise',
        },
      ],
    },
    required: [],
  })
  .openapi('ListImagesResponse')

const ListImagesFilterSchema = z
  .object({
    tagStatus: TagStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag status with which to filter your <a>ListImages</a> results. You can filter results based on whether they are <code>TAGGED</code> or <code>UNTAGGED</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object representing a filter on a <a>ListImages</a> operation.',
    required: [],
  })
  .openapi('ListImagesFilter')

const ListImagesRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry that contains the repository in which to list images. If you do not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The repository with image IDs to be listed.' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <code>nextToken</code> value returned from a previous paginated <code>ListImages</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of image results returned by <code>ListImages</code> in paginated output. When this parameter is used, <code>ListImages</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListImages</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 1000. If this parameter is not used, then <code>ListImages</code> returns up to 100 results and a <code>nextToken</code> value, if applicable.',
        }),
    ).exactOptional(),
    filter: ListImagesFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'The filter key and value with which to filter your <code>ListImages</code> results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['repositoryName'], title: 'ListImagesRequest' })
  .openapi('ListImagesRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags for the resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ListTagsForResourceRequestSchema = z
  .object({
    resourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the only supported resource is an Amazon ECR repository.',
        }),
    ),
  })
  .openapi({ required: ['resourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const PutImageResponseSchema = z
  .object({
    image: ImageSchema.and(
      z.any().openapi({ description: 'Details of the image uploaded.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutImageResponse')

const PutImageRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry that contains the repository in which to put the image. If you do not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name of the repository in which to put the image.' }),
    ),
    imageManifest: ImageManifestSchema.and(
      z
        .any()
        .openapi({ description: 'The image manifest corresponding to the image to be uploaded.' }),
    ),
    imageManifestMediaType: MediaTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The media type of the image manifest. If you push an image manifest that does not contain the <code>mediaType</code> field, you must specify the <code>imageManifestMediaType</code> in the request.',
        }),
    ).exactOptional(),
    imageTag: ImageTagSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag to associate with the image. This parameter is required for images that use the Docker Image Manifest V2 Schema 2 or Open Container Initiative (OCI) formats.',
        }),
    ).exactOptional(),
    imageDigest: ImageDigestSchema.and(
      z
        .any()
        .openapi({
          description: 'The image digest of the image manifest corresponding to the image.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['repositoryName', 'imageManifest'], title: 'PutImageRequest' })
  .openapi('PutImageRequest')

const ImageAlreadyExistsExceptionSchema = z.any().openapi('ImageAlreadyExistsException')

const ReferencedImagesNotFoundExceptionSchema = z.any().openapi('ReferencedImagesNotFoundException')

const ImageTagAlreadyExistsExceptionSchema = z.any().openapi('ImageTagAlreadyExistsException')

const ImageDigestDoesNotMatchExceptionSchema = z.any().openapi('ImageDigestDoesNotMatchException')

const PutImageScanningConfigurationResponseSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z.any().openapi({ description: 'The registry ID associated with the request.' }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The repository name associated with the request.' }),
    ).exactOptional(),
    imageScanningConfiguration: ImageScanningConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'The image scanning configuration setting for the repository.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutImageScanningConfigurationResponse')

const PutImageScanningConfigurationRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry that contains the repository in which to update the image scanning configuration setting. If you do not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the repository in which to update the image scanning configuration setting.',
        }),
    ),
    imageScanningConfiguration: ImageScanningConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The image scanning configuration for the repository. This setting determines whether images are scanned for known vulnerabilities after being pushed to the repository.',
        }),
    ),
  })
  .openapi({
    required: ['repositoryName', 'imageScanningConfiguration'],
    title: 'PutImageScanningConfigurationRequest',
  })
  .openapi('PutImageScanningConfigurationRequest')

const PutImageTagMutabilityResponseSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z.any().openapi({ description: 'The registry ID associated with the request.' }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The repository name associated with the request.' }),
    ).exactOptional(),
    imageTagMutability: ImageTagMutabilitySchema.and(
      z.any().openapi({ description: 'The image tag mutability setting for the repository.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutImageTagMutabilityResponse')

const PutImageTagMutabilityRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry that contains the repository in which to update the image tag mutability settings. If you do not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the repository in which to update the image tag mutability settings.',
        }),
    ),
    imageTagMutability: ImageTagMutabilitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag mutability setting for the repository. If <code>MUTABLE</code> is specified, image tags can be overwritten. If <code>IMMUTABLE</code> is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.',
        }),
    ),
  })
  .openapi({
    required: ['repositoryName', 'imageTagMutability'],
    title: 'PutImageTagMutabilityRequest',
  })
  .openapi('PutImageTagMutabilityRequest')

const PutLifecyclePolicyResponseSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z.any().openapi({ description: 'The registry ID associated with the request.' }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The repository name associated with the request.' }),
    ).exactOptional(),
    lifecyclePolicyText: LifecyclePolicyTextSchema.and(
      z.any().openapi({ description: 'The JSON repository policy text.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutLifecyclePolicyResponse')

const PutLifecyclePolicyRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry that contains the repository. If you do&#x2028; not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name of the repository to receive the policy.' }),
    ),
    lifecyclePolicyText: LifecyclePolicyTextSchema.and(
      z
        .any()
        .openapi({ description: 'The JSON repository policy text to apply to the repository.' }),
    ),
  })
  .openapi({
    required: ['repositoryName', 'lifecyclePolicyText'],
    title: 'PutLifecyclePolicyRequest',
  })
  .openapi('PutLifecyclePolicyRequest')

const PutRegistryPolicyResponseSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z.any().openapi({ description: 'The registry ID.' }),
    ).exactOptional(),
    policyText: RegistryPolicyTextSchema.and(
      z.any().openapi({ description: 'The JSON policy text for your registry.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutRegistryPolicyResponse')

const PutRegistryPolicyRequestSchema = z
  .object({
    policyText: RegistryPolicyTextSchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON policy text to apply to your registry. The policy text follows the same format as IAM policy text. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html">Registry permissions</a> in the <i>Amazon Elastic Container Registry User Guide</i>.',
        }),
    ),
  })
  .openapi({ required: ['policyText'], title: 'PutRegistryPolicyRequest' })
  .openapi('PutRegistryPolicyRequest')

const PutRegistryScanningConfigurationResponseSchema = z
  .object({
    registryScanningConfiguration: RegistryScanningConfigurationSchema.and(
      z.any().openapi({ description: 'The scanning configuration for your registry.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutRegistryScanningConfigurationResponse')

const PutRegistryScanningConfigurationRequestSchema = z
  .object({
    scanType: ScanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scanning type to set for the registry.</p> <p>When a registry scanning configuration is not defined, by default the <code>BASIC</code> scan type is used. When basic scanning is used, you may specify filters to determine which individual repositories, or all repositories, are scanned when new images are pushed to those repositories. Alternatively, you can do manual scans of images with basic scanning.</p> <p>When the <code>ENHANCED</code> scan type is set, Amazon Inspector provides automated vulnerability scanning. You may choose between continuous scanning or scan on push and you may specify filters to determine which individual repositories, or all repositories, are scanned.</p>',
        }),
    ).exactOptional(),
    rules: RegistryScanningRuleListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The scanning rules to use for the registry. A scanning rule is used to determine which repository filters are used and at what frequency scanning will occur.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'PutRegistryScanningConfigurationRequest', required: [] })
  .openapi('PutRegistryScanningConfigurationRequest')

const PutReplicationConfigurationResponseSchema = z
  .object({
    replicationConfiguration: ReplicationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The contents of the replication configuration for the registry.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutReplicationConfigurationResponse')

const PutReplicationConfigurationRequestSchema = z
  .object({
    replicationConfiguration: ReplicationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'An object representing the replication configuration for a registry.',
        }),
    ),
  })
  .openapi({ required: ['replicationConfiguration'], title: 'PutReplicationConfigurationRequest' })
  .openapi('PutReplicationConfigurationRequest')

const SetRepositoryPolicyResponseSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z.any().openapi({ description: 'The registry ID associated with the request.' }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The repository name associated with the request.' }),
    ).exactOptional(),
    policyText: RepositoryPolicyTextSchema.and(
      z
        .any()
        .openapi({ description: 'The JSON repository policy text applied to the repository.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SetRepositoryPolicyResponse')

const SetRepositoryPolicyRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name of the repository to receive the policy.' }),
    ),
    policyText: RepositoryPolicyTextSchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON repository policy text to apply to the repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policy-examples.html">Amazon ECR repository policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.',
        }),
    ),
    force: ForceFlagSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the policy you are attempting to set on a repository policy would prevent you from setting another policy in the future, you must force the <a>SetRepositoryPolicy</a> operation. This is intended to prevent accidental repository lock outs.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['repositoryName', 'policyText'], title: 'SetRepositoryPolicyRequest' })
  .openapi('SetRepositoryPolicyRequest')

const StartImageScanResponseSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z.any().openapi({ description: 'The registry ID associated with the request.' }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The repository name associated with the request.' }),
    ).exactOptional(),
    imageId: ImageIdentifierSchema.exactOptional(),
    imageScanStatus: ImageScanStatusSchema.and(
      z.any().openapi({ description: 'The current state of the scan.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartImageScanResponse')

const StartImageScanRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry that contains the repository in which to start an image scan request. If you do not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the repository that contains the images to scan.' }),
    ),
    imageId: ImageIdentifierSchema,
  })
  .openapi({ required: ['repositoryName', 'imageId'], title: 'StartImageScanRequest' })
  .openapi('StartImageScanRequest')

const UnsupportedImageTypeExceptionSchema = z.any().openapi('UnsupportedImageTypeException')

const StartLifecyclePolicyPreviewResponseSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z.any().openapi({ description: 'The registry ID associated with the request.' }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The repository name associated with the request.' }),
    ).exactOptional(),
    lifecyclePolicyText: LifecyclePolicyTextSchema.and(
      z.any().openapi({ description: 'The JSON repository policy text.' }),
    ).exactOptional(),
    status: LifecyclePolicyPreviewStatusSchema.and(
      z.any().openapi({ description: 'The status of the lifecycle policy preview request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartLifecyclePolicyPreviewResponse')

const StartLifecyclePolicyPreviewRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name of the repository to be evaluated.' }),
    ),
    lifecyclePolicyText: LifecyclePolicyTextSchema.and(
      z
        .any()
        .openapi({
          description:
            'The policy to be evaluated against. If you do not specify a policy, the current policy for the repository is used.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['repositoryName'], title: 'StartLifecyclePolicyPreviewRequest' })
  .openapi('StartLifecyclePolicyPreviewRequest')

const LifecyclePolicyPreviewInProgressExceptionSchema = z
  .any()
  .openapi('LifecyclePolicyPreviewInProgressException')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    resourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the the resource to which to add tags. Currently, the only supported resource is an Amazon ECR repository.',
        }),
    ),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.',
        }),
    ),
  })
  .openapi({ required: ['resourceArn', 'tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    resourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource from which to remove tags. Currently, the only supported resource is an Amazon ECR repository.',
        }),
    ),
    tagKeys: TagKeyListSchema.and(
      z.any().openapi({ description: 'The keys of the tags to be removed.' }),
    ),
  })
  .openapi({ required: ['resourceArn', 'tagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UploadLayerPartResponseSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z.any().openapi({ description: 'The registry ID associated with the request.' }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The repository name associated with the request.' }),
    ).exactOptional(),
    uploadId: UploadIdSchema.and(
      z.any().openapi({ description: 'The upload ID associated with the request.' }),
    ).exactOptional(),
    lastByteReceived: PartSizeSchema.and(
      z
        .any()
        .openapi({ description: 'The integer value of the last byte received in the request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UploadLayerPartResponse')

const LayerPartBlobSchema = z.string().min(0).max(20971520).openapi('LayerPartBlob')

const UploadLayerPartRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the registry to which you are uploading layer parts. If you do not specify a registry, the default registry is assumed.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the repository to which you are uploading layer parts.',
        }),
    ),
    uploadId: UploadIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The upload ID from a previous <a>InitiateLayerUpload</a> operation to associate with the layer part upload.',
        }),
    ),
    partFirstByte: PartSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The position of the first byte of the layer part witin the overall image layer.',
        }),
    ),
    partLastByte: PartSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The position of the last byte of the layer part within the overall image layer.',
        }),
    ),
    layerPartBlob: LayerPartBlobSchema.and(
      z.any().openapi({ description: 'The base64-encoded layer part payload.' }),
    ),
  })
  .openapi({
    required: ['repositoryName', 'uploadId', 'partFirstByte', 'partLastByte', 'layerPartBlob'],
    title: 'UploadLayerPartRequest',
  })
  .openapi('UploadLayerPartRequest')

const InvalidLayerPartExceptionSchema = z.any().openapi('InvalidLayerPartException')

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

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921BatchCheckLayerAvailabilityRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability',
    description:
      '<p>Checks the availability of one or more image layers in a repository.</p> <p>When an image is pushed to a repository, each image layer is checked to verify if it has been uploaded before. If it has been uploaded, then the image layer is skipped.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>',
    operationId: 'BatchCheckLayerAvailability',
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
          .literal('AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: BatchCheckLayerAvailabilityRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: BatchCheckLayerAvailabilityResponseSchema } },
      },
      480: {
        description: 'RepositoryNotFoundException',
        content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'ServerException',
        content: { 'application/json': { schema: ServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921BatchDeleteImageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage',
  description:
    "<p>Deletes a list of specified images within a repository. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository.</p> <p>You can completely delete an image (and all of its tags) by specifying the image's digest in your request.</p>",
  operationId: 'BatchDeleteImage',
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
        .literal('AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchDeleteImageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchDeleteImageResponseSchema } },
    },
    480: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'RepositoryNotFoundException',
      content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetImageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetImage',
  description:
    '<p>Gets detailed information for an image. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>When an image is pulled, the BatchGetImage API is called once to retrieve the image manifest.</p>',
  operationId: 'BatchGetImage',
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
        .literal('AmazonEC2ContainerRegistry_V20150921.BatchGetImage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AmazonEC2ContainerRegistry_V20150921.BatchGetImage'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchGetImageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetImageResponseSchema } },
    },
    480: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'RepositoryNotFoundException',
      content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetRepositoryScanningConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration',
    description: 'Gets the scanning configuration for one or more repositories.',
    operationId: 'BatchGetRepositoryScanningConfiguration',
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
          .literal('AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration',
                ],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: BatchGetRepositoryScanningConfigurationRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: BatchGetRepositoryScanningConfigurationResponseSchema },
        },
      },
      480: {
        description: 'ServerException',
        content: { 'application/json': { schema: ServerExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'RepositoryNotFoundException',
        content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
      },
      483: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921CompleteLayerUploadRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload',
    description:
      '<p>Informs Amazon ECR that the image layer upload has completed for a specified registry, repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of the image layer for data validation purposes.</p> <p>When an image is pushed, the CompleteLayerUpload API is called once per each new image layer to verify that the upload has completed.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>',
    operationId: 'CompleteLayerUpload',
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
          .literal('AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CompleteLayerUploadRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CompleteLayerUploadResponseSchema } },
      },
      480: {
        description: 'ServerException',
        content: { 'application/json': { schema: ServerExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'RepositoryNotFoundException',
        content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
      },
      483: {
        description: 'UploadNotFoundException',
        content: { 'application/json': { schema: UploadNotFoundExceptionSchema } },
      },
      484: {
        description: 'InvalidLayerException',
        content: { 'application/json': { schema: InvalidLayerExceptionSchema } },
      },
      485: {
        description: 'LayerPartTooSmallException',
        content: { 'application/json': { schema: LayerPartTooSmallExceptionSchema } },
      },
      486: {
        description: 'LayerAlreadyExistsException',
        content: { 'application/json': { schema: LayerAlreadyExistsExceptionSchema } },
      },
      487: {
        description: 'EmptyUploadException',
        content: { 'application/json': { schema: EmptyUploadExceptionSchema } },
      },
      488: {
        description: 'KmsException',
        content: { 'application/json': { schema: KmsExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921CreatePullThroughCacheRuleRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule',
    description:
      'Creates a pull through cache rule. A pull through cache rule provides a way to cache images from an external public registry in your Amazon ECR private registry.',
    operationId: 'CreatePullThroughCacheRule',
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
          .literal('AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreatePullThroughCacheRuleRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreatePullThroughCacheRuleResponseSchema } },
      },
      480: {
        description: 'ServerException',
        content: { 'application/json': { schema: ServerExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'PullThroughCacheRuleAlreadyExistsException',
        content: {
          'application/json': { schema: PullThroughCacheRuleAlreadyExistsExceptionSchema },
        },
      },
      484: {
        description: 'UnsupportedUpstreamRegistryException',
        content: { 'application/json': { schema: UnsupportedUpstreamRegistryExceptionSchema } },
      },
      485: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921CreateRepositoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreateRepository',
  description:
    'Creates a repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR repositories</a> in the <i>Amazon Elastic Container Registry User Guide</i>.',
  operationId: 'CreateRepository',
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
        .literal('AmazonEC2ContainerRegistry_V20150921.CreateRepository')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AmazonEC2ContainerRegistry_V20150921.CreateRepository'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateRepositoryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRepositoryResponseSchema } },
    },
    480: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidTagParameterException',
      content: { 'application/json': { schema: InvalidTagParameterExceptionSchema } },
    },
    483: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    484: {
      description: 'RepositoryAlreadyExistsException',
      content: { 'application/json': { schema: RepositoryAlreadyExistsExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    486: {
      description: 'KmsException',
      content: { 'application/json': { schema: KmsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteLifecyclePolicyRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy',
    description: 'Deletes the lifecycle policy associated with the specified repository.',
    operationId: 'DeleteLifecyclePolicy',
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
          .literal('AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteLifecyclePolicyRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteLifecyclePolicyResponseSchema } },
      },
      480: {
        description: 'ServerException',
        content: { 'application/json': { schema: ServerExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'RepositoryNotFoundException',
        content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
      },
      483: {
        description: 'LifecyclePolicyNotFoundException',
        content: { 'application/json': { schema: LifecyclePolicyNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921DeletePullThroughCacheRuleRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule',
    description: 'Deletes a pull through cache rule.',
    operationId: 'DeletePullThroughCacheRule',
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
          .literal('AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeletePullThroughCacheRuleRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeletePullThroughCacheRuleResponseSchema } },
      },
      480: {
        description: 'ServerException',
        content: { 'application/json': { schema: ServerExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'PullThroughCacheRuleNotFoundException',
        content: { 'application/json': { schema: PullThroughCacheRuleNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRegistryPolicyRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy',
    description: 'Deletes the registry permissions policy.',
    operationId: 'DeleteRegistryPolicy',
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
          .literal('AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteRegistryPolicyRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteRegistryPolicyResponseSchema } },
      },
      480: {
        description: 'ServerException',
        content: { 'application/json': { schema: ServerExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'RegistryPolicyNotFoundException',
        content: { 'application/json': { schema: RegistryPolicyNotFoundExceptionSchema } },
      },
      483: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRepositoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepository',
  description:
    'Deletes a repository. If the repository contains images, you must either delete all images in the repository or use the <code>force</code> option to delete the repository.',
  operationId: 'DeleteRepository',
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
        .literal('AmazonEC2ContainerRegistry_V20150921.DeleteRepository')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AmazonEC2ContainerRegistry_V20150921.DeleteRepository'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteRepositoryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRepositoryResponseSchema } },
    },
    480: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'RepositoryNotFoundException',
      content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
    },
    483: {
      description: 'RepositoryNotEmptyException',
      content: { 'application/json': { schema: RepositoryNotEmptyExceptionSchema } },
    },
    484: {
      description: 'KmsException',
      content: { 'application/json': { schema: KmsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRepositoryPolicyRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy',
    description: 'Deletes the repository policy associated with the specified repository.',
    operationId: 'DeleteRepositoryPolicy',
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
          .literal('AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteRepositoryPolicyRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteRepositoryPolicyResponseSchema } },
      },
      480: {
        description: 'ServerException',
        content: { 'application/json': { schema: ServerExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'RepositoryNotFoundException',
        content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
      },
      483: {
        description: 'RepositoryPolicyNotFoundException',
        content: { 'application/json': { schema: RepositoryPolicyNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImageReplicationStatusRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus',
    description: 'Returns the replication status for a specified image.',
    operationId: 'DescribeImageReplicationStatus',
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
          .literal('AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeImageReplicationStatusRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeImageReplicationStatusResponseSchema } },
      },
      480: {
        description: 'ServerException',
        content: { 'application/json': { schema: ServerExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'ImageNotFoundException',
        content: { 'application/json': { schema: ImageNotFoundExceptionSchema } },
      },
      483: {
        description: 'RepositoryNotFoundException',
        content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
      },
      484: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImageScanFindingsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings',
    description: 'Returns the scan findings for the specified image.',
    operationId: 'DescribeImageScanFindings',
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
          .literal('AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings'],
              },
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
        content: { 'application/json': { schema: DescribeImageScanFindingsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeImageScanFindingsResponseSchema } },
      },
      480: {
        description: 'ServerException',
        content: { 'application/json': { schema: ServerExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'RepositoryNotFoundException',
        content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
      },
      483: {
        description: 'ImageNotFoundException',
        content: { 'application/json': { schema: ImageNotFoundExceptionSchema } },
      },
      484: {
        description: 'ScanNotFoundException',
        content: { 'application/json': { schema: ScanNotFoundExceptionSchema } },
      },
      485: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImagesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImages',
  description:
    '<p>Returns metadata about the images in a repository.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size, so it may return a larger image size than the image sizes returned by <a>DescribeImages</a>.</p> </note>',
  operationId: 'DescribeImages',
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
        .literal('AmazonEC2ContainerRegistry_V20150921.DescribeImages')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AmazonEC2ContainerRegistry_V20150921.DescribeImages'],
            },
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
      content: { 'application/json': { schema: DescribeImagesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeImagesResponseSchema } },
    },
    480: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'RepositoryNotFoundException',
      content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
    },
    483: {
      description: 'ImageNotFoundException',
      content: { 'application/json': { schema: ImageNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921DescribePullThroughCacheRulesRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules',
    description: 'Returns the pull through cache rules for a registry.',
    operationId: 'DescribePullThroughCacheRules',
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
          .literal('AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules'],
              },
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
        content: { 'application/json': { schema: DescribePullThroughCacheRulesRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribePullThroughCacheRulesResponseSchema } },
      },
      480: {
        description: 'ServerException',
        content: { 'application/json': { schema: ServerExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'PullThroughCacheRuleNotFoundException',
        content: { 'application/json': { schema: PullThroughCacheRuleNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeRegistryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRegistry',
  description:
    'Describes the settings for a registry. The replication configuration for a repository can be created or updated with the <a>PutReplicationConfiguration</a> API action.',
  operationId: 'DescribeRegistry',
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
        .literal('AmazonEC2ContainerRegistry_V20150921.DescribeRegistry')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AmazonEC2ContainerRegistry_V20150921.DescribeRegistry'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeRegistryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRegistryResponseSchema } },
    },
    480: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeRepositoriesRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRepositories',
    description: 'Describes image repositories in a registry.',
    operationId: 'DescribeRepositories',
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
          .literal('AmazonEC2ContainerRegistry_V20150921.DescribeRepositories')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonEC2ContainerRegistry_V20150921.DescribeRepositories'],
              },
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
        content: { 'application/json': { schema: DescribeRepositoriesRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeRepositoriesResponseSchema } },
      },
      480: {
        description: 'ServerException',
        content: { 'application/json': { schema: ServerExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'RepositoryNotFoundException',
        content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921GetAuthorizationTokenRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken',
    description:
      '<p>Retrieves an authorization token. An authorization token represents your IAM authentication credentials and can be used to access any Amazon ECR registry that your IAM principal has access to. The authorization token is valid for 12 hours.</p> <p>The <code>authorizationToken</code> returned is a base64 encoded string that can be decoded and used in a <code>docker login</code> command to authenticate to a registry. The CLI offers an <code>get-login-password</code> command that simplifies the login process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html#registry_auth">Registry authentication</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>',
    operationId: 'GetAuthorizationToken',
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
          .literal('AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetAuthorizationTokenRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetAuthorizationTokenResponseSchema } },
      },
      480: {
        description: 'ServerException',
        content: { 'application/json': { schema: ServerExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921GetDownloadUrlForLayerRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer',
    description:
      '<p>Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer. You can only get URLs for image layers that are referenced in an image.</p> <p>When an image is pulled, the GetDownloadUrlForLayer API is called once per image layer that is not already cached.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>',
    operationId: 'GetDownloadUrlForLayer',
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
          .literal('AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetDownloadUrlForLayerRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetDownloadUrlForLayerResponseSchema } },
      },
      480: {
        description: 'ServerException',
        content: { 'application/json': { schema: ServerExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'LayersNotFoundException',
        content: { 'application/json': { schema: LayersNotFoundExceptionSchema } },
      },
      483: {
        description: 'LayerInaccessibleException',
        content: { 'application/json': { schema: LayerInaccessibleExceptionSchema } },
      },
      484: {
        description: 'RepositoryNotFoundException',
        content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921GetLifecyclePolicyRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy',
    description: 'Retrieves the lifecycle policy for the specified repository.',
    operationId: 'GetLifecyclePolicy',
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
          .literal('AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetLifecyclePolicyRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetLifecyclePolicyResponseSchema } },
      },
      480: {
        description: 'ServerException',
        content: { 'application/json': { schema: ServerExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'RepositoryNotFoundException',
        content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
      },
      483: {
        description: 'LifecyclePolicyNotFoundException',
        content: { 'application/json': { schema: LifecyclePolicyNotFoundExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921GetLifecyclePolicyPreviewRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview',
    description:
      'Retrieves the results of the lifecycle policy preview request for the specified repository.',
    operationId: 'GetLifecyclePolicyPreview',
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
          .literal('AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview'],
              },
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
        content: { 'application/json': { schema: GetLifecyclePolicyPreviewRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetLifecyclePolicyPreviewResponseSchema } },
      },
      480: {
        description: 'ServerException',
        content: { 'application/json': { schema: ServerExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'RepositoryNotFoundException',
        content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
      },
      483: {
        description: 'LifecyclePolicyPreviewNotFoundException',
        content: { 'application/json': { schema: LifecyclePolicyPreviewNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921GetRegistryPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy',
  description: 'Retrieves the permissions policy for a registry.',
  operationId: 'GetRegistryPolicy',
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
        .literal('AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetRegistryPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRegistryPolicyResponseSchema } },
    },
    480: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'RegistryPolicyNotFoundException',
      content: { 'application/json': { schema: RegistryPolicyNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921GetRegistryScanningConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration',
    description: 'Retrieves the scanning configuration for a registry.',
    operationId: 'GetRegistryScanningConfiguration',
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
          .literal('AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetRegistryScanningConfigurationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetRegistryScanningConfigurationResponseSchema } },
      },
      480: {
        description: 'ServerException',
        content: { 'application/json': { schema: ServerExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921GetRepositoryPolicyRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy',
    description: 'Retrieves the repository policy for the specified repository.',
    operationId: 'GetRepositoryPolicy',
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
          .literal('AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetRepositoryPolicyRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetRepositoryPolicyResponseSchema } },
      },
      480: {
        description: 'ServerException',
        content: { 'application/json': { schema: ServerExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'RepositoryNotFoundException',
        content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
      },
      483: {
        description: 'RepositoryPolicyNotFoundException',
        content: { 'application/json': { schema: RepositoryPolicyNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921InitiateLayerUploadRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload',
    description:
      '<p>Notifies Amazon ECR that you intend to upload an image layer.</p> <p>When an image is pushed, the InitiateLayerUpload API is called once per image layer that has not already been uploaded. Whether or not an image layer has been uploaded is determined by the BatchCheckLayerAvailability API action.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>',
    operationId: 'InitiateLayerUpload',
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
          .literal('AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: InitiateLayerUploadRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: InitiateLayerUploadResponseSchema } },
      },
      480: {
        description: 'ServerException',
        content: { 'application/json': { schema: ServerExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'RepositoryNotFoundException',
        content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
      },
      483: {
        description: 'KmsException',
        content: { 'application/json': { schema: KmsExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921ListImagesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListImages',
  description:
    '<p>Lists all the image IDs for the specified repository.</p> <p>You can filter images based on whether or not they are tagged by using the <code>tagStatus</code> filter and specifying either <code>TAGGED</code>, <code>UNTAGGED</code> or <code>ANY</code>. For example, you can filter your results to return only <code>UNTAGGED</code> images and then pipe that result to a <a>BatchDeleteImage</a> operation to delete them. Or, you can filter your results to return only <code>TAGGED</code> images to list all of the tags in your repository.</p>',
  operationId: 'ListImages',
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
        .literal('AmazonEC2ContainerRegistry_V20150921.ListImages')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonEC2ContainerRegistry_V20150921.ListImages'] },
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
    body: { content: { 'application/json': { schema: ListImagesRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListImagesResponseSchema } },
    },
    480: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'RepositoryNotFoundException',
      content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921ListTagsForResourceRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListTagsForResource',
    description: 'List the tags for an Amazon ECR resource.',
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
          .literal('AmazonEC2ContainerRegistry_V20150921.ListTagsForResource')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonEC2ContainerRegistry_V20150921.ListTagsForResource'],
              },
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
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'RepositoryNotFoundException',
        content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
      },
      482: {
        description: 'ServerException',
        content: { 'application/json': { schema: ServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImage',
  description:
    '<p>Creates or updates the image manifest and tags associated with an image.</p> <p>When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags associated with the image.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>',
  operationId: 'PutImage',
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
        .literal('AmazonEC2ContainerRegistry_V20150921.PutImage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonEC2ContainerRegistry_V20150921.PutImage'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PutImageRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutImageResponseSchema } },
    },
    480: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'RepositoryNotFoundException',
      content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
    },
    483: {
      description: 'ImageAlreadyExistsException',
      content: { 'application/json': { schema: ImageAlreadyExistsExceptionSchema } },
    },
    484: {
      description: 'LayersNotFoundException',
      content: { 'application/json': { schema: LayersNotFoundExceptionSchema } },
    },
    485: {
      description: 'ReferencedImagesNotFoundException',
      content: { 'application/json': { schema: ReferencedImagesNotFoundExceptionSchema } },
    },
    486: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    487: {
      description: 'ImageTagAlreadyExistsException',
      content: { 'application/json': { schema: ImageTagAlreadyExistsExceptionSchema } },
    },
    488: {
      description: 'ImageDigestDoesNotMatchException',
      content: { 'application/json': { schema: ImageDigestDoesNotMatchExceptionSchema } },
    },
    489: {
      description: 'KmsException',
      content: { 'application/json': { schema: KmsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageScanningConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration',
    description:
      '<important> <p>The <code>PutImageScanningConfiguration</code> API is being deprecated, in favor of specifying the image scanning configuration at the registry level. For more information, see <a>PutRegistryScanningConfiguration</a>.</p> </important> <p>Updates the image scanning configuration for the specified repository.</p>',
    operationId: 'PutImageScanningConfiguration',
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
          .literal('AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: PutImageScanningConfigurationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: PutImageScanningConfigurationResponseSchema } },
      },
      480: {
        description: 'ServerException',
        content: { 'application/json': { schema: ServerExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'RepositoryNotFoundException',
        content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
      },
      483: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageTagMutabilityRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability',
    description:
      'Updates the image tag mutability settings for the specified repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-tag-mutability.html">Image tag mutability</a> in the <i>Amazon Elastic Container Registry User Guide</i>.',
    operationId: 'PutImageTagMutability',
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
          .literal('AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: PutImageTagMutabilityRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: PutImageTagMutabilityResponseSchema } },
      },
      480: {
        description: 'ServerException',
        content: { 'application/json': { schema: ServerExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'RepositoryNotFoundException',
        content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921PutLifecyclePolicyRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy',
    description:
      'Creates or updates the lifecycle policy for the specified repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html">Lifecycle policy template</a>.',
    operationId: 'PutLifecyclePolicy',
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
          .literal('AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: PutLifecyclePolicyRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: PutLifecyclePolicyResponseSchema } },
      },
      480: {
        description: 'ServerException',
        content: { 'application/json': { schema: ServerExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'RepositoryNotFoundException',
        content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy',
  description:
    '<p>Creates or updates the permissions policy for your registry.</p> <p>A registry policy is used to specify permissions for another Amazon Web Services account and is used when configuring cross-account replication. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html">Registry permissions</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>',
  operationId: 'PutRegistryPolicy',
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
        .literal('AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutRegistryPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutRegistryPolicyResponseSchema } },
    },
    480: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryScanningConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration',
    description: 'Creates or updates the scanning configuration for your private registry.',
    operationId: 'PutRegistryScanningConfiguration',
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
          .literal('AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: PutRegistryScanningConfigurationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: PutRegistryScanningConfigurationResponseSchema } },
      },
      480: {
        description: 'ServerException',
        content: { 'application/json': { schema: ServerExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921PutReplicationConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration',
    description:
      '<p>Creates or updates the replication configuration for a registry. The existing replication configuration for a repository can be retrieved with the <a>DescribeRegistry</a> API action. The first time the PutReplicationConfiguration API is called, a service-linked IAM role is created in your account for the replication process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/using-service-linked-roles.html">Using service-linked roles for Amazon ECR</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p> <note> <p>When configuring cross-account replication, the destination account must grant the source account permission to replicate. This permission is controlled using a registry permissions policy. For more information, see <a>PutRegistryPolicy</a>.</p> </note>',
    operationId: 'PutReplicationConfiguration',
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
          .literal('AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: PutReplicationConfigurationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: PutReplicationConfigurationResponseSchema } },
      },
      480: {
        description: 'ServerException',
        content: { 'application/json': { schema: ServerExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921SetRepositoryPolicyRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy',
    description:
      'Applies a repository policy to the specified repository to control access permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.',
    operationId: 'SetRepositoryPolicy',
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
          .literal('AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: SetRepositoryPolicyRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: SetRepositoryPolicyResponseSchema } },
      },
      480: {
        description: 'ServerException',
        content: { 'application/json': { schema: ServerExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'RepositoryNotFoundException',
        content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921StartImageScanRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartImageScan',
  description:
    'Starts an image vulnerability scan. An image scan can only be started once per 24 hours on an individual image. This limit includes if an image was scanned on initial push. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html">Image scanning</a> in the <i>Amazon Elastic Container Registry User Guide</i>.',
  operationId: 'StartImageScan',
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
        .literal('AmazonEC2ContainerRegistry_V20150921.StartImageScan')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AmazonEC2ContainerRegistry_V20150921.StartImageScan'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartImageScanRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartImageScanResponseSchema } },
    },
    480: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'UnsupportedImageTypeException',
      content: { 'application/json': { schema: UnsupportedImageTypeExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'RepositoryNotFoundException',
      content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
    },
    485: {
      description: 'ImageNotFoundException',
      content: { 'application/json': { schema: ImageNotFoundExceptionSchema } },
    },
    486: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921StartLifecyclePolicyPreviewRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview',
    description:
      'Starts a preview of a lifecycle policy for the specified repository. This allows you to see the results before associating the lifecycle policy with the repository.',
    operationId: 'StartLifecyclePolicyPreview',
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
          .literal('AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: StartLifecyclePolicyPreviewRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: StartLifecyclePolicyPreviewResponseSchema } },
      },
      480: {
        description: 'ServerException',
        content: { 'application/json': { schema: ServerExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'RepositoryNotFoundException',
        content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
      },
      483: {
        description: 'LifecyclePolicyNotFoundException',
        content: { 'application/json': { schema: LifecyclePolicyNotFoundExceptionSchema } },
      },
      484: {
        description: 'LifecyclePolicyPreviewInProgressException',
        content: {
          'application/json': { schema: LifecyclePolicyPreviewInProgressExceptionSchema },
        },
      },
    },
  })

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.TagResource',
  description:
    'Adds specified tags to a resource with the specified ARN. Existing tags on a resource are not changed if they are not specified in the request parameters.',
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
        .literal('AmazonEC2ContainerRegistry_V20150921.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonEC2ContainerRegistry_V20150921.TagResource'] },
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
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidTagParameterException',
      content: { 'application/json': { schema: InvalidTagParameterExceptionSchema } },
    },
    482: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    483: {
      description: 'RepositoryNotFoundException',
      content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921UntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UntagResource',
  description: 'Deletes specified tags from a resource.',
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
        .literal('AmazonEC2ContainerRegistry_V20150921.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AmazonEC2ContainerRegistry_V20150921.UntagResource'],
            },
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
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidTagParameterException',
      content: { 'application/json': { schema: InvalidTagParameterExceptionSchema } },
    },
    482: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    483: {
      description: 'RepositoryNotFoundException',
      content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonEC2ContainerRegistryV20150921UploadLayerPartRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UploadLayerPart',
  description:
    '<p>Uploads an image layer part to Amazon ECR.</p> <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size of each image layer part can be 20971520 bytes (or about 20MB). The UploadLayerPart API is called once per each new image layer part.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>',
  operationId: 'UploadLayerPart',
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
        .literal('AmazonEC2ContainerRegistry_V20150921.UploadLayerPart')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AmazonEC2ContainerRegistry_V20150921.UploadLayerPart'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UploadLayerPartRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UploadLayerPartResponseSchema } },
    },
    480: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidLayerPartException',
      content: { 'application/json': { schema: InvalidLayerPartExceptionSchema } },
    },
    483: {
      description: 'RepositoryNotFoundException',
      content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
    },
    484: {
      description: 'UploadNotFoundException',
      content: { 'application/json': { schema: UploadNotFoundExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    486: {
      description: 'KmsException',
      content: { 'application/json': { schema: KmsExceptionSchema } },
    },
  },
})
