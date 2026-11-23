import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerRegistryV20150921PutRegistryPolicyHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
