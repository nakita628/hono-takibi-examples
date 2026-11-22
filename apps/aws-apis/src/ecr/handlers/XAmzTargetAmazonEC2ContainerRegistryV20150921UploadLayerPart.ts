import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921UploadLayerPartRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerRegistryV20150921UploadLayerPartHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerRegistryV20150921UploadLayerPartRoute,
  (c) => {},
)
