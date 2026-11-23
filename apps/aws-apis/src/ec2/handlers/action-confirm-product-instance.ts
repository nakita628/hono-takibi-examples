import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionConfirmProductInstanceRoute,
  postActionConfirmProductInstanceRoute,
} from '../routes'

export const getActionConfirmProductInstanceRouteHandler: RouteHandler<
  typeof getActionConfirmProductInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionConfirmProductInstanceRouteHandler: RouteHandler<
  typeof postActionConfirmProductInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
