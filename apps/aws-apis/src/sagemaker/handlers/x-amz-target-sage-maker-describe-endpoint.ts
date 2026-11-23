import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeEndpointHandler = app.openapi(
  postXAmzTargetSageMakerDescribeEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
