import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaTagResourceHandler = app.openapi(
  postXAmzTargetAmazonAthenaTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
