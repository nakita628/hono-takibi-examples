import type { RouteHandler } from '@hono/zod-openapi'
import type {
  patchExportEventIdRenameRoute,
  postExportCameraNameStartStartTimeEndEndTimeRoute,
  postExportCustomCameraNameStartStartTimeEndEndTimeRoute,
} from '../routes'

export const postExportCameraNameStartStartTimeEndEndTimeRouteHandler: RouteHandler<
  typeof postExportCameraNameStartStartTimeEndEndTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchExportEventIdRenameRouteHandler: RouteHandler<
  typeof patchExportEventIdRenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postExportCustomCameraNameStartStartTimeEndEndTimeRouteHandler: RouteHandler<
  typeof postExportCustomCameraNameStartStartTimeEndEndTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
