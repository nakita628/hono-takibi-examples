import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerRegistryV20150921TagResourceHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerRegistryV20150921TagResourceRoute,
  (c) => {},
)
