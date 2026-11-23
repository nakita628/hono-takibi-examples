type Domain = {
  enabled?: boolean | undefined
  exportable?: boolean | undefined
  id?: string | undefined
  name?: string | undefined
  type?: 'Classification' | 'ObjectDetection' | undefined
}
type CustomVisionError = {
  code:
    | 'NoError'
    | 'BadRequest'
    | 'BadRequestExceededBatchSize'
    | 'BadRequestNotSupported'
    | 'BadRequestInvalidIds'
    | 'BadRequestProjectName'
    | 'BadRequestProjectNameNotUnique'
    | 'BadRequestProjectDescription'
    | 'BadRequestProjectUnknownDomain'
    | 'BadRequestProjectUnknownClassification'
    | 'BadRequestProjectUnsupportedDomainTypeChange'
    | 'BadRequestProjectUnsupportedExportPlatform'
    | 'BadRequestProjectImagePreprocessingSettings'
    | 'BadRequestProjectDuplicated'
    | 'BadRequestIterationName'
    | 'BadRequestIterationNameNotUnique'
    | 'BadRequestIterationDescription'
    | 'BadRequestIterationIsNotTrained'
    | 'BadRequestIterationValidationFailed'
    | 'BadRequestWorkspaceCannotBeModified'
    | 'BadRequestWorkspaceNotDeletable'
    | 'BadRequestTagName'
    | 'BadRequestTagNameNotUnique'
    | 'BadRequestTagDescription'
    | 'BadRequestTagType'
    | 'BadRequestMultipleNegativeTag'
    | 'BadRequestImageTags'
    | 'BadRequestImageRegions'
    | 'BadRequestNegativeAndRegularTagOnSameImage'
    | 'BadRequestRequiredParamIsNull'
    | 'BadRequestIterationIsPublished'
    | 'BadRequestInvalidPublishName'
    | 'BadRequestInvalidPublishTarget'
    | 'BadRequestUnpublishFailed'
    | 'BadRequestIterationNotPublished'
    | 'BadRequestSubscriptionApi'
    | 'BadRequestExceedProjectLimit'
    | 'BadRequestExceedIterationPerProjectLimit'
    | 'BadRequestExceedTagPerProjectLimit'
    | 'BadRequestExceedTagPerImageLimit'
    | 'BadRequestExceededQuota'
    | 'BadRequestCannotMigrateProjectWithName'
    | 'BadRequestNotLimitedTrial'
    | 'BadRequestImageBatch'
    | 'BadRequestImageStream'
    | 'BadRequestImageUrl'
    | 'BadRequestImageFormat'
    | 'BadRequestImageSizeBytes'
    | 'BadRequestImageExceededCount'
    | 'BadRequestTrainingNotNeeded'
    | 'BadRequestTrainingNotNeededButTrainingPipelineUpdated'
    | 'BadRequestTrainingValidationFailed'
    | 'BadRequestClassificationTrainingValidationFailed'
    | 'BadRequestMultiClassClassificationTrainingValidationFailed'
    | 'BadRequestMultiLabelClassificationTrainingValidationFailed'
    | 'BadRequestDetectionTrainingValidationFailed'
    | 'BadRequestTrainingAlreadyInProgress'
    | 'BadRequestDetectionTrainingNotAllowNegativeTag'
    | 'BadRequestInvalidEmailAddress'
    | 'BadRequestDomainNotSupportedForAdvancedTraining'
    | 'BadRequestExportPlatformNotSupportedForAdvancedTraining'
    | 'BadRequestReservedBudgetInHoursNotEnoughForAdvancedTraining'
    | 'BadRequestExportValidationFailed'
    | 'BadRequestExportAlreadyInProgress'
    | 'BadRequestPredictionIdsMissing'
    | 'BadRequestPredictionIdsExceededCount'
    | 'BadRequestPredictionTagsExceededCount'
    | 'BadRequestPredictionResultsExceededCount'
    | 'BadRequestPredictionInvalidApplicationName'
    | 'BadRequestPredictionInvalidQueryParameters'
    | 'BadRequestInvalidImportToken'
    | 'BadRequestExportWhileTraining'
    | 'BadRequestInvalid'
    | 'UnsupportedMediaType'
    | 'Forbidden'
    | 'ForbiddenUser'
    | 'ForbiddenUserResource'
    | 'ForbiddenUserSignupDisabled'
    | 'ForbiddenUserSignupAllowanceExceeded'
    | 'ForbiddenUserDoesNotExist'
    | 'ForbiddenUserDisabled'
    | 'ForbiddenUserInsufficientCapability'
    | 'ForbiddenDRModeEnabled'
    | 'ForbiddenInvalid'
    | 'NotFound'
    | 'NotFoundProject'
    | 'NotFoundProjectDefaultIteration'
    | 'NotFoundIteration'
    | 'NotFoundIterationPerformance'
    | 'NotFoundTag'
    | 'NotFoundImage'
    | 'NotFoundDomain'
    | 'NotFoundApimSubscription'
    | 'NotFoundInvalid'
    | 'Conflict'
    | 'ConflictInvalid'
    | 'ErrorUnknown'
    | 'ErrorIterationCopyFailed'
    | 'ErrorPreparePerformanceMigrationFailed'
    | 'ErrorProjectInvalidWorkspace'
    | 'ErrorProjectInvalidPipelineConfiguration'
    | 'ErrorProjectInvalidDomain'
    | 'ErrorProjectTrainingRequestFailed'
    | 'ErrorProjectImportRequestFailed'
    | 'ErrorProjectExportRequestFailed'
    | 'ErrorFeaturizationServiceUnavailable'
    | 'ErrorFeaturizationQueueTimeout'
    | 'ErrorFeaturizationInvalidFeaturizer'
    | 'ErrorFeaturizationAugmentationUnavailable'
    | 'ErrorFeaturizationUnrecognizedJob'
    | 'ErrorFeaturizationAugmentationError'
    | 'ErrorExporterInvalidPlatform'
    | 'ErrorExporterInvalidFeaturizer'
    | 'ErrorExporterInvalidClassifier'
    | 'ErrorPredictionServiceUnavailable'
    | 'ErrorPredictionModelNotFound'
    | 'ErrorPredictionModelNotCached'
    | 'ErrorPrediction'
    | 'ErrorPredictionStorage'
    | 'ErrorRegionProposal'
    | 'ErrorInvalid'
  message: string
}
type ImageProcessingSettings = {
  augmentationMethods?: ({ [x: string]: boolean } | null) | undefined
}
type ProjectSettings = {
  classificationType?: 'Multiclass' | 'Multilabel' | undefined
  detectionParameters?: string | undefined
  domainId?: string | undefined
  imageProcessingSettings?: ImageProcessingSettings | undefined
  targetExportPlatforms?: ('CoreML' | 'TensorFlow' | 'DockerFile' | 'ONNX' | 'VAIDK')[] | undefined
  useNegativeSet?: (boolean | null) | undefined
}
type Project = {
  created?: string | undefined
  description: string | null
  drModeEnabled?: (boolean | null) | undefined
  id?: string | undefined
  lastModified?: string | undefined
  name: string
  settings: ProjectSettings
  status?: 'Succeeded' | 'Importing' | 'Failed' | undefined
  thumbnailUri?: string | undefined
}
type ProjectExport = {
  estimatedImportTimeInMS?: number | undefined
  imageCount?: number | undefined
  iterationCount?: number | undefined
  regionCount?: number | undefined
  tagCount?: number | undefined
  token?: string | undefined
}
type ImageRegion = {
  created?: string | undefined
  height: number
  left: number
  regionId?: string | undefined
  tagId: string
  tagName?: string | undefined
  top: number
  width: number
}
type ImageTag = {
  created?: string | undefined
  tagId?: string | undefined
  tagName?: string | undefined
}
type Image = {
  created?: string | undefined
  height?: number | undefined
  id?: string | undefined
  originalImageUri?: string | undefined
  regions?: (ImageRegion[] | null) | undefined
  resizedImageUri?: string | undefined
  tags?: (ImageTag[] | null) | undefined
  thumbnailUri?: string | undefined
  width?: number | undefined
}
type ImageCreateResult = {
  image?: Image | undefined
  sourceUrl?: string | undefined
  status?:
    | 'OK'
    | 'OKDuplicate'
    | 'ErrorSource'
    | 'ErrorImageFormat'
    | 'ErrorImageSize'
    | 'ErrorStorage'
    | 'ErrorLimitExceed'
    | 'ErrorTagLimitExceed'
    | 'ErrorRegionLimitExceed'
    | 'ErrorUnknown'
    | 'ErrorNegativeAndRegularTagOnSameImage'
    | undefined
}
type ImageCreateSummary = {
  images?: ImageCreateResult[] | undefined
  isBatchSuccessful?: boolean | undefined
}
type Region = { height: number; left: number; tagId: string; top: number; width: number }
type ImageFileCreateEntry = {
  contents?: string | undefined
  name?: string | undefined
  regions?: Region[] | undefined
  tagIds?: string[] | undefined
}
type ImageFileCreateBatch = {
  images?: ImageFileCreateEntry[] | undefined
  tagIds?: string[] | undefined
}
type ImageIdCreateEntry = {
  id?: string | undefined
  regions?: Region[] | undefined
  tagIds?: string[] | undefined
}
type ImageIdCreateBatch = {
  images?: ImageIdCreateEntry[] | undefined
  tagIds?: string[] | undefined
}
type ImageRegionCreateEntry = {
  height: number
  imageId: string
  left: number
  tagId: string
  top: number
  width: number
}
type ImageRegionCreateBatch = { regions?: ImageRegionCreateEntry[] | undefined }
type ImageRegionCreateResult = {
  created?: string | undefined
  height: number
  imageId?: string | undefined
  left: number
  regionId?: string | undefined
  tagId: string
  tagName?: string | undefined
  top: number
  width: number
}
type ImageRegionCreateSummary = {
  created?: (ImageRegionCreateResult[] | null) | undefined
  duplicated?: (ImageRegionCreateEntry[] | null) | undefined
  exceeded?: (ImageRegionCreateEntry[] | null) | undefined
}
type SuggestedTagAndRegionQueryToken = {
  continuation?: string | undefined
  maxCount?: number | undefined
  session?: string | undefined
  sortBy?: 'UncertaintyAscending' | 'UncertaintyDescending' | undefined
  tagIds?: string[] | undefined
  threshold?: number | undefined
}
type BoundingBox = { height: number; left: number; top: number; width: number }
type Prediction = {
  boundingBox?: BoundingBox | undefined
  probability?: number | undefined
  tagId?: string | undefined
  tagName?: (string | null) | undefined
}
type StoredSuggestedTagAndRegion = {
  created?: string | undefined
  domain?: string | undefined
  height?: number | undefined
  id?: string | undefined
  iteration?: string | undefined
  originalImageUri?: string | undefined
  predictionUncertainty?: number | undefined
  predictions?: Prediction[] | undefined
  project?: string | undefined
  resizedImageUri?: string | undefined
  thumbnailUri?: string | undefined
  width?: number | undefined
}
type SuggestedTagAndRegionQuery = {
  results?: StoredSuggestedTagAndRegion[] | undefined
  token?: SuggestedTagAndRegionQueryToken | undefined
}
type TagFilter = { tagIds?: string[] | undefined; threshold?: number | undefined }
type ImageTagCreateEntry = { imageId?: string | undefined; tagId?: string | undefined }
type ImageTagCreateBatch = { tags?: ImageTagCreateEntry[] | undefined }
type ImageTagCreateSummary = {
  created?: (ImageTagCreateEntry[] | null) | undefined
  duplicated?: (ImageTagCreateEntry[] | null) | undefined
  exceeded?: (ImageTagCreateEntry[] | null) | undefined
}
type ImageUrlCreateEntry = {
  regions?: Region[] | undefined
  tagIds?: string[] | undefined
  url: string
}
type ImageUrlCreateBatch = {
  images?: ImageUrlCreateEntry[] | undefined
  tagIds?: string[] | undefined
}
type RegionProposal = { boundingBox?: BoundingBox | undefined; confidence?: number | undefined }
type ImageRegionProposal = {
  imageId?: string | undefined
  projectId?: string | undefined
  proposals?: RegionProposal[] | undefined
}
type Iteration = {
  classificationType?: 'Multiclass' | 'Multilabel' | undefined
  created?: string | undefined
  domainId?: (string | null) | undefined
  exportable?: boolean | undefined
  exportableTo?: ('CoreML' | 'TensorFlow' | 'DockerFile' | 'ONNX' | 'VAIDK')[] | undefined
  id?: string | undefined
  lastModified?: string | undefined
  name: string
  originalPublishResourceId?: string | undefined
  projectId?: string | undefined
  publishName?: string | undefined
  reservedBudgetInHours?: number | undefined
  status?: string | undefined
  trainedAt?: (string | null) | undefined
  trainingTimeInMinutes?: number | undefined
  trainingType?: 'Regular' | 'Advanced' | undefined
}
type Export = {
  downloadUri?: string | undefined
  flavor?:
    | 'Linux'
    | 'Windows'
    | 'ONNX10'
    | 'ONNX12'
    | 'ARM'
    | 'TensorFlowNormal'
    | 'TensorFlowLite'
    | undefined
  newerVersionAvailable?: boolean | undefined
  platform?: 'CoreML' | 'TensorFlow' | 'DockerFile' | 'ONNX' | 'VAIDK' | undefined
  status?: 'Exporting' | 'Failed' | 'Done' | undefined
}
type TagPerformance = {
  averagePrecision?: (number | null) | undefined
  id?: string | undefined
  name?: string | undefined
  precision?: number | undefined
  precisionStdDeviation?: number | undefined
  recall?: number | undefined
  recallStdDeviation?: number | undefined
}
type IterationPerformance = {
  averagePrecision?: (number | null) | undefined
  perTagPerformance?: TagPerformance[] | undefined
  precision?: number | undefined
  precisionStdDeviation?: number | undefined
  recall?: number | undefined
  recallStdDeviation?: number | undefined
}
type ImagePerformance = {
  created?: string | undefined
  height?: number | undefined
  id?: string | undefined
  imageUri?: string | undefined
  predictions?: (Prediction[] | null) | undefined
  regions?: (ImageRegion[] | null) | undefined
  tags?: (ImageTag[] | null) | undefined
  thumbnailUri?: string | undefined
  width?: number | undefined
}
type PredictionQueryTag = {
  id?: string | undefined
  maxThreshold?: number | undefined
  minThreshold?: number | undefined
}
type PredictionQueryToken = {
  application?: string | undefined
  continuation?: string | undefined
  endTime?: (string | null) | undefined
  iterationId?: (string | null) | undefined
  maxCount?: number | undefined
  orderBy?: 'Newest' | 'Oldest' | 'Suggested' | undefined
  session?: string | undefined
  startTime?: (string | null) | undefined
  tags?: PredictionQueryTag[] | undefined
}
type StoredImagePrediction = {
  created?: string | undefined
  domain?: string | undefined
  id?: string | undefined
  iteration?: string | undefined
  originalImageUri?: string | undefined
  predictions?: Prediction[] | undefined
  project?: string | undefined
  resizedImageUri?: string | undefined
  thumbnailUri?: string | undefined
}
type PredictionQueryResult = {
  results?: StoredImagePrediction[] | undefined
  token?: PredictionQueryToken | undefined
}
type ImagePrediction = {
  created?: string | undefined
  id?: string | undefined
  iteration?: string | undefined
  predictions?: Prediction[] | undefined
  project?: string | undefined
}
type ImageUrl = { url: string }
type Tag = {
  description: string | null
  id?: string | undefined
  imageCount?: number | undefined
  name: string
  type: 'Regular' | 'Negative'
}
type SuggestedTagAndRegion = {
  created?: string | undefined
  id?: string | undefined
  iteration?: string | undefined
  predictionUncertainty?: number | undefined
  predictions?: Prediction[] | undefined
  project?: string | undefined
}
type TrainingParameters = { selectedTags?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/domains': {
      $get:
        | { input: {}; output: Domain[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Domain[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: Domain[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: CustomVisionError; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CustomVisionError; outputFormat: 'text'; status: 200 }
        | { input: {}; output: CustomVisionError; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/domains/:domainId': {
      $get:
        | {
            input: { param: { domainId: string } }
            output: Domain
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainId: string } }
            output: Domain
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { domainId: string } }
            output: Domain
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { domainId: string } }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainId: string } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { domainId: string } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects': {
      $get:
        | { input: {}; output: Project[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Project[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: Project[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: CustomVisionError; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CustomVisionError; outputFormat: 'text'; status: 200 }
        | { input: {}; output: CustomVisionError; outputFormat: 'text'; status: 200 }
      $post:
        | {
            input: {
              query: {
                name: string
                description?: string | undefined
                domainId?: string | undefined
                classificationType?: 'Multiclass' | 'Multilabel' | undefined
                targetExportPlatforms?:
                  | ('CoreML' | 'TensorFlow' | 'DockerFile' | 'ONNX' | 'VAIDK')[]
                  | undefined
              }
            }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name: string
                description?: string | undefined
                domainId?: string | undefined
                classificationType?: 'Multiclass' | 'Multilabel' | undefined
                targetExportPlatforms?:
                  | ('CoreML' | 'TensorFlow' | 'DockerFile' | 'ONNX' | 'VAIDK')[]
                  | undefined
              }
            }
            output: Project
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                name: string
                description?: string | undefined
                domainId?: string | undefined
                classificationType?: 'Multiclass' | 'Multilabel' | undefined
                targetExportPlatforms?:
                  | ('CoreML' | 'TensorFlow' | 'DockerFile' | 'ONNX' | 'VAIDK')[]
                  | undefined
              }
            }
            output: Project
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                name: string
                description?: string | undefined
                domainId?: string | undefined
                classificationType?: 'Multiclass' | 'Multilabel' | undefined
                targetExportPlatforms?:
                  | ('CoreML' | 'TensorFlow' | 'DockerFile' | 'ONNX' | 'VAIDK')[]
                  | undefined
              }
            }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name: string
                description?: string | undefined
                domainId?: string | undefined
                classificationType?: 'Multiclass' | 'Multilabel' | undefined
                targetExportPlatforms?:
                  | ('CoreML' | 'TensorFlow' | 'DockerFile' | 'ONNX' | 'VAIDK')[]
                  | undefined
              }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                name: string
                description?: string | undefined
                domainId?: string | undefined
                classificationType?: 'Multiclass' | 'Multilabel' | undefined
                targetExportPlatforms?:
                  | ('CoreML' | 'TensorFlow' | 'DockerFile' | 'ONNX' | 'VAIDK')[]
                  | undefined
              }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/import': {
      $post:
        | {
            input: { query: { token: string } }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { token: string } }
            output: Project
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { token: string } }
            output: Project
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { token: string } }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { token: string } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { token: string } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId': {
      $delete:
        | { input: { param: { projectId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { projectId: string } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { projectId: string } }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: Project
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: Project
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { projectId: string } } & { json: Project } & { form: Project }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: Project } & { form: Project }
            output: Project
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: Project } & { form: Project }
            output: Project
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: Project } & { form: Project }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: Project } & { form: Project }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: Project } & { form: Project }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/export': {
      $get:
        | {
            input: { param: { projectId: string } }
            output: ProjectExport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: ProjectExport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: ProjectExport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/images': {
      $delete:
        | {
            input: { param: { projectId: string } } & {
              query: {
                imageIds?: string[] | undefined
                allImages?: boolean | undefined
                allIterations?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                imageIds?: string[] | undefined
                allImages?: boolean | undefined
                allIterations?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                imageIds?: string[] | undefined
                allImages?: boolean | undefined
                allIterations?: boolean | undefined
              }
            }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                imageIds?: string[] | undefined
                allImages?: boolean | undefined
                allIterations?: boolean | undefined
              }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                imageIds?: string[] | undefined
                allImages?: boolean | undefined
                allIterations?: boolean | undefined
              }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { projectId: string } } & {
              query: { tagIds?: string[] | undefined }
            } & { form: { imageData: File } }
            output: ImageCreateSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { tagIds?: string[] | undefined }
            } & { form: { imageData: File } }
            output: ImageCreateSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { tagIds?: string[] | undefined }
            } & { form: { imageData: File } }
            output: ImageCreateSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { tagIds?: string[] | undefined }
            } & { form: { imageData: File } }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { tagIds?: string[] | undefined }
            } & { form: { imageData: File } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { tagIds?: string[] | undefined }
            } & { form: { imageData: File } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/images/files': {
      $post:
        | {
            input: { param: { projectId: string } } & { json: ImageFileCreateBatch } & {
              form: ImageFileCreateBatch
            }
            output: ImageCreateSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ImageFileCreateBatch } & {
              form: ImageFileCreateBatch
            }
            output: ImageCreateSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ImageFileCreateBatch } & {
              form: ImageFileCreateBatch
            }
            output: ImageCreateSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ImageFileCreateBatch } & {
              form: ImageFileCreateBatch
            }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ImageFileCreateBatch } & {
              form: ImageFileCreateBatch
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ImageFileCreateBatch } & {
              form: ImageFileCreateBatch
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/images/id': {
      $get:
        | {
            input: { param: { projectId: string } } & {
              query: { imageIds?: string[] | undefined; iterationId?: string | undefined }
            }
            output: Image[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { imageIds?: string[] | undefined; iterationId?: string | undefined }
            }
            output: Image[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { imageIds?: string[] | undefined; iterationId?: string | undefined }
            }
            output: Image[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { imageIds?: string[] | undefined; iterationId?: string | undefined }
            }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { imageIds?: string[] | undefined; iterationId?: string | undefined }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { imageIds?: string[] | undefined; iterationId?: string | undefined }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/images/predictions': {
      $post:
        | {
            input: { param: { projectId: string } } & { json: ImageIdCreateBatch } & {
              form: ImageIdCreateBatch
            }
            output: ImageCreateSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ImageIdCreateBatch } & {
              form: ImageIdCreateBatch
            }
            output: ImageCreateSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ImageIdCreateBatch } & {
              form: ImageIdCreateBatch
            }
            output: ImageCreateSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ImageIdCreateBatch } & {
              form: ImageIdCreateBatch
            }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ImageIdCreateBatch } & {
              form: ImageIdCreateBatch
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ImageIdCreateBatch } & {
              form: ImageIdCreateBatch
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/images/regions': {
      $delete:
        | {
            input: { param: { projectId: string } } & { query: { regionIds: string[] } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectId: string } } & { query: { regionIds: string[] } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { projectId: string } } & { json: ImageRegionCreateBatch } & {
              form: ImageRegionCreateBatch
            }
            output: ImageRegionCreateSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ImageRegionCreateBatch } & {
              form: ImageRegionCreateBatch
            }
            output: ImageRegionCreateSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ImageRegionCreateBatch } & {
              form: ImageRegionCreateBatch
            }
            output: ImageRegionCreateSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ImageRegionCreateBatch } & {
              form: ImageRegionCreateBatch
            }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ImageRegionCreateBatch } & {
              form: ImageRegionCreateBatch
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ImageRegionCreateBatch } & {
              form: ImageRegionCreateBatch
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/images/suggested': {
      $post:
        | {
            input: { param: { projectId: string } } & { query: { iterationId: string } } & {
              json: SuggestedTagAndRegionQueryToken
            } & { form: SuggestedTagAndRegionQueryToken }
            output: SuggestedTagAndRegionQuery
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { query: { iterationId: string } } & {
              json: SuggestedTagAndRegionQueryToken
            } & { form: SuggestedTagAndRegionQueryToken }
            output: SuggestedTagAndRegionQuery
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { query: { iterationId: string } } & {
              json: SuggestedTagAndRegionQueryToken
            } & { form: SuggestedTagAndRegionQueryToken }
            output: SuggestedTagAndRegionQuery
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { query: { iterationId: string } } & {
              json: SuggestedTagAndRegionQueryToken
            } & { form: SuggestedTagAndRegionQueryToken }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { query: { iterationId: string } } & {
              json: SuggestedTagAndRegionQueryToken
            } & { form: SuggestedTagAndRegionQueryToken }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { query: { iterationId: string } } & {
              json: SuggestedTagAndRegionQueryToken
            } & { form: SuggestedTagAndRegionQueryToken }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/images/suggested/count': {
      $post:
        | {
            input: { param: { projectId: string } } & { query: { iterationId: string } } & {
              json: TagFilter
            } & { form: TagFilter }
            output: { [x: string]: number }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { query: { iterationId: string } } & {
              json: TagFilter
            } & { form: TagFilter }
            output: { [x: string]: number }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { query: { iterationId: string } } & {
              json: TagFilter
            } & { form: TagFilter }
            output: { [x: string]: number }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { query: { iterationId: string } } & {
              json: TagFilter
            } & { form: TagFilter }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { query: { iterationId: string } } & {
              json: TagFilter
            } & { form: TagFilter }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { query: { iterationId: string } } & {
              json: TagFilter
            } & { form: TagFilter }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/images/tagged': {
      $get:
        | {
            input: { param: { projectId: string } } & {
              query: {
                iterationId?: string | undefined
                tagIds?: string[] | undefined
                orderBy?: 'Newest' | 'Oldest' | undefined
                take?: number | undefined
                skip?: number | undefined
              }
            }
            output: Image[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                iterationId?: string | undefined
                tagIds?: string[] | undefined
                orderBy?: 'Newest' | 'Oldest' | undefined
                take?: number | undefined
                skip?: number | undefined
              }
            }
            output: Image[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                iterationId?: string | undefined
                tagIds?: string[] | undefined
                orderBy?: 'Newest' | 'Oldest' | undefined
                take?: number | undefined
                skip?: number | undefined
              }
            }
            output: Image[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                iterationId?: string | undefined
                tagIds?: string[] | undefined
                orderBy?: 'Newest' | 'Oldest' | undefined
                take?: number | undefined
                skip?: number | undefined
              }
            }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                iterationId?: string | undefined
                tagIds?: string[] | undefined
                orderBy?: 'Newest' | 'Oldest' | undefined
                take?: number | undefined
                skip?: number | undefined
              }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                iterationId?: string | undefined
                tagIds?: string[] | undefined
                orderBy?: 'Newest' | 'Oldest' | undefined
                take?: number | undefined
                skip?: number | undefined
              }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/images/tagged/count': {
      $get:
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined; tagIds?: string[] | undefined }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined; tagIds?: string[] | undefined }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined; tagIds?: string[] | undefined }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined; tagIds?: string[] | undefined }
            }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined; tagIds?: string[] | undefined }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined; tagIds?: string[] | undefined }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/images/tags': {
      $delete:
        | {
            input: { param: { projectId: string } } & {
              query: { imageIds: string[]; tagIds: string[] }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectId: string } } & {
              query: { imageIds: string[]; tagIds: string[] }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { projectId: string } } & { json: ImageTagCreateBatch } & {
              form: ImageTagCreateBatch
            }
            output: ImageTagCreateSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ImageTagCreateBatch } & {
              form: ImageTagCreateBatch
            }
            output: ImageTagCreateSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ImageTagCreateBatch } & {
              form: ImageTagCreateBatch
            }
            output: ImageTagCreateSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ImageTagCreateBatch } & {
              form: ImageTagCreateBatch
            }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ImageTagCreateBatch } & {
              form: ImageTagCreateBatch
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ImageTagCreateBatch } & {
              form: ImageTagCreateBatch
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/images/untagged': {
      $get:
        | {
            input: { param: { projectId: string } } & {
              query: {
                iterationId?: string | undefined
                orderBy?: 'Newest' | 'Oldest' | undefined
                take?: number | undefined
                skip?: number | undefined
              }
            }
            output: Image[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                iterationId?: string | undefined
                orderBy?: 'Newest' | 'Oldest' | undefined
                take?: number | undefined
                skip?: number | undefined
              }
            }
            output: Image[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                iterationId?: string | undefined
                orderBy?: 'Newest' | 'Oldest' | undefined
                take?: number | undefined
                skip?: number | undefined
              }
            }
            output: Image[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                iterationId?: string | undefined
                orderBy?: 'Newest' | 'Oldest' | undefined
                take?: number | undefined
                skip?: number | undefined
              }
            }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                iterationId?: string | undefined
                orderBy?: 'Newest' | 'Oldest' | undefined
                take?: number | undefined
                skip?: number | undefined
              }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                iterationId?: string | undefined
                orderBy?: 'Newest' | 'Oldest' | undefined
                take?: number | undefined
                skip?: number | undefined
              }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/images/untagged/count': {
      $get:
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined }
            }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/images/urls': {
      $post:
        | {
            input: { param: { projectId: string } } & { json: ImageUrlCreateBatch } & {
              form: ImageUrlCreateBatch
            }
            output: ImageCreateSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ImageUrlCreateBatch } & {
              form: ImageUrlCreateBatch
            }
            output: ImageCreateSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ImageUrlCreateBatch } & {
              form: ImageUrlCreateBatch
            }
            output: ImageCreateSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ImageUrlCreateBatch } & {
              form: ImageUrlCreateBatch
            }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ImageUrlCreateBatch } & {
              form: ImageUrlCreateBatch
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ImageUrlCreateBatch } & {
              form: ImageUrlCreateBatch
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/images/:imageId/regionproposals': {
      $post:
        | {
            input: { param: { projectId: string; imageId: string } }
            output: ImageRegionProposal
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; imageId: string } }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/iterations': {
      $get:
        | {
            input: { param: { projectId: string } }
            output: Iteration[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: Iteration[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: Iteration[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/iterations/:iterationId': {
      $delete:
        | {
            input: { param: { projectId: string; iterationId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectId: string; iterationId: string } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { projectId: string; iterationId: string } }
            output: Iteration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } }
            output: Iteration
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } }
            output: Iteration
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { projectId: string; iterationId: string } } & { json: Iteration } & {
              form: Iteration
            }
            output: Iteration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & { json: Iteration } & {
              form: Iteration
            }
            output: Iteration
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & { json: Iteration } & {
              form: Iteration
            }
            output: Iteration
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & { json: Iteration } & {
              form: Iteration
            }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & { json: Iteration } & {
              form: Iteration
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & { json: Iteration } & {
              form: Iteration
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/iterations/:iterationId/export': {
      $get:
        | {
            input: { param: { projectId: string; iterationId: string } }
            output: Export[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } }
            output: Export[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } }
            output: Export[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: {
                platform: 'CoreML' | 'TensorFlow' | 'DockerFile' | 'ONNX' | 'VAIDK'
                flavor?:
                  | 'Linux'
                  | 'Windows'
                  | 'ONNX10'
                  | 'ONNX12'
                  | 'ARM'
                  | 'TensorFlowNormal'
                  | 'TensorFlowLite'
                  | undefined
              }
            }
            output: Export
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: {
                platform: 'CoreML' | 'TensorFlow' | 'DockerFile' | 'ONNX' | 'VAIDK'
                flavor?:
                  | 'Linux'
                  | 'Windows'
                  | 'ONNX10'
                  | 'ONNX12'
                  | 'ARM'
                  | 'TensorFlowNormal'
                  | 'TensorFlowLite'
                  | undefined
              }
            }
            output: Export
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: {
                platform: 'CoreML' | 'TensorFlow' | 'DockerFile' | 'ONNX' | 'VAIDK'
                flavor?:
                  | 'Linux'
                  | 'Windows'
                  | 'ONNX10'
                  | 'ONNX12'
                  | 'ARM'
                  | 'TensorFlowNormal'
                  | 'TensorFlowLite'
                  | undefined
              }
            }
            output: Export
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: {
                platform: 'CoreML' | 'TensorFlow' | 'DockerFile' | 'ONNX' | 'VAIDK'
                flavor?:
                  | 'Linux'
                  | 'Windows'
                  | 'ONNX10'
                  | 'ONNX12'
                  | 'ARM'
                  | 'TensorFlowNormal'
                  | 'TensorFlowLite'
                  | undefined
              }
            }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: {
                platform: 'CoreML' | 'TensorFlow' | 'DockerFile' | 'ONNX' | 'VAIDK'
                flavor?:
                  | 'Linux'
                  | 'Windows'
                  | 'ONNX10'
                  | 'ONNX12'
                  | 'ARM'
                  | 'TensorFlowNormal'
                  | 'TensorFlowLite'
                  | undefined
              }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: {
                platform: 'CoreML' | 'TensorFlow' | 'DockerFile' | 'ONNX' | 'VAIDK'
                flavor?:
                  | 'Linux'
                  | 'Windows'
                  | 'ONNX10'
                  | 'ONNX12'
                  | 'ARM'
                  | 'TensorFlowNormal'
                  | 'TensorFlowLite'
                  | undefined
              }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/iterations/:iterationId/performance': {
      $get:
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: { threshold?: number | undefined; overlapThreshold?: number | undefined }
            }
            output: IterationPerformance
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: { threshold?: number | undefined; overlapThreshold?: number | undefined }
            }
            output: IterationPerformance
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: { threshold?: number | undefined; overlapThreshold?: number | undefined }
            }
            output: IterationPerformance
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: { threshold?: number | undefined; overlapThreshold?: number | undefined }
            }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: { threshold?: number | undefined; overlapThreshold?: number | undefined }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: { threshold?: number | undefined; overlapThreshold?: number | undefined }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/iterations/:iterationId/performance/images': {
      $get:
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: {
                tagIds?: string[] | undefined
                orderBy?: 'Newest' | 'Oldest' | undefined
                take?: number | undefined
                skip?: number | undefined
              }
            }
            output: ImagePerformance[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: {
                tagIds?: string[] | undefined
                orderBy?: 'Newest' | 'Oldest' | undefined
                take?: number | undefined
                skip?: number | undefined
              }
            }
            output: ImagePerformance[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: {
                tagIds?: string[] | undefined
                orderBy?: 'Newest' | 'Oldest' | undefined
                take?: number | undefined
                skip?: number | undefined
              }
            }
            output: ImagePerformance[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: {
                tagIds?: string[] | undefined
                orderBy?: 'Newest' | 'Oldest' | undefined
                take?: number | undefined
                skip?: number | undefined
              }
            }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: {
                tagIds?: string[] | undefined
                orderBy?: 'Newest' | 'Oldest' | undefined
                take?: number | undefined
                skip?: number | undefined
              }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: {
                tagIds?: string[] | undefined
                orderBy?: 'Newest' | 'Oldest' | undefined
                take?: number | undefined
                skip?: number | undefined
              }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/iterations/:iterationId/performance/images/count': {
      $get:
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: { tagIds?: string[] | undefined }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: { tagIds?: string[] | undefined }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: { tagIds?: string[] | undefined }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: { tagIds?: string[] | undefined }
            }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: { tagIds?: string[] | undefined }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: { tagIds?: string[] | undefined }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/iterations/:iterationId/publish': {
      $delete:
        | {
            input: { param: { projectId: string; iterationId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectId: string; iterationId: string } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: { publishName: string; predictionId: string }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: { publishName: string; predictionId: string }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: { publishName: string; predictionId: string }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: { publishName: string; predictionId: string }
            }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: { publishName: string; predictionId: string }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; iterationId: string } } & {
              query: { publishName: string; predictionId: string }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/predictions': {
      $delete:
        | {
            input: { param: { projectId: string } } & { query: { ids: string[] } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectId: string } } & { query: { ids: string[] } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/predictions/query': {
      $post:
        | {
            input: { param: { projectId: string } } & { json: PredictionQueryToken } & {
              form: PredictionQueryToken
            }
            output: PredictionQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: PredictionQueryToken } & {
              form: PredictionQueryToken
            }
            output: PredictionQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: PredictionQueryToken } & {
              form: PredictionQueryToken
            }
            output: PredictionQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: PredictionQueryToken } & {
              form: PredictionQueryToken
            }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: PredictionQueryToken } & {
              form: PredictionQueryToken
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: PredictionQueryToken } & {
              form: PredictionQueryToken
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/quicktest/image': {
      $post:
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined; store?: boolean | undefined }
            } & { form: { imageData: File } }
            output: ImagePrediction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined; store?: boolean | undefined }
            } & { form: { imageData: File } }
            output: ImagePrediction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined; store?: boolean | undefined }
            } & { form: { imageData: File } }
            output: ImagePrediction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined; store?: boolean | undefined }
            } & { form: { imageData: File } }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined; store?: boolean | undefined }
            } & { form: { imageData: File } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined; store?: boolean | undefined }
            } & { form: { imageData: File } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/quicktest/url': {
      $post:
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined; store?: boolean | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: ImagePrediction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined; store?: boolean | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: ImagePrediction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined; store?: boolean | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: ImagePrediction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined; store?: boolean | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined; store?: boolean | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined; store?: boolean | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/tags': {
      $get:
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined }
            }
            output: Tag[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined }
            }
            output: Tag[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined }
            }
            output: Tag[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined }
            }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId?: string | undefined }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { projectId: string } } & {
              query: {
                name: string
                description?: string | undefined
                type?: 'Regular' | 'Negative' | undefined
              }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                name: string
                description?: string | undefined
                type?: 'Regular' | 'Negative' | undefined
              }
            }
            output: Tag
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                name: string
                description?: string | undefined
                type?: 'Regular' | 'Negative' | undefined
              }
            }
            output: Tag
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                name: string
                description?: string | undefined
                type?: 'Regular' | 'Negative' | undefined
              }
            }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                name: string
                description?: string | undefined
                type?: 'Regular' | 'Negative' | undefined
              }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                name: string
                description?: string | undefined
                type?: 'Regular' | 'Negative' | undefined
              }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/tags/:tagId': {
      $delete:
        | {
            input: { param: { projectId: string; tagId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectId: string; tagId: string } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { projectId: string; tagId: string } } & {
              query: { iterationId?: string | undefined }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; tagId: string } } & {
              query: { iterationId?: string | undefined }
            }
            output: Tag
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; tagId: string } } & {
              query: { iterationId?: string | undefined }
            }
            output: Tag
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; tagId: string } } & {
              query: { iterationId?: string | undefined }
            }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; tagId: string } } & {
              query: { iterationId?: string | undefined }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; tagId: string } } & {
              query: { iterationId?: string | undefined }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { projectId: string; tagId: string } } & { json: Tag } & { form: Tag }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; tagId: string } } & { json: Tag } & { form: Tag }
            output: Tag
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; tagId: string } } & { json: Tag } & { form: Tag }
            output: Tag
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; tagId: string } } & { json: Tag } & { form: Tag }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; tagId: string } } & { json: Tag } & { form: Tag }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; tagId: string } } & { json: Tag } & { form: Tag }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/tagsandregions/suggestions': {
      $post:
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId: string; imageIds: string[] }
            }
            output: SuggestedTagAndRegion[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId: string; imageIds: string[] }
            }
            output: SuggestedTagAndRegion[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId: string; imageIds: string[] }
            }
            output: SuggestedTagAndRegion[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId: string; imageIds: string[] }
            }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId: string; imageIds: string[] }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { iterationId: string; imageIds: string[] }
            }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/train': {
      $post:
        | {
            input: { param: { projectId: string } } & {
              query: {
                trainingType?: 'Regular' | 'Advanced' | undefined
                reservedBudgetInHours?: number | undefined
                forceTrain?: boolean | undefined
                notificationEmailAddress?: string | undefined
              }
            } & { json: TrainingParameters } & { form: TrainingParameters }
            output: Iteration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                trainingType?: 'Regular' | 'Advanced' | undefined
                reservedBudgetInHours?: number | undefined
                forceTrain?: boolean | undefined
                notificationEmailAddress?: string | undefined
              }
            } & { json: TrainingParameters } & { form: TrainingParameters }
            output: Iteration
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                trainingType?: 'Regular' | 'Advanced' | undefined
                reservedBudgetInHours?: number | undefined
                forceTrain?: boolean | undefined
                notificationEmailAddress?: string | undefined
              }
            } & { json: TrainingParameters } & { form: TrainingParameters }
            output: Iteration
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                trainingType?: 'Regular' | 'Advanced' | undefined
                reservedBudgetInHours?: number | undefined
                forceTrain?: boolean | undefined
                notificationEmailAddress?: string | undefined
              }
            } & { json: TrainingParameters } & { form: TrainingParameters }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                trainingType?: 'Regular' | 'Advanced' | undefined
                reservedBudgetInHours?: number | undefined
                forceTrain?: boolean | undefined
                notificationEmailAddress?: string | undefined
              }
            } & { json: TrainingParameters } & { form: TrainingParameters }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                trainingType?: 'Regular' | 'Advanced' | undefined
                reservedBudgetInHours?: number | undefined
                forceTrain?: boolean | undefined
                notificationEmailAddress?: string | undefined
              }
            } & { json: TrainingParameters } & { form: TrainingParameters }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
