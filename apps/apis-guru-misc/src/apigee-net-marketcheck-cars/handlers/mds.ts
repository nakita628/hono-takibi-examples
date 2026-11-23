import type { RouteHandler } from '@hono/zod-openapi'
import type { getMdsCarRoute } from '../routes'

export const getMdsCarRouteHandler: RouteHandler<typeof getMdsCarRoute> = async (c) => {
  throw new Error('Not implemented')
}
