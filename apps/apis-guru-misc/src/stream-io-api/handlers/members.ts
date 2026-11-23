import type { RouteHandler } from '@hono/zod-openapi'
import type { getMembersRoute } from '../routes'

export const getMembersRouteHandler: RouteHandler<typeof getMembersRoute> = async (c) => {
  throw new Error('Not implemented')
}
