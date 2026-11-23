import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyDBSnapshotAttributeRoute,
  postActionModifyDBSnapshotAttributeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyDbSnapshotAttributeHandler = app
  .openapi(getActionModifyDBSnapshotAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyDBSnapshotAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
