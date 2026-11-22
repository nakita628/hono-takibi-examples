import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113CreateCapacityProviderRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113CreateCapacityProviderHandler =
  app.openapi(postXAmzTargetAmazonEC2ContainerServiceV20141113CreateCapacityProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
