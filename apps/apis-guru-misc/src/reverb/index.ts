import { OpenAPIHono } from '@hono/zod-openapi'
import {
  articlesHandler,
  categoriesHandler,
  comparisonShoppingPagesHandler,
  conversationsHandler,
  countriesHandler,
  cspsHandler,
  curatedSetsHandler,
  currenciesHandler,
  feedbackHandler,
  handpickedHandler,
  listingConditionsHandler,
  listingsHandler,
  myHandler,
  ordersHandler,
  paymentMethodsHandler,
  priceguideHandler,
  productsHandler,
  salesHandler,
  shippingHandler,
  shopHandler,
  shopsHandler,
  wantsHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', articlesHandler)
  .route('/', categoriesHandler)
  .route('/', comparisonShoppingPagesHandler)
  .route('/', conversationsHandler)
  .route('/', countriesHandler)
  .route('/', cspsHandler)
  .route('/', curatedSetsHandler)
  .route('/', currenciesHandler)
  .route('/', feedbackHandler)
  .route('/', handpickedHandler)
  .route('/', listingConditionsHandler)
  .route('/', listingsHandler)
  .route('/', myHandler)
  .route('/', ordersHandler)
  .route('/', paymentMethodsHandler)
  .route('/', priceguideHandler)
  .route('/', productsHandler)
  .route('/', salesHandler)
  .route('/', shippingHandler)
  .route('/', shopHandler)
  .route('/', shopsHandler)
  .route('/', wantsHandler)
  .route('/', webhooksHandler)

export default app
