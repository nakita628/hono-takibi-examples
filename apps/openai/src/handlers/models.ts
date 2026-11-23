import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteModelsModelRoute, getModelsModelRoute, getModelsRoute } from '../routes'

export const getModelsRouteHandler: RouteHandler<typeof getModelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getModelsModelRouteHandler: RouteHandler<typeof getModelsModelRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteModelsModelRouteHandler: RouteHandler<typeof deleteModelsModelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
