import { createRoute, z } from '@hono/zod-openapi'

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
  .openapi({ description: 'An object that represents an Amazon ECR image layer.', required: [] })
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
      z.any().openapi({ description: "The layer digest that's associated with the failure." }),
    ).exactOptional(),
    failureCode: LayerFailureCodeSchema.and(
      z.any().openapi({ description: "The failure code that's associated with the failure." }),
    ).exactOptional(),
    failureReason: LayerFailureReasonSchema.and(
      z.any().openapi({ description: 'The reason for the failure.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that represents an Amazon ECR image layer failure.',
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
            'A list of image layer objects that correspond to the image layer references in the request.',
        }),
    ).exactOptional(),
    failures: LayerFailureListSchema.and(
      z.any().openapi({ description: 'Any failures associated with the call.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchCheckLayerAvailabilityResponse')

const RegistryIdOrAliasSchema = z.string().min(2).max(50).openapi('RegistryIdOrAlias')

const RepositoryNameSchema = z
  .string()
  .regex(/(?:[a-z0-9]+(?:[._-][a-z0-9]+)*\/)*[a-z0-9]+(?:[._-][a-z0-9]+)*/)
  .min(2)
  .max(205)
  .openapi('RepositoryName')

const BatchedOperationLayerDigestListSchema = z
  .array(BatchedOperationLayerDigestSchema)
  .min(1)
  .max(100)
  .openapi('BatchedOperationLayerDigestList')

const BatchCheckLayerAvailabilityRequestSchema = z
  .object({
    registryId: RegistryIdOrAliasSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID, or registry alias, associated with the public registry that contains the image layers to check. If you do not specify a registry, the default public registry is assumed.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the repository that's associated with the image layers to check.",
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

const RegistryNotFoundExceptionSchema = z.any().openapi('RegistryNotFoundException')

const UnsupportedCommandExceptionSchema = z.any().openapi('UnsupportedCommandException')

const ImageDigestSchema = z.string().openapi('ImageDigest')

const ImageTagSchema = z.string().min(1).max(300).openapi('ImageTag')

const ImageIdentifierSchema = z
  .object({
    imageDigest: ImageDigestSchema.and(
      z.any().openapi({ description: 'The <code>sha256</code> digest of the image manifest.' }),
    ).exactOptional(),
    imageTag: ImageTagSchema.and(
      z.any().openapi({ description: "The tag that's used for the image." }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object with identifying information for an Amazon ECR image.',
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
      z.any().openapi({ description: "The image ID that's associated with the failure." }),
    ).exactOptional(),
    failureCode: ImageFailureCodeSchema.and(
      z.any().openapi({ description: "The code that's associated with the failure." }),
    ).exactOptional(),
    failureReason: ImageFailureReasonSchema.and(
      z.any().openapi({ description: 'The reason for the failure.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object that represents an Amazon ECR image failure.', required: [] })
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
  .openapi({ required: [] })
  .openapi('BatchDeleteImageResponse')

const BatchDeleteImageRequestSchema = z
  .object({
    registryId: RegistryIdOrAliasSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Web Services account ID, or registry alias, that's associated with the registry that contains the image to delete. If you do not specify a registry, the default public registry is assumed.",
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The repository in a public registry that contains the image to delete.',
        }),
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
  .openapi({ required: ['repositoryName', 'imageIds'], title: 'BatchDeleteImageRequest' })
  .openapi('BatchDeleteImageRequest')

const RegistryIdSchema = z
  .string()
  .regex(/[0-9]{12}/)
  .openapi('RegistryId')

const UploadIdSchema = z
  .string()
  .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/)
  .openapi('UploadId')

const CompleteLayerUploadResponseSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({ description: "The public registry ID that's associated with the request." }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: "The repository name that's associated with the request." }),
    ).exactOptional(),
    uploadId: UploadIdSchema.and(
      z.any().openapi({ description: "The upload ID that's associated with the layer." }),
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
    registryId: RegistryIdOrAliasSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID, or registry alias, associated with the registry where layers are uploaded. If you do not specify a registry, the default public registry is assumed.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the repository in a public registry to associate with the image layer.',
        }),
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

const ArnSchema = z.string().min(1).max(2048).openapi('Arn')

const UrlSchema = z.string().openapi('Url')

const CreationTimestampSchema = z.iso.datetime({ offset: true }).openapi('CreationTimestamp')

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
            "The Amazon Web Services account ID that's associated with the public registry that contains the repository.",
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
  })
  .openapi({ description: 'An object representing a repository.', required: [] })
  .openapi('Repository')

const RepositoryDescriptionSchema = z.string().max(1024).openapi('RepositoryDescription')

const ArchitectureSchema = z.string().min(1).max(50).openapi('Architecture')

const ArchitectureListSchema = z.array(ArchitectureSchema).max(50).openapi('ArchitectureList')

const OperatingSystemSchema = z.string().min(1).max(50).openapi('OperatingSystem')

const OperatingSystemListSchema = z
  .array(OperatingSystemSchema)
  .max(50)
  .openapi('OperatingSystemList')

const ResourceUrlSchema = z.string().max(2048).openapi('ResourceUrl')

const AboutTextSchema = z.string().max(25600).openapi('AboutText')

const UsageTextSchema = z.string().max(25600).openapi('UsageText')

const MarketplaceCertifiedSchema = z.boolean().openapi('MarketplaceCertified')

const RepositoryCatalogDataSchema = z
  .object({
    description: RepositoryDescriptionSchema.and(
      z.any().openapi({ description: 'The short description of the repository.' }),
    ).exactOptional(),
    architectures: ArchitectureListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The architecture tags that are associated with the repository.</p> <note> <p>Only supported operating system tags appear publicly in the Amazon ECR Public Gallery. For more information, see <a>RepositoryCatalogDataInput</a>.</p> </note>',
        }),
    ).exactOptional(),
    operatingSystems: OperatingSystemListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The operating system tags that are associated with the repository.</p> <note> <p>Only supported operating system tags appear publicly in the Amazon ECR Public Gallery. For more information, see <a>RepositoryCatalogDataInput</a>.</p> </note>',
        }),
    ).exactOptional(),
    logoUrl: ResourceUrlSchema.and(
      z
        .any()
        .openapi({
          description: "The URL that contains the logo that's associated with the repository.",
        }),
    ).exactOptional(),
    aboutText: AboutTextSchema.and(
      z
        .any()
        .openapi({
          description:
            'The longform description of the contents of the repository. This text appears in the repository details on the Amazon ECR Public Gallery.',
        }),
    ).exactOptional(),
    usageText: UsageTextSchema.and(
      z
        .any()
        .openapi({
          description:
            'The longform usage details of the contents of the repository. The usage text provides context for users of the repository.',
        }),
    ).exactOptional(),
    marketplaceCertified: MarketplaceCertifiedSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the repository is certified by Amazon Web Services Marketplace.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery.',
    required: [],
  })
  .openapi('RepositoryCatalogData')

