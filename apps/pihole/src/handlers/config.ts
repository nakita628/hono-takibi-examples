import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteConfigElementValueRoute,
  getConfigElementRoute,
  getConfigPropertiesRoute,
  getConfigRoute,
  patchConfigRoute,
  putConfigElementValueRoute,
} from '../routes'

export const getConfigRouteHandler: RouteHandler<typeof getConfigRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchConfigRouteHandler: RouteHandler<typeof patchConfigRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getConfigPropertiesRouteHandler: RouteHandler<
  typeof getConfigPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConfigElementRouteHandler: RouteHandler<typeof getConfigElementRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putConfigElementValueRouteHandler: RouteHandler<
  typeof putConfigElementValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteConfigElementValueRouteHandler: RouteHandler<
  typeof deleteConfigElementValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}
