import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113TagResourceHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
