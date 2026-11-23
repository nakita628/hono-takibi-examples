import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getNumberBlockOrdersNumberBlockOrderIdRoute,
  getNumberBlockOrdersRoute,
  postNumberBlockOrdersRoute,
} from '../routes'

export const getNumberBlockOrdersRouteHandler: RouteHandler<
  typeof getNumberBlockOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNumberBlockOrdersRouteHandler: RouteHandler<
  typeof postNumberBlockOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNumberBlockOrdersNumberBlockOrderIdRouteHandler: RouteHandler<
  typeof getNumberBlockOrdersNumberBlockOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
