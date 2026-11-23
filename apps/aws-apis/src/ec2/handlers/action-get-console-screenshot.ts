import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetConsoleScreenshotRoute,
  postActionGetConsoleScreenshotRoute,
} from '../routes'

export const getActionGetConsoleScreenshotRouteHandler: RouteHandler<
  typeof getActionGetConsoleScreenshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetConsoleScreenshotRouteHandler: RouteHandler<
  typeof postActionGetConsoleScreenshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}
