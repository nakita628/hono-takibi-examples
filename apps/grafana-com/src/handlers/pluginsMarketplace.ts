import { OpenAPIHono } from '@hono/zod-openapi'
import { postPluginsMarketplaceLicensesRenewRoute } from '../routes'

const app = new OpenAPIHono()

export const pluginsMarketplaceHandler = app.openapi(
  postPluginsMarketplaceLicensesRenewRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
