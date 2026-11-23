import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateDBProxyRoute, postActionCreateDBProxyRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateDbProxyHandler = app
  .openapi(getActionCreateDBProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateDBProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
