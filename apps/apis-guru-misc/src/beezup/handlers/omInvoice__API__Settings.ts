import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2UserMarketplacesOrdersInvoicesSettingsDesignRoute,
  getV2UserMarketplacesOrdersInvoicesSettingsGeneralRoute,
  postV2UserMarketplacesOrdersInvoicesSettingsDesignPreviewRoute,
  putV2UserMarketplacesOrdersInvoicesSettingsDesignRoute,
  putV2UserMarketplacesOrdersInvoicesSettingsGeneralRoute,
} from '../routes'

const app = new OpenAPIHono()

export const omInvoice__API__SettingsHandler = app
  .openapi(getV2UserMarketplacesOrdersInvoicesSettingsDesignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UserMarketplacesOrdersInvoicesSettingsDesignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserMarketplacesOrdersInvoicesSettingsDesignPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserMarketplacesOrdersInvoicesSettingsGeneralRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UserMarketplacesOrdersInvoicesSettingsGeneralRoute, (c) => {
    throw new Error('Not implemented')
  })