const CreateRepositoryResponseSchema = z
  .object({
    repository: RepositorySchema.and(
      z.any().openapi({ description: 'The repository that was created.' }),
    ).exactOptional(),
    catalogData: RepositoryCatalogDataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateRepositoryResponse')

const LogoImageBlobSchema = z.string().min(0).max(512000).openapi('LogoImageBlob')

const RepositoryCatalogDataInputSchema = z
  .object({
    description: RepositoryDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A short description of the contents of the repository. This text appears in both the image details and also when searching for repositories on the Amazon ECR Public Gallery.',
        }),
    ).exactOptional(),
    architectures: ArchitectureListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The system architecture that the images in the repository are compatible with. On the Amazon ECR Public Gallery, the following supported architectures appear as badges on the repository and are used as search filters.</p> <note> <p>If an unsupported tag is added to your repository catalog data, it's associated with the repository and can be retrieved using the API but isn't discoverable in the Amazon ECR Public Gallery.</p> </note> <ul> <li> <p> <code>ARM</code> </p> </li> <li> <p> <code>ARM 64</code> </p> </li> <li> <p> <code>x86</code> </p> </li> <li> <p> <code>x86-64</code> </p> </li> </ul>",
        }),
    ).exactOptional(),
    operatingSystems: OperatingSystemListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The operating systems that the images in the repository are compatible with. On the Amazon ECR Public Gallery, the following supported operating systems appear as badges on the repository and are used as search filters.</p> <note> <p>If an unsupported tag is added to your repository catalog data, it's associated with the repository and can be retrieved using the API but isn't discoverable in the Amazon ECR Public Gallery.</p> </note> <ul> <li> <p> <code>Linux</code> </p> </li> <li> <p> <code>Windows</code> </p> </li> </ul>",
        }),
    ).exactOptional(),
    logoImageBlob: LogoImageBlobSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The base64-encoded repository logo payload.</p> <note> <p>The repository logo is only publicly visible in the Amazon ECR Public Gallery for verified accounts.</p> </note>',
        }),
    ).exactOptional(),
    aboutText: AboutTextSchema.and(
      z
        .any()
        .openapi({
          description:
            "A detailed description of the contents of the repository. It's publicly visible in the Amazon ECR Public Gallery. The text must be in markdown format.",
        }),
    ).exactOptional(),
    usageText: UsageTextSchema.and(
      z
        .any()
        .openapi({
          description:
            "Detailed information about how to use the contents of the repository. It's publicly visible in the Amazon ECR Public Gallery. The usage text provides context, support information, and additional usage details for users of the repository. The text must be in markdown format.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains the catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery.',
    required: [],
  })
  .openapi('RepositoryCatalogDataInput')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

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
          description:
            'The optional part of a key-value pair that make up a tag. A <code>value</code> acts as a descriptor within a tag category (key).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value. You define both. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.',
    required: [],
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(0).max(200).openapi('TagList')

const CreateRepositoryRequestSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name to use for the repository. This appears publicly in the Amazon ECR Public Gallery. The repository name can be specified on its own (for example <code>nginx-web-app</code>) or prepended with a namespace to group the repository into a category (for example <code>project-a/nginx-web-app</code>).',
        }),
    ),
    catalogData: RepositoryCatalogDataInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'The details about the repository that are publicly visible in the Amazon ECR Public Gallery.',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metadata that you apply to each repository to help categorize and organize your repositories. Each tag consists of a key and an optional value. You define both of them. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['repositoryName'], title: 'CreateRepositoryRequest' })
  .openapi('CreateRepositoryRequest')

const InvalidTagParameterExceptionSchema = z.any().openapi('InvalidTagParameterException')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const RepositoryAlreadyExistsExceptionSchema = z.any().openapi('RepositoryAlreadyExistsException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const DeleteRepositoryResponseSchema = z
  .object({
    repository: RepositorySchema.and(
      z.any().openapi({ description: 'The repository that was deleted.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteRepositoryResponse')

const ForceFlagSchema = z.boolean().openapi('ForceFlag')

const DeleteRepositoryRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Web Services account ID that's associated with the public registry that contains the repository to delete. If you do not specify a registry, the default public registry is assumed.",
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name of the repository to delete.' }),
    ),
    force: ForceFlagSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The force option can be used to delete a repository that contains images. If the force option is not used, the repository must be empty prior to deletion.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['repositoryName'], title: 'DeleteRepositoryRequest' })
  .openapi('DeleteRepositoryRequest')

const RepositoryNotEmptyExceptionSchema = z.any().openapi('RepositoryNotEmptyException')

const RepositoryPolicyTextSchema = z.string().min(0).max(10240).openapi('RepositoryPolicyText')

const DeleteRepositoryPolicyResponseSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z.any().openapi({ description: "The registry ID that's associated with the request." }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: "The repository name that's associated with the request." }),
    ).exactOptional(),
    policyText: RepositoryPolicyTextSchema.and(
      z
        .any()
        .openapi({
          description: 'The JSON repository policy that was deleted from the repository.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteRepositoryPolicyResponse')

const DeleteRepositoryPolicyRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Web Services account ID that's associated with the public registry that contains the repository policy to delete. If you do not specify a registry, the default public registry is assumed.",
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the repository that's associated with the repository policy to delete.",
        }),
    ),
  })
  .openapi({ required: ['repositoryName'], title: 'DeleteRepositoryPolicyRequest' })
  .openapi('DeleteRepositoryPolicyRequest')

