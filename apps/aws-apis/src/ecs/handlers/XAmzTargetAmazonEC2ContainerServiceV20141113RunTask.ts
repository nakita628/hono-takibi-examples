import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113RunTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113RunTaskHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113RunTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
