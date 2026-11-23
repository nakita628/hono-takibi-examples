import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftGetComputeAuthTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftGetComputeAuthTokenHandler = app.openapi(
  postXAmzTargetGameLiftGetComputeAuthTokenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
