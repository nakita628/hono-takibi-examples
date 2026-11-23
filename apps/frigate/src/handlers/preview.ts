import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPreviewCameraNameStartStartTsEndEndTsFramesRoute,
  getPreviewCameraNameStartStartTsEndEndTsRoute,
  getPreviewFileNameThumbnailJpgRoute,
  getPreviewFileNameThumbnailWebpRoute,
  getPreviewYearMonthDayHourCameraNameTzNameRoute,
} from '../routes'

export const getPreviewCameraNameStartStartTsEndEndTsRouteHandler: RouteHandler<
  typeof getPreviewCameraNameStartStartTsEndEndTsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPreviewYearMonthDayHourCameraNameTzNameRouteHandler: RouteHandler<
  typeof getPreviewYearMonthDayHourCameraNameTzNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPreviewCameraNameStartStartTsEndEndTsFramesRouteHandler: RouteHandler<
  typeof getPreviewCameraNameStartStartTsEndEndTsFramesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPreviewFileNameThumbnailWebpRouteHandler: RouteHandler<
  typeof getPreviewFileNameThumbnailWebpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPreviewFileNameThumbnailJpgRouteHandler: RouteHandler<
  typeof getPreviewFileNameThumbnailJpgRoute
> = async (c) => {
  throw new Error('Not implemented')
}
