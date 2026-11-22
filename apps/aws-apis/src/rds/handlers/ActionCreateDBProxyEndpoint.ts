import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateDBProxyEndpointRoute,
  postActionCreateDBProxyEndpointRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateDBProxyEndpointHandler = app
  .openapi(getActionCreateDBProxyEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateDBProxyEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
