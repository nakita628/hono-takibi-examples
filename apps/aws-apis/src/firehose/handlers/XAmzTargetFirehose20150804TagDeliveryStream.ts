import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFirehose20150804TagDeliveryStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFirehose20150804TagDeliveryStreamHandler = app.openapi(
  postXAmzTargetFirehose20150804TagDeliveryStreamRoute,
  (c) => {},
)
