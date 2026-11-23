import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRestoreDBClusterToPointInTimeRoute,
  postActionRestoreDBClusterToPointInTimeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionRestoreDbClusterToPointInTimeHandler = app
  .openapi(getActionRestoreDBClusterToPointInTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRestoreDBClusterToPointInTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
