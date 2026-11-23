import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921StartImageScanRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerRegistryV20150921StartImageScanHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerRegistryV20150921StartImageScanRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
