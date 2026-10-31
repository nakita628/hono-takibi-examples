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
        'BadRequestIterationName',
        'BadRequestIterationNameNotUnique',
        'BadRequestIterationDescription',
        'BadRequestIterationIsNotTrained',
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
        'ErrorProjectInvalidWorkspace',
        'ErrorProjectInvalidPipelineConfiguration',
        'ErrorProjectInvalidDomain',
        'ErrorProjectTrainingRequestFailed',
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

const ImageUrlSchema = z
  .object({ url: z.string().openapi({ description: 'Url of the image.', readOnly: false }) })
  .openapi({ description: 'Image url.', required: ['url'] })
  .openapi('ImageUrl')

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

const SuccessfulClassifyImageUrlWithNoStoreRequestExample = {
  value: {
    created: '2019-03-06T02:15:00Z',
    id: '951098b2-9b69-427b-bddb-d5cb618874e3',
    iteration: 'fe1e83c4-6f50-4899-9544-6bb08cf0e15a',
    predictions: [
      {
        probability: 0.05149666,
        tagId: 'e31ff107-5505-4753-be42-b369b21b026c',
        tagName: 'Hemlock',
      },
      {
        probability: 0.000193528482,
        tagId: '349d72ac-0948-4d51-b1e4-c14a1f9b848a',
        tagName: 'Japanese Cherry',
      },
    ],
    project: '64b822c5-8082-4b36-a426-27225f4aa18c',
  },
}

const SuccessfulClassifyImageUrlRequestExample = {
  value: {
    created: '2019-03-06T02:15:00Z',
    id: '951098b2-9b69-427b-bddb-d5cb618874e3',
    iteration: 'fe1e83c4-6f50-4899-9544-6bb08cf0e15a',
    predictions: [
      {
        probability: 0.05149666,
        tagId: 'e31ff107-5505-4753-be42-b369b21b026c',
        tagName: 'Hemlock',
      },
      {
        probability: 0.000193528482,
        tagId: '349d72ac-0948-4d51-b1e4-c14a1f9b848a',
        tagName: 'Japanese Cherry',
      },
    ],
    project: '64b822c5-8082-4b36-a426-27225f4aa18c',
  },
}

const SuccessfulClassifyImageWithNoStoreRequestExample = {
  value: {
    created: '2019-03-06T02:15:00Z',
    id: '951098b2-9b69-427b-bddb-d5cb618874e3',
    iteration: 'fe1e83c4-6f50-4899-9544-6bb08cf0e15a',
    predictions: [
      {
        probability: 0.05149666,
        tagId: 'e31ff107-5505-4753-be42-b369b21b026c',
        tagName: 'Hemlock',
      },
      {
        probability: 0.000193528482,
        tagId: '349d72ac-0948-4d51-b1e4-c14a1f9b848a',
        tagName: 'Japanese Cherry',
      },
    ],
    project: '64b822c5-8082-4b36-a426-27225f4aa18c',
  },
}

const SuccessfulClassifyImageRequestExample = {
  value: {
    created: '2019-03-06T02:15:00Z',
    id: '951098b2-9b69-427b-bddb-d5cb618874e3',
    iteration: 'fe1e83c4-6f50-4899-9544-6bb08cf0e15a',
    predictions: [
      {
        probability: 0.05149666,
        tagId: 'e31ff107-5505-4753-be42-b369b21b026c',
        tagName: 'Hemlock',
      },
      {
        probability: 0.000193528482,
        tagId: '349d72ac-0948-4d51-b1e4-c14a1f9b848a',
        tagName: 'Japanese Cherry',
      },
    ],
    project: '64b822c5-8082-4b36-a426-27225f4aa18c',
  },
}

