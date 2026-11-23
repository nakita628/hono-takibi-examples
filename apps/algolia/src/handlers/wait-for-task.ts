import type { RouteHandler } from '@hono/zod-openapi'
import type { getWaitForTaskRoute } from '../routes'

export const getWaitForTaskRouteHandler: RouteHandler<typeof getWaitForTaskRoute> = async (c) => {
  throw new Error('Not implemented')
}
