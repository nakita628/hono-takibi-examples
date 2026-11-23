import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDisableVgwRoutePropagationRoute,
  postActionDisableVgwRoutePropagationRoute,
} from '../routes'

export const getActionDisableVgwRoutePropagationRouteHandler: RouteHandler<
  typeof getActionDisableVgwRoutePropagationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDisableVgwRoutePropagationRouteHandler: RouteHandler<
  typeof postActionDisableVgwRoutePropagationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
