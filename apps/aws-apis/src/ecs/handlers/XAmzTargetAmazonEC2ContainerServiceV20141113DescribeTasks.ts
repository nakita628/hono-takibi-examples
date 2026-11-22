import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTasksRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113DescribeTasksHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTasksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
