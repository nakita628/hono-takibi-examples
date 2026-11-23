import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAmazonMl20141212AddTagsHandler,
  xAmzTargetAmazonMl20141212CreateBatchPredictionHandler,
  xAmzTargetAmazonMl20141212CreateDataSourceFromRdsHandler,
  xAmzTargetAmazonMl20141212CreateDataSourceFromRedshiftHandler,
  xAmzTargetAmazonMl20141212CreateDataSourceFromS3Handler,
  xAmzTargetAmazonMl20141212CreateEvaluationHandler,
  xAmzTargetAmazonMl20141212CreateMlModelHandler,
  xAmzTargetAmazonMl20141212CreateRealtimeEndpointHandler,
  xAmzTargetAmazonMl20141212DeleteBatchPredictionHandler,
  xAmzTargetAmazonMl20141212DeleteDataSourceHandler,
  xAmzTargetAmazonMl20141212DeleteEvaluationHandler,
  xAmzTargetAmazonMl20141212DeleteMlModelHandler,
  xAmzTargetAmazonMl20141212DeleteRealtimeEndpointHandler,
  xAmzTargetAmazonMl20141212DeleteTagsHandler,
  xAmzTargetAmazonMl20141212DescribeBatchPredictionsHandler,
  xAmzTargetAmazonMl20141212DescribeDataSourcesHandler,
  xAmzTargetAmazonMl20141212DescribeEvaluationsHandler,
  xAmzTargetAmazonMl20141212DescribeMlModelsHandler,
  xAmzTargetAmazonMl20141212DescribeTagsHandler,
  xAmzTargetAmazonMl20141212GetBatchPredictionHandler,
  xAmzTargetAmazonMl20141212GetDataSourceHandler,
  xAmzTargetAmazonMl20141212GetEvaluationHandler,
  xAmzTargetAmazonMl20141212GetMlModelHandler,
  xAmzTargetAmazonMl20141212PredictHandler,
  xAmzTargetAmazonMl20141212UpdateBatchPredictionHandler,
  xAmzTargetAmazonMl20141212UpdateDataSourceHandler,
  xAmzTargetAmazonMl20141212UpdateEvaluationHandler,
  xAmzTargetAmazonMl20141212UpdateMlModelHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAmazonMl20141212AddTagsHandler)
  .route('/', xAmzTargetAmazonMl20141212CreateBatchPredictionHandler)
  .route('/', xAmzTargetAmazonMl20141212CreateDataSourceFromRdsHandler)
  .route('/', xAmzTargetAmazonMl20141212CreateDataSourceFromRedshiftHandler)
  .route('/', xAmzTargetAmazonMl20141212CreateDataSourceFromS3Handler)
  .route('/', xAmzTargetAmazonMl20141212CreateEvaluationHandler)
  .route('/', xAmzTargetAmazonMl20141212CreateMlModelHandler)
  .route('/', xAmzTargetAmazonMl20141212CreateRealtimeEndpointHandler)
  .route('/', xAmzTargetAmazonMl20141212DeleteBatchPredictionHandler)
  .route('/', xAmzTargetAmazonMl20141212DeleteDataSourceHandler)
  .route('/', xAmzTargetAmazonMl20141212DeleteEvaluationHandler)
  .route('/', xAmzTargetAmazonMl20141212DeleteMlModelHandler)
  .route('/', xAmzTargetAmazonMl20141212DeleteRealtimeEndpointHandler)
  .route('/', xAmzTargetAmazonMl20141212DeleteTagsHandler)
  .route('/', xAmzTargetAmazonMl20141212DescribeBatchPredictionsHandler)
  .route('/', xAmzTargetAmazonMl20141212DescribeDataSourcesHandler)
  .route('/', xAmzTargetAmazonMl20141212DescribeEvaluationsHandler)
  .route('/', xAmzTargetAmazonMl20141212DescribeMlModelsHandler)
  .route('/', xAmzTargetAmazonMl20141212DescribeTagsHandler)
  .route('/', xAmzTargetAmazonMl20141212GetBatchPredictionHandler)
  .route('/', xAmzTargetAmazonMl20141212GetDataSourceHandler)
  .route('/', xAmzTargetAmazonMl20141212GetEvaluationHandler)
  .route('/', xAmzTargetAmazonMl20141212GetMlModelHandler)
  .route('/', xAmzTargetAmazonMl20141212PredictHandler)
  .route('/', xAmzTargetAmazonMl20141212UpdateBatchPredictionHandler)
  .route('/', xAmzTargetAmazonMl20141212UpdateDataSourceHandler)
  .route('/', xAmzTargetAmazonMl20141212UpdateEvaluationHandler)
  .route('/', xAmzTargetAmazonMl20141212UpdateMlModelHandler)

export default app
