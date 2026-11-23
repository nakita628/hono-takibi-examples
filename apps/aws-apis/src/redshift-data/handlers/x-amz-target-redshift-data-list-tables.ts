import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRedshiftDataListTablesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRedshiftDataListTablesHandler = app.openapi(
  postXAmzTargetRedshiftDataListTablesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
