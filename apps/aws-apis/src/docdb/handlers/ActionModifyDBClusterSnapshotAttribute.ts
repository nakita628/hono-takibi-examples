import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyDBClusterSnapshotAttributeRoute,
  postActionModifyDBClusterSnapshotAttributeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyDBClusterSnapshotAttributeHandler = app
  .openapi(getActionModifyDBClusterSnapshotAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyDBClusterSnapshotAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
