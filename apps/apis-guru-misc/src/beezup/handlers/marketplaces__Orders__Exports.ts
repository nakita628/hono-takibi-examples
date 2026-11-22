import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2UserMarketplacesOrdersExportationsRoute,
  postV2UserMarketplacesOrdersExportationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const marketplaces__Orders__ExportsHandler = app
  .openapi(getV2UserMarketplacesOrdersExportationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserMarketplacesOrdersExportationsRoute, (c) => {
    throw new Error('Not implemented')
  })
