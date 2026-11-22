import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImagesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImagesHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImagesRoute,
  (c) => {},
)
