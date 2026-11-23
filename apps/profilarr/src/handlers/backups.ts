import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBackupsFilenameRoute,
  getBackupsFilenameRoute,
  getBackupsRoute,
  getBackupsSettingsRoute,
  patchBackupsSettingsRoute,
  postBackupsRoute,
  postBackupsUploadRoute,
} from '../routes'

export const getBackupsRouteHandler: RouteHandler<typeof getBackupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBackupsRouteHandler: RouteHandler<typeof postBackupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBackupsFilenameRouteHandler: RouteHandler<typeof getBackupsFilenameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteBackupsFilenameRouteHandler: RouteHandler<
  typeof deleteBackupsFilenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBackupsUploadRouteHandler: RouteHandler<typeof postBackupsUploadRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBackupsSettingsRouteHandler: RouteHandler<typeof getBackupsSettingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchBackupsSettingsRouteHandler: RouteHandler<
  typeof patchBackupsSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
