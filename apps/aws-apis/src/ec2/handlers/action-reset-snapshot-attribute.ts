import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionResetSnapshotAttributeRoute,
  postActionResetSnapshotAttributeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionResetSnapshotAttributeHandler = app
  .openapi(getActionResetSnapshotAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionResetSnapshotAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
