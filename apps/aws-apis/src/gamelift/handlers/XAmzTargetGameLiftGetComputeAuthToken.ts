import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftGetComputeAuthTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftGetComputeAuthTokenHandler = app.openapi(
  postXAmzTargetGameLiftGetComputeAuthTokenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
