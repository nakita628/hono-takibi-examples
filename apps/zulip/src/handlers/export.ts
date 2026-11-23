import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteExportRealmExportIdRoute,
  getExportRealmConsentsRoute,
  getExportRealmRoute,
  postExportRealmRoute,
} from '../routes'

export const deleteExportRealmExportIdRouteHandler: RouteHandler<
  typeof deleteExportRealmExportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getExportRealmRouteHandler: RouteHandler<typeof getExportRealmRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postExportRealmRouteHandler: RouteHandler<typeof postExportRealmRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getExportRealmConsentsRouteHandler: RouteHandler<
  typeof getExportRealmConsentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
