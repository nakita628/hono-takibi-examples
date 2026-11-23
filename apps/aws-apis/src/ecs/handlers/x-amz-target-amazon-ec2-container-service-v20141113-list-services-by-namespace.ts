import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113ListServicesByNamespaceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerServiceV20141113ListServicesByNamespaceHandler =
  app.openapi(postXAmzTargetAmazonEC2ContainerServiceV20141113ListServicesByNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
