import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAmazonForecastCreateAutoPredictorHandler,
  xAmzTargetAmazonForecastCreateDatasetGroupHandler,
  xAmzTargetAmazonForecastCreateDatasetHandler,
  xAmzTargetAmazonForecastCreateDatasetImportJobHandler,
  xAmzTargetAmazonForecastCreateExplainabilityExportHandler,
  xAmzTargetAmazonForecastCreateExplainabilityHandler,
  xAmzTargetAmazonForecastCreateForecastExportJobHandler,
  xAmzTargetAmazonForecastCreateForecastHandler,
  xAmzTargetAmazonForecastCreateMonitorHandler,
  xAmzTargetAmazonForecastCreatePredictorBacktestExportJobHandler,
  xAmzTargetAmazonForecastCreatePredictorHandler,
  xAmzTargetAmazonForecastCreateWhatIfAnalysisHandler,
  xAmzTargetAmazonForecastCreateWhatIfForecastExportHandler,
  xAmzTargetAmazonForecastCreateWhatIfForecastHandler,
  xAmzTargetAmazonForecastDeleteDatasetGroupHandler,
  xAmzTargetAmazonForecastDeleteDatasetHandler,
  xAmzTargetAmazonForecastDeleteDatasetImportJobHandler,
  xAmzTargetAmazonForecastDeleteExplainabilityExportHandler,
  xAmzTargetAmazonForecastDeleteExplainabilityHandler,
  xAmzTargetAmazonForecastDeleteForecastExportJobHandler,
  xAmzTargetAmazonForecastDeleteForecastHandler,
  xAmzTargetAmazonForecastDeleteMonitorHandler,
  xAmzTargetAmazonForecastDeletePredictorBacktestExportJobHandler,
  xAmzTargetAmazonForecastDeletePredictorHandler,
  xAmzTargetAmazonForecastDeleteResourceTreeHandler,
  xAmzTargetAmazonForecastDeleteWhatIfAnalysisHandler,
  xAmzTargetAmazonForecastDeleteWhatIfForecastExportHandler,
  xAmzTargetAmazonForecastDeleteWhatIfForecastHandler,
  xAmzTargetAmazonForecastDescribeAutoPredictorHandler,
  xAmzTargetAmazonForecastDescribeDatasetGroupHandler,
  xAmzTargetAmazonForecastDescribeDatasetHandler,
  xAmzTargetAmazonForecastDescribeDatasetImportJobHandler,
  xAmzTargetAmazonForecastDescribeExplainabilityExportHandler,
  xAmzTargetAmazonForecastDescribeExplainabilityHandler,
  xAmzTargetAmazonForecastDescribeForecastExportJobHandler,
  xAmzTargetAmazonForecastDescribeForecastHandler,
  xAmzTargetAmazonForecastDescribeMonitorHandler,
  xAmzTargetAmazonForecastDescribePredictorBacktestExportJobHandler,
  xAmzTargetAmazonForecastDescribePredictorHandler,
  xAmzTargetAmazonForecastDescribeWhatIfAnalysisHandler,
  xAmzTargetAmazonForecastDescribeWhatIfForecastExportHandler,
  xAmzTargetAmazonForecastDescribeWhatIfForecastHandler,
  xAmzTargetAmazonForecastGetAccuracyMetricsHandler,
  xAmzTargetAmazonForecastListDatasetGroupsHandler,
  xAmzTargetAmazonForecastListDatasetImportJobsHandler,
  xAmzTargetAmazonForecastListDatasetsHandler,
  xAmzTargetAmazonForecastListExplainabilitiesHandler,
  xAmzTargetAmazonForecastListExplainabilityExportsHandler,
  xAmzTargetAmazonForecastListForecastExportJobsHandler,
  xAmzTargetAmazonForecastListForecastsHandler,
  xAmzTargetAmazonForecastListMonitorEvaluationsHandler,
  xAmzTargetAmazonForecastListMonitorsHandler,
  xAmzTargetAmazonForecastListPredictorBacktestExportJobsHandler,
  xAmzTargetAmazonForecastListPredictorsHandler,
  xAmzTargetAmazonForecastListTagsForResourceHandler,
  xAmzTargetAmazonForecastListWhatIfAnalysesHandler,
  xAmzTargetAmazonForecastListWhatIfForecastExportsHandler,
  xAmzTargetAmazonForecastListWhatIfForecastsHandler,
  xAmzTargetAmazonForecastResumeResourceHandler,
  xAmzTargetAmazonForecastStopResourceHandler,
  xAmzTargetAmazonForecastTagResourceHandler,
  xAmzTargetAmazonForecastUntagResourceHandler,
  xAmzTargetAmazonForecastUpdateDatasetGroupHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAmazonForecastCreateAutoPredictorHandler)
  .route('/', xAmzTargetAmazonForecastCreateDatasetHandler)
  .route('/', xAmzTargetAmazonForecastCreateDatasetGroupHandler)
  .route('/', xAmzTargetAmazonForecastCreateDatasetImportJobHandler)
  .route('/', xAmzTargetAmazonForecastCreateExplainabilityHandler)
  .route('/', xAmzTargetAmazonForecastCreateExplainabilityExportHandler)
  .route('/', xAmzTargetAmazonForecastCreateForecastHandler)
  .route('/', xAmzTargetAmazonForecastCreateForecastExportJobHandler)
  .route('/', xAmzTargetAmazonForecastCreateMonitorHandler)
  .route('/', xAmzTargetAmazonForecastCreatePredictorHandler)
  .route('/', xAmzTargetAmazonForecastCreatePredictorBacktestExportJobHandler)
  .route('/', xAmzTargetAmazonForecastCreateWhatIfAnalysisHandler)
  .route('/', xAmzTargetAmazonForecastCreateWhatIfForecastHandler)
  .route('/', xAmzTargetAmazonForecastCreateWhatIfForecastExportHandler)
  .route('/', xAmzTargetAmazonForecastDeleteDatasetHandler)
  .route('/', xAmzTargetAmazonForecastDeleteDatasetGroupHandler)
  .route('/', xAmzTargetAmazonForecastDeleteDatasetImportJobHandler)
  .route('/', xAmzTargetAmazonForecastDeleteExplainabilityHandler)
  .route('/', xAmzTargetAmazonForecastDeleteExplainabilityExportHandler)
  .route('/', xAmzTargetAmazonForecastDeleteForecastHandler)
  .route('/', xAmzTargetAmazonForecastDeleteForecastExportJobHandler)
  .route('/', xAmzTargetAmazonForecastDeleteMonitorHandler)
  .route('/', xAmzTargetAmazonForecastDeletePredictorHandler)
  .route('/', xAmzTargetAmazonForecastDeletePredictorBacktestExportJobHandler)
  .route('/', xAmzTargetAmazonForecastDeleteResourceTreeHandler)
  .route('/', xAmzTargetAmazonForecastDeleteWhatIfAnalysisHandler)
  .route('/', xAmzTargetAmazonForecastDeleteWhatIfForecastHandler)
  .route('/', xAmzTargetAmazonForecastDeleteWhatIfForecastExportHandler)
  .route('/', xAmzTargetAmazonForecastDescribeAutoPredictorHandler)
  .route('/', xAmzTargetAmazonForecastDescribeDatasetHandler)
  .route('/', xAmzTargetAmazonForecastDescribeDatasetGroupHandler)
  .route('/', xAmzTargetAmazonForecastDescribeDatasetImportJobHandler)
  .route('/', xAmzTargetAmazonForecastDescribeExplainabilityHandler)
  .route('/', xAmzTargetAmazonForecastDescribeExplainabilityExportHandler)
  .route('/', xAmzTargetAmazonForecastDescribeForecastHandler)
  .route('/', xAmzTargetAmazonForecastDescribeForecastExportJobHandler)
  .route('/', xAmzTargetAmazonForecastDescribeMonitorHandler)
  .route('/', xAmzTargetAmazonForecastDescribePredictorHandler)
  .route('/', xAmzTargetAmazonForecastDescribePredictorBacktestExportJobHandler)
  .route('/', xAmzTargetAmazonForecastDescribeWhatIfAnalysisHandler)
  .route('/', xAmzTargetAmazonForecastDescribeWhatIfForecastHandler)
  .route('/', xAmzTargetAmazonForecastDescribeWhatIfForecastExportHandler)
  .route('/', xAmzTargetAmazonForecastGetAccuracyMetricsHandler)
  .route('/', xAmzTargetAmazonForecastListDatasetGroupsHandler)
  .route('/', xAmzTargetAmazonForecastListDatasetImportJobsHandler)
  .route('/', xAmzTargetAmazonForecastListDatasetsHandler)
  .route('/', xAmzTargetAmazonForecastListExplainabilitiesHandler)
  .route('/', xAmzTargetAmazonForecastListExplainabilityExportsHandler)
  .route('/', xAmzTargetAmazonForecastListForecastExportJobsHandler)
  .route('/', xAmzTargetAmazonForecastListForecastsHandler)
  .route('/', xAmzTargetAmazonForecastListMonitorEvaluationsHandler)
  .route('/', xAmzTargetAmazonForecastListMonitorsHandler)
  .route('/', xAmzTargetAmazonForecastListPredictorBacktestExportJobsHandler)
  .route('/', xAmzTargetAmazonForecastListPredictorsHandler)
  .route('/', xAmzTargetAmazonForecastListTagsForResourceHandler)
  .route('/', xAmzTargetAmazonForecastListWhatIfAnalysesHandler)
  .route('/', xAmzTargetAmazonForecastListWhatIfForecastExportsHandler)
  .route('/', xAmzTargetAmazonForecastListWhatIfForecastsHandler)
  .route('/', xAmzTargetAmazonForecastResumeResourceHandler)
  .route('/', xAmzTargetAmazonForecastStopResourceHandler)
  .route('/', xAmzTargetAmazonForecastTagResourceHandler)
  .route('/', xAmzTargetAmazonForecastUntagResourceHandler)
  .route('/', xAmzTargetAmazonForecastUpdateDatasetGroupHandler)

export default app
