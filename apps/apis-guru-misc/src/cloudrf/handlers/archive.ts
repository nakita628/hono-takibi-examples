import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getArchiveDeleteNetworkRoute,
  getArchiveDeleteRoute,
  getArchiveExportRoute,
  getArchiveListRoute,
} from '../routes'

export const getArchiveDeleteRouteHandler: RouteHandler<typeof getArchiveDeleteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getArchiveDeleteNetworkRouteHandler: RouteHandler<
  typeof getArchiveDeleteNetworkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getArchiveExportRouteHandler: RouteHandler<typeof getArchiveExportRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getArchiveListRouteHandler: RouteHandler<typeof getArchiveListRoute> = async (c) => {
  throw new Error('Not implemented')
}
