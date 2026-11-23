import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaListQueryExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaListQueryExecutionsHandler = app.openapi(
  postXAmzTargetAmazonAthenaListQueryExecutionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
