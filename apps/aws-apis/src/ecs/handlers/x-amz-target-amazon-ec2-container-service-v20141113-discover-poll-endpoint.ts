import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113DiscoverPollEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerServiceV20141113DiscoverPollEndpointHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113DiscoverPollEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
