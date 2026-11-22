import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV2UserMarketplacesOrdersListFullRoute,
  postV2UserMarketplacesOrdersListLightRoute,
} from '../routes'

const app = new OpenAPIHono()

export const marketplaces__Orders__ListHandler = app
  .openapi(postV2UserMarketplacesOrdersListFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserMarketplacesOrdersListLightRoute, (c) => {
    throw new Error('Not implemented')
  })
