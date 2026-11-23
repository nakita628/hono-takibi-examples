import type { RouteHandler } from '@hono/zod-openapi'
import type { getDocsHealthRoute, getDocsOpenapiJsonRoute, getDocsRoute } from '../routes'

export const getDocsRouteHandler: RouteHandler<typeof getDocsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDocsOpenapiJsonRouteHandler: RouteHandler<typeof getDocsOpenapiJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDocsHealthRouteHandler: RouteHandler<typeof getDocsHealthRoute> = async (c) => {
  throw new Error('Not implemented')
}
