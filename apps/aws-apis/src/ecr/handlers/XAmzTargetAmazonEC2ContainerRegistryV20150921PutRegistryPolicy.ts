import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryPolicyHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryPolicyRoute,
  (c) => {},
)
