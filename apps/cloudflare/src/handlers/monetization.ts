import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdMonetizationRulesRoute,
  deleteZonesZoneIdMonetizationRulesRuleIdRoute,
  getAccountOrZoneAccountOrZoneIdMonetizationRoute,
  getAccountsAccountIdMonetizationRoute,
  getZonesZoneIdMonetizationRoute,
  getZonesZoneIdMonetizationRulesRoute,
  getZonesZoneIdMonetizationRulesRuleIdRoute,
  patchZonesZoneIdMonetizationRulesRuleIdRoute,
  postAccountOrZoneAccountOrZoneIdMonetizationRoute,
  postAccountsAccountIdMonetizationRoute,
  postZonesZoneIdMonetizationRoute,
  putZonesZoneIdMonetizationRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const monetizationHandler = app
  .openapi(getAccountsAccountIdMonetizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdMonetizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdMonetizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdMonetizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdMonetizationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdMonetizationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdMonetizationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdMonetizationRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdMonetizationRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdMonetizationRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdMonetizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdMonetizationRoute, (c) => {
    throw new Error('Not implemented')
  })
