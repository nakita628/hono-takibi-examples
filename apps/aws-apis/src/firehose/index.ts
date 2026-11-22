import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetFirehose20150804CreateDeliveryStreamHandler,
  XAmzTargetFirehose20150804DeleteDeliveryStreamHandler,
  XAmzTargetFirehose20150804DescribeDeliveryStreamHandler,
  XAmzTargetFirehose20150804ListDeliveryStreamsHandler,
  XAmzTargetFirehose20150804ListTagsForDeliveryStreamHandler,
  XAmzTargetFirehose20150804PutRecordBatchHandler,
  XAmzTargetFirehose20150804PutRecordHandler,
  XAmzTargetFirehose20150804StartDeliveryStreamEncryptionHandler,
  XAmzTargetFirehose20150804StopDeliveryStreamEncryptionHandler,
  XAmzTargetFirehose20150804TagDeliveryStreamHandler,
  XAmzTargetFirehose20150804UntagDeliveryStreamHandler,
  XAmzTargetFirehose20150804UpdateDestinationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetFirehose20150804CreateDeliveryStreamHandler)
  .route('/', XAmzTargetFirehose20150804DeleteDeliveryStreamHandler)
  .route('/', XAmzTargetFirehose20150804DescribeDeliveryStreamHandler)
  .route('/', XAmzTargetFirehose20150804ListDeliveryStreamsHandler)
  .route('/', XAmzTargetFirehose20150804ListTagsForDeliveryStreamHandler)
  .route('/', XAmzTargetFirehose20150804PutRecordHandler)
  .route('/', XAmzTargetFirehose20150804PutRecordBatchHandler)
  .route('/', XAmzTargetFirehose20150804StartDeliveryStreamEncryptionHandler)
  .route('/', XAmzTargetFirehose20150804StopDeliveryStreamEncryptionHandler)
  .route('/', XAmzTargetFirehose20150804TagDeliveryStreamHandler)
  .route('/', XAmzTargetFirehose20150804UntagDeliveryStreamHandler)
  .route('/', XAmzTargetFirehose20150804UpdateDestinationHandler)

export default app
