import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postExportsActivityRoute,
  postExportsAllowlistRoute,
  postExportsInfoRoute,
  postExportsListRoute,
  postExportsRejectsRoute,
  postExportsWhitelistRoute,
} from '../routes'

export const postExportsInfoRouteHandler: RouteHandler<typeof postExportsInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postExportsListRouteHandler: RouteHandler<typeof postExportsListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postExportsRejectsRouteHandler: RouteHandler<typeof postExportsRejectsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postExportsWhitelistRouteHandler: RouteHandler<
  typeof postExportsWhitelistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postExportsAllowlistRouteHandler: RouteHandler<
  typeof postExportsAllowlistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postExportsActivityRouteHandler: RouteHandler<
  typeof postExportsActivityRoute
> = async (c) => {
  throw new Error('Not implemented')
}
