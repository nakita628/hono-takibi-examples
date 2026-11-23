import type { RouteHandler } from '@hono/zod-openapi'
import type { getSingersRoute } from '../routes'

export const getSingersRouteHandler: RouteHandler<typeof getSingersRoute> = async (c) => {
  throw new Error('Not implemented')
}
