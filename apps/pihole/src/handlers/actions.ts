import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postActionFlushArpRoute,
  postActionFlushLogsRoute,
  postActionFlushNetworkRoute,
  postActionGravityRoute,
  postActionRestartdnsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionsHandler = app
  .openapi(postActionGravityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRestartdnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionFlushLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionFlushArpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionFlushNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