const SuccessfulDetectImageUrlWithNoStoreRequestExample = {
  value: {
    created: '2019-03-10T06:10:28Z',
    id: '64615ba1-b53f-e911-b05b-f8633f7a2ef1',
    iteration: '45c79472-7198-46e1-8ed7-bad2ca111957',
    predictions: [
      {
        boundingBox: { height: 0.156851858, left: 0.955476165, top: 0, width: 0.0412225723 },
        probability: 0.05149666,
        tagId: '7e703b80-3c7a-4c3c-bf48-9673c6891a75',
        tagName: 'Tag 1',
      },
      {
        boundingBox: { height: 0.6830492, left: 0.062178582, top: 0, width: 0.9378114 },
        probability: 0.000193528482,
        tagId: 'a0d06a54-18e4-4787-a9f9-27a9c13a91e8',
        tagName: 'Tag 2',
      },
    ],
    project: 'fb5bc587-b53f-e911-b05b-f8633f7a2ef1',
  },
}

const SuccessfulDetectImageUrlRequestExample = {
  value: {
    created: '2019-03-10T06:10:28Z',
    id: '64615ba1-b53f-e911-b05b-f8633f7a2ef1',
    iteration: '45c79472-7198-46e1-8ed7-bad2ca111957',
    predictions: [
      {
        boundingBox: { height: 0.156851858, left: 0.955476165, top: 0, width: 0.0412225723 },
        probability: 0.05149666,
        tagId: '7e703b80-3c7a-4c3c-bf48-9673c6891a75',
        tagName: 'Tag 1',
      },
      {
        boundingBox: { height: 0.6830492, left: 0.062178582, top: 0, width: 0.9378114 },
        probability: 0.000193528482,
        tagId: 'a0d06a54-18e4-4787-a9f9-27a9c13a91e8',
        tagName: 'Tag 2',
      },
    ],
    project: 'fb5bc587-b53f-e911-b05b-f8633f7a2ef1',
  },
}

const SuccessfulDetectImageWithNoStoreRequestExample = {
  value: {
    created: '2019-03-10T06:10:28Z',
    id: '64615ba1-b53f-e911-b05b-f8633f7a2ef1',
    iteration: '45c79472-7198-46e1-8ed7-bad2ca111957',
    predictions: [
      {
        boundingBox: { height: 0.156851858, left: 0.955476165, top: 0, width: 0.0412225723 },
        probability: 0.05149666,
        tagId: '7e703b80-3c7a-4c3c-bf48-9673c6891a75',
        tagName: 'Tag 1',
      },
      {
        boundingBox: { height: 0.6830492, left: 0.062178582, top: 0, width: 0.9378114 },
        probability: 0.000193528482,
        tagId: 'a0d06a54-18e4-4787-a9f9-27a9c13a91e8',
        tagName: 'Tag 2',
      },
    ],
    project: 'fb5bc587-b53f-e911-b05b-f8633f7a2ef1',
  },
}

const SuccessfulDetectImageRequestExample = {
  value: {
    created: '2019-03-10T06:10:28Z',
    id: '64615ba1-b53f-e911-b05b-f8633f7a2ef1',
    iteration: '45c79472-7198-46e1-8ed7-bad2ca111957',
    predictions: [
      {
        boundingBox: { height: 0.156851858, left: 0.955476165, top: 0, width: 0.0412225723 },
        probability: 0.05149666,
        tagId: '7e703b80-3c7a-4c3c-bf48-9673c6891a75',
        tagName: 'Tag 1',
      },
      {
        boundingBox: { height: 0.6830492, left: 0.062178582, top: 0, width: 0.9378114 },
        probability: 0.000193528482,
        tagId: 'a0d06a54-18e4-4787-a9f9-27a9c13a91e8',
        tagName: 'Tag 2',
      },
    ],
    project: 'fb5bc587-b53f-e911-b05b-f8633f7a2ef1',
  },
}

const ClassifyImageRequestBody = {
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
                'Binary image data. Supported formats are JPEG, GIF, PNG, and BMP. Supports images up to 4MB.',
            }),
        })
        .openapi({ required: ['imageData'] }),
    },
  },
  required: true,
}

const ClassifyImageWithNoStoreRequestBody = {
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
                'Binary image data. Supported formats are JPEG, GIF, PNG, and BMP. Supports images up to 0MB.',
            }),
        })
        .openapi({ required: ['imageData'] }),
    },
  },
  required: true,
}

