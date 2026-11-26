import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPluginsRoute,
  getPluginsMethodsRoute,
  getPluginsTemplatesRoute,
  getPluginsIdRoute,
} from '../routes'

export const getPluginsRouteHandler: RouteHandler<typeof getPluginsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMethodsRouteHandler: RouteHandler<typeof getPluginsMethodsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPluginsTemplatesRouteHandler: RouteHandler<
  typeof getPluginsTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsIdRouteHandler: RouteHandler<typeof getPluginsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
