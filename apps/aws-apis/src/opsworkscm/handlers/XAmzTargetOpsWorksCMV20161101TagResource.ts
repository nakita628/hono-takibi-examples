import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorksCMV20161101TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorksCMV20161101TagResourceHandler = app.openapi(
  postXAmzTargetOpsWorksCMV20161101TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
