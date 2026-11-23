import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postXAmzTargetFirehose20150804CreateDeliveryStreamRoute,
  postXAmzTargetFirehose20150804DeleteDeliveryStreamRoute,
  postXAmzTargetFirehose20150804DescribeDeliveryStreamRoute,
  postXAmzTargetFirehose20150804ListDeliveryStreamsRoute,
  postXAmzTargetFirehose20150804ListTagsForDeliveryStreamRoute,
  postXAmzTargetFirehose20150804PutRecordBatchRoute,
  postXAmzTargetFirehose20150804PutRecordRoute,
  postXAmzTargetFirehose20150804StartDeliveryStreamEncryptionRoute,
  postXAmzTargetFirehose20150804StopDeliveryStreamEncryptionRoute,
  postXAmzTargetFirehose20150804TagDeliveryStreamRoute,
  postXAmzTargetFirehose20150804UntagDeliveryStreamRoute,
  postXAmzTargetFirehose20150804UpdateDestinationRoute,
} from './routes'
import {
  postXAmzTargetFirehose20150804CreateDeliveryStreamRouteHandler,
  postXAmzTargetFirehose20150804DeleteDeliveryStreamRouteHandler,
  postXAmzTargetFirehose20150804DescribeDeliveryStreamRouteHandler,
  postXAmzTargetFirehose20150804ListDeliveryStreamsRouteHandler,
  postXAmzTargetFirehose20150804ListTagsForDeliveryStreamRouteHandler,
  postXAmzTargetFirehose20150804PutRecordBatchRouteHandler,
  postXAmzTargetFirehose20150804PutRecordRouteHandler,
  postXAmzTargetFirehose20150804StartDeliveryStreamEncryptionRouteHandler,
  postXAmzTargetFirehose20150804StopDeliveryStreamEncryptionRouteHandler,
  postXAmzTargetFirehose20150804TagDeliveryStreamRouteHandler,
  postXAmzTargetFirehose20150804UntagDeliveryStreamRouteHandler,
  postXAmzTargetFirehose20150804UpdateDestinationRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postXAmzTargetFirehose20150804CreateDeliveryStreamRoute,
    postXAmzTargetFirehose20150804CreateDeliveryStreamRouteHandler,
  )
  .openapi(
    postXAmzTargetFirehose20150804DeleteDeliveryStreamRoute,
    postXAmzTargetFirehose20150804DeleteDeliveryStreamRouteHandler,
  )
  .openapi(
    postXAmzTargetFirehose20150804DescribeDeliveryStreamRoute,
    postXAmzTargetFirehose20150804DescribeDeliveryStreamRouteHandler,
  )
  .openapi(
    postXAmzTargetFirehose20150804ListDeliveryStreamsRoute,
    postXAmzTargetFirehose20150804ListDeliveryStreamsRouteHandler,
  )
  .openapi(
    postXAmzTargetFirehose20150804ListTagsForDeliveryStreamRoute,
    postXAmzTargetFirehose20150804ListTagsForDeliveryStreamRouteHandler,
  )
  .openapi(
    postXAmzTargetFirehose20150804PutRecordRoute,
    postXAmzTargetFirehose20150804PutRecordRouteHandler,
  )
  .openapi(
    postXAmzTargetFirehose20150804PutRecordBatchRoute,
    postXAmzTargetFirehose20150804PutRecordBatchRouteHandler,
  )
  .openapi(
    postXAmzTargetFirehose20150804StartDeliveryStreamEncryptionRoute,
    postXAmzTargetFirehose20150804StartDeliveryStreamEncryptionRouteHandler,
  )
  .openapi(
    postXAmzTargetFirehose20150804StopDeliveryStreamEncryptionRoute,
    postXAmzTargetFirehose20150804StopDeliveryStreamEncryptionRouteHandler,
  )
  .openapi(
    postXAmzTargetFirehose20150804TagDeliveryStreamRoute,
    postXAmzTargetFirehose20150804TagDeliveryStreamRouteHandler,
  )
  .openapi(
    postXAmzTargetFirehose20150804UntagDeliveryStreamRoute,
    postXAmzTargetFirehose20150804UntagDeliveryStreamRouteHandler,
  )
  .openapi(
    postXAmzTargetFirehose20150804UpdateDestinationRoute,
    postXAmzTargetFirehose20150804UpdateDestinationRouteHandler,
  )

export default app
