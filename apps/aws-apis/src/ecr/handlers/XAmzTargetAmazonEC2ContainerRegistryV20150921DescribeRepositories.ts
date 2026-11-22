import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeRepositoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerRegistryV20150921DescribeRepositoriesHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeRepositoriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
