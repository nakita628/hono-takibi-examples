import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113PutAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerServiceV20141113PutAttributesHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113PutAttributesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
