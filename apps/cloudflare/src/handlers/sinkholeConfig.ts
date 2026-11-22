import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdIntelSinkholesSinkholeIdRoute,
  deleteZonesZoneIdIntelSinkholesSinkholeIdIngressesIngressIdRoute,
  getAccountOrZoneAccountOrZoneIdIntelSinkholesSinkholeIdIngressesRoute,
  getAccountsAccountIdIntelSinkholesRoute,
  getAccountsAccountIdIntelSinkholesSinkholeIdIngressesRoute,
  getAccountsAccountIdIntelSinkholesSinkholeIdRoute,
  getZonesZoneIdIntelSinkholesSinkholeIdIngressesIngressIdRoute,
  postAccountsAccountIdIntelSinkholesRoute,
  postZonesZoneIdIntelSinkholesSinkholeIdIngressesRoute,
  putAccountsAccountIdIntelSinkholesSinkholeIdRoute,
  putZonesZoneIdIntelSinkholesSinkholeIdIngressesIngressIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sinkholeConfigHandler = app
  .openapi(getAccountsAccountIdIntelSinkholesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdIntelSinkholesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdIntelSinkholesSinkholeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdIntelSinkholesSinkholeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdIntelSinkholesSinkholeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdIntelSinkholesSinkholeIdIngressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdIntelSinkholesSinkholeIdIngressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdIntelSinkholesSinkholeIdIngressesIngressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdIntelSinkholesSinkholeIdIngressesIngressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdIntelSinkholesSinkholeIdIngressesIngressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdIntelSinkholesSinkholeIdIngressesRoute, (c) => {
    throw new Error('Not implemented')
  })
