import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAdvancedGuidRoute,
  getAdvancedGuidRoute,
  getAdvancedRoute,
  postAdvancedRoute,
  putAdvancedGuidRoute,
} from '../routes'

export const getAdvancedRouteHandler: RouteHandler<typeof getAdvancedRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdvancedRouteHandler: RouteHandler<typeof postAdvancedRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdvancedGuidRouteHandler: RouteHandler<typeof getAdvancedGuidRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdvancedGuidRouteHandler: RouteHandler<typeof putAdvancedGuidRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdvancedGuidRouteHandler: RouteHandler<typeof deleteAdvancedGuidRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
