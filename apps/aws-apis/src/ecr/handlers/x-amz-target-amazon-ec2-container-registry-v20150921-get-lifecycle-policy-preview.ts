import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921GetLifecyclePolicyPreviewRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerRegistryV20150921GetLifecyclePolicyPreviewHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerRegistryV20150921GetLifecyclePolicyPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
