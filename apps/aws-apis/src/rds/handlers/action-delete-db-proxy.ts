import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteDBProxyRoute, postActionDeleteDBProxyRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteDbProxyHandler = app
  .openapi(getActionDeleteDBProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteDBProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
