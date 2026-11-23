import type { RouteHandler } from '@hono/zod-openapi'
import type { patchRequestBodyRoute, postRequestBodyRoute, putRequestBodyRoute } from '../routes'

export const postRequestBodyRouteHandler: RouteHandler<typeof postRequestBodyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchRequestBodyRouteHandler: RouteHandler<typeof patchRequestBodyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putRequestBodyRouteHandler: RouteHandler<typeof putRequestBodyRoute> = async (c) => {
  throw new Error('Not implemented')
}
