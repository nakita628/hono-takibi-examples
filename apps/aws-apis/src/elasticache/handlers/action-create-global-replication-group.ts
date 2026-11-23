import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateGlobalReplicationGroupRoute,
  postActionCreateGlobalReplicationGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateGlobalReplicationGroupHandler = app
  .openapi(getActionCreateGlobalReplicationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateGlobalReplicationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
