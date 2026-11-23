import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBlocklistRoute,
  getBlocklistBatchJobIdRoute,
  getBlocklistBatchRoute,
  getBlocklistCountRoute,
  getBlocklistLookupRoute,
  getBlocklistRoute,
  postBlocklistBatchRoute,
  postBlocklistCloneRoute,
  postBlocklistExportRoute,
  postBlocklistRoute,
  postBlocklistToggleRoute,
} from '../routes'

export const deleteBlocklistRouteHandler: RouteHandler<typeof deleteBlocklistRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBlocklistRouteHandler: RouteHandler<typeof getBlocklistRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBlocklistRouteHandler: RouteHandler<typeof postBlocklistRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBlocklistToggleRouteHandler: RouteHandler<
  typeof postBlocklistToggleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBlocklistCountRouteHandler: RouteHandler<typeof getBlocklistCountRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBlocklistLookupRouteHandler: RouteHandler<typeof getBlocklistLookupRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postBlocklistBatchRouteHandler: RouteHandler<typeof postBlocklistBatchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBlocklistBatchRouteHandler: RouteHandler<typeof getBlocklistBatchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBlocklistBatchJobIdRouteHandler: RouteHandler<
  typeof getBlocklistBatchJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBlocklistExportRouteHandler: RouteHandler<
  typeof postBlocklistExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBlocklistCloneRouteHandler: RouteHandler<typeof postBlocklistCloneRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
