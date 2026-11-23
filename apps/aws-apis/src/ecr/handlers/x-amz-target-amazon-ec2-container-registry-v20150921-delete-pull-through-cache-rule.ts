import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921DeletePullThroughCacheRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerRegistryV20150921DeletePullThroughCacheRuleHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerRegistryV20150921DeletePullThroughCacheRuleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
