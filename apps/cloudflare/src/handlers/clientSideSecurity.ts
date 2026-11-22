import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdPageShieldPoliciesPolicyIdRoute,
  getZonesZoneIdPageShieldConnectionsConnectionIdRoute,
  getZonesZoneIdPageShieldConnectionsRoute,
  getZonesZoneIdPageShieldCookiesCookieIdRoute,
  getZonesZoneIdPageShieldCookiesRoute,
  getZonesZoneIdPageShieldPoliciesPolicyIdRoute,
  getZonesZoneIdPageShieldPoliciesRoute,
  getZonesZoneIdPageShieldRoute,
  getZonesZoneIdPageShieldScriptsRoute,
  getZonesZoneIdPageShieldScriptsScriptIdRoute,
  postZonesZoneIdPageShieldPoliciesRoute,
  putZonesZoneIdPageShieldPoliciesPolicyIdRoute,
  putZonesZoneIdPageShieldRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientSideSecurityHandler = app
  .openapi(getZonesZoneIdPageShieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdPageShieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdPageShieldConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdPageShieldConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdPageShieldCookiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdPageShieldCookiesCookieIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdPageShieldPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdPageShieldPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdPageShieldPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdPageShieldPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdPageShieldPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdPageShieldScriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdPageShieldScriptsScriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
