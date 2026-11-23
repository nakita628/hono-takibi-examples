import type { RouteHandler } from '@hono/zod-openapi'
import type { getFilesInfoRoute } from '../routes'

export const getFilesInfoRouteHandler: RouteHandler<typeof getFilesInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
