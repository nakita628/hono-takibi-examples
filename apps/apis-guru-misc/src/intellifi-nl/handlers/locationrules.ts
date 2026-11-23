import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteLocationrulesIdRoute,
  getLocationrulesIdRoute,
  getLocationrulesRoute,
  postLocationrulesRoute,
  putLocationrulesIdRoute,
} from '../routes'

export const getLocationrulesRouteHandler: RouteHandler<typeof getLocationrulesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postLocationrulesRouteHandler: RouteHandler<typeof postLocationrulesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteLocationrulesIdRouteHandler: RouteHandler<
  typeof deleteLocationrulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLocationrulesIdRouteHandler: RouteHandler<typeof getLocationrulesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putLocationrulesIdRouteHandler: RouteHandler<typeof putLocationrulesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
