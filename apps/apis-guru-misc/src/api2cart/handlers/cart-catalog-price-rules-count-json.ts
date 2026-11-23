import { OpenAPIHono } from '@hono/zod-openapi'
import { getCartCatalogPriceRulesCountJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartCatalogPriceRulesCountJsonHandler = app.openapi(
  getCartCatalogPriceRulesCountJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
