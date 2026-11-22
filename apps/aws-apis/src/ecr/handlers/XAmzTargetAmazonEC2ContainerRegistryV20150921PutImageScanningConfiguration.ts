import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageScanningConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerRegistryV20150921PutImageScanningConfigurationHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageScanningConfigurationRoute,
    (c) => {},
  )
