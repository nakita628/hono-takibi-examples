import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerServiceV20141113UntagResourceHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
