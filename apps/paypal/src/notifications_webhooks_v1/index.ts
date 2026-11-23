import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NotificationsWebhooksLookupWebhookLookupIdRoute,
  deleteV1NotificationsWebhooksWebhookIdRoute,
  getV1NotificationsWebhooksEventsEventIdRoute,
  getV1NotificationsWebhooksEventsRoute,
  getV1NotificationsWebhooksEventTypesRoute,
  getV1NotificationsWebhooksLookupRoute,
  getV1NotificationsWebhooksLookupWebhookLookupIdRoute,
  getV1NotificationsWebhooksRoute,
  getV1NotificationsWebhooksWebhookIdEventTypesRoute,
  getV1NotificationsWebhooksWebhookIdRoute,
  patchV1NotificationsWebhooksWebhookIdRoute,
  postV1NotificationsSimulateEventRoute,
  postV1NotificationsVerifyWebhookSignatureRoute,
  postV1NotificationsWebhooksEventsEventIdResendRoute,
  postV1NotificationsWebhooksLookupRoute,
  postV1NotificationsWebhooksRoute,
} from './routes'
import {
  deleteV1NotificationsWebhooksLookupWebhookLookupIdRouteHandler,
  deleteV1NotificationsWebhooksWebhookIdRouteHandler,
  getV1NotificationsWebhooksEventsEventIdRouteHandler,
  getV1NotificationsWebhooksEventsRouteHandler,
  getV1NotificationsWebhooksEventTypesRouteHandler,
  getV1NotificationsWebhooksLookupRouteHandler,
  getV1NotificationsWebhooksLookupWebhookLookupIdRouteHandler,
  getV1NotificationsWebhooksRouteHandler,
  getV1NotificationsWebhooksWebhookIdEventTypesRouteHandler,
  getV1NotificationsWebhooksWebhookIdRouteHandler,
  patchV1NotificationsWebhooksWebhookIdRouteHandler,
  postV1NotificationsSimulateEventRouteHandler,
  postV1NotificationsVerifyWebhookSignatureRouteHandler,
  postV1NotificationsWebhooksEventsEventIdResendRouteHandler,
  postV1NotificationsWebhooksLookupRouteHandler,
  postV1NotificationsWebhooksRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1NotificationsWebhooksRoute, postV1NotificationsWebhooksRouteHandler)
  .openapi(getV1NotificationsWebhooksRoute, getV1NotificationsWebhooksRouteHandler)
  .openapi(
    getV1NotificationsWebhooksWebhookIdRoute,
    getV1NotificationsWebhooksWebhookIdRouteHandler,
  )
  .openapi(
    patchV1NotificationsWebhooksWebhookIdRoute,
    patchV1NotificationsWebhooksWebhookIdRouteHandler,
  )
  .openapi(
    deleteV1NotificationsWebhooksWebhookIdRoute,
    deleteV1NotificationsWebhooksWebhookIdRouteHandler,
  )
  .openapi(
    getV1NotificationsWebhooksWebhookIdEventTypesRoute,
    getV1NotificationsWebhooksWebhookIdEventTypesRouteHandler,
  )
  .openapi(postV1NotificationsWebhooksLookupRoute, postV1NotificationsWebhooksLookupRouteHandler)
  .openapi(getV1NotificationsWebhooksLookupRoute, getV1NotificationsWebhooksLookupRouteHandler)
  .openapi(
    getV1NotificationsWebhooksLookupWebhookLookupIdRoute,
    getV1NotificationsWebhooksLookupWebhookLookupIdRouteHandler,
  )
  .openapi(
    deleteV1NotificationsWebhooksLookupWebhookLookupIdRoute,
    deleteV1NotificationsWebhooksLookupWebhookLookupIdRouteHandler,
  )
  .openapi(
    postV1NotificationsVerifyWebhookSignatureRoute,
    postV1NotificationsVerifyWebhookSignatureRouteHandler,
  )
  .openapi(
    getV1NotificationsWebhooksEventTypesRoute,
    getV1NotificationsWebhooksEventTypesRouteHandler,
  )
  .openapi(getV1NotificationsWebhooksEventsRoute, getV1NotificationsWebhooksEventsRouteHandler)
  .openapi(
    getV1NotificationsWebhooksEventsEventIdRoute,
    getV1NotificationsWebhooksEventsEventIdRouteHandler,
  )
  .openapi(
    postV1NotificationsWebhooksEventsEventIdResendRoute,
    postV1NotificationsWebhooksEventsEventIdResendRouteHandler,
  )
  .openapi(postV1NotificationsSimulateEventRoute, postV1NotificationsSimulateEventRouteHandler)

export default app
