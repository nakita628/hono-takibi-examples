import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921SetRepositoryPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerRegistryV20150921SetRepositoryPolicyHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerRegistryV20150921SetRepositoryPolicyRoute,
  (c) => {},
)
