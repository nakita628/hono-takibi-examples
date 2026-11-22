import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeContextRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeContextHandler = app.openapi(
  postXAmzTargetSageMakerDescribeContextRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
