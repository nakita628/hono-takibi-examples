import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRedshiftDataListSchemasRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRedshiftDataListSchemasHandler = app.openapi(
  postXAmzTargetRedshiftDataListSchemasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
