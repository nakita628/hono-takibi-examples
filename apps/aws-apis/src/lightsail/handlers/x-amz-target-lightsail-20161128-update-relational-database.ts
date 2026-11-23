import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128UpdateRelationalDatabaseRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128UpdateRelationalDatabaseHandler = app.openapi(
  postXAmzTargetLightsail20161128UpdateRelationalDatabaseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
