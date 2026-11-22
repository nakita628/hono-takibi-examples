import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateReplicationGroupRoute,
  postActionCreateReplicationGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateReplicationGroupHandler = app
  .openapi(getActionCreateReplicationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateReplicationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
