import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113RegisterContainerInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113RegisterContainerInstanceHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerServiceV20141113RegisterContainerInstanceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
