import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyCustomDBEngineVersionRoute,
  postActionModifyCustomDBEngineVersionRoute,
} from '../routes'

export const getActionModifyCustomDBEngineVersionRouteHandler: RouteHandler<
  typeof getActionModifyCustomDBEngineVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyCustomDBEngineVersionRouteHandler: RouteHandler<
  typeof postActionModifyCustomDBEngineVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
