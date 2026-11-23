import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetQueryResultsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaGetQueryResultsHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetQueryResultsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
