import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaListQueryExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaListQueryExecutionsHandler = app.openapi(
  postXAmzTargetAmazonAthenaListQueryExecutionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
