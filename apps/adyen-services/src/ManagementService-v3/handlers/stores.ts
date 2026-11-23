import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStoresRoute,
  getStoresStoreIdRoute,
  getStoresStoreIdTerminalLogosRoute,
  getStoresStoreIdTerminalSettingsRoute,
  patchStoresStoreIdRoute,
  patchStoresStoreIdTerminalLogosRoute,
  patchStoresStoreIdTerminalSettingsRoute,
  postStoresRoute,
  postStoresStoreIdTerminalThemesIdApplyRoute,
  postStoresStoreIdTerminalThemesUnapplyRoute,
} from '../routes'

export const getStoresRouteHandler: RouteHandler<typeof getStoresRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postStoresRouteHandler: RouteHandler<typeof postStoresRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStoresStoreIdRouteHandler: RouteHandler<typeof getStoresStoreIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchStoresStoreIdRouteHandler: RouteHandler<typeof patchStoresStoreIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getStoresStoreIdTerminalLogosRouteHandler: RouteHandler<
  typeof getStoresStoreIdTerminalLogosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStoresStoreIdTerminalLogosRouteHandler: RouteHandler<
  typeof patchStoresStoreIdTerminalLogosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStoresStoreIdTerminalSettingsRouteHandler: RouteHandler<
  typeof getStoresStoreIdTerminalSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStoresStoreIdTerminalSettingsRouteHandler: RouteHandler<
  typeof patchStoresStoreIdTerminalSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStoresStoreIdTerminalThemesUnapplyRouteHandler: RouteHandler<
  typeof postStoresStoreIdTerminalThemesUnapplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStoresStoreIdTerminalThemesIdApplyRouteHandler: RouteHandler<
  typeof postStoresStoreIdTerminalThemesIdApplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
