import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAmazonForecastCreateAutoPredictorHandler,
  XAmzTargetAmazonForecastCreateDatasetGroupHandler,
  XAmzTargetAmazonForecastCreateDatasetHandler,
  XAmzTargetAmazonForecastCreateDatasetImportJobHandler,
  XAmzTargetAmazonForecastCreateExplainabilityExportHandler,
  XAmzTargetAmazonForecastCreateExplainabilityHandler,
  XAmzTargetAmazonForecastCreateForecastExportJobHandler,
  XAmzTargetAmazonForecastCreateForecastHandler,
  XAmzTargetAmazonForecastCreateMonitorHandler,
  XAmzTargetAmazonForecastCreatePredictorBacktestExportJobHandler,
  XAmzTargetAmazonForecastCreatePredictorHandler,
  XAmzTargetAmazonForecastCreateWhatIfAnalysisHandler,
  XAmzTargetAmazonForecastCreateWhatIfForecastExportHandler,
  XAmzTargetAmazonForecastCreateWhatIfForecastHandler,
  XAmzTargetAmazonForecastDeleteDatasetGroupHandler,
  XAmzTargetAmazonForecastDeleteDatasetHandler,
  XAmzTargetAmazonForecastDeleteDatasetImportJobHandler,
  XAmzTargetAmazonForecastDeleteExplainabilityExportHandler,
  XAmzTargetAmazonForecastDeleteExplainabilityHandler,
  XAmzTargetAmazonForecastDeleteForecastExportJobHandler,
  XAmzTargetAmazonForecastDeleteForecastHandler,
  XAmzTargetAmazonForecastDeleteMonitorHandler,
  XAmzTargetAmazonForecastDeletePredictorBacktestExportJobHandler,
  XAmzTargetAmazonForecastDeletePredictorHandler,
  XAmzTargetAmazonForecastDeleteResourceTreeHandler,
  XAmzTargetAmazonForecastDeleteWhatIfAnalysisHandler,
  XAmzTargetAmazonForecastDeleteWhatIfForecastExportHandler,
  XAmzTargetAmazonForecastDeleteWhatIfForecastHandler,
  XAmzTargetAmazonForecastDescribeAutoPredictorHandler,
  XAmzTargetAmazonForecastDescribeDatasetGroupHandler,
  XAmzTargetAmazonForecastDescribeDatasetHandler,
  XAmzTargetAmazonForecastDescribeDatasetImportJobHandler,
  XAmzTargetAmazonForecastDescribeExplainabilityExportHandler,
  XAmzTargetAmazonForecastDescribeExplainabilityHandler,
  XAmzTargetAmazonForecastDescribeForecastExportJobHandler,
  XAmzTargetAmazonForecastDescribeForecastHandler,
  XAmzTargetAmazonForecastDescribeMonitorHandler,
  XAmzTargetAmazonForecastDescribePredictorBacktestExportJobHandler,
  XAmzTargetAmazonForecastDescribePredictorHandler,
  XAmzTargetAmazonForecastDescribeWhatIfAnalysisHandler,
  XAmzTargetAmazonForecastDescribeWhatIfForecastExportHandler,
  XAmzTargetAmazonForecastDescribeWhatIfForecastHandler,
  XAmzTargetAmazonForecastGetAccuracyMetricsHandler,
  XAmzTargetAmazonForecastListDatasetGroupsHandler,
  XAmzTargetAmazonForecastListDatasetImportJobsHandler,
  XAmzTargetAmazonForecastListDatasetsHandler,
  XAmzTargetAmazonForecastListExplainabilitiesHandler,
  XAmzTargetAmazonForecastListExplainabilityExportsHandler,
  XAmzTargetAmazonForecastListForecastExportJobsHandler,
  XAmzTargetAmazonForecastListForecastsHandler,
  XAmzTargetAmazonForecastListMonitorEvaluationsHandler,
  XAmzTargetAmazonForecastListMonitorsHandler,
  XAmzTargetAmazonForecastListPredictorBacktestExportJobsHandler,
  XAmzTargetAmazonForecastListPredictorsHandler,
  XAmzTargetAmazonForecastListTagsForResourceHandler,
  XAmzTargetAmazonForecastListWhatIfAnalysesHandler,
  XAmzTargetAmazonForecastListWhatIfForecastExportsHandler,
  XAmzTargetAmazonForecastListWhatIfForecastsHandler,
  XAmzTargetAmazonForecastResumeResourceHandler,
  XAmzTargetAmazonForecastStopResourceHandler,
  XAmzTargetAmazonForecastTagResourceHandler,
  XAmzTargetAmazonForecastUntagResourceHandler,
  XAmzTargetAmazonForecastUpdateDatasetGroupHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAmazonForecastCreateAutoPredictorHandler)
  .route('/', XAmzTargetAmazonForecastCreateDatasetHandler)
  .route('/', XAmzTargetAmazonForecastCreateDatasetGroupHandler)
  .route('/', XAmzTargetAmazonForecastCreateDatasetImportJobHandler)
  .route('/', XAmzTargetAmazonForecastCreateExplainabilityHandler)
  .route('/', XAmzTargetAmazonForecastCreateExplainabilityExportHandler)
  .route('/', XAmzTargetAmazonForecastCreateForecastHandler)
  .route('/', XAmzTargetAmazonForecastCreateForecastExportJobHandler)
  .route('/', XAmzTargetAmazonForecastCreateMonitorHandler)
  .route('/', XAmzTargetAmazonForecastCreatePredictorHandler)
  .route('/', XAmzTargetAmazonForecastCreatePredictorBacktestExportJobHandler)
  .route('/', XAmzTargetAmazonForecastCreateWhatIfAnalysisHandler)
  .route('/', XAmzTargetAmazonForecastCreateWhatIfForecastHandler)
  .route('/', XAmzTargetAmazonForecastCreateWhatIfForecastExportHandler)
  .route('/', XAmzTargetAmazonForecastDeleteDatasetHandler)
  .route('/', XAmzTargetAmazonForecastDeleteDatasetGroupHandler)
  .route('/', XAmzTargetAmazonForecastDeleteDatasetImportJobHandler)
  .route('/', XAmzTargetAmazonForecastDeleteExplainabilityHandler)
  .route('/', XAmzTargetAmazonForecastDeleteExplainabilityExportHandler)
  .route('/', XAmzTargetAmazonForecastDeleteForecastHandler)
  .route('/', XAmzTargetAmazonForecastDeleteForecastExportJobHandler)
  .route('/', XAmzTargetAmazonForecastDeleteMonitorHandler)
  .route('/', XAmzTargetAmazonForecastDeletePredictorHandler)
  .route('/', XAmzTargetAmazonForecastDeletePredictorBacktestExportJobHandler)
  .route('/', XAmzTargetAmazonForecastDeleteResourceTreeHandler)
  .route('/', XAmzTargetAmazonForecastDeleteWhatIfAnalysisHandler)
  .route('/', XAmzTargetAmazonForecastDeleteWhatIfForecastHandler)
  .route('/', XAmzTargetAmazonForecastDeleteWhatIfForecastExportHandler)
  .route('/', XAmzTargetAmazonForecastDescribeAutoPredictorHandler)
  .route('/', XAmzTargetAmazonForecastDescribeDatasetHandler)
  .route('/', XAmzTargetAmazonForecastDescribeDatasetGroupHandler)
  .route('/', XAmzTargetAmazonForecastDescribeDatasetImportJobHandler)
  .route('/', XAmzTargetAmazonForecastDescribeExplainabilityHandler)
  .route('/', XAmzTargetAmazonForecastDescribeExplainabilityExportHandler)
  .route('/', XAmzTargetAmazonForecastDescribeForecastHandler)
  .route('/', XAmzTargetAmazonForecastDescribeForecastExportJobHandler)
  .route('/', XAmzTargetAmazonForecastDescribeMonitorHandler)
  .route('/', XAmzTargetAmazonForecastDescribePredictorHandler)
  .route('/', XAmzTargetAmazonForecastDescribePredictorBacktestExportJobHandler)
  .route('/', XAmzTargetAmazonForecastDescribeWhatIfAnalysisHandler)
  .route('/', XAmzTargetAmazonForecastDescribeWhatIfForecastHandler)
  .route('/', XAmzTargetAmazonForecastDescribeWhatIfForecastExportHandler)
  .route('/', XAmzTargetAmazonForecastGetAccuracyMetricsHandler)
  .route('/', XAmzTargetAmazonForecastListDatasetGroupsHandler)
  .route('/', XAmzTargetAmazonForecastListDatasetImportJobsHandler)
  .route('/', XAmzTargetAmazonForecastListDatasetsHandler)
  .route('/', XAmzTargetAmazonForecastListExplainabilitiesHandler)
  .route('/', XAmzTargetAmazonForecastListExplainabilityExportsHandler)
  .route('/', XAmzTargetAmazonForecastListForecastExportJobsHandler)
  .route('/', XAmzTargetAmazonForecastListForecastsHandler)
  .route('/', XAmzTargetAmazonForecastListMonitorEvaluationsHandler)
  .route('/', XAmzTargetAmazonForecastListMonitorsHandler)
  .route('/', XAmzTargetAmazonForecastListPredictorBacktestExportJobsHandler)
  .route('/', XAmzTargetAmazonForecastListPredictorsHandler)
  .route('/', XAmzTargetAmazonForecastListTagsForResourceHandler)
  .route('/', XAmzTargetAmazonForecastListWhatIfAnalysesHandler)
  .route('/', XAmzTargetAmazonForecastListWhatIfForecastExportsHandler)
  .route('/', XAmzTargetAmazonForecastListWhatIfForecastsHandler)
  .route('/', XAmzTargetAmazonForecastResumeResourceHandler)
  .route('/', XAmzTargetAmazonForecastStopResourceHandler)
  .route('/', XAmzTargetAmazonForecastTagResourceHandler)
  .route('/', XAmzTargetAmazonForecastUntagResourceHandler)
  .route('/', XAmzTargetAmazonForecastUpdateDatasetGroupHandler)

export default app
