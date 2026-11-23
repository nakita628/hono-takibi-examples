import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFirehose20150804DeleteDeliveryStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFirehose20150804DeleteDeliveryStreamHandler = app.openapi(
  postXAmzTargetFirehose20150804DeleteDeliveryStreamRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
