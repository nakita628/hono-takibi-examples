import type { RouteHandler } from '@hono/zod-openapi'
import type { getLinesRoute } from '../routes'

export const getLinesRouteHandler: RouteHandler<typeof getLinesRoute> = async (c) => {
  throw new Error('Not implemented')
}
