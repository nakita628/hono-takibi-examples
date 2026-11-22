import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SecurityFirewallBypassRoute,
  deleteV1SecurityFirewallBypassRulesRoute,
  deleteV1SecurityFirewallConfigConfigVersionRoute,
  getV1SecurityFirewallAttackStatusRoute,
  getV1SecurityFirewallBypassRoute,
  getV1SecurityFirewallBypassRulesRoute,
  getV1SecurityFirewallConfigConfigVersionRoute,
  getV1SecurityFirewallConfigRoute,
  getV1SecurityFirewallEventsRoute,
  getV1SecurityFirewallEventsSummaryRoute,
  patchV1SecurityFirewallConfigRoute,
  postV1SecurityAttackModeRoute,
  postV1SecurityFirewallBypassRoute,
  postV1SecurityFirewallBypassRulesRoute,
  postV1SecurityFirewallConfigConfigVersionActivateRoute,
  postV1SecurityFirewallConfigGenerateRuleRoute,
  putV1SecurityFirewallBypassRulesRoute,
  putV1SecurityFirewallConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityHandler = app
  .openapi(postV1SecurityAttackModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SecurityFirewallConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SecurityFirewallConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1SecurityFirewallConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SecurityFirewallConfigConfigVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SecurityFirewallConfigConfigVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SecurityFirewallConfigConfigVersionActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SecurityFirewallAttackStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SecurityFirewallBypassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SecurityFirewallBypassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SecurityFirewallBypassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SecurityFirewallBypassRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SecurityFirewallBypassRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SecurityFirewallBypassRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SecurityFirewallBypassRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SecurityFirewallEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SecurityFirewallEventsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SecurityFirewallConfigGenerateRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
