import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateClientVpnEndpointRoute,
  postActionCreateClientVpnEndpointRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateClientVpnEndpointHandler = app
  .openapi(getActionCreateClientVpnEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateClientVpnEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
