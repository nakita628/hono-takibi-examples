type ProjectReference = { projectId?: string | undefined }
type ProjectList = {
  etag?: string | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  projects?:
    | {
        friendlyName?: string | undefined
        id?: string | undefined
        kind?: string | undefined
        numericId?: string | undefined
        projectReference?: ProjectReference | undefined
      }[]
    | undefined
  totalItems?: number | undefined
}
type DatasetReference = { datasetId?: string | undefined; projectId?: string | undefined }
type DatasetList = {
  datasets?:
    | {
        datasetReference?: DatasetReference | undefined
        friendlyName?: string | undefined
        id?: string | undefined
        kind?: string | undefined
        labels?: { [x: string]: string } | undefined
        location?: string | undefined
      }[]
    | undefined
  etag?: string | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type DatasetAccessEntry = {
  dataset?: DatasetReference | undefined
  targetTypes?: ('TARGET_TYPE_UNSPECIFIED' | 'VIEWS' | 'ROUTINES')[] | undefined
}
type RoutineReference = {
  datasetId?: string | undefined
  projectId?: string | undefined
  routineId?: string | undefined
}
type TableReference = {
  datasetId?: string | undefined
  projectId?: string | undefined
  tableId?: string | undefined
}
type EncryptionConfiguration = { kmsKeyName?: string | undefined }
type ExternalDatasetReference = {
  connection?: string | undefined
  externalSource?: string | undefined
}
type LinkedDatasetSource = { sourceDataset?: DatasetReference | undefined }
type Dataset = {
  access?:
    | {
        dataset?: DatasetAccessEntry | undefined
        domain?: string | undefined
        groupByEmail?: string | undefined
        iamMember?: string | undefined
        role?: string | undefined
        routine?: RoutineReference | undefined
        specialGroup?: string | undefined
        userByEmail?: string | undefined
        view?: TableReference | undefined
      }[]
    | undefined
  creationTime?: string | undefined
  datasetReference?: DatasetReference | undefined
  defaultCollation?: string | undefined
  defaultEncryptionConfiguration?: EncryptionConfiguration | undefined
  defaultPartitionExpirationMs?: string | undefined
  defaultRoundingMode?:
    | 'ROUNDING_MODE_UNSPECIFIED'
    | 'ROUND_HALF_AWAY_FROM_ZERO'
    | 'ROUND_HALF_EVEN'
    | undefined
  defaultTableExpirationMs?: string | undefined
  description?: string | undefined
  etag?: string | undefined
  externalDatasetReference?: ExternalDatasetReference | undefined
  friendlyName?: string | undefined
  id?: string | undefined
  isCaseInsensitive?: boolean | undefined
  kind?: string | undefined
  labels?: { [x: string]: string } | undefined
  lastModifiedTime?: string | undefined
  linkedDatasetSource?: LinkedDatasetSource | undefined
  location?: string | undefined
  maxTimeTravelHours?: string | undefined
  satisfiesPzi?: boolean | undefined
  satisfiesPzs?: boolean | undefined
  selfLink?: string | undefined
  storageBillingModel?: 'STORAGE_BILLING_MODEL_UNSPECIFIED' | 'LOGICAL' | 'PHYSICAL' | undefined
  tags?: { tagKey?: string | undefined; tagValue?: string | undefined }[] | undefined
  type?: string | undefined
}
type StandardSqlStructType = { fields?: StandardSqlField[] | undefined }
type StandardSqlDataType = {
  arrayElementType?: StandardSqlDataType | undefined
  rangeElementType?: StandardSqlDataType | undefined
  structType?: StandardSqlStructType | undefined
  typeKind?:
    | 'TYPE_KIND_UNSPECIFIED'
    | 'INT64'
    | 'BOOL'
    | 'FLOAT64'
    | 'STRING'
    | 'BYTES'
    | 'TIMESTAMP'
    | 'DATE'
    | 'TIME'
    | 'DATETIME'
    | 'INTERVAL'
    | 'GEOGRAPHY'
    | 'NUMERIC'
    | 'BIGNUMERIC'
    | 'JSON'
    | 'ARRAY'
    | 'STRUCT'
    | 'RANGE'
    | undefined
}
type StandardSqlField = { name?: string | undefined; type?: StandardSqlDataType | undefined }
type StringHparamSearchSpace = { candidates?: string[] | undefined }
type IntCandidates = { candidates?: string[] | undefined }
type IntRange = { max?: string | undefined; min?: string | undefined }
type IntHparamSearchSpace = { candidates?: IntCandidates | undefined; range?: IntRange | undefined }
type DoubleCandidates = { candidates?: number[] | undefined }
type DoubleRange = { max?: number | undefined; min?: number | undefined }
type DoubleHparamSearchSpace = {
  candidates?: DoubleCandidates | undefined
  range?: DoubleRange | undefined
}
type IntArray = { elements?: string[] | undefined }
type IntArrayHparamSearchSpace = { candidates?: IntArray[] | undefined }
type HparamSearchSpaces = {
  activationFn?: StringHparamSearchSpace | undefined
  batchSize?: IntHparamSearchSpace | undefined
  boosterType?: StringHparamSearchSpace | undefined
  colsampleBylevel?: DoubleHparamSearchSpace | undefined
  colsampleBynode?: DoubleHparamSearchSpace | undefined
  colsampleBytree?: DoubleHparamSearchSpace | undefined
  dartNormalizeType?: StringHparamSearchSpace | undefined
  dropout?: DoubleHparamSearchSpace | undefined
  hiddenUnits?: IntArrayHparamSearchSpace | undefined
  l1Reg?: DoubleHparamSearchSpace | undefined
  l2Reg?: DoubleHparamSearchSpace | undefined
  learnRate?: DoubleHparamSearchSpace | undefined
  maxTreeDepth?: IntHparamSearchSpace | undefined
  minSplitLoss?: DoubleHparamSearchSpace | undefined
  minTreeChildWeight?: IntHparamSearchSpace | undefined
  numClusters?: IntHparamSearchSpace | undefined
  numFactors?: IntHparamSearchSpace | undefined
  numParallelTree?: IntHparamSearchSpace | undefined
  optimizer?: StringHparamSearchSpace | undefined
  subsample?: DoubleHparamSearchSpace | undefined
  treeMethod?: StringHparamSearchSpace | undefined
  walsAlpha?: DoubleHparamSearchSpace | undefined
}
type ArimaFittingMetrics = {
  aic?: number | undefined
  logLikelihood?: number | undefined
  variance?: number | undefined
}
type ArimaOrder = { d?: string | undefined; p?: string | undefined; q?: string | undefined }
type ArimaSingleModelForecastingMetrics = {
  arimaFittingMetrics?: ArimaFittingMetrics | undefined
  hasDrift?: boolean | undefined
  hasHolidayEffect?: boolean | undefined
  hasSpikesAndDips?: boolean | undefined
  hasStepChanges?: boolean | undefined
  nonSeasonalOrder?: ArimaOrder | undefined
  seasonalPeriods?:
    | (
        | 'SEASONAL_PERIOD_TYPE_UNSPECIFIED'
        | 'NO_SEASONALITY'
        | 'DAILY'
        | 'WEEKLY'
        | 'MONTHLY'
        | 'QUARTERLY'
        | 'YEARLY'
      )[]
    | undefined
  timeSeriesId?: string | undefined
  timeSeriesIds?: string[] | undefined
}
type ArimaForecastingMetrics = {
  arimaFittingMetrics?: ArimaFittingMetrics[] | undefined
  arimaSingleModelForecastingMetrics?: ArimaSingleModelForecastingMetrics[] | undefined
  hasDrift?: boolean[] | undefined
  nonSeasonalOrder?: ArimaOrder[] | undefined
  seasonalPeriods?:
    | (
        | 'SEASONAL_PERIOD_TYPE_UNSPECIFIED'
        | 'NO_SEASONALITY'
        | 'DAILY'
        | 'WEEKLY'
        | 'MONTHLY'
        | 'QUARTERLY'
        | 'YEARLY'
      )[]
    | undefined
  timeSeriesId?: string[] | undefined
}
type AggregateClassificationMetrics = {
  accuracy?: number | undefined
  f1Score?: number | undefined
  logLoss?: number | undefined
  precision?: number | undefined
  recall?: number | undefined
  rocAuc?: number | undefined
  threshold?: number | undefined
}
type BinaryConfusionMatrix = {
  accuracy?: number | undefined
  f1Score?: number | undefined
  falseNegatives?: string | undefined
  falsePositives?: string | undefined
  positiveClassThreshold?: number | undefined
  precision?: number | undefined
  recall?: number | undefined
  trueNegatives?: string | undefined
  truePositives?: string | undefined
}
type BinaryClassificationMetrics = {
  aggregateClassificationMetrics?: AggregateClassificationMetrics | undefined
  binaryConfusionMatrixList?: BinaryConfusionMatrix[] | undefined
  negativeLabel?: string | undefined
  positiveLabel?: string | undefined
}
type CategoryCount = { category?: string | undefined; count?: string | undefined }
type CategoricalValue = { categoryCounts?: CategoryCount[] | undefined }
type FeatureValue = {
  categoricalValue?: CategoricalValue | undefined
  featureColumn?: string | undefined
  numericalValue?: number | undefined
}
type Cluster = {
  centroidId?: string | undefined
  count?: string | undefined
  featureValues?: FeatureValue[] | undefined
}
type ClusteringMetrics = {
  clusters?: Cluster[] | undefined
  daviesBouldinIndex?: number | undefined
  meanSquaredDistance?: number | undefined
}
type DimensionalityReductionMetrics = { totalExplainedVarianceRatio?: number | undefined }
type Entry = { itemCount?: string | undefined; predictedLabel?: string | undefined }
type Row = { actualLabel?: string | undefined; entries?: Entry[] | undefined }
type ConfusionMatrix = { confidenceThreshold?: number | undefined; rows?: Row[] | undefined }
type MultiClassClassificationMetrics = {
  aggregateClassificationMetrics?: AggregateClassificationMetrics | undefined
  confusionMatrixList?: ConfusionMatrix[] | undefined
}
type RankingMetrics = {
  averageRank?: number | undefined
  meanAveragePrecision?: number | undefined
  meanSquaredError?: number | undefined
  normalizedDiscountedCumulativeGain?: number | undefined
}
type RegressionMetrics = {
  meanAbsoluteError?: number | undefined
  meanSquaredError?: number | undefined
  meanSquaredLogError?: number | undefined
  medianAbsoluteError?: number | undefined
  rSquared?: number | undefined
}
type EvaluationMetrics = {
  arimaForecastingMetrics?: ArimaForecastingMetrics | undefined
  binaryClassificationMetrics?: BinaryClassificationMetrics | undefined
  clusteringMetrics?: ClusteringMetrics | undefined
  dimensionalityReductionMetrics?: DimensionalityReductionMetrics | undefined
  multiClassClassificationMetrics?: MultiClassClassificationMetrics | undefined
  rankingMetrics?: RankingMetrics | undefined
  regressionMetrics?: RegressionMetrics | undefined
}
type TrainingOptions = {
  activationFn?: string | undefined
  adjustStepChanges?: boolean | undefined
  approxGlobalFeatureContrib?: boolean | undefined
  autoArima?: boolean | undefined
  autoArimaMaxOrder?: string | undefined
  autoArimaMinOrder?: string | undefined
  autoClassWeights?: boolean | undefined
  batchSize?: string | undefined
  boosterType?: 'BOOSTER_TYPE_UNSPECIFIED' | 'GBTREE' | 'DART' | undefined
  budgetHours?: number | undefined
  calculatePValues?: boolean | undefined
  categoryEncodingMethod?:
    | 'ENCODING_METHOD_UNSPECIFIED'
    | 'ONE_HOT_ENCODING'
    | 'LABEL_ENCODING'
    | 'DUMMY_ENCODING'
    | undefined
  cleanSpikesAndDips?: boolean | undefined
  colorSpace?: 'COLOR_SPACE_UNSPECIFIED' | 'RGB' | 'HSV' | 'YIQ' | 'YUV' | 'GRAYSCALE' | undefined
  colsampleBylevel?: number | undefined
  colsampleBynode?: number | undefined
  colsampleBytree?: number | undefined
  dartNormalizeType?: 'DART_NORMALIZE_TYPE_UNSPECIFIED' | 'TREE' | 'FOREST' | undefined
  dataFrequency?:
    | 'DATA_FREQUENCY_UNSPECIFIED'
    | 'AUTO_FREQUENCY'
    | 'YEARLY'
    | 'QUARTERLY'
    | 'MONTHLY'
    | 'WEEKLY'
    | 'DAILY'
    | 'HOURLY'
    | 'PER_MINUTE'
    | undefined
  dataSplitColumn?: string | undefined
  dataSplitEvalFraction?: number | undefined
  dataSplitMethod?:
    | 'DATA_SPLIT_METHOD_UNSPECIFIED'
    | 'RANDOM'
    | 'CUSTOM'
    | 'SEQUENTIAL'
    | 'NO_SPLIT'
    | 'AUTO_SPLIT'
    | undefined
  decomposeTimeSeries?: boolean | undefined
  distanceType?: 'DISTANCE_TYPE_UNSPECIFIED' | 'EUCLIDEAN' | 'COSINE' | undefined
  dropout?: number | undefined
  earlyStop?: boolean | undefined
  enableGlobalExplain?: boolean | undefined
  feedbackType?: 'FEEDBACK_TYPE_UNSPECIFIED' | 'IMPLICIT' | 'EXPLICIT' | undefined
  fitIntercept?: boolean | undefined
  hiddenUnits?: string[] | undefined
  holidayRegion?:
    | 'HOLIDAY_REGION_UNSPECIFIED'
    | 'GLOBAL'
    | 'NA'
    | 'JAPAC'
    | 'EMEA'
    | 'LAC'
    | 'AE'
    | 'AR'
    | 'AT'
    | 'AU'
    | 'BE'
    | 'BR'
    | 'CA'
    | 'CH'
    | 'CL'
    | 'CN'
    | 'CO'
    | 'CS'
    | 'CZ'
    | 'DE'
    | 'DK'
    | 'DZ'
    | 'EC'
    | 'EE'
    | 'EG'
    | 'ES'
    | 'FI'
    | 'FR'
    | 'GB'
    | 'GR'
    | 'HK'
    | 'HU'
    | 'ID'
    | 'IE'
    | 'IL'
    | 'IN'
    | 'IR'
    | 'IT'
    | 'JP'
    | 'KR'
    | 'LV'
    | 'MA'
    | 'MX'
    | 'MY'
    | 'NG'
    | 'NL'
    | 'NO'
    | 'NZ'
    | 'PE'
    | 'PH'
    | 'PK'
    | 'PL'
    | 'PT'
    | 'RO'
    | 'RS'
    | 'RU'
    | 'SA'
    | 'SE'
    | 'SG'
    | 'SI'
    | 'SK'
    | 'TH'
    | 'TR'
    | 'TW'
    | 'UA'
    | 'US'
    | 'VE'
    | 'VN'
    | 'ZA'
    | undefined
  holidayRegions?:
    | (
        | 'HOLIDAY_REGION_UNSPECIFIED'
        | 'GLOBAL'
        | 'NA'
        | 'JAPAC'
        | 'EMEA'
        | 'LAC'
        | 'AE'
        | 'AR'
        | 'AT'
        | 'AU'
        | 'BE'
        | 'BR'
        | 'CA'
        | 'CH'
        | 'CL'
        | 'CN'
        | 'CO'
        | 'CS'
        | 'CZ'
        | 'DE'
        | 'DK'
        | 'DZ'
        | 'EC'
        | 'EE'
        | 'EG'
        | 'ES'
        | 'FI'
        | 'FR'
        | 'GB'
        | 'GR'
        | 'HK'
        | 'HU'
        | 'ID'
        | 'IE'
        | 'IL'
        | 'IN'
        | 'IR'
        | 'IT'
        | 'JP'
        | 'KR'
        | 'LV'
        | 'MA'
        | 'MX'
        | 'MY'
        | 'NG'
        | 'NL'
        | 'NO'
        | 'NZ'
        | 'PE'
        | 'PH'
        | 'PK'
        | 'PL'
        | 'PT'
        | 'RO'
        | 'RS'
        | 'RU'
        | 'SA'
        | 'SE'
        | 'SG'
        | 'SI'
        | 'SK'
        | 'TH'
        | 'TR'
        | 'TW'
        | 'UA'
        | 'US'
        | 'VE'
        | 'VN'
        | 'ZA'
      )[]
    | undefined
  horizon?: string | undefined
  hparamTuningObjectives?:
    | (
        | 'HPARAM_TUNING_OBJECTIVE_UNSPECIFIED'
        | 'MEAN_ABSOLUTE_ERROR'
        | 'MEAN_SQUARED_ERROR'
        | 'MEAN_SQUARED_LOG_ERROR'
        | 'MEDIAN_ABSOLUTE_ERROR'
        | 'R_SQUARED'
        | 'EXPLAINED_VARIANCE'
        | 'PRECISION'
        | 'RECALL'
        | 'ACCURACY'
        | 'F1_SCORE'
        | 'LOG_LOSS'
        | 'ROC_AUC'
        | 'DAVIES_BOULDIN_INDEX'
        | 'MEAN_AVERAGE_PRECISION'
        | 'NORMALIZED_DISCOUNTED_CUMULATIVE_GAIN'
        | 'AVERAGE_RANK'
      )[]
    | undefined
  includeDrift?: boolean | undefined
  initialLearnRate?: number | undefined
  inputLabelColumns?: string[] | undefined
  instanceWeightColumn?: string | undefined
  integratedGradientsNumSteps?: string | undefined
  itemColumn?: string | undefined
  kmeansInitializationColumn?: string | undefined
  kmeansInitializationMethod?:
    | 'KMEANS_INITIALIZATION_METHOD_UNSPECIFIED'
    | 'RANDOM'
    | 'CUSTOM'
    | 'KMEANS_PLUS_PLUS'
    | undefined
  l1RegActivation?: number | undefined
  l1Regularization?: number | undefined
  l2Regularization?: number | undefined
  labelClassWeights?: { [x: string]: number } | undefined
  learnRate?: number | undefined
  learnRateStrategy?: 'LEARN_RATE_STRATEGY_UNSPECIFIED' | 'LINE_SEARCH' | 'CONSTANT' | undefined
  lossType?: 'LOSS_TYPE_UNSPECIFIED' | 'MEAN_SQUARED_LOSS' | 'MEAN_LOG_LOSS' | undefined
  maxIterations?: string | undefined
  maxParallelTrials?: string | undefined
  maxTimeSeriesLength?: string | undefined
  maxTreeDepth?: string | undefined
  minRelativeProgress?: number | undefined
  minSplitLoss?: number | undefined
  minTimeSeriesLength?: string | undefined
  minTreeChildWeight?: string | undefined
  modelRegistry?: 'MODEL_REGISTRY_UNSPECIFIED' | 'VERTEX_AI' | undefined
  modelUri?: string | undefined
  nonSeasonalOrder?: ArimaOrder | undefined
  numClusters?: string | undefined
  numFactors?: string | undefined
  numParallelTree?: string | undefined
  numPrincipalComponents?: string | undefined
  numTrials?: string | undefined
  optimizationStrategy?:
    | 'OPTIMIZATION_STRATEGY_UNSPECIFIED'
    | 'BATCH_GRADIENT_DESCENT'
    | 'NORMAL_EQUATION'
    | undefined
  optimizer?: string | undefined
  pcaExplainedVarianceRatio?: number | undefined
  pcaSolver?: 'UNSPECIFIED' | 'FULL' | 'RANDOMIZED' | 'AUTO' | undefined
  sampledShapleyNumPaths?: string | undefined
  scaleFeatures?: boolean | undefined
  standardizeFeatures?: boolean | undefined
  subsample?: number | undefined
  tfVersion?: string | undefined
  timeSeriesDataColumn?: string | undefined
  timeSeriesIdColumn?: string | undefined
  timeSeriesIdColumns?: string[] | undefined
  timeSeriesLengthFraction?: number | undefined
  timeSeriesTimestampColumn?: string | undefined
  treeMethod?: 'TREE_METHOD_UNSPECIFIED' | 'AUTO' | 'EXACT' | 'APPROX' | 'HIST' | undefined
  trendSmoothingWindowSize?: string | undefined
  userColumn?: string | undefined
  vertexAiModelVersionAliases?: string[] | undefined
  walsAlpha?: number | undefined
  warmStart?: boolean | undefined
  xgboostVersion?: string | undefined
}
type HparamTuningTrial = {
  endTimeMs?: string | undefined
  errorMessage?: string | undefined
  evalLoss?: number | undefined
  evaluationMetrics?: EvaluationMetrics | undefined
  hparamTuningEvaluationMetrics?: EvaluationMetrics | undefined
  hparams?: TrainingOptions | undefined
  startTimeMs?: string | undefined
  status?:
    | 'TRIAL_STATUS_UNSPECIFIED'
    | 'NOT_STARTED'
    | 'RUNNING'
    | 'SUCCEEDED'
    | 'FAILED'
    | 'INFEASIBLE'
    | 'STOPPED_EARLY'
    | undefined
  trainingLoss?: number | undefined
  trialId?: string | undefined
}
type ModelReference = {
  datasetId?: string | undefined
  modelId?: string | undefined
  projectId?: string | undefined
}
type RemoteModelInfo = {
  connection?: string | undefined
  endpoint?: string | undefined
  maxBatchingRows?: string | undefined
  remoteModelVersion?: string | undefined
  remoteServiceType?:
    | 'REMOTE_SERVICE_TYPE_UNSPECIFIED'
    | 'CLOUD_AI_TRANSLATE_V3'
    | 'CLOUD_AI_VISION_V1'
    | 'CLOUD_AI_NATURAL_LANGUAGE_V1'
    | 'CLOUD_AI_SPEECH_TO_TEXT_V2'
    | undefined
  speechRecognizer?: string | undefined
}
type Explanation = { attribution?: number | undefined; featureName?: string | undefined }
type GlobalExplanation = {
  classLabel?: string | undefined
  explanations?: Explanation[] | undefined
}
type DataSplitResult = {
  evaluationTable?: TableReference | undefined
  testTable?: TableReference | undefined
  trainingTable?: TableReference | undefined
}
type ArimaCoefficients = {
  autoRegressiveCoefficients?: number[] | undefined
  interceptCoefficient?: number | undefined
  movingAverageCoefficients?: number[] | undefined
}
type ArimaModelInfo = {
  arimaCoefficients?: ArimaCoefficients | undefined
  arimaFittingMetrics?: ArimaFittingMetrics | undefined
  hasDrift?: boolean | undefined
  hasHolidayEffect?: boolean | undefined
  hasSpikesAndDips?: boolean | undefined
  hasStepChanges?: boolean | undefined
  nonSeasonalOrder?: ArimaOrder | undefined
  seasonalPeriods?:
    | (
        | 'SEASONAL_PERIOD_TYPE_UNSPECIFIED'
        | 'NO_SEASONALITY'
        | 'DAILY'
        | 'WEEKLY'
        | 'MONTHLY'
        | 'QUARTERLY'
        | 'YEARLY'
      )[]
    | undefined
  timeSeriesId?: string | undefined
  timeSeriesIds?: string[] | undefined
}
type ArimaResult = {
  arimaModelInfo?: ArimaModelInfo[] | undefined
  seasonalPeriods?:
    | (
        | 'SEASONAL_PERIOD_TYPE_UNSPECIFIED'
        | 'NO_SEASONALITY'
        | 'DAILY'
        | 'WEEKLY'
        | 'MONTHLY'
        | 'QUARTERLY'
        | 'YEARLY'
      )[]
    | undefined
}
type ClusterInfo = {
  centroidId?: string | undefined
  clusterRadius?: number | undefined
  clusterSize?: string | undefined
}
type PrincipalComponentInfo = {
  cumulativeExplainedVarianceRatio?: number | undefined
  explainedVariance?: number | undefined
  explainedVarianceRatio?: number | undefined
  principalComponentId?: string | undefined
}
type IterationResult = {
  arimaResult?: ArimaResult | undefined
  clusterInfos?: ClusterInfo[] | undefined
  durationMs?: string | undefined
  evalLoss?: number | undefined
  index?: number | undefined
  learnRate?: number | undefined
  principalComponentInfos?: PrincipalComponentInfo[] | undefined
  trainingLoss?: number | undefined
}
type TrainingRun = {
  classLevelGlobalExplanations?: GlobalExplanation[] | undefined
  dataSplitResult?: DataSplitResult | undefined
  evaluationMetrics?: EvaluationMetrics | undefined
  modelLevelGlobalExplanation?: GlobalExplanation | undefined
  results?: IterationResult[] | undefined
  startTime?: string | undefined
  trainingOptions?: TrainingOptions | undefined
  trainingStartTime?: string | undefined
  vertexAiModelId?: string | undefined
  vertexAiModelVersion?: string | undefined
}
type TransformColumn = {
  name?: string | undefined
  transformSql?: string | undefined
  type?: StandardSqlDataType | undefined
}
type Model = {
  bestTrialId?: string | undefined
  creationTime?: string | undefined
  defaultTrialId?: string | undefined
  description?: string | undefined
  encryptionConfiguration?: EncryptionConfiguration | undefined
  etag?: string | undefined
  expirationTime?: string | undefined
  featureColumns?: StandardSqlField[] | undefined
  friendlyName?: string | undefined
  hparamSearchSpaces?: HparamSearchSpaces | undefined
  hparamTrials?: HparamTuningTrial[] | undefined
  labelColumns?: StandardSqlField[] | undefined
  labels?: { [x: string]: string } | undefined
  lastModifiedTime?: string | undefined
  location?: string | undefined
  modelReference?: ModelReference | undefined
  modelType?:
    | 'MODEL_TYPE_UNSPECIFIED'
    | 'LINEAR_REGRESSION'
    | 'LOGISTIC_REGRESSION'
    | 'KMEANS'
    | 'MATRIX_FACTORIZATION'
    | 'DNN_CLASSIFIER'
    | 'TENSORFLOW'
    | 'DNN_REGRESSOR'
    | 'XGBOOST'
    | 'BOOSTED_TREE_REGRESSOR'
    | 'BOOSTED_TREE_CLASSIFIER'
    | 'ARIMA'
    | 'AUTOML_REGRESSOR'
    | 'AUTOML_CLASSIFIER'
    | 'PCA'
    | 'DNN_LINEAR_COMBINED_CLASSIFIER'
    | 'DNN_LINEAR_COMBINED_REGRESSOR'
    | 'AUTOENCODER'
    | 'ARIMA_PLUS'
    | 'ARIMA_PLUS_XREG'
    | 'RANDOM_FOREST_REGRESSOR'
    | 'RANDOM_FOREST_CLASSIFIER'
    | 'TENSORFLOW_LITE'
    | 'ONNX'
    | undefined
  optimalTrialIds?: string[] | undefined
  remoteModelInfo?: RemoteModelInfo | undefined
  trainingRuns?: TrainingRun[] | undefined
  transformColumns?: TransformColumn[] | undefined
}
type ListModelsResponse = { models?: Model[] | undefined; nextPageToken?: string | undefined }
type Argument = {
  argumentKind?: 'ARGUMENT_KIND_UNSPECIFIED' | 'FIXED_TYPE' | 'ANY_TYPE' | undefined
  dataType?: StandardSqlDataType | undefined
  isAggregate?: boolean | undefined
  mode?: 'MODE_UNSPECIFIED' | 'IN' | 'OUT' | 'INOUT' | undefined
  name?: string | undefined
}
type RemoteFunctionOptions = {
  connection?: string | undefined
  endpoint?: string | undefined
  maxBatchingRows?: string | undefined
  userDefinedContext?: { [x: string]: string } | undefined
}
type StandardSqlTableType = { columns?: StandardSqlField[] | undefined }
type SparkOptions = {
  archiveUris?: string[] | undefined
  connection?: string | undefined
  containerImage?: string | undefined
  fileUris?: string[] | undefined
  jarUris?: string[] | undefined
  mainClass?: string | undefined
  mainFileUri?: string | undefined
  properties?: { [x: string]: string } | undefined
  pyFileUris?: string[] | undefined
  runtimeVersion?: string | undefined
}
type Routine = {
  arguments?: Argument[] | undefined
  creationTime?: string | undefined
  dataGovernanceType?: 'DATA_GOVERNANCE_TYPE_UNSPECIFIED' | 'DATA_MASKING' | undefined
  definitionBody?: string | undefined
  description?: string | undefined
  determinismLevel?:
    | 'DETERMINISM_LEVEL_UNSPECIFIED'
    | 'DETERMINISTIC'
    | 'NOT_DETERMINISTIC'
    | undefined
  etag?: string | undefined
  importedLibraries?: string[] | undefined
  language?: 'LANGUAGE_UNSPECIFIED' | 'SQL' | 'JAVASCRIPT' | 'PYTHON' | 'JAVA' | 'SCALA' | undefined
  lastModifiedTime?: string | undefined
  remoteFunctionOptions?: RemoteFunctionOptions | undefined
  returnTableType?: StandardSqlTableType | undefined
  returnType?: StandardSqlDataType | undefined
  routineReference?: RoutineReference | undefined
  routineType?:
    | 'ROUTINE_TYPE_UNSPECIFIED'
    | 'SCALAR_FUNCTION'
    | 'PROCEDURE'
    | 'TABLE_VALUED_FUNCTION'
    | 'AGGREGATE_FUNCTION'
    | undefined
  securityMode?: 'SECURITY_MODE_UNSPECIFIED' | 'DEFINER' | 'INVOKER' | undefined
  sparkOptions?: SparkOptions | undefined
  strictMode?: boolean | undefined
}
type ListRoutinesResponse = { nextPageToken?: string | undefined; routines?: Routine[] | undefined }
type Clustering = { fields?: string[] | undefined }
type RangePartitioning = {
  field?: string | undefined
  range?:
    | { end?: string | undefined; interval?: string | undefined; start?: string | undefined }
    | undefined
}
type TimePartitioning = {
  expirationMs?: string | undefined
  field?: string | undefined
  requirePartitionFilter?: boolean | undefined
  type?: string | undefined
}
type AggregationThresholdPolicy = {
  privacyUnitColumns?: string[] | undefined
  threshold?: string | undefined
}
type PrivacyPolicy = { aggregationThresholdPolicy?: AggregationThresholdPolicy | undefined }
type TableList = {
  etag?: string | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  tables?:
    | {
        clustering?: Clustering | undefined
        creationTime?: string | undefined
        expirationTime?: string | undefined
        friendlyName?: string | undefined
        id?: string | undefined
        kind?: string | undefined
        labels?: { [x: string]: string } | undefined
        rangePartitioning?: RangePartitioning | undefined
        requirePartitionFilter?: boolean | undefined
        tableReference?: TableReference | undefined
        timePartitioning?: TimePartitioning | undefined
        type?: string | undefined
        view?:
          | { privacyPolicy?: PrivacyPolicy | undefined; useLegacySql?: boolean | undefined }
          | undefined
      }[]
    | undefined
  totalItems?: number | undefined
}
type BigLakeConfiguration = {
  connectionId?: string | undefined
  fileFormat?: 'FILE_FORMAT_UNSPECIFIED' | 'PARQUET' | undefined
  storageUri?: string | undefined
  tableFormat?: 'TABLE_FORMAT_UNSPECIFIED' | 'ICEBERG' | undefined
}
type CloneDefinition = {
  baseTableReference?: TableReference | undefined
  cloneTime?: string | undefined
}
type AvroOptions = { useAvroLogicalTypes?: boolean | undefined }
type BigtableColumn = {
  encoding?: string | undefined
  fieldName?: string | undefined
  onlyReadLatest?: boolean | undefined
  qualifierEncoded?: string | undefined
  qualifierString?: string | undefined
  type?: string | undefined
}
type BigtableColumnFamily = {
  columns?: BigtableColumn[] | undefined
  encoding?: string | undefined
  familyId?: string | undefined
  onlyReadLatest?: boolean | undefined
  type?: string | undefined
}
type BigtableOptions = {
  columnFamilies?: BigtableColumnFamily[] | undefined
  ignoreUnspecifiedColumnFamilies?: boolean | undefined
  outputColumnFamiliesAsJson?: boolean | undefined
  readRowkeyAsString?: boolean | undefined
}
type CsvOptions = {
  allowJaggedRows?: boolean | undefined
  allowQuotedNewlines?: boolean | undefined
  encoding?: string | undefined
  fieldDelimiter?: string | undefined
  nullMarker?: string | undefined
  preserveAsciiControlCharacters?: boolean | undefined
  quote?: string | undefined
  skipLeadingRows?: string | undefined
}
type GoogleSheetsOptions = { range?: string | undefined; skipLeadingRows?: string | undefined }
type HivePartitioningOptions = {
  fields?: string[] | undefined
  mode?: string | undefined
  requirePartitionFilter?: boolean | undefined
  sourceUriPrefix?: string | undefined
}
type JsonOptions = { encoding?: string | undefined }
type ParquetOptions = {
  enableListInference?: boolean | undefined
  enumAsString?: boolean | undefined
}
type TableFieldSchema = {
  categories?: { names?: string[] | undefined } | undefined
  collation?: string | undefined
  defaultValueExpression?: string | undefined
  description?: string | undefined
  fields?: TableFieldSchema[] | undefined
  maxLength?: string | undefined
  mode?: string | undefined
  name?: string | undefined
  policyTags?: { names?: string[] | undefined } | undefined
  precision?: string | undefined
  rangeElementType?: { type?: string | undefined } | undefined
  roundingMode?:
    | 'ROUNDING_MODE_UNSPECIFIED'
    | 'ROUND_HALF_AWAY_FROM_ZERO'
    | 'ROUND_HALF_EVEN'
    | undefined
  scale?: string | undefined
  type?: string | undefined
}
type TableSchema = { fields?: TableFieldSchema[] | undefined }
type ExternalDataConfiguration = {
  autodetect?: boolean | undefined
  avroOptions?: AvroOptions | undefined
  bigtableOptions?: BigtableOptions | undefined
  compression?: string | undefined
  connectionId?: string | undefined
  csvOptions?: CsvOptions | undefined
  decimalTargetTypes?:
    | ('DECIMAL_TARGET_TYPE_UNSPECIFIED' | 'NUMERIC' | 'BIGNUMERIC' | 'STRING')[]
    | undefined
  fileSetSpecType?:
    | 'FILE_SET_SPEC_TYPE_FILE_SYSTEM_MATCH'
    | 'FILE_SET_SPEC_TYPE_NEW_LINE_DELIMITED_MANIFEST'
    | undefined
  googleSheetsOptions?: GoogleSheetsOptions | undefined
  hivePartitioningOptions?: HivePartitioningOptions | undefined
  ignoreUnknownValues?: boolean | undefined
  jsonExtension?: 'JSON_EXTENSION_UNSPECIFIED' | 'GEOJSON' | undefined
  jsonOptions?: JsonOptions | undefined
  maxBadRecords?: number | undefined
  metadataCacheMode?: 'METADATA_CACHE_MODE_UNSPECIFIED' | 'AUTOMATIC' | 'MANUAL' | undefined
  objectMetadata?: 'OBJECT_METADATA_UNSPECIFIED' | 'DIRECTORY' | 'SIMPLE' | undefined
  parquetOptions?: ParquetOptions | undefined
  referenceFileSchemaUri?: string | undefined
  schema?: TableSchema | undefined
  sourceFormat?: string | undefined
  sourceUris?: string[] | undefined
}
type MaterializedViewDefinition = {
  allowNonIncrementalDefinition?: boolean | undefined
  enableRefresh?: boolean | undefined
  lastRefreshTime?: string | undefined
  maxStaleness?: string | undefined
  query?: string | undefined
  refreshIntervalMs?: string | undefined
}
type ErrorProto = {
  debugInfo?: string | undefined
  location?: string | undefined
  message?: string | undefined
  reason?: string | undefined
}
type MaterializedViewStatus = {
  lastRefreshStatus?: ErrorProto | undefined
  refreshWatermark?: string | undefined
}
type BqmlIterationResult = {
  durationMs?: string | undefined
  evalLoss?: number | undefined
  index?: number | undefined
  learnRate?: number | undefined
  trainingLoss?: number | undefined
}
type BqmlTrainingRun = {
  iterationResults?: BqmlIterationResult[] | undefined
  startTime?: string | undefined
  state?: string | undefined
  trainingOptions?:
    | {
        earlyStop?: boolean | undefined
        l1Reg?: number | undefined
        l2Reg?: number | undefined
        learnRate?: number | undefined
        learnRateStrategy?: string | undefined
        lineSearchInitLearnRate?: number | undefined
        maxIteration?: string | undefined
        minRelProgress?: number | undefined
        warmStart?: boolean | undefined
      }
    | undefined
}
type ModelDefinition = {
  modelOptions?:
    | {
        labels?: string[] | undefined
        lossType?: string | undefined
        modelType?: string | undefined
      }
    | undefined
  trainingRuns?: BqmlTrainingRun[] | undefined
}
type SnapshotDefinition = {
  baseTableReference?: TableReference | undefined
  snapshotTime?: string | undefined
}
type Streamingbuffer = {
  estimatedBytes?: string | undefined
  estimatedRows?: string | undefined
  oldestEntryTime?: string | undefined
}
type TableConstraints = {
  foreignKeys?:
    | {
        columnReferences?:
          | { referencedColumn?: string | undefined; referencingColumn?: string | undefined }[]
          | undefined
        name?: string | undefined
        referencedTable?:
          | {
              datasetId?: string | undefined
              projectId?: string | undefined
              tableId?: string | undefined
            }
          | undefined
      }[]
    | undefined
  primaryKey?: { columns?: string[] | undefined } | undefined
}
type TableReplicationInfo = {
  replicatedSourceLastRefreshTime?: string | undefined
  replicationError?: ErrorProto | undefined
  replicationIntervalMs?: string | undefined
  replicationStatus?:
    | 'REPLICATION_STATUS_UNSPECIFIED'
    | 'ACTIVE'
    | 'SOURCE_DELETED'
    | 'PERMISSION_DENIED'
    | 'UNSUPPORTED_CONFIGURATION'
    | undefined
  sourceTable?: TableReference | undefined
}
type UserDefinedFunctionResource = {
  inlineCode?: string | undefined
  resourceUri?: string | undefined
}
type ViewDefinition = {
  privacyPolicy?: PrivacyPolicy | undefined
  query?: string | undefined
  useExplicitColumnNames?: boolean | undefined
  useLegacySql?: boolean | undefined
  userDefinedFunctionResources?: UserDefinedFunctionResource[] | undefined
}
type Table = {
  biglakeConfiguration?: BigLakeConfiguration | undefined
  cloneDefinition?: CloneDefinition | undefined
  clustering?: Clustering | undefined
  creationTime?: string | undefined
  defaultCollation?: string | undefined
  defaultRoundingMode?:
    | 'ROUNDING_MODE_UNSPECIFIED'
    | 'ROUND_HALF_AWAY_FROM_ZERO'
    | 'ROUND_HALF_EVEN'
    | undefined
  description?: string | undefined
  encryptionConfiguration?: EncryptionConfiguration | undefined
  etag?: string | undefined
  expirationTime?: string | undefined
  externalDataConfiguration?: ExternalDataConfiguration | undefined
  friendlyName?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  labels?: { [x: string]: string } | undefined
  lastModifiedTime?: string | undefined
  location?: string | undefined
  materializedView?: MaterializedViewDefinition | undefined
  materializedViewStatus?: MaterializedViewStatus | undefined
  maxStaleness?: string | undefined
  model?: ModelDefinition | undefined
  numActiveLogicalBytes?: string | undefined
  numActivePhysicalBytes?: string | undefined
  numBytes?: string | undefined
  numLongTermBytes?: string | undefined
  numLongTermLogicalBytes?: string | undefined
  numLongTermPhysicalBytes?: string | undefined
  numPartitions?: string | undefined
  numPhysicalBytes?: string | undefined
  numRows?: string | undefined
  numTimeTravelPhysicalBytes?: string | undefined
  numTotalLogicalBytes?: string | undefined
  numTotalPhysicalBytes?: string | undefined
  rangePartitioning?: RangePartitioning | undefined
  replicas?: TableReference[] | undefined
  requirePartitionFilter?: boolean | undefined
  resourceTags?: { [x: string]: string } | undefined
  schema?: TableSchema | undefined
  selfLink?: string | undefined
  snapshotDefinition?: SnapshotDefinition | undefined
  streamingBuffer?: Streamingbuffer | undefined
  tableConstraints?: TableConstraints | undefined
  tableReference?: TableReference | undefined
  tableReplicationInfo?: TableReplicationInfo | undefined
  timePartitioning?: TimePartitioning | undefined
  type?: string | undefined
  view?: ViewDefinition | undefined
}
type TableCell = { v?: { [x: string]: unknown } | undefined }
type TableRow = { f?: TableCell[] | undefined }
type TableDataList = {
  etag?: string | undefined
  kind?: string | undefined
  pageToken?: string | undefined
  rows?: TableRow[] | undefined
  totalRows?: string | undefined
}
type JsonValue = { [x: string]: unknown }
type JsonObject = { [x: string]: JsonValue }
type TableDataInsertAllRequest = {
  ignoreUnknownValues?: boolean | undefined
  kind?: string | undefined
  rows?: { insertId?: string | undefined; json?: JsonObject | undefined }[] | undefined
  skipInvalidRows?: boolean | undefined
  templateSuffix?: string | undefined
  traceId?: string | undefined
}
type TableDataInsertAllResponse = {
  insertErrors?: { errors?: ErrorProto[] | undefined; index?: number | undefined }[] | undefined
  kind?: string | undefined
}
type RowAccessPolicyReference = {
  datasetId?: string | undefined
  policyId?: string | undefined
  projectId?: string | undefined
  tableId?: string | undefined
}
type RowAccessPolicy = {
  creationTime?: string | undefined
  etag?: string | undefined
  filterPredicate?: string | undefined
  lastModifiedTime?: string | undefined
  rowAccessPolicyReference?: RowAccessPolicyReference | undefined
}
type ListRowAccessPoliciesResponse = {
  nextPageToken?: string | undefined
  rowAccessPolicies?: RowAccessPolicy[] | undefined
}
type UndeleteDatasetRequest = { deletionTime?: string | undefined }
type JobConfigurationTableCopy = {
  createDisposition?: string | undefined
  destinationEncryptionConfiguration?: EncryptionConfiguration | undefined
  destinationExpirationTime?: string | undefined
  destinationTable?: TableReference | undefined
  operationType?:
    | 'OPERATION_TYPE_UNSPECIFIED'
    | 'COPY'
    | 'SNAPSHOT'
    | 'RESTORE'
    | 'CLONE'
    | undefined
  sourceTable?: TableReference | undefined
  sourceTables?: TableReference[] | undefined
  writeDisposition?: string | undefined
}
type ModelExtractOptions = { trialId?: string | undefined }
type JobConfigurationExtract = {
  compression?: string | undefined
  destinationFormat?: string | undefined
  destinationUri?: string | undefined
  destinationUris?: string[] | undefined
  fieldDelimiter?: string | undefined
  modelExtractOptions?: ModelExtractOptions | undefined
  printHeader?: boolean | undefined
  sourceModel?: ModelReference | undefined
  sourceTable?: TableReference | undefined
  useAvroLogicalTypes?: boolean | undefined
}
type ConnectionProperty = { key?: string | undefined; value?: string | undefined }
type DestinationTableProperties = {
  description?: string | undefined
  expirationTime?: string | undefined
  friendlyName?: string | undefined
  labels?: { [x: string]: string } | undefined
}
type JobConfigurationLoad = {
  allowJaggedRows?: boolean | undefined
  allowQuotedNewlines?: boolean | undefined
  autodetect?: boolean | undefined
  clustering?: Clustering | undefined
  connectionProperties?: ConnectionProperty[] | undefined
  copyFilesOnly?: boolean | undefined
  createDisposition?: string | undefined
  createSession?: boolean | undefined
  decimalTargetTypes?:
    | ('DECIMAL_TARGET_TYPE_UNSPECIFIED' | 'NUMERIC' | 'BIGNUMERIC' | 'STRING')[]
    | undefined
  destinationEncryptionConfiguration?: EncryptionConfiguration | undefined
  destinationTable?: TableReference | undefined
  destinationTableProperties?: DestinationTableProperties | undefined
  encoding?: string | undefined
  fieldDelimiter?: string | undefined
  fileSetSpecType?:
    | 'FILE_SET_SPEC_TYPE_FILE_SYSTEM_MATCH'
    | 'FILE_SET_SPEC_TYPE_NEW_LINE_DELIMITED_MANIFEST'
    | undefined
  hivePartitioningOptions?: HivePartitioningOptions | undefined
  ignoreUnknownValues?: boolean | undefined
  jsonExtension?: 'JSON_EXTENSION_UNSPECIFIED' | 'GEOJSON' | undefined
  maxBadRecords?: number | undefined
  nullMarker?: string | undefined
  parquetOptions?: ParquetOptions | undefined
  preserveAsciiControlCharacters?: boolean | undefined
  projectionFields?: string[] | undefined
  quote?: string | undefined
  rangePartitioning?: RangePartitioning | undefined
  referenceFileSchemaUri?: string | undefined
  schema?: TableSchema | undefined
  schemaInline?: string | undefined
  schemaInlineFormat?: string | undefined
  schemaUpdateOptions?: string[] | undefined
  skipLeadingRows?: number | undefined
  sourceFormat?: string | undefined
  sourceUris?: string[] | undefined
  timePartitioning?: TimePartitioning | undefined
  useAvroLogicalTypes?: boolean | undefined
  writeDisposition?: string | undefined
}
type QueryParameterType = {
  arrayType?: QueryParameterType | undefined
  rangeElementType?: QueryParameterType | undefined
  structTypes?:
    | {
        description?: string | undefined
        name?: string | undefined
        type?: QueryParameterType | undefined
      }[]
    | undefined
  type?: string | undefined
}
type RangeValue = { end?: QueryParameterValue | undefined; start?: QueryParameterValue | undefined }
type QueryParameterValue = {
  arrayValues?: QueryParameterValue[] | undefined
  rangeValue?: RangeValue | undefined
  structValues?: { [x: string]: QueryParameterValue } | undefined
  value?: string | undefined
}
type QueryParameter = {
  name?: string | undefined
  parameterType?: QueryParameterType | undefined
  parameterValue?: QueryParameterValue | undefined
}
type ScriptOptions = {
  keyResultStatement?: 'KEY_RESULT_STATEMENT_KIND_UNSPECIFIED' | 'LAST' | 'FIRST_SELECT' | undefined
  statementByteBudget?: string | undefined
  statementTimeoutMs?: string | undefined
}
type SystemVariables = {
  types?: { [x: string]: StandardSqlDataType } | undefined
  values?: { [x: string]: { [x: string]: unknown } } | undefined
}
type JobConfigurationQuery = {
  allowLargeResults?: boolean | undefined
  clustering?: Clustering | undefined
  connectionProperties?: ConnectionProperty[] | undefined
  continuous?: boolean | undefined
  createDisposition?: string | undefined
  createSession?: boolean | undefined
  defaultDataset?: DatasetReference | undefined
  destinationEncryptionConfiguration?: EncryptionConfiguration | undefined
  destinationTable?: TableReference | undefined
  flattenResults?: boolean | undefined
  maximumBillingTier?: number | undefined
  maximumBytesBilled?: string | undefined
  parameterMode?: string | undefined
  preserveNulls?: boolean | undefined
  priority?: string | undefined
  query?: string | undefined
  queryParameters?: QueryParameter[] | undefined
  rangePartitioning?: RangePartitioning | undefined
  schemaUpdateOptions?: string[] | undefined
  scriptOptions?: ScriptOptions | undefined
  systemVariables?: SystemVariables | undefined
  tableDefinitions?: { [x: string]: ExternalDataConfiguration } | undefined
  timePartitioning?: TimePartitioning | undefined
  useLegacySql?: boolean | undefined
  useQueryCache?: boolean | undefined
  userDefinedFunctionResources?: UserDefinedFunctionResource[] | undefined
  writeDisposition?: string | undefined
}
type JobConfiguration = {
  copy?: JobConfigurationTableCopy | undefined
  dryRun?: boolean | undefined
  extract?: JobConfigurationExtract | undefined
  jobTimeoutMs?: string | undefined
  jobType?: string | undefined
  labels?: { [x: string]: string } | undefined
  load?: JobConfigurationLoad | undefined
  query?: JobConfigurationQuery | undefined
}
type JobReference = {
  jobId?: string | undefined
  location?: string | undefined
  projectId?: string | undefined
}
type JobStatistics5 = { copiedLogicalBytes?: string | undefined; copiedRows?: string | undefined }
type DataMaskingStatistics = { dataMaskingApplied?: boolean | undefined }
type QueryTimelineSample = {
  activeUnits?: string | undefined
  completedUnits?: string | undefined
  elapsedMs?: string | undefined
  estimatedRunnableUnits?: string | undefined
  pendingUnits?: string | undefined
  totalSlotMs?: string | undefined
}
type JobStatistics4 = {
  destinationUriFileCounts?: string[] | undefined
  inputBytes?: string | undefined
  timeline?: QueryTimelineSample[] | undefined
}
type JobStatistics3 = {
  badRecords?: string | undefined
  inputFileBytes?: string | undefined
  inputFiles?: string | undefined
  outputBytes?: string | undefined
  outputRows?: string | undefined
  timeline?: QueryTimelineSample[] | undefined
}
type BiEngineReason = {
  code?:
    | 'CODE_UNSPECIFIED'
    | 'NO_RESERVATION'
    | 'INSUFFICIENT_RESERVATION'
    | 'UNSUPPORTED_SQL_TEXT'
    | 'INPUT_TOO_LARGE'
    | 'OTHER_REASON'
    | 'TABLE_EXCLUDED'
    | undefined
  message?: string | undefined
}
type BiEngineStatistics = {
  accelerationMode?:
    | 'BI_ENGINE_ACCELERATION_MODE_UNSPECIFIED'
    | 'BI_ENGINE_DISABLED'
    | 'PARTIAL_INPUT'
    | 'FULL_INPUT'
    | 'FULL_QUERY'
    | undefined
  biEngineMode?: 'ACCELERATION_MODE_UNSPECIFIED' | 'DISABLED' | 'PARTIAL' | 'FULL' | undefined
  biEngineReasons?: BiEngineReason[] | undefined
}
type DmlStatistics = {
  deletedRowCount?: string | undefined
  insertedRowCount?: string | undefined
  updatedRowCount?: string | undefined
}
type ExportDataStatistics = { fileCount?: string | undefined; rowCount?: string | undefined }
type ExternalServiceCost = {
  bytesBilled?: string | undefined
  bytesProcessed?: string | undefined
  externalService?: string | undefined
  reservedSlotCount?: string | undefined
  slotMs?: string | undefined
}
type LoadQueryStatistics = {
  badRecords?: string | undefined
  bytesTransferred?: string | undefined
  inputFileBytes?: string | undefined
  inputFiles?: string | undefined
  outputBytes?: string | undefined
  outputRows?: string | undefined
}
type MaterializedView = {
  chosen?: boolean | undefined
  estimatedBytesSaved?: string | undefined
  rejectedReason?:
    | 'REJECTED_REASON_UNSPECIFIED'
    | 'NO_DATA'
    | 'COST'
    | 'BASE_TABLE_TRUNCATED'
    | 'BASE_TABLE_DATA_CHANGE'
    | 'BASE_TABLE_PARTITION_EXPIRATION_CHANGE'
    | 'BASE_TABLE_EXPIRED_PARTITION'
    | 'BASE_TABLE_INCOMPATIBLE_METADATA_CHANGE'
    | 'TIME_ZONE'
    | 'OUT_OF_TIME_TRAVEL_WINDOW'
    | 'BASE_TABLE_FINE_GRAINED_SECURITY_POLICY'
    | 'BASE_TABLE_TOO_STALE'
    | undefined
  tableReference?: TableReference | undefined
}
type MaterializedViewStatistics = { materializedView?: MaterializedView[] | undefined }
type TableMetadataCacheUsage = {
  explanation?: string | undefined
  tableReference?: TableReference | undefined
  tableType?: string | undefined
  unusedReason?:
    | 'UNUSED_REASON_UNSPECIFIED'
    | 'EXCEEDED_MAX_STALENESS'
    | 'METADATA_CACHING_NOT_ENABLED'
    | 'OTHER_REASON'
    | undefined
}
type MetadataCacheStatistics = { tableMetadataCacheUsage?: TableMetadataCacheUsage[] | undefined }
type MlStatistics = {
  hparamTrials?: HparamTuningTrial[] | undefined
  iterationResults?: IterationResult[] | undefined
  maxIterations?: string | undefined
  modelType?:
    | 'MODEL_TYPE_UNSPECIFIED'
    | 'LINEAR_REGRESSION'
    | 'LOGISTIC_REGRESSION'
    | 'KMEANS'
    | 'MATRIX_FACTORIZATION'
    | 'DNN_CLASSIFIER'
    | 'TENSORFLOW'
    | 'DNN_REGRESSOR'
    | 'XGBOOST'
    | 'BOOSTED_TREE_REGRESSOR'
    | 'BOOSTED_TREE_CLASSIFIER'
    | 'ARIMA'
    | 'AUTOML_REGRESSOR'
    | 'AUTOML_CLASSIFIER'
    | 'PCA'
    | 'DNN_LINEAR_COMBINED_CLASSIFIER'
    | 'DNN_LINEAR_COMBINED_REGRESSOR'
    | 'AUTOENCODER'
    | 'ARIMA_PLUS'
    | 'ARIMA_PLUS_XREG'
    | 'RANDOM_FOREST_REGRESSOR'
    | 'RANDOM_FOREST_CLASSIFIER'
    | 'TENSORFLOW_LITE'
    | 'ONNX'
    | undefined
  trainingType?: 'TRAINING_TYPE_UNSPECIFIED' | 'SINGLE_TRAINING' | 'HPARAM_TUNING' | undefined
}
type BigQueryModelTraining = {
  currentIteration?: number | undefined
  expectedTotalIterations?: string | undefined
}
type InputDataChange = { recordsReadDiffPercentage?: number | undefined }
type StagePerformanceChangeInsight = {
  inputDataChange?: InputDataChange | undefined
  stageId?: string | undefined
}
type HighCardinalityJoin = {
  leftRows?: string | undefined
  outputRows?: string | undefined
  rightRows?: string | undefined
  stepIndex?: number | undefined
}
type StagePerformanceStandaloneInsight = {
  biEngineReasons?: BiEngineReason[] | undefined
  highCardinalityJoins?: HighCardinalityJoin[] | undefined
  insufficientShuffleQuota?: boolean | undefined
  slotContention?: boolean | undefined
  stageId?: string | undefined
}
type PerformanceInsights = {
  avgPreviousExecutionMs?: string | undefined
  stagePerformanceChangeInsights?: StagePerformanceChangeInsight[] | undefined
  stagePerformanceStandaloneInsights?: StagePerformanceStandaloneInsight[] | undefined
}
type QueryInfo = { optimizationDetails?: { [x: string]: { [x: string]: unknown } } | undefined }
type ExplainQueryStep = { kind?: string | undefined; substeps?: string[] | undefined }
type ExplainQueryStage = {
  completedParallelInputs?: string | undefined
  computeMode?: 'COMPUTE_MODE_UNSPECIFIED' | 'BIGQUERY' | 'BI_ENGINE' | undefined
  computeMsAvg?: string | undefined
  computeMsMax?: string | undefined
  computeRatioAvg?: number | undefined
  computeRatioMax?: number | undefined
  endMs?: string | undefined
  id?: string | undefined
  inputStages?: string[] | undefined
  name?: string | undefined
  parallelInputs?: string | undefined
  readMsAvg?: string | undefined
  readMsMax?: string | undefined
  readRatioAvg?: number | undefined
  readRatioMax?: number | undefined
  recordsRead?: string | undefined
  recordsWritten?: string | undefined
  shuffleOutputBytes?: string | undefined
  shuffleOutputBytesSpilled?: string | undefined
  slotMs?: string | undefined
  startMs?: string | undefined
  status?: string | undefined
  steps?: ExplainQueryStep[] | undefined
  waitMsAvg?: string | undefined
  waitMsMax?: string | undefined
  waitRatioAvg?: number | undefined
  waitRatioMax?: number | undefined
  writeMsAvg?: string | undefined
  writeMsMax?: string | undefined
  writeRatioAvg?: number | undefined
  writeRatioMax?: number | undefined
}
type IndexUnusedReason = {
  baseTable?: TableReference | undefined
  code?:
    | 'CODE_UNSPECIFIED'
    | 'INDEX_CONFIG_NOT_AVAILABLE'
    | 'PENDING_INDEX_CREATION'
    | 'BASE_TABLE_TRUNCATED'
    | 'INDEX_CONFIG_MODIFIED'
    | 'TIME_TRAVEL_QUERY'
    | 'NO_PRUNING_POWER'
    | 'UNINDEXED_SEARCH_FIELDS'
    | 'UNSUPPORTED_SEARCH_PATTERN'
    | 'OPTIMIZED_WITH_MATERIALIZED_VIEW'
    | 'SECURED_BY_DATA_MASKING'
    | 'MISMATCHED_TEXT_ANALYZER'
    | 'BASE_TABLE_TOO_SMALL'
    | 'BASE_TABLE_TOO_LARGE'
    | 'ESTIMATED_PERFORMANCE_GAIN_TOO_LOW'
    | 'NOT_SUPPORTED_IN_STANDARD_EDITION'
    | 'INDEX_SUPPRESSED_BY_FUNCTION_OPTION'
    | 'QUERY_CACHE_HIT'
    | 'INTERNAL_ERROR'
    | 'OTHER_REASON'
    | undefined
  indexName?: string | undefined
  message?: string | undefined
}
type SearchStatistics = {
  indexUnusedReasons?: IndexUnusedReason[] | undefined
  indexUsageMode?:
    | 'INDEX_USAGE_MODE_UNSPECIFIED'
    | 'UNUSED'
    | 'PARTIALLY_USED'
    | 'FULLY_USED'
    | undefined
}
type SparkLoggingInfo = { projectId?: string | undefined; resourceType?: string | undefined }
type SparkStatistics = {
  endpoints?: { [x: string]: string } | undefined
  gcsStagingBucket?: string | undefined
  kmsKeyName?: string | undefined
  loggingInfo?: SparkLoggingInfo | undefined
  sparkJobId?: string | undefined
  sparkJobLocation?: string | undefined
}
type VectorSearchStatistics = {
  indexUnusedReasons?: IndexUnusedReason[] | undefined
  indexUsageMode?:
    | 'INDEX_USAGE_MODE_UNSPECIFIED'
    | 'UNUSED'
    | 'PARTIALLY_USED'
    | 'FULLY_USED'
    | undefined
}
type JobStatistics2 = {
  biEngineStatistics?: BiEngineStatistics | undefined
  billingTier?: number | undefined
  cacheHit?: boolean | undefined
  dclTargetDataset?: DatasetReference | undefined
  dclTargetTable?: TableReference | undefined
  dclTargetView?: TableReference | undefined
  ddlAffectedRowAccessPolicyCount?: string | undefined
  ddlDestinationTable?: TableReference | undefined
  ddlOperationPerformed?: string | undefined
  ddlTargetDataset?: DatasetReference | undefined
  ddlTargetRoutine?: RoutineReference | undefined
  ddlTargetRowAccessPolicy?: RowAccessPolicyReference | undefined
  ddlTargetTable?: TableReference | undefined
  dmlStats?: DmlStatistics | undefined
  estimatedBytesProcessed?: string | undefined
  exportDataStatistics?: ExportDataStatistics | undefined
  externalServiceCosts?: ExternalServiceCost[] | undefined
  loadQueryStatistics?: LoadQueryStatistics | undefined
  materializedViewStatistics?: MaterializedViewStatistics | undefined
  metadataCacheStatistics?: MetadataCacheStatistics | undefined
  mlStatistics?: MlStatistics | undefined
  modelTraining?: BigQueryModelTraining | undefined
  modelTrainingCurrentIteration?: number | undefined
  modelTrainingExpectedTotalIteration?: string | undefined
  numDmlAffectedRows?: string | undefined
  performanceInsights?: PerformanceInsights | undefined
  queryInfo?: QueryInfo | undefined
  queryPlan?: ExplainQueryStage[] | undefined
  referencedRoutines?: RoutineReference[] | undefined
  referencedTables?: TableReference[] | undefined
  reservationUsage?: { name?: string | undefined; slotMs?: string | undefined }[] | undefined
  schema?: TableSchema | undefined
  searchStatistics?: SearchStatistics | undefined
  sparkStatistics?: SparkStatistics | undefined
  statementType?: string | undefined
  timeline?: QueryTimelineSample[] | undefined
  totalBytesBilled?: string | undefined
  totalBytesProcessed?: string | undefined
  totalBytesProcessedAccuracy?: string | undefined
  totalPartitionsProcessed?: string | undefined
  totalSlotMs?: string | undefined
  transferredBytes?: string | undefined
  undeclaredQueryParameters?: QueryParameter[] | undefined
  vectorSearchStatistics?: VectorSearchStatistics | undefined
}
type RowLevelSecurityStatistics = { rowLevelSecurityApplied?: boolean | undefined }
type ScriptStackFrame = {
  endColumn?: number | undefined
  endLine?: number | undefined
  procedureId?: string | undefined
  startColumn?: number | undefined
  startLine?: number | undefined
  text?: string | undefined
}
type ScriptStatistics = {
  evaluationKind?: 'EVALUATION_KIND_UNSPECIFIED' | 'STATEMENT' | 'EXPRESSION' | undefined
  stackFrames?: ScriptStackFrame[] | undefined
}
type SessionInfo = { sessionId?: string | undefined }
type TransactionInfo = { transactionId?: string | undefined }
type JobStatistics = {
  completionRatio?: number | undefined
  copy?: JobStatistics5 | undefined
  creationTime?: string | undefined
  dataMaskingStatistics?: DataMaskingStatistics | undefined
  endTime?: string | undefined
  extract?: JobStatistics4 | undefined
  finalExecutionDurationMs?: string | undefined
  load?: JobStatistics3 | undefined
  numChildJobs?: string | undefined
  parentJobId?: string | undefined
  query?: JobStatistics2 | undefined
  quotaDeferments?: string[] | undefined
  reservationUsage?: { name?: string | undefined; slotMs?: string | undefined }[] | undefined
  reservation_id?: string | undefined
  rowLevelSecurityStatistics?: RowLevelSecurityStatistics | undefined
  scriptStatistics?: ScriptStatistics | undefined
  sessionInfo?: SessionInfo | undefined
  startTime?: string | undefined
  totalBytesProcessed?: string | undefined
  totalSlotMs?: string | undefined
  transactionInfo?: TransactionInfo | undefined
}
type JobStatus = {
  errorResult?: ErrorProto | undefined
  errors?: ErrorProto[] | undefined
  state?: string | undefined
}
type JobList = {
  etag?: string | undefined
  jobs?:
    | {
        configuration?: JobConfiguration | undefined
        errorResult?: ErrorProto | undefined
        id?: string | undefined
        jobReference?: JobReference | undefined
        kind?: string | undefined
        principal_subject?: string | undefined
        state?: string | undefined
        statistics?: JobStatistics | undefined
        status?: JobStatus | undefined
        user_email?: string | undefined
      }[]
    | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type JobCreationReason = {
  code?: 'CODE_UNSPECIFIED' | 'REQUESTED' | 'LONG_RUNNING' | 'LARGE_RESULTS' | 'OTHER' | undefined
}
type Job = {
  configuration?: JobConfiguration | undefined
  etag?: string | undefined
  id?: string | undefined
  jobCreationReason?: JobCreationReason | undefined
  jobReference?: JobReference | undefined
  kind?: string | undefined
  principal_subject?: string | undefined
  selfLink?: string | undefined
  statistics?: JobStatistics | undefined
  status?: JobStatus | undefined
  user_email?: string | undefined
}
type JobCancelResponse = { job?: Job | undefined; kind?: string | undefined }
type DataFormatOptions = { useInt64Timestamp?: boolean | undefined }
type QueryRequest = {
  connectionProperties?: ConnectionProperty[] | undefined
  continuous?: boolean | undefined
  createSession?: boolean | undefined
  defaultDataset?: DatasetReference | undefined
  dryRun?: boolean | undefined
  formatOptions?: DataFormatOptions | undefined
  jobCreationMode?:
    | 'JOB_CREATION_MODE_UNSPECIFIED'
    | 'JOB_CREATION_REQUIRED'
    | 'JOB_CREATION_OPTIONAL'
    | undefined
  kind?: string | undefined
  labels?: { [x: string]: string } | undefined
  location?: string | undefined
  maxResults?: number | undefined
  maximumBytesBilled?: string | undefined
  parameterMode?: string | undefined
  preserveNulls?: boolean | undefined
  query?: string | undefined
  queryParameters?: QueryParameter[] | undefined
  requestId?: string | undefined
  timeoutMs?: number | undefined
  useLegacySql?: boolean | undefined
  useQueryCache?: boolean | undefined
}
type QueryResponse = {
  cacheHit?: boolean | undefined
  dmlStats?: DmlStatistics | undefined
  errors?: ErrorProto[] | undefined
  jobComplete?: boolean | undefined
  jobCreationReason?: JobCreationReason | undefined
  jobReference?: JobReference | undefined
  kind?: string | undefined
  numDmlAffectedRows?: string | undefined
  pageToken?: string | undefined
  queryId?: string | undefined
  rows?: TableRow[] | undefined
  schema?: TableSchema | undefined
  sessionInfo?: SessionInfo | undefined
  totalBytesProcessed?: string | undefined
  totalRows?: string | undefined
}
type GetQueryResultsResponse = {
  cacheHit?: boolean | undefined
  errors?: ErrorProto[] | undefined
  etag?: string | undefined
  jobComplete?: boolean | undefined
  jobReference?: JobReference | undefined
  kind?: string | undefined
  numDmlAffectedRows?: string | undefined
  pageToken?: string | undefined
  rows?: TableRow[] | undefined
  schema?: TableSchema | undefined
  totalBytesProcessed?: string | undefined
  totalRows?: string | undefined
}
type GetServiceAccountResponse = { email?: string | undefined; kind?: string | undefined }
type GetPolicyOptions = { requestedPolicyVersion?: number | undefined }
type GetIamPolicyRequest = { options?: GetPolicyOptions | undefined }
type AuditLogConfig = {
  exemptedMembers?: string[] | undefined
  logType?: 'LOG_TYPE_UNSPECIFIED' | 'ADMIN_READ' | 'DATA_WRITE' | 'DATA_READ' | undefined
}
type AuditConfig = { auditLogConfigs?: AuditLogConfig[] | undefined; service?: string | undefined }
type Expr = {
  description?: string | undefined
  expression?: string | undefined
  location?: string | undefined
  title?: string | undefined
}
type Binding = {
  condition?: Expr | undefined
  members?: string[] | undefined
  role?: string | undefined
}
type Policy = {
  auditConfigs?: AuditConfig[] | undefined
  bindings?: Binding[] | undefined
  etag?: string | undefined
  version?: number | undefined
}
type SetIamPolicyRequest = { policy?: Policy | undefined; updateMask?: string | undefined }
type TestIamPermissionsRequest = { permissions?: string[] | undefined }
type TestIamPermissionsResponse = { permissions?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/projects': {
      $get: {
        input: {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ProjectList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/datasets': {
      $get: {
        input: { param: { projectId: string } } & {
          query: {
            all?: boolean | undefined
            filter?: string | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: DatasetList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { projectId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Dataset }
        output: Dataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/datasets/:datasetId': {
      $delete: {
        input: { param: { projectId: string; datasetId: string } } & {
          query: {
            deleteContents?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { projectId: string; datasetId: string } } & {
          query: {
            datasetView?: 'DATASET_VIEW_UNSPECIFIED' | 'METADATA' | 'ACL' | 'FULL' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Dataset
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { projectId: string; datasetId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Dataset }
        output: Dataset
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { projectId: string; datasetId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Dataset }
        output: Dataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/datasets/:datasetId/models': {
      $get: {
        input: { param: { projectId: string; datasetId: string } } & {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListModelsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/datasets/:datasetId/models/:modelId': {
      $delete: {
        input: { param: { projectId: string; datasetId: string; modelId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { projectId: string; datasetId: string; modelId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Model
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { projectId: string; datasetId: string; modelId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Model }
        output: Model
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/datasets/:datasetId/routines': {
      $get: {
        input: { param: { projectId: string; datasetId: string } } & {
          query: {
            filter?: string | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            readMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListRoutinesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { projectId: string; datasetId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Routine }
        output: Routine
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/datasets/:datasetId/routines/:routineId': {
      $delete: {
        input: { param: { projectId: string; datasetId: string; routineId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { projectId: string; datasetId: string; routineId: string } } & {
          query: {
            readMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Routine
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { projectId: string; datasetId: string; routineId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Routine }
        output: Routine
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/datasets/:datasetId/tables': {
      $get: {
        input: { param: { projectId: string; datasetId: string } } & {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: TableList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { projectId: string; datasetId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Table }
        output: Table
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/datasets/:datasetId/tables/:tableId': {
      $delete: {
        input: { param: { projectId: string; datasetId: string; tableId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { projectId: string; datasetId: string; tableId: string } } & {
          query: {
            selectedFields?: string | undefined
            view?:
              | 'TABLE_METADATA_VIEW_UNSPECIFIED'
              | 'BASIC'
              | 'STORAGE_STATS'
              | 'FULL'
              | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Table
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { projectId: string; datasetId: string; tableId: string } } & {
          query: {
            autodetect_schema?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Table }
        output: Table
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { projectId: string; datasetId: string; tableId: string } } & {
          query: {
            autodetect_schema?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Table }
        output: Table
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/datasets/:datasetId/tables/:tableId/data': {
      $get: {
        input: { param: { projectId: string; datasetId: string; tableId: string } } & {
          query: {
            'formatOptions.useInt64Timestamp'?: boolean | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            selectedFields?: string | undefined
            startIndex?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: TableDataList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/datasets/:datasetId/tables/:tableId/insertAll': {
      $post: {
        input: { param: { projectId: string; datasetId: string; tableId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: TableDataInsertAllRequest }
        output: TableDataInsertAllResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/datasets/:datasetId/tables/:tableId/rowAccessPolicies': {
      $get: {
        input: { param: { projectId: string; datasetId: string; tableId: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListRowAccessPoliciesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/datasets/:datasetId:undelete': {
      $post: {
        input: { param: { projectId: string; datasetId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: UndeleteDatasetRequest }
        output: Dataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/jobs': {
      $get: {
        input: { param: { projectId: string } } & {
          query: {
            allUsers?: boolean | undefined
            maxCreationTime?: string | undefined
            maxResults?: number | undefined
            minCreationTime?: string | undefined
            pageToken?: string | undefined
            parentJobId?: string | undefined
            projection?: 'full' | 'minimal' | undefined
            stateFilter?: ('done' | 'pending' | 'running')[] | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: JobList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { projectId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Job }
        output: Job
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/jobs/:jobId': {
      $get: {
        input: { param: { projectId: string; jobId: string } } & {
          query: {
            location?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Job
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/jobs/:jobId/cancel': {
      $post: {
        input: { param: { projectId: string; jobId: string } } & {
          query: {
            location?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: JobCancelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/jobs/:jobId/delete': {
      $delete: {
        input: { param: { projectId: string; jobId: string } } & {
          query: {
            location?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/projects/:projectId/queries': {
      $post: {
        input: { param: { projectId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: QueryRequest }
        output: QueryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/queries/:jobId': {
      $get: {
        input: { param: { projectId: string; jobId: string } } & {
          query: {
            'formatOptions.useInt64Timestamp'?: boolean | undefined
            location?: string | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            startIndex?: string | undefined
            timeoutMs?: number | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GetQueryResultsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/serviceAccount': {
      $get: {
        input: { param: { projectId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GetServiceAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:resource:getIamPolicy': {
      $post: {
        input: { param: { resource: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GetIamPolicyRequest }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:resource:setIamPolicy': {
      $post: {
        input: { param: { resource: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetIamPolicyRequest }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:resource:testIamPermissions': {
      $post: {
        input: { param: { resource: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: TestIamPermissionsRequest }
        output: TestIamPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
