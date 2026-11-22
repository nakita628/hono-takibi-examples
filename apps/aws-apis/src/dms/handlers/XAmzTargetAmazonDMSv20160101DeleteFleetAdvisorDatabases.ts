import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DeleteFleetAdvisorDatabasesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101DeleteFleetAdvisorDatabasesHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DeleteFleetAdvisorDatabasesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
