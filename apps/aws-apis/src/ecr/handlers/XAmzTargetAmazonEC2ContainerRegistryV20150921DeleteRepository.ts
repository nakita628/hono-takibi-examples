import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRepositoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRepositoryHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRepositoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
