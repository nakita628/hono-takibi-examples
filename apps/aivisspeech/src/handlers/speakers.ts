import type { RouteHandler } from '@hono/zod-openapi'
import type { getSpeakersRoute } from '../routes'

export const getSpeakersRouteHandler: RouteHandler<typeof getSpeakersRoute> = async (c) => {
  throw new Error('Not implemented')
}
