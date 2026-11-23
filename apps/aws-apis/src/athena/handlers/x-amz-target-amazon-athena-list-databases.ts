import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaListDatabasesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaListDatabasesHandler = app.openapi(
  postXAmzTargetAmazonAthenaListDatabasesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
