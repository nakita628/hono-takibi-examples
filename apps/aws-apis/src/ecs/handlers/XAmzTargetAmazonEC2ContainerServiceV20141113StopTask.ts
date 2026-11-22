import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113StopTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113StopTaskHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113StopTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
