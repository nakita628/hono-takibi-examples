import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMessengerExternalIdRoute,
  getMessengerExternalIdRoute,
  patchMessengerExternalIdRoute,
  postMessengerRoute,
} from '../routes'

export const postMessengerRouteHandler: RouteHandler<typeof postMessengerRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMessengerExternalIdRouteHandler: RouteHandler<
  typeof deleteMessengerExternalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMessengerExternalIdRouteHandler: RouteHandler<
  typeof getMessengerExternalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchMessengerExternalIdRouteHandler: RouteHandler<
  typeof patchMessengerExternalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
