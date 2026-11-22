import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateDBSnapshotRoute, postActionCreateDBSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateDBSnapshotHandler = app
  .openapi(getActionCreateDBSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateDBSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
