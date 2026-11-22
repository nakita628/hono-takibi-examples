import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerRegistryV20150921ListTagsForResourceHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerRegistryV20150921ListTagsForResourceRoute,
  (c) => {},
)
