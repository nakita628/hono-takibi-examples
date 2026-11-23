import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyReplicationGroupRoute,
  postActionModifyReplicationGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyReplicationGroupHandler = app
  .openapi(getActionModifyReplicationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyReplicationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
