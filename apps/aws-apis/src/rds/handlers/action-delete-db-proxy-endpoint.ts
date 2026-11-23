import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteDBProxyEndpointRoute,
  postActionDeleteDBProxyEndpointRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteDbProxyEndpointHandler = app
  .openapi(getActionDeleteDBProxyEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteDBProxyEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
