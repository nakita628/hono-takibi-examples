import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAnythingIdActionIdRoute,
  getAnythingIdActionRoute,
  getAnythingIdOverrideRoute,
  getAnythingIdRoute,
  postAnythingIdRoute,
} from '../routes'

export const getAnythingIdRouteHandler: RouteHandler<typeof getAnythingIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAnythingIdRouteHandler: RouteHandler<typeof postAnythingIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnythingIdActionRouteHandler: RouteHandler<
  typeof getAnythingIdActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnythingIdActionIdRouteHandler: RouteHandler<
  typeof getAnythingIdActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnythingIdOverrideRouteHandler: RouteHandler<
  typeof getAnythingIdOverrideRoute
> = async (c) => {
  throw new Error('Not implemented')
}
