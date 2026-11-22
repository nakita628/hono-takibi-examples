import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113CreateServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113CreateServiceHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113CreateServiceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
