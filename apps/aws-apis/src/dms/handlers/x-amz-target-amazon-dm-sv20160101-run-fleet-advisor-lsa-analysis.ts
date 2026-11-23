import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101RunFleetAdvisorLsaAnalysisRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101RunFleetAdvisorLsaAnalysisHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101RunFleetAdvisorLsaAnalysisRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
