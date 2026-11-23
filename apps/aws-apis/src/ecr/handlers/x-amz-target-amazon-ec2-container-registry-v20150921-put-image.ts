import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerRegistryV20150921PutImageHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
