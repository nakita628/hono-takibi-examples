import { createRoute, z } from '@hono/zod-openapi'

const ForecastHyperparameterResponseSchema = z
  .strictObject({
    discardData: z.boolean().nullable().exactOptional().openapi({ example: false }),
    errorType: z
      .enum([
        'MeanAbsolutePercentageError',
        'MeanSquaredError',
        'MeanAbsoluteError',
        'MedianAbsoluteDeviation',
        'None',
      ])
      .exactOptional()
      .openapi({ example: 'MeanAbsolutePercentageError' }),
    holdOutPeriod: z.int32().nullable().exactOptional().openapi({ example: 4 }),
    noFcst: z.int32().nullable().exactOptional().openapi({ example: 18 }),
    periodicity: z.int32().nullable().exactOptional().openapi({ example: 12 }),
  })
  .openapi({ required: [] })
  .openapi('ForecastHyperparameterResponse')

const PlanningLevelForecastResultDataSchema = z
  .strictObject({ date: z.string().nullable().exactOptional(), value: z.float64().exactOptional() })
  .openapi({ required: [] })
  .openapi('PlanningLevelForecastResultData')

const TimeSeriesForecastResponseSchema = z
  .strictObject({
    error: z.float64().nullable().exactOptional(),
    forecastData: z.array(PlanningLevelForecastResultDataSchema).nullable().exactOptional(),
    method: z.string().nullable().exactOptional(),
    timeSeriesId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TimeSeriesForecastResponse')

type ForecastResponseType = {
  hyperparameters?: z.infer<typeof ForecastHyperparameterResponseSchema>
  timeSeries?: z.infer<typeof TimeSeriesForecastResponseSchema>[] | null
}

const TimeSeriesHistoryAndForecastResponseSchema = z
  .strictObject({
    error: z.float64().nullable().exactOptional(),
    forecastData: z.array(PlanningLevelForecastResultDataSchema).nullable().exactOptional(),
    historyData: z.array(PlanningLevelForecastResultDataSchema).nullable().exactOptional(),
    method: z.string().nullable().exactOptional(),
    timeSeriesId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TimeSeriesHistoryAndForecastResponse')

type HistoryAndForecastResponseType = {
  hyperparameters?: z.infer<typeof ForecastHyperparameterResponseSchema>
  timeSeries?: z.infer<typeof TimeSeriesHistoryAndForecastResponseSchema>[] | null
}

const PlanningLevelDataDtoSchema = z
  .strictObject({
    historyValues: z.array(z.float64()).nullable().exactOptional(),
    timeSeriesId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlanningLevelDataDto')

const PlanningLevelInfoRequestSchema = z
  .strictObject({
    discardData: z.boolean().openapi({ example: false }),
    errorType: z
      .enum([
        'MeanAbsolutePercentageError',
        'MeanSquaredError',
        'MeanAbsoluteError',
        'MedianAbsoluteDeviation',
        'None',
      ])
      .openapi({ example: 'MeanAbsolutePercentageError' }),
    holdOutPeriod: z.int32().openapi({ example: 4 }),
    noFcst: z.int32().openapi({ example: 18 }),
    outlierDetection: z.boolean().openapi({ example: true }),
    periodicity: z.int32().openapi({ example: 12 }),
  })
  .openapi({
    required: [
      'discardData',
      'errorType',
      'holdOutPeriod',
      'noFcst',
      'outlierDetection',
      'periodicity',
    ],
  })
  .openapi('PlanningLevelInfoRequest')

const AiPlanningLevelRequestSchema = z
  .strictObject({
    data: z.array(PlanningLevelDataDtoSchema).nullable().exactOptional(),
    method: z.enum(['icueMLP', 'icueMLO', 'icueMLN']).openapi({ example: 'icueMLP | icueMLO' }),
    params: PlanningLevelInfoRequestSchema.exactOptional(),
    planningLevelId: z.string(),
    startDate: z.string().openapi({ example: '1/16/2016' }),
  })
  .openapi({ required: ['method', 'planningLevelId', 'startDate'] })
  .openapi('AiPlanningLevelRequest')

const EntityResponseSchema = z
  .strictObject({
    address: z.string().nullable().exactOptional(),
    dbConnection: z.string().nullable().exactOptional(),
    email: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    isActive: z.boolean().exactOptional(),
    name: z.string().nullable().exactOptional(),
    token: z.uuid().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EntityResponse')

const ForecastBottomUpResponseSchema = z
  .strictObject({
    forecastData: z.array(PlanningLevelForecastResultDataSchema).nullable().exactOptional(),
    hyperparameters: ForecastHyperparameterResponseSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ForecastBottomUpResponse')

const ForecastOptimalParametersResponseSchema = z
  .strictObject({
    alpha: z.float64().nullable().exactOptional(),
    beta: z.float64().nullable().exactOptional(),
    gamma: z.float64().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ForecastOptimalParametersResponse')

const ForecastPerformanceDataRequestSchema = z
  .strictObject({
    forecastValues: z.array(z.float64()).nullable().exactOptional(),
    historyValues: z.array(z.float64()).nullable().exactOptional(),
    timeSeriesId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ForecastPerformanceDataRequest')

const ForecastPerformanceRequestSchema = z
  .strictObject({
    costOfError: z.float64().exactOptional().openapi({ example: 200 }),
    data: z.array(ForecastPerformanceDataRequestSchema).nullable().exactOptional(),
    method: z.string().openapi({ example: 'iCUE1' }),
    params: PlanningLevelInfoRequestSchema.exactOptional(),
    planningLevelId: z.string(),
    rewindTimeFrame: z.int32().openapi({ example: 12 }),
    startDate: z.string().openapi({ example: '1/16/2016' }),
  })
  .openapi({ required: ['method', 'planningLevelId', 'rewindTimeFrame', 'startDate'] })
  .openapi('ForecastPerformanceRequest')

const ForecastResponseSchema: z.ZodType<ForecastResponseType> = z
  .lazy(() =>
    z
      .strictObject({
        hyperparameters: ForecastHyperparameterResponseSchema.exactOptional(),
        timeSeries: z.array(TimeSeriesForecastResponseSchema).nullable().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('ForecastResponse')

const OutlierResponseSchema = z
  .strictObject({
    index: z.int32().exactOptional(),
    type: z.enum(['Additive', 'LevelShift', 'TemporaryChange', 'Seasonal']).exactOptional(),
    value: z.float64().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OutlierResponse')

const TimeSeriesFullDetailsResponseSchema = z
  .strictObject({
    error: z.float64().nullable().exactOptional(),
    forecastData: z.array(PlanningLevelForecastResultDataSchema).nullable().exactOptional(),
    historyData: z.array(PlanningLevelForecastResultDataSchema).nullable().exactOptional(),
    method: z.string().nullable().exactOptional(),
    optimalParameters: ForecastOptimalParametersResponseSchema.exactOptional(),
    outliers: z.array(OutlierResponseSchema).nullable().exactOptional(),
    timeSeriesId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TimeSeriesFullDetailsResponse')

const FullDetailsForecastResponseSchema = z
  .strictObject({
    hyperparameters: ForecastHyperparameterResponseSchema.exactOptional(),
    timeSeries: z.array(TimeSeriesFullDetailsResponseSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FullDetailsForecastResponse')

const HistoryAndForecastResponseSchema: z.ZodType<HistoryAndForecastResponseType> = z
  .lazy(() =>
    z
      .strictObject({
        hyperparameters: ForecastHyperparameterResponseSchema.exactOptional(),
        timeSeries: z.array(TimeSeriesHistoryAndForecastResponseSchema).nullable().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('HistoryAndForecastResponse')

const HyperparameterModelSchema = z
  .strictObject({
    abcClassificationThresholdA: z.float64().nullable().exactOptional().openapi({ example: 0.8 }),
    abcClassificationThresholdB: z.float64().nullable().exactOptional().openapi({ example: 0.95 }),
    abcClassificationThresholdC: z.float64().nullable().exactOptional().openapi({ example: 0.95 }),
    discardData: z.boolean().nullable().exactOptional().openapi({ example: false }),
    errorType: z
      .enum([
        'MeanAbsolutePercentageError',
        'MeanSquaredError',
        'MeanAbsoluteError',
        'MedianAbsoluteDeviation',
        'None',
      ])
      .exactOptional()
      .openapi({ example: 'MeanAbsolutePercentageError' }),
    holdOutPeriod: z.int32().nullable().exactOptional().openapi({ example: 4 }),
    noFcst: z.int32().nullable().exactOptional().openapi({ example: 18 }),
    outlierDetection: z.boolean().nullable().exactOptional().openapi({ example: true }),
    periodicity: z.int32().nullable().exactOptional().openapi({ example: 12 }),
    xyzClassificationThresholdX: z.float64().nullable().exactOptional().openapi({ example: 0.3 }),
    xyzClassificationThresholdY: z.float64().nullable().exactOptional().openapi({ example: 0.6 }),
    xyzClassificationThresholdZ: z.float64().nullable().exactOptional().openapi({ example: 0.6 }),
  })
  .openapi({ required: [] })
  .openapi('HyperparameterModel')

const JobResponseSchema = z
  .strictObject({ jobId: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('JobResponse')

const JsonForecastResponseSchema = z
  .strictObject({
    data: z.array(PlanningLevelDataDtoSchema).nullable().exactOptional(),
    planningLevelId: z.string().nullable().exactOptional(),
    startDate: z.string().nullable().exactOptional().openapi({ example: '1/16/2016' }),
  })
  .openapi({ required: [] })
  .openapi('JsonForecastResponse')

const LifecycleManyToOneRequestSchema = z
  .strictObject({
    data: z.array(PlanningLevelDataDtoSchema).nullable().exactOptional(),
    planningLevelId: z.string(),
    ratios: z.array(z.float64()).nullable().exactOptional(),
  })
  .openapi({ required: ['planningLevelId'] })
  .openapi('LifecycleManyToOneRequest')

const LifecycleOneToOneRequestSchema = z
  .strictObject({
    data: PlanningLevelDataDtoSchema.exactOptional(),
    planningLevelId: z.string(),
    ratio: z.float64().exactOptional().openapi({ example: 15 }),
  })
  .openapi({ required: ['planningLevelId'] })
  .openapi('LifecycleOneToOneRequest')

const MethodDtoSchema = z
  .strictObject({
    key: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    queue: z.string().nullable().exactOptional(),
    replyQueue: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MethodDto')

const NewEntityRequestSchema = z
  .strictObject({
    address: z.string().nullable().exactOptional(),
    email: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NewEntityRequest')

const NewModelRequestSchema = z
  .strictObject({
    key: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NewModelRequest')

const NewTokenRequestSchema = z
  .strictObject({
    entityToken: z.uuid().exactOptional(),
    expirationDate: z.iso.datetime({ offset: true }).exactOptional(),
    userToken: z.uuid().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NewTokenRequest')

const NewUserRequestSchema = z
  .strictObject({
    email: z.string().nullable().exactOptional(),
    entityToken: z.uuid().exactOptional(),
    firstname: z.string().nullable().exactOptional(),
    isActive: z.boolean().exactOptional().openapi({ readOnly: true }),
    lastname: z.string().nullable().exactOptional(),
    phone: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NewUserRequest')

const TimeSeriesOptimalParametersResponseSchema = z
  .strictObject({
    method: z.string().nullable().exactOptional(),
    optimalParameters: ForecastOptimalParametersResponseSchema.exactOptional(),
    timeSeriesId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TimeSeriesOptimalParametersResponse')

const OptimalParameterResponseSchema = z
  .strictObject({
    hyperparameters: ForecastHyperparameterResponseSchema.exactOptional(),
    timeSeries: z.array(TimeSeriesOptimalParametersResponseSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OptimalParameterResponse')

const OutliersRequestSchema = z
  .strictObject({
    data: z.array(PlanningLevelDataDtoSchema).nullable().exactOptional(),
    planningLevelId: z.string(),
    startDate: z.string().openapi({ example: '1/16/2016' }),
  })
  .openapi({ required: ['planningLevelId', 'startDate'] })
  .openapi('OutliersRequest')

const PlanningLevelReRunRequestSchema = z
  .strictObject({
    method: z.string().openapi({ example: 'iCUE1' }),
    params: PlanningLevelInfoRequestSchema.exactOptional(),
    planningLevelId: z.int32(),
  })
  .openapi({ required: ['method', 'planningLevelId'] })
  .openapi('PlanningLevelReRunRequest')

const PlanningLevelRequestSchema = z
  .strictObject({
    data: z.array(PlanningLevelDataDtoSchema).nullable().exactOptional(),
    method: z.string().openapi({ example: 'iCUE1' }),
    override: z.boolean().exactOptional().openapi({ example: false }),
    params: PlanningLevelInfoRequestSchema.exactOptional(),
    planningLevelId: z.string(),
    startDate: z.string().openapi({ example: '1/16/2016' }),
  })
  .openapi({ required: ['method', 'planningLevelId', 'startDate'] })
  .openapi('PlanningLevelRequest')

const PortfolioAbcModelSchema = z
  .strictObject({
    abc12: z.string().exactOptional(),
    abc12Value: z.float64().exactOptional(),
    abc6: z.string().exactOptional(),
    abc6Value: z.float64().exactOptional(),
    abc9: z.string().exactOptional(),
    abc9Value: z.float64().exactOptional(),
    id: z.string().nullable().exactOptional(),
    thresholdA: z.float64().exactOptional(),
    thresholdB: z.float64().exactOptional(),
    thresholdC: z.float64().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PortfolioAbcModel')

const PortfolioModelSchema = z
  .strictObject({
    abc12: z.string().exactOptional(),
    abc12Value: z.float64().exactOptional(),
    abc6: z.string().exactOptional(),
    abc6Value: z.float64().exactOptional(),
    abc9: z.string().exactOptional(),
    abc9Value: z.float64().exactOptional(),
    id: z.string().nullable().exactOptional(),
    thresholdA: z.float64().exactOptional(),
    thresholdB: z.float64().exactOptional(),
    thresholdC: z.float64().exactOptional(),
    thresholdX: z.float64().exactOptional(),
    thresholdY: z.float64().exactOptional(),
    thresholdZ: z.float64().exactOptional(),
    xyz12: z.string().exactOptional(),
    xyz12Value: z.float64().exactOptional(),
    xyz6: z.string().exactOptional(),
    xyz6Value: z.float64().exactOptional(),
    xyz9: z.string().exactOptional(),
    xyz9Value: z.float64().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PortfolioModel')

const PortfolioRequestSchema = z
  .strictObject({
    data: z.array(PlanningLevelDataDtoSchema).nullable().exactOptional(),
    planningLevelId: z.string(),
    startDate: z.string().openapi({ example: '1/16/2016' }),
  })
  .openapi({ required: ['planningLevelId', 'startDate'] })
  .openapi('PortfolioRequest')

const PortfolioXyzModelSchema = z
  .strictObject({
    id: z.string().nullable().exactOptional(),
    thresholdX: z.float64().exactOptional(),
    thresholdY: z.float64().exactOptional(),
    thresholdZ: z.float64().exactOptional(),
    xyz12: z.string().exactOptional(),
    xyz12Value: z.float64().exactOptional(),
    xyz6: z.string().exactOptional(),
    xyz6Value: z.float64().exactOptional(),
    xyz9: z.string().exactOptional(),
    xyz9Value: z.float64().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PortfolioXyzModel')

const RewindHyperparameterResponseSchema = z
  .strictObject({
    costOfError: z.float64().nullable().exactOptional().openapi({ example: 200 }),
    discardData: z.boolean().nullable().exactOptional().openapi({ example: false }),
    errorType: z
      .enum([
        'MeanAbsolutePercentageError',
        'MeanSquaredError',
        'MeanAbsoluteError',
        'MedianAbsoluteDeviation',
        'None',
      ])
      .exactOptional()
      .openapi({ example: 'MeanAbsolutePercentageError' }),
    holdOutPeriod: z.int32().nullable().exactOptional().openapi({ example: 4 }),
    noFcst: z.int32().nullable().exactOptional().openapi({ example: 18 }),
    periodicity: z.int32().nullable().exactOptional().openapi({ example: 12 }),
    rewindTimeFrame: z.int32().exactOptional().openapi({ example: 12 }),
  })
  .openapi({ required: [] })
  .openapi('RewindHyperparameterResponse')

const RewindTimeSeriesResponseSchema = z
  .strictObject({
    customerError: z.float64().nullable().exactOptional(),
    errorDiff: z.float64().nullable().exactOptional(),
    icueError: z.float64().exactOptional(),
    timeSeries: z.string().nullable().exactOptional(),
    totalCost: z.float64().nullable().exactOptional(),
    useIcue: z.boolean().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RewindTimeSeriesResponse')

const RewindResponseSchema = z
  .strictObject({
    hyperparameters: RewindHyperparameterResponseSchema.exactOptional(),
    timeSeries: z.array(RewindTimeSeriesResponseSchema).nullable().exactOptional(),
    totalCost: z.float64().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RewindResponse')

const TimeSeriesOutliersResponseSchema = z
  .strictObject({
    outliers: z.array(OutlierResponseSchema).nullable().exactOptional(),
    timeSeriesId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TimeSeriesOutliersResponse')

const ToggleRequestSchema = z
  .strictObject({ id: z.int32().exactOptional(), isActive: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('ToggleRequest')

const ToggleUserRequestSchema = z
  .strictObject({
    entityId: z.int32().exactOptional(),
    id: z.int32().exactOptional(),
    isActive: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ToggleUserRequest')

export const getAdministrationEntityRoute = createRoute({
  method: 'get',
  path: '/administration/entity',
  tags: ['Administration'],
  summary: 'Get all organizations',
  description: 'This is an iCUE only endpoint or Enterprise feature.',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(EntityResponseSchema) },
        'text/json': { schema: z.array(EntityResponseSchema) },
        'text/plain': { schema: z.array(EntityResponseSchema) },
      },
    },
  },
})

export const putAdministrationEntityRoute = createRoute({
  method: 'put',
  path: '/administration/entity',
  tags: ['Administration'],
  summary: 'Pause organization',
  description: 'This is an iCUE only endpoint or Enterprise feature.',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: ToggleRequestSchema },
        'application/json': { schema: ToggleRequestSchema },
        'text/json': { schema: ToggleRequestSchema },
      },
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const postAdministrationEntityRoute = createRoute({
  method: 'post',
  path: '/administration/entity',
  tags: ['Administration'],
  summary: 'Create organization',
  description: 'This is an iCUE only endpoint or Enterprise feature.',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: NewEntityRequestSchema },
        'application/json': { schema: NewEntityRequestSchema },
        'text/json': { schema: NewEntityRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.uuid() },
        'text/json': { schema: z.uuid() },
        'text/plain': { schema: z.uuid() },
      },
    },
  },
})

export const deleteAdministrationEntityIdRoute = createRoute({
  method: 'delete',
  path: '/administration/entity/{id}',
  tags: ['Administration'],
  summary: 'Delete organization',
  description: 'This is an iCUE only endpoint or Enterprise feature.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postAdministrationFileToJsonRoute = createRoute({
  method: 'post',
  path: '/administration/file-to-json',
  tags: ['Administration'],
  summary: 'Transform data file to JSON format',
  description: 'Transform data file to JSON format',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              File: z.file().openapi({ type: 'string', format: 'binary' }),
              Periodicity: z.preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.int32(),
              ),
            })
            .openapi({ required: ['File', 'Periodicity'] }),
          encoding: { File: {}, Periodicity: {} },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: JsonForecastResponseSchema },
        'text/json': { schema: JsonForecastResponseSchema },
        'text/plain': { schema: JsonForecastResponseSchema },
      },
    },
  },
})

export const getAdministrationModelRoute = createRoute({
  method: 'get',
  path: '/administration/model',
  tags: ['Administration'],
  summary: 'Get all common Models',
  description: 'Returns models that are common for all Organizations',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(MethodDtoSchema) },
        'text/json': { schema: z.array(MethodDtoSchema) },
        'text/plain': { schema: z.array(MethodDtoSchema) },
      },
    },
  },
})

export const postAdministrationModelRoute = createRoute({
  method: 'post',
  path: '/administration/model',
  tags: ['Administration'],
  summary: 'Register new forecasting model',
  description: 'Register new forecasting model for all organziations',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: NewModelRequestSchema },
        'application/json': { schema: NewModelRequestSchema },
        'text/json': { schema: NewModelRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: MethodDtoSchema },
        'text/json': { schema: MethodDtoSchema },
        'text/plain': { schema: MethodDtoSchema },
      },
    },
  },
})

export const getAdministrationModelEntityIdRoute = createRoute({
  method: 'get',
  path: '/administration/model/{entityId}',
  tags: ['Administration'],
  summary: 'Get Models for Organization',
  description: 'Returns models registered for Organization',
  request: {
    params: z.object({
      entityId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'entityId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(MethodDtoSchema) },
        'text/json': { schema: z.array(MethodDtoSchema) },
        'text/plain': { schema: z.array(MethodDtoSchema) },
      },
    },
  },
})

export const postAdministrationModelEntityIdRoute = createRoute({
  method: 'post',
  path: '/administration/model/{entityId}',
  tags: ['Administration'],
  summary: 'Register new forecasting model',
  description: 'Register new forecasting model for single organziation',
  request: {
    params: z.object({
      entityId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'entityId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: NewModelRequestSchema },
        'application/json': { schema: NewModelRequestSchema },
        'text/json': { schema: NewModelRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: MethodDtoSchema },
        'text/json': { schema: MethodDtoSchema },
        'text/plain': { schema: MethodDtoSchema },
      },
    },
  },
})

export const postAdministrationPlanningLevelLockRoute = createRoute({
  method: 'post',
  path: '/administration/planning-level/lock',
  tags: ['Administration'],
  summary: 'Lock planning level',
  description: 'Lock planning level against modification. This is an Enterprise feature.',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const deleteAdministrationPlanningLevelEntityIdIdRoute = createRoute({
  method: 'delete',
  path: '/administration/planning-level/{entityId}/{id}',
  tags: ['Administration'],
  summary: 'Delete planning level',
  description: 'Delete planning level. This is an Enterprise feature.',
  request: {
    params: z.object({
      entityId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'entityId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postAdministrationTokenRoute = createRoute({
  method: 'post',
  path: '/administration/token',
  tags: ['Administration'],
  summary: 'Issue a token',
  description: 'This is an iCUE only endpoint.',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: NewTokenRequestSchema },
        'application/json': { schema: NewTokenRequestSchema },
        'text/json': { schema: NewTokenRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.uuid() },
        'text/json': { schema: z.uuid() },
        'text/plain': { schema: z.uuid() },
      },
    },
  },
})

export const putAdministrationUserRoute = createRoute({
  method: 'put',
  path: '/administration/user',
  tags: ['Administration'],
  summary: 'Update user',
  description: 'Update user',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postAdministrationUserRoute = createRoute({
  method: 'post',
  path: '/administration/user',
  tags: ['Administration'],
  summary: 'Create user',
  description: 'Create new user for entity/organization. This can be done by entity administrator.',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: NewUserRequestSchema },
        'application/json': { schema: NewUserRequestSchema },
        'text/json': { schema: NewUserRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.uuid() },
        'text/json': { schema: z.uuid() },
        'text/plain': { schema: z.uuid() },
      },
    },
  },
})

export const putAdministrationUserLockRoute = createRoute({
  method: 'put',
  path: '/administration/user/lock',
  tags: ['Administration'],
  summary: 'Lock user',
  description: "After lock user won't be able to use iCUE API endpoints.",
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: ToggleUserRequestSchema },
        'application/json': { schema: ToggleUserRequestSchema },
        'text/json': { schema: ToggleUserRequestSchema },
      },
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const getAdministrationUserEntityIdRoute = createRoute({
  method: 'get',
  path: '/administration/user/{entityId}',
  tags: ['Administration'],
  summary: 'Get all users',
  description: 'Get all users',
  request: {
    params: z.object({
      entityId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'entityId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const deleteAdministrationUserEntityIdIdRoute = createRoute({
  method: 'delete',
  path: '/administration/user/{entityId}/{id}',
  tags: ['Administration'],
  summary: 'Delete user',
  description: 'Delete user',
  request: {
    params: z.object({
      entityId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'entityId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postForecastRoute = createRoute({
  method: 'post',
  path: '/forecast',
  tags: ['Insight-Driven Planning (Forecast & Optimization)'],
  summary: 'Forecasts only, for faster results',
  description:
    'To support maximum operation and integration speed, this endpoint only returns the calculated forecast.',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: PlanningLevelRequestSchema },
        'application/json': { schema: PlanningLevelRequestSchema },
        'text/json': { schema: PlanningLevelRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ForecastResponseSchema },
        'text/json': { schema: ForecastResponseSchema },
        'text/plain': { schema: ForecastResponseSchema },
      },
    },
  },
})

export const postForecastAIRoute = createRoute({
  method: 'post',
  path: '/forecast/AI',
  tags: ['Insight-Driven Planning (Forecast & Optimization)'],
  summary: 'Forecast utilizing advanced machine learning models',
  description:
    'Forecast AI is utilizing advanced machine learning models. Please be mindful of enhanced execution times (~1-2s per timeseries).',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: AiPlanningLevelRequestSchema },
        'application/json': { schema: AiPlanningLevelRequestSchema },
        'text/json': { schema: AiPlanningLevelRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: JobResponseSchema },
        'text/json': { schema: JobResponseSchema },
        'text/plain': { schema: JobResponseSchema },
      },
    },
  },
})

export const postForecastAIHistoryAndForecastRoute = createRoute({
  method: 'post',
  path: '/forecast/AI/history-and-forecast',
  tags: ['Insight-Driven Planning (Forecast & Optimization)'],
  summary: 'History and forecast utilizing advanced machine learning models',
  description:
    'History and forecast utilizing advanced machine learning models. Please be mindful of enhanced execution times (~1-2s per timeseries).',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: AiPlanningLevelRequestSchema },
        'application/json': { schema: AiPlanningLevelRequestSchema },
        'text/json': { schema: AiPlanningLevelRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: JobResponseSchema },
        'text/json': { schema: JobResponseSchema },
        'text/plain': { schema: JobResponseSchema },
      },
    },
  },
})

export const postForecastFileToForecastRoute = createRoute({
  method: 'post',
  path: '/forecast/file-to-forecast',
  tags: ['Insight-Driven Planning (Forecast & Optimization)'],
  summary: 'Forecast from file',
  description:
    'Forecast from file allows for quick analysis via Microsoft Excel and CSV file format. Please check documentation link for help.',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              DiscardData: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
              ErrorType: z
                .enum([
                  'MeanAbsolutePercentageError',
                  'MeanSquaredError',
                  'MeanAbsoluteError',
                  'MedianAbsoluteDeviation',
                  'None',
                ])
                .exactOptional(),
              File: z.file().openapi({ type: 'string', format: 'binary' }),
              HoldOutPeriod: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              Method: z
                .enum([
                  'AutoBestPick',
                  'BoxJenkins',
                  'Croston',
                  'DoubleExponentialSmoothing',
                  'HoltWinters',
                  'SingleExponentialSmoothing',
                  'iCUE1',
                  'SimpleMovingAverage',
                ])
                .openapi({ example: 'iCUE1' }),
              NoFcst: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              OutlierDetection: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
              Periodicity: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
            })
            .openapi({ required: ['File', 'Method'] }),
          encoding: {
            DiscardData: {},
            ErrorType: {},
            File: {},
            HoldOutPeriod: {},
            Method: {},
            NoFcst: {},
            OutlierDetection: {},
            Periodicity: {},
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: JobResponseSchema },
        'text/json': { schema: JobResponseSchema },
        'text/plain': { schema: JobResponseSchema },
      },
    },
  },
})

export const postForecastForecastBottomUpRoute = createRoute({
  method: 'post',
  path: '/forecast/forecast-bottom-up',
  tags: ['Insight-Driven Planning (Forecast & Optimization)'],
  summary: 'Bottom up forecasting',
  description:
    'Calculate forecast by timeseries and sum results up to establish forecast for top level timeseries.',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: PlanningLevelRequestSchema },
        'application/json': { schema: PlanningLevelRequestSchema },
        'text/json': { schema: PlanningLevelRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ForecastBottomUpResponseSchema },
        'text/json': { schema: ForecastBottomUpResponseSchema },
        'text/plain': { schema: ForecastBottomUpResponseSchema },
      },
    },
  },
})

export const postForecastForecastTopDownRoute = createRoute({
  method: 'post',
  path: '/forecast/forecast-top-down',
  tags: ['Insight-Driven Planning (Forecast & Optimization)'],
  summary: 'Top down forecasting',
  description:
    'Calculate forecast based on sum of of lower level timeseries and distribute forecast down based on ratios. Great feature for planning levels with dynamic timeseries.',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: PlanningLevelRequestSchema },
        'application/json': { schema: PlanningLevelRequestSchema },
        'text/json': { schema: PlanningLevelRequestSchema },
      },
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const postForecastFullDetailRoute = createRoute({
  method: 'post',
  path: '/forecast/full-detail',
  tags: ['Insight-Driven Planning (Forecast & Optimization)'],
  summary: 'Full forecast result details, including error, trend seasonality and outlier',
  description:
    'Response provides full forecast result details, including error, trend seasonality and outlier. Great for advanced analysis.',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: PlanningLevelRequestSchema },
        'application/json': { schema: PlanningLevelRequestSchema },
        'text/json': { schema: PlanningLevelRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: FullDetailsForecastResponseSchema },
        'text/json': { schema: FullDetailsForecastResponseSchema },
        'text/plain': { schema: FullDetailsForecastResponseSchema },
      },
    },
  },
})

export const postForecastHistoryAndForecastRoute = createRoute({
  method: 'post',
  path: '/forecast/history-and-forecast',
  tags: ['Insight-Driven Planning (Forecast & Optimization)'],
  summary: 'History and forecast for fast timeseries view',
  description:
    'Reponse provides history and forecast per timeseries. Great for visualizing results.',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: PlanningLevelRequestSchema },
        'application/json': { schema: PlanningLevelRequestSchema },
        'text/json': { schema: PlanningLevelRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: HistoryAndForecastResponseSchema },
        'text/json': { schema: HistoryAndForecastResponseSchema },
        'text/plain': { schema: HistoryAndForecastResponseSchema },
      },
    },
  },
})

export const postForecastOptimalParameterRoute = createRoute({
  method: 'post',
  path: '/forecast/optimal-parameter',
  tags: ['Insight-Driven Planning (Forecast & Optimization)'],
  summary: 'Get optimal parameter per method',
  description:
    'Use the optimal parameter sets created by iCUE to set the method parameters of your internal planning system.',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: PlanningLevelRequestSchema },
        'application/json': { schema: PlanningLevelRequestSchema },
        'text/json': { schema: PlanningLevelRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: OptimalParameterResponseSchema },
        'text/json': { schema: OptimalParameterResponseSchema },
        'text/plain': { schema: OptimalParameterResponseSchema },
      },
    },
  },
})

export const postForecastRerunRoute = createRoute({
  method: 'post',
  path: '/forecast/rerun',
  tags: ['Insight-Driven Planning (Forecast & Optimization)'],
  summary: 'Rerun previously uploaded planning level',
  description: 'Rerun previously uploaded planning level.',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: PlanningLevelReRunRequestSchema },
        'application/json': { schema: PlanningLevelReRunRequestSchema },
        'text/json': { schema: PlanningLevelReRunRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ForecastResponseSchema },
        'text/json': { schema: ForecastResponseSchema },
        'text/plain': { schema: ForecastResponseSchema },
      },
    },
  },
})

export const getForecastResultJobIdRoute = createRoute({
  method: 'get',
  path: '/forecast/result/{jobId}',
  tags: ['Insight-Driven Planning (Forecast & Optimization)'],
  summary: 'Forecast result',
  description: 'Get result for forecast job',
  request: {
    params: z.object({
      jobId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getForecastStatusJobIdRoute = createRoute({
  method: 'get',
  path: '/forecast/status/{jobId}',
  tags: ['Insight-Driven Planning (Forecast & Optimization)'],
  summary: 'Forecast status',
  description: 'Get status for forecast job',
  request: {
    params: z.object({
      jobId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getHyperparameterRoute = createRoute({
  method: 'get',
  path: '/hyperparameter',
  tags: ['Hyperparameter Management'],
  summary: 'Get hyperparameters',
  description: 'Get entity global hyperparameters.',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: HyperparameterModelSchema },
        'text/json': { schema: HyperparameterModelSchema },
        'text/plain': { schema: HyperparameterModelSchema },
      },
    },
  },
})

export const postHyperparameterRoute = createRoute({
  method: 'post',
  path: '/hyperparameter',
  tags: ['Hyperparameter Management'],
  summary: 'Set hyperparameters',
  description:
    'Set entity global hyperparameters. Hyperparameters can be overwritten by user and planning level (add to JSON body).',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: HyperparameterModelSchema },
        'application/json': { schema: HyperparameterModelSchema },
        'text/json': { schema: HyperparameterModelSchema },
      },
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const postInventoryAmazonIpiRoute = createRoute({
  method: 'post',
  path: '/inventory/amazon-ipi',
  tags: ['Inventory Management'],
  summary: 'Calculate Amazon Inventory Performance Index (IPI)',
  description: 'Calculate Amazon Inventory Performance Index (IPI)',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postInventoryCaryyingCostRoute = createRoute({
  method: 'post',
  path: '/inventory/caryying-cost',
  tags: ['Inventory Management'],
  summary: 'Carrying Cost',
  description: 'Carrying Cost',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postInventoryEoqRoute = createRoute({
  method: 'post',
  path: '/inventory/eoq',
  tags: ['Inventory Management'],
  summary: 'Calculate economic order quantity',
  description: 'Calculate economic order quantity',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postInventoryFillRateRoute = createRoute({
  method: 'post',
  path: '/inventory/fill-rate',
  tags: ['Inventory Management'],
  summary: 'Calculate fill rate',
  description: 'Calculate fill rate',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postInventoryFinancialImapctForecastAccuracyRoute = createRoute({
  method: 'post',
  path: '/inventory/financial-imapct-forecast-accuracy',
  tags: ['Inventory Management'],
  summary: 'Calculate financial impact of forecast accuracy',
  description: 'Calculate financial impact of forecast accuracy',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postInventoryInventoryTurnoverRoute = createRoute({
  method: 'post',
  path: '/inventory/inventory-turnover',
  tags: ['Inventory Management'],
  summary: 'Inventroy Turn-over',
  description: 'Inventroy Turn-over',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postInventoryLtdRoute = createRoute({
  method: 'post',
  path: '/inventory/ltd',
  tags: ['Inventory Management'],
  summary: 'Calculate lead time demand',
  description: 'Calculate lead time demand',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postInventoryMoqRoute = createRoute({
  method: 'post',
  path: '/inventory/moq',
  tags: ['Inventory Management'],
  summary: 'Calculate minimum order quantity',
  description: 'Calculate minimum order quantity',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postInventoryOptimalServiceLevelRoute = createRoute({
  method: 'post',
  path: '/inventory/optimal-service-level',
  tags: ['Inventory Management'],
  summary: 'Calculate optimal service level',
  description: 'Calculate optimal service level',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postInventoryReorderPointRoute = createRoute({
  method: 'post',
  path: '/inventory/reorder-point',
  tags: ['Inventory Management'],
  summary: 'Re-order Point',
  description: 'Re-order Point',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postInventorySafetyStockRoute = createRoute({
  method: 'post',
  path: '/inventory/safety-stock',
  tags: ['Inventory Management'],
  summary: 'Safety Stock',
  description: 'Safety Stock',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postInventoryServiceLevelRoute = createRoute({
  method: 'post',
  path: '/inventory/service-level',
  tags: ['Inventory Management'],
  summary: 'Calculate service level',
  description: 'Calculate service level',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postInventoryTurnsRoute = createRoute({
  method: 'post',
  path: '/inventory/turns',
  tags: ['Inventory Management'],
  summary: 'Calculate inventory turns',
  description: 'Calculate inventory turns',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postLifecycleManyToOneRoute = createRoute({
  method: 'post',
  path: '/lifecycle/many-to-one',
  tags: ['Product Lifecycle Management'],
  summary: 'Map from old product to new product to create artifical history',
  description:
    'Supports the creation of artificial startup history for new products, based on a flexible mapping of old to new. This is an Enterprise feature.',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: LifecycleManyToOneRequestSchema },
        'application/json': { schema: LifecycleManyToOneRequestSchema },
        'text/json': { schema: LifecycleManyToOneRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: PlanningLevelDataDtoSchema },
        'text/json': { schema: PlanningLevelDataDtoSchema },
        'text/plain': { schema: PlanningLevelDataDtoSchema },
      },
    },
  },
})

export const postLifecycleOneToOneRoute = createRoute({
  method: 'post',
  path: '/lifecycle/one-to-one',
  tags: ['Product Lifecycle Management'],
  summary: 'Map from old product to new product to create artifical history',
  description:
    'Supports the creation of artificial startup history for new products, based on a flexible mapping of old to new. This is an Enterprise feature.',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: LifecycleOneToOneRequestSchema },
        'application/json': { schema: LifecycleOneToOneRequestSchema },
        'text/json': { schema: LifecycleOneToOneRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: PlanningLevelDataDtoSchema },
        'text/json': { schema: PlanningLevelDataDtoSchema },
        'text/plain': { schema: PlanningLevelDataDtoSchema },
      },
    },
  },
})

export const postOutlierRoute = createRoute({
  method: 'post',
  path: '/outlier',
  tags: ['Insight-Driven Planning (Forecast & Optimization)'],
  summary: 'Get outlier',
  description:
    'Identify outliers (single and repetitive spikes, seasonality, masked outliers, trend and level jumps, amongst other topics) and use for cleansing of the history stream prior to forecast claculation. Depending on math model used, this approach often improves results dramatically, as it removes disturbances.',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: OutliersRequestSchema },
        'application/json': { schema: OutliersRequestSchema },
        'text/json': { schema: OutliersRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(TimeSeriesOutliersResponseSchema) },
        'text/json': { schema: z.array(TimeSeriesOutliersResponseSchema) },
        'text/plain': { schema: z.array(TimeSeriesOutliersResponseSchema) },
      },
    },
  },
})

export const postPortfolioRoute = createRoute({
  method: 'post',
  path: '/portfolio',
  tags: ['Portfolio Performance Management'],
  summary: 'ABCxyz Analysis',
  description:
    'Calculate and retrieve results of ABC (pareto analysis) and xyz (Coefficient of variation) per timeseries and planning level. This analysis is a powerful means to estbalish a proper planning cadence, best accuracy messures and optimal hyperparameters for the organization. It provides a balanced and actionable overview of the entire product portfolio.',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: PortfolioRequestSchema },
        'application/json': { schema: PortfolioRequestSchema },
        'text/json': { schema: PortfolioRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(PortfolioModelSchema) },
        'text/json': { schema: z.array(PortfolioModelSchema) },
        'text/plain': { schema: z.array(PortfolioModelSchema) },
      },
    },
  },
})

export const postPortfolioAbcRoute = createRoute({
  method: 'post',
  path: '/portfolio/abc',
  tags: ['Portfolio Performance Management'],
  summary: 'ABC Analysis',
  description:
    'Calculate and retrieve results of ABC (pareto analysis) per timeseries and planning level.',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: PortfolioRequestSchema },
        'application/json': { schema: PortfolioRequestSchema },
        'text/json': { schema: PortfolioRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(PortfolioAbcModelSchema) },
        'text/json': { schema: z.array(PortfolioAbcModelSchema) },
        'text/plain': { schema: z.array(PortfolioAbcModelSchema) },
      },
    },
  },
})

export const postPortfolioFileToPortfolioRoute = createRoute({
  method: 'post',
  path: '/portfolio/file-to-portfolio',
  tags: ['Portfolio Performance Management'],
  summary: 'ABCxyz Analysis',
  description:
    'Calculate and retrieve results of ABC (pareto analysis) and xyz (Coefficient of variation) per timeseries and planning level. This analysis is a powerful means to estbalish a proper planning cadence, best accuracy messures and optimal hyperparameters for the organization. It provides a balanced and actionable overview of the entire product portfolio.',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({ File: z.file().openapi({ type: 'string', format: 'binary' }) })
            .openapi({ required: ['File'] }),
          encoding: { File: {} },
        },
      },
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const postPortfolioForecastPerformanceRewindRoute = createRoute({
  method: 'post',
  path: '/portfolio/forecast-performance-rewind',
  tags: ['Portfolio Performance Management'],
  summary:
    'Planning level rewind to calculate and measure performance potential (internal versus iCUE).',
  description:
    'Planning level rewind to calculate and measure performance potential (internal versus iCUE).',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: ForecastPerformanceRequestSchema },
        'application/json': { schema: ForecastPerformanceRequestSchema },
        'text/json': { schema: ForecastPerformanceRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: RewindResponseSchema },
        'text/json': { schema: RewindResponseSchema },
        'text/plain': { schema: RewindResponseSchema },
      },
    },
  },
})

export const postPortfolioXyzRoute = createRoute({
  method: 'post',
  path: '/portfolio/xyz',
  tags: ['Portfolio Performance Management'],
  summary: 'xyz Analysis',
  description:
    'Calculate and retrieve results of xyz (Coefficient of variation) per timeseries and planning level.',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: PortfolioRequestSchema },
        'application/json': { schema: PortfolioRequestSchema },
        'text/json': { schema: PortfolioRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(PortfolioXyzModelSchema) },
        'text/json': { schema: z.array(PortfolioXyzModelSchema) },
        'text/plain': { schema: z.array(PortfolioXyzModelSchema) },
      },
    },
  },
})

export const postPricingBundlePricingRoute = createRoute({
  method: 'post',
  path: '/pricing/bundle-pricing',
  tags: ['Pricing'],
  summary: 'Bundle pricing',
  description: 'Bundle pricing',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postPricingCompetitivePricingRoute = createRoute({
  method: 'post',
  path: '/pricing/competitive-pricing',
  tags: ['Pricing'],
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postPricingCostPlusPricingRoute = createRoute({
  method: 'post',
  path: '/pricing/cost-plus-pricing',
  tags: ['Pricing'],
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postPricingDecoyPricingRoute = createRoute({
  method: 'post',
  path: '/pricing/decoy-pricing',
  tags: ['Pricing'],
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postPricingOddPricingRoute = createRoute({
  method: 'post',
  path: '/pricing/odd-pricing',
  tags: ['Pricing'],
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postPricingPenetrationPricingRoute = createRoute({
  method: 'post',
  path: '/pricing/penetration-pricing',
  tags: ['Pricing'],
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postPricingPriceElasticityOfDemandRoute = createRoute({
  method: 'post',
  path: '/pricing/price-elasticity-of-demand',
  tags: ['Pricing'],
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getReportPerformanceSkuRationalizationPlanningLevelIdRoute = createRoute({
  method: 'get',
  path: '/report/performance/sku-rationalization/{planningLevelId}',
  tags: ['Reporting and Monitoring'],
  summary: 'SKU rationalization report',
  description: 'SKU rationalization report',
  request: {
    params: z.object({
      planningLevelId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'planningLevelId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(PortfolioModelSchema) },
        'text/json': { schema: z.array(PortfolioModelSchema) },
        'text/plain': { schema: z.array(PortfolioModelSchema) },
      },
    },
  },
})

export const getReportPerformancePlanningLevelIdRoute = createRoute({
  method: 'get',
  path: '/report/performance/{planningLevelId}',
  tags: ['Reporting and Monitoring'],
  summary: 'Month over month performance per planning level',
  description: 'Month over month performance per planning level',
  request: {
    params: z.object({
      planningLevelId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'planningLevelId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getReportPlanningLevelOrganizationRoute = createRoute({
  method: 'get',
  path: '/report/planning-level/organization',
  tags: ['Reporting and Monitoring'],
  summary: 'Get list of plannign levels by organization',
  description: 'Get list of plannign levels by organization',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getReportPlanningLevelUserRoute = createRoute({
  method: 'get',
  path: '/report/planning-level/user',
  tags: ['Reporting and Monitoring'],
  summary: 'Get list of plannign levels by user',
  description: 'Get list of plannign levels by user',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getReportUserRoute = createRoute({
  method: 'get',
  path: '/report/user',
  tags: ['Reporting and Monitoring'],
  summary: 'Get usage statistics per user',
  description: 'Get usage statistics per user',
  request: {
    headers: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Authentication Token',
            in: 'header',
            name: 'Token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})
