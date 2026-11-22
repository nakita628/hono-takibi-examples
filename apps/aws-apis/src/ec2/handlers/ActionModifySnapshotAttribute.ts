import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifySnapshotAttributeRoute,
  postActionModifySnapshotAttributeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifySnapshotAttributeHandler = app
  .openapi(getActionModifySnapshotAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifySnapshotAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
