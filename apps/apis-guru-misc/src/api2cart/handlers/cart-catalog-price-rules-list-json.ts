import { OpenAPIHono } from '@hono/zod-openapi'
import { getCartCatalogPriceRulesListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartCatalogPriceRulesListJsonHandler = app.openapi(
  getCartCatalogPriceRulesListJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
