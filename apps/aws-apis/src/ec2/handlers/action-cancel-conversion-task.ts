import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCancelConversionTaskRoute,
  postActionCancelConversionTaskRoute,
} from '../routes'

export const getActionCancelConversionTaskRouteHandler: RouteHandler<
  typeof getActionCancelConversionTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCancelConversionTaskRouteHandler: RouteHandler<
  typeof postActionCancelConversionTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}
