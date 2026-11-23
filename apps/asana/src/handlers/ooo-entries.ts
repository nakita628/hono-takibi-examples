import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteOooEntriesOooEntryGidRoute,
  getOooEntriesOooEntryGidRoute,
  getOooEntriesRoute,
  postOooEntriesRoute,
  putOooEntriesOooEntryGidRoute,
} from '../routes'

export const getOooEntriesOooEntryGidRouteHandler: RouteHandler<
  typeof getOooEntriesOooEntryGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOooEntriesOooEntryGidRouteHandler: RouteHandler<
  typeof putOooEntriesOooEntryGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOooEntriesOooEntryGidRouteHandler: RouteHandler<
  typeof deleteOooEntriesOooEntryGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOooEntriesRouteHandler: RouteHandler<typeof getOooEntriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOooEntriesRouteHandler: RouteHandler<typeof postOooEntriesRoute> = async (c) => {
  throw new Error('Not implemented')
}
