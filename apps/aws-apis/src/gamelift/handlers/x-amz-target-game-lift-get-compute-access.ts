import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftGetComputeAccessRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftGetComputeAccessHandler = app.openapi(
  postXAmzTargetGameLiftGetComputeAccessRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
