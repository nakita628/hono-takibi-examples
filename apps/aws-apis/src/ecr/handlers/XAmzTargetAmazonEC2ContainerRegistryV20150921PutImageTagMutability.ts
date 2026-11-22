import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageTagMutabilityRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerRegistryV20150921PutImageTagMutabilityHandler =
  app.openapi(postXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageTagMutabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
