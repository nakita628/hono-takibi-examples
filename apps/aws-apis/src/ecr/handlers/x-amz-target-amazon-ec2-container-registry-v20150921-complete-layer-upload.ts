import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921CompleteLayerUploadRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerRegistryV20150921CompleteLayerUploadHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerRegistryV20150921CompleteLayerUploadRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
