import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFirewallsIdRoute,
  getFirewallsIdActionsActionIdRoute,
  getFirewallsIdActionsRoute,
  getFirewallsIdRoute,
  getFirewallsRoute,
  postFirewallsIdActionsApplyToResourcesRoute,
  postFirewallsIdActionsRemoveFromResourcesRoute,
  postFirewallsIdActionsSetRulesRoute,
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
  .openapi(deleteFirewallsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFirewallsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFirewallsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
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
