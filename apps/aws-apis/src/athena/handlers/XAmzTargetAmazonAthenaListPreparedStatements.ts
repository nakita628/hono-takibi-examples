import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaListPreparedStatementsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaListPreparedStatementsHandler = app.openapi(
  postXAmzTargetAmazonAthenaListPreparedStatementsRoute,
  (c) => {},
)
