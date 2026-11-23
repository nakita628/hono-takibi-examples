import type { RouteHandler } from '@hono/zod-openapi'
import type { postPayFieldsRoute, postPayIndicativeQuoteRoute, postPayRoute } from '../routes'

export const postPayRouteHandler: RouteHandler<typeof postPayRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPayIndicativeQuoteRouteHandler: RouteHandler<
  typeof postPayIndicativeQuoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPayFieldsRouteHandler: RouteHandler<typeof postPayFieldsRoute> = async (c) => {
  throw new Error('Not implemented')
}
