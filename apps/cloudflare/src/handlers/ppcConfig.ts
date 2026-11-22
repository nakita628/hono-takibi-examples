import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getZonesZoneIdPayPerCrawlCanBeEnabledRoute,
  getZonesZoneIdPayPerCrawlConfigurationRoute,
  patchAccountsAccountIdPayPerCrawlZonesCanBeEnabledRoute,
  patchZonesZoneIdPayPerCrawlConfigurationRoute,
  postAccountsAccountIdPayPerCrawlZonesCanBeEnabledQueryRoute,
  postZonesZoneIdPayPerCrawlConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ppcConfigHandler = app
  .openapi(patchAccountsAccountIdPayPerCrawlZonesCanBeEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPayPerCrawlZonesCanBeEnabledQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdPayPerCrawlCanBeEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdPayPerCrawlConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdPayPerCrawlConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdPayPerCrawlConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
