import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921CreateRepositoryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerRegistryV20150921CreateRepositoryHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerRegistryV20150921CreateRepositoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
