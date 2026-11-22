import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128RebootRelationalDatabaseRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128RebootRelationalDatabaseHandler = app.openapi(
  postXAmzTargetLightsail20161128RebootRelationalDatabaseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
