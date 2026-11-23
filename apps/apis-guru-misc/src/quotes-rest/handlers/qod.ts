import type { RouteHandler } from '@hono/zod-openapi'
import type { getQodCategoriesRoute, getQodLanguagesRoute, getQodRoute } from '../routes'

export const getQodRouteHandler: RouteHandler<typeof getQodRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getQodCategoriesRouteHandler: RouteHandler<typeof getQodCategoriesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getQodLanguagesRouteHandler: RouteHandler<typeof getQodLanguagesRoute> = async (c) => {
  throw new Error('Not implemented')
}
