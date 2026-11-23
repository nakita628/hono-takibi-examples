import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerRegistryV20150921UntagResourceHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerRegistryV20150921UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
