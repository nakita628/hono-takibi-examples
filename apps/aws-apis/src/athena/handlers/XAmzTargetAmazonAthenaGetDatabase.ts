import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetDatabaseRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaGetDatabaseHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetDatabaseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
