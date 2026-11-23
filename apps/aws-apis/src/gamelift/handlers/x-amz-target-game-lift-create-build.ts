import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftCreateBuildRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftCreateBuildHandler = app.openapi(
  postXAmzTargetGameLiftCreateBuildRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
