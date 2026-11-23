import type { RouteHandler } from '@hono/zod-openapi'
import type {
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
} from '../routes'

export const getSubscriptionsRouteHandler: RouteHandler<typeof getSubscriptionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putSubscriptionsRouteHandler: RouteHandler<typeof putSubscriptionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSubscriptionsMeRouteHandler: RouteHandler<typeof getSubscriptionsMeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSubscriptionsSettingsRouteHandler: RouteHandler<
  typeof getSubscriptionsSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSubscriptionsSettingsRouteHandler: RouteHandler<
  typeof putSubscriptionsSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSubscriptionsRecurrenceIdRouteHandler: RouteHandler<
  typeof getSubscriptionsRecurrenceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSubscriptionsRecurrenceIdRouteHandler: RouteHandler<
  typeof patchSubscriptionsRecurrenceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSubscriptionsRecurrenceIdAddressesRouteHandler: RouteHandler<
  typeof getSubscriptionsRecurrenceIdAddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSubscriptionsRecurrenceIdItemsRouteHandler: RouteHandler<
  typeof postSubscriptionsRecurrenceIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSubscriptionsRecurrenceIdReindexRouteHandler: RouteHandler<
  typeof patchSubscriptionsRecurrenceIdReindexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSubscriptionsRecurrenceidAccountsRouteHandler: RouteHandler<
  typeof getSubscriptionsRecurrenceidAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
