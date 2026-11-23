import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAuthorizeSnapshotAccessRoute,
  postActionAuthorizeSnapshotAccessRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionAuthorizeSnapshotAccessHandler = app
  .openapi(getActionAuthorizeSnapshotAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAuthorizeSnapshotAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
