import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteMacsIdRoute, getMacsIdRoute, getMacsRoute, postMacsRoute } from '../routes'

export const getMacsRouteHandler: RouteHandler<typeof getMacsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMacsRouteHandler: RouteHandler<typeof postMacsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMacsIdRouteHandler: RouteHandler<typeof deleteMacsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMacsIdRouteHandler: RouteHandler<typeof getMacsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
