import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorksCMV20161101RestoreServerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorksCmV20161101RestoreServerHandler = app.openapi(
  postXAmzTargetOpsWorksCMV20161101RestoreServerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
