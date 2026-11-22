import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113ListContainerInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113ListContainerInstancesHandler =
  app.openapi(postXAmzTargetAmazonEC2ContainerServiceV20141113ListContainerInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
