import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2UserMarketplacesOrdersAutomaticTransitionsRoute,
  postV2UserMarketplacesOrdersAutomaticTransitionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const marketplaces__Orders__AutoTransitionsHandler = app
  .openapi(getV2UserMarketplacesOrdersAutomaticTransitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserMarketplacesOrdersAutomaticTransitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
