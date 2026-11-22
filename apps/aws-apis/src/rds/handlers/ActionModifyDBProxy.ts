import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyDBProxyRoute, postActionModifyDBProxyRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionModifyDBProxyHandler = app
  .openapi(getActionModifyDBProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyDBProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
