import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921GetDownloadUrlForLayerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerRegistryV20150921GetDownloadUrlForLayerHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerRegistryV20150921GetDownloadUrlForLayerRoute,
    (c) => {},
  )
