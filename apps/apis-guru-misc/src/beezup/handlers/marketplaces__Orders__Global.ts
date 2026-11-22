import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2UserMarketplacesOrdersIndexRoute,
  getV2UserMarketplacesOrdersStatusRoute,
  postV2UserMarketplacesOrdersHarvestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const marketplaces__Orders__GlobalHandler = app
  .openapi(getV2UserMarketplacesOrdersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserMarketplacesOrdersHarvestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserMarketplacesOrdersStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
