import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113CreateTaskSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerServiceV20141113CreateTaskSetHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113CreateTaskSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
