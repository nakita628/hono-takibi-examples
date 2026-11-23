import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAdminFileIndexRoute,
  getAdminAppsIndexRoute,
  getAdminFileIndexRoute,
  getAdminFileUsedByIndexRoute,
  getAdminModelsIndexRoute,
  getAdminSettingsIndexRoute,
  getAdminSystemIndexRoute,
  getAdminVersionHistoryIdIndexRoute,
  getAdminVersionHistoryIndexRoute,
  getAdminVersionIndexRoute,
  patchAdminSettingsIndexRoute,
  postAdminFileIndexRoute,
  postAdminSystemIndexRoute,
  putAdminSettingsIndexRoute,
} from '../routes'

export const getAdminAppsIndexRouteHandler: RouteHandler<typeof getAdminAppsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAdminFileIndexRouteHandler: RouteHandler<typeof getAdminFileIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdminFileIndexRouteHandler: RouteHandler<typeof postAdminFileIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteAdminFileIndexRouteHandler: RouteHandler<
  typeof deleteAdminFileIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminFileUsedByIndexRouteHandler: RouteHandler<
  typeof getAdminFileUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminModelsIndexRouteHandler: RouteHandler<
  typeof getAdminModelsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminSettingsIndexRouteHandler: RouteHandler<
  typeof getAdminSettingsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminSettingsIndexRouteHandler: RouteHandler<
  typeof putAdminSettingsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminSettingsIndexRouteHandler: RouteHandler<
  typeof patchAdminSettingsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminSystemIndexRouteHandler: RouteHandler<
  typeof getAdminSystemIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminSystemIndexRouteHandler: RouteHandler<
  typeof postAdminSystemIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminVersionIndexRouteHandler: RouteHandler<
  typeof getAdminVersionIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminVersionHistoryIndexRouteHandler: RouteHandler<
  typeof getAdminVersionHistoryIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminVersionHistoryIdIndexRouteHandler: RouteHandler<
  typeof getAdminVersionHistoryIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
