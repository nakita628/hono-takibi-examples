import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113DeleteCapacityProviderRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113DeleteCapacityProviderHandler =
  app.openapi(postXAmzTargetAmazonEC2ContainerServiceV20141113DeleteCapacityProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
