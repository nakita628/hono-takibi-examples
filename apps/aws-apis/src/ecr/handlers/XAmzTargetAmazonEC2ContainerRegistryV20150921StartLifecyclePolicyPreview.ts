import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921StartLifecyclePolicyPreviewRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerRegistryV20150921StartLifecyclePolicyPreviewHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerRegistryV20150921StartLifecyclePolicyPreviewRoute,
    (c) => {},
  )
