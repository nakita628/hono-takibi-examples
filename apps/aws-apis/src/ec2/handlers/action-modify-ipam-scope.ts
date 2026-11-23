import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyIpamScopeRoute, postActionModifyIpamScopeRoute } from '../routes'

const app = new OpenAPIHono()

export const actionModifyIpamScopeHandler = app
  .openapi(getActionModifyIpamScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyIpamScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
