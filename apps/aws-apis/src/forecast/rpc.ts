import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAmazonForecastCreateAutoPredictor(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.CreateAutoPredictor']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.CreateAutoPredictor'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastCreateDataset(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateDataset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.CreateDataset'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastCreateDatasetGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.CreateDatasetGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.CreateDatasetGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastCreateDatasetImportJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.CreateDatasetImportJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.CreateDatasetImportJob'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastCreateExplainability(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.CreateExplainability']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.CreateExplainability'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastCreateExplainabilityExport(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.CreateExplainabilityExport']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.CreateExplainabilityExport'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastCreateForecast(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateForecast']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.CreateForecast'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastCreateForecastExportJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.CreateForecastExportJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.CreateForecastExportJob'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastCreateMonitor(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.CreateMonitor']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.CreateMonitor'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastCreatePredictor(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.CreatePredictor']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.CreatePredictor'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastCreatePredictorBacktestExportJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.CreatePredictorBacktestExportJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.CreatePredictorBacktestExportJob'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastCreateWhatIfAnalysis(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.CreateWhatIfAnalysis']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.CreateWhatIfAnalysis'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastCreateWhatIfForecast(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.CreateWhatIfForecast']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.CreateWhatIfForecast'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastCreateWhatIfForecastExport(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.CreateWhatIfForecastExport']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.CreateWhatIfForecastExport'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastDeleteDataset(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteDataset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.DeleteDataset'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastDeleteDatasetGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.DeleteDatasetGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.DeleteDatasetGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastDeleteDatasetImportJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.DeleteDatasetImportJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.DeleteDatasetImportJob'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastDeleteExplainability(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.DeleteExplainability']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.DeleteExplainability'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastDeleteExplainabilityExport(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.DeleteExplainabilityExport']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.DeleteExplainabilityExport'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastDeleteForecast(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteForecast']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.DeleteForecast'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastDeleteForecastExportJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.DeleteForecastExportJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.DeleteForecastExportJob'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastDeleteMonitor(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DeleteMonitor']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.DeleteMonitor'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastDeletePredictor(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DeletePredictor']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.DeletePredictor'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastDeletePredictorBacktestExportJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.DeletePredictorBacktestExportJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.DeletePredictorBacktestExportJob'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastDeleteResourceTree(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.DeleteResourceTree']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.DeleteResourceTree'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastDeleteWhatIfAnalysis(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.DeleteWhatIfAnalysis']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.DeleteWhatIfAnalysis'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastDeleteWhatIfForecast(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.DeleteWhatIfForecast']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.DeleteWhatIfForecast'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastDeleteWhatIfForecastExport(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.DeleteWhatIfForecastExport']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.DeleteWhatIfForecastExport'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastDescribeAutoPredictor(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.DescribeAutoPredictor']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.DescribeAutoPredictor'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastDescribeDataset(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DescribeDataset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.DescribeDataset'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastDescribeDatasetGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.DescribeDatasetGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.DescribeDatasetGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastDescribeDatasetImportJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.DescribeDatasetImportJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.DescribeDatasetImportJob'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastDescribeExplainability(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.DescribeExplainability']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.DescribeExplainability'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastDescribeExplainabilityExport(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.DescribeExplainabilityExport']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.DescribeExplainabilityExport'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastDescribeForecast(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DescribeForecast']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.DescribeForecast'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastDescribeForecastExportJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.DescribeForecastExportJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.DescribeForecastExportJob'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastDescribeMonitor(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.DescribeMonitor']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.DescribeMonitor'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastDescribePredictor(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.DescribePredictor']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.DescribePredictor'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastDescribePredictorBacktestExportJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.DescribePredictorBacktestExportJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.DescribePredictorBacktestExportJob'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastDescribeWhatIfAnalysis(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.DescribeWhatIfAnalysis']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.DescribeWhatIfAnalysis'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastDescribeWhatIfForecast(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.DescribeWhatIfForecast']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.DescribeWhatIfForecast'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastDescribeWhatIfForecastExport(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.DescribeWhatIfForecastExport']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.DescribeWhatIfForecastExport'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastGetAccuracyMetrics(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.GetAccuracyMetrics']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.GetAccuracyMetrics'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastListDatasetGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.ListDatasetGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.ListDatasetGroups'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastListDatasetImportJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.ListDatasetImportJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.ListDatasetImportJobs'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastListDatasets(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListDatasets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.ListDatasets'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastListExplainabilities(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.ListExplainabilities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.ListExplainabilities'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastListExplainabilityExports(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.ListExplainabilityExports']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.ListExplainabilityExports'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastListForecastExportJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.ListForecastExportJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.ListForecastExportJobs'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastListForecasts(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListForecasts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.ListForecasts'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastListMonitorEvaluations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.ListMonitorEvaluations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.ListMonitorEvaluations'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastListMonitors(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListMonitors']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.ListMonitors'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastListPredictorBacktestExportJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.ListPredictorBacktestExportJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.ListPredictorBacktestExportJobs'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastListPredictors(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ListPredictors']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.ListPredictors'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastListWhatIfAnalyses(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.ListWhatIfAnalyses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.ListWhatIfAnalyses'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastListWhatIfForecastExports(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.ListWhatIfForecastExports']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.ListWhatIfForecastExports'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastListWhatIfForecasts(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.ListWhatIfForecasts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.ListWhatIfForecasts'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastResumeResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.ResumeResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.ResumeResource'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastStopResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.StopResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.StopResource'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastTagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastUntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecast.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastUpdateDatasetGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecast.UpdateDatasetGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecast.UpdateDatasetGroup'].$post(args, options),
  )
}
