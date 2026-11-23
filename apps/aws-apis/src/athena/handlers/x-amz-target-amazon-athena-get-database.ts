import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetDatabaseRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaGetDatabaseHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetDatabaseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
