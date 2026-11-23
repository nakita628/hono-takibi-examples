import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRedshiftDataListStatementsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRedshiftDataListStatementsHandler = app.openapi(
  postXAmzTargetRedshiftDataListStatementsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
