import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteSnapshotCopyGrantRoute,
  postActionDeleteSnapshotCopyGrantRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteSnapshotCopyGrantHandler = app
  .openapi(getActionDeleteSnapshotCopyGrantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteSnapshotCopyGrantRoute, (c) => {
    throw new Error('Not implemented')
  })
