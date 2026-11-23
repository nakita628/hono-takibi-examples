import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postAllowlistsAddRoute,
  postAllowlistsDeleteRoute,
  postAllowlistsListRoute,
} from '../routes'

export const postAllowlistsAddRouteHandler: RouteHandler<typeof postAllowlistsAddRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAllowlistsListRouteHandler: RouteHandler<typeof postAllowlistsListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAllowlistsDeleteRouteHandler: RouteHandler<
  typeof postAllowlistsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
