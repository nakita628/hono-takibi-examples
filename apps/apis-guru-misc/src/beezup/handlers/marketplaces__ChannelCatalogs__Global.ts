import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2UserMarketplacesChannelcatalogsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const marketplaces__ChannelCatalogs__GlobalHandler = app.openapi(
  getV2UserMarketplacesChannelcatalogsIndexRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
