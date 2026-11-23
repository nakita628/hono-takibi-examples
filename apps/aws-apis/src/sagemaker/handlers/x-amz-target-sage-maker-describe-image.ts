import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeImageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeImageHandler = app.openapi(
  postXAmzTargetSageMakerDescribeImageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
