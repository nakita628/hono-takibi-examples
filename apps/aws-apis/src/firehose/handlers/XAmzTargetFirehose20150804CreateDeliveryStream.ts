import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFirehose20150804CreateDeliveryStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFirehose20150804CreateDeliveryStreamHandler = app.openapi(
  postXAmzTargetFirehose20150804CreateDeliveryStreamRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
