import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113UpdateContainerInstancesStateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113UpdateContainerInstancesStateHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerServiceV20141113UpdateContainerInstancesStateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
