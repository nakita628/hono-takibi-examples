import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteDBSnapshotRoute, postActionDeleteDBSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteDBSnapshotHandler = app
  .openapi(getActionDeleteDBSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteDBSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
