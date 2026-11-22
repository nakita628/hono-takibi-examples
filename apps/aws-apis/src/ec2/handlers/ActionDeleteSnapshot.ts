import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteSnapshotRoute, postActionDeleteSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteSnapshotHandler = app
  .openapi(getActionDeleteSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
