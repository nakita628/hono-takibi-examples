import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113DeleteServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113DeleteServiceHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113DeleteServiceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
