import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCanvasDataSeriesRoute,
  getCanvasDataSummaryRoute,
  getCanvasDetailsRoute,
  getCanvasListRoute,
  postCanvasTriggerScheduleCreateRoute,
} from '../routes'

export const getCanvasDataSeriesRouteHandler: RouteHandler<
  typeof getCanvasDataSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCanvasDataSummaryRouteHandler: RouteHandler<
  typeof getCanvasDataSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCanvasDetailsRouteHandler: RouteHandler<typeof getCanvasDetailsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCanvasListRouteHandler: RouteHandler<typeof getCanvasListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCanvasTriggerScheduleCreateRouteHandler: RouteHandler<
  typeof postCanvasTriggerScheduleCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
