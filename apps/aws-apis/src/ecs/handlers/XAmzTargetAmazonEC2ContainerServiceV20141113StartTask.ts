import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113StartTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113StartTaskHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113StartTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
