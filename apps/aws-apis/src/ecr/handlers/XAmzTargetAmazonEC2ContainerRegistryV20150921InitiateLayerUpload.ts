import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921InitiateLayerUploadRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerRegistryV20150921InitiateLayerUploadHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerRegistryV20150921InitiateLayerUploadRoute,
  (c) => {},
)
