import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorksCMV20161101CreateServerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorksCmV20161101CreateServerHandler = app.openapi(
  postXAmzTargetOpsWorksCMV20161101CreateServerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
