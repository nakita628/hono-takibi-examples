import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateIpamScopeRoute, postActionCreateIpamScopeRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateIpamScopeHandler = app
  .openapi(getActionCreateIpamScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateIpamScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
