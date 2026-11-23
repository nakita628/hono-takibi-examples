import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInexplicitNumberOrdersIdRoute,
  getInexplicitNumberOrdersRoute,
  postInexplicitNumberOrdersRoute,
} from '../routes'

export const getInexplicitNumberOrdersRouteHandler: RouteHandler<
  typeof getInexplicitNumberOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInexplicitNumberOrdersRouteHandler: RouteHandler<
  typeof postInexplicitNumberOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInexplicitNumberOrdersIdRouteHandler: RouteHandler<
  typeof getInexplicitNumberOrdersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
