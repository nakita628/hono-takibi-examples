import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteGlobalReplicationGroupRoute,
  postActionDeleteGlobalReplicationGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteGlobalReplicationGroupHandler = app
  .openapi(getActionDeleteGlobalReplicationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteGlobalReplicationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
