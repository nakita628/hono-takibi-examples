import type { RouteHandler } from '@hono/zod-openapi'
import type { getMaterialRoute, getMaterialSearchRoute, postMaterialSearchRoute } from '../routes'

export const getMaterialRouteHandler: RouteHandler<typeof getMaterialRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMaterialSearchRouteHandler: RouteHandler<typeof getMaterialSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postMaterialSearchRouteHandler: RouteHandler<typeof postMaterialSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
