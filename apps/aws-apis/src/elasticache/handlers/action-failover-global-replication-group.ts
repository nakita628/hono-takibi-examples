import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionFailoverGlobalReplicationGroupRoute,
  postActionFailoverGlobalReplicationGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionFailoverGlobalReplicationGroupHandler = app
  .openapi(getActionFailoverGlobalReplicationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionFailoverGlobalReplicationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
