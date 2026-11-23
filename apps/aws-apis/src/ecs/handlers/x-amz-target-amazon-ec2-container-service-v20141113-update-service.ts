import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113UpdateServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerServiceV20141113UpdateServiceHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113UpdateServiceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
