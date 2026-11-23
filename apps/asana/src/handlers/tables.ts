import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTablesTableGidRoute,
  getTablesTableGidCustomFieldSettingsRoute,
  getTablesTableGidGetCustomFieldSettingsRoute,
  getTablesTableGidRecordsRoute,
  getTablesTableGidRoute,
  postTablesRoute,
  postTablesTableGidAddCustomFieldSettingRoute,
  postTablesTableGidRemoveCustomFieldSettingRoute,
  putTablesTableGidRoute,
} from '../routes'

export const getTablesTableGidRecordsRouteHandler: RouteHandler<
  typeof getTablesTableGidRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTablesRouteHandler: RouteHandler<typeof postTablesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTablesTableGidRouteHandler: RouteHandler<typeof getTablesTableGidRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putTablesTableGidRouteHandler: RouteHandler<typeof putTablesTableGidRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteTablesTableGidRouteHandler: RouteHandler<
  typeof deleteTablesTableGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTablesTableGidAddCustomFieldSettingRouteHandler: RouteHandler<
  typeof postTablesTableGidAddCustomFieldSettingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTablesTableGidRemoveCustomFieldSettingRouteHandler: RouteHandler<
  typeof postTablesTableGidRemoveCustomFieldSettingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTablesTableGidGetCustomFieldSettingsRouteHandler: RouteHandler<
  typeof getTablesTableGidGetCustomFieldSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTablesTableGidCustomFieldSettingsRouteHandler: RouteHandler<
  typeof getTablesTableGidCustomFieldSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
