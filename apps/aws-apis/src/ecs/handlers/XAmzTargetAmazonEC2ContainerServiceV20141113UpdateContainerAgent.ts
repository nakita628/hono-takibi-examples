import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113UpdateContainerAgentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113UpdateContainerAgentHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113UpdateContainerAgentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
