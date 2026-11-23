import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTaskSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerServiceV20141113DescribeTaskSetsHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTaskSetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
