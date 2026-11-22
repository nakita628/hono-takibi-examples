import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalFirewallsFirewallRoute,
  getProjectsProjectGlobalFirewallsFirewallRoute,
  getProjectsProjectGlobalFirewallsRoute,
  patchProjectsProjectGlobalFirewallsFirewallRoute,
  postProjectsProjectGlobalFirewallsRoute,
  putProjectsProjectGlobalFirewallsFirewallRoute,
} from '../routes'

const app = new OpenAPIHono()

export const firewallsHandler = app
  .openapi(getProjectsProjectGlobalFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalFirewallsFirewallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalFirewallsFirewallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectGlobalFirewallsFirewallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectGlobalFirewallsFirewallRoute, (c) => {
    throw new Error('Not implemented')
  })
