import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAmazonML20141212AddTags(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.AddTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonML_20141212.AddTags'].$post(args, options))
}

export async function postXAmzTargetAmazonML20141212CreateBatchPrediction(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateBatchPrediction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonML_20141212.CreateBatchPrediction'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonML20141212CreateDataSourceFromRDS(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRDS']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRDS'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonML20141212CreateDataSourceFromRedshift(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRedshift']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRedshift'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonML20141212CreateDataSourceFromS3(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromS3']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromS3'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonML20141212CreateEvaluation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateEvaluation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonML_20141212.CreateEvaluation'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonML20141212CreateMLModel(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.CreateMLModel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonML_20141212.CreateMLModel'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonML20141212CreateRealtimeEndpoint(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonML_20141212.CreateRealtimeEndpoint']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonML_20141212.CreateRealtimeEndpoint'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonML20141212DeleteBatchPrediction(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteBatchPrediction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonML_20141212.DeleteBatchPrediction'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonML20141212DeleteDataSource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteDataSource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonML_20141212.DeleteDataSource'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonML20141212DeleteEvaluation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteEvaluation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonML_20141212.DeleteEvaluation'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonML20141212DeleteMLModel(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteMLModel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonML_20141212.DeleteMLModel'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonML20141212DeleteRealtimeEndpoint(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteRealtimeEndpoint']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonML_20141212.DeleteRealtimeEndpoint'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonML20141212DeleteTags(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.DeleteTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonML_20141212.DeleteTags'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonML20141212DescribeBatchPredictions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeBatchPredictions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonML_20141212.DescribeBatchPredictions'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonML20141212DescribeDataSources(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeDataSources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonML_20141212.DescribeDataSources'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonML20141212DescribeEvaluations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeEvaluations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonML_20141212.DescribeEvaluations'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonML20141212DescribeMLModels(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeMLModels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonML_20141212.DescribeMLModels'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonML20141212DescribeTags(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.DescribeTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonML_20141212.DescribeTags'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonML20141212GetBatchPrediction(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonML_20141212.GetBatchPrediction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonML_20141212.GetBatchPrediction'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonML20141212GetDataSource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.GetDataSource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonML_20141212.GetDataSource'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonML20141212GetEvaluation(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.GetEvaluation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonML_20141212.GetEvaluation'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonML20141212GetMLModel(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.GetMLModel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonML_20141212.GetMLModel'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonML20141212Predict(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.Predict']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonML_20141212.Predict'].$post(args, options))
}

export async function postXAmzTargetAmazonML20141212UpdateBatchPrediction(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateBatchPrediction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonML_20141212.UpdateBatchPrediction'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonML20141212UpdateDataSource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateDataSource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonML_20141212.UpdateDataSource'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonML20141212UpdateEvaluation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateEvaluation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonML_20141212.UpdateEvaluation'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonML20141212UpdateMLModel(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonML_20141212.UpdateMLModel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonML_20141212.UpdateMLModel'].$post(args, options),
  )
}
