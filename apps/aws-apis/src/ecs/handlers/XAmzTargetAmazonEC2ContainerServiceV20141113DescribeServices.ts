import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113DescribeServicesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113DescribeServicesHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113DescribeServicesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
