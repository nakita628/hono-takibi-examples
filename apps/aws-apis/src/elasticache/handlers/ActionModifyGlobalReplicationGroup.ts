import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyGlobalReplicationGroupRoute,
  postActionModifyGlobalReplicationGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyGlobalReplicationGroupHandler = app
  .openapi(getActionModifyGlobalReplicationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyGlobalReplicationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
