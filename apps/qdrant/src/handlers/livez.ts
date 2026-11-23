import type { RouteHandler } from '@hono/zod-openapi'
import type { getLivezRoute } from '../routes'

export const getLivezRouteHandler: RouteHandler<typeof getLivezRoute> = async (c) => {
  throw new Error('Not implemented')
}