const RepositoryPolicyNotFoundExceptionSchema = z.any().openapi('RepositoryPolicyNotFoundException')

const ImageSizeInBytesSchema = z.int().openapi('ImageSizeInBytes')

const PushTimestampSchema = z.iso.datetime({ offset: true }).openapi('PushTimestamp')

const ReferencedImageDetailSchema = z
  .object({
    imageDigest: ImageDigestSchema.and(
      z.any().openapi({ description: 'The <code>sha256</code> digest of the image manifest.' }),
    ).exactOptional(),
    imageSizeInBytes: ImageSizeInBytesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The size, in bytes, of the image in the repository.</p> <p>If the image is a manifest list, this is the max size of all manifests in the list.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size, so it might return a larger image size than the image sizes that are returned by <a>DescribeImages</a>.</p> </note>',
        }),
    ).exactOptional(),
    imagePushedAt: PushTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, expressed in standard JavaScript date format, which the current image tag was pushed to the repository at.',
        }),
    ).exactOptional(),
    imageManifestMediaType: MediaTypeSchema.and(
      z.any().openapi({ description: 'The media type of the image manifest.' }),
    ).exactOptional(),
    artifactMediaType: MediaTypeSchema.and(
      z.any().openapi({ description: 'The artifact media type of the image.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that describes the image tag details that are returned by a <a>DescribeImageTags</a> action.',
    required: [],
  })
  .openapi('ReferencedImageDetail')

const ImageTagDetailSchema = z
  .object({
    imageTag: ImageTagSchema.and(
      z.any().openapi({ description: "The tag that's associated with the image." }),
    ).exactOptional(),
    createdAt: CreationTimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time stamp that indicates when the image tag was created.' }),
    ).exactOptional(),
    imageDetail: ReferencedImageDetailSchema.and(
      z.any().openapi({ description: 'An object that describes the details of an image.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that represents the image tag details for an image.',
    required: [],
  })
  .openapi('ImageTagDetail')

const ImageTagDetailListSchema = z.array(ImageTagDetailSchema).openapi('ImageTagDetailList')

const NextTokenSchema = z.string().openapi('NextToken')

const DescribeImageTagsResponseSchema = z
  .object({
    imageTagDetails: ImageTagDetailListSchema.and(
      z
        .any()
        .openapi({
          description: 'The image tag details for the images in the requested repository.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>DescribeImageTags</code> request. When the results of a <code>DescribeImageTags</code> request exceed <code>maxResults</code>, you can use this value to retrieve the next page of results. If there are no more results to return, this value is <code>null</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeImageTagsResponse')

const MaxResultsSchema = z.int().min(1).max(1000).openapi('MaxResults')

const DescribeImageTagsRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Web Services account ID that's associated with the public registry that contains the repository where images are described. If you do not specify a registry, the default public registry is assumed.",
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the repository that contains the image tag details to describe.',
        }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "The <code>nextToken</code> value that's returned from a previous paginated <code>DescribeImageTags</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. If there are no more results to return, this value is <code>null</code>. If you specify images with <code>imageIds</code>, you can't use this option.",
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of repository results that's returned by <code>DescribeImageTags</code> in paginated output. When this parameter is used, <code>DescribeImageTags</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>DescribeImageTags</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 1000. If this parameter isn't used, then <code>DescribeImageTags</code> returns up to 100 results and a <code>nextToken</code> value, if applicable. If you specify images with <code>imageIds</code>, you can't use this option.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['repositoryName'], title: 'DescribeImageTagsRequest' })
  .openapi('DescribeImageTagsRequest')

const ImageTagListSchema = z.array(ImageTagSchema).openapi('ImageTagList')

const ImageDetailSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Web Services account ID that's associated with the public registry where this image belongs.",
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name of the repository where this image belongs.' }),
    ).exactOptional(),
    imageDigest: ImageDigestSchema.and(
      z.any().openapi({ description: 'The <code>sha256</code> digest of the image manifest.' }),
    ).exactOptional(),
    imageTags: ImageTagListSchema.and(
      z.any().openapi({ description: "The list of tags that's associated with this image." }),
    ).exactOptional(),
    imageSizeInBytes: ImageSizeInBytesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The size, in bytes, of the image in the repository.</p> <p>If the image is a manifest list, this is the max size of all manifests in the list.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size, so it might return a larger image size than the image sizes that are returned by <a>DescribeImages</a>.</p> </note>',
        }),
    ).exactOptional(),
    imagePushedAt: PushTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, expressed in standard JavaScript date format, that the current image was pushed to the repository at. ',
        }),
    ).exactOptional(),
    imageManifestMediaType: MediaTypeSchema.and(
      z.any().openapi({ description: 'The media type of the image manifest.' }),
    ).exactOptional(),
    artifactMediaType: MediaTypeSchema.and(
      z.any().openapi({ description: 'The artifact media type of the image.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "An object that describes an image that's returned by a <a>DescribeImages</a> operation.",
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
            'The <code>nextToken</code> value to include in a future <code>DescribeImages</code> request. When the results of a <code>DescribeImages</code> request exceed <code>maxResults</code>, you can use this value to retrieve the next page of results. If there are no more results to return, this value is <code>null</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeImagesResponse')

const DescribeImagesRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Web Services account ID that's associated with the public registry that contains the repository where images are described. If you do not specify a registry, the default public registry is assumed.",
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
            "The <code>nextToken</code> value that's returned from a previous paginated <code>DescribeImages</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. If there are no more results to return, this value is <code>null</code>. If you specify images with <code>imageIds</code>, you can't use this option.",
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of repository results that's returned by <code>DescribeImages</code> in paginated output. When this parameter is used, <code>DescribeImages</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>DescribeImages</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 1000. If this parameter isn't used, then <code>DescribeImages</code> returns up to 100 results and a <code>nextToken</code> value, if applicable. If you specify images with <code>imageIds</code>, you can't use this option.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['repositoryName'], title: 'DescribeImagesRequest' })
  .openapi('DescribeImagesRequest')

const ImageNotFoundExceptionSchema = z.any().openapi('ImageNotFoundException')

const RegistryVerifiedSchema = z.boolean().openapi('RegistryVerified')

const RegistryAliasNameSchema = z
  .string()
  .regex(/[a-z][a-z0-9]+(?:[._-][a-z0-9]+)*/)
  .min(2)
  .max(50)
  .openapi('RegistryAliasName')

const RegistryAliasStatusSchema = z
  .enum(['ACTIVE', 'PENDING', 'REJECTED'])
  .openapi('RegistryAliasStatus')

const PrimaryRegistryAliasFlagSchema = z.boolean().openapi('PrimaryRegistryAliasFlag')

const DefaultRegistryAliasFlagSchema = z.boolean().openapi('DefaultRegistryAliasFlag')

const RegistryAliasSchema = z
  .object({
    name: RegistryAliasNameSchema.and(
      z.any().openapi({ description: 'The name of the registry alias.' }),
    ),
    status: RegistryAliasStatusSchema.and(
      z.any().openapi({ description: 'The status of the registry alias.' }),
    ),
    primaryRegistryAlias: PrimaryRegistryAliasFlagSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates whether the registry alias is the primary alias for the registry. If true, the alias is the primary registry alias and is displayed in both the repository URL and the image URI used in the <code>docker pull</code> commands on the Amazon ECR Public Gallery.</p> <note> <p>A registry alias that isn't the primary registry alias can be used in the repository URI in a <code>docker pull</code> command.</p> </note>",
        }),
    ),
    defaultRegistryAlias: DefaultRegistryAliasFlagSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the registry alias is the default alias for the registry. When the first public repository is created, your public registry is assigned a default registry alias.',
        }),
    ),
  })
  .openapi({
    required: ['name', 'status', 'primaryRegistryAlias', 'defaultRegistryAlias'],
    description:
      'An object representing the aliases for a public registry. A public registry is given an alias when it\'s created. However, a custom alias can be set using the Amazon ECR console. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html">Registries</a> in the <i>Amazon Elastic Container Registry User Guide</i>.',
  })
  .openapi('RegistryAlias')

