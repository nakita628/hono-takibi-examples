import type { RouteHandler } from '@hono/zod-openapi'
import type { getLawsRoute } from '../routes'

export const getLawsRouteHandler: RouteHandler<typeof getLawsRoute> = async (c) => {
  throw new Error('Not implemented')
}
