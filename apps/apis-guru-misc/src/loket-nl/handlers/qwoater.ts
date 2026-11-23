import type { RouteHandler } from '@hono/zod-openapi'
import type { getQwoaterEmployersRoute } from '../routes'

export const getQwoaterEmployersRouteHandler: RouteHandler<
  typeof getQwoaterEmployersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
