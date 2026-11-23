import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSubscriptionsMeRoute,
  getSubscriptionsRecurrenceidAccountsRoute,
  getSubscriptionsRecurrenceIdAddressesRoute,
  getSubscriptionsRecurrenceIdRoute,
  getSubscriptionsRoute,
  getSubscriptionsSettingsRoute,
  patchSubscriptionsRecurrenceIdReindexRoute,
  patchSubscriptionsRecurrenceIdRoute,
  postSubscriptionsRecurrenceIdItemsRoute,
  putSubscriptionsRoute,
  putSubscriptionsSettingsRoute,
} from './routes'
import {
  getSubscriptionsMeRouteHandler,
  getSubscriptionsRecurrenceidAccountsRouteHandler,
  getSubscriptionsRecurrenceIdAddressesRouteHandler,
  getSubscriptionsRecurrenceIdRouteHandler,
  getSubscriptionsRouteHandler,
  getSubscriptionsSettingsRouteHandler,
  patchSubscriptionsRecurrenceIdReindexRouteHandler,
  patchSubscriptionsRecurrenceIdRouteHandler,
  postSubscriptionsRecurrenceIdItemsRouteHandler,
  putSubscriptionsRouteHandler,
  putSubscriptionsSettingsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getSubscriptionsRoute, getSubscriptionsRouteHandler)
  .openapi(putSubscriptionsRoute, putSubscriptionsRouteHandler)
  .openapi(getSubscriptionsMeRoute, getSubscriptionsMeRouteHandler)
  .openapi(getSubscriptionsSettingsRoute, getSubscriptionsSettingsRouteHandler)
  .openapi(putSubscriptionsSettingsRoute, putSubscriptionsSettingsRouteHandler)
  .openapi(getSubscriptionsRecurrenceIdRoute, getSubscriptionsRecurrenceIdRouteHandler)
  .openapi(patchSubscriptionsRecurrenceIdRoute, patchSubscriptionsRecurrenceIdRouteHandler)
  .openapi(
    getSubscriptionsRecurrenceIdAddressesRoute,
    getSubscriptionsRecurrenceIdAddressesRouteHandler,
  )
  .openapi(postSubscriptionsRecurrenceIdItemsRoute, postSubscriptionsRecurrenceIdItemsRouteHandler)
  .openapi(
    patchSubscriptionsRecurrenceIdReindexRoute,
    patchSubscriptionsRecurrenceIdReindexRouteHandler,
  )
  .openapi(
    getSubscriptionsRecurrenceidAccountsRoute,
    getSubscriptionsRecurrenceidAccountsRouteHandler,
  )

export default app
