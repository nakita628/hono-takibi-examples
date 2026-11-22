import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyHostsRoute, postActionModifyHostsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionModifyHostsHandler = app
  .openapi(getActionModifyHostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyHostsRoute, (c) => {
    throw new Error('Not implemented')
  })
