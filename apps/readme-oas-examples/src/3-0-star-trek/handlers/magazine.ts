import type { RouteHandler } from '@hono/zod-openapi'
import type { getMagazineRoute, getMagazineSearchRoute, postMagazineSearchRoute } from '../routes'

export const getMagazineRouteHandler: RouteHandler<typeof getMagazineRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMagazineSearchRouteHandler: RouteHandler<typeof getMagazineSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postMagazineSearchRouteHandler: RouteHandler<typeof postMagazineSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
