import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteImportSubscribersRoute,
  getImportSubscribersLogsRoute,
  getImportSubscribersRoute,
  postImportSubscribersRoute,
} from '../routes'

export const getImportSubscribersRouteHandler: RouteHandler<
  typeof getImportSubscribersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postImportSubscribersRouteHandler: RouteHandler<
  typeof postImportSubscribersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteImportSubscribersRouteHandler: RouteHandler<
  typeof deleteImportSubscribersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getImportSubscribersLogsRouteHandler: RouteHandler<
  typeof getImportSubscribersLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
