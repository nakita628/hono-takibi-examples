import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeWorkteamRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeWorkteamHandler = app.openapi(
  postXAmzTargetSageMakerDescribeWorkteamRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
