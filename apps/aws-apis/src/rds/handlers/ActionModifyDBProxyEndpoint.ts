import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyDBProxyEndpointRoute,
  postActionModifyDBProxyEndpointRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyDBProxyEndpointHandler = app
  .openapi(getActionModifyDBProxyEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyDBProxyEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
