import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRedshiftDataGetStatementResultRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRedshiftDataGetStatementResultHandler = app.openapi(
  postXAmzTargetRedshiftDataGetStatementResultRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
