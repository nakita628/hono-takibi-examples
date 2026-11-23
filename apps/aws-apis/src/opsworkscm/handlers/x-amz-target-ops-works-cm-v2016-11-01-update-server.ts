import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorksCMV20161101UpdateServerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorksCmV20161101UpdateServerHandler = app.openapi(
  postXAmzTargetOpsWorksCMV20161101UpdateServerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
