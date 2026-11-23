import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateSnapshotCopyGrantRoute,
  postActionCreateSnapshotCopyGrantRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateSnapshotCopyGrantHandler = app
  .openapi(getActionCreateSnapshotCopyGrantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateSnapshotCopyGrantRoute, (c) => {
    throw new Error('Not implemented')
  })
