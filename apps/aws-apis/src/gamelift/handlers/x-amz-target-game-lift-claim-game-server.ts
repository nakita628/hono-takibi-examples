import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftClaimGameServerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftClaimGameServerHandler = app.openapi(
  postXAmzTargetGameLiftClaimGameServerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
