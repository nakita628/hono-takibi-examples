import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationRecommendationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetEc2WindowsBarleyServiceDescribeComponentConfigurationRecommendationHandler =
  app.openapi(
    postXAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationRecommendationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
