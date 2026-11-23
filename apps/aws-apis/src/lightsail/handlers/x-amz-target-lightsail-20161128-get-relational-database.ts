import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetRelationalDatabaseRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetRelationalDatabaseHandler = app.openapi(
  postXAmzTargetLightsail20161128GetRelationalDatabaseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