const RegistryAliasListSchema = z.array(RegistryAliasSchema).openapi('RegistryAliasList')

const RegistrySchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Web Services account ID that's associated with the registry. If you do not specify a registry, the default public registry is assumed.",
        }),
    ),
    registryArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the public registry.' }),
    ),
    registryUri: UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URI of a public registry. The URI contains a universal prefix and the registry alias.',
        }),
    ),
    verified: RegistryVerifiedSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the account is a verified Amazon Web Services Marketplace vendor. If an account is verified, each public repository receives a verified account badge on the Amazon ECR Public Gallery.',
        }),
    ),
    aliases: RegistryAliasListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of objects that represents the aliases for a public registry.',
        }),
    ),
  })
  .openapi({
    required: ['registryId', 'registryArn', 'registryUri', 'verified', 'aliases'],
    description: 'The details of a public registry.',
  })
  .openapi('Registry')

const RegistryListSchema = z.array(RegistrySchema).openapi('RegistryList')

const DescribeRegistriesResponseSchema = z
  .object({
    registries: RegistryListSchema.and(
      z
        .any()
        .openapi({ description: 'An object that contains the details for a public registry.' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>DescribeRepositories</code> request. If the results of a <code>DescribeRepositories</code> request exceed <code>maxResults</code>, you can use this value to retrieve the next page of results. If there are no more results, this value is <code>null</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['registries'] })
  .openapi('DescribeRegistriesResponse')

const DescribeRegistriesRequestSchema = z
  .object({
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The <code>nextToken</code> value that's returned from a previous paginated <code>DescribeRegistries</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. If there are no more results to return, this value is <code>null</code>.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>",
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of repository results that's returned by <code>DescribeRegistries</code> in paginated output. When this parameter is used, <code>DescribeRegistries</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeRegistries</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 1000. If this parameter isn't used, then <code>DescribeRegistries</code> returns up to 100 results and a <code>nextToken</code> value, if applicable.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeRegistriesRequest', required: [] })
  .openapi('DescribeRegistriesRequest')

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
            'The <code>nextToken</code> value to include in a future <code>DescribeRepositories</code> request. When the results of a <code>DescribeRepositories</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. If there are no more results to return, this value is <code>null</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
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
            "The Amazon Web Services account ID that's associated with the registry that contains the repositories to be described. If you do not specify a registry, the default public registry is assumed.",
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
            "<p>The <code>nextToken</code> value that's returned from a previous paginated <code>DescribeRepositories</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. If there are no more results to return, this value is <code>null</code>. If you specify repositories with <code>repositoryNames</code>, you can't use this option.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>",
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of repository results that's returned by <code>DescribeRepositories</code> in paginated output. When this parameter is used, <code>DescribeRepositories</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>DescribeRepositories</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 1000. If this parameter isn't used, then <code>DescribeRepositories</code> returns up to 100 results and a <code>nextToken</code> value, if applicable. If you specify repositories with <code>repositoryNames</code>, you can't use this option.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeRepositoriesRequest', required: [] })
  .openapi('DescribeRepositoriesRequest')

const Base64Schema = z.string().regex(/^\S+$/).openapi('Base64')

const ExpirationTimestampSchema = z.iso.datetime({ offset: true }).openapi('ExpirationTimestamp')

const AuthorizationDataSchema = z
  .object({
    authorizationToken: Base64Schema.and(
      z
        .any()
        .openapi({
          description:
            "A base64-encoded string that contains authorization data for a public Amazon ECR registry. When the string is decoded, it's presented in the format <code>user:password</code> for public registry authentication using <code>docker login</code>.",
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
  })
  .openapi({
    description: 'An authorization token data object that corresponds to a public registry.',
    required: [],
  })
  .openapi('AuthorizationData')

const GetAuthorizationTokenResponseSchema = z
  .object({
    authorizationData: AuthorizationDataSchema.and(
      z
        .any()
        .openapi({
          description: 'An authorization token data object that corresponds to a public registry.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAuthorizationTokenResponse')

const GetAuthorizationTokenRequestSchema = z
  .object({})
  .openapi({ title: 'GetAuthorizationTokenRequest' })
  .openapi('GetAuthorizationTokenRequest')

const RegistryDisplayNameSchema = z.string().min(0).max(100).openapi('RegistryDisplayName')

const RegistryCatalogDataSchema = z
  .object({
    displayName: RegistryDisplayNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The display name for a public registry. This appears on the Amazon ECR Public Gallery.</p> <important> <p>Only accounts that have the verified account badge can have a registry display name.</p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The metadata for a public registry.', required: [] })
  .openapi('RegistryCatalogData')

const GetRegistryCatalogDataResponseSchema = z
  .object({
    registryCatalogData: RegistryCatalogDataSchema.and(
      z.any().openapi({ description: 'The catalog metadata for the public registry.' }),
    ),
  })
  .openapi({ required: ['registryCatalogData'] })
  .openapi('GetRegistryCatalogDataResponse')

const GetRegistryCatalogDataRequestSchema = z
  .object({})
  .openapi({ title: 'GetRegistryCatalogDataRequest' })
  .openapi('GetRegistryCatalogDataRequest')

const GetRepositoryCatalogDataResponseSchema = z
  .object({
    catalogData: RepositoryCatalogDataSchema.and(
      z.any().openapi({ description: 'The catalog metadata for the repository.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRepositoryCatalogDataResponse')

const GetRepositoryCatalogDataRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Web Services account ID that's associated with the registry that contains the repositories to be described. If you do not specify a registry, the default public registry is assumed.",
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the repository to retrieve the catalog metadata for.',
        }),
    ),
  })
  .openapi({ required: ['repositoryName'], title: 'GetRepositoryCatalogDataRequest' })
  .openapi('GetRepositoryCatalogDataRequest')

const RepositoryCatalogDataNotFoundExceptionSchema = z
  .any()
  .openapi('RepositoryCatalogDataNotFoundException')

const GetRepositoryPolicyResponseSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z.any().openapi({ description: "The registry ID that's associated with the request." }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: "The repository name that's associated with the request." }),
    ).exactOptional(),
    policyText: RepositoryPolicyTextSchema.and(
      z
        .any()
        .openapi({
          description:
            "The repository policy text that's associated with the repository. The policy text will be in JSON format.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRepositoryPolicyResponse')

const GetRepositoryPolicyRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Web Services account ID that's associated with the public registry that contains the repository. If you do not specify a registry, the default public registry is assumed.",
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
    registryId: RegistryIdOrAliasSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Web Services account ID, or registry alias, that's associated with the registry to which you intend to upload layers. If you do not specify a registry, the default public registry is assumed.",
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the repository that you want to upload layers to.' }),
    ),
  })
  .openapi({ required: ['repositoryName'], title: 'InitiateLayerUploadRequest' })
  .openapi('InitiateLayerUploadRequest')

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
            'The Amazon Resource Name (ARN) that identifies the resource to list the tags for. Currently, the supported resource is an Amazon ECR Public repository.',
        }),
    ),
  })
  .openapi({ required: ['resourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ImageManifestSchema = z.string().min(1).max(4194304).openapi('ImageManifest')

const ImageSchema = z
  .object({
    registryId: RegistryIdOrAliasSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Web Services account ID that's associated with the registry containing the image.",
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({ description: "The name of the repository that's associated with the image." }),
    ).exactOptional(),
    imageId: ImageIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains the image tag and image digest associated with an image.',
        }),
    ).exactOptional(),
    imageManifest: ImageManifestSchema.and(
      z.any().openapi({ description: "The image manifest that's associated with the image." }),
    ).exactOptional(),
    imageManifestMediaType: MediaTypeSchema.and(
      z.any().openapi({ description: 'The manifest media type of the image.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object that represents an Amazon ECR image.', required: [] })
  .openapi('Image')

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
    registryId: RegistryIdOrAliasSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Web Services account ID, or registry alias, that's associated with the public registry that contains the repository where the image is put. If you do not specify a registry, the default public registry is assumed.",
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name of the repository where the image is put.' }),
    ),
    imageManifest: ImageManifestSchema.and(
      z
        .any()
        .openapi({
          description: 'The image manifest that corresponds to the image to be uploaded.',
        }),
    ),
    imageManifestMediaType: MediaTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The media type of the image manifest. If you push an image manifest that doesn't contain the <code>mediaType</code> field, you must specify the <code>imageManifestMediaType</code> in the request.",
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
          description: 'The image digest of the image manifest that corresponds to the image.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['repositoryName', 'imageManifest'], title: 'PutImageRequest' })
  .openapi('PutImageRequest')

const ImageAlreadyExistsExceptionSchema = z.any().openapi('ImageAlreadyExistsException')

const LayersNotFoundExceptionSchema = z.any().openapi('LayersNotFoundException')

const ReferencedImagesNotFoundExceptionSchema = z.any().openapi('ReferencedImagesNotFoundException')

const ImageTagAlreadyExistsExceptionSchema = z.any().openapi('ImageTagAlreadyExistsException')

const ImageDigestDoesNotMatchExceptionSchema = z.any().openapi('ImageDigestDoesNotMatchException')

const PutRegistryCatalogDataResponseSchema = z
  .object({
    registryCatalogData: RegistryCatalogDataSchema.and(
      z.any().openapi({ description: 'The catalog data for the public registry.' }),
    ),
  })
  .openapi({ required: ['registryCatalogData'] })
  .openapi('PutRegistryCatalogDataResponse')

const PutRegistryCatalogDataRequestSchema = z
  .object({
    displayName: RegistryDisplayNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The display name for a public registry. The display name is shown as the repository author in the Amazon ECR Public Gallery.</p> <note> <p>The registry display name is only publicly visible in the Amazon ECR Public Gallery for verified accounts.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'PutRegistryCatalogDataRequest', required: [] })
  .openapi('PutRegistryCatalogDataRequest')

const PutRepositoryCatalogDataResponseSchema = z
  .object({
    catalogData: RepositoryCatalogDataSchema.and(
      z.any().openapi({ description: 'The catalog data for the repository.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutRepositoryCatalogDataResponse')

const PutRepositoryCatalogDataRequestSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Web Services account ID that's associated with the public registry the repository is in. If you do not specify a registry, the default public registry is assumed.",
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the repository to create or update the catalog data for.',
        }),
    ),
    catalogData: RepositoryCatalogDataInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object containing the catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery.',
        }),
    ),
  })
  .openapi({
    required: ['repositoryName', 'catalogData'],
    title: 'PutRepositoryCatalogDataRequest',
  })
  .openapi('PutRepositoryCatalogDataRequest')

const SetRepositoryPolicyResponseSchema = z
  .object({
    registryId: RegistryIdSchema.and(
      z.any().openapi({ description: "The registry ID that's associated with the request." }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: "The repository name that's associated with the request." }),
    ).exactOptional(),
    policyText: RepositoryPolicyTextSchema.and(
      z
        .any()
        .openapi({
          description: "The JSON repository policy text that's applied to the repository.",
        }),
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
            "The Amazon Web Services account ID that's associated with the registry that contains the repository. If you do not specify a registry, the default public registry is assumed.",
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
            'The JSON repository policy text to apply to the repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policy-examples.html">Amazon ECR Repository Policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.',
        }),
    ),
    force: ForceFlagSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the policy that you want to set on a repository policy would prevent you from setting another policy in the future, you must force the <a>SetRepositoryPolicy</a> operation. This prevents accidental repository lockouts.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['repositoryName', 'policyText'], title: 'SetRepositoryPolicyRequest' })
  .openapi('SetRepositoryPolicyRequest')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    resourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource to add tags to. Currently, the supported resource is an Amazon ECR Public repository.',
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

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    resourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource to delete tags from. Currently, the supported resource is an Amazon ECR Public repository.',
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
      z.any().openapi({ description: "The registry ID that's associated with the request." }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: "The repository name that's associated with the request." }),
    ).exactOptional(),
    uploadId: UploadIdSchema.and(
      z.any().openapi({ description: "The upload ID that's associated with the request." }),
    ).exactOptional(),
    lastByteReceived: PartSizeSchema.and(
      z
        .any()
        .openapi({
          description: "The integer value of the last byte that's received in the request.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UploadLayerPartResponse')

const LayerPartBlobSchema = z.string().min(0).max(20971520).openapi('LayerPartBlob')

const UploadLayerPartRequestSchema = z
  .object({
    registryId: RegistryIdOrAliasSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Web Services account ID, or registry alias, that's associated with the registry that you're uploading layer parts to. If you do not specify a registry, the default public registry is assumed.",
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description: "The name of the repository that you're uploading layer parts to.",
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

export const postXAmzTargetSpencerFrontendServiceBatchCheckLayerAvailabilityRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SpencerFrontendService.BatchCheckLayerAvailability',
  description:
    '<p>Checks the availability of one or more image layers that are within a repository in a public registry. When an image is pushed to a repository, each image layer is checked to verify if it has been uploaded before. If it has been uploaded, then the image layer is skipped.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>',
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
        .literal('SpencerFrontendService.BatchCheckLayerAvailability')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['SpencerFrontendService.BatchCheckLayerAvailability'],
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
    483: {
      description: 'RegistryNotFoundException',
      content: { 'application/json': { schema: RegistryNotFoundExceptionSchema } },
    },
    484: {
      description: 'UnsupportedCommandException',
      content: { 'application/json': { schema: UnsupportedCommandExceptionSchema } },
    },
  },
})

export const postXAmzTargetSpencerFrontendServiceBatchDeleteImageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SpencerFrontendService.BatchDeleteImage',
  description:
    "<p>Deletes a list of specified images that are within a repository in a public registry. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository.</p> <p>You can completely delete an image (and all of its tags) by specifying the digest of the image in your request.</p>",
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
        .literal('SpencerFrontendService.BatchDeleteImage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SpencerFrontendService.BatchDeleteImage'] },
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
    483: {
      description: 'UnsupportedCommandException',
      content: { 'application/json': { schema: UnsupportedCommandExceptionSchema } },
    },
  },
})

