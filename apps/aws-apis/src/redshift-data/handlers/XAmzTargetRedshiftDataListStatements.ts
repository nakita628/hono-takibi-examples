import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRedshiftDataListStatementsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRedshiftDataListStatementsHandler = app.openapi(
  postXAmzTargetRedshiftDataListStatementsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
