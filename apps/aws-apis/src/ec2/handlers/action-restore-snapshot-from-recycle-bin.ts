import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRestoreSnapshotFromRecycleBinRoute,
  postActionRestoreSnapshotFromRecycleBinRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionRestoreSnapshotFromRecycleBinHandler = app
  .openapi(getActionRestoreSnapshotFromRecycleBinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRestoreSnapshotFromRecycleBinRoute, (c) => {
    throw new Error('Not implemented')
  })
