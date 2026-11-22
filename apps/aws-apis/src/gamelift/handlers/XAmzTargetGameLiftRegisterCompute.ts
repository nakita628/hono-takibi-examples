import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftRegisterComputeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftRegisterComputeHandler = app.openapi(
  postXAmzTargetGameLiftRegisterComputeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
