import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDeleteBuildRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftDeleteBuildHandler = app.openapi(
  postXAmzTargetGameLiftDeleteBuildRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
