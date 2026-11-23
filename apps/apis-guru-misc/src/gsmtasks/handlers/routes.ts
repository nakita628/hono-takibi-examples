import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRoutesIdIndexRoute,
  getRoutesIdIndexRoute,
  getRoutesIndexRoute,
  patchRoutesIdIndexRoute,
  postRoutesIndexRoute,
  putRoutesIdIndexRoute,
} from '../routes'

export const getRoutesIndexRouteHandler: RouteHandler<typeof getRoutesIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRoutesIndexRouteHandler: RouteHandler<typeof postRoutesIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRoutesIdIndexRouteHandler: RouteHandler<
  typeof deleteRoutesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRoutesIdIndexRouteHandler: RouteHandler<typeof getRoutesIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchRoutesIdIndexRouteHandler: RouteHandler<typeof patchRoutesIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putRoutesIdIndexRouteHandler: RouteHandler<typeof putRoutesIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
