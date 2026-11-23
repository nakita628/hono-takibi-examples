import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePayConnectorsNameRoute,
  getPayConnectorsNameRoute,
  getPayConnectorsRoute,
  patchPayConnectorsNameRoute,
  postPayConnectorsRoute,
} from '../routes'

export const getPayConnectorsRouteHandler: RouteHandler<typeof getPayConnectorsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPayConnectorsRouteHandler: RouteHandler<typeof postPayConnectorsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deletePayConnectorsNameRouteHandler: RouteHandler<
  typeof deletePayConnectorsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPayConnectorsNameRouteHandler: RouteHandler<
  typeof getPayConnectorsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPayConnectorsNameRouteHandler: RouteHandler<
  typeof patchPayConnectorsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
