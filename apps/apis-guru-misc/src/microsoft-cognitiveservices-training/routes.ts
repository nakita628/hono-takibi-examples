import { createRoute, z } from '@hono/zod-openapi'

const BoundingBoxSchema = z
  .object({
    height: z.float32().openapi({ description: 'Height.', readOnly: false }),
    left: z.float32().openapi({ description: 'Coordinate of the left boundary.', readOnly: false }),
    top: z.float32().openapi({ description: 'Coordinate of the top boundary.', readOnly: false }),
    width: z.float32().openapi({ description: 'Width.', readOnly: false }),
  })
  .openapi({
    description: 'Bounding box that defines a region of an image.',
    required: ['left', 'top', 'width', 'height'],
  })
  .openapi('BoundingBox')

const CustomVisionErrorSchema = z
  .object({
    code: z
      .enum([
        'NoError',
        'BadRequest',
        'BadRequestExceededBatchSize',
        'BadRequestNotSupported',
        'BadRequestInvalidIds',
        'BadRequestProjectName',
        'BadRequestProjectNameNotUnique',
        'BadRequestProjectDescription',
        'BadRequestProjectUnknownDomain',
        'BadRequestProjectUnknownClassification',
        'BadRequestProjectUnsupportedDomainTypeChange',
        'BadRequestProjectUnsupportedExportPlatform',
        'BadRequestProjectImagePreprocessingSettings',
        'BadRequestProjectDuplicated',
        'BadRequestIterationName',
        'BadRequestIterationNameNotUnique',
        'BadRequestIterationDescription',
        'BadRequestIterationIsNotTrained',
        'BadRequestIterationValidationFailed',
        'BadRequestWorkspaceCannotBeModified',
        'BadRequestWorkspaceNotDeletable',
        'BadRequestTagName',
        'BadRequestTagNameNotUnique',
        'BadRequestTagDescription',
        'BadRequestTagType',
        'BadRequestMultipleNegativeTag',
        'BadRequestImageTags',
        'BadRequestImageRegions',
        'BadRequestNegativeAndRegularTagOnSameImage',
        'BadRequestRequiredParamIsNull',
        'BadRequestIterationIsPublished',
        'BadRequestInvalidPublishName',
        'BadRequestInvalidPublishTarget',
        'BadRequestUnpublishFailed',
        'BadRequestIterationNotPublished',
        'BadRequestSubscriptionApi',
        'BadRequestExceedProjectLimit',
        'BadRequestExceedIterationPerProjectLimit',
        'BadRequestExceedTagPerProjectLimit',
        'BadRequestExceedTagPerImageLimit',
        'BadRequestExceededQuota',
        'BadRequestCannotMigrateProjectWithName',
        'BadRequestNotLimitedTrial',
        'BadRequestImageBatch',
        'BadRequestImageStream',
        'BadRequestImageUrl',
        'BadRequestImageFormat',
        'BadRequestImageSizeBytes',
        'BadRequestImageExceededCount',
        'BadRequestTrainingNotNeeded',
        'BadRequestTrainingNotNeededButTrainingPipelineUpdated',
        'BadRequestTrainingValidationFailed',
        'BadRequestClassificationTrainingValidationFailed',
        'BadRequestMultiClassClassificationTrainingValidationFailed',
        'BadRequestMultiLabelClassificationTrainingValidationFailed',
        'BadRequestDetectionTrainingValidationFailed',
        'BadRequestTrainingAlreadyInProgress',
        'BadRequestDetectionTrainingNotAllowNegativeTag',
        'BadRequestInvalidEmailAddress',
        'BadRequestDomainNotSupportedForAdvancedTraining',
        'BadRequestExportPlatformNotSupportedForAdvancedTraining',
        'BadRequestReservedBudgetInHoursNotEnoughForAdvancedTraining',
        'BadRequestExportValidationFailed',
        'BadRequestExportAlreadyInProgress',
        'BadRequestPredictionIdsMissing',
        'BadRequestPredictionIdsExceededCount',
        'BadRequestPredictionTagsExceededCount',
        'BadRequestPredictionResultsExceededCount',
        'BadRequestPredictionInvalidApplicationName',
        'BadRequestPredictionInvalidQueryParameters',
        'BadRequestInvalidImportToken',
        'BadRequestExportWhileTraining',
        'BadRequestInvalid',
        'UnsupportedMediaType',
        'Forbidden',
        'ForbiddenUser',
        'ForbiddenUserResource',
        'ForbiddenUserSignupDisabled',
        'ForbiddenUserSignupAllowanceExceeded',
        'ForbiddenUserDoesNotExist',
        'ForbiddenUserDisabled',
        'ForbiddenUserInsufficientCapability',
        'ForbiddenDRModeEnabled',
        'ForbiddenInvalid',
        'NotFound',
        'NotFoundProject',
        'NotFoundProjectDefaultIteration',
        'NotFoundIteration',
        'NotFoundIterationPerformance',
        'NotFoundTag',
        'NotFoundImage',
        'NotFoundDomain',
        'NotFoundApimSubscription',
        'NotFoundInvalid',
        'Conflict',
        'ConflictInvalid',
        'ErrorUnknown',
        'ErrorIterationCopyFailed',
        'ErrorPreparePerformanceMigrationFailed',
        'ErrorProjectInvalidWorkspace',
        'ErrorProjectInvalidPipelineConfiguration',
        'ErrorProjectInvalidDomain',
        'ErrorProjectTrainingRequestFailed',
        'ErrorProjectImportRequestFailed',
        'ErrorProjectExportRequestFailed',
        'ErrorFeaturizationServiceUnavailable',
        'ErrorFeaturizationQueueTimeout',
        'ErrorFeaturizationInvalidFeaturizer',
        'ErrorFeaturizationAugmentationUnavailable',
        'ErrorFeaturizationUnrecognizedJob',
        'ErrorFeaturizationAugmentationError',
        'ErrorExporterInvalidPlatform',
        'ErrorExporterInvalidFeaturizer',
        'ErrorExporterInvalidClassifier',
        'ErrorPredictionServiceUnavailable',
        'ErrorPredictionModelNotFound',
        'ErrorPredictionModelNotCached',
        'ErrorPrediction',
        'ErrorPredictionStorage',
        'ErrorRegionProposal',
        'ErrorInvalid',
      ])
      .openapi({
        description: 'The error code.',
        'x-ms-enum': { modelAsString: true, name: 'CustomVisionErrorCodes' },
      }),
    message: z
      .string()
      .openapi({ description: 'A message explaining the error reported by the service.' }),
  })
  .openapi({ required: ['code', 'message'] })
  .openapi('CustomVisionError')

const DomainSchema = z
  .object({
    enabled: z.boolean().exactOptional().openapi({ readOnly: true }),
    exportable: z.boolean().exactOptional().openapi({ readOnly: true }),
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    name: z.string().exactOptional().openapi({ readOnly: true }),
    type: z
      .enum(['Classification', 'ObjectDetection'])
      .exactOptional()
      .openapi({ readOnly: true, 'x-ms-enum': { modelAsString: true, name: 'DomainType' } }),
  })
  .openapi({ required: [] })
  .openapi('Domain')

const ExportSchema = z
  .object({
    downloadUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI used to download the model.', readOnly: true }),
    flavor: z
      .enum(['Linux', 'Windows', 'ONNX10', 'ONNX12', 'ARM', 'TensorFlowNormal', 'TensorFlowLite'])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Flavor of the export. These are specializations of the export platform.\r\nDocker platform has valid flavors: Linux, Windows, ARM.\r\nTensorflow platform has valid flavors: TensorFlowNormal, TensorFlowLite.\r\nONNX platform has valid flavors: ONNX10, ONNX12.',
        readOnly: true,
        'x-ms-enum': { modelAsString: true, name: 'ExportFlavor' },
      }),
    newerVersionAvailable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates an updated version of the export package is available and should be re-exported for the latest changes.',
        readOnly: true,
      }),
    platform: z
      .enum(['CoreML', 'TensorFlow', 'DockerFile', 'ONNX', 'VAIDK'])
      .exactOptional()
      .openapi({
        description: 'Platform of the export.',
        readOnly: true,
        'x-ms-enum': { modelAsString: true, name: 'ExportPlatform' },
      }),
    status: z
      .enum(['Exporting', 'Failed', 'Done'])
      .exactOptional()
      .openapi({
        description: 'Status of the export.',
        readOnly: true,
        'x-ms-enum': { modelAsString: true, name: 'ExportStatus' },
      }),
  })
  .openapi({ required: [] })
  .openapi('Export')

const ImageRegionSchema = z
  .object({
    created: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    height: z.float32().openapi({ description: 'Height.', readOnly: false }),
    left: z.float32().openapi({ description: 'Coordinate of the left boundary.', readOnly: false }),
    regionId: z.uuid().exactOptional().openapi({ readOnly: true }),
    tagId: z
      .uuid()
      .openapi({ description: 'Id of the tag associated with this region.', readOnly: false }),
    tagName: z.string().exactOptional().openapi({ readOnly: true }),
    top: z.float32().openapi({ description: 'Coordinate of the top boundary.', readOnly: false }),
    width: z.float32().openapi({ description: 'Width.', readOnly: false }),
  })
  .openapi({ required: ['tagId', 'left', 'top', 'width', 'height'] })
  .openapi('ImageRegion')

const ImageTagSchema = z
  .object({
    created: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    tagId: z.uuid().exactOptional().openapi({ readOnly: true }),
    tagName: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('ImageTag')

const ImageSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date the image was created.', readOnly: true }),
    height: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Height of the image.', readOnly: true }),
    id: z.uuid().exactOptional().openapi({ description: 'Id of the image.', readOnly: true }),
    originalImageUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI to the original uploaded image.', readOnly: true }),
    regions: z
      .array(ImageRegionSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Regions associated with this image.', readOnly: true }),
    resizedImageUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URI to the (resized) image used for training.',
        readOnly: true,
      }),
    tags: z
      .array(ImageTagSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Tags associated with this image.', readOnly: true }),
    thumbnailUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI to the thumbnail of the original image.', readOnly: true }),
    width: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Width of the image.', readOnly: true }),
  })
  .openapi({ description: 'Image model to be sent as JSON.', required: [] })
  .openapi('Image')

const ImageCreateResultSchema = z
  .object({
    image: ImageSchema.exactOptional(),
    sourceUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Source URL of the image.', readOnly: true }),
    status: z
      .enum([
        'OK',
        'OKDuplicate',
        'ErrorSource',
        'ErrorImageFormat',
        'ErrorImageSize',
        'ErrorStorage',
        'ErrorLimitExceed',
        'ErrorTagLimitExceed',
        'ErrorRegionLimitExceed',
        'ErrorUnknown',
        'ErrorNegativeAndRegularTagOnSameImage',
      ])
      .exactOptional()
      .openapi({
        description: 'Status of the image creation.',
        readOnly: true,
        'x-ms-enum': { modelAsString: true, name: 'ImageCreateStatus' },
      }),
  })
  .openapi({ required: [] })
  .openapi('ImageCreateResult')

const ImageCreateSummarySchema = z
  .object({
    images: z
      .array(ImageCreateResultSchema)
      .exactOptional()
      .openapi({ description: 'List of the image creation results.', readOnly: true }),
    isBatchSuccessful: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if all of the images in the batch were created successfully, otherwise false.',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('ImageCreateSummary')

const RegionSchema = z
  .object({
    height: z.float32().openapi({ description: 'Height.', readOnly: false }),
    left: z.float32().openapi({ description: 'Coordinate of the left boundary.', readOnly: false }),
    tagId: z
      .uuid()
      .openapi({ description: 'Id of the tag associated with this region.', readOnly: false }),
    top: z.float32().openapi({ description: 'Coordinate of the top boundary.', readOnly: false }),
    width: z.float32().openapi({ description: 'Width.', readOnly: false }),
  })
  .openapi({ required: ['tagId', 'left', 'top', 'width', 'height'] })
  .openapi('Region')

const ImageFileCreateEntrySchema = z
  .object({
    contents: z.string().exactOptional().openapi({ readOnly: false }),
    name: z.string().exactOptional().openapi({ readOnly: false }),
    regions: z.array(RegionSchema).exactOptional().openapi({ readOnly: false }),
    tagIds: z.array(z.uuid()).exactOptional().openapi({ readOnly: false }),
  })
  .openapi({ required: [] })
  .openapi('ImageFileCreateEntry')

const ImageFileCreateBatchSchema = z
  .object({
    images: z.array(ImageFileCreateEntrySchema).exactOptional().openapi({ readOnly: false }),
    tagIds: z.array(z.uuid()).exactOptional().openapi({ readOnly: false }),
  })
  .openapi({ required: [] })
  .openapi('ImageFileCreateBatch')

const ImageIdCreateEntrySchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ description: 'Id of the image.', readOnly: false }),
    regions: z.array(RegionSchema).exactOptional().openapi({ readOnly: false }),
    tagIds: z.array(z.uuid()).exactOptional().openapi({ readOnly: false }),
  })
  .openapi({ required: [] })
  .openapi('ImageIdCreateEntry')

const ImageIdCreateBatchSchema = z
  .object({
    images: z.array(ImageIdCreateEntrySchema).exactOptional().openapi({ readOnly: false }),
    tagIds: z.array(z.uuid()).exactOptional().openapi({ readOnly: false }),
  })
  .openapi({ required: [] })
  .openapi('ImageIdCreateBatch')

const PredictionSchema = z
  .object({
    boundingBox: BoundingBoxSchema.exactOptional(),
    probability: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Probability of the tag.', readOnly: true }),
    tagId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Id of the predicted tag.', readOnly: true }),
    tagName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Name of the predicted tag.', readOnly: true }),
  })
  .openapi({ description: 'Prediction result.', required: [] })
  .openapi('Prediction')

const ImagePerformanceSchema = z
  .object({
    created: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    height: z.int32().exactOptional().openapi({ readOnly: true }),
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    imageUri: z.string().exactOptional().openapi({ readOnly: true }),
    predictions: z.array(PredictionSchema).nullable().exactOptional().openapi({ readOnly: true }),
    regions: z.array(ImageRegionSchema).nullable().exactOptional().openapi({ readOnly: true }),
    tags: z.array(ImageTagSchema).nullable().exactOptional().openapi({ readOnly: true }),
    thumbnailUri: z.string().exactOptional().openapi({ readOnly: true }),
    width: z.int32().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ description: 'Image performance model.', required: [] })
  .openapi('ImagePerformance')

const ImagePredictionSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date this prediction was created.', readOnly: true }),
    id: z.uuid().exactOptional().openapi({ description: 'Prediction Id.', readOnly: true }),
    iteration: z.uuid().exactOptional().openapi({ description: 'Iteration Id.', readOnly: true }),
    predictions: z
      .array(PredictionSchema)
      .exactOptional()
      .openapi({ description: 'List of predictions.', readOnly: true }),
    project: z.uuid().exactOptional().openapi({ description: 'Project Id.', readOnly: true }),
  })
  .openapi({ description: 'Result of an image prediction request.', required: [] })
  .openapi('ImagePrediction')

const ImageProcessingSettingsSchema = z
  .object({
    augmentationMethods: z
      .record(z.string(), z.boolean())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Gets or sets enabled image transforms. The key corresponds to the transform name. If value is set to true, then correspondent transform is enabled. Otherwise this transform will not be used.\r\nAugmentation will be uniformly distributed among enabled transforms.',
        readOnly: false,
      }),
  })
  .openapi({
    description: 'Represents image preprocessing settings used by image augmentation.',
    required: [],
  })
  .openapi('ImageProcessingSettings')

const ImageRegionCreateEntrySchema = z
  .object({
    height: z.float32().openapi({ description: 'Height.', readOnly: false }),
    imageId: z.uuid().openapi({ description: 'Id of the image.', readOnly: false }),
    left: z.float32().openapi({ description: 'Coordinate of the left boundary.', readOnly: false }),
    tagId: z
      .uuid()
      .openapi({ description: 'Id of the tag associated with this region.', readOnly: false }),
    top: z.float32().openapi({ description: 'Coordinate of the top boundary.', readOnly: false }),
    width: z.float32().openapi({ description: 'Width.', readOnly: false }),
  })
  .openapi({
    description: 'Entry associating a region to an image.',
    required: ['imageId', 'tagId', 'left', 'top', 'width', 'height'],
  })
  .openapi('ImageRegionCreateEntry')

const ImageRegionCreateBatchSchema = z
  .object({
    regions: z.array(ImageRegionCreateEntrySchema).exactOptional().openapi({ readOnly: false }),
  })
  .openapi({ description: 'Batch of image region information to create.', required: [] })
  .openapi('ImageRegionCreateBatch')

