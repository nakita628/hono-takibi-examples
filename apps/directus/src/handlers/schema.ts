import { OpenAPIHono } from '@hono/zod-openapi'
import { getSchemaSnapshotRoute, postSchemaApplyRoute, postSchemaDiffRoute } from '../routes'

const app = new OpenAPIHono()

export const schemaHandler = app
  .openapi(getSchemaSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSchemaApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSchemaDiffRoute, (c) => {
    throw new Error('Not implemented')
  })
