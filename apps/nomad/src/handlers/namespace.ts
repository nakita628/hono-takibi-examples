import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteNamespaceNamespaceNameRoute,
  getNamespaceNamespaceNameRoute,
  postNamespaceNamespaceNameRoute,
  postNamespaceRoute,
} from '../routes'

export const postNamespaceRouteHandler: RouteHandler<typeof postNamespaceRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNamespaceNamespaceNameRouteHandler: RouteHandler<
  typeof deleteNamespaceNamespaceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespaceNamespaceNameRouteHandler: RouteHandler<
  typeof getNamespaceNamespaceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespaceNamespaceNameRouteHandler: RouteHandler<
  typeof postNamespaceNamespaceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
