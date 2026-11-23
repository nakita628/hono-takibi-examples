import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCardsCardIdRoute,
  getCardsCardIdOrdersRoute,
  getCardsCardIdRoute,
  getCardsRoute,
  postCardsCardIdOrdersRoute,
  postCardsCardIdRoute,
  postCardsRoute,
} from '../routes'

export const getCardsRouteHandler: RouteHandler<typeof getCardsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCardsRouteHandler: RouteHandler<typeof postCardsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCardsCardIdRouteHandler: RouteHandler<typeof getCardsCardIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCardsCardIdRouteHandler: RouteHandler<typeof postCardsCardIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCardsCardIdRouteHandler: RouteHandler<typeof deleteCardsCardIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCardsCardIdOrdersRouteHandler: RouteHandler<
  typeof getCardsCardIdOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCardsCardIdOrdersRouteHandler: RouteHandler<
  typeof postCardsCardIdOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
