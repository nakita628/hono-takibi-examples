import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPeriodicSalesIdRoute,
  getPeriodicSalesIdSalesEntriesRoute,
  getPeriodicSalesRoute,
  patchPeriodicSalesIdRoute,
  postPeriodicSalesIdCancellationRoute,
  postPeriodicSalesRoute,
} from '../routes'

export const getPeriodicSalesRouteHandler: RouteHandler<typeof getPeriodicSalesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPeriodicSalesRouteHandler: RouteHandler<typeof postPeriodicSalesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPeriodicSalesIdRouteHandler: RouteHandler<typeof getPeriodicSalesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchPeriodicSalesIdRouteHandler: RouteHandler<
  typeof patchPeriodicSalesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPeriodicSalesIdSalesEntriesRouteHandler: RouteHandler<
  typeof getPeriodicSalesIdSalesEntriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPeriodicSalesIdCancellationRouteHandler: RouteHandler<
  typeof postPeriodicSalesIdCancellationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
