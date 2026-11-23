import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetFirehose20150804CreateDeliveryStreamHandler,
  xAmzTargetFirehose20150804DeleteDeliveryStreamHandler,
  xAmzTargetFirehose20150804DescribeDeliveryStreamHandler,
  xAmzTargetFirehose20150804ListDeliveryStreamsHandler,
  xAmzTargetFirehose20150804ListTagsForDeliveryStreamHandler,
  xAmzTargetFirehose20150804PutRecordBatchHandler,
  xAmzTargetFirehose20150804PutRecordHandler,
  xAmzTargetFirehose20150804StartDeliveryStreamEncryptionHandler,
  xAmzTargetFirehose20150804StopDeliveryStreamEncryptionHandler,
  xAmzTargetFirehose20150804TagDeliveryStreamHandler,
  xAmzTargetFirehose20150804UntagDeliveryStreamHandler,
  xAmzTargetFirehose20150804UpdateDestinationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetFirehose20150804CreateDeliveryStreamHandler)
  .route('/', xAmzTargetFirehose20150804DeleteDeliveryStreamHandler)
  .route('/', xAmzTargetFirehose20150804DescribeDeliveryStreamHandler)
  .route('/', xAmzTargetFirehose20150804ListDeliveryStreamsHandler)
  .route('/', xAmzTargetFirehose20150804ListTagsForDeliveryStreamHandler)
  .route('/', xAmzTargetFirehose20150804PutRecordHandler)
  .route('/', xAmzTargetFirehose20150804PutRecordBatchHandler)
  .route('/', xAmzTargetFirehose20150804StartDeliveryStreamEncryptionHandler)
  .route('/', xAmzTargetFirehose20150804StopDeliveryStreamEncryptionHandler)
  .route('/', xAmzTargetFirehose20150804TagDeliveryStreamHandler)
  .route('/', xAmzTargetFirehose20150804UntagDeliveryStreamHandler)
  .route('/', xAmzTargetFirehose20150804UpdateDestinationHandler)

export default app
