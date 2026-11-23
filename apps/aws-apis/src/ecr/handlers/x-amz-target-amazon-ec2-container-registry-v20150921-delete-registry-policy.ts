import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRegistryPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerRegistryV20150921DeleteRegistryPolicyHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRegistryPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
