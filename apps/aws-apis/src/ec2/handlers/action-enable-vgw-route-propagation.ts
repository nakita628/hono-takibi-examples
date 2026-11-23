import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionEnableVgwRoutePropagationRoute,
  postActionEnableVgwRoutePropagationRoute,
} from '../routes'

export const getActionEnableVgwRoutePropagationRouteHandler: RouteHandler<
  typeof getActionEnableVgwRoutePropagationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionEnableVgwRoutePropagationRouteHandler: RouteHandler<
  typeof postActionEnableVgwRoutePropagationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
