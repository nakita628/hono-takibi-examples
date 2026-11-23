import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128DeleteRelationalDatabaseRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128DeleteRelationalDatabaseHandler = app.openapi(
  postXAmzTargetLightsail20161128DeleteRelationalDatabaseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
