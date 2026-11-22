import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DeleteFleetAdvisorCollectorRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101DeleteFleetAdvisorCollectorHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DeleteFleetAdvisorCollectorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
