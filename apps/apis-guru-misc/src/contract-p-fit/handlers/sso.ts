import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSsoConfigSsoConfigIdRoute,
  getSsoConfigRoute,
  postSsoConfigRoute,
  postSsoLoginRoute,
} from '../routes'

export const getSsoConfigRouteHandler: RouteHandler<typeof getSsoConfigRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSsoConfigRouteHandler: RouteHandler<typeof postSsoConfigRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSsoConfigSsoConfigIdRouteHandler: RouteHandler<
  typeof deleteSsoConfigSsoConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSsoLoginRouteHandler: RouteHandler<typeof postSsoLoginRoute> = async (c) => {
  throw new Error('Not implemented')
}
