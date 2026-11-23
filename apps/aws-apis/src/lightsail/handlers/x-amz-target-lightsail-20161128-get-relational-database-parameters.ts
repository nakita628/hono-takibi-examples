import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetRelationalDatabaseParametersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetRelationalDatabaseParametersHandler = app.openapi(
  postXAmzTargetLightsail20161128GetRelationalDatabaseParametersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
