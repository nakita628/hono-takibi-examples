import type { RouteHandler } from '@hono/zod-openapi'
import type { getSpeakerInfoRoute } from '../routes'

export const getSpeakerInfoRouteHandler: RouteHandler<typeof getSpeakerInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
