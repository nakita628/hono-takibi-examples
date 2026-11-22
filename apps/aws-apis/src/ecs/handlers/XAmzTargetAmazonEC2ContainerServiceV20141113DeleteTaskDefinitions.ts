import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113DeleteTaskDefinitionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113DeleteTaskDefinitionsHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113DeleteTaskDefinitionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
