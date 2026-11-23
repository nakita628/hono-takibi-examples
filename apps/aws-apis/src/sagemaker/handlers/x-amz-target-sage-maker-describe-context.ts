import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeContextRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeContextHandler = app.openapi(
  postXAmzTargetSageMakerDescribeContextRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
