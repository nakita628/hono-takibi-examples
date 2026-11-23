import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftRegisterGameServerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftRegisterGameServerHandler = app.openapi(
  postXAmzTargetGameLiftRegisterGameServerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
