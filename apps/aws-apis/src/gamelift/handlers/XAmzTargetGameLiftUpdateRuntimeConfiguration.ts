import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftUpdateRuntimeConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftUpdateRuntimeConfigurationHandler = app.openapi(
  postXAmzTargetGameLiftUpdateRuntimeConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
