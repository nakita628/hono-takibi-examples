import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerServiceV20141113ListTagsForResourceHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113ListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
