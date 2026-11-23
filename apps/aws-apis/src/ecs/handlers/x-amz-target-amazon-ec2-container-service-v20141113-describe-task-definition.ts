import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTaskDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerServiceV20141113DescribeTaskDefinitionHandler =
  app.openapi(postXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTaskDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
