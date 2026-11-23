import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921DescribePullThroughCacheRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerRegistryV20150921DescribePullThroughCacheRulesHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerRegistryV20150921DescribePullThroughCacheRulesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
