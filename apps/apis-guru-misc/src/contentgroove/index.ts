import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ClipsIdRoute,
  deleteApiV1MediasIdRoute,
  deleteApiV1WebhookSubscriptionsIdRoute,
  getApiV1ClipsIdRoute,
  getApiV1ClipsRoute,
  getApiV1DirectUploadsRoute,
  getApiV1MediasIdRoute,
  getApiV1MediasRoute,
  getApiV1WebhookSubscriptionsIdRoute,
  getApiV1WebhookSubscriptionsRoute,
  postApiV1ClipsRoute,
  postApiV1MediasRoute,
  postApiV1WebhookSubscriptionsRoute,
  putApiV1ClipsIdRoute,
  putApiV1MediasIdRoute,
} from './routes'
import {
  deleteApiV1ClipsIdRouteHandler,
  deleteApiV1MediasIdRouteHandler,
  deleteApiV1WebhookSubscriptionsIdRouteHandler,
  getApiV1ClipsIdRouteHandler,
  getApiV1ClipsRouteHandler,
  getApiV1DirectUploadsRouteHandler,
  getApiV1MediasIdRouteHandler,
  getApiV1MediasRouteHandler,
  getApiV1WebhookSubscriptionsIdRouteHandler,
  getApiV1WebhookSubscriptionsRouteHandler,
  postApiV1ClipsRouteHandler,
  postApiV1MediasRouteHandler,
  postApiV1WebhookSubscriptionsRouteHandler,
  putApiV1ClipsIdRouteHandler,
  putApiV1MediasIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1ClipsRoute, getApiV1ClipsRouteHandler)
  .openapi(postApiV1ClipsRoute, postApiV1ClipsRouteHandler)
  .openapi(deleteApiV1ClipsIdRoute, deleteApiV1ClipsIdRouteHandler)
  .openapi(getApiV1ClipsIdRoute, getApiV1ClipsIdRouteHandler)
  .openapi(putApiV1ClipsIdRoute, putApiV1ClipsIdRouteHandler)
  .openapi(getApiV1DirectUploadsRoute, getApiV1DirectUploadsRouteHandler)
  .openapi(getApiV1MediasRoute, getApiV1MediasRouteHandler)
  .openapi(postApiV1MediasRoute, postApiV1MediasRouteHandler)
  .openapi(deleteApiV1MediasIdRoute, deleteApiV1MediasIdRouteHandler)
  .openapi(getApiV1MediasIdRoute, getApiV1MediasIdRouteHandler)
  .openapi(putApiV1MediasIdRoute, putApiV1MediasIdRouteHandler)
  .openapi(getApiV1WebhookSubscriptionsRoute, getApiV1WebhookSubscriptionsRouteHandler)
  .openapi(postApiV1WebhookSubscriptionsRoute, postApiV1WebhookSubscriptionsRouteHandler)
  .openapi(deleteApiV1WebhookSubscriptionsIdRoute, deleteApiV1WebhookSubscriptionsIdRouteHandler)
  .openapi(getApiV1WebhookSubscriptionsIdRoute, getApiV1WebhookSubscriptionsIdRouteHandler)

export default app
