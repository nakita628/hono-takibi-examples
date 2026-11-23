import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWebResourceIdRoute,
  getWebResourceIdRoute,
  getWebResourceRoute,
  patchWebResourceIdRoute,
  postWebResourceRoute,
  putWebResourceIdRoute,
} from '../routes'

export const getWebResourceRouteHandler: RouteHandler<typeof getWebResourceRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postWebResourceRouteHandler: RouteHandler<typeof postWebResourceRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWebResourceIdRouteHandler: RouteHandler<
  typeof deleteWebResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWebResourceIdRouteHandler: RouteHandler<typeof getWebResourceIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchWebResourceIdRouteHandler: RouteHandler<typeof patchWebResourceIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putWebResourceIdRouteHandler: RouteHandler<typeof putWebResourceIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
