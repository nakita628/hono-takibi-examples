import type { RouteHandler } from '@hono/zod-openapi'
import type { getLiveRoute } from '../routes'

export const getLiveRouteHandler: RouteHandler<typeof getLiveRoute> = async (c) => {
  throw new Error('Not implemented')
}
