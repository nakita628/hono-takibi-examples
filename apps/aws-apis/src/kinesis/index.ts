import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetKinesis20131202AddTagsToStreamHandler,
  XAmzTargetKinesis20131202CreateStreamHandler,
  XAmzTargetKinesis20131202DecreaseStreamRetentionPeriodHandler,
  XAmzTargetKinesis20131202DeleteStreamHandler,
  XAmzTargetKinesis20131202DeregisterStreamConsumerHandler,
  XAmzTargetKinesis20131202DescribeLimitsHandler,
  XAmzTargetKinesis20131202DescribeStreamConsumerHandler,
  XAmzTargetKinesis20131202DescribeStreamHandler,
  XAmzTargetKinesis20131202DescribeStreamSummaryHandler,
  XAmzTargetKinesis20131202DisableEnhancedMonitoringHandler,
  XAmzTargetKinesis20131202EnableEnhancedMonitoringHandler,
  XAmzTargetKinesis20131202GetRecordsHandler,
  XAmzTargetKinesis20131202GetShardIteratorHandler,
  XAmzTargetKinesis20131202IncreaseStreamRetentionPeriodHandler,
  XAmzTargetKinesis20131202ListShardsHandler,
  XAmzTargetKinesis20131202ListStreamConsumersHandler,
  XAmzTargetKinesis20131202ListStreamsHandler,
  XAmzTargetKinesis20131202ListTagsForStreamHandler,
  XAmzTargetKinesis20131202MergeShardsHandler,
  XAmzTargetKinesis20131202PutRecordHandler,
  XAmzTargetKinesis20131202PutRecordsHandler,
  XAmzTargetKinesis20131202RegisterStreamConsumerHandler,
  XAmzTargetKinesis20131202RemoveTagsFromStreamHandler,
  XAmzTargetKinesis20131202SplitShardHandler,
  XAmzTargetKinesis20131202StartStreamEncryptionHandler,
  XAmzTargetKinesis20131202StopStreamEncryptionHandler,
  XAmzTargetKinesis20131202UpdateShardCountHandler,
  XAmzTargetKinesis20131202UpdateStreamModeHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetKinesis20131202AddTagsToStreamHandler)
  .route('/', XAmzTargetKinesis20131202CreateStreamHandler)
  .route('/', XAmzTargetKinesis20131202DecreaseStreamRetentionPeriodHandler)
  .route('/', XAmzTargetKinesis20131202DeleteStreamHandler)
  .route('/', XAmzTargetKinesis20131202DeregisterStreamConsumerHandler)
  .route('/', XAmzTargetKinesis20131202DescribeLimitsHandler)
  .route('/', XAmzTargetKinesis20131202DescribeStreamHandler)
  .route('/', XAmzTargetKinesis20131202DescribeStreamConsumerHandler)
  .route('/', XAmzTargetKinesis20131202DescribeStreamSummaryHandler)
  .route('/', XAmzTargetKinesis20131202DisableEnhancedMonitoringHandler)
  .route('/', XAmzTargetKinesis20131202EnableEnhancedMonitoringHandler)
  .route('/', XAmzTargetKinesis20131202GetRecordsHandler)
  .route('/', XAmzTargetKinesis20131202GetShardIteratorHandler)
  .route('/', XAmzTargetKinesis20131202IncreaseStreamRetentionPeriodHandler)
  .route('/', XAmzTargetKinesis20131202ListShardsHandler)
  .route('/', XAmzTargetKinesis20131202ListStreamConsumersHandler)
  .route('/', XAmzTargetKinesis20131202ListStreamsHandler)
  .route('/', XAmzTargetKinesis20131202ListTagsForStreamHandler)
  .route('/', XAmzTargetKinesis20131202MergeShardsHandler)
  .route('/', XAmzTargetKinesis20131202PutRecordHandler)
  .route('/', XAmzTargetKinesis20131202PutRecordsHandler)
  .route('/', XAmzTargetKinesis20131202RegisterStreamConsumerHandler)
  .route('/', XAmzTargetKinesis20131202RemoveTagsFromStreamHandler)
  .route('/', XAmzTargetKinesis20131202SplitShardHandler)
  .route('/', XAmzTargetKinesis20131202StartStreamEncryptionHandler)
  .route('/', XAmzTargetKinesis20131202StopStreamEncryptionHandler)
  .route('/', XAmzTargetKinesis20131202UpdateShardCountHandler)
  .route('/', XAmzTargetKinesis20131202UpdateStreamModeHandler)

export default app
