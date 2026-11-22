import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftClaimGameServerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftClaimGameServerHandler = app.openapi(
  postXAmzTargetGameLiftClaimGameServerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
