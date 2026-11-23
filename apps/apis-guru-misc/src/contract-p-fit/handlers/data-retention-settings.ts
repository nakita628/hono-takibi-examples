import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDataRetentionSettingsLevelIdRoute,
  getDataRetentionSettingsLevelIdRoute,
  getDataRetentionSettingsRoute,
  patchDataRetentionSettingsLevelIdRoute,
} from '../routes'

export const getDataRetentionSettingsRouteHandler: RouteHandler<
  typeof getDataRetentionSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDataRetentionSettingsLevelIdRouteHandler: RouteHandler<
  typeof deleteDataRetentionSettingsLevelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDataRetentionSettingsLevelIdRouteHandler: RouteHandler<
  typeof getDataRetentionSettingsLevelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDataRetentionSettingsLevelIdRouteHandler: RouteHandler<
  typeof patchDataRetentionSettingsLevelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
