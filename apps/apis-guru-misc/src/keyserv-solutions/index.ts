import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProductsApiSerialRoute,
  deleteV1SubscriptionsApiSerialRoute,
  getV1KeysApiCurrentSerialRoute,
  getV1KeysApiCustomSerialRoute,
  getV1KeysApiExpirySerialRoute,
  getV1KeysApiFindSerialRoute,
  patchV1ProductsApiRoute,
  patchV1SubscriptionsApiDisableRoute,
  patchV1SubscriptionsApiEnableRoute,
  postV1ProductsApiCountRoute,
  postV1ProductsApiFindRoute,
  postV1ProductsApiListRoute,
  postV1ProductsApiRoute,
  postV1ProductsApiSaveRoute,
  postV1ProductsApiSerialRoute,
  postV1SubscriptionsApiCountRoute,
  postV1SubscriptionsApiDisableRoute,
  postV1SubscriptionsApiEnableRoute,
  postV1SubscriptionsApiFindRoute,
  postV1SubscriptionsApiListRoute,
  postV1SubscriptionsApiRoute,
  postV1SubscriptionsApiSaveRoute,
  postV1SubscriptionsApiSerialRoute,
  putV1SubscriptionsApiRoute,
} from './routes'
import {
  deleteV1ProductsApiSerialRouteHandler,
  deleteV1SubscriptionsApiSerialRouteHandler,
  getV1KeysApiCurrentSerialRouteHandler,
  getV1KeysApiCustomSerialRouteHandler,
  getV1KeysApiExpirySerialRouteHandler,
  getV1KeysApiFindSerialRouteHandler,
  patchV1ProductsApiRouteHandler,
  patchV1SubscriptionsApiDisableRouteHandler,
  patchV1SubscriptionsApiEnableRouteHandler,
  postV1ProductsApiCountRouteHandler,
  postV1ProductsApiFindRouteHandler,
  postV1ProductsApiListRouteHandler,
  postV1ProductsApiRouteHandler,
  postV1ProductsApiSaveRouteHandler,
  postV1ProductsApiSerialRouteHandler,
  postV1SubscriptionsApiCountRouteHandler,
  postV1SubscriptionsApiDisableRouteHandler,
  postV1SubscriptionsApiEnableRouteHandler,
  postV1SubscriptionsApiFindRouteHandler,
  postV1SubscriptionsApiListRouteHandler,
  postV1SubscriptionsApiRouteHandler,
  postV1SubscriptionsApiSaveRouteHandler,
  postV1SubscriptionsApiSerialRouteHandler,
  putV1SubscriptionsApiRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1KeysApiCurrentSerialRoute, getV1KeysApiCurrentSerialRouteHandler)
  .openapi(getV1KeysApiCustomSerialRoute, getV1KeysApiCustomSerialRouteHandler)
  .openapi(getV1KeysApiExpirySerialRoute, getV1KeysApiExpirySerialRouteHandler)
  .openapi(getV1KeysApiFindSerialRoute, getV1KeysApiFindSerialRouteHandler)
  .openapi(patchV1ProductsApiRoute, patchV1ProductsApiRouteHandler)
  .openapi(postV1ProductsApiRoute, postV1ProductsApiRouteHandler)
  .openapi(postV1ProductsApiCountRoute, postV1ProductsApiCountRouteHandler)
  .openapi(postV1ProductsApiFindRoute, postV1ProductsApiFindRouteHandler)
  .openapi(postV1ProductsApiListRoute, postV1ProductsApiListRouteHandler)
  .openapi(postV1ProductsApiSaveRoute, postV1ProductsApiSaveRouteHandler)
  .openapi(deleteV1ProductsApiSerialRoute, deleteV1ProductsApiSerialRouteHandler)
  .openapi(postV1ProductsApiSerialRoute, postV1ProductsApiSerialRouteHandler)
  .openapi(postV1SubscriptionsApiRoute, postV1SubscriptionsApiRouteHandler)
  .openapi(putV1SubscriptionsApiRoute, putV1SubscriptionsApiRouteHandler)
  .openapi(postV1SubscriptionsApiCountRoute, postV1SubscriptionsApiCountRouteHandler)
  .openapi(patchV1SubscriptionsApiDisableRoute, patchV1SubscriptionsApiDisableRouteHandler)
  .openapi(postV1SubscriptionsApiDisableRoute, postV1SubscriptionsApiDisableRouteHandler)
  .openapi(patchV1SubscriptionsApiEnableRoute, patchV1SubscriptionsApiEnableRouteHandler)
  .openapi(postV1SubscriptionsApiEnableRoute, postV1SubscriptionsApiEnableRouteHandler)
  .openapi(postV1SubscriptionsApiFindRoute, postV1SubscriptionsApiFindRouteHandler)
  .openapi(postV1SubscriptionsApiListRoute, postV1SubscriptionsApiListRouteHandler)
  .openapi(postV1SubscriptionsApiSaveRoute, postV1SubscriptionsApiSaveRouteHandler)
  .openapi(deleteV1SubscriptionsApiSerialRoute, deleteV1SubscriptionsApiSerialRouteHandler)
  .openapi(postV1SubscriptionsApiSerialRoute, postV1SubscriptionsApiSerialRouteHandler)

export default app
