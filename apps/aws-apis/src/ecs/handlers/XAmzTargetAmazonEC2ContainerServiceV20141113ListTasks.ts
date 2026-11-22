import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113ListTasksRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113ListTasksHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113ListTasksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
