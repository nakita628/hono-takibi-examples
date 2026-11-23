import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113UpdateTaskSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerServiceV20141113UpdateTaskSetHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113UpdateTaskSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
