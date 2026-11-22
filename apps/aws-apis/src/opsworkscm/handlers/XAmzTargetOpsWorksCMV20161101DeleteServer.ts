import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorksCMV20161101DeleteServerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorksCMV20161101DeleteServerHandler = app.openapi(
  postXAmzTargetOpsWorksCMV20161101DeleteServerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
