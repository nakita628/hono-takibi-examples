import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyDBSnapshotRoute, postActionModifyDBSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionModifyDBSnapshotHandler = app
  .openapi(getActionModifyDBSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyDBSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
