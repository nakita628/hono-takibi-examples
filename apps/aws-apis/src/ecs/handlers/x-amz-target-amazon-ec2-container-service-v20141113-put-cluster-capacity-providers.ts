import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113PutClusterCapacityProvidersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerServiceV20141113PutClusterCapacityProvidersHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerServiceV20141113PutClusterCapacityProvidersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
