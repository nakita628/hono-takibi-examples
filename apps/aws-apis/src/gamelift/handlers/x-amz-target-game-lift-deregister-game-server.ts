import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDeregisterGameServerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDeregisterGameServerHandler = app.openapi(
  postXAmzTargetGameLiftDeregisterGameServerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
