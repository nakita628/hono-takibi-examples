import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaListNamedQueriesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaListNamedQueriesHandler = app.openapi(
  postXAmzTargetAmazonAthenaListNamedQueriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
