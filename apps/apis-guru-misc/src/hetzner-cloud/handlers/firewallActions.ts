import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFirewallsIdActionsActionIdRoute,
  getFirewallsIdActionsRoute,
  postFirewallsIdActionsApplyToResourcesRoute,
  postFirewallsIdActionsRemoveFromResourcesRoute,
  postFirewallsIdActionsSetRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const firewallActionsHandler = app
  .openapi(getFirewallsIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFirewallsIdActionsApplyToResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFirewallsIdActionsRemoveFromResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFirewallsIdActionsSetRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFirewallsIdActionsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
