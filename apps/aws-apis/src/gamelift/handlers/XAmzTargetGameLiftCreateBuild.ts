import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftCreateBuildRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftCreateBuildHandler = app.openapi(
  postXAmzTargetGameLiftCreateBuildRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
