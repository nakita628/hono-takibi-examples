import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifySnapshotAttributeRoute,
  postActionModifySnapshotAttributeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifySnapshotAttributeHandler = app
  .openapi(getActionModifySnapshotAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifySnapshotAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
