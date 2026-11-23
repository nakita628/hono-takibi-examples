import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRemoveRoleFromDBClusterRoute,
  postActionRemoveRoleFromDBClusterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionRemoveRoleFromDbClusterHandler = app
  .openapi(getActionRemoveRoleFromDBClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRemoveRoleFromDBClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
