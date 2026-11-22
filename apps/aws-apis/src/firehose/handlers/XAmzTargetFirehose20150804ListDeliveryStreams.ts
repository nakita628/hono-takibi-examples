import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFirehose20150804ListDeliveryStreamsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFirehose20150804ListDeliveryStreamsHandler = app.openapi(
  postXAmzTargetFirehose20150804ListDeliveryStreamsRoute,
  (c) => {},
)
