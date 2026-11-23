import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113ListClustersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerServiceV20141113ListClustersHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113ListClustersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
