import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInventoryTaskRoute,
  getInventoryTaskTaskIdRoute,
  postInventoryTaskRoute,
} from '../routes'

export const getInventoryTaskRouteHandler: RouteHandler<typeof getInventoryTaskRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postInventoryTaskRouteHandler: RouteHandler<typeof postInventoryTaskRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getInventoryTaskTaskIdRouteHandler: RouteHandler<
  typeof getInventoryTaskTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
