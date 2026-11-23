import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetKinesis20131202AddTagsToStreamHandler,
  xAmzTargetKinesis20131202CreateStreamHandler,
  xAmzTargetKinesis20131202DecreaseStreamRetentionPeriodHandler,
  xAmzTargetKinesis20131202DeleteStreamHandler,
  xAmzTargetKinesis20131202DeregisterStreamConsumerHandler,
  xAmzTargetKinesis20131202DescribeLimitsHandler,
  xAmzTargetKinesis20131202DescribeStreamConsumerHandler,
  xAmzTargetKinesis20131202DescribeStreamHandler,
  xAmzTargetKinesis20131202DescribeStreamSummaryHandler,
  xAmzTargetKinesis20131202DisableEnhancedMonitoringHandler,
  xAmzTargetKinesis20131202EnableEnhancedMonitoringHandler,
  xAmzTargetKinesis20131202GetRecordsHandler,
  xAmzTargetKinesis20131202GetShardIteratorHandler,
  xAmzTargetKinesis20131202IncreaseStreamRetentionPeriodHandler,
  xAmzTargetKinesis20131202ListShardsHandler,
  xAmzTargetKinesis20131202ListStreamConsumersHandler,
  xAmzTargetKinesis20131202ListStreamsHandler,
  xAmzTargetKinesis20131202ListTagsForStreamHandler,
  xAmzTargetKinesis20131202MergeShardsHandler,
  xAmzTargetKinesis20131202PutRecordHandler,
  xAmzTargetKinesis20131202PutRecordsHandler,
  xAmzTargetKinesis20131202RegisterStreamConsumerHandler,
  xAmzTargetKinesis20131202RemoveTagsFromStreamHandler,
  xAmzTargetKinesis20131202SplitShardHandler,
  xAmzTargetKinesis20131202StartStreamEncryptionHandler,
  xAmzTargetKinesis20131202StopStreamEncryptionHandler,
  xAmzTargetKinesis20131202UpdateShardCountHandler,
  xAmzTargetKinesis20131202UpdateStreamModeHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetKinesis20131202AddTagsToStreamHandler)
  .route('/', xAmzTargetKinesis20131202CreateStreamHandler)
  .route('/', xAmzTargetKinesis20131202DecreaseStreamRetentionPeriodHandler)
  .route('/', xAmzTargetKinesis20131202DeleteStreamHandler)
  .route('/', xAmzTargetKinesis20131202DeregisterStreamConsumerHandler)
  .route('/', xAmzTargetKinesis20131202DescribeLimitsHandler)
  .route('/', xAmzTargetKinesis20131202DescribeStreamHandler)
  .route('/', xAmzTargetKinesis20131202DescribeStreamConsumerHandler)
  .route('/', xAmzTargetKinesis20131202DescribeStreamSummaryHandler)
  .route('/', xAmzTargetKinesis20131202DisableEnhancedMonitoringHandler)
  .route('/', xAmzTargetKinesis20131202EnableEnhancedMonitoringHandler)
  .route('/', xAmzTargetKinesis20131202GetRecordsHandler)
  .route('/', xAmzTargetKinesis20131202GetShardIteratorHandler)
  .route('/', xAmzTargetKinesis20131202IncreaseStreamRetentionPeriodHandler)
  .route('/', xAmzTargetKinesis20131202ListShardsHandler)
  .route('/', xAmzTargetKinesis20131202ListStreamConsumersHandler)
  .route('/', xAmzTargetKinesis20131202ListStreamsHandler)
  .route('/', xAmzTargetKinesis20131202ListTagsForStreamHandler)
  .route('/', xAmzTargetKinesis20131202MergeShardsHandler)
  .route('/', xAmzTargetKinesis20131202PutRecordHandler)
  .route('/', xAmzTargetKinesis20131202PutRecordsHandler)
  .route('/', xAmzTargetKinesis20131202RegisterStreamConsumerHandler)
  .route('/', xAmzTargetKinesis20131202RemoveTagsFromStreamHandler)
  .route('/', xAmzTargetKinesis20131202SplitShardHandler)
  .route('/', xAmzTargetKinesis20131202StartStreamEncryptionHandler)
  .route('/', xAmzTargetKinesis20131202StopStreamEncryptionHandler)
  .route('/', xAmzTargetKinesis20131202UpdateShardCountHandler)
  .route('/', xAmzTargetKinesis20131202UpdateStreamModeHandler)

export default app
