import type { RouteHandler } from '@hono/zod-openapi'
import type { getLichessRoute } from '../routes'

export const getLichessRouteHandler: RouteHandler<typeof getLichessRoute> = async (c) => {
  throw new Error('Not implemented')
}