export const postXAmzTargetSpencerFrontendServiceCompleteLayerUploadRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SpencerFrontendService.CompleteLayerUpload',
  description:
    '<p>Informs Amazon ECR that the image layer upload is complete for a specified public registry, repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of the image layer for data validation purposes.</p> <p>When an image is pushed, the CompleteLayerUpload API is called once for each new image layer to verify that the upload is complete.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>',
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
        .literal('SpencerFrontendService.CompleteLayerUpload')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SpencerFrontendService.CompleteLayerUpload'] },
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
      description: 'RegistryNotFoundException',
      content: { 'application/json': { schema: RegistryNotFoundExceptionSchema } },
    },
    489: {
      description: 'UnsupportedCommandException',
      content: { 'application/json': { schema: UnsupportedCommandExceptionSchema } },
    },
  },
})

export const postXAmzTargetSpencerFrontendServiceCreateRepositoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SpencerFrontendService.CreateRepository',
  description:
    'Creates a repository in a public registry. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR repositories</a> in the <i>Amazon Elastic Container Registry User Guide</i>.',
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
        .literal('SpencerFrontendService.CreateRepository')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SpencerFrontendService.CreateRepository'] },
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
      description: 'UnsupportedCommandException',
      content: { 'application/json': { schema: UnsupportedCommandExceptionSchema } },
    },
  },
})

