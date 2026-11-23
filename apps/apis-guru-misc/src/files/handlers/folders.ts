import type { RouteHandler } from '@hono/zod-openapi'
import type { getFoldersPathRoute, postFoldersPathRoute } from '../routes'

export const getFoldersPathRouteHandler: RouteHandler<typeof getFoldersPathRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFoldersPathRouteHandler: RouteHandler<typeof postFoldersPathRoute> = async (c) => {
  throw new Error('Not implemented')
}
