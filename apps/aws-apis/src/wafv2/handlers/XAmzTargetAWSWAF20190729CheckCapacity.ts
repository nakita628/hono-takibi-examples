import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729CheckCapacityRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729CheckCapacityHandler = app.openapi(
  postXAmzTargetAWSWAF20190729CheckCapacityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
