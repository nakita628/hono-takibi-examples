import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetPreparedStatementRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaGetPreparedStatementHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetPreparedStatementRoute,
  (c) => {},
)
