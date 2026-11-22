import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdAddressingRegionalHostnamesHostnameRoute,
  getAccountsAccountIdAddressingRegionalHostnamesRegionsRoute,
  getZonesZoneIdAddressingRegionalHostnamesHostnameRoute,
  getZonesZoneIdAddressingRegionalHostnamesRoute,
  patchZonesZoneIdAddressingRegionalHostnamesHostnameRoute,
  postZonesZoneIdAddressingRegionalHostnamesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dlsRegionalServicesHandler = app
  .openapi(getAccountsAccountIdAddressingRegionalHostnamesRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdAddressingRegionalHostnamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdAddressingRegionalHostnamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdAddressingRegionalHostnamesHostnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdAddressingRegionalHostnamesHostnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdAddressingRegionalHostnamesHostnameRoute, (c) => {
    throw new Error('Not implemented')
  })
