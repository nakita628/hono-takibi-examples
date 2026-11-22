import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteClientVpnEndpointRoute,
  postActionDeleteClientVpnEndpointRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteClientVpnEndpointHandler = app
  .openapi(getActionDeleteClientVpnEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteClientVpnEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
