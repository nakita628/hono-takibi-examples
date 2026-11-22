import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftUpdateBuildRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftUpdateBuildHandler = app.openapi(
  postXAmzTargetGameLiftUpdateBuildRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
