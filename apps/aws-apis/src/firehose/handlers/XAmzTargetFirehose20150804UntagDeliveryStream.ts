import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFirehose20150804UntagDeliveryStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFirehose20150804UntagDeliveryStreamHandler = app.openapi(
  postXAmzTargetFirehose20150804UntagDeliveryStreamRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
