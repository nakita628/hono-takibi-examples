import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeRegistryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerRegistryV20150921DescribeRegistryHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeRegistryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
