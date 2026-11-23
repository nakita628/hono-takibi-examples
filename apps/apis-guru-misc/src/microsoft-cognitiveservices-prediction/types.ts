type BoundingBox = { height: number; left: number; top: number; width: number }
type Prediction = {
  boundingBox?: BoundingBox | undefined
  probability?: number | undefined
  tagId?: string | undefined
  tagName?: (string | null) | undefined
}
type ImagePrediction = {
  created?: string | undefined
  id?: string | undefined
  iteration?: string | undefined
  predictions?: Prediction[] | undefined
  project?: string | undefined
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
    | 'BadRequestIterationName'
    | 'BadRequestIterationNameNotUnique'
    | 'BadRequestIterationDescription'
    | 'BadRequestIterationIsNotTrained'
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
    | 'ErrorProjectInvalidWorkspace'
    | 'ErrorProjectInvalidPipelineConfiguration'
    | 'ErrorProjectInvalidDomain'
    | 'ErrorProjectTrainingRequestFailed'
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
type ImageUrl = { url: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:projectId/classify/iterations/:publishedName/image': {
      $post:
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { form: { imageData: File } }
            output: ImagePrediction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { form: { imageData: File } }
            output: ImagePrediction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { form: { imageData: File } }
            output: ImagePrediction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { form: { imageData: File } }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { form: { imageData: File } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { form: { imageData: File } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:projectId/classify/iterations/:publishedName/image/nostore': {
      $post:
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { form: { imageData: File } }
            output: ImagePrediction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { form: { imageData: File } }
            output: ImagePrediction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { form: { imageData: File } }
            output: ImagePrediction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { form: { imageData: File } }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { form: { imageData: File } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { form: { imageData: File } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:projectId/classify/iterations/:publishedName/url': {
      $post:
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: ImagePrediction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: ImagePrediction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: ImagePrediction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:projectId/classify/iterations/:publishedName/url/nostore': {
      $post:
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: ImagePrediction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: ImagePrediction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: ImagePrediction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:projectId/detect/iterations/:publishedName/image': {
      $post:
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { form: { imageData: File } }
            output: ImagePrediction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { form: { imageData: File } }
            output: ImagePrediction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { form: { imageData: File } }
            output: ImagePrediction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { form: { imageData: File } }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { form: { imageData: File } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { form: { imageData: File } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:projectId/detect/iterations/:publishedName/image/nostore': {
      $post:
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { form: { imageData: File } }
            output: ImagePrediction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { form: { imageData: File } }
            output: ImagePrediction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { form: { imageData: File } }
            output: ImagePrediction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { form: { imageData: File } }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { form: { imageData: File } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { form: { imageData: File } }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:projectId/detect/iterations/:publishedName/url': {
      $post:
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: ImagePrediction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: ImagePrediction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: ImagePrediction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:projectId/detect/iterations/:publishedName/url/nostore': {
      $post:
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: ImagePrediction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: ImagePrediction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: ImagePrediction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: CustomVisionError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: string; publishedName: string } } & {
              query: { application?: string | undefined }
            } & { json: ImageUrl } & { form: ImageUrl }
            output: CustomVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
