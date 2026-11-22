import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921GetLifecyclePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerRegistryV20150921GetLifecyclePolicyHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerRegistryV20150921GetLifecyclePolicyRoute,
  (c) => {},
)
