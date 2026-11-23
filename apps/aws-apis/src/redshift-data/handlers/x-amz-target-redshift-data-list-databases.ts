import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRedshiftDataListDatabasesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRedshiftDataListDatabasesHandler = app.openapi(
  postXAmzTargetRedshiftDataListDatabasesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
