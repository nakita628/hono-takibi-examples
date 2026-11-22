import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921GetRepositoryPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerRegistryV20150921GetRepositoryPolicyHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerRegistryV20150921GetRepositoryPolicyRoute,
  (c) => {},
)
