import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetSerialConsoleAccessStatusRoute,
  postActionGetSerialConsoleAccessStatusRoute,
} from '../routes'

export const getActionGetSerialConsoleAccessStatusRouteHandler: RouteHandler<
  typeof getActionGetSerialConsoleAccessStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetSerialConsoleAccessStatusRouteHandler: RouteHandler<
  typeof postActionGetSerialConsoleAccessStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
