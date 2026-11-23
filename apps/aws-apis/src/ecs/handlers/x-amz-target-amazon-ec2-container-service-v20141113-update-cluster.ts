import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113UpdateClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerServiceV20141113UpdateClusterHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113UpdateClusterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
