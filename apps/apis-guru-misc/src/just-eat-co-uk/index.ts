import { OpenAPIHono } from '@hono/zod-openapi'
import {
  attemptedDeliveryAPIHandler,
  attemptedDeliveryWebhooksHandler,
  checkoutHandler,
  consumerQueriesHandler,
  consumerQueriesWebhooksHandler,
  consumersHandler,
  deliveryFeeHandler,
  deliveryPoolsAPIHandler,
  orderAcceptanceAPIHandler,
  orderAcceptanceWebhooksHandler,
  orderAPIHandler,
  orderDeliveryAPIHandler,
  orderDeliveryWebhooksHandler,
  orderWebhooksHandler,
  publiclyAccessibleHandler,
  restaurantClaimsHandler,
  restaurantEventsHandler,
  restaurantEventsWebhooksHandler,
  restaurantQueriesHandler,
  restaurantQueriesWebhooksHandler,
  restaurantsHandler,
  restaurantWebhooksHandler,
  searchHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', orderAcceptanceWebhooksHandler)
  .route('/', attemptedDeliveryWebhooksHandler)
  .route('/', checkoutHandler)
  .route('/', consumersHandler)
  .route('/', deliveryFeeHandler)
  .route('/', orderDeliveryAPIHandler)
  .route('/', deliveryPoolsAPIHandler)
  .route('/', orderDeliveryWebhooksHandler)
  .route('/', consumerQueriesWebhooksHandler)
  .route('/', restaurantWebhooksHandler)
  .route('/', restaurantQueriesWebhooksHandler)
  .route('/', orderWebhooksHandler)
  .route('/', orderAPIHandler)
  .route('/', orderAcceptanceAPIHandler)
  .route('/', consumerQueriesHandler)
  .route('/', restaurantQueriesHandler)
  .route('/', restaurantEventsWebhooksHandler)
  .route('/', restaurantsHandler)
  .route('/', restaurantClaimsHandler)
  .route('/', publiclyAccessibleHandler)
  .route('/', searchHandler)
  .route('/', restaurantEventsHandler)
  .route('/', attemptedDeliveryAPIHandler)

export default app
