import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyClientVpnEndpointRoute,
  postActionModifyClientVpnEndpointRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyClientVpnEndpointHandler = app
  .openapi(getActionModifyClientVpnEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyClientVpnEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
