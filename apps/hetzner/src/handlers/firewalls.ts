import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFirewallsIdRoute,
  getFirewallsIdRoute,
  getFirewallsRoute,
  postFirewallsRoute,
  putFirewallsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const firewallsHandler = app
  .openapi(getFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFirewallsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFirewallsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFirewallsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
