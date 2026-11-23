import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteReplicationGroupRoute,
  postActionDeleteReplicationGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteReplicationGroupHandler = app
  .openapi(getActionDeleteReplicationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteReplicationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
