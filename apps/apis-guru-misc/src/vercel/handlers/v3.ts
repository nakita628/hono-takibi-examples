import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV3UserTokensTokenIdRoute,
  getV3EventsRoute,
  getV3SecretsIdOrNameRoute,
  getV3SecretsRoute,
  postV3UserTokensRoute,
} from '../routes'

export const getV3EventsRouteHandler: RouteHandler<typeof getV3EventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV3SecretsRouteHandler: RouteHandler<typeof getV3SecretsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV3SecretsIdOrNameRouteHandler: RouteHandler<
  typeof getV3SecretsIdOrNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV3UserTokensRouteHandler: RouteHandler<typeof postV3UserTokensRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV3UserTokensTokenIdRouteHandler: RouteHandler<
  typeof deleteV3UserTokensTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