export const postXAmzTargetSpencerFrontendServiceDeleteRepositoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SpencerFrontendService.DeleteRepository',
  description:
    'Deletes a repository in a public registry. If the repository contains images, you must either manually delete all images in the repository or use the <code>force</code> option. This option deletes all images on your behalf before deleting the repository.',
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
        .literal('SpencerFrontendService.DeleteRepository')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SpencerFrontendService.DeleteRepository'] },
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
      description: 'UnsupportedCommandException',
      content: { 'application/json': { schema: UnsupportedCommandExceptionSchema } },
    },
  },
})

export const postXAmzTargetSpencerFrontendServiceDeleteRepositoryPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SpencerFrontendService.DeleteRepositoryPolicy',
  description: "Deletes the repository policy that's associated with the specified repository.",
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
        .literal('SpencerFrontendService.DeleteRepositoryPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SpencerFrontendService.DeleteRepositoryPolicy'] },
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
    484: {
      description: 'UnsupportedCommandException',
      content: { 'application/json': { schema: UnsupportedCommandExceptionSchema } },
    },
  },
})

export const postXAmzTargetSpencerFrontendServiceDescribeImageTagsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SpencerFrontendService.DescribeImageTags',
  description: 'Returns the image tag details for a repository in a public registry.',
  operationId: 'DescribeImageTags',
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
        .literal('SpencerFrontendService.DescribeImageTags')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SpencerFrontendService.DescribeImageTags'] },
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
      content: { 'application/json': { schema: DescribeImageTagsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeImageTagsResponseSchema } },
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
      description: 'UnsupportedCommandException',
      content: { 'application/json': { schema: UnsupportedCommandExceptionSchema } },
    },
  },
})

