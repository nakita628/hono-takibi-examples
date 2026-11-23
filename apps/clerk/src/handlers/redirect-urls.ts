import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRedirectUrlsIdRoute,
  getRedirectUrlsIdRoute,
  getRedirectUrlsRoute,
  postRedirectUrlsRoute,
} from '../routes'

export const getRedirectUrlsRouteHandler: RouteHandler<typeof getRedirectUrlsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRedirectUrlsRouteHandler: RouteHandler<typeof postRedirectUrlsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRedirectUrlsIdRouteHandler: RouteHandler<typeof getRedirectUrlsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteRedirectUrlsIdRouteHandler: RouteHandler<
  typeof deleteRedirectUrlsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
