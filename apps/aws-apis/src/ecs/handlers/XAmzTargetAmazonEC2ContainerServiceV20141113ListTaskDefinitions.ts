import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113ListTaskDefinitionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113ListTaskDefinitionsHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113ListTaskDefinitionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
