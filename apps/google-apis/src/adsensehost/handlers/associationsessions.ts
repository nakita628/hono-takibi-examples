import type { RouteHandler } from '@hono/zod-openapi'
import type { getAssociationsessionsStartRoute, getAssociationsessionsVerifyRoute } from '../routes'

export const getAssociationsessionsStartRouteHandler: RouteHandler<
  typeof getAssociationsessionsStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssociationsessionsVerifyRouteHandler: RouteHandler<
  typeof getAssociationsessionsVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
