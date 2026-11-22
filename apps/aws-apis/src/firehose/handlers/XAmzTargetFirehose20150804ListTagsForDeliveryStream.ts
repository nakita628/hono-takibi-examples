import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFirehose20150804ListTagsForDeliveryStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFirehose20150804ListTagsForDeliveryStreamHandler = app.openapi(
  postXAmzTargetFirehose20150804ListTagsForDeliveryStreamRoute,
  (c) => {},
)
