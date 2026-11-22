import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteLifecyclePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerRegistryV20150921DeleteLifecyclePolicyHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteLifecyclePolicyRoute,
    (c) => {},
  )
