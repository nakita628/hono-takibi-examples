import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeEndpointConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeEndpointConfigHandler = app.openapi(
  postXAmzTargetSageMakerDescribeEndpointConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
