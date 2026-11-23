import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getClientClientIdRoute,
  getClientClientIdTokenKindRoute,
  postClientRoute,
} from '../routes'

export const postClientRouteHandler: RouteHandler<typeof postClientRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getClientClientIdRouteHandler: RouteHandler<typeof getClientClientIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getClientClientIdTokenKindRouteHandler: RouteHandler<
  typeof getClientClientIdTokenKindRoute
> = async (c) => {
  throw new Error('Not implemented')
}
