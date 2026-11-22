import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftUpdateGameServerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftUpdateGameServerHandler = app.openapi(
  postXAmzTargetGameLiftUpdateGameServerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
