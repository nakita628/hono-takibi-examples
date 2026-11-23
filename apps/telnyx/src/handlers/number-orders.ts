import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getNumberOrdersNumberOrderIdRoute,
  getNumberOrdersRoute,
  patchNumberOrdersNumberOrderIdRoute,
  postNumberOrdersRoute,
} from '../routes'

export const getNumberOrdersRouteHandler: RouteHandler<typeof getNumberOrdersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postNumberOrdersRouteHandler: RouteHandler<typeof postNumberOrdersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getNumberOrdersNumberOrderIdRouteHandler: RouteHandler<
  typeof getNumberOrdersNumberOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchNumberOrdersNumberOrderIdRouteHandler: RouteHandler<
  typeof patchNumberOrdersNumberOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
