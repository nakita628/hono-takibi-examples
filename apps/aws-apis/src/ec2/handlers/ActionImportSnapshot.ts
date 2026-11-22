import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionImportSnapshotRoute, postActionImportSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionImportSnapshotHandler = app
  .openapi(getActionImportSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionImportSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
