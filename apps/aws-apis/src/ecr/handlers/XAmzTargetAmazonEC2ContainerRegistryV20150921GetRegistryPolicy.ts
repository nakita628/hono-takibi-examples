import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921GetRegistryPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerRegistryV20150921GetRegistryPolicyHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerRegistryV20150921GetRegistryPolicyRoute,
  (c) => {},
)
