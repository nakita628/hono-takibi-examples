import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDrivesDriveIdRoute,
  getDrivesDriveIdRoute,
  getDrivesRoute,
  patchDrivesDriveIdRoute,
  postDrivesDriveIdHideRoute,
  postDrivesDriveIdUnhideRoute,
  postDrivesRoute,
} from '../routes'

export const getDrivesRouteHandler: RouteHandler<typeof getDrivesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDrivesRouteHandler: RouteHandler<typeof postDrivesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDrivesDriveIdRouteHandler: RouteHandler<
  typeof deleteDrivesDriveIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDrivesDriveIdRouteHandler: RouteHandler<typeof getDrivesDriveIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchDrivesDriveIdRouteHandler: RouteHandler<typeof patchDrivesDriveIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postDrivesDriveIdHideRouteHandler: RouteHandler<
  typeof postDrivesDriveIdHideRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDrivesDriveIdUnhideRouteHandler: RouteHandler<
  typeof postDrivesDriveIdUnhideRoute
> = async (c) => {
  throw new Error('Not implemented')
}