const ImageUrlRequestBody = {
  description:
    'An {Iris.Web.Api.Models.ImageUrl} that contains the url of the image to be evaluated.',
  content: {
    'application/json': { schema: ImageUrlSchema },
    'application/x-www-form-urlencoded': { schema: ImageUrlSchema },
    'application/xml': { schema: ImageUrlSchema },
    'text/xml': { schema: ImageUrlSchema },
  },
  required: true,
}

const ImageUrl2RequestBody = {
  description: 'An ImageUrl that contains the url of the image to be evaluated.',
  content: {
    'application/json': { schema: ImageUrlSchema },
    'application/x-www-form-urlencoded': { schema: ImageUrlSchema },
    'application/xml': { schema: ImageUrlSchema },
    'text/xml': { schema: ImageUrlSchema },
  },
  required: true,
}

const ApimKeySecurityScheme = { in: 'header', name: 'Prediction-Key', type: 'apiKey' }

export const postProjectIdClassifyIterationsPublishedNameImageRoute = createRoute({
  method: 'post',
  path: '/{projectId}/classify/iterations/{publishedName}/image',
  tags: ['ImagePredictionApi'],
  summary: 'Classify an image and saves the result.',
  operationId: 'ClassifyImage',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful ClassifyImage request': { value: '64b822c5-8082-4b36-a426-27225f4aa18c' },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
      publishedName: z
        .string()
        .openapi({
          param: {
            description: 'Specifies the name of the model to evaluate against.',
            examples: { 'Successful ClassifyImage request': { value: 'MyModel1' } },
            in: 'path',
            name: 'publishedName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      application: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Specifies the name of application using the endpoint.',
            in: 'query',
            name: 'application',
            required: false,
            schema: { type: 'string' },
            'x-nullable': true,
          },
        }),
    }),
    body: ClassifyImageRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ImagePredictionSchema,
          examples: { 'Successful ClassifyImage request': SuccessfulClassifyImageRequestExample },
        },
        'application/xml': {
          schema: ImagePredictionSchema,
          examples: { 'Successful ClassifyImage request': SuccessfulClassifyImageRequestExample },
        },
        'text/xml': {
          schema: ImagePredictionSchema,
          examples: { 'Successful ClassifyImage request': SuccessfulClassifyImageRequestExample },
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

export const postProjectIdClassifyIterationsPublishedNameImageNostoreRoute = createRoute({
  method: 'post',
  path: '/{projectId}/classify/iterations/{publishedName}/image/nostore',
  tags: ['ImagePredictionApi'],
  summary: 'Classify an image without saving the result.',
  operationId: 'ClassifyImageWithNoStore',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful ClassifyImageWithNoStore request': {
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
      publishedName: z
        .string()
        .openapi({
          param: {
            description: 'Specifies the name of the model to evaluate against.',
            examples: { 'Successful ClassifyImageWithNoStore request': { value: 'MyModel1' } },
            in: 'path',
            name: 'publishedName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      application: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Specifies the name of application using the endpoint.',
            in: 'query',
            name: 'application',
            required: false,
            schema: { type: 'string' },
            'x-nullable': true,
          },
        }),
    }),
    body: ClassifyImageWithNoStoreRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ImagePredictionSchema,
          examples: {
            'Successful ClassifyImageWithNoStore request':
              SuccessfulClassifyImageWithNoStoreRequestExample,
          },
        },
        'application/xml': {
          schema: ImagePredictionSchema,
          examples: {
            'Successful ClassifyImageWithNoStore request':
              SuccessfulClassifyImageWithNoStoreRequestExample,
          },
        },
        'text/xml': {
          schema: ImagePredictionSchema,
          examples: {
            'Successful ClassifyImageWithNoStore request':
              SuccessfulClassifyImageWithNoStoreRequestExample,
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

export const postProjectIdClassifyIterationsPublishedNameUrlRoute = createRoute({
  method: 'post',
  path: '/{projectId}/classify/iterations/{publishedName}/url',
  tags: ['ImagePredictionApi'],
  summary: 'Classify an image url and saves the result.',
  operationId: 'ClassifyImageUrl',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful ClassifyImageUrl request': {
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
      publishedName: z
        .string()
        .openapi({
          param: {
            description: 'Specifies the name of the model to evaluate against.',
            examples: { 'Successful ClassifyImageUrl request': { value: 'MyModel1' } },
            in: 'path',
            name: 'publishedName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      application: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Specifies the name of application using the endpoint.',
            in: 'query',
            name: 'application',
            required: false,
            schema: { type: 'string' },
            'x-nullable': true,
          },
        }),
    }),
    body: ImageUrl2RequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ImagePredictionSchema,
          examples: {
            'Successful ClassifyImageUrl request': SuccessfulClassifyImageUrlRequestExample,
          },
        },
        'application/xml': {
          schema: ImagePredictionSchema,
          examples: {
            'Successful ClassifyImageUrl request': SuccessfulClassifyImageUrlRequestExample,
          },
        },
        'text/xml': {
          schema: ImagePredictionSchema,
          examples: {
            'Successful ClassifyImageUrl request': SuccessfulClassifyImageUrlRequestExample,
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

export const postProjectIdClassifyIterationsPublishedNameUrlNostoreRoute = createRoute({
  method: 'post',
  path: '/{projectId}/classify/iterations/{publishedName}/url/nostore',
  tags: ['ImagePredictionApi'],
  summary: 'Classify an image url without saving the result.',
  operationId: 'ClassifyImageUrlWithNoStore',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful ClassifyImageUrlWithNoStore request': {
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
      publishedName: z
        .string()
        .openapi({
          param: {
            description: 'Specifies the name of the model to evaluate against.',
            examples: { 'Successful ClassifyImageUrlWithNoStore request': { value: 'MyModel1' } },
            in: 'path',
            name: 'publishedName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      application: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Specifies the name of application using the endpoint.',
            in: 'query',
            name: 'application',
            required: false,
            schema: { type: 'string' },
            'x-nullable': true,
          },
        }),
    }),
    body: ImageUrlRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ImagePredictionSchema,
          examples: {
            'Successful ClassifyImageUrlWithNoStore request':
              SuccessfulClassifyImageUrlWithNoStoreRequestExample,
          },
        },
        'application/xml': {
          schema: ImagePredictionSchema,
          examples: {
            'Successful ClassifyImageUrlWithNoStore request':
              SuccessfulClassifyImageUrlWithNoStoreRequestExample,
          },
        },
        'text/xml': {
          schema: ImagePredictionSchema,
          examples: {
            'Successful ClassifyImageUrlWithNoStore request':
              SuccessfulClassifyImageUrlWithNoStoreRequestExample,
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

export const postProjectIdDetectIterationsPublishedNameImageRoute = createRoute({
  method: 'post',
  path: '/{projectId}/detect/iterations/{publishedName}/image',
  tags: ['ImagePredictionApi'],
  summary: 'Detect objects in an image and saves the result.',
  operationId: 'DetectImage',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful DetectImage request': { value: '64b822c5-8082-4b36-a426-27225f4aa18c' },
            },
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-nullable': false,
          },
        }),
      publishedName: z
        .string()
        .openapi({
          param: {
            description: 'Specifies the name of the model to evaluate against.',
            examples: { 'Successful DetectImage request': { value: 'MyModel1' } },
            in: 'path',
            name: 'publishedName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      application: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Specifies the name of application using the endpoint.',
            in: 'query',
            name: 'application',
            required: false,
            schema: { type: 'string' },
            'x-nullable': true,
          },
        }),
    }),
    body: ClassifyImageRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ImagePredictionSchema,
          examples: { 'Successful DetectImage request': SuccessfulDetectImageRequestExample },
        },
        'application/xml': {
          schema: ImagePredictionSchema,
          examples: { 'Successful DetectImage request': SuccessfulDetectImageRequestExample },
        },
        'text/xml': {
          schema: ImagePredictionSchema,
          examples: { 'Successful DetectImage request': SuccessfulDetectImageRequestExample },
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

export const postProjectIdDetectIterationsPublishedNameImageNostoreRoute = createRoute({
  method: 'post',
  path: '/{projectId}/detect/iterations/{publishedName}/image/nostore',
  tags: ['ImagePredictionApi'],
  summary: 'Detect objects in an image without saving the result.',
  operationId: 'DetectImageWithNoStore',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful DetectImageWithNoStore request': {
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
      publishedName: z
        .string()
        .openapi({
          param: {
            description: 'Specifies the name of the model to evaluate against.',
            examples: { 'Successful DetectImageWithNoStore request': { value: 'MyModel1' } },
            in: 'path',
            name: 'publishedName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      application: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Specifies the name of application using the endpoint.',
            in: 'query',
            name: 'application',
            required: false,
            schema: { type: 'string' },
            'x-nullable': true,
          },
        }),
    }),
    body: ClassifyImageWithNoStoreRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ImagePredictionSchema,
          examples: {
            'Successful DetectImageWithNoStore request':
              SuccessfulDetectImageWithNoStoreRequestExample,
          },
        },
        'application/xml': {
          schema: ImagePredictionSchema,
          examples: {
            'Successful DetectImageWithNoStore request':
              SuccessfulDetectImageWithNoStoreRequestExample,
          },
        },
        'text/xml': {
          schema: ImagePredictionSchema,
          examples: {
            'Successful DetectImageWithNoStore request':
              SuccessfulDetectImageWithNoStoreRequestExample,
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

export const postProjectIdDetectIterationsPublishedNameUrlRoute = createRoute({
  method: 'post',
  path: '/{projectId}/detect/iterations/{publishedName}/url',
  tags: ['ImagePredictionApi'],
  summary: 'Detect objects in an image url and saves the result.',
  operationId: 'DetectImageUrl',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful DetectImageUrl request': {
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
      publishedName: z
        .string()
        .openapi({
          param: {
            description: 'Specifies the name of the model to evaluate against.',
            examples: { 'Successful DetectImageUrl request': { value: 'MyModel1' } },
            in: 'path',
            name: 'publishedName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      application: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Specifies the name of application using the endpoint.',
            in: 'query',
            name: 'application',
            required: false,
            schema: { type: 'string' },
            'x-nullable': true,
          },
        }),
    }),
    body: ImageUrl2RequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ImagePredictionSchema,
          examples: { 'Successful DetectImageUrl request': SuccessfulDetectImageUrlRequestExample },
        },
        'application/xml': {
          schema: ImagePredictionSchema,
          examples: { 'Successful DetectImageUrl request': SuccessfulDetectImageUrlRequestExample },
        },
        'text/xml': {
          schema: ImagePredictionSchema,
          examples: { 'Successful DetectImageUrl request': SuccessfulDetectImageUrlRequestExample },
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

export const postProjectIdDetectIterationsPublishedNameUrlNostoreRoute = createRoute({
  method: 'post',
  path: '/{projectId}/detect/iterations/{publishedName}/url/nostore',
  tags: ['ImagePredictionApi'],
  summary: 'Detect objects in an image url without saving the result.',
  operationId: 'DetectImageUrlWithNoStore',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            description: 'The project id.',
            examples: {
              'Successful DetectImageUrlWithNoStore request': {
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
      publishedName: z
        .string()
        .openapi({
          param: {
            description: 'Specifies the name of the model to evaluate against.',
            examples: { 'Successful DetectImageUrlWithNoStore request': { value: 'MyModel1' } },
            in: 'path',
            name: 'publishedName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      application: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Specifies the name of application using the endpoint.',
            in: 'query',
            name: 'application',
            required: false,
            schema: { type: 'string' },
            'x-nullable': true,
          },
        }),
    }),
    body: ImageUrlRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ImagePredictionSchema,
          examples: {
            'Successful DetectImageUrlWithNoStore request':
              SuccessfulDetectImageUrlWithNoStoreRequestExample,
          },
        },
        'application/xml': {
          schema: ImagePredictionSchema,
          examples: {
            'Successful DetectImageUrlWithNoStore request':
              SuccessfulDetectImageUrlWithNoStoreRequestExample,
          },
        },
        'text/xml': {
          schema: ImagePredictionSchema,
          examples: {
            'Successful DetectImageUrlWithNoStore request':
              SuccessfulDetectImageUrlWithNoStoreRequestExample,
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
