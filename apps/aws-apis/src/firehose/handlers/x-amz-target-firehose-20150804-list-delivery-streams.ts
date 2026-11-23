import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFirehose20150804ListDeliveryStreamsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFirehose20150804ListDeliveryStreamsHandler = app.openapi(
  postXAmzTargetFirehose20150804ListDeliveryStreamsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
