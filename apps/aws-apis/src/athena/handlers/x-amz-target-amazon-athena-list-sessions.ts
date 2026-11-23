import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaListSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaListSessionsHandler = app.openapi(
  postXAmzTargetAmazonAthenaListSessionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