const ImageRegionCreateResultSchema = z
  .object({
    created: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    height: z.float32().openapi({ description: 'Height.', readOnly: false }),
    imageId: z.uuid().exactOptional().openapi({ readOnly: true }),
    left: z.float32().openapi({ description: 'Coordinate of the left boundary.', readOnly: false }),
    regionId: z.uuid().exactOptional().openapi({ readOnly: true }),
    tagId: z
      .uuid()
      .openapi({ description: 'Id of the tag associated with this region.', readOnly: false }),
    tagName: z.string().exactOptional().openapi({ readOnly: true }),
    top: z.float32().openapi({ description: 'Coordinate of the top boundary.', readOnly: false }),
    width: z.float32().openapi({ description: 'Width.', readOnly: false }),
  })
  .openapi({ required: ['tagId', 'left', 'top', 'width', 'height'] })
  .openapi('ImageRegionCreateResult')

const ImageRegionCreateSummarySchema = z
  .object({
    created: z
      .array(ImageRegionCreateResultSchema)
      .nullable()
      .exactOptional()
      .openapi({ readOnly: false }),
    duplicated: z
      .array(ImageRegionCreateEntrySchema)
      .nullable()
      .exactOptional()
      .openapi({ readOnly: false }),
    exceeded: z
      .array(ImageRegionCreateEntrySchema)
      .nullable()
      .exactOptional()
      .openapi({ readOnly: false }),
  })
  .openapi({ required: [] })
  .openapi('ImageRegionCreateSummary')

const RegionProposalSchema = z
  .object({
    boundingBox: BoundingBoxSchema.exactOptional(),
    confidence: z.float32().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('RegionProposal')

const ImageRegionProposalSchema = z
  .object({
    imageId: z.uuid().exactOptional().openapi({ readOnly: true }),
    projectId: z.uuid().exactOptional().openapi({ readOnly: true }),
    proposals: z.array(RegionProposalSchema).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('ImageRegionProposal')

const ImageTagCreateEntrySchema = z
  .object({
    imageId: z.uuid().exactOptional().openapi({ description: 'Id of the image.', readOnly: false }),
    tagId: z.uuid().exactOptional().openapi({ description: 'Id of the tag.', readOnly: false }),
  })
  .openapi({ description: 'Entry associating a tag to an image.', required: [] })
  .openapi('ImageTagCreateEntry')

const ImageTagCreateBatchSchema = z
  .object({
    tags: z
      .array(ImageTagCreateEntrySchema)
      .exactOptional()
      .openapi({ description: 'Image Tag entries to include in this batch.', readOnly: false }),
  })
  .openapi({ description: 'Batch of image tags.', required: [] })
  .openapi('ImageTagCreateBatch')

const ImageTagCreateSummarySchema = z
  .object({
    created: z
      .array(ImageTagCreateEntrySchema)
      .nullable()
      .exactOptional()
      .openapi({ readOnly: false }),
    duplicated: z
      .array(ImageTagCreateEntrySchema)
      .nullable()
      .exactOptional()
      .openapi({ readOnly: false }),
    exceeded: z
      .array(ImageTagCreateEntrySchema)
      .nullable()
      .exactOptional()
      .openapi({ readOnly: false }),
  })
  .openapi({ required: [] })
  .openapi('ImageTagCreateSummary')

const ImageUrlSchema = z
  .object({ url: z.string().openapi({ description: 'Url of the image.', readOnly: false }) })
  .openapi({ description: 'Image url.', required: ['url'] })
  .openapi('ImageUrl')

const ImageUrlCreateEntrySchema = z
  .object({
    regions: z.array(RegionSchema).exactOptional().openapi({ readOnly: false }),
    tagIds: z.array(z.uuid()).exactOptional().openapi({ readOnly: false }),
    url: z.string().openapi({ description: 'Url of the image.', readOnly: false }),
  })
  .openapi({ required: ['url'] })
  .openapi('ImageUrlCreateEntry')

const ImageUrlCreateBatchSchema = z
  .object({
    images: z.array(ImageUrlCreateEntrySchema).exactOptional().openapi({ readOnly: false }),
    tagIds: z.array(z.uuid()).exactOptional().openapi({ readOnly: false }),
  })
  .openapi({ required: [] })
  .openapi('ImageUrlCreateBatch')

const IterationSchema = z
  .object({
    classificationType: z
      .enum(['Multiclass', 'Multilabel'])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Gets the classification type of the project.',
        readOnly: true,
        'x-ms-enum': { modelAsString: true, name: 'Classifier' },
      }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Gets the time this iteration was completed.', readOnly: true }),
    domainId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Get or sets a guid of the domain the iteration has been trained on.',
        readOnly: true,
      }),
    exportable: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the iteration can be exported to another format for download.',
        readOnly: true,
      }),
    exportableTo: z
      .array(z.enum(['CoreML', 'TensorFlow', 'DockerFile', 'ONNX', 'VAIDK']))
      .exactOptional()
      .openapi({ description: 'A set of platforms this iteration can export to.', readOnly: true }),
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Gets the id of the iteration.', readOnly: true }),
    lastModified: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Gets the time this iteration was last modified.', readOnly: true }),
    name: z
      .string()
      .openapi({ description: 'Gets or sets the name of the iteration.', readOnly: false }),
    originalPublishResourceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Resource Provider Id this iteration was originally published to.',
        readOnly: true,
      }),
    projectId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Gets the project id of the iteration.', readOnly: true }),
    publishName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the published model.', readOnly: true }),
    reservedBudgetInHours: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Gets the reserved advanced training budget for the iteration.',
        readOnly: true,
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'Gets the current iteration status.', readOnly: true }),
    trainedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Gets the time this iteration was last modified.', readOnly: true }),
    trainingTimeInMinutes: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Gets the training time for the iteration.', readOnly: true }),
    trainingType: z
      .enum(['Regular', 'Advanced'])
      .exactOptional()
      .openapi({
        description: 'Gets the training type of the iteration.',
        readOnly: true,
        'x-ms-enum': { modelAsString: true, name: 'TrainingType' },
      }),
  })
  .openapi({ description: 'Iteration model to be sent over JSON.', required: ['name'] })
  .openapi('Iteration')

const TagPerformanceSchema = z
  .object({
    averagePrecision: z
      .float32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Gets the average precision when applicable.', readOnly: true }),
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    name: z.string().exactOptional().openapi({ readOnly: true }),
    precision: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Gets the precision.', readOnly: true }),
    precisionStdDeviation: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Gets the standard deviation for the precision.', readOnly: true }),
    recall: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Gets the recall.', readOnly: true }),
    recallStdDeviation: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Gets the standard deviation for the recall.', readOnly: true }),
  })
  .openapi({
    description: 'Represents performance data for a particular tag in a trained iteration.',
    required: [],
  })
  .openapi('TagPerformance')

const IterationPerformanceSchema = z
  .object({
    averagePrecision: z
      .float32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Gets the average precision when applicable.', readOnly: true }),
    perTagPerformance: z
      .array(TagPerformanceSchema)
      .exactOptional()
      .openapi({
        description: 'Gets the per-tag performance details for this iteration.',
        readOnly: true,
      }),
    precision: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Gets the precision.', readOnly: true }),
    precisionStdDeviation: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Gets the standard deviation for the precision.', readOnly: true }),
    recall: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Gets the recall.', readOnly: true }),
    recallStdDeviation: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Gets the standard deviation for the recall.', readOnly: true }),
  })
  .openapi({
    description: 'Represents the detailed performance data for a trained iteration.',
    required: [],
  })
  .openapi('IterationPerformance')

const StoredImagePredictionSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date this prediction was created.', readOnly: true }),
    domain: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Domain used for the prediction.', readOnly: true }),
    id: z.uuid().exactOptional().openapi({ description: 'Prediction Id.', readOnly: true }),
    iteration: z.uuid().exactOptional().openapi({ description: 'Iteration Id.', readOnly: true }),
    originalImageUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI to the original prediction image.', readOnly: true }),
    predictions: z
      .array(PredictionSchema)
      .exactOptional()
      .openapi({ description: 'List of predictions.', readOnly: true }),
    project: z.uuid().exactOptional().openapi({ description: 'Project Id.', readOnly: true }),
    resizedImageUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI to the (resized) prediction image.', readOnly: true }),
    thumbnailUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URI to the thumbnail of the original prediction image.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Result of an image prediction request.', required: [] })
  .openapi('StoredImagePrediction')

const PredictionQueryTagSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: false }),
    maxThreshold: z.float32().exactOptional().openapi({ readOnly: false }),
    minThreshold: z.float32().exactOptional().openapi({ readOnly: false }),
  })
  .openapi({ required: [] })
  .openapi('PredictionQueryTag')

const PredictionQueryTokenSchema = z
  .object({
    application: z.string().exactOptional().openapi({ readOnly: false }),
    continuation: z.string().exactOptional().openapi({ readOnly: false }),
    endTime: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ readOnly: false }),
    iterationId: z.uuid().nullable().exactOptional().openapi({ readOnly: false }),
    maxCount: z.int32().exactOptional().openapi({ readOnly: false }),
    orderBy: z
      .enum(['Newest', 'Oldest', 'Suggested'])
      .exactOptional()
      .openapi({ readOnly: false, 'x-ms-enum': { modelAsString: true, name: 'OrderBy' } }),
    session: z.string().exactOptional().openapi({ readOnly: false }),
    startTime: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ readOnly: false }),
    tags: z.array(PredictionQueryTagSchema).exactOptional().openapi({ readOnly: false }),
  })
  .openapi({ required: [] })
  .openapi('PredictionQueryToken')

const PredictionQueryResultSchema = z
  .object({
    results: z
      .array(StoredImagePredictionSchema)
      .exactOptional()
      .openapi({ description: 'Result of an prediction request.', readOnly: true }),
    token: PredictionQueryTokenSchema.exactOptional(),
  })
  .openapi({
    description:
      'Query result of the prediction images that were sent to your prediction endpoint.',
    required: [],
  })
  .openapi('PredictionQueryResult')

const ProjectSettingsSchema = z
  .object({
    classificationType: z
      .enum(['Multiclass', 'Multilabel'])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Gets or sets the classification type of the project.',
        readOnly: false,
        'x-ms-enum': { modelAsString: true, name: 'Classifier' },
      }),
    detectionParameters: z
      .string()
      .exactOptional()
      .openapi({ description: 'Detection parameters in use, if any.', readOnly: true }),
    domainId: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Gets or sets the id of the Domain to use with this project.',
        readOnly: false,
      }),
    imageProcessingSettings: ImageProcessingSettingsSchema.exactOptional(),
    targetExportPlatforms: z
      .array(z.enum(['CoreML', 'TensorFlow', 'DockerFile', 'ONNX', 'VAIDK']))
      .exactOptional()
      .openapi({
        description: 'A list of ExportPlatform that the trained model should be able to support.',
        readOnly: false,
      }),
    useNegativeSet: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Indicates if negative set is being used.', readOnly: true }),
  })
  .openapi({ description: 'Represents settings associated with a project.', required: [] })
  .openapi('ProjectSettings')

const ProjectSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Gets the date this project was created.', readOnly: true }),
    description: z
      .string()
      .nullable()
      .openapi({ description: 'Gets or sets the description of the project.', readOnly: false }),
    drModeEnabled: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Gets if the Disaster Recovery (DR) mode is on, indicating the project is temporarily read-only.',
        readOnly: true,
      }),
    id: z.uuid().exactOptional().openapi({ description: 'Gets the project id.', readOnly: true }),
    lastModified: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Gets the date this project was last modified.', readOnly: true }),
    name: z
      .string()
      .openapi({ description: 'Gets or sets the name of the project.', readOnly: false }),
    settings: ProjectSettingsSchema,
    status: z
      .enum(['Succeeded', 'Importing', 'Failed'])
      .exactOptional()
      .openapi({
        description: 'Gets the status of the project.',
        readOnly: false,
        'x-ms-enum': { modelAsString: true, name: 'ProjectStatus' },
      }),
    thumbnailUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Gets the thumbnail url representing the image.', readOnly: true }),
  })
  .openapi({ description: 'Represents a project.', required: ['name', 'description', 'settings'] })
  .openapi('Project')

const ProjectExportSchema = z
  .object({
    estimatedImportTimeInMS: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Estimated time this project will take to import, can change based on network connectivity and load between\r\nsource and destination regions.',
        readOnly: true,
      }),
    imageCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Count of images that will be exported.', readOnly: true }),
    iterationCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Count of iterations that will be exported.', readOnly: true }),
    regionCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Count of regions that will be exported.', readOnly: true }),
    tagCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Count of tags that will be exported.', readOnly: true }),
    token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Opaque token that should be passed to ImportProject to perform the import. This token grants access to import this\r\nproject to all that have the token.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Represents information about a project export.', required: [] })
  .openapi('ProjectExport')

const StoredSuggestedTagAndRegionSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date this prediction was created.', readOnly: true }),
    domain: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Domain used for the prediction.', readOnly: true }),
    height: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Height of the resized image.', readOnly: true }),
    id: z.uuid().exactOptional().openapi({ description: 'Prediction Id.', readOnly: true }),
    iteration: z.uuid().exactOptional().openapi({ description: 'Iteration Id.', readOnly: true }),
    originalImageUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI to the original prediction image.', readOnly: true }),
    predictionUncertainty: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Uncertainty (entropy) of suggested tags or regions per image.',
        readOnly: true,
      }),
    predictions: z
      .array(PredictionSchema)
      .exactOptional()
      .openapi({ description: 'List of predictions.', readOnly: true }),
    project: z.uuid().exactOptional().openapi({ description: 'Project Id.', readOnly: true }),
    resizedImageUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI to the (resized) prediction image.', readOnly: true }),
    thumbnailUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URI to the thumbnail of the original prediction image.',
        readOnly: true,
      }),
    width: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Width of the resized image.', readOnly: true }),
  })
  .openapi({
    description: 'Result of a suggested tags and regions request of the untagged image.',
    required: [],
  })
  .openapi('StoredSuggestedTagAndRegion')

const SuggestedTagAndRegionSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date this prediction was created.', readOnly: true }),
    id: z.uuid().exactOptional().openapi({ description: 'Prediction Id.', readOnly: true }),
    iteration: z.uuid().exactOptional().openapi({ description: 'Iteration Id.', readOnly: true }),
    predictionUncertainty: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Uncertainty (entropy) of suggested tags or regions per image.',
        readOnly: true,
      }),
    predictions: z
      .array(PredictionSchema)
      .exactOptional()
      .openapi({ description: 'List of predictions.', readOnly: true }),
    project: z.uuid().exactOptional().openapi({ description: 'Project Id.', readOnly: true }),
  })
  .openapi({ description: 'Result of a suggested tags and regions request.', required: [] })
  .openapi('SuggestedTagAndRegion')

const SuggestedTagAndRegionQueryTokenSchema = z
  .object({
    continuation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Continuation Id for database pagination. Initially null but later used to paginate.',
        readOnly: false,
      }),
    maxCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Maximum number of results you want to be returned in the response.',
        readOnly: false,
      }),
    session: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'SessionId for database query. Initially set to null but later used to paginate.',
        readOnly: false,
      }),
    sortBy: z
      .enum(['UncertaintyAscending', 'UncertaintyDescending'])
      .exactOptional()
      .openapi({
        description: 'OrderBy. Ordering mechanism for your results.',
        readOnly: false,
        'x-ms-enum': { modelAsString: true, name: 'SortBy' },
      }),
    tagIds: z
      .array(z.uuid())
      .exactOptional()
      .openapi({
        description: 'Existing TagIds in project to filter suggested tags on.',
        readOnly: false,
      }),
    threshold: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Confidence threshold to filter suggested tags on.',
        readOnly: false,
      }),
  })
  .openapi({
    description:
      'Contains properties we need to fetch suggested tags for. For the first call, Session and continuation set to null.\r\nThen on subsequent calls, uses the session/continuation from the previous SuggestedTagAndRegionQuery result to fetch additional results.',
    required: [],
  })
  .openapi('SuggestedTagAndRegionQueryToken')

const SuggestedTagAndRegionQuerySchema = z
  .object({
    results: z
      .array(StoredSuggestedTagAndRegionSchema)
      .exactOptional()
      .openapi({
        description: 'Result of a suggested tags and regions request of the untagged image.',
        readOnly: true,
      }),
    token: SuggestedTagAndRegionQueryTokenSchema.exactOptional(),
  })
  .openapi({
    description:
      'The array of result images and token containing session and continuation Ids for the next query.',
    required: [],
  })
  .openapi('SuggestedTagAndRegionQuery')

