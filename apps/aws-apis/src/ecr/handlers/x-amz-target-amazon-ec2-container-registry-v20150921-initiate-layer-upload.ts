import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921InitiateLayerUploadRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerRegistryV20150921InitiateLayerUploadHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerRegistryV20150921InitiateLayerUploadRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
