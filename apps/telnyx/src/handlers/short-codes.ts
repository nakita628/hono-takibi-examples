import type { RouteHandler } from '@hono/zod-openapi'
import type { getShortCodesIdRoute, getShortCodesRoute, patchShortCodesIdRoute } from '../routes'

export const getShortCodesRouteHandler: RouteHandler<typeof getShortCodesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getShortCodesIdRouteHandler: RouteHandler<typeof getShortCodesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchShortCodesIdRouteHandler: RouteHandler<typeof patchShortCodesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
