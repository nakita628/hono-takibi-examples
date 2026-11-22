import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftListComputeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftListComputeHandler = app.openapi(
  postXAmzTargetGameLiftListComputeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
