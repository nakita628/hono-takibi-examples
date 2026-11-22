import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921CreatePullThroughCacheRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerRegistryV20150921CreatePullThroughCacheRuleHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerRegistryV20150921CreatePullThroughCacheRuleRoute,
    (c) => {},
  )
