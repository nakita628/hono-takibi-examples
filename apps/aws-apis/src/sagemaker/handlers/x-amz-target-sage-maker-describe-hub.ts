import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeHubRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeHubHandler = app.openapi(
  postXAmzTargetSageMakerDescribeHubRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
