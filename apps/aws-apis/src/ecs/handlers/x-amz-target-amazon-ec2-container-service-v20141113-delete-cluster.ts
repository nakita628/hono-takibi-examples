import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113DeleteClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerServiceV20141113DeleteClusterHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113DeleteClusterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
