import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRedshiftDataGetStatementResultRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRedshiftDataGetStatementResultHandler = app.openapi(
  postXAmzTargetRedshiftDataGetStatementResultRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
