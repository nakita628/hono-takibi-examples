import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetImageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerRegistryV20150921BatchGetImageHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetImageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
