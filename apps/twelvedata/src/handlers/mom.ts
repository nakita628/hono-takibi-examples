import type { RouteHandler } from '@hono/zod-openapi'
import type { getMomRoute } from '../routes'

export const getMomRouteHandler: RouteHandler<typeof getMomRoute> = async (c) => {
  throw new Error('Not implemented')
}
