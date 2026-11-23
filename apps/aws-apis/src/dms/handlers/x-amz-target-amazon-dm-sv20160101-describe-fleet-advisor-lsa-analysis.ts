import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorLsaAnalysisRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101DescribeFleetAdvisorLsaAnalysisHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorLsaAnalysisRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
