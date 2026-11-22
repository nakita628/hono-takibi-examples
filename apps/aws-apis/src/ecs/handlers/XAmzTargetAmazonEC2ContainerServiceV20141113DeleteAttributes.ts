import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113DeleteAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113DeleteAttributesHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113DeleteAttributesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
