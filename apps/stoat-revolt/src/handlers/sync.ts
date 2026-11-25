import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postSyncSettingsFetchRoute,
  postSyncSettingsSetRoute,
  getSyncUnreadsRoute,
} from '../routes'

export const postSyncSettingsFetchRouteHandler: RouteHandler<
  typeof postSyncSettingsFetchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSyncSettingsSetRouteHandler: RouteHandler<
  typeof postSyncSettingsSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSyncUnreadsRouteHandler: RouteHandler<typeof getSyncUnreadsRoute> = async (c) => {
  throw new Error('Not implemented')
}
