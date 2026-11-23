import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftUpdateBuildRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftUpdateBuildHandler = app.openapi(
  postXAmzTargetGameLiftUpdateBuildRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
