import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128UpdateRelationalDatabaseParametersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128UpdateRelationalDatabaseParametersHandler = app.openapi(
  postXAmzTargetLightsail20161128UpdateRelationalDatabaseParametersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