export const postXAmzTargetSpencerFrontendServiceDescribeImagesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SpencerFrontendService.DescribeImages',
  description:
    "<p>Returns metadata that's related to the images in a repository in a public registry.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size. Therefore, it might return a larger image size than the image sizes that are returned by <a>DescribeImages</a>.</p> </note>",
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
        .literal('SpencerFrontendService.DescribeImages')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SpencerFrontendService.DescribeImages'] },
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
    484: {
      description: 'UnsupportedCommandException',
      content: { 'application/json': { schema: UnsupportedCommandExceptionSchema } },
    },
  },
})

export const postXAmzTargetSpencerFrontendServiceDescribeRegistriesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SpencerFrontendService.DescribeRegistries',
  description: 'Returns details for a public registry.',
  operationId: 'DescribeRegistries',
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
        .literal('SpencerFrontendService.DescribeRegistries')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SpencerFrontendService.DescribeRegistries'] },
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
      content: { 'application/json': { schema: DescribeRegistriesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRegistriesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'UnsupportedCommandException',
      content: { 'application/json': { schema: UnsupportedCommandExceptionSchema } },
    },
    482: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetSpencerFrontendServiceDescribeRepositoriesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SpencerFrontendService.DescribeRepositories',
  description: 'Describes repositories that are in a public registry.',
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
        .literal('SpencerFrontendService.DescribeRepositories')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SpencerFrontendService.DescribeRepositories'] },
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
    483: {
      description: 'UnsupportedCommandException',
      content: { 'application/json': { schema: UnsupportedCommandExceptionSchema } },
    },
  },
})

export const postXAmzTargetSpencerFrontendServiceGetAuthorizationTokenRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SpencerFrontendService.GetAuthorizationToken',
  description:
    'Retrieves an authorization token. An authorization token represents your IAM authentication credentials. You can use it to access any Amazon ECR registry that your IAM principal has access to. The authorization token is valid for 12 hours. This API requires the <code>ecr-public:GetAuthorizationToken</code> and <code>sts:GetServiceBearerToken</code> permissions.',
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
        .literal('SpencerFrontendService.GetAuthorizationToken')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SpencerFrontendService.GetAuthorizationToken'] },
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
    482: {
      description: 'UnsupportedCommandException',
      content: { 'application/json': { schema: UnsupportedCommandExceptionSchema } },
    },
  },
})

export const postXAmzTargetSpencerFrontendServiceGetRegistryCatalogDataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SpencerFrontendService.GetRegistryCatalogData',
  description: 'Retrieves catalog metadata for a public registry.',
  operationId: 'GetRegistryCatalogData',
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
        .literal('SpencerFrontendService.GetRegistryCatalogData')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SpencerFrontendService.GetRegistryCatalogData'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetRegistryCatalogDataRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRegistryCatalogDataResponseSchema } },
    },
    480: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
    481: {
      description: 'UnsupportedCommandException',
      content: { 'application/json': { schema: UnsupportedCommandExceptionSchema } },
    },
  },
})

export const postXAmzTargetSpencerFrontendServiceGetRepositoryCatalogDataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SpencerFrontendService.GetRepositoryCatalogData',
  description:
    'Retrieve catalog metadata for a repository in a public registry. This metadata is displayed publicly in the Amazon ECR Public Gallery.',
  operationId: 'GetRepositoryCatalogData',
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
        .literal('SpencerFrontendService.GetRepositoryCatalogData')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SpencerFrontendService.GetRepositoryCatalogData'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetRepositoryCatalogDataRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRepositoryCatalogDataResponseSchema } },
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
      description: 'RepositoryCatalogDataNotFoundException',
      content: { 'application/json': { schema: RepositoryCatalogDataNotFoundExceptionSchema } },
    },
    483: {
      description: 'RepositoryNotFoundException',
      content: { 'application/json': { schema: RepositoryNotFoundExceptionSchema } },
    },
    484: {
      description: 'UnsupportedCommandException',
      content: { 'application/json': { schema: UnsupportedCommandExceptionSchema } },
    },
  },
})

