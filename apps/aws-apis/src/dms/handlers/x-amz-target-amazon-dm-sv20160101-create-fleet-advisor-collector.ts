import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101CreateFleetAdvisorCollectorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101CreateFleetAdvisorCollectorHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101CreateFleetAdvisorCollectorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
