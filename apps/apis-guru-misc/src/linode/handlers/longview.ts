import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteLongviewClientsClientIdRoute,
  getLongviewClientsClientIdRoute,
  getLongviewClientsRoute,
  getLongviewPlanRoute,
  getLongviewSubscriptionsRoute,
  getLongviewSubscriptionsSubscriptionIdRoute,
  postLongviewClientsRoute,
  putLongviewClientsClientIdRoute,
  putLongviewPlanRoute,
} from '../routes'

export const getLongviewClientsRouteHandler: RouteHandler<typeof getLongviewClientsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postLongviewClientsRouteHandler: RouteHandler<
  typeof postLongviewClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteLongviewClientsClientIdRouteHandler: RouteHandler<
  typeof deleteLongviewClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLongviewClientsClientIdRouteHandler: RouteHandler<
  typeof getLongviewClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putLongviewClientsClientIdRouteHandler: RouteHandler<
  typeof putLongviewClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLongviewPlanRouteHandler: RouteHandler<typeof getLongviewPlanRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putLongviewPlanRouteHandler: RouteHandler<typeof putLongviewPlanRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLongviewSubscriptionsRouteHandler: RouteHandler<
  typeof getLongviewSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLongviewSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof getLongviewSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
