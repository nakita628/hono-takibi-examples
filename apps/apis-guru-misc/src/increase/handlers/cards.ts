import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCardsCardIdDetailsRoute,
  getCardsCardIdRoute,
  getCardsRoute,
  patchCardsCardIdRoute,
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

export const patchCardsCardIdRouteHandler: RouteHandler<typeof patchCardsCardIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCardsCardIdDetailsRouteHandler: RouteHandler<
  typeof getCardsCardIdDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
