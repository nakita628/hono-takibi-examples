import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDisableSerialConsoleAccessRoute,
  postActionDisableSerialConsoleAccessRoute,
} from '../routes'

export const getActionDisableSerialConsoleAccessRouteHandler: RouteHandler<
  typeof getActionDisableSerialConsoleAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDisableSerialConsoleAccessRouteHandler: RouteHandler<
  typeof postActionDisableSerialConsoleAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}
