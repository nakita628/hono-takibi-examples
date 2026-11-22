import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921BatchDeleteImageRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerRegistryV20150921BatchDeleteImageHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerRegistryV20150921BatchDeleteImageRoute,
  (c) => {},
)
