import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSrchIndexSearchCountServiceLogsRoute,
  getSrchIndexSearchServiceLogsRoute,
  getSrchIndexStorageDiskRoute,
  getSrchWWorkspaceIndexSearchJobRoute,
} from '../routes'

export const getSrchWWorkspaceIndexSearchJobRouteHandler: RouteHandler<
  typeof getSrchWWorkspaceIndexSearchJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSrchIndexSearchServiceLogsRouteHandler: RouteHandler<
  typeof getSrchIndexSearchServiceLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSrchIndexSearchCountServiceLogsRouteHandler: RouteHandler<
  typeof getSrchIndexSearchCountServiceLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSrchIndexStorageDiskRouteHandler: RouteHandler<
  typeof getSrchIndexStorageDiskRoute
> = async (c) => {
  throw new Error('Not implemented')
}
