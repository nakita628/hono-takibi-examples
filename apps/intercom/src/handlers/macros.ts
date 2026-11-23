import type { RouteHandler } from '@hono/zod-openapi'
import type { getMacrosIdRoute, getMacrosRoute } from '../routes'

export const getMacrosIdRouteHandler: RouteHandler<typeof getMacrosIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMacrosRouteHandler: RouteHandler<typeof getMacrosRoute> = async (c) => {
  throw new Error('Not implemented')
}
