import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteClientsClientRoute,
  getClientsClientRoute,
  getClientsRoute,
  getClientsSuggestionsRoute,
  postClientsRoute,
  putClientsClientRoute,
} from '../routes'

export const getClientsClientRouteHandler: RouteHandler<typeof getClientsClientRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putClientsClientRouteHandler: RouteHandler<typeof putClientsClientRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteClientsClientRouteHandler: RouteHandler<
  typeof deleteClientsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getClientsRouteHandler: RouteHandler<typeof getClientsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postClientsRouteHandler: RouteHandler<typeof postClientsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getClientsSuggestionsRouteHandler: RouteHandler<
  typeof getClientsSuggestionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
