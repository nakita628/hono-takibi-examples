import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeUserProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeUserProfileHandler = app.openapi(
  postXAmzTargetSageMakerDescribeUserProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
