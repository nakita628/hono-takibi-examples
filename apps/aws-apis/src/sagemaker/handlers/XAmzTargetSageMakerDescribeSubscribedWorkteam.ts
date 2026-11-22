import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeSubscribedWorkteamRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeSubscribedWorkteamHandler = app.openapi(
  postXAmzTargetSageMakerDescribeSubscribedWorkteamRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
