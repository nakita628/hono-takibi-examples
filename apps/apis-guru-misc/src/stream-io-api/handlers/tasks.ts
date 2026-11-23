import type { RouteHandler } from '@hono/zod-openapi'
import type { getTasksIdRoute } from '../routes'

export const getTasksIdRouteHandler: RouteHandler<typeof getTasksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
