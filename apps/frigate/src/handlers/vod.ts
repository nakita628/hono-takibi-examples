import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getVodCameraNameStartStartTsEndEndTsRoute,
  getVodCameraNameStreamStartStartTsEndEndTsRoute,
  getVodClipCameraNameStartStartTsEndEndTsRoute,
  getVodEventEventIdRoute,
  getVodYearMonthDayHourCameraNameRoute,
  getVodYearMonthDayHourCameraNameTzNameRoute,
} from '../routes'

export const getVodCameraNameStartStartTsEndEndTsRouteHandler: RouteHandler<
  typeof getVodCameraNameStartStartTsEndEndTsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVodYearMonthDayHourCameraNameRouteHandler: RouteHandler<
  typeof getVodYearMonthDayHourCameraNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVodYearMonthDayHourCameraNameTzNameRouteHandler: RouteHandler<
  typeof getVodYearMonthDayHourCameraNameTzNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVodEventEventIdRouteHandler: RouteHandler<typeof getVodEventEventIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getVodClipCameraNameStartStartTsEndEndTsRouteHandler: RouteHandler<
  typeof getVodClipCameraNameStartStartTsEndEndTsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVodCameraNameStreamStartStartTsEndEndTsRouteHandler: RouteHandler<
  typeof getVodCameraNameStreamStartStartTsEndEndTsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
