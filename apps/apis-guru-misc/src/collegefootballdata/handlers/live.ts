import type { RouteHandler } from '@hono/zod-openapi'
import type { getLivePlaysRoute } from '../routes'

export const getLivePlaysRouteHandler: RouteHandler<typeof getLivePlaysRoute> = async (c) => {
  throw new Error('Not implemented')
}
