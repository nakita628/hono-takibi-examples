import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionFailoverGlobalReplicationGroupRoute,
  postActionFailoverGlobalReplicationGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionFailoverGlobalReplicationGroupHandler = app
  .openapi(getActionFailoverGlobalReplicationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionFailoverGlobalReplicationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
