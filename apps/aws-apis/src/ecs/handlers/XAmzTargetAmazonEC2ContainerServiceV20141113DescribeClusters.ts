import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113DescribeClustersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113DescribeClustersHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113DescribeClustersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
