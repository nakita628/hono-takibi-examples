import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRestoreDBClusterToPointInTimeRoute,
  postActionRestoreDBClusterToPointInTimeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionRestoreDBClusterToPointInTimeHandler = app
  .openapi(getActionRestoreDBClusterToPointInTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRestoreDBClusterToPointInTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
