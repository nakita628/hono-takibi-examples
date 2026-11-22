import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113DeleteTaskSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113DeleteTaskSetHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113DeleteTaskSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
