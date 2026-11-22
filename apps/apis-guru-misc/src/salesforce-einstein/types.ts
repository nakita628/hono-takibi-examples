type PlanData = {
  amount?: number | undefined
  plan?:
    | 'STARTER'
    | 'SFDC_1M_EDITION'
    | 'BRONZE'
    | 'SILVER'
    | 'GOLD'
    | 'DATASET_DOWNLOAD'
    | undefined
  source?: 'SALESFORCE' | 'HEROKU' | 'SF_AUTO_PROVISION' | 'SF_AUTO_PROVISION_BOUND' | undefined
}
type ApiUsage = {
  endsAt?: string | undefined
  id?: string | undefined
  licenseId?: string | undefined
  object?: string | undefined
  organizationId?: string | undefined
  planData?: PlanData[] | undefined
  predictionsMax?: bigint | undefined
  predictionsUsed?: bigint | undefined
  startsAt?: string | undefined
}
type ApiUsageList = { data?: ApiUsage[] | undefined; object?: string | undefined }
type Label = {
  datasetId: bigint
  id?: bigint | undefined
  name: string
  numExamples?: bigint | undefined
}
type LabelSummary = { labels?: Label[] | undefined }
type Dataset = {
  available?: boolean | undefined
  createdAt?: string | undefined
  id: bigint
  labelSummary?: LabelSummary | undefined
  language?: string | undefined
  name: string
  numOfDuplicates?: number | undefined
  object?: string | undefined
  statusMsg?: string | undefined
  totalExamples?: number | undefined
  totalLabels?: number | undefined
  type?: string | undefined
  updatedAt?: string | undefined
}
type DatasetList = { data?: Dataset[] | undefined; object?: string | undefined }
type DeletionResponse = {
  deletedObjectId?: string | undefined
  id?: string | undefined
  message?: string | undefined
  object?: string | undefined
  organizationId?: string | undefined
  progress?: number | undefined
  status?:
    | 'QUEUED'
    | 'RUNNING'
    | 'SUCCEEDED_WAITING_FOR_CACHE_REMOVAL'
    | 'SUCCEEDED'
    | 'KILLED'
    | 'FAILED'
    | 'RETRY'
    | undefined
  type?: 'DATASET' | 'MODEL' | undefined
}
type Example = {
  createdAt?: string | undefined
  id: bigint
  label?: Label | undefined
  location?: string | undefined
  name: string
  object?: string | undefined
}
type ExampleList = { data?: Example[] | undefined; object?: string | undefined }
type Model = {
  algorithm?: string | undefined
  createdAt?: string | undefined
  datasetId: bigint
  datasetVersionId: bigint
  failureMsg?: string | undefined
  language?: string | undefined
  modelId: string
  modelType?: string | undefined
  name: string
  object?: string | undefined
  progress: number
  status: 'QUEUED' | 'RUNNING' | 'SUCCEEDED' | 'FAILED' | 'KILLED' | 'FAILED_WITH_RETRIES'
  updatedAt?: string | undefined
}
type ModelList = { data?: Model[] | undefined; object?: string | undefined }
type IntentPredictRequest = {
  document: string
  modelId: string
  numResults?: number | undefined
  sampleId?: string | undefined
}
type LabelResult = { label?: string | undefined; probability?: number | undefined }
type IntentPredictResponse = {
  object?: string | undefined
  probabilities?: LabelResult[] | undefined
  sampleId?: string | undefined
}
type PredictionErrorResponse = { message?: string | undefined; object?: string | undefined }
type Metrics = {
  algorithm?: string | undefined
  createdAt?: string | undefined
  id?: string | undefined
  language?: string | undefined
  metricsData?: { [x: string]: unknown } | undefined
  object?: string | undefined
}
type LearningCurve = {
  epoch?: { [x: string]: unknown } | undefined
  epochResults?: { [x: string]: unknown } | undefined
  metricsData?: { [x: string]: unknown } | undefined
  object?: string | undefined
}
type LearningCurveList = { data?: LearningCurve[] | undefined; object?: string | undefined }
type V2LanguageTrainParams = {
  trainSplitRatio?: number | undefined
  withFeedback?: boolean | undefined
  withGlobalDatasetId?: bigint | undefined
}
type TrainResponse = {
  algorithm?: string | undefined
  createdAt?: string | undefined
  datasetId: bigint
  datasetVersionId: bigint
  epochs?: number | undefined
  failureMsg?: string | undefined
  language: string
  learningRate?: number | undefined
  modelId: string
  modelType?: string | undefined
  name: string
  object?: string | undefined
  progress: number
  queuePosition?: number | undefined
  status: 'QUEUED' | 'RUNNING' | 'SUCCEEDED' | 'FAILED' | 'KILLED' | 'FAILED_WITH_RETRIES'
  trainParams?: string | undefined
  trainStats?: string | undefined
  updatedAt?: string | undefined
}
type SentimentPredictRequest = {
  document: string
  modelId: string
  numResults?: number | undefined
  sampleId?: string | undefined
}
type SentimentPredictResponse = {
  object?: string | undefined
  probabilities?: LabelResult[] | undefined
  sampleId?: string | undefined
}
type GenerateAccessTokenResponse = {
  access_token?: string | undefined
  expires_in?: string | undefined
  refresh_token?: string | undefined
  token_type?: string | undefined
}
type ObjectDetectionRequest = {
  modelId: string
  sampleBase64Content?: string | undefined
  sampleId?: string | undefined
  sampleLocation?: string | undefined
}
type BoundingBox = {
  maxX?: number | undefined
  maxY?: number | undefined
  minX?: number | undefined
  minY?: number | undefined
}
type DetectionResult = {
  boundingBox?: BoundingBox | undefined
  label?: string | undefined
  probability?: number | undefined
}
type ObjectDetectionResponse = {
  object?: string | undefined
  probabilities?: DetectionResult[] | undefined
  sampleId?: string | undefined
}
type CellLocation = { colIndex?: number | undefined; rowIndex?: number | undefined }
type EntityObject = {
  boundingBox?: BoundingBox | undefined
  entity?: string | undefined
  text?: string | undefined
}
type Attributes = {
  cellLocation?: CellLocation | undefined
  language?: string | undefined
  pageNumber?: string | undefined
  tag?: string | undefined
  value?: EntityObject | undefined
}
type OCRResult = {
  attributes?: Attributes | undefined
  boundingBox?: BoundingBox | undefined
  label?: string | undefined
  probability?: number | undefined
}
type OCRPredictResponse = {
  object?: string | undefined
  probabilities?: OCRResult[] | undefined
  sampleId?: string | undefined
  task?: string | undefined
}
type ImageClassificationRequest = {
  modelId: string
  numResults?: number | undefined
  sampleBase64Content?: string | undefined
  sampleId?: string | undefined
  sampleLocation?: string | undefined
}
type ImageClassificationResponse = {
  object?: string | undefined
  probabilities?: LabelResult[] | undefined
  sampleId?: string | undefined
}
type V2VisionTrainParams = {
  trainSplitRatio?: number | undefined
  withFeedback?: boolean | undefined
  withGlobalDatasetId?: bigint | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/apiusage': { $get: { input: {}; output: ApiUsageList; outputFormat: 'json'; status: 200 } }
  } & {
    '/v2/language/datasets': {
      $get: {
        input: {
          query: {
            offset?: string | undefined
            count?: string | undefined
            global?: boolean | undefined
          }
        }
        output: DatasetList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/language/datasets/upload': {
      $post: {
        input: {
          form: {
            data?: string | undefined
            name?: string | undefined
            path?: string | undefined
            type?: 'text-intent' | 'text-sentiment' | undefined
          }
        }
        output: Dataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/language/datasets/upload/sync': {
      $post: {
        input: {
          form: {
            data?: string | undefined
            name?: string | undefined
            path?: string | undefined
            type?: 'text-intent' | 'text-sentiment' | undefined
          }
        }
        output: Dataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/language/datasets/:datasetId': {
      $delete: {
        input: { param: { datasetId: string } }
        output: DeletionResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { datasetId: string } }
        output: Dataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/language/datasets/:datasetId/examples': {
      $get: {
        input: { param: { datasetId: string } } & {
          query: {
            offset?: string | undefined
            count?: string | undefined
            source?: 'all' | 'feedback' | 'upload' | undefined
          }
        }
        output: ExampleList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/language/datasets/:datasetId/models': {
      $get: {
        input: { param: { datasetId: string } } & {
          query: { offset?: string | undefined; count?: string | undefined }
        }
        output: ModelList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/language/datasets/:datasetId/upload': {
      $put: {
        input: { param: { datasetId: string } } & {
          form: { data?: string | undefined; type?: string | undefined }
        }
        output: Dataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/language/deletion/:id': {
      $get: {
        input: { param: { id: string } }
        output: DeletionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/language/examples': {
      $get: {
        input: {
          query: {
            labelId?: string | undefined
            offset?: string | undefined
            count?: string | undefined
          }
        }
        output: ExampleList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/language/feedback': {
      $post: {
        input: {
          form: {
            document?: string | undefined
            expectedLabel?: string | undefined
            modelId?: string | undefined
            name?: string | undefined
          }
        }
        output: Example
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/language/intent': {
      $post:
        | {
            input: { json: IntentPredictRequest } & { form: IntentPredictRequest }
            output: IntentPredictResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IntentPredictRequest } & { form: IntentPredictRequest }
            output: PredictionErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/language/models/:modelId': {
      $delete: {
        input: { param: { modelId: string } }
        output: DeletionResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { modelId: string } }
        output: Metrics
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/language/models/:modelId/lc': {
      $get: {
        input: { param: { modelId: string } } & {
          query: { offset?: string | undefined; count?: string | undefined }
        }
        output: LearningCurveList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/language/retrain': {
      $post: {
        input: {
          form: {
            algorithm?: string | undefined
            epochs?: number | undefined
            learningRate?: number | undefined
            modelId?: string | undefined
            trainParams?: V2LanguageTrainParams | undefined
          }
        }
        output: TrainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/language/sentiment': {
      $post: {
        input: { json: SentimentPredictRequest } & { form: SentimentPredictRequest }
        output: SentimentPredictResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/language/train': {
      $post: {
        input: {
          form: {
            algorithm?: string | undefined
            datasetId?: bigint | undefined
            epochs?: number | undefined
            learningRate?: number | undefined
            name?: string | undefined
            trainParams?: V2LanguageTrainParams | undefined
          }
        }
        output: TrainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/language/train/:modelId': {
      $get: {
        input: { param: { modelId: string } }
        output: TrainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/oauth2/token': {
      $post: {
        input: {
          json: {
            assertion?: string | undefined
            grant_type?: 'urn:ietf:params:oauth:grant-type:jwt-bearer' | 'refresh_token' | undefined
            refresh_token?: string | undefined
            scope?: string | undefined
            valid_for?: number | undefined
          }
        } & {
          form: {
            assertion?: string | undefined
            grant_type?: 'urn:ietf:params:oauth:grant-type:jwt-bearer' | 'refresh_token' | undefined
            refresh_token?: string | undefined
            scope?: string | undefined
            valid_for?: number | undefined
          }
        }
        output: GenerateAccessTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/oauth2/tokens/:token': {
      $delete:
        | { input: { param: { token: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { token: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { token: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/v2/vision/bulkfeedback': {
      $put: {
        input: { form: { data?: string | undefined; modelId?: string | undefined } }
        output: Dataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/vision/datasets': {
      $get: {
        input: {
          query: {
            offset?: string | undefined
            count?: string | undefined
            global?: boolean | undefined
          }
        }
        output: DatasetList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          form: {
            labels?: string | undefined
            name?: string | undefined
            type?: 'image' | 'image-multi-label' | undefined
          }
        }
        output: Dataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/vision/datasets/upload': {
      $post: {
        input: {
          form: {
            data?: string | undefined
            name?: string | undefined
            path?: string | undefined
            type?: 'image' | 'image-detection' | 'image-multi-label' | undefined
          }
        }
        output: Dataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/vision/datasets/upload/sync': {
      $post: {
        input: {
          form: {
            data?: string | undefined
            name?: string | undefined
            path?: string | undefined
            type?: 'image' | 'image-detection' | 'image-multi-label' | undefined
          }
        }
        output: Dataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/vision/datasets/:datasetId': {
      $delete: {
        input: { param: { datasetId: string } }
        output: DeletionResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { datasetId: string } }
        output: Dataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/vision/datasets/:datasetId/examples': {
      $get: {
        input: { param: { datasetId: string } } & {
          query: {
            offset?: string | undefined
            count?: string | undefined
            source?: 'all' | 'feedback' | 'upload' | undefined
          }
        }
        output: ExampleList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { datasetId: string } } & {
          form: {
            data?: string | undefined
            labelId?: bigint | undefined
            name?: string | undefined
          }
        }
        output: Example
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/vision/datasets/:datasetId/models': {
      $get: {
        input: { param: { datasetId: string } } & {
          query: { offset?: string | undefined; count?: string | undefined }
        }
        output: ModelList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/vision/datasets/:datasetId/upload': {
      $put: {
        input: { param: { datasetId: string } } & {
          form: { data?: string | undefined; path?: string | undefined }
        }
        output: Dataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/vision/deletion/:id': {
      $get: {
        input: { param: { id: string } }
        output: DeletionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/vision/detect': {
      $post: {
        input: { json: ObjectDetectionRequest } & { form: ObjectDetectionRequest }
        output: ObjectDetectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/vision/examples': {
      $get: {
        input: {
          query: {
            labelId?: string | undefined
            offset?: string | undefined
            count?: string | undefined
          }
        }
        output: ExampleList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/vision/feedback': {
      $post: {
        input: {
          form: {
            data?: string | undefined
            expectedLabel?: string | undefined
            modelId?: string | undefined
            name?: string | undefined
          }
        }
        output: Example
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/vision/models/:modelId': {
      $delete: {
        input: { param: { modelId: string } }
        output: DeletionResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { modelId: string } }
        output: Metrics
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/vision/models/:modelId/lc': {
      $get: {
        input: { param: { modelId: string } } & {
          query: { offset?: string | undefined; count?: string | undefined }
        }
        output: LearningCurveList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/vision/ocr': {
      $post: {
        input: {
          form: {
            modelId?: string | undefined
            sampleContent?: File | undefined
            sampleId?: string | undefined
            sampleLocation?: string | undefined
            task?: string | undefined
          }
        }
        output: OCRPredictResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/vision/predict': {
      $post: {
        input: { json: ImageClassificationRequest } & { form: ImageClassificationRequest }
        output: ImageClassificationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/vision/retrain': {
      $post: {
        input: {
          form: {
            algorithm?: string | undefined
            epochs?: number | undefined
            learningRate?: number | undefined
            modelId?: string | undefined
            trainParams?: V2VisionTrainParams | undefined
          }
        }
        output: TrainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/vision/train': {
      $post: {
        input: {
          form: {
            algorithm?: string | undefined
            datasetId?: bigint | undefined
            epochs?: number | undefined
            learningRate?: number | undefined
            name?: string | undefined
            trainParams?: V2VisionTrainParams | undefined
          }
        }
        output: TrainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/vision/train/:modelId': {
      $get: {
        input: { param: { modelId: string } }
        output: TrainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
