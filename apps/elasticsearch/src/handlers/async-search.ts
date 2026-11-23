import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAsyncSearchIdRoute,
  getAsyncSearchIdRoute,
  getAsyncSearchStatusIdRoute,
  postAsyncSearchRoute,
} from '../routes'

export const getAsyncSearchIdRouteHandler: RouteHandler<typeof getAsyncSearchIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteAsyncSearchIdRouteHandler: RouteHandler<
  typeof deleteAsyncSearchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAsyncSearchStatusIdRouteHandler: RouteHandler<
  typeof getAsyncSearchStatusIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAsyncSearchRouteHandler: RouteHandler<typeof postAsyncSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}
