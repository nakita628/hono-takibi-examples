import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInfoApiRoute,
  getInfoStatIndexRoute,
  getInfoStatZoneRoute,
  getInfoTldIndexRoute,
  getInfoTldZoneRoute,
} from '../routes'

export const getInfoApiRouteHandler: RouteHandler<typeof getInfoApiRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInfoStatIndexRouteHandler: RouteHandler<typeof getInfoStatIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getInfoStatZoneRouteHandler: RouteHandler<typeof getInfoStatZoneRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInfoTldIndexRouteHandler: RouteHandler<typeof getInfoTldIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInfoTldZoneRouteHandler: RouteHandler<typeof getInfoTldZoneRoute> = async (c) => {
  throw new Error('Not implemented')
}
