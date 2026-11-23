import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteIndexerDeleteIdxNameRoute,
  getIndexerStatusRoute,
  getIndexerStorageRoute,
} from '../routes'

export const deleteIndexerDeleteIdxNameRouteHandler: RouteHandler<
  typeof deleteIndexerDeleteIdxNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIndexerStorageRouteHandler: RouteHandler<typeof getIndexerStorageRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getIndexerStatusRouteHandler: RouteHandler<typeof getIndexerStatusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
