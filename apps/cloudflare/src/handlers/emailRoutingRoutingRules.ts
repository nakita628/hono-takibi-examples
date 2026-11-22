import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdEmailRoutingRulesRuleIdentifierRoute,
  getAccountOrZoneAccountOrZoneIdEmailRoutingRulesRoute,
  getAccountsAccountIdEmailRoutingRulesRoute,
  getZonesZoneIdEmailRoutingRulesCatchAllRoute,
  getZonesZoneIdEmailRoutingRulesRoute,
  getZonesZoneIdEmailRoutingRulesRuleIdentifierRoute,
  postAccountsAccountIdEmailRoutingRulesPlanRoute,
  postZonesZoneIdEmailRoutingRulesRoute,
  putZonesZoneIdEmailRoutingRulesCatchAllRoute,
  putZonesZoneIdEmailRoutingRulesRuleIdentifierRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailRoutingRoutingRulesHandler = app
  .openapi(getAccountsAccountIdEmailRoutingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailRoutingRulesPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdEmailRoutingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdEmailRoutingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdEmailRoutingRulesCatchAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdEmailRoutingRulesCatchAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdEmailRoutingRulesRuleIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdEmailRoutingRulesRuleIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdEmailRoutingRulesRuleIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdEmailRoutingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
