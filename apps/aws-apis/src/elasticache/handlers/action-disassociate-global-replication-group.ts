import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisassociateGlobalReplicationGroupRoute,
  postActionDisassociateGlobalReplicationGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDisassociateGlobalReplicationGroupHandler = app
  .openapi(getActionDisassociateGlobalReplicationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisassociateGlobalReplicationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
