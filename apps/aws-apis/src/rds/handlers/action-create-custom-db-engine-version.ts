import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateCustomDBEngineVersionRoute,
  postActionCreateCustomDBEngineVersionRoute,
} from '../routes'

export const getActionCreateCustomDBEngineVersionRouteHandler: RouteHandler<
  typeof getActionCreateCustomDBEngineVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateCustomDBEngineVersionRouteHandler: RouteHandler<
  typeof postActionCreateCustomDBEngineVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
