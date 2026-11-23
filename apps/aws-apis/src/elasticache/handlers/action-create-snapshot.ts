import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateSnapshotRoute, postActionCreateSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateSnapshotHandler = app
  .openapi(getActionCreateSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
