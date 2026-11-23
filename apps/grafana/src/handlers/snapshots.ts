import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteSnapshotsKeyRoute, getSnapshotsKeyRoute, postSnapshotsRoute } from '../routes'

const app = new OpenAPIHono()

export const snapshotsHandler = app
  .openapi(postSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSnapshotsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnapshotsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
