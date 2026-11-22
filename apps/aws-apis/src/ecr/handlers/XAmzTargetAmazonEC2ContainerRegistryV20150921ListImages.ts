import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921ListImagesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerRegistryV20150921ListImagesHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerRegistryV20150921ListImagesRoute,
  (c) => {},
)
