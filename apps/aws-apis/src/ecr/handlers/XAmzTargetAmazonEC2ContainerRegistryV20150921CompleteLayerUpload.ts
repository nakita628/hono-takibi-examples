import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921CompleteLayerUploadRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerRegistryV20150921CompleteLayerUploadHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerRegistryV20150921CompleteLayerUploadRoute,
  (c) => {},
)
