import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921BatchCheckLayerAvailabilityRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerRegistryV20150921BatchCheckLayerAvailabilityHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerRegistryV20150921BatchCheckLayerAvailabilityRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
