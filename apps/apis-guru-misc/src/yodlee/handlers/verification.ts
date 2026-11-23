import type { RouteHandler } from '@hono/zod-openapi'
import type { getVerificationRoute, postVerificationRoute, putVerificationRoute } from '../routes'

export const getVerificationRouteHandler: RouteHandler<typeof getVerificationRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postVerificationRouteHandler: RouteHandler<typeof postVerificationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putVerificationRouteHandler: RouteHandler<typeof putVerificationRoute> = async (c) => {
  throw new Error('Not implemented')
}
