import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInventoriesInfoRoute,
  postInventoriesUploadRoute,
  postInventoriesWatcherRestartRoute,
  postInventoriesWatcherStartRoute,
  postInventoriesWatcherStopRoute,
} from '../routes'

export const getInventoriesInfoRouteHandler: RouteHandler<typeof getInventoriesInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postInventoriesUploadRouteHandler: RouteHandler<
  typeof postInventoriesUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInventoriesWatcherRestartRouteHandler: RouteHandler<
  typeof postInventoriesWatcherRestartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInventoriesWatcherStartRouteHandler: RouteHandler<
  typeof postInventoriesWatcherStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInventoriesWatcherStopRouteHandler: RouteHandler<
  typeof postInventoriesWatcherStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}
