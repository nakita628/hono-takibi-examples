import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113UpdateTaskProtectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113UpdateTaskProtectionHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113UpdateTaskProtectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
