import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDeregisterGameServerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftDeregisterGameServerHandler = app.openapi(
  postXAmzTargetGameLiftDeregisterGameServerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
