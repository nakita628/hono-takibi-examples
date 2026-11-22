import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAmazonML20141212AddTagsHandler,
  XAmzTargetAmazonML20141212CreateBatchPredictionHandler,
  XAmzTargetAmazonML20141212CreateDataSourceFromRDSHandler,
  XAmzTargetAmazonML20141212CreateDataSourceFromRedshiftHandler,
  XAmzTargetAmazonML20141212CreateDataSourceFromS3Handler,
  XAmzTargetAmazonML20141212CreateEvaluationHandler,
  XAmzTargetAmazonML20141212CreateMLModelHandler,
  XAmzTargetAmazonML20141212CreateRealtimeEndpointHandler,
  XAmzTargetAmazonML20141212DeleteBatchPredictionHandler,
  XAmzTargetAmazonML20141212DeleteDataSourceHandler,
  XAmzTargetAmazonML20141212DeleteEvaluationHandler,
  XAmzTargetAmazonML20141212DeleteMLModelHandler,
  XAmzTargetAmazonML20141212DeleteRealtimeEndpointHandler,
  XAmzTargetAmazonML20141212DeleteTagsHandler,
  XAmzTargetAmazonML20141212DescribeBatchPredictionsHandler,
  XAmzTargetAmazonML20141212DescribeDataSourcesHandler,
  XAmzTargetAmazonML20141212DescribeEvaluationsHandler,
  XAmzTargetAmazonML20141212DescribeMLModelsHandler,
  XAmzTargetAmazonML20141212DescribeTagsHandler,
  XAmzTargetAmazonML20141212GetBatchPredictionHandler,
  XAmzTargetAmazonML20141212GetDataSourceHandler,
  XAmzTargetAmazonML20141212GetEvaluationHandler,
  XAmzTargetAmazonML20141212GetMLModelHandler,
  XAmzTargetAmazonML20141212PredictHandler,
  XAmzTargetAmazonML20141212UpdateBatchPredictionHandler,
  XAmzTargetAmazonML20141212UpdateDataSourceHandler,
  XAmzTargetAmazonML20141212UpdateEvaluationHandler,
  XAmzTargetAmazonML20141212UpdateMLModelHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAmazonML20141212AddTagsHandler)
  .route('/', XAmzTargetAmazonML20141212CreateBatchPredictionHandler)
  .route('/', XAmzTargetAmazonML20141212CreateDataSourceFromRDSHandler)
  .route('/', XAmzTargetAmazonML20141212CreateDataSourceFromRedshiftHandler)
  .route('/', XAmzTargetAmazonML20141212CreateDataSourceFromS3Handler)
  .route('/', XAmzTargetAmazonML20141212CreateEvaluationHandler)
  .route('/', XAmzTargetAmazonML20141212CreateMLModelHandler)
  .route('/', XAmzTargetAmazonML20141212CreateRealtimeEndpointHandler)
  .route('/', XAmzTargetAmazonML20141212DeleteBatchPredictionHandler)
  .route('/', XAmzTargetAmazonML20141212DeleteDataSourceHandler)
  .route('/', XAmzTargetAmazonML20141212DeleteEvaluationHandler)
  .route('/', XAmzTargetAmazonML20141212DeleteMLModelHandler)
  .route('/', XAmzTargetAmazonML20141212DeleteRealtimeEndpointHandler)
  .route('/', XAmzTargetAmazonML20141212DeleteTagsHandler)
  .route('/', XAmzTargetAmazonML20141212DescribeBatchPredictionsHandler)
  .route('/', XAmzTargetAmazonML20141212DescribeDataSourcesHandler)
  .route('/', XAmzTargetAmazonML20141212DescribeEvaluationsHandler)
  .route('/', XAmzTargetAmazonML20141212DescribeMLModelsHandler)
  .route('/', XAmzTargetAmazonML20141212DescribeTagsHandler)
  .route('/', XAmzTargetAmazonML20141212GetBatchPredictionHandler)
  .route('/', XAmzTargetAmazonML20141212GetDataSourceHandler)
  .route('/', XAmzTargetAmazonML20141212GetEvaluationHandler)
  .route('/', XAmzTargetAmazonML20141212GetMLModelHandler)
  .route('/', XAmzTargetAmazonML20141212PredictHandler)
  .route('/', XAmzTargetAmazonML20141212UpdateBatchPredictionHandler)
  .route('/', XAmzTargetAmazonML20141212UpdateDataSourceHandler)
  .route('/', XAmzTargetAmazonML20141212UpdateEvaluationHandler)
  .route('/', XAmzTargetAmazonML20141212UpdateMLModelHandler)

export default app
