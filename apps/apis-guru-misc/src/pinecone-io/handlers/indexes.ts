import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteIndexesIndexNameRoute,
  getIndexesIndexNameRoute,
  getIndexesRoute,
  patchIndexesIndexNameRoute,
  postIndexesRoute,
} from '../routes'

export const getIndexesRouteHandler: RouteHandler<typeof getIndexesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postIndexesRouteHandler: RouteHandler<typeof postIndexesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIndexesIndexNameRouteHandler: RouteHandler<
  typeof deleteIndexesIndexNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIndexesIndexNameRouteHandler: RouteHandler<
  typeof getIndexesIndexNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIndexesIndexNameRouteHandler: RouteHandler<
  typeof patchIndexesIndexNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
