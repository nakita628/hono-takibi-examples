import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteStacksStackIdRoute,
  getStacksRoute,
  getStacksStackIdRoute,
  patchStacksStackIdRoute,
  postStacksRoute,
  postStacksStackIdUninstallRoute,
} from '../routes'

export const getStacksRouteHandler: RouteHandler<typeof getStacksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postStacksRouteHandler: RouteHandler<typeof postStacksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStacksStackIdRouteHandler: RouteHandler<typeof getStacksStackIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchStacksStackIdRouteHandler: RouteHandler<typeof patchStacksStackIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteStacksStackIdRouteHandler: RouteHandler<
  typeof deleteStacksStackIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStacksStackIdUninstallRouteHandler: RouteHandler<
  typeof postStacksStackIdUninstallRoute
> = async (c) => {
  throw new Error('Not implemented')
}
