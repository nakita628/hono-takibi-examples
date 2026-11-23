type EntityResponse = {
  address?: (string | null) | undefined
  dbConnection?: (string | null) | undefined
  email?: (string | null) | undefined
  id?: number | undefined
  isActive?: boolean | undefined
  name?: (string | null) | undefined
  token?: string | undefined
}
type NewEntityRequest = {
  address?: (string | null) | undefined
  email?: (string | null) | undefined
  name?: (string | null) | undefined
}
type ToggleRequest = { id?: number | undefined; isActive?: boolean | undefined }
type PlanningLevelDataDto = {
  historyValues?: (number[] | null) | undefined
  timeSeriesId?: (string | null) | undefined
}
type JsonForecastResponse = {
  data?: (PlanningLevelDataDto[] | null) | undefined
  planningLevelId?: (string | null) | undefined
  startDate?: (string | null) | undefined
}
type MethodDto = {
  key?: (string | null) | undefined
  name?: (string | null) | undefined
  queue?: (string | null) | undefined
  replyQueue?: (string | null) | undefined
}
type NewModelRequest = { key?: (string | null) | undefined; name?: (string | null) | undefined }
type NewTokenRequest = {
  entityToken?: string | undefined
  expirationDate?: string | undefined
  userToken?: string | undefined
}
type NewUserRequest = {
  email?: (string | null) | undefined
  entityToken?: string | undefined
  firstname?: (string | null) | undefined
  isActive?: boolean | undefined
  lastname?: (string | null) | undefined
  phone?: (string | null) | undefined
}
type ToggleUserRequest = {
  entityId?: number | undefined
  id?: number | undefined
  isActive?: boolean | undefined
}
type PlanningLevelInfoRequest = {
  discardData: boolean
  errorType:
    | 'MeanAbsolutePercentageError'
    | 'MeanSquaredError'
    | 'MeanAbsoluteError'
    | 'MedianAbsoluteDeviation'
    | 'None'
  holdOutPeriod: number
  noFcst: number
  outlierDetection: boolean
  periodicity: number
}
type PlanningLevelRequest = {
  data?: (PlanningLevelDataDto[] | null) | undefined
  method: string
  override?: boolean | undefined
  params?: PlanningLevelInfoRequest | undefined
  planningLevelId: string
  startDate: string
}
type ForecastHyperparameterResponse = {
  discardData?: (boolean | null) | undefined
  errorType?:
    | 'MeanAbsolutePercentageError'
    | 'MeanSquaredError'
    | 'MeanAbsoluteError'
    | 'MedianAbsoluteDeviation'
    | 'None'
    | undefined
  holdOutPeriod?: (number | null) | undefined
  noFcst?: (number | null) | undefined
  periodicity?: (number | null) | undefined
}
type PlanningLevelForecastResultData = {
  date?: (string | null) | undefined
  value?: number | undefined
}
type TimeSeriesForecastResponse = {
  error?: (number | null) | undefined
  forecastData?: (PlanningLevelForecastResultData[] | null) | undefined
  method?: (string | null) | undefined
  timeSeriesId?: (string | null) | undefined
}
type ForecastResponse = {
  hyperparameters?: ForecastHyperparameterResponse | undefined
  timeSeries?: (TimeSeriesForecastResponse[] | null) | undefined
}
type AiPlanningLevelRequest = {
  data?: (PlanningLevelDataDto[] | null) | undefined
  method: 'icueMLP' | 'icueMLO' | 'icueMLN'
  params?: PlanningLevelInfoRequest | undefined
  planningLevelId: string
  startDate: string
}
type JobResponse = { jobId?: number | undefined }
type ForecastBottomUpResponse = {
  forecastData?: (PlanningLevelForecastResultData[] | null) | undefined
  hyperparameters?: ForecastHyperparameterResponse | undefined
}
type ForecastOptimalParametersResponse = {
  alpha?: (number | null) | undefined
  beta?: (number | null) | undefined
  gamma?: (number | null) | undefined
}
type OutlierResponse = {
  index?: number | undefined
  type?: 'Additive' | 'LevelShift' | 'TemporaryChange' | 'Seasonal' | undefined
  value?: number | undefined
}
type TimeSeriesFullDetailsResponse = {
  error?: (number | null) | undefined
  forecastData?: (PlanningLevelForecastResultData[] | null) | undefined
  historyData?: (PlanningLevelForecastResultData[] | null) | undefined
  method?: (string | null) | undefined
  optimalParameters?: ForecastOptimalParametersResponse | undefined
  outliers?: (OutlierResponse[] | null) | undefined
  timeSeriesId?: (string | null) | undefined
}
type FullDetailsForecastResponse = {
  hyperparameters?: ForecastHyperparameterResponse | undefined
  timeSeries?: (TimeSeriesFullDetailsResponse[] | null) | undefined
}
type TimeSeriesHistoryAndForecastResponse = {
  error?: (number | null) | undefined
  forecastData?: (PlanningLevelForecastResultData[] | null) | undefined
  historyData?: (PlanningLevelForecastResultData[] | null) | undefined
  method?: (string | null) | undefined
  timeSeriesId?: (string | null) | undefined
}
type HistoryAndForecastResponse = {
  hyperparameters?: ForecastHyperparameterResponse | undefined
  timeSeries?: (TimeSeriesHistoryAndForecastResponse[] | null) | undefined
}
type TimeSeriesOptimalParametersResponse = {
  method?: (string | null) | undefined
  optimalParameters?: ForecastOptimalParametersResponse | undefined
  timeSeriesId?: (string | null) | undefined
}
type OptimalParameterResponse = {
  hyperparameters?: ForecastHyperparameterResponse | undefined
  timeSeries?: (TimeSeriesOptimalParametersResponse[] | null) | undefined
}
type PlanningLevelReRunRequest = {
  method: string
  params?: PlanningLevelInfoRequest | undefined
  planningLevelId: number
}
type HyperparameterModel = {
  abcClassificationThresholdA?: (number | null) | undefined
  abcClassificationThresholdB?: (number | null) | undefined
  abcClassificationThresholdC?: (number | null) | undefined
  discardData?: (boolean | null) | undefined
  errorType?:
    | 'MeanAbsolutePercentageError'
    | 'MeanSquaredError'
    | 'MeanAbsoluteError'
    | 'MedianAbsoluteDeviation'
    | 'None'
    | undefined
  holdOutPeriod?: (number | null) | undefined
  noFcst?: (number | null) | undefined
  outlierDetection?: (boolean | null) | undefined
  periodicity?: (number | null) | undefined
  xyzClassificationThresholdX?: (number | null) | undefined
  xyzClassificationThresholdY?: (number | null) | undefined
  xyzClassificationThresholdZ?: (number | null) | undefined
}
type LifecycleManyToOneRequest = {
  data?: (PlanningLevelDataDto[] | null) | undefined
  planningLevelId: string
  ratios?: (number[] | null) | undefined
}
type LifecycleOneToOneRequest = {
  data?: PlanningLevelDataDto | undefined
  planningLevelId: string
  ratio?: number | undefined
}
type OutliersRequest = {
  data?: (PlanningLevelDataDto[] | null) | undefined
  planningLevelId: string
  startDate: string
}
type TimeSeriesOutliersResponse = {
  outliers?: (OutlierResponse[] | null) | undefined
  timeSeriesId?: (string | null) | undefined
}
type PortfolioRequest = {
  data?: (PlanningLevelDataDto[] | null) | undefined
  planningLevelId: string
  startDate: string
}
type PortfolioModel = {
  abc12?: string | undefined
  abc12Value?: number | undefined
  abc6?: string | undefined
  abc6Value?: number | undefined
  abc9?: string | undefined
  abc9Value?: number | undefined
  id?: (string | null) | undefined
  thresholdA?: number | undefined
  thresholdB?: number | undefined
  thresholdC?: number | undefined
  thresholdX?: number | undefined
  thresholdY?: number | undefined
  thresholdZ?: number | undefined
  xyz12?: string | undefined
  xyz12Value?: number | undefined
  xyz6?: string | undefined
  xyz6Value?: number | undefined
  xyz9?: string | undefined
  xyz9Value?: number | undefined
}
type PortfolioAbcModel = {
  abc12?: string | undefined
  abc12Value?: number | undefined
  abc6?: string | undefined
  abc6Value?: number | undefined
  abc9?: string | undefined
  abc9Value?: number | undefined
  id?: (string | null) | undefined
  thresholdA?: number | undefined
  thresholdB?: number | undefined
  thresholdC?: number | undefined
}
type ForecastPerformanceDataRequest = {
  forecastValues?: (number[] | null) | undefined
  historyValues?: (number[] | null) | undefined
  timeSeriesId?: (string | null) | undefined
}
type ForecastPerformanceRequest = {
  costOfError?: number | undefined
  data?: (ForecastPerformanceDataRequest[] | null) | undefined
  method: string
  params?: PlanningLevelInfoRequest | undefined
  planningLevelId: string
  rewindTimeFrame: number
  startDate: string
}
type RewindHyperparameterResponse = {
  costOfError?: (number | null) | undefined
  discardData?: (boolean | null) | undefined
  errorType?:
    | 'MeanAbsolutePercentageError'
    | 'MeanSquaredError'
    | 'MeanAbsoluteError'
    | 'MedianAbsoluteDeviation'
    | 'None'
    | undefined
  holdOutPeriod?: (number | null) | undefined
  noFcst?: (number | null) | undefined
  periodicity?: (number | null) | undefined
  rewindTimeFrame?: number | undefined
}
type RewindTimeSeriesResponse = {
  customerError?: (number | null) | undefined
  errorDiff?: (number | null) | undefined
  icueError?: number | undefined
  timeSeries?: (string | null) | undefined
  totalCost?: (number | null) | undefined
  useIcue?: (boolean | null) | undefined
}
type RewindResponse = {
  hyperparameters?: RewindHyperparameterResponse | undefined
  timeSeries?: (RewindTimeSeriesResponse[] | null) | undefined
  totalCost?: number | undefined
}
type PortfolioXyzModel = {
  id?: (string | null) | undefined
  thresholdX?: number | undefined
  thresholdY?: number | undefined
  thresholdZ?: number | undefined
  xyz12?: string | undefined
  xyz12Value?: number | undefined
  xyz6?: string | undefined
  xyz6Value?: number | undefined
  xyz9?: string | undefined
  xyz9Value?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/administration/entity': {
      $get:
        | {
            input: { header: { Token?: string | undefined } }
            output: EntityResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } }
            output: EntityResponse[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } }
            output: EntityResponse[]
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { header: { Token?: string | undefined } } & { json: NewEntityRequest }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: NewEntityRequest }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: NewEntityRequest }
            output: string
            outputFormat: 'text'
            status: 200
          }
      $put: {
        input: { header: { Token?: string | undefined } } & { json: ToggleRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/administration/entity/:id': {
      $delete: {
        input: { param: { id: number } } & { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/administration/file-to-json': {
      $post:
        | {
            input: { header: { Token?: string | undefined } } & {
              form: { File: File; Periodicity: number }
            }
            output: JsonForecastResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & {
              form: { File: File; Periodicity: number }
            }
            output: JsonForecastResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & {
              form: { File: File; Periodicity: number }
            }
            output: JsonForecastResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/administration/model': {
      $get:
        | {
            input: { header: { Token?: string | undefined } }
            output: MethodDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } }
            output: MethodDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } }
            output: MethodDto[]
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { header: { Token?: string | undefined } } & { json: NewModelRequest }
            output: MethodDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: NewModelRequest }
            output: MethodDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: NewModelRequest }
            output: MethodDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/administration/model/:entityId': {
      $get:
        | {
            input: { param: { entityId: number } } & { header: { Token?: string | undefined } }
            output: MethodDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { entityId: number } } & { header: { Token?: string | undefined } }
            output: MethodDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { entityId: number } } & { header: { Token?: string | undefined } }
            output: MethodDto[]
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { entityId: number } } & { header: { Token?: string | undefined } } & {
              json: NewModelRequest
            }
            output: MethodDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { entityId: number } } & { header: { Token?: string | undefined } } & {
              json: NewModelRequest
            }
            output: MethodDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { entityId: number } } & { header: { Token?: string | undefined } } & {
              json: NewModelRequest
            }
            output: MethodDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/administration/planning-level/lock': {
      $post: {
        input: { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/administration/planning-level/:entityId/:id': {
      $delete: {
        input: { param: { entityId: number; id: number } } & {
          header: { Token?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/administration/token': {
      $post:
        | {
            input: { header: { Token?: string | undefined } } & { json: NewTokenRequest }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: NewTokenRequest }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: NewTokenRequest }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/administration/user': {
      $post:
        | {
            input: { header: { Token?: string | undefined } } & { json: NewUserRequest }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: NewUserRequest }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: NewUserRequest }
            output: string
            outputFormat: 'text'
            status: 200
          }
      $put: {
        input: { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/administration/user/lock': {
      $put: {
        input: { header: { Token?: string | undefined } } & { json: ToggleUserRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/administration/user/:entityId': {
      $get: {
        input: { param: { entityId: number } } & { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/administration/user/:entityId/:id': {
      $delete: {
        input: { param: { entityId: number; id: number } } & {
          header: { Token?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/forecast': {
      $post:
        | {
            input: { header: { Token?: string | undefined } } & { json: PlanningLevelRequest }
            output: ForecastResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: PlanningLevelRequest }
            output: ForecastResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: PlanningLevelRequest }
            output: ForecastResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/forecast/AI': {
      $post:
        | {
            input: { header: { Token?: string | undefined } } & { json: AiPlanningLevelRequest }
            output: JobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: AiPlanningLevelRequest }
            output: JobResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: AiPlanningLevelRequest }
            output: JobResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/forecast/AI/history-and-forecast': {
      $post:
        | {
            input: { header: { Token?: string | undefined } } & { json: AiPlanningLevelRequest }
            output: JobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: AiPlanningLevelRequest }
            output: JobResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: AiPlanningLevelRequest }
            output: JobResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/forecast/file-to-forecast': {
      $post:
        | {
            input: { header: { Token?: string | undefined } } & {
              form: {
                DiscardData?: boolean | undefined
                ErrorType?:
                  | 'MeanAbsolutePercentageError'
                  | 'MeanSquaredError'
                  | 'MeanAbsoluteError'
                  | 'MedianAbsoluteDeviation'
                  | 'None'
                  | undefined
                File: File
                HoldOutPeriod?: number | undefined
                Method:
                  | 'AutoBestPick'
                  | 'BoxJenkins'
                  | 'Croston'
                  | 'DoubleExponentialSmoothing'
                  | 'HoltWinters'
                  | 'SingleExponentialSmoothing'
                  | 'iCUE1'
                  | 'SimpleMovingAverage'
                NoFcst?: number | undefined
                OutlierDetection?: boolean | undefined
                Periodicity?: number | undefined
              }
            }
            output: JobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & {
              form: {
                DiscardData?: boolean | undefined
                ErrorType?:
                  | 'MeanAbsolutePercentageError'
                  | 'MeanSquaredError'
                  | 'MeanAbsoluteError'
                  | 'MedianAbsoluteDeviation'
                  | 'None'
                  | undefined
                File: File
                HoldOutPeriod?: number | undefined
                Method:
                  | 'AutoBestPick'
                  | 'BoxJenkins'
                  | 'Croston'
                  | 'DoubleExponentialSmoothing'
                  | 'HoltWinters'
                  | 'SingleExponentialSmoothing'
                  | 'iCUE1'
                  | 'SimpleMovingAverage'
                NoFcst?: number | undefined
                OutlierDetection?: boolean | undefined
                Periodicity?: number | undefined
              }
            }
            output: JobResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & {
              form: {
                DiscardData?: boolean | undefined
                ErrorType?:
                  | 'MeanAbsolutePercentageError'
                  | 'MeanSquaredError'
                  | 'MeanAbsoluteError'
                  | 'MedianAbsoluteDeviation'
                  | 'None'
                  | undefined
                File: File
                HoldOutPeriod?: number | undefined
                Method:
                  | 'AutoBestPick'
                  | 'BoxJenkins'
                  | 'Croston'
                  | 'DoubleExponentialSmoothing'
                  | 'HoltWinters'
                  | 'SingleExponentialSmoothing'
                  | 'iCUE1'
                  | 'SimpleMovingAverage'
                NoFcst?: number | undefined
                OutlierDetection?: boolean | undefined
                Periodicity?: number | undefined
              }
            }
            output: JobResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/forecast/forecast-bottom-up': {
      $post:
        | {
            input: { header: { Token?: string | undefined } } & { json: PlanningLevelRequest }
            output: ForecastBottomUpResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: PlanningLevelRequest }
            output: ForecastBottomUpResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: PlanningLevelRequest }
            output: ForecastBottomUpResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/forecast/forecast-top-down': {
      $post: {
        input: { header: { Token?: string | undefined } } & { json: PlanningLevelRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/forecast/full-detail': {
      $post:
        | {
            input: { header: { Token?: string | undefined } } & { json: PlanningLevelRequest }
            output: FullDetailsForecastResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: PlanningLevelRequest }
            output: FullDetailsForecastResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: PlanningLevelRequest }
            output: FullDetailsForecastResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/forecast/history-and-forecast': {
      $post:
        | {
            input: { header: { Token?: string | undefined } } & { json: PlanningLevelRequest }
            output: HistoryAndForecastResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: PlanningLevelRequest }
            output: HistoryAndForecastResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: PlanningLevelRequest }
            output: HistoryAndForecastResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/forecast/optimal-parameter': {
      $post:
        | {
            input: { header: { Token?: string | undefined } } & { json: PlanningLevelRequest }
            output: OptimalParameterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: PlanningLevelRequest }
            output: OptimalParameterResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: PlanningLevelRequest }
            output: OptimalParameterResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/forecast/rerun': {
      $post:
        | {
            input: { header: { Token?: string | undefined } } & { json: PlanningLevelReRunRequest }
            output: ForecastResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: PlanningLevelReRunRequest }
            output: ForecastResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: PlanningLevelReRunRequest }
            output: ForecastResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/forecast/result/:jobId': {
      $get: {
        input: { param: { jobId: number } } & { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/forecast/status/:jobId': {
      $get: {
        input: { param: { jobId: number } } & { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/hyperparameter': {
      $get:
        | {
            input: { header: { Token?: string | undefined } }
            output: HyperparameterModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } }
            output: HyperparameterModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } }
            output: HyperparameterModel
            outputFormat: 'text'
            status: 200
          }
      $post: {
        input: { header: { Token?: string | undefined } } & { json: HyperparameterModel }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/inventory/amazon-ipi': {
      $post: {
        input: { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/inventory/caryying-cost': {
      $post: {
        input: { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/inventory/eoq': {
      $post: {
        input: { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/inventory/fill-rate': {
      $post: {
        input: { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/inventory/financial-imapct-forecast-accuracy': {
      $post: {
        input: { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/inventory/inventory-turnover': {
      $post: {
        input: { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/inventory/ltd': {
      $post: {
        input: { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/inventory/moq': {
      $post: {
        input: { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/inventory/optimal-service-level': {
      $post: {
        input: { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/inventory/reorder-point': {
      $post: {
        input: { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/inventory/safety-stock': {
      $post: {
        input: { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/inventory/service-level': {
      $post: {
        input: { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/inventory/turns': {
      $post: {
        input: { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lifecycle/many-to-one': {
      $post:
        | {
            input: { header: { Token?: string | undefined } } & { json: LifecycleManyToOneRequest }
            output: PlanningLevelDataDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: LifecycleManyToOneRequest }
            output: PlanningLevelDataDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: LifecycleManyToOneRequest }
            output: PlanningLevelDataDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/lifecycle/one-to-one': {
      $post:
        | {
            input: { header: { Token?: string | undefined } } & { json: LifecycleOneToOneRequest }
            output: PlanningLevelDataDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: LifecycleOneToOneRequest }
            output: PlanningLevelDataDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: LifecycleOneToOneRequest }
            output: PlanningLevelDataDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/outlier': {
      $post:
        | {
            input: { header: { Token?: string | undefined } } & { json: OutliersRequest }
            output: TimeSeriesOutliersResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: OutliersRequest }
            output: TimeSeriesOutliersResponse[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: OutliersRequest }
            output: TimeSeriesOutliersResponse[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/portfolio': {
      $post:
        | {
            input: { header: { Token?: string | undefined } } & { json: PortfolioRequest }
            output: PortfolioModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: PortfolioRequest }
            output: PortfolioModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: PortfolioRequest }
            output: PortfolioModel[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/portfolio/abc': {
      $post:
        | {
            input: { header: { Token?: string | undefined } } & { json: PortfolioRequest }
            output: PortfolioAbcModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: PortfolioRequest }
            output: PortfolioAbcModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: PortfolioRequest }
            output: PortfolioAbcModel[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/portfolio/file-to-portfolio': {
      $post: {
        input: { header: { Token?: string | undefined } } & { form: { File: File } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/portfolio/forecast-performance-rewind': {
      $post:
        | {
            input: { header: { Token?: string | undefined } } & { json: ForecastPerformanceRequest }
            output: RewindResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: ForecastPerformanceRequest }
            output: RewindResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: ForecastPerformanceRequest }
            output: RewindResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/portfolio/xyz': {
      $post:
        | {
            input: { header: { Token?: string | undefined } } & { json: PortfolioRequest }
            output: PortfolioXyzModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: PortfolioRequest }
            output: PortfolioXyzModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { Token?: string | undefined } } & { json: PortfolioRequest }
            output: PortfolioXyzModel[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/pricing/bundle-pricing': {
      $post: {
        input: { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/pricing/competitive-pricing': {
      $post: {
        input: { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/pricing/cost-plus-pricing': {
      $post: {
        input: { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/pricing/decoy-pricing': {
      $post: {
        input: { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/pricing/odd-pricing': {
      $post: {
        input: { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/pricing/penetration-pricing': {
      $post: {
        input: { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/pricing/price-elasticity-of-demand': {
      $post: {
        input: { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/report/performance/sku-rationalization/:planningLevelId': {
      $get:
        | {
            input: { param: { planningLevelId: number } } & {
              header: { Token?: string | undefined }
            }
            output: PortfolioModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { planningLevelId: number } } & {
              header: { Token?: string | undefined }
            }
            output: PortfolioModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { planningLevelId: number } } & {
              header: { Token?: string | undefined }
            }
            output: PortfolioModel[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/report/performance/:planningLevelId': {
      $get: {
        input: { param: { planningLevelId: string } } & { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/report/planning-level/organization': {
      $get: {
        input: { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/report/planning-level/user': {
      $get: {
        input: { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/report/user': {
      $get: {
        input: { header: { Token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
