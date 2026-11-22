import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113ListServicesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113ListServicesHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113ListServicesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