const TagSchema = z
  .object({
    description: z
      .string()
      .nullable()
      .openapi({ description: 'Gets or sets the description of the tag.', readOnly: false }),
    id: z.uuid().exactOptional().openapi({ description: 'Gets the Tag ID.', readOnly: true }),
    imageCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Gets the number of images with this tag.', readOnly: true }),
    name: z.string().openapi({ description: 'Gets or sets the name of the tag.', readOnly: false }),
    type: z
      .enum(['Regular', 'Negative'])
      .openapi({
        description: 'Gets or sets the type of the tag.',
        readOnly: false,
        'x-ms-enum': { modelAsString: true, name: 'TagType' },
      }),
  })
  .openapi({ description: 'Represents a Tag.', required: ['name', 'description', 'type'] })
  .openapi('Tag')

const TagFilterSchema = z
  .object({
    tagIds: z
      .array(z.uuid())
      .exactOptional()
      .openapi({
        description: 'Existing TagIds in project to get suggested tags count for.',
        readOnly: false,
      }),
    threshold: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Confidence threshold to filter suggested tags on.',
        readOnly: false,
      }),
  })
  .openapi({
    description:
      'Model that query for counting of images whose suggested tags match given tags and their probability are greater than or equal to the given threshold.',
    required: [],
  })
  .openapi('TagFilter')

const TrainingParametersSchema = z
  .object({
    selectedTags: z
      .array(z.uuid())
      .exactOptional()
      .openapi({
        description:
          'List of tags selected for this training session, other tags in the project will be ignored.',
        readOnly: false,
      }),
  })
  .openapi({ description: 'Parameters used for training.', required: [] })
  .openapi('TrainingParameters')

const EndpointParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Supported Cognitive Services endpoints.',
      in: 'path',
      name: 'Endpoint',
      required: true,
      schema: { type: 'string' },
      'x-ms-parameter-location': 'client',
      'x-ms-skip-url-encoding': true,
    },
  })

const SuccessfulCreateImageRegionsRequestExample = {
  value: { created: [], duplicated: [], exceeded: [] },
}

const SuccessfulCreateImageTagsRequestExample = {
  value: {
    created: [
      {
        imageId: 'e31a14ab-5d78-4f7b-a267-3a1e4fd8a758',
        tagId: '349d72ac-0948-4d51-b1e4-c14a1f9b848a',
      },
    ],
  },
}

const SuccessfulCreateImagesFromDataRequestExample = {
  value: {
    images: [
      {
        image: {
          created: '2017-12-19T15:56:10Z',
          height: 900,
          id: '4d6eb844-42ee-42bc-bd6f-c32455ef07c9',
          originalImageUri: '{Image Uri}',
          resizedImageUri: '{Resized Image Uri}',
          tags: [
            {
              created: '2017-12-19T15:56:09Z',
              tagId: 'b607964f-7bd6-4a3b-a869-6791fb6aab87',
              tagName: 'tag 1',
            },
          ],
          thumbnailUri: '{Thumbnail Uri}',
          width: 1095,
        },
        sourceUrl: '"hemlock_10.jpg"',
        status: 'OK',
      },
      {
        image: {
          created: '2017-12-19T15:56:10Z',
          height: 1531,
          id: 'f1855a92-b873-47e7-b513-f07a667ceda1',
          originalImageUri: '{Image Uri}',
          resizedImageUri: '{Resized Image Uri}',
          tags: [
            {
              created: '2017-12-19T15:56:09Z',
              tagId: 'b607964f-7bd6-4a3b-a869-6791fb6aab87',
              tagName: 'tag 1',
            },
          ],
          thumbnailUri: '{Thumbnail Uri}',
          width: 900,
        },
        sourceUrl: '"hemlock_6.jpg"',
        status: 'OK',
      },
    ],
    isBatchSuccessful: true,
  },
}

const SuccessfulCreateImagesFromFilesRequestExample = {
  value: {
    images: [
      {
        image: {
          created: '2017-12-19T15:56:10Z',
          height: 900,
          id: '4d6eb844-42ee-42bc-bd6f-c32455ef07c9',
          originalImageUri: '{Image Uri}',
          resizedImageUri: '{Resized Image Uri}',
          tags: [
            {
              created: '2017-12-19T15:56:09Z',
              tagId: 'b607964f-7bd6-4a3b-a869-6791fb6aab87',
              tagName: 'tag 1',
            },
          ],
          thumbnailUri: '{Thumbnail Uri}',
          width: 1095,
        },
        sourceUrl: '"hemlock_10.jpg"',
        status: 'OK',
      },
    ],
    isBatchSuccessful: true,
  },
}

const SuccessfulCreateImagesFromPredictionsRequestExample = {
  value: {
    images: [
      {
        image: {
          created: '2017-12-19T15:56:10Z',
          height: 900,
          id: '4d6eb844-42ee-42bc-bd6f-c32455ef07c9',
          originalImageUri: '{Image Uri}',
          resizedImageUri: '{Resized Image Uri}',
          tags: [
            {
              created: '2017-12-19T15:56:09Z',
              tagId: 'b607964f-7bd6-4a3b-a869-6791fb6aab87',
              tagName: 'tag 1',
            },
          ],
          thumbnailUri: '{Thumbnail Uri}',
          width: 1095,
        },
        sourceUrl: '"hemlock_10.jpg"',
        status: 'OK',
      },
    ],
    isBatchSuccessful: true,
  },
}

const SuccessfulCreateImagesFromUrlsRequestExample = {
  value: {
    images: [
      {
        image: {
          created: '2017-12-19T15:56:10Z',
          height: 900,
          id: '4d6eb844-42ee-42bc-bd6f-c32455ef07c9',
          originalImageUri: '{Image Uri}',
          resizedImageUri: '{Resized Image Uri}',
          tags: [
            {
              created: '2017-12-19T15:56:09Z',
              tagId: 'b607964f-7bd6-4a3b-a869-6791fb6aab87',
              tagName: 'tag name',
            },
          ],
          thumbnailUri: '{Thumbnail Uri}',
          width: 1095,
        },
        sourceUrl: '{url to image}',
        status: 'OK',
      },
    ],
    isBatchSuccessful: true,
  },
}

const SuccessfulCreateProjectRequestExample = {
  value: {
    created: '2017-12-18T05:43:18Z',
    description: 'A test project',
    id: 'bc3f7dad-5544-468c-8573-3ef04d55463e',
    lastModified: '2017-12-18T05:43:18Z',
    name: 'My New Project',
    settings: { domainId: 'ee85a74c-405e-4adc-bb47-ffa8ca0c9f31' },
    thumbnailUri: '',
  },
}

const SuccessfulCreateTagRequestExample = {
  value: {
    description: 'Description of Tag1',
    id: '9e27bc1b-7ae7-4e3b-a4e5-36153479dc01',
    imageCount: 0,
    name: 'Tag1',
    type: 'Regular',
  },
}

const SuccessfulExportIterationRequestExample = {
  value: {
    downloadUri: '',
    newerVersionAvailable: false,
    platform: 'TensorFlow',
    status: 'Exporting',
  },
}

const SuccessfulExportProjectRequestExample = { value: { token: '<token>' } }

const SuccessfulGetDomainRequestExample = {
  value: {
    enabled: true,
    exportable: false,
    id: 'b30a91ae-e3c1-4f73-a81e-c270bff27c39',
    name: 'Retail',
    type: 'Classification',
  },
}

const SuccessfulGetDomainsRequestExample = {
  value: [
    {
      enabled: true,
      exportable: false,
      id: 'ee85a74c-405e-4adc-bb47-ffa8ca0c9f31',
      name: 'General',
      type: 'Classification',
    },
    {
      enabled: true,
      exportable: false,
      id: 'c151d5b5-dd07-472a-acc8-15d29dea8518',
      name: 'Food',
      type: 'Classification',
    },
    {
      enabled: true,
      exportable: false,
      id: 'ca455789-012d-4b50-9fec-5bb63841c793',
      name: 'Landmarks',
      type: 'Classification',
    },
    {
      enabled: true,
      exportable: false,
      id: 'b30a91ae-e3c1-4f73-a81e-c270bff27c39',
      name: 'Retail',
      type: 'Classification',
    },
    {
      enabled: true,
      exportable: false,
      id: '45badf75-3591-4f26-a705-45678d3e9f5f',
      name: 'Adult',
      type: 'Classification',
    },
    {
      enabled: true,
      exportable: false,
      id: '0732100f-1a38-4e49-a514-c9b44c697ab5',
      name: 'General (compact)',
      type: 'Classification',
    },
    {
      enabled: true,
      exportable: false,
      id: 'b5cfd229-2ac7-4b2b-8d0a-2b0661344894',
      name: 'Landmarks (compact)',
      type: 'Classification',
    },
    {
      enabled: true,
      exportable: false,
      id: '6b4faeda-8396-481b-9f8b-177b9fa3097f',
      name: 'Retail (compact)',
      type: 'Classification',
    },
  ],
}

const SuccessfulGetExportsRequestExample = {
  value: [
    {
      downloadUri: '{Download URI}',
      newerVersionAvailable: false,
      platform: 'TensorFlow',
      status: 'Done',
    },
  ],
}

const SuccessfulGetImagePerformanceCountRequestExample = { value: '1' }

const SuccessfulGetImagePerformancesRequestExample = {
  value: [
    {
      created: '2018-01-31T20:18:26Z',
      height: 1600,
      id: 'dfd2d346-3ed5-4e1e-857d-af4e32cec042',
      imageUri: '<image uri>',
      predictions: [
        {
          boundingBox: { height: 0.25, left: 0.25, top: 0.25, width: 0.25 },
          probability: 1,
          tagId: 'b5f7e6a2-a481-49a6-afec-a7cef1af3544',
          tagName: 'Tag 1',
        },
      ],
      regions: [],
      tags: [],
      thumbnailUri: '<thumbnail uri>',
      width: 600,
    },
  ],
}

const SuccessfulGetImageRegionProposalsRequestExample = {
  value: {
    imageId: '4d6eb844-42ee-42bc-bd6f-c32455ef07c9',
    projectId: 'bc3f7dad-5544-468c-8573-3ef04d55463e',
    proposals: [
      { boundingBox: { height: 0.25, left: 0.25, top: 0.25, width: 0.25 }, confidence: 0.25 },
    ],
  },
}

const SuccessfulGetImagesByIdsRequestExample = { value: [] }

const SuccessfulGetIterationPerformanceRequestExample = {
  value: {
    perTagPerformance: [
      {
        id: 'e31ff107-5505-4753-be42-b369b21b026c',
        name: 'Hemlock',
        precision: 1,
        precisionStdDeviation: 0,
        recall: 1,
        recallStdDeviation: 0,
      },
      {
        id: '349d72ac-0948-4d51-b1e4-c14a1f9b848a',
        name: 'Japanese Cherry',
        precision: 1,
        precisionStdDeviation: 0,
        recall: 1,
        recallStdDeviation: 0,
      },
    ],
    precision: 1,
    precisionStdDeviation: 0,
    recall: 1,
    recallStdDeviation: 0,
  },
}

const SuccessfulGetIterationRequestExample = {
  value: {
    created: '2017-12-18T22:40:36Z',
    domainId: 'ee85a74c-405e-4adc-bb47-ffa8ca0c9f31',
    exportable: false,
    exportableTo: ['ONNX', 'DockerFile', 'TensorFlow', 'CoreML'],
    id: 'e31a14ab-5d78-4f7b-a267-3a1e4fd8a758',
    lastModified: '2017-12-19T15:47:02Z',
    name: 'Iteration 2',
    projectId: '64b822c5-8082-4b36-a426-27225f4aa18c',
    publishName: '',
    reservedBudgetInHours: 0,
    status: 'Completed',
    trainedAt: '2017-12-19T15:47:02Z',
    trainingType: 'Regular',
  },
}

const SuccessfulGetIterationsRequestExample = {
  value: [
    {
      created: '2017-12-18T22:40:29Z',
      domainId: 'ee85a74c-405e-4adc-bb47-ffa8ca0c9f31',
      exportable: false,
      exportableTo: ['ONNX', 'DockerFile', 'TensorFlow', 'CoreML'],
      id: 'fe1e83c4-6f50-4899-9544-6bb08cf0e15a',
      lastModified: '2017-12-18T22:40:41Z',
      name: 'Iteration 1',
      projectId: '64b822c5-8082-4b36-a426-27225f4aa18c',
      publishName: '',
      reservedBudgetInHours: 0,
      status: 'Completed',
      trainedAt: '2017-12-18T22:40:41Z',
      trainingType: 'Regular',
    },
    {
      created: '2017-12-18T22:40:36Z',
      domainId: 'ee85a74c-405e-4adc-bb47-ffa8ca0c9f31',
      exportable: false,
      exportableTo: ['ONNX', 'DockerFile', 'TensorFlow', 'CoreML'],
      id: 'e31a14ab-5d78-4f7b-a267-3a1e4fd8a758',
      lastModified: '2017-12-19T15:47:02Z',
      name: 'Iteration 2',
      projectId: '64b822c5-8082-4b36-a426-27225f4aa18c',
      publishName: 'model1',
      reservedBudgetInHours: 5,
      status: 'Completed',
      trainedAt: '2017-12-19T15:47:02Z',
      trainingType: 'Regular',
    },
    {
      created: '2017-12-19T15:46:59Z',
      exportable: false,
      exportableTo: ['ONNX', 'DockerFile', 'TensorFlow', 'CoreML'],
      id: '3adaf7b2-18fc-4376-9da4-b5ea160a7cf5',
      lastModified: '2017-12-19T15:46:59Z',
      name: 'Iteration 3',
      projectId: '64b822c5-8082-4b36-a426-27225f4aa18c',
      publishName: '',
      reservedBudgetInHours: 0,
      status: 'New',
      trainingType: 'Regular',
    },
  ],
}

const SuccessfulGetProjectRequestExample = {
  value: {
    created: '2017-12-18T05:43:18Z',
    description: 'A test project',
    id: 'bc3f7dad-5544-468c-8573-3ef04d55463e',
    lastModified: '2017-12-18T05:43:18Z',
    name: 'My New Project',
    settings: { domainId: 'ee85a74c-405e-4adc-bb47-ffa8ca0c9f31' },
    thumbnailUri: '',
  },
}

const SuccessfulGetProjectsRequestExample = {
  value: [
    {
      created: '2017-12-18T05:43:18Z',
      description: '',
      id: 'bc3f7dad-5544-468c-8573-3ef04d55463e',
      lastModified: '2017-12-18T05:43:18Z',
      name: 'My New Project',
      settings: { domainId: 'ee85a74c-405e-4adc-bb47-ffa8ca0c9f31' },
      thumbnailUri: '',
    },
  ],
}

const SuccessfulGetTagRequestExample = {
  value: {
    description: 'Description of Tag1',
    id: '9e27bc1b-7ae7-4e3b-a4e5-36153479dc01',
    imageCount: 0,
    name: 'Tag1',
    type: 'Regular',
  },
}

const SuccessfulGetTaggedImageCountRequestExample = { value: '10' }

const SuccessfulGetTaggedImagesRequestExample = { value: [] }

const SuccessfulGetTagsRequestExample = {
  value: [
    {
      description: 'Description of Tag1',
      id: '9e27bc1b-7ae7-4e3b-a4e5-36153479dc01',
      imageCount: 0,
      name: 'Tag1',
      type: 'Regular',
    },
  ],
}

const SuccessfulGetUntaggedImageCountRequestExample = { value: '10' }

const SuccessfulGetUntaggedImagesRequestExample = { value: [] }

const SuccessfulImportProjectRequestExample = {
  value: {
    created: '2019-10-06T05:43:18Z',
    description: '',
    id: 'bc3f7dad-5544-468c-8573-3ef04d55463e',
    lastModified: '2019-10-06T05:43:18Z',
    name: 'Import Project',
    settings: { domainId: 'ee85a74c-405e-4adc-bb47-ffa8ca0c9f31' },
    status: 'Importing',
    thumbnailUri: '',
  },
}

const SuccessfulPublishIterationRequestExample = { value: true }

const SuccessfulQueryPredictionsRequestExample = {
  value: {
    results: [
      {
        created: '2018-01-31T20:18:26Z',
        domain: 'b30a91ae-e3c1-4f73-a81e-c270bff27c39',
        id: 'dfd2d346-3ed5-4e1e-857d-af4e32cec042',
        iteration: 'b7b9d99c-a2c6-4658-9900-a98d2ff5bc66',
        originalImageUri: '<image uri>',
        predictions: [
          { probability: 1, tagId: 'b5f7e6a2-a481-49a6-afec-a7cef1af3544', tagName: 'Tag 1' },
          {
            probability: 3.60627153e-12,
            tagId: '45619cda-d1c9-4bc8-a3e1-87c5d81adbc3',
            tagName: 'Tag 2',
          },
        ],
        project: '8988643a-ae70-447d-9a22-15c4255e5ecb',
        resizedImageUri: '<resized image uri>',
        thumbnailUri: '<thumbnail uri>',
      },
    ],
    token: {
      application: '',
      continuation: '',
      maxCount: 0,
      orderBy: 'Newest',
      session: '1:286613',
      tags: [{ id: 'b5f7e6a2-a481-49a6-afec-a7cef1af3544', maxThreshold: 1, minThreshold: 0.9 }],
    },
  },
}

