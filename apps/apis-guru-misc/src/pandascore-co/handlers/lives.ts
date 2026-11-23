import type { RouteHandler } from '@hono/zod-openapi'
import type { getLivesRoute } from '../routes'

export const getLivesRouteHandler: RouteHandler<typeof getLivesRoute> = async (c) => {
  throw new Error('Not implemented')
}
