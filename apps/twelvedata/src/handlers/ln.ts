import type { RouteHandler } from '@hono/zod-openapi'
import type { getLnRoute } from '../routes'

export const getLnRouteHandler: RouteHandler<typeof getLnRoute> = async (c) => {
  throw new Error('Not implemented')
}