const SuccessfulQuerySuggestedImageCountRequestExample = {
  value: { 'b5f7e6a2-a481-49a6-afec-a7cef1af3544': 1 },
}

const SuccessfulQuerySuggestedImagesRequestExample = {
  value: {
    results: [
      {
        created: '2018-01-31T20:18:26Z',
        domain: 'b30a91ae-e3c1-4f73-a81e-c270bff27c39',
        id: 'dfd2d346-3ed5-4e1e-857d-af4e32cec042',
        iteration: 'b7b9d99c-a2c6-4658-9900-a98d2ff5bc66',
        originalImageUri: '<image uri>',
        predictions: [
          { probability: 1, tagId: 'b5f7e6a2-a481-49a6-afec-a7cef1af3544', tagName: 'Tag 1' },
          {
            probability: 3.60627153e-12,
            tagId: '45619cda-d1c9-4bc8-a3e1-87c5d81adbc3',
            tagName: 'Tag 2',
          },
        ],
        project: '8988643a-ae70-447d-9a22-15c4255e5ecb',
        resizedImageUri: '<resized image uri>',
        thumbnailUri: '<thumbnail uri>',
      },
    ],
    token: {
      continuation: '',
      maxCount: 0,
      session: '1:286613',
      sortBy: 'Newest',
      tagIds: ['b5f7e6a2-a481-49a6-afec-a7cef1af3544'],
    },
  },
}

const SuccessfulQuickTestImageUrlRequestExample = {
  value: {
    created: '2017-12-19T14:21:41Z',
    id: '951098b2-9b69-427b-bddb-d5cb618874e3',
    iteration: 'fe1e83c4-6f50-4899-9544-6bb08cf0e15a',
    predictions: [
      {
        probability: 0.05149666,
        tagId: 'e31ff107-5505-4753-be42-b369b21b026c',
        tagName: 'Hemlock',
      },
      { probability: 0, tagId: '349d72ac-0948-4d51-b1e4-c14a1f9b848a', tagName: 'Japanese Cherry' },
    ],
    project: '64b822c5-8082-4b36-a426-27225f4aa18c',
  },
}

const SuccessfulQuickTestImageRequestExample = {
  value: {
    created: '2017-12-19T14:21:41Z',
    id: '951098b2-9b69-427b-bddb-d5cb618874e3',
    iteration: 'fe1e83c4-6f50-4899-9544-6bb08cf0e15a',
    predictions: [
      {
        probability: 0.05149666,
        tagId: 'e31ff107-5505-4753-be42-b369b21b026c',
        tagName: 'Hemlock',
      },
      { probability: 0, tagId: '349d72ac-0948-4d51-b1e4-c14a1f9b848a', tagName: 'Japanese Cherry' },
    ],
    project: '64b822c5-8082-4b36-a426-27225f4aa18c',
  },
}

const SuccessfulSuggestTagsAndRegionsRequestExample = {
  value: [
    {
      created: '2019-07-08T13:43:18Z',
      id: '8497e814-23cc-47d7-b24b-691cef0bcec9',
      iteration: 'ce271ee4-cc13-460f-b66f-993f8005522d',
      predictionUncertainty: 0.32,
      predictions: [
        { probability: 1, tagId: 'b5f7e6a2-a481-49a6-afec-a7cef1af3544', tagName: 'Tag 1' },
        {
          probability: 3.60627153e-12,
          tagId: '45619cda-d1c9-4bc8-a3e1-87c5d81adbc3',
          tagName: 'Tag 2',
        },
      ],
      project: 'bc3f7dad-5544-468c-8573-3ef04d55463e',
    },
  ],
}

const SuccessfulTrainProjectRequestExample = {
  value: {
    created: '2017-12-18T22:40:36Z',
    exportable: false,
    exportableTo: ['ONNX', 'DockerFile', 'TensorFlow', 'CoreML'],
    id: 'e31a14ab-5d78-4f7b-a267-3a1e4fd8a758',
    lastModified: '2017-12-19T15:46:58Z',
    name: 'Iteration 2',
    projectId: '64b822c5-8082-4b36-a426-27225f4aa18c',
    publishName: '',
    reservedBudgetInHours: 0,
    status: 'Training',
    trainingType: 'Regular',
  },
}

const SuccessfulUpdateIterationRequestExample = {
  value: {
    created: '2017-12-18T22:40:36Z',
    domainId: 'ee85a74c-405e-4adc-bb47-ffa8ca0c9f31',
    exportable: false,
    exportableTo: ['ONNX', 'DockerFile', 'TensorFlow', 'CoreML'],
    id: 'e31a14ab-5d78-4f7b-a267-3a1e4fd8a758',
    lastModified: '2017-12-19T15:53:07Z',
    name: 'Best Iteration',
    projectId: '64b822c5-8082-4b36-a426-27225f4aa18c',
    publishName: '',
    reservedBudgetInHours: 0,
    status: 'Completed',
    trainedAt: '2017-12-19T15:47:02Z',
    trainingType: 'Regular',
  },
}

const SuccessfulUpdateProjectRequestExample = {
  value: {
    created: '2017-12-18T05:43:18Z',
    description: 'A new Description',
    id: 'bc3f7dad-5544-468c-8573-3ef04d55463e',
    lastModified: '2017-12-18T05:43:19Z',
    name: 'New Project Name',
    settings: { domainId: 'ee85a74c-405e-4adc-bb47-ffa8ca0c9f31' },
    thumbnailUri: '',
  },
}

const SuccessfulUpdateTagRequestExample = {
  value: {
    description: 'Better description',
    id: '9e27bc1b-7ae7-4e3b-a4e5-36153479dc01',
    imageCount: 0,
    name: 'Better Tag Name',
    type: 'Regular',
  },
}

const CreateImagesFromDataRequestBody = {
  content: {
    'multipart/form-data': {
      schema: z
        .object({
          imageData: z
            .file()
            .openapi({
              type: 'string',
              format: 'binary',
              description:
                'Binary image data. Supported formats are JPEG, GIF, PNG, and BMP. Supports images up to 6MB.',
            }),
        })
        .openapi({ required: ['imageData'] }),
    },
  },
  required: true,
}

const ApimKeySecurityScheme = { in: 'header', name: 'Training-Key', type: 'apiKey' }

