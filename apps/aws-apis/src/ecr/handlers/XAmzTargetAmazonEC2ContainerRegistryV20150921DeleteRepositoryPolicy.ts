import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRepositoryPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRepositoryPolicyHandler =
  app.openapi(postXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRepositoryPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
