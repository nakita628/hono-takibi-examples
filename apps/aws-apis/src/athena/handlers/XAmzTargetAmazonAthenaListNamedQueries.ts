import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaListNamedQueriesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaListNamedQueriesHandler = app.openapi(
  postXAmzTargetAmazonAthenaListNamedQueriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
