import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaDeletePreparedStatementRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaDeletePreparedStatementHandler = app.openapi(
  postXAmzTargetAmazonAthenaDeletePreparedStatementRoute,
  (c) => {},
)
