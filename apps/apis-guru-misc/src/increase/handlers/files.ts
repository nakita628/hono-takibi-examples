import type { RouteHandler } from '@hono/zod-openapi'
import type { getFilesFileIdRoute, getFilesRoute, postFilesRoute } from '../routes'

export const getFilesRouteHandler: RouteHandler<typeof getFilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFilesRouteHandler: RouteHandler<typeof postFilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFilesFileIdRouteHandler: RouteHandler<typeof getFilesFileIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
