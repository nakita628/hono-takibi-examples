import type { RouteHandler } from '@hono/zod-openapi'
import type { getWeaponRoute, getWeaponSearchRoute, postWeaponSearchRoute } from '../routes'

export const getWeaponRouteHandler: RouteHandler<typeof getWeaponRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getWeaponSearchRouteHandler: RouteHandler<typeof getWeaponSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postWeaponSearchRouteHandler: RouteHandler<typeof postWeaponSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