export const getDomainsRoute = createRoute({
  method: 'get',
  path: '/domains',
  tags: ['DomainsApi'],
  summary: 'Get a list of the available domains.',
  operationId: 'GetDomains',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(DomainSchema),
          examples: { 'Successful GetDomains request': SuccessfulGetDomainsRequestExample },
        },
        'application/xml': {
          schema: z.array(DomainSchema),
          examples: { 'Successful GetDomains request': SuccessfulGetDomainsRequestExample },
        },
        'text/xml': {
          schema: z.array(DomainSchema),
          examples: { 'Successful GetDomains request': SuccessfulGetDomainsRequestExample },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const getDomainsDomainIdRoute = createRoute({
  method: 'get',
  path: '/domains/{domainId}',
  tags: ['DomainsApi'],
  summary: 'Get information about a specific domain.',
  operationId: 'GetDomain',
  request: {
    params: z.object({
      domainId: z
        .uuid()
        .openapi({
          param: {
            description: 'The id of the domain to get information about.',
            examples: {
              'Successful GetDomain request': { value: 'b30a91ae-e3c1-4f73-a81e-c270bff27c39' },
            },
            in: 'path',
            name: 'domainId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: DomainSchema,
          examples: { 'Successful GetDomain request': SuccessfulGetDomainRequestExample },
        },
        'application/xml': {
          schema: DomainSchema,
          examples: { 'Successful GetDomain request': SuccessfulGetDomainRequestExample },
        },
        'text/xml': {
          schema: DomainSchema,
          examples: { 'Successful GetDomain request': SuccessfulGetDomainRequestExample },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const getProjectsRoute = createRoute({
  method: 'get',
  path: '/projects',
  tags: ['ProjectApi'],
  summary: 'Get your projects.',
  operationId: 'GetProjects',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(ProjectSchema),
          examples: { 'Successful GetProjects request': SuccessfulGetProjectsRequestExample },
        },
        'application/xml': {
          schema: z.array(ProjectSchema),
          examples: { 'Successful GetProjects request': SuccessfulGetProjectsRequestExample },
        },
        'text/xml': {
          schema: z.array(ProjectSchema),
          examples: { 'Successful GetProjects request': SuccessfulGetProjectsRequestExample },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const postProjectsRoute = createRoute({
  method: 'post',
  path: '/projects',
  tags: ['ProjectApi'],
  summary: 'Create a project.',
  operationId: 'CreateProject',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Name of the project.',
            examples: { 'Successful CreateProject request': { value: 'My New Project' } },
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The description of the project.',
            examples: { 'Successful CreateProject request': { value: 'A test project' } },
            in: 'query',
            name: 'description',
            required: false,
            schema: { type: 'string' },
          },
        }),
      domainId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The id of the domain to use for this project. Defaults to General.',
            examples: {
              'Successful CreateProject request': { value: 'ee85a74c-405e-4adc-bb47-ffa8ca0c9f31' },
            },
            in: 'query',
            name: 'domainId',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      classificationType: z
        .enum(['Multiclass', 'Multilabel'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The type of classifier to create for this project.',
            in: 'query',
            name: 'classificationType',
            required: false,
            schema: { enum: ['Multiclass', 'Multilabel'], type: 'string' },
          },
        }),
      targetExportPlatforms: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.enum(['CoreML', 'TensorFlow', 'DockerFile', 'ONNX', 'VAIDK'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'List of platforms the trained model is intending exporting to.',
            explode: false,
            in: 'query',
            name: 'targetExportPlatforms',
            required: false,
            schema: {
              items: {
                enum: ['CoreML', 'TensorFlow', 'DockerFile', 'ONNX', 'VAIDK'],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ProjectSchema,
          examples: { 'Successful CreateProject request': SuccessfulCreateProjectRequestExample },
        },
        'application/xml': {
          schema: ProjectSchema,
          examples: { 'Successful CreateProject request': SuccessfulCreateProjectRequestExample },
        },
        'text/xml': {
          schema: ProjectSchema,
          examples: { 'Successful CreateProject request': SuccessfulCreateProjectRequestExample },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const postProjectsImportRoute = createRoute({
  method: 'post',
  path: '/projects/import',
  tags: ['ProjectApi'],
  summary: 'Imports a project.',
  operationId: 'ImportProject',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Token generated from the export project call.',
            examples: { 'Successful ImportProject request': { value: 'token' } },
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ProjectSchema,
          examples: { 'Successful ImportProject request': SuccessfulImportProjectRequestExample },
        },
        'application/xml': {
          schema: ProjectSchema,
          examples: { 'Successful ImportProject request': SuccessfulImportProjectRequestExample },
        },
        'text/xml': {
          schema: ProjectSchema,
          examples: { 'Successful ImportProject request': SuccessfulImportProjectRequestExample },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const getProjectsProjectIdRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}',
  tags: ['ProjectApi'],
  summary: 'Get a specific project.',
  operationId: 'GetProject',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The id of the project to get.',
            examples: {
              'Successful GetProject request': { value: 'bc3f7dad-5544-468c-8573-3ef04d55463e' },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ProjectSchema,
          examples: { 'Successful GetProject request': SuccessfulGetProjectRequestExample },
        },
        'application/xml': {
          schema: ProjectSchema,
          examples: { 'Successful GetProject request': SuccessfulGetProjectRequestExample },
        },
        'text/xml': {
          schema: ProjectSchema,
          examples: { 'Successful GetProject request': SuccessfulGetProjectRequestExample },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const deleteProjectsProjectIdRoute = createRoute({
  method: 'delete',
  path: '/projects/{projectId}',
  tags: ['ProjectApi'],
  summary: 'Delete a specific project.',
  operationId: 'DeleteProject',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful DeleteProject request': { value: 'bc3f7dad-5544-468c-8573-3ef04d55463e' },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'Error response',
      content: { '*/*': { schema: CustomVisionErrorSchema } },
    },
  },
})

export const patchProjectsProjectIdRoute = createRoute({
  method: 'patch',
  path: '/projects/{projectId}',
  tags: ['ProjectApi'],
  summary: 'Update a specific project.',
  operationId: 'UpdateProject',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The id of the project to update.',
            examples: {
              'Successful UpdateProject request': { value: 'bc3f7dad-5544-468c-8573-3ef04d55463e' },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    body: {
      description: 'The updated project model.',
      content: {
        'application/json': { schema: ProjectSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              created: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description: 'Gets the date this project was created.',
                  readOnly: true,
                }),
              description: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.string().nullable(),
              ).openapi({
                description: 'Gets or sets the description of the project.',
                readOnly: false,
              }),
              drModeEnabled: z
                .preprocess(
                  (val) => (val === 'null' ? null : val),
                  z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .nullable(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Gets if the Disaster Recovery (DR) mode is on, indicating the project is temporarily read-only.',
                  readOnly: true,
                }),
              id: z
                .uuid()
                .exactOptional()
                .openapi({ description: 'Gets the project id.', readOnly: true }),
              lastModified: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description: 'Gets the date this project was last modified.',
                  readOnly: true,
                }),
              name: z
                .string()
                .openapi({ description: 'Gets or sets the name of the project.', readOnly: false }),
              settings: z
                .object({
                  classificationType: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.enum(['Multiclass', 'Multilabel']).nullable())
                    .exactOptional()
                    .openapi({
                      description: 'Gets or sets the classification type of the project.',
                      readOnly: false,
                      'x-ms-enum': { modelAsString: true, name: 'Classifier' },
                    }),
                  detectionParameters: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Detection parameters in use, if any.',
                      readOnly: true,
                    }),
                  domainId: z
                    .uuid()
                    .exactOptional()
                    .openapi({
                      description: 'Gets or sets the id of the Domain to use with this project.',
                      readOnly: false,
                    }),
                  imageProcessingSettings: z
                    .object({
                      augmentationMethods: z
                        .record(
                          z.string(),
                          z.preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            z.boolean(),
                          ),
                        )
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'Gets or sets enabled image transforms. The key corresponds to the transform name. If value is set to true, then correspondent transform is enabled. Otherwise this transform will not be used.\r\nAugmentation will be uniformly distributed among enabled transforms.',
                          readOnly: false,
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description:
                        'Represents image preprocessing settings used by image augmentation.',
                      required: [],
                    }),
                  targetExportPlatforms: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(z.enum(['CoreML', 'TensorFlow', 'DockerFile', 'ONNX', 'VAIDK'])),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'A list of ExportPlatform that the trained model should be able to support.',
                      readOnly: false,
                    }),
                  useNegativeSet: z
                    .preprocess(
                      (val) => (val === 'null' ? null : val),
                      z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .nullable(),
                    )
                    .exactOptional()
                    .openapi({
                      description: 'Indicates if negative set is being used.',
                      readOnly: true,
                    }),
                })
                .openapi({
                  description: 'Represents settings associated with a project.',
                  required: [],
                }),
              status: z
                .enum(['Succeeded', 'Importing', 'Failed'])
                .exactOptional()
                .openapi({
                  description: 'Gets the status of the project.',
                  readOnly: false,
                  'x-ms-enum': { modelAsString: true, name: 'ProjectStatus' },
                }),
              thumbnailUri: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Gets the thumbnail url representing the image.',
                  readOnly: true,
                }),
            })
            .openapi({
              description: 'Represents a project.',
              required: ['name', 'description', 'settings'],
            }),
        },
        'application/xml': { schema: ProjectSchema },
        'text/xml': { schema: ProjectSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ProjectSchema,
          examples: { 'Successful UpdateProject request': SuccessfulUpdateProjectRequestExample },
        },
        'application/xml': {
          schema: ProjectSchema,
          examples: { 'Successful UpdateProject request': SuccessfulUpdateProjectRequestExample },
        },
        'text/xml': {
          schema: ProjectSchema,
          examples: { 'Successful UpdateProject request': SuccessfulUpdateProjectRequestExample },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const getProjectsProjectIdExportRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/export',
  tags: ['ProjectApi'],
  summary: 'Exports a project.',
  operationId: 'ExportProject',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id of the project to export.',
            examples: {
              'Successful ExportProject request': { value: 'bc3f7dad-5544-468c-8573-3ef04d55463e' },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ProjectExportSchema,
          examples: { 'Successful ExportProject request': SuccessfulExportProjectRequestExample },
        },
        'application/xml': {
          schema: ProjectExportSchema,
          examples: { 'Successful ExportProject request': SuccessfulExportProjectRequestExample },
        },
        'text/xml': {
          schema: ProjectExportSchema,
          examples: { 'Successful ExportProject request': SuccessfulExportProjectRequestExample },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const postProjectsProjectIdImagesRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/images',
  tags: ['ImageApi'],
  summary: 'Add the provided images to the set of training images.',
  description:
    'This API accepts body content as multipart/form-data and application/octet-stream. When using multipart\r\nmultiple image files can be sent at once, with a maximum of 64 files',
  operationId: 'CreateImagesFromData',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful CreateImagesFromData request': {
                value: '64b822c5-8082-4b36-a426-27225f4aa18c',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    query: z.object({
      tagIds: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.uuid()).min(0).max(20),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The tags ids with which to tag each image. Limited to 20.',
            examples: {
              'Successful CreateImagesFromData request': {
                value: ['b607964f-7bd6-4a3b-a869-6791fb6aab87'],
              },
            },
            explode: false,
            in: 'query',
            name: 'tagIds',
            required: false,
            schema: {
              items: { format: 'uuid', nullable: false, type: 'string' },
              maxItems: 20,
              minItems: 0,
              type: 'array',
            },
            style: 'form',
          },
        }),
    }),
    body: CreateImagesFromDataRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ImageCreateSummarySchema,
          examples: {
            'Successful CreateImagesFromData request': SuccessfulCreateImagesFromDataRequestExample,
          },
        },
        'application/xml': {
          schema: ImageCreateSummarySchema,
          examples: {
            'Successful CreateImagesFromData request': SuccessfulCreateImagesFromDataRequestExample,
          },
        },
        'text/xml': {
          schema: ImageCreateSummarySchema,
          examples: {
            'Successful CreateImagesFromData request': SuccessfulCreateImagesFromDataRequestExample,
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const deleteProjectsProjectIdImagesRoute = createRoute({
  method: 'delete',
  path: '/projects/{projectId}/images',
  tags: ['ImageApi'],
  summary: 'Delete images from the set of training images.',
  operationId: 'DeleteImages',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful DeleteImages request': { value: '64b822c5-8082-4b36-a426-27225f4aa18c' },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    query: z.object({
      imageIds: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.uuid()).min(0).max(256),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Ids of the images to be deleted. Limited to 256 images per batch.',
            examples: {
              'Successful DeleteImages request': {
                value: [
                  'e31a14ab-5d78-4f7b-a267-3a1e4fd8a758',
                  'cf0f83fb-ebaa-4b25-8e34-613a6a0b8a12',
                ],
              },
            },
            explode: false,
            in: 'query',
            name: 'imageIds',
            required: false,
            schema: {
              items: { format: 'uuid', nullable: false, type: 'string' },
              maxItems: 256,
              minItems: 0,
              type: 'array',
            },
            style: 'form',
          },
        }),
      allImages: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to specify delete all images, specify this flag or a list of images. Using this flag will return a 202 response to indicate the images are being deleted.',
            in: 'query',
            name: 'allImages',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      allIterations: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Removes these images from all iterations, not just the current workspace. Using this flag will return a 202 response to indicate the images are being deleted.',
            in: 'query',
            name: 'allIterations',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    202: { description: 'Accepted' },
    204: { description: 'No Content' },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const postProjectsProjectIdImagesFilesRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/images/files',
  tags: ['ImageApi'],
  summary: 'Add the provided batch of images to the set of training images.',
  description:
    'This API accepts a batch of files, and optionally tags, to create images. There is a limit of 64 images and 20 tags.',
  operationId: 'CreateImagesFromFiles',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful CreateImagesFromFiles request': {
                value: '64b822c5-8082-4b36-a426-27225f4aa18c',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    body: {
      description: 'The batch of image files to add. Limited to 64 images and 20 tags per batch.',
      content: {
        'application/json': { schema: ImageFileCreateBatchSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              images: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        contents: z.string().exactOptional().openapi({ readOnly: false }),
                        name: z.string().exactOptional().openapi({ readOnly: false }),
                        regions: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  height: z
                                    .preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.float32(),
                                    )
                                    .openapi({ description: 'Height.', readOnly: false }),
                                  left: z
                                    .preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.float32(),
                                    )
                                    .openapi({
                                      description: 'Coordinate of the left boundary.',
                                      readOnly: false,
                                    }),
                                  tagId: z
                                    .uuid()
                                    .openapi({
                                      description: 'Id of the tag associated with this region.',
                                      readOnly: false,
                                    }),
                                  top: z
                                    .preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.float32(),
                                    )
                                    .openapi({
                                      description: 'Coordinate of the top boundary.',
                                      readOnly: false,
                                    }),
                                  width: z
                                    .preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.float32(),
                                    )
                                    .openapi({ description: 'Width.', readOnly: false }),
                                })
                                .openapi({ required: ['tagId', 'left', 'top', 'width', 'height'] }),
                            ),
                          )
                          .exactOptional()
                          .openapi({ readOnly: false }),
                        tagIds: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(z.uuid()),
                          )
                          .exactOptional()
                          .openapi({ readOnly: false }),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({ readOnly: false }),
              tagIds: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.uuid()),
                )
                .exactOptional()
                .openapi({ readOnly: false }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: ImageFileCreateBatchSchema },
        'text/xml': { schema: ImageFileCreateBatchSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ImageCreateSummarySchema,
          examples: {
            'Successful CreateImagesFromFiles request':
              SuccessfulCreateImagesFromFilesRequestExample,
          },
        },
        'application/xml': {
          schema: ImageCreateSummarySchema,
          examples: {
            'Successful CreateImagesFromFiles request':
              SuccessfulCreateImagesFromFilesRequestExample,
          },
        },
        'text/xml': {
          schema: ImageCreateSummarySchema,
          examples: {
            'Successful CreateImagesFromFiles request':
              SuccessfulCreateImagesFromFilesRequestExample,
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const getProjectsProjectIdImagesIdRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/images/id',
  tags: ['ImageApi'],
  summary: 'Get images by id for a given project iteration.',
  description:
    'This API will return a set of Images for the specified tags and optionally iteration. If no iteration is specified the\r\ncurrent workspace is used.',
  operationId: 'GetImagesByIds',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful GetImagesByIds request': {
                value: 'bc3f7dad-5544-468c-8573-3ef04d55463e',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    query: z.object({
      imageIds: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.uuid()).min(0).max(256),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The list of image ids to retrieve. Limited to 256.',
            explode: false,
            in: 'query',
            name: 'imageIds',
            required: false,
            schema: {
              items: { format: 'uuid', nullable: false, type: 'string' },
              maxItems: 256,
              minItems: 0,
              type: 'array',
            },
            style: 'form',
          },
        }),
      iterationId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The iteration id. Defaults to workspace.',
            examples: {
              'Successful GetImagesByIds request': {
                value: 'cf0f83fb-ebaa-4b25-8e34-613a6a0b8a12',
              },
            },
            in: 'query',
            name: 'iterationId',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(ImageSchema),
          examples: { 'Successful GetImagesByIds request': SuccessfulGetImagesByIdsRequestExample },
        },
        'application/xml': {
          schema: z.array(ImageSchema),
          examples: { 'Successful GetImagesByIds request': SuccessfulGetImagesByIdsRequestExample },
        },
        'text/xml': {
          schema: z.array(ImageSchema),
          examples: { 'Successful GetImagesByIds request': SuccessfulGetImagesByIdsRequestExample },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const postProjectsProjectIdImagesPredictionsRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/images/predictions',
  tags: ['ImageApi'],
  summary: 'Add the specified predicted images to the set of training images.',
  description:
    'This API creates a batch of images from predicted images specified. There is a limit of 64 images and 20 tags.',
  operationId: 'CreateImagesFromPredictions',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful CreateImagesFromPredictions request': {
                value: '64b822c5-8082-4b36-a426-27225f4aa18c',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    body: {
      description: 'Image and tag ids. Limited to 64 images and 20 tags per batch.',
      content: {
        'application/json': { schema: ImageIdCreateBatchSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              images: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        id: z
                          .uuid()
                          .exactOptional()
                          .openapi({ description: 'Id of the image.', readOnly: false }),
                        regions: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  height: z
                                    .preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.float32(),
                                    )
                                    .openapi({ description: 'Height.', readOnly: false }),
                                  left: z
                                    .preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.float32(),
                                    )
                                    .openapi({
                                      description: 'Coordinate of the left boundary.',
                                      readOnly: false,
                                    }),
                                  tagId: z
                                    .uuid()
                                    .openapi({
                                      description: 'Id of the tag associated with this region.',
                                      readOnly: false,
                                    }),
                                  top: z
                                    .preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.float32(),
                                    )
                                    .openapi({
                                      description: 'Coordinate of the top boundary.',
                                      readOnly: false,
                                    }),
                                  width: z
                                    .preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.float32(),
                                    )
                                    .openapi({ description: 'Width.', readOnly: false }),
                                })
                                .openapi({ required: ['tagId', 'left', 'top', 'width', 'height'] }),
                            ),
                          )
                          .exactOptional()
                          .openapi({ readOnly: false }),
                        tagIds: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(z.uuid()),
                          )
                          .exactOptional()
                          .openapi({ readOnly: false }),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({ readOnly: false }),
              tagIds: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.uuid()),
                )
                .exactOptional()
                .openapi({ readOnly: false }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: ImageIdCreateBatchSchema },
        'text/xml': { schema: ImageIdCreateBatchSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ImageCreateSummarySchema,
          examples: {
            'Successful CreateImagesFromPredictions request':
              SuccessfulCreateImagesFromPredictionsRequestExample,
          },
        },
        'application/xml': {
          schema: ImageCreateSummarySchema,
          examples: {
            'Successful CreateImagesFromPredictions request':
              SuccessfulCreateImagesFromPredictionsRequestExample,
          },
        },
        'text/xml': {
          schema: ImageCreateSummarySchema,
          examples: {
            'Successful CreateImagesFromPredictions request':
              SuccessfulCreateImagesFromPredictionsRequestExample,
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const postProjectsProjectIdImagesRegionsRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/images/regions',
  tags: ['ImageApi'],
  summary: 'Create a set of image regions.',
  description:
    'This API accepts a batch of image regions, and optionally tags, to update existing images with region information.\r\nThere is a limit of 64 entries in the batch.',
  operationId: 'CreateImageRegions',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful CreateImageRegions request': {
                value: 'bc3f7dad-5544-468c-8573-3ef04d55463e',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    body: {
      description: 'Batch of image regions which include a tag and bounding box. Limited to 64.',
      content: {
        'application/json': { schema: ImageRegionCreateBatchSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              regions: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        height: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float32(),
                          )
                          .openapi({ description: 'Height.', readOnly: false }),
                        imageId: z
                          .uuid()
                          .openapi({ description: 'Id of the image.', readOnly: false }),
                        left: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float32(),
                          )
                          .openapi({
                            description: 'Coordinate of the left boundary.',
                            readOnly: false,
                          }),
                        tagId: z
                          .uuid()
                          .openapi({
                            description: 'Id of the tag associated with this region.',
                            readOnly: false,
                          }),
                        top: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float32(),
                          )
                          .openapi({
                            description: 'Coordinate of the top boundary.',
                            readOnly: false,
                          }),
                        width: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float32(),
                          )
                          .openapi({ description: 'Width.', readOnly: false }),
                      })
                      .openapi({
                        description: 'Entry associating a region to an image.',
                        required: ['imageId', 'tagId', 'left', 'top', 'width', 'height'],
                      }),
                  ),
                )
                .exactOptional()
                .openapi({ readOnly: false }),
            })
            .openapi({ description: 'Batch of image region information to create.', required: [] }),
        },
        'application/xml': { schema: ImageRegionCreateBatchSchema },
        'text/xml': { schema: ImageRegionCreateBatchSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ImageRegionCreateSummarySchema,
          examples: {
            'Successful CreateImageRegions request': SuccessfulCreateImageRegionsRequestExample,
          },
        },
        'application/xml': {
          schema: ImageRegionCreateSummarySchema,
          examples: {
            'Successful CreateImageRegions request': SuccessfulCreateImageRegionsRequestExample,
          },
        },
        'text/xml': {
          schema: ImageRegionCreateSummarySchema,
          examples: {
            'Successful CreateImageRegions request': SuccessfulCreateImageRegionsRequestExample,
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const deleteProjectsProjectIdImagesRegionsRoute = createRoute({
  method: 'delete',
  path: '/projects/{projectId}/images/regions',
  tags: ['ImageApi'],
  summary: 'Delete a set of image regions.',
  operationId: 'DeleteImageRegions',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful DeleteImageRegions request': {
                value: 'bc3f7dad-5544-468c-8573-3ef04d55463e',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    query: z.object({
      regionIds: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.uuid()).min(0).max(64),
        )
        .openapi({
          param: {
            description: 'Regions to delete. Limited to 64.',
            examples: { 'Successful DeleteImageRegions request': { value: [''] } },
            explode: false,
            in: 'query',
            name: 'regionIds',
            required: true,
            schema: {
              items: { format: 'uuid', nullable: false, type: 'string' },
              maxItems: 64,
              minItems: 0,
              type: 'array',
            },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'Error response',
      content: { '*/*': { schema: CustomVisionErrorSchema } },
    },
  },
})

export const postProjectsProjectIdImagesSuggestedRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/images/suggested',
  tags: ['ImageApi'],
  summary:
    'Get untagged images whose suggested tags match given tags. Returns empty array if no images are found.',
  description:
    'This API will fetch untagged images filtered by suggested tags Ids. It returns an empty array if no images are found.',
  operationId: 'QuerySuggestedImages',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful QuerySuggestedImages request': {
                value: 'bc3f7dad-5544-468c-8573-3ef04d55463e',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    query: z.object({
      iterationId: z
        .uuid()
        .openapi({
          param: {
            description: 'IterationId to use for the suggested tags and regions.',
            examples: {
              'Successful QuerySuggestedImages request': {
                value: 'b7b9d99c-a2c6-4658-9900-a98d2ff5bc66',
              },
            },
            in: 'query',
            name: 'iterationId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    body: {
      description: 'Contains properties we need to query suggested images.',
      content: {
        'application/json': { schema: SuggestedTagAndRegionQueryTokenSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              continuation: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Continuation Id for database pagination. Initially null but later used to paginate.',
                  readOnly: false,
                }),
              maxCount: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description: 'Maximum number of results you want to be returned in the response.',
                  readOnly: false,
                }),
              session: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'SessionId for database query. Initially set to null but later used to paginate.',
                  readOnly: false,
                }),
              sortBy: z
                .enum(['UncertaintyAscending', 'UncertaintyDescending'])
                .exactOptional()
                .openapi({
                  description: 'OrderBy. Ordering mechanism for your results.',
                  readOnly: false,
                  'x-ms-enum': { modelAsString: true, name: 'SortBy' },
                }),
              tagIds: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.uuid()),
                )
                .exactOptional()
                .openapi({
                  description: 'Existing TagIds in project to filter suggested tags on.',
                  readOnly: false,
                }),
              threshold: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({
                  description: 'Confidence threshold to filter suggested tags on.',
                  readOnly: false,
                }),
            })
            .openapi({
              description:
                'Contains properties we need to fetch suggested tags for. For the first call, Session and continuation set to null.\r\nThen on subsequent calls, uses the session/continuation from the previous SuggestedTagAndRegionQuery result to fetch additional results.',
              required: [],
            }),
        },
        'application/xml': { schema: SuggestedTagAndRegionQueryTokenSchema },
        'text/xml': { schema: SuggestedTagAndRegionQueryTokenSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: SuggestedTagAndRegionQuerySchema,
          examples: {
            'Successful QuerySuggestedImages request': SuccessfulQuerySuggestedImagesRequestExample,
          },
        },
        'application/xml': {
          schema: SuggestedTagAndRegionQuerySchema,
          examples: {
            'Successful QuerySuggestedImages request': SuccessfulQuerySuggestedImagesRequestExample,
          },
        },
        'text/xml': {
          schema: SuggestedTagAndRegionQuerySchema,
          examples: {
            'Successful QuerySuggestedImages request': SuccessfulQuerySuggestedImagesRequestExample,
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const postProjectsProjectIdImagesSuggestedCountRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/images/suggested/count',
  tags: ['ImageApi'],
  summary:
    'Get count of images whose suggested tags match given tags and their probabilities are greater than or equal to the given threshold. Returns count as 0 if none found.',
  description:
    'This API takes in tagIds to get count of untagged images per suggested tags for a given threshold.',
  operationId: 'QuerySuggestedImageCount',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful QuerySuggestedImageCount request': {
                value: 'bc3f7dad-5544-468c-8573-3ef04d55463e',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    query: z.object({
      iterationId: z
        .uuid()
        .openapi({
          param: {
            description: 'IterationId to use for the suggested tags and regions.',
            examples: {
              'Successful QuerySuggestedImageCount request': {
                value: 'b7b9d99c-a2c6-4658-9900-a98d2ff5bc66',
              },
            },
            in: 'query',
            name: 'iterationId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    body: {
      description: 'Model that contains tagIds, threshold and projectType to query by.',
      content: {
        'application/json': { schema: TagFilterSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              tagIds: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.uuid()),
                )
                .exactOptional()
                .openapi({
                  description: 'Existing TagIds in project to get suggested tags count for.',
                  readOnly: false,
                }),
              threshold: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({
                  description: 'Confidence threshold to filter suggested tags on.',
                  readOnly: false,
                }),
            })
            .openapi({
              description:
                'Model that query for counting of images whose suggested tags match given tags and their probability are greater than or equal to the given threshold.',
              required: [],
            }),
        },
        'application/xml': { schema: TagFilterSchema },
        'text/xml': { schema: TagFilterSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.record(z.string(), z.int32()),
          examples: {
            'Successful QuerySuggestedImageCount request':
              SuccessfulQuerySuggestedImageCountRequestExample,
          },
        },
        'application/xml': {
          schema: z.record(z.string(), z.int32()),
          examples: {
            'Successful QuerySuggestedImageCount request':
              SuccessfulQuerySuggestedImageCountRequestExample,
          },
        },
        'text/xml': {
          schema: z.record(z.string(), z.int32()),
          examples: {
            'Successful QuerySuggestedImageCount request':
              SuccessfulQuerySuggestedImageCountRequestExample,
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const getProjectsProjectIdImagesTaggedRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/images/tagged',
  tags: ['ImageApi'],
  summary: 'Get tagged images for a given project iteration.',
  description:
    'This API supports batching and range selection. By default it will only return first 50 images matching images.\r\nUse the {take} and {skip} parameters to control how many images to return in a given batch.\r\nThe filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and\r\n"Cat" tags, then only images tagged with Dog and/or Cat will be returned',
  operationId: 'GetTaggedImages',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful GetTaggedImages request': {
                value: 'bc3f7dad-5544-468c-8573-3ef04d55463e',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    query: z.object({
      iterationId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The iteration id. Defaults to workspace.',
            examples: {
              'Successful GetTaggedImages request': {
                value: 'cf0f83fb-ebaa-4b25-8e34-613a6a0b8a12',
              },
            },
            in: 'query',
            name: 'iterationId',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      tagIds: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.uuid()).min(0).max(20),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'A list of tags ids to filter the images. Defaults to all tagged images when null. Limited to 20.',
            explode: false,
            in: 'query',
            name: 'tagIds',
            required: false,
            schema: {
              items: { format: 'uuid', nullable: false, type: 'string' },
              maxItems: 20,
              minItems: 0,
              type: 'array',
            },
            style: 'form',
          },
        }),
      orderBy: z
        .enum(['Newest', 'Oldest'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The ordering. Defaults to newest.',
            in: 'query',
            name: 'orderBy',
            required: false,
            schema: { enum: ['Newest', 'Oldest'], type: 'string' },
          },
        }),
      take: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0).max(256),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of images to return. Defaults to 50, limited to 256.',
            in: 'query',
            name: 'take',
            required: false,
            schema: { default: 50, format: 'int32', maximum: 256, minimum: 0, type: 'integer' },
          },
        }),
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Number of images to skip before beginning the image batch. Defaults to 0.',
            in: 'query',
            name: 'skip',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(ImageSchema),
          examples: {
            'Successful GetTaggedImages request': SuccessfulGetTaggedImagesRequestExample,
          },
        },
        'application/xml': {
          schema: z.array(ImageSchema),
          examples: {
            'Successful GetTaggedImages request': SuccessfulGetTaggedImagesRequestExample,
          },
        },
        'text/xml': {
          schema: z.array(ImageSchema),
          examples: {
            'Successful GetTaggedImages request': SuccessfulGetTaggedImagesRequestExample,
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const getProjectsProjectIdImagesTaggedCountRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/images/tagged/count',
  tags: ['ImageApi'],
  summary: 'Gets the number of images tagged with the provided {tagIds}.',
  description:
    'The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and\r\n"Cat" tags, then only images tagged with Dog and/or Cat will be returned',
  operationId: 'GetTaggedImageCount',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful GetTaggedImageCount request': {
                value: 'bc3f7dad-5544-468c-8573-3ef04d55463e',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    query: z.object({
      iterationId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The iteration id. Defaults to workspace.',
            examples: {
              'Successful GetTaggedImageCount request': {
                value: 'cf0f83fb-ebaa-4b25-8e34-613a6a0b8a12',
              },
            },
            in: 'query',
            name: 'iterationId',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      tagIds: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.uuid()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'A list of tags ids to filter the images to count. Defaults to all tags when null.',
            explode: false,
            in: 'query',
            name: 'tagIds',
            required: false,
            schema: { items: { format: 'uuid', nullable: false, type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.int32(),
          examples: {
            'Successful GetTaggedImageCount request': SuccessfulGetTaggedImageCountRequestExample,
          },
        },
        'application/xml': {
          schema: z.int32(),
          examples: {
            'Successful GetTaggedImageCount request': SuccessfulGetTaggedImageCountRequestExample,
          },
        },
        'text/xml': {
          schema: z.int32(),
          examples: {
            'Successful GetTaggedImageCount request': SuccessfulGetTaggedImageCountRequestExample,
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const postProjectsProjectIdImagesTagsRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/images/tags',
  tags: ['ImageApi'],
  summary: 'Associate a set of images with a set of tags.',
  operationId: 'CreateImageTags',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful CreateImageTags request': {
                value: 'bc3f7dad-5544-468c-8573-3ef04d55463e',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    body: {
      description: 'Batch of image tags. Limited to 128 tags per batch.',
      content: {
        'application/json': { schema: ImageTagCreateBatchSchema },
        'application/x-www-form-urlencoded': { schema: ImageTagCreateBatchSchema },
        'application/xml': { schema: ImageTagCreateBatchSchema },
        'text/xml': { schema: ImageTagCreateBatchSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ImageTagCreateSummarySchema,
          examples: {
            'Successful CreateImageTags request': SuccessfulCreateImageTagsRequestExample,
          },
        },
        'application/xml': {
          schema: ImageTagCreateSummarySchema,
          examples: {
            'Successful CreateImageTags request': SuccessfulCreateImageTagsRequestExample,
          },
        },
        'text/xml': {
          schema: ImageTagCreateSummarySchema,
          examples: {
            'Successful CreateImageTags request': SuccessfulCreateImageTagsRequestExample,
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const deleteProjectsProjectIdImagesTagsRoute = createRoute({
  method: 'delete',
  path: '/projects/{projectId}/images/tags',
  tags: ['ImageApi'],
  summary: 'Remove a set of tags from a set of images.',
  operationId: 'DeleteImageTags',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful DeleteImageTags request': {
                value: '64b822c5-8082-4b36-a426-27225f4aa18c',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    query: z.object({
      imageIds: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.uuid()).min(0).max(64),
        )
        .openapi({
          param: {
            description: 'Image ids. Limited to 64 images.',
            examples: {
              'Successful DeleteImageTags request': {
                value: [
                  'e31a14ab-5d78-4f7b-a267-3a1e4fd8a758',
                  'cf0f83fb-ebaa-4b25-8e34-613a6a0b8a12',
                ],
              },
            },
            explode: false,
            in: 'query',
            name: 'imageIds',
            required: true,
            schema: {
              items: { format: 'uuid', nullable: false, type: 'string' },
              maxItems: 64,
              minItems: 0,
              type: 'array',
            },
            style: 'form',
          },
        }),
      tagIds: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.uuid()).min(0).max(20),
        )
        .openapi({
          param: {
            description: 'Tags to be deleted from the specified images. Limited to 20 tags.',
            examples: {
              'Successful DeleteImageTags request': {
                value: [
                  'e31a14ab-5d78-4f7b-a267-3a1e4fd8a758',
                  'cf0f83fb-ebaa-4b25-8e34-613a6a0b8a12',
                ],
              },
            },
            explode: false,
            in: 'query',
            name: 'tagIds',
            required: true,
            schema: {
              items: { format: 'uuid', nullable: false, type: 'string' },
              maxItems: 20,
              minItems: 0,
              type: 'array',
            },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'Error response',
      content: { '*/*': { schema: CustomVisionErrorSchema } },
    },
  },
})

export const getProjectsProjectIdImagesUntaggedRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/images/untagged',
  tags: ['ImageApi'],
  summary: 'Get untagged images for a given project iteration.',
  description:
    'This API supports batching and range selection. By default it will only return first 50 images matching images.\r\nUse the {take} and {skip} parameters to control how many images to return in a given batch.',
  operationId: 'GetUntaggedImages',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful GetUntaggedImages request': {
                value: 'bc3f7dad-5544-468c-8573-3ef04d55463e',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    query: z.object({
      iterationId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The iteration id. Defaults to workspace.',
            examples: {
              'Successful GetUntaggedImages request': {
                value: 'cf0f83fb-ebaa-4b25-8e34-613a6a0b8a12',
              },
            },
            in: 'query',
            name: 'iterationId',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      orderBy: z
        .enum(['Newest', 'Oldest'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The ordering. Defaults to newest.',
            in: 'query',
            name: 'orderBy',
            required: false,
            schema: { enum: ['Newest', 'Oldest'], type: 'string' },
          },
        }),
      take: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0).max(256),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of images to return. Defaults to 50, limited to 256.',
            in: 'query',
            name: 'take',
            required: false,
            schema: { default: 50, format: 'int32', maximum: 256, minimum: 0, type: 'integer' },
          },
        }),
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Number of images to skip before beginning the image batch. Defaults to 0.',
            in: 'query',
            name: 'skip',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(ImageSchema),
          examples: {
            'Successful GetUntaggedImages request': SuccessfulGetUntaggedImagesRequestExample,
          },
        },
        'application/xml': {
          schema: z.array(ImageSchema),
          examples: {
            'Successful GetUntaggedImages request': SuccessfulGetUntaggedImagesRequestExample,
          },
        },
        'text/xml': {
          schema: z.array(ImageSchema),
          examples: {
            'Successful GetUntaggedImages request': SuccessfulGetUntaggedImagesRequestExample,
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const getProjectsProjectIdImagesUntaggedCountRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/images/untagged/count',
  tags: ['ImageApi'],
  summary: 'Gets the number of untagged images.',
  description:
    'This API returns the images which have no tags for a given project and optionally an iteration. If no iteration is specified the\r\ncurrent workspace is used.',
  operationId: 'GetUntaggedImageCount',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful GetUntaggedImageCount request': {
                value: 'bc3f7dad-5544-468c-8573-3ef04d55463e',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    query: z.object({
      iterationId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The iteration id. Defaults to workspace.',
            examples: {
              'Successful GetUntaggedImageCount request': {
                value: 'cf0f83fb-ebaa-4b25-8e34-613a6a0b8a12',
              },
            },
            in: 'query',
            name: 'iterationId',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.int32(),
          examples: {
            'Successful GetUntaggedImageCount request':
              SuccessfulGetUntaggedImageCountRequestExample,
          },
        },
        'application/xml': {
          schema: z.int32(),
          examples: {
            'Successful GetUntaggedImageCount request':
              SuccessfulGetUntaggedImageCountRequestExample,
          },
        },
        'text/xml': {
          schema: z.int32(),
          examples: {
            'Successful GetUntaggedImageCount request':
              SuccessfulGetUntaggedImageCountRequestExample,
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const postProjectsProjectIdImagesUrlsRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/images/urls',
  tags: ['ImageApi'],
  summary: 'Add the provided images urls to the set of training images.',
  description:
    'This API accepts a batch of urls, and optionally tags, to create images. There is a limit of 64 images and 20 tags.',
  operationId: 'CreateImagesFromUrls',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful CreateImagesFromUrls request': {
                value: '64b822c5-8082-4b36-a426-27225f4aa18c',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    body: {
      description: 'Image urls and tag ids. Limited to 64 images and 20 tags per batch.',
      content: {
        'application/json': { schema: ImageUrlCreateBatchSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              images: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        regions: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  height: z
                                    .preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.float32(),
                                    )
                                    .openapi({ description: 'Height.', readOnly: false }),
                                  left: z
                                    .preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.float32(),
                                    )
                                    .openapi({
                                      description: 'Coordinate of the left boundary.',
                                      readOnly: false,
                                    }),
                                  tagId: z
                                    .uuid()
                                    .openapi({
                                      description: 'Id of the tag associated with this region.',
                                      readOnly: false,
                                    }),
                                  top: z
                                    .preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.float32(),
                                    )
                                    .openapi({
                                      description: 'Coordinate of the top boundary.',
                                      readOnly: false,
                                    }),
                                  width: z
                                    .preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.float32(),
                                    )
                                    .openapi({ description: 'Width.', readOnly: false }),
                                })
                                .openapi({ required: ['tagId', 'left', 'top', 'width', 'height'] }),
                            ),
                          )
                          .exactOptional()
                          .openapi({ readOnly: false }),
                        tagIds: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(z.uuid()),
                          )
                          .exactOptional()
                          .openapi({ readOnly: false }),
                        url: z
                          .string()
                          .openapi({ description: 'Url of the image.', readOnly: false }),
                      })
                      .openapi({ required: ['url'] }),
                  ),
                )
                .exactOptional()
                .openapi({ readOnly: false }),
              tagIds: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.uuid()),
                )
                .exactOptional()
                .openapi({ readOnly: false }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: ImageUrlCreateBatchSchema },
        'text/xml': { schema: ImageUrlCreateBatchSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ImageCreateSummarySchema,
          examples: {
            'Successful CreateImagesFromUrls request': SuccessfulCreateImagesFromUrlsRequestExample,
          },
        },
        'application/xml': {
          schema: ImageCreateSummarySchema,
          examples: {
            'Successful CreateImagesFromUrls request': SuccessfulCreateImagesFromUrlsRequestExample,
          },
        },
        'text/xml': {
          schema: ImageCreateSummarySchema,
          examples: {
            'Successful CreateImagesFromUrls request': SuccessfulCreateImagesFromUrlsRequestExample,
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const postProjectsProjectIdImagesImageIdRegionproposalsRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/images/{imageId}/regionproposals',
  tags: ['ImageRegionProposalApi'],
  summary: 'Get region proposals for an image. Returns empty array if no proposals are found.',
  description:
    'This API will get region proposals for an image along with confidences for the region. It returns an empty array if no proposals are found.',
  operationId: 'GetImageRegionProposals',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful GetImageRegionProposals request': {
                value: 'bc3f7dad-5544-468c-8573-3ef04d55463e',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
      imageId: z
        .uuid()
        .openapi({
          param: {
            description: 'The image id.',
            examples: {
              'Successful GetImageRegionProposals request': {
                value: '4d6eb844-42ee-42bc-bd6f-c32455ef07c9',
              },
            },
            in: 'path',
            name: 'imageId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ImageRegionProposalSchema,
          examples: {
            'Successful GetImageRegionProposals request':
              SuccessfulGetImageRegionProposalsRequestExample,
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: { 'application/json': { schema: CustomVisionErrorSchema } },
    },
  },
})

export const getProjectsProjectIdIterationsRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/iterations',
  tags: ['ProjectApi'],
  summary: 'Get iterations for the project.',
  operationId: 'GetIterations',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful GetIterations request': { value: '64b822c5-8082-4b36-a426-27225f4aa18c' },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(IterationSchema),
          examples: { 'Successful GetIterations request': SuccessfulGetIterationsRequestExample },
        },
        'application/xml': {
          schema: z.array(IterationSchema),
          examples: { 'Successful GetIterations request': SuccessfulGetIterationsRequestExample },
        },
        'text/xml': {
          schema: z.array(IterationSchema),
          examples: { 'Successful GetIterations request': SuccessfulGetIterationsRequestExample },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const getProjectsProjectIdIterationsIterationIdRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/iterations/{iterationId}',
  tags: ['ProjectApi'],
  summary: 'Get a specific iteration.',
  operationId: 'GetIteration',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The id of the project the iteration belongs to.',
            examples: {
              'Successful GetIteration request': { value: '64b822c5-8082-4b36-a426-27225f4aa18c' },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
      iterationId: z
        .uuid()
        .openapi({
          param: {
            description: 'The id of the iteration to get.',
            examples: {
              'Successful GetIteration request': { value: 'e31a14ab-5d78-4f7b-a267-3a1e4fd8a758' },
            },
            in: 'path',
            name: 'iterationId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: IterationSchema,
          examples: { 'Successful GetIteration request': SuccessfulGetIterationRequestExample },
        },
        'application/xml': {
          schema: IterationSchema,
          examples: { 'Successful GetIteration request': SuccessfulGetIterationRequestExample },
        },
        'text/xml': {
          schema: IterationSchema,
          examples: { 'Successful GetIteration request': SuccessfulGetIterationRequestExample },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const deleteProjectsProjectIdIterationsIterationIdRoute = createRoute({
  method: 'delete',
  path: '/projects/{projectId}/iterations/{iterationId}',
  tags: ['ProjectApi'],
  summary: 'Delete a specific iteration of a project.',
  operationId: 'DeleteIteration',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful DeleteIteration request': {
                value: '64b822c5-8082-4b36-a426-27225f4aa18c',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
      iterationId: z
        .uuid()
        .openapi({
          param: {
            description: 'The iteration id.',
            examples: {
              'Successful DeleteIteration request': {
                value: 'e31a14ab-5d78-4f7b-a267-3a1e4fd8a758',
              },
            },
            in: 'path',
            name: 'iterationId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'Error response',
      content: { '*/*': { schema: CustomVisionErrorSchema } },
    },
  },
})

export const patchProjectsProjectIdIterationsIterationIdRoute = createRoute({
  method: 'patch',
  path: '/projects/{projectId}/iterations/{iterationId}',
  tags: ['ProjectApi'],
  summary: 'Update a specific iteration.',
  operationId: 'UpdateIteration',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'Project id.',
            examples: {
              'Successful UpdateIteration request': {
                value: '64b822c5-8082-4b36-a426-27225f4aa18c',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
      iterationId: z
        .uuid()
        .openapi({
          param: {
            description: 'Iteration id.',
            examples: {
              'Successful UpdateIteration request': {
                value: 'e31a14ab-5d78-4f7b-a267-3a1e4fd8a758',
              },
            },
            in: 'path',
            name: 'iterationId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    body: {
      description: 'The updated iteration model.',
      content: {
        'application/json': { schema: IterationSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              classificationType: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.enum(['Multiclass', 'Multilabel']).nullable(),
              )
                .exactOptional()
                .openapi({
                  description: 'Gets the classification type of the project.',
                  readOnly: true,
                  'x-ms-enum': { modelAsString: true, name: 'Classifier' },
                }),
              created: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description: 'Gets the time this iteration was completed.',
                  readOnly: true,
                }),
              domainId: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.uuid().nullable(),
              )
                .exactOptional()
                .openapi({
                  description:
                    'Get or sets a guid of the domain the iteration has been trained on.',
                  readOnly: true,
                }),
              exportable: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Whether the iteration can be exported to another format for download.',
                  readOnly: true,
                }),
              exportableTo: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.enum(['CoreML', 'TensorFlow', 'DockerFile', 'ONNX', 'VAIDK'])),
                )
                .exactOptional()
                .openapi({
                  description: 'A set of platforms this iteration can export to.',
                  readOnly: true,
                }),
              id: z
                .uuid()
                .exactOptional()
                .openapi({ description: 'Gets the id of the iteration.', readOnly: true }),
              lastModified: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description: 'Gets the time this iteration was last modified.',
                  readOnly: true,
                }),
              name: z
                .string()
                .openapi({
                  description: 'Gets or sets the name of the iteration.',
                  readOnly: false,
                }),
              originalPublishResourceId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Resource Provider Id this iteration was originally published to.',
                  readOnly: true,
                }),
              projectId: z
                .uuid()
                .exactOptional()
                .openapi({ description: 'Gets the project id of the iteration.', readOnly: true }),
              publishName: z
                .string()
                .exactOptional()
                .openapi({ description: 'Name of the published model.', readOnly: true }),
              reservedBudgetInHours: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description: 'Gets the reserved advanced training budget for the iteration.',
                  readOnly: true,
                }),
              status: z
                .string()
                .exactOptional()
                .openapi({ description: 'Gets the current iteration status.', readOnly: true }),
              trainedAt: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              )
                .exactOptional()
                .openapi({
                  description: 'Gets the time this iteration was last modified.',
                  readOnly: true,
                }),
              trainingTimeInMinutes: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description: 'Gets the training time for the iteration.',
                  readOnly: true,
                }),
              trainingType: z
                .enum(['Regular', 'Advanced'])
                .exactOptional()
                .openapi({
                  description: 'Gets the training type of the iteration.',
                  readOnly: true,
                  'x-ms-enum': { modelAsString: true, name: 'TrainingType' },
                }),
            })
            .openapi({ description: 'Iteration model to be sent over JSON.', required: ['name'] }),
        },
        'application/xml': { schema: IterationSchema },
        'text/xml': { schema: IterationSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: IterationSchema,
          examples: {
            'Successful UpdateIteration request': SuccessfulUpdateIterationRequestExample,
          },
        },
        'application/xml': {
          schema: IterationSchema,
          examples: {
            'Successful UpdateIteration request': SuccessfulUpdateIterationRequestExample,
          },
        },
        'text/xml': {
          schema: IterationSchema,
          examples: {
            'Successful UpdateIteration request': SuccessfulUpdateIterationRequestExample,
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const getProjectsProjectIdIterationsIterationIdExportRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/iterations/{iterationId}/export',
  tags: ['ProjectApi'],
  summary: 'Get the list of exports for a specific iteration.',
  operationId: 'GetExports',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful GetExports request': { value: '64b822c5-8082-4b36-a426-27225f4aa18c' },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
      iterationId: z
        .uuid()
        .openapi({
          param: {
            description: 'The iteration id.',
            examples: {
              'Successful GetExports request': { value: 'e31a14ab-5d78-4f7b-a267-3a1e4fd8a758' },
            },
            in: 'path',
            name: 'iterationId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(ExportSchema),
          examples: { 'Successful GetExports request': SuccessfulGetExportsRequestExample },
        },
        'application/xml': {
          schema: z.array(ExportSchema),
          examples: { 'Successful GetExports request': SuccessfulGetExportsRequestExample },
        },
        'text/xml': {
          schema: z.array(ExportSchema),
          examples: { 'Successful GetExports request': SuccessfulGetExportsRequestExample },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const postProjectsProjectIdIterationsIterationIdExportRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/iterations/{iterationId}/export',
  tags: ['ProjectApi'],
  summary: 'Export a trained iteration.',
  operationId: 'ExportIteration',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful ExportIteration request': {
                value: '64b822c5-8082-4b36-a426-27225f4aa18c',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
      iterationId: z
        .uuid()
        .openapi({
          param: {
            description: 'The iteration id.',
            examples: {
              'Successful ExportIteration request': {
                value: 'e31a14ab-5d78-4f7b-a267-3a1e4fd8a758',
              },
            },
            in: 'path',
            name: 'iterationId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    query: z.object({
      platform: z
        .enum(['CoreML', 'TensorFlow', 'DockerFile', 'ONNX', 'VAIDK'])
        .openapi({
          param: {
            description: 'The target platform.',
            examples: { 'Successful ExportIteration request': { value: 'TensorFlow' } },
            in: 'query',
            name: 'platform',
            required: true,
            schema: {
              enum: ['CoreML', 'TensorFlow', 'DockerFile', 'ONNX', 'VAIDK'],
              type: 'string',
            },
          },
        }),
      flavor: z
        .enum(['Linux', 'Windows', 'ONNX10', 'ONNX12', 'ARM', 'TensorFlowNormal', 'TensorFlowLite'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The flavor of the target platform.',
            in: 'query',
            name: 'flavor',
            required: false,
            schema: {
              enum: [
                'Linux',
                'Windows',
                'ONNX10',
                'ONNX12',
                'ARM',
                'TensorFlowNormal',
                'TensorFlowLite',
              ],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ExportSchema,
          examples: {
            'Successful ExportIteration request': SuccessfulExportIterationRequestExample,
          },
        },
        'application/xml': {
          schema: ExportSchema,
          examples: {
            'Successful ExportIteration request': SuccessfulExportIterationRequestExample,
          },
        },
        'text/xml': {
          schema: ExportSchema,
          examples: {
            'Successful ExportIteration request': SuccessfulExportIterationRequestExample,
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const getProjectsProjectIdIterationsIterationIdPerformanceRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/iterations/{iterationId}/performance',
  tags: ['ProjectApi'],
  summary: 'Get detailed performance information about an iteration.',
  operationId: 'GetIterationPerformance',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The id of the project the iteration belongs to.',
            examples: {
              'Successful GetIterationPerformance request': {
                value: 'bc3f7dad-5544-468c-8573-3ef04d55463e',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
      iterationId: z
        .uuid()
        .openapi({
          param: {
            description: 'The id of the iteration to get.',
            examples: {
              'Successful GetIterationPerformance request': {
                value: 'fe1e83c4-6f50-4899-9544-6bb08cf0e15a',
              },
            },
            in: 'path',
            name: 'iterationId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    query: z.object({
      threshold: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The threshold used to determine true predictions.',
            examples: { 'Successful GetIterationPerformance request': { value: 0.9 } },
            in: 'query',
            name: 'threshold',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      overlapThreshold: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'If applicable, the bounding box overlap threshold used to determine true predictions.',
            in: 'query',
            name: 'overlapThreshold',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: IterationPerformanceSchema,
          examples: {
            'Successful GetIterationPerformance request':
              SuccessfulGetIterationPerformanceRequestExample,
          },
        },
        'application/xml': {
          schema: IterationPerformanceSchema,
          examples: {
            'Successful GetIterationPerformance request':
              SuccessfulGetIterationPerformanceRequestExample,
          },
        },
        'text/xml': {
          schema: IterationPerformanceSchema,
          examples: {
            'Successful GetIterationPerformance request':
              SuccessfulGetIterationPerformanceRequestExample,
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const getProjectsProjectIdIterationsIterationIdPerformanceImagesRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/iterations/{iterationId}/performance/images',
  tags: ['ProjectApi'],
  summary: 'Get image with its prediction for a given project iteration.',
  description:
    'This API supports batching and range selection. By default it will only return first 50 images matching images.\r\nUse the {take} and {skip} parameters to control how many images to return in a given batch.\r\nThe filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and\r\n"Cat" tags, then only images tagged with Dog and/or Cat will be returned',
  operationId: 'GetImagePerformances',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful GetImagePerformances request': {
                value: 'bc3f7dad-5544-468c-8573-3ef04d55463e',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
      iterationId: z
        .uuid()
        .openapi({
          param: {
            description: 'The iteration id. Defaults to workspace.',
            examples: {
              'Successful GetImagePerformances request': {
                value: 'b7b9d99c-a2c6-4658-9900-a98d2ff5bc66',
              },
            },
            in: 'path',
            name: 'iterationId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    query: z.object({
      tagIds: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.uuid()).min(0).max(20),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'A list of tags ids to filter the images. Defaults to all tagged images when null. Limited to 20.',
            examples: { 'Successful GetImagePerformances request': { value: [''] } },
            explode: false,
            in: 'query',
            name: 'tagIds',
            required: false,
            schema: {
              items: { format: 'uuid', nullable: false, type: 'string' },
              maxItems: 20,
              minItems: 0,
              type: 'array',
            },
            style: 'form',
          },
        }),
      orderBy: z
        .enum(['Newest', 'Oldest'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The ordering. Defaults to newest.',
            examples: { 'Successful GetImagePerformances request': { value: 'Newest' } },
            in: 'query',
            name: 'orderBy',
            required: false,
            schema: { enum: ['Newest', 'Oldest'], type: 'string' },
          },
        }),
      take: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0).max(256),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of images to return. Defaults to 50, limited to 256.',
            in: 'query',
            name: 'take',
            required: false,
            schema: { default: 50, format: 'int32', maximum: 256, minimum: 0, type: 'integer' },
          },
        }),
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Number of images to skip before beginning the image batch. Defaults to 0.',
            in: 'query',
            name: 'skip',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(ImagePerformanceSchema),
          examples: {
            'Successful GetImagePerformances request': SuccessfulGetImagePerformancesRequestExample,
          },
        },
        'application/xml': {
          schema: z.array(ImagePerformanceSchema),
          examples: {
            'Successful GetImagePerformances request': SuccessfulGetImagePerformancesRequestExample,
          },
        },
        'text/xml': {
          schema: z.array(ImagePerformanceSchema),
          examples: {
            'Successful GetImagePerformances request': SuccessfulGetImagePerformancesRequestExample,
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const getProjectsProjectIdIterationsIterationIdPerformanceImagesCountRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/iterations/{iterationId}/performance/images/count',
  tags: ['ProjectApi'],
  summary:
    'Gets the number of images tagged with the provided {tagIds} that have prediction results from\r\ntraining for the provided iteration {iterationId}.',
  description:
    'The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and\r\n"Cat" tags, then only images tagged with Dog and/or Cat will be returned',
  operationId: 'GetImagePerformanceCount',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful GetImagePerformanceCount request': {
                value: 'bc3f7dad-5544-468c-8573-3ef04d55463e',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
      iterationId: z
        .uuid()
        .openapi({
          param: {
            description: 'The iteration id. Defaults to workspace.',
            examples: {
              'Successful GetImagePerformanceCount request': {
                value: 'cf0f83fb-ebaa-4b25-8e34-613a6a0b8a12',
              },
            },
            in: 'path',
            name: 'iterationId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    query: z.object({
      tagIds: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.uuid()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'A list of tags ids to filter the images to count. Defaults to all tags when null.',
            examples: {
              'Successful GetImagePerformanceCount request': {
                value: ['b5f7e6a2-a481-49a6-afec-a7cef1af3544'],
              },
            },
            explode: false,
            in: 'query',
            name: 'tagIds',
            required: false,
            schema: { items: { format: 'uuid', nullable: false, type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.int32(),
          examples: {
            'Successful GetImagePerformanceCount request':
              SuccessfulGetImagePerformanceCountRequestExample,
          },
        },
        'application/xml': {
          schema: z.int32(),
          examples: {
            'Successful GetImagePerformanceCount request':
              SuccessfulGetImagePerformanceCountRequestExample,
          },
        },
        'text/xml': {
          schema: z.int32(),
          examples: {
            'Successful GetImagePerformanceCount request':
              SuccessfulGetImagePerformanceCountRequestExample,
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const postProjectsProjectIdIterationsIterationIdPublishRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/iterations/{iterationId}/publish',
  tags: ['ProjectApi'],
  summary: 'Publish a specific iteration.',
  operationId: 'PublishIteration',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful PublishIteration request': {
                value: '64b822c5-8082-4b36-a426-27225f4aa18c',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
      iterationId: z
        .uuid()
        .openapi({
          param: {
            description: 'The iteration id.',
            examples: {
              'Successful PublishIteration request': {
                value: 'e31a14ab-5d78-4f7b-a267-3a1e4fd8a758',
              },
            },
            in: 'path',
            name: 'iterationId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    query: z.object({
      publishName: z
        .string()
        .openapi({
          param: {
            description: 'The name to give the published iteration.',
            examples: { 'Successful PublishIteration request': { value: 'Model1' } },
            in: 'query',
            name: 'publishName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      predictionId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the prediction resource to publish to.',
            examples: {
              'Successful PublishIteration request': {
                value:
                  '/subscriptions/{subscription}/resourceGroups/{resource group name}/providers/Microsoft.CognitiveServices/accounts/{resource name}',
              },
            },
            in: 'query',
            name: 'predictionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.boolean(),
          examples: {
            'Successful PublishIteration request': SuccessfulPublishIterationRequestExample,
          },
        },
        'application/xml': {
          schema: z.boolean(),
          examples: {
            'Successful PublishIteration request': SuccessfulPublishIterationRequestExample,
          },
        },
        'text/xml': {
          schema: z.boolean(),
          examples: {
            'Successful PublishIteration request': SuccessfulPublishIterationRequestExample,
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const deleteProjectsProjectIdIterationsIterationIdPublishRoute = createRoute({
  method: 'delete',
  path: '/projects/{projectId}/iterations/{iterationId}/publish',
  tags: ['ProjectApi'],
  summary: 'Unpublish a specific iteration.',
  operationId: 'UnpublishIteration',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful UnpublishIteration request': {
                value: '64b822c5-8082-4b36-a426-27225f4aa18c',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
      iterationId: z
        .uuid()
        .openapi({
          param: {
            description: 'The iteration id.',
            examples: {
              'Successful UnpublishIteration request': {
                value: 'e31a14ab-5d78-4f7b-a267-3a1e4fd8a758',
              },
            },
            in: 'path',
            name: 'iterationId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'Error response',
      content: { '*/*': { schema: CustomVisionErrorSchema } },
    },
  },
})

export const deleteProjectsProjectIdPredictionsRoute = createRoute({
  method: 'delete',
  path: '/projects/{projectId}/predictions',
  tags: ['PredictionsApi'],
  summary: 'Delete a set of predicted images and their associated prediction results.',
  operationId: 'DeletePrediction',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful DeletePrediction request': {
                value: '64b822c5-8082-4b36-a426-27225f4aa18c',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    query: z.object({
      ids: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.uuid()).min(0).max(64),
        )
        .openapi({
          param: {
            description: 'The prediction ids. Limited to 64.',
            examples: {
              'Successful DeletePrediction request': {
                value: [
                  'e31a14ab-5d78-4f7b-a267-3a1e4fd8a758',
                  'cf0f83fb-ebaa-4b25-8e34-613a6a0b8a12',
                ],
              },
            },
            explode: false,
            in: 'query',
            name: 'ids',
            required: true,
            schema: {
              items: { format: 'uuid', nullable: false, type: 'string' },
              maxItems: 64,
              minItems: 0,
              type: 'array',
            },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'Error response',
      content: { '*/*': { schema: CustomVisionErrorSchema } },
    },
  },
})

export const postProjectsProjectIdPredictionsQueryRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/predictions/query',
  tags: ['PredictionsApi'],
  summary: 'Get images that were sent to your prediction endpoint.',
  operationId: 'QueryPredictions',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful QueryPredictions request': {
                value: 'bc3f7dad-5544-468c-8573-3ef04d55463e',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    body: {
      description: 'Parameters used to query the predictions. Limited to combining 2 tags.',
      content: {
        'application/json': { schema: PredictionQueryTokenSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              application: z.string().exactOptional().openapi({ readOnly: false }),
              continuation: z.string().exactOptional().openapi({ readOnly: false }),
              endTime: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              )
                .exactOptional()
                .openapi({ readOnly: false }),
              iterationId: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.uuid().nullable(),
              )
                .exactOptional()
                .openapi({ readOnly: false }),
              maxCount: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ readOnly: false }),
              orderBy: z
                .enum(['Newest', 'Oldest', 'Suggested'])
                .exactOptional()
                .openapi({
                  readOnly: false,
                  'x-ms-enum': { modelAsString: true, name: 'OrderBy' },
                }),
              session: z.string().exactOptional().openapi({ readOnly: false }),
              startTime: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.iso.datetime({ offset: true }).nullable(),
              )
                .exactOptional()
                .openapi({ readOnly: false }),
              tags: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        id: z.uuid().exactOptional().openapi({ readOnly: false }),
                        maxThreshold: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float32(),
                          )
                          .exactOptional()
                          .openapi({ readOnly: false }),
                        minThreshold: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float32(),
                          )
                          .exactOptional()
                          .openapi({ readOnly: false }),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({ readOnly: false }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: PredictionQueryTokenSchema },
        'text/xml': { schema: PredictionQueryTokenSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PredictionQueryResultSchema,
          examples: {
            'Successful QueryPredictions request': SuccessfulQueryPredictionsRequestExample,
          },
        },
        'application/xml': {
          schema: PredictionQueryResultSchema,
          examples: {
            'Successful QueryPredictions request': SuccessfulQueryPredictionsRequestExample,
          },
        },
        'text/xml': {
          schema: PredictionQueryResultSchema,
          examples: {
            'Successful QueryPredictions request': SuccessfulQueryPredictionsRequestExample,
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const postProjectsProjectIdQuicktestImageRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/quicktest/image',
  tags: ['PredictionsApi'],
  summary: 'Quick test an image.',
  operationId: 'QuickTestImage',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful QuickTestImage request': {
                value: '64b822c5-8082-4b36-a426-27225f4aa18c',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    query: z.object({
      iterationId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Specifies the id of a particular iteration to evaluate against.\r\n            The default iteration for the project will be used when not specified.',
            examples: {
              'Successful QuickTestImage request': {
                value: 'fe1e83c4-6f50-4899-9544-6bb08cf0e15a',
              },
            },
            in: 'query',
            name: 'iterationId',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      store: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Specifies whether or not to store the result of this prediction. The default is true, to store.',
            in: 'query',
            name: 'store',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
    }),
    body: CreateImagesFromDataRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ImagePredictionSchema,
          examples: { 'Successful QuickTestImage request': SuccessfulQuickTestImageRequestExample },
        },
        'application/xml': {
          schema: ImagePredictionSchema,
          examples: { 'Successful QuickTestImage request': SuccessfulQuickTestImageRequestExample },
        },
        'text/xml': {
          schema: ImagePredictionSchema,
          examples: { 'Successful QuickTestImage request': SuccessfulQuickTestImageRequestExample },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const postProjectsProjectIdQuicktestUrlRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/quicktest/url',
  tags: ['PredictionsApi'],
  summary: 'Quick test an image url.',
  operationId: 'QuickTestImageUrl',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project to evaluate against.',
            examples: {
              'Successful QuickTestImageUrl request': {
                value: '64b822c5-8082-4b36-a426-27225f4aa18c',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    query: z.object({
      iterationId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Specifies the id of a particular iteration to evaluate against.\r\n            The default iteration for the project will be used when not specified.',
            examples: {
              'Successful QuickTestImageUrl request': {
                value: 'fe1e83c4-6f50-4899-9544-6bb08cf0e15a',
              },
            },
            in: 'query',
            name: 'iterationId',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      store: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Specifies whether or not to store the result of this prediction. The default is true, to store.',
            in: 'query',
            name: 'store',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
    }),
    body: {
      description: 'An ImageUrl that contains the url of the image to be evaluated.',
      content: {
        'application/json': { schema: ImageUrlSchema },
        'application/x-www-form-urlencoded': { schema: ImageUrlSchema },
        'application/xml': { schema: ImageUrlSchema },
        'text/xml': { schema: ImageUrlSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ImagePredictionSchema,
          examples: {
            'Successful QuickTestImageUrl request': SuccessfulQuickTestImageUrlRequestExample,
          },
        },
        'application/xml': {
          schema: ImagePredictionSchema,
          examples: {
            'Successful QuickTestImageUrl request': SuccessfulQuickTestImageUrlRequestExample,
          },
        },
        'text/xml': {
          schema: ImagePredictionSchema,
          examples: {
            'Successful QuickTestImageUrl request': SuccessfulQuickTestImageUrlRequestExample,
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const getProjectsProjectIdTagsRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/tags',
  tags: ['TagsApi'],
  summary: 'Get the tags for a given project and iteration.',
  operationId: 'GetTags',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful GetTags request': { value: 'bc3f7dad-5544-468c-8573-3ef04d55463e' },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    query: z.object({
      iterationId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The iteration id. Defaults to workspace.',
            in: 'query',
            name: 'iterationId',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(TagSchema),
          examples: { 'Successful GetTags request': SuccessfulGetTagsRequestExample },
        },
        'application/xml': {
          schema: z.array(TagSchema),
          examples: { 'Successful GetTags request': SuccessfulGetTagsRequestExample },
        },
        'text/xml': {
          schema: z.array(TagSchema),
          examples: { 'Successful GetTags request': SuccessfulGetTagsRequestExample },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const postProjectsProjectIdTagsRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/tags',
  tags: ['TagsApi'],
  summary: 'Create a tag for the project.',
  operationId: 'CreateTag',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful CreateTag request': { value: 'bc3f7dad-5544-468c-8573-3ef04d55463e' },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The tag name.',
            examples: { 'Successful CreateTag request': { value: 'Tag1' } },
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional description for the tag.',
            examples: { 'Successful CreateTag request': { value: 'Description of Tag1' } },
            in: 'query',
            name: 'description',
            required: false,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum(['Regular', 'Negative'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional type for the tag.',
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['Regular', 'Negative'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: TagSchema,
          examples: { 'Successful CreateTag request': SuccessfulCreateTagRequestExample },
        },
        'application/xml': {
          schema: TagSchema,
          examples: { 'Successful CreateTag request': SuccessfulCreateTagRequestExample },
        },
        'text/xml': {
          schema: TagSchema,
          examples: { 'Successful CreateTag request': SuccessfulCreateTagRequestExample },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const getProjectsProjectIdTagsTagIdRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/tags/{tagId}',
  tags: ['TagsApi'],
  summary: 'Get information about a specific tag.',
  operationId: 'GetTag',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project this tag belongs to.',
            examples: {
              'Successful GetTag request': { value: 'bc3f7dad-5544-468c-8573-3ef04d55463e' },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
      tagId: z
        .uuid()
        .openapi({
          param: {
            description: 'The tag id.',
            examples: {
              'Successful GetTag request': { value: '9e27bc1b-7ae7-4e3b-a4e5-36153479dc01' },
            },
            in: 'path',
            name: 'tagId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    query: z.object({
      iterationId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The iteration to retrieve this tag from. Optional, defaults to current training set.',
            in: 'query',
            name: 'iterationId',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: TagSchema,
          examples: { 'Successful GetTag request': SuccessfulGetTagRequestExample },
        },
        'application/xml': {
          schema: TagSchema,
          examples: { 'Successful GetTag request': SuccessfulGetTagRequestExample },
        },
        'text/xml': {
          schema: TagSchema,
          examples: { 'Successful GetTag request': SuccessfulGetTagRequestExample },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const deleteProjectsProjectIdTagsTagIdRoute = createRoute({
  method: 'delete',
  path: '/projects/{projectId}/tags/{tagId}',
  tags: ['TagsApi'],
  summary: 'Delete a tag from the project.',
  operationId: 'DeleteTag',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful DeleteTag request': { value: 'bc3f7dad-5544-468c-8573-3ef04d55463e' },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
      tagId: z
        .uuid()
        .openapi({
          param: {
            description: 'Id of the tag to be deleted.',
            examples: {
              'Successful DeleteTag request': { value: '9e27bc1b-7ae7-4e3b-a4e5-36153479dc01' },
            },
            in: 'path',
            name: 'tagId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'Error response',
      content: { '*/*': { schema: CustomVisionErrorSchema } },
    },
  },
})

export const patchProjectsProjectIdTagsTagIdRoute = createRoute({
  method: 'patch',
  path: '/projects/{projectId}/tags/{tagId}',
  tags: ['TagsApi'],
  summary: 'Update a tag.',
  operationId: 'UpdateTag',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful UpdateTag request': { value: 'bc3f7dad-5544-468c-8573-3ef04d55463e' },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
      tagId: z
        .uuid()
        .openapi({
          param: {
            description: 'The id of the target tag.',
            examples: {
              'Successful UpdateTag request': { value: '9e27bc1b-7ae7-4e3b-a4e5-36153479dc01' },
            },
            in: 'path',
            name: 'tagId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    body: {
      description: 'The updated tag model.',
      content: {
        'application/json': { schema: TagSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              description: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.string().nullable(),
              ).openapi({
                description: 'Gets or sets the description of the tag.',
                readOnly: false,
              }),
              id: z
                .uuid()
                .exactOptional()
                .openapi({ description: 'Gets the Tag ID.', readOnly: true }),
              imageCount: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description: 'Gets the number of images with this tag.',
                  readOnly: true,
                }),
              name: z
                .string()
                .openapi({ description: 'Gets or sets the name of the tag.', readOnly: false }),
              type: z
                .enum(['Regular', 'Negative'])
                .openapi({
                  description: 'Gets or sets the type of the tag.',
                  readOnly: false,
                  'x-ms-enum': { modelAsString: true, name: 'TagType' },
                }),
            })
            .openapi({
              description: 'Represents a Tag.',
              required: ['name', 'description', 'type'],
            }),
        },
        'application/xml': { schema: TagSchema },
        'text/xml': { schema: TagSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: TagSchema,
          examples: { 'Successful UpdateTag request': SuccessfulUpdateTagRequestExample },
        },
        'application/xml': {
          schema: TagSchema,
          examples: { 'Successful UpdateTag request': SuccessfulUpdateTagRequestExample },
        },
        'text/xml': {
          schema: TagSchema,
          examples: { 'Successful UpdateTag request': SuccessfulUpdateTagRequestExample },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const postProjectsProjectIdTagsandregionsSuggestionsRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/tagsandregions/suggestions',
  tags: ['SuggestTagsAndRegionsApi'],
  summary:
    'Suggest tags and regions for an array/batch of untagged images. Returns empty array if no tags are found.',
  description:
    'This API will get suggested tags and regions for an array/batch of untagged images along with confidences for the tags. It returns an empty array if no tags are found.\r\nThere is a limit of 64 images in the batch.',
  operationId: 'SuggestTagsAndRegions',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful SuggestTagsAndRegions request': {
                value: 'bc3f7dad-5544-468c-8573-3ef04d55463e',
              },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    query: z.object({
      iterationId: z
        .uuid()
        .openapi({
          param: {
            description: 'IterationId to use for tag and region suggestion.',
            examples: {
              'Successful SuggestTagsAndRegions request': {
                value: '4d6eb844-42ee-42bc-bd6f-c32455ef07c9',
              },
            },
            in: 'query',
            name: 'iterationId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
      imageIds: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.uuid()).min(0).max(64),
        )
        .openapi({
          param: {
            description:
              'Array of image ids tag suggestion are needed for. Use GetUntaggedImages API to get imageIds.',
            examples: {
              'Successful SuggestTagsAndRegions request': {
                value: [
                  'e7f08c23-9e54-49f7-b609-69a0240ba306',
                  'ce632666-4b66-4adb-aa0a-ad8b7c32df06',
                ],
              },
            },
            explode: false,
            in: 'query',
            name: 'imageIds',
            required: true,
            schema: {
              items: { format: 'uuid', nullable: false, type: 'string' },
              maxItems: 64,
              minItems: 0,
              type: 'array',
            },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(SuggestedTagAndRegionSchema),
          examples: {
            'Successful SuggestTagsAndRegions request':
              SuccessfulSuggestTagsAndRegionsRequestExample,
          },
        },
        'application/xml': {
          schema: z.array(SuggestedTagAndRegionSchema),
          examples: {
            'Successful SuggestTagsAndRegions request':
              SuccessfulSuggestTagsAndRegionsRequestExample,
          },
        },
        'text/xml': {
          schema: z.array(SuggestedTagAndRegionSchema),
          examples: {
            'Successful SuggestTagsAndRegions request':
              SuccessfulSuggestTagsAndRegionsRequestExample,
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})

export const postProjectsProjectIdTrainRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/train',
  tags: ['ProjectApi'],
  summary: 'Queues project for training.',
  operationId: 'TrainProject',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful TrainProject request': { value: '64b822c5-8082-4b36-a426-27225f4aa18c' },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
    }),
    query: z.object({
      trainingType: z
        .enum(['Regular', 'Advanced'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The type of training to use to train the project (default: Regular).',
            in: 'query',
            name: 'trainingType',
            required: false,
            schema: { enum: ['Regular', 'Advanced'], type: 'string' },
          },
        }),
      reservedBudgetInHours: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of hours reserved as budget for training (if applicable).',
            in: 'query',
            name: 'reservedBudgetInHours',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      forceTrain: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to force train even if dataset and configuration does not change (default: false).',
            in: 'query',
            name: 'forceTrain',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      notificationEmailAddress: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The email address to send notification to when training finishes (default: null).',
            in: 'query',
            name: 'notificationEmailAddress',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'Additional training parameters passed in to control how the project is trained.',
      content: {
        'application/json': { schema: TrainingParametersSchema },
        'application/x-www-form-urlencoded': { schema: TrainingParametersSchema },
        'application/xml': { schema: TrainingParametersSchema },
        'text/xml': { schema: TrainingParametersSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: IterationSchema,
          examples: { 'Successful TrainProject request': SuccessfulTrainProjectRequestExample },
        },
        'application/xml': {
          schema: IterationSchema,
          examples: { 'Successful TrainProject request': SuccessfulTrainProjectRequestExample },
        },
        'text/xml': {
          schema: IterationSchema,
          examples: { 'Successful TrainProject request': SuccessfulTrainProjectRequestExample },
        },
      },
    },
    default: {
      description: 'Error response',
      content: {
        'application/json': { schema: CustomVisionErrorSchema },
        'application/xml': { schema: CustomVisionErrorSchema },
        'text/xml': { schema: CustomVisionErrorSchema },
      },
    },
  },
})
