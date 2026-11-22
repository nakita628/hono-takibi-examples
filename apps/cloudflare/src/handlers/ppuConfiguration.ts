import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdPayPerUseOperatorConfigurationRoute,
  getZonesZoneIdPayPerUseCanBeEnabledRoute,
  getZonesZoneIdPayPerUseConfigurationRoute,
  patchAccountsAccountIdPayPerUseOperatorConfigurationRoute,
  patchAccountsAccountIdPayPerUseZonesCanBeEnabledRoute,
  patchZonesZoneIdPayPerUseConfigurationRoute,
  putAccountsAccountIdPayPerUseOperatorConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ppuConfigurationHandler = app
  .openapi(getAccountsAccountIdPayPerUseOperatorConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdPayPerUseOperatorConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdPayPerUseOperatorConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdPayPerUseZonesCanBeEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdPayPerUseCanBeEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdPayPerUseConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdPayPerUseConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
