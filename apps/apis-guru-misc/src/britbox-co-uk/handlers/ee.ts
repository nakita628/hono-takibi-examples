import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEePlansIdRoute,
  getEePlansRoute,
  getEeTokenCreateRoute,
  postEeMsisdnRoute,
  postEeOffersRoute,
  postEePinRoute,
  putEePinRoute,
} from '../routes'

export const postEeMsisdnRouteHandler: RouteHandler<typeof postEeMsisdnRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postEeOffersRouteHandler: RouteHandler<typeof postEeOffersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postEePinRouteHandler: RouteHandler<typeof postEePinRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putEePinRouteHandler: RouteHandler<typeof putEePinRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEePlansRouteHandler: RouteHandler<typeof getEePlansRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEePlansIdRouteHandler: RouteHandler<typeof getEePlansIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEeTokenCreateRouteHandler: RouteHandler<typeof getEeTokenCreateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
