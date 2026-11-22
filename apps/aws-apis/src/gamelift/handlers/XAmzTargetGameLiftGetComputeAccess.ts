import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftGetComputeAccessRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftGetComputeAccessHandler = app.openapi(
  postXAmzTargetGameLiftGetComputeAccessRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
