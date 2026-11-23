import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRelationsIdRoute,
  getRelationsIdRoute,
  getRelationsRoute,
  patchRelationsIdRoute,
  postRelationsRoute,
} from '../routes'

export const getRelationsRouteHandler: RouteHandler<typeof getRelationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRelationsRouteHandler: RouteHandler<typeof postRelationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRelationsIdRouteHandler: RouteHandler<typeof getRelationsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchRelationsIdRouteHandler: RouteHandler<typeof patchRelationsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteRelationsIdRouteHandler: RouteHandler<typeof deleteRelationsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
