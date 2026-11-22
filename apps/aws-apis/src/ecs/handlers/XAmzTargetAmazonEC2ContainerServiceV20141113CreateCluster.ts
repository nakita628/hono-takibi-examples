import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113CreateClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113CreateClusterHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113CreateClusterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
