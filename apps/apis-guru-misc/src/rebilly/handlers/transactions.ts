import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTransactionsIdTimelineMessageIdRoute,
  getTransactionsIdRoute,
  getTransactionsIdTimelineMessageIdRoute,
  getTransactionsIdTimelineRoute,
  getTransactionsRoute,
  patchTransactionsIdRoute,
  postTransactionsIdQueryRoute,
  postTransactionsIdRefundRoute,
  postTransactionsIdTimelineRoute,
  postTransactionsIdUpdateRoute,
  postTransactionsRoute,
} from '../routes'

export const getTransactionsRouteHandler: RouteHandler<typeof getTransactionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransactionsRouteHandler: RouteHandler<typeof postTransactionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTransactionsIdRouteHandler: RouteHandler<typeof getTransactionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchTransactionsIdRouteHandler: RouteHandler<
  typeof patchTransactionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransactionsIdQueryRouteHandler: RouteHandler<
  typeof postTransactionsIdQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransactionsIdRefundRouteHandler: RouteHandler<
  typeof postTransactionsIdRefundRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTransactionsIdTimelineRouteHandler: RouteHandler<
  typeof getTransactionsIdTimelineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransactionsIdTimelineRouteHandler: RouteHandler<
  typeof postTransactionsIdTimelineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTransactionsIdTimelineMessageIdRouteHandler: RouteHandler<
  typeof deleteTransactionsIdTimelineMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTransactionsIdTimelineMessageIdRouteHandler: RouteHandler<
  typeof getTransactionsIdTimelineMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransactionsIdUpdateRouteHandler: RouteHandler<
  typeof postTransactionsIdUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
