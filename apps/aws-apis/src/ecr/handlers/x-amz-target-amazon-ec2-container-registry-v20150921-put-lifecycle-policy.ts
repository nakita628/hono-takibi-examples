import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921PutLifecyclePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerRegistryV20150921PutLifecyclePolicyHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerRegistryV20150921PutLifecyclePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
