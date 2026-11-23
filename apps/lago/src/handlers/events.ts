import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEventsRoute,
  getEventsTransactionIdRoute,
  postEventsBatchEstimateInstantFeesRoute,
  postEventsBatchRoute,
  postEventsEstimateFeesRoute,
  postEventsEstimateInstantFeesRoute,
  postEventsRoute,
} from '../routes'

export const postEventsRouteHandler: RouteHandler<typeof postEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsRouteHandler: RouteHandler<typeof getEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postEventsBatchRouteHandler: RouteHandler<typeof postEventsBatchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postEventsEstimateFeesRouteHandler: RouteHandler<
  typeof postEventsEstimateFeesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEventsEstimateInstantFeesRouteHandler: RouteHandler<
  typeof postEventsEstimateInstantFeesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEventsBatchEstimateInstantFeesRouteHandler: RouteHandler<
  typeof postEventsBatchEstimateInstantFeesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsTransactionIdRouteHandler: RouteHandler<
  typeof getEventsTransactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
