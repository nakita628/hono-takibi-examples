import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFirehose20150804TagDeliveryStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFirehose20150804TagDeliveryStreamHandler = app.openapi(
  postXAmzTargetFirehose20150804TagDeliveryStreamRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
