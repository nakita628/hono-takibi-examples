import type { RouteHandler } from '@hono/zod-openapi'
import type { getDocsPageRoute, getDocsSearchRoute } from '../routes'

export const getDocsSearchRouteHandler: RouteHandler<typeof getDocsSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDocsPageRouteHandler: RouteHandler<typeof getDocsPageRoute> = async (c) => {
  throw new Error('Not implemented')
}
