import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionEnableSerialConsoleAccessRoute,
  postActionEnableSerialConsoleAccessRoute,
} from '../routes'

export const getActionEnableSerialConsoleAccessRouteHandler: RouteHandler<
  typeof getActionEnableSerialConsoleAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionEnableSerialConsoleAccessRouteHandler: RouteHandler<
  typeof postActionEnableSerialConsoleAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}
