import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteIpamScopeRoute, postActionDeleteIpamScopeRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteIpamScopeHandler = app
  .openapi(getActionDeleteIpamScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteIpamScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
