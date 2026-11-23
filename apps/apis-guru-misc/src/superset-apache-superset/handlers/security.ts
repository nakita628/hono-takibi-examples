import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSecurityCsrfTokenIndexRoute,
  postSecurityLoginRoute,
  postSecurityRefreshRoute,
} from '../routes'

export const getSecurityCsrfTokenIndexRouteHandler: RouteHandler<
  typeof getSecurityCsrfTokenIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityLoginRouteHandler: RouteHandler<typeof postSecurityLoginRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSecurityRefreshRouteHandler: RouteHandler<
  typeof postSecurityRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}