export const postXAmzTargetSpencerFrontendServiceGetRepositoryPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SpencerFrontendService.GetRepositoryPolicy',
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
        .literal('SpencerFrontendService.GetRepositoryPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SpencerFrontendService.GetRepositoryPolicy'] },
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
    484: {
      description: 'UnsupportedCommandException',
      content: { 'application/json': { schema: UnsupportedCommandExceptionSchema } },
    },
  },
})

export const postXAmzTargetSpencerFrontendServiceInitiateLayerUploadRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SpencerFrontendService.InitiateLayerUpload',
  description:
    "<p>Notifies Amazon ECR that you intend to upload an image layer.</p> <p>When an image is pushed, the InitiateLayerUpload API is called once for each image layer that hasn't already been uploaded. Whether an image layer uploads is determined by the BatchCheckLayerAvailability API action.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>",
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
        .literal('SpencerFrontendService.InitiateLayerUpload')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SpencerFrontendService.InitiateLayerUpload'] },
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
      description: 'RegistryNotFoundException',
      content: { 'application/json': { schema: RegistryNotFoundExceptionSchema } },
    },
    484: {
      description: 'UnsupportedCommandException',
      content: { 'application/json': { schema: UnsupportedCommandExceptionSchema } },
    },
  },
})

export const postXAmzTargetSpencerFrontendServiceListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SpencerFrontendService.ListTagsForResource',
  description: 'List the tags for an Amazon ECR Public resource.',
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
        .literal('SpencerFrontendService.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SpencerFrontendService.ListTagsForResource'] },
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
      description: 'UnsupportedCommandException',
      content: { 'application/json': { schema: UnsupportedCommandExceptionSchema } },
    },
    483: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetSpencerFrontendServicePutImageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SpencerFrontendService.PutImage',
  description:
    '<p>Creates or updates the image manifest and tags that are associated with an image.</p> <p>When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags that are associated with the image.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>',
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
        .literal('SpencerFrontendService.PutImage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SpencerFrontendService.PutImage'] },
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
      description: 'RegistryNotFoundException',
      content: { 'application/json': { schema: RegistryNotFoundExceptionSchema } },
    },
    490: {
      description: 'UnsupportedCommandException',
      content: { 'application/json': { schema: UnsupportedCommandExceptionSchema } },
    },
  },
})

export const postXAmzTargetSpencerFrontendServicePutRegistryCatalogDataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SpencerFrontendService.PutRegistryCatalogData',
  description: 'Create or update the catalog data for a public registry.',
  operationId: 'PutRegistryCatalogData',
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
        .literal('SpencerFrontendService.PutRegistryCatalogData')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SpencerFrontendService.PutRegistryCatalogData'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutRegistryCatalogDataRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutRegistryCatalogDataResponseSchema } },
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
      description: 'UnsupportedCommandException',
      content: { 'application/json': { schema: UnsupportedCommandExceptionSchema } },
    },
  },
})

export const postXAmzTargetSpencerFrontendServicePutRepositoryCatalogDataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SpencerFrontendService.PutRepositoryCatalogData',
  description: 'Creates or updates the catalog data for a repository in a public registry.',
  operationId: 'PutRepositoryCatalogData',
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
        .literal('SpencerFrontendService.PutRepositoryCatalogData')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SpencerFrontendService.PutRepositoryCatalogData'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutRepositoryCatalogDataRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutRepositoryCatalogDataResponseSchema } },
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
      description: 'UnsupportedCommandException',
      content: { 'application/json': { schema: UnsupportedCommandExceptionSchema } },
    },
  },
})

export const postXAmzTargetSpencerFrontendServiceSetRepositoryPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SpencerFrontendService.SetRepositoryPolicy',
  description:
    'Applies a repository policy to the specified public repository to control access permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository Policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.',
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
        .literal('SpencerFrontendService.SetRepositoryPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SpencerFrontendService.SetRepositoryPolicy'] },
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
    483: {
      description: 'UnsupportedCommandException',
      content: { 'application/json': { schema: UnsupportedCommandExceptionSchema } },
    },
  },
})

export const postXAmzTargetSpencerFrontendServiceTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SpencerFrontendService.TagResource',
  description:
    "Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted.",
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
        .literal('SpencerFrontendService.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SpencerFrontendService.TagResource'] },
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
      description: 'UnsupportedCommandException',
      content: { 'application/json': { schema: UnsupportedCommandExceptionSchema } },
    },
    485: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetSpencerFrontendServiceUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SpencerFrontendService.UntagResource',
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
        .literal('SpencerFrontendService.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SpencerFrontendService.UntagResource'] },
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
      description: 'UnsupportedCommandException',
      content: { 'application/json': { schema: UnsupportedCommandExceptionSchema } },
    },
    485: {
      description: 'ServerException',
      content: { 'application/json': { schema: ServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetSpencerFrontendServiceUploadLayerPartRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SpencerFrontendService.UploadLayerPart',
  description:
    '<p>Uploads an image layer part to Amazon ECR.</p> <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size of each image layer part can be 20971520 bytes (about 20MB). The UploadLayerPart API is called once for each new image layer part.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>',
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
        .literal('SpencerFrontendService.UploadLayerPart')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SpencerFrontendService.UploadLayerPart'] },
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
      description: 'RegistryNotFoundException',
      content: { 'application/json': { schema: RegistryNotFoundExceptionSchema } },
    },
    487: {
      description: 'UnsupportedCommandException',
      content: { 'application/json': { schema: UnsupportedCommandExceptionSchema } },
    },
  },
})
