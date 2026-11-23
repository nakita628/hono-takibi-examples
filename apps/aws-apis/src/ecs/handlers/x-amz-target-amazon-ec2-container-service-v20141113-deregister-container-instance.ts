import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113DeregisterContainerInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerServiceV20141113DeregisterContainerInstanceHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerServiceV20141113DeregisterContainerInstanceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
