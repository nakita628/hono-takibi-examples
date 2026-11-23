import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDeregisterComputeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDeregisterComputeHandler = app.openapi(
  postXAmzTargetGameLiftDeregisterComputeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
