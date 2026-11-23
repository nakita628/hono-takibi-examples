import type { RouteHandler } from '@hono/zod-openapi'
import type { getIdApiRoute, getIdDownloadRoute } from '../routes'

export const getIdApiRouteHandler: RouteHandler<typeof getIdApiRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdDownloadRouteHandler: RouteHandler<typeof getIdDownloadRoute> = async (c) => {
  throw new Error('Not implemented')
}
