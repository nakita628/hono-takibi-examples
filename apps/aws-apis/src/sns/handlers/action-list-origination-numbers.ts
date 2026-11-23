import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListOriginationNumbersRoute,
  postActionListOriginationNumbersRoute,
} from '../routes'

export const getActionListOriginationNumbersRouteHandler: RouteHandler<
  typeof getActionListOriginationNumbersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListOriginationNumbersRouteHandler: RouteHandler<
  typeof postActionListOriginationNumbersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
