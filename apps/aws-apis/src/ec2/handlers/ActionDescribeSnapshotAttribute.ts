import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeSnapshotAttributeRoute,
  postActionDescribeSnapshotAttributeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeSnapshotAttributeHandler = app
  .openapi(getActionDescribeSnapshotAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeSnapshotAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
