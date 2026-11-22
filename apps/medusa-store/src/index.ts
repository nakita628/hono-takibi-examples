import { OpenAPIHono } from '@hono/zod-openapi'
import {
  authHandler,
  cartsHandler,
  collectionsHandler,
  currenciesHandler,
  customersHandler,
  giftCardsHandler,
  localesHandler,
  multiFactorAuthenticationMFAFactorsHandler,
  ordersHandler,
  paymentCollectionsHandler,
  paymentProvidersHandler,
  productCategoriesHandler,
  productOptionsHandler,
  productsHandler,
  productTagsHandler,
  productTypesHandler,
  productVariantsHandler,
  regionsHandler,
  returnReasonsHandler,
  returnsHandler,
  searchHandler,
  shippingOptionsHandler,
  storeCreditAccountsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authHandler)
  .route('/', multiFactorAuthenticationMFAFactorsHandler)
  .route('/', cartsHandler)
  .route('/', collectionsHandler)
  .route('/', currenciesHandler)
  .route('/', customersHandler)
  .route('/', giftCardsHandler)
  .route('/', localesHandler)
  .route('/', ordersHandler)
  .route('/', paymentCollectionsHandler)
  .route('/', paymentProvidersHandler)
  .route('/', productCategoriesHandler)
  .route('/', productOptionsHandler)
  .route('/', productTagsHandler)
  .route('/', productTypesHandler)
  .route('/', productVariantsHandler)
  .route('/', productsHandler)
  .route('/', regionsHandler)
  .route('/', returnReasonsHandler)
  .route('/', returnsHandler)
  .route('/', searchHandler)
  .route('/', shippingOptionsHandler)
  .route('/', storeCreditAccountsHandler)

export default app
