import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113UpdateCapacityProviderRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113UpdateCapacityProviderHandler =
  app.openapi(postXAmzTargetAmazonEC2ContainerServiceV20141113UpdateCapacityProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
