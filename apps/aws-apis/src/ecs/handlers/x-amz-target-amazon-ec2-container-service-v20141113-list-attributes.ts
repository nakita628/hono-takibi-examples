import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113ListAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerServiceV20141113ListAttributesHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113ListAttributesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
