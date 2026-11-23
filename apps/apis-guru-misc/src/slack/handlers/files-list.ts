import type { RouteHandler } from '@hono/zod-openapi'
import type { getFilesListRoute } from '../routes'

export const getFilesListRouteHandler: RouteHandler<typeof getFilesListRoute> = async (c) => {
  throw new Error('Not implemented')
}
