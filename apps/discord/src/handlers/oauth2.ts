import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOauth2MeRoute,
  getOauth2ApplicationsMeRoute,
  getOauth2KeysRoute,
  getOauth2UserinfoRoute,
} from '../routes'

export const getOauth2MeRouteHandler: RouteHandler<typeof getOauth2MeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getOauth2ApplicationsMeRouteHandler: RouteHandler<
  typeof getOauth2ApplicationsMeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOauth2KeysRouteHandler: RouteHandler<typeof getOauth2KeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getOauth2UserinfoRouteHandler: RouteHandler<typeof getOauth2UserinfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
